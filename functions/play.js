const { query, client } = require('../config/fauna')

exports.handler = (event) => {
  const d = event.queryStringParameters.d

  client.query(query.Get(query.Ref(query.Collection('entries'), d))).then((res) =>
    ({
      statusCode: 200,
      res,
    }).catch((err) => ({
      statusCode: 400,
      err,
    }))
  )
}
