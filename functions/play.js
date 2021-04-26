const { query, client } = require('../db/fauna')

exports.handler = (event) => {
  const d = event.queryStringParameters.d

  client.query(query.Get(q.Ref(q.Collection('entries'), d))).then((res) =>
    ({
      statusCode: 200,
      res,
    }.catch((err) => ({
      statusCode: 400,
      err,
    })))
  )
}
