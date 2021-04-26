const { q, client } = require('../config/fauna')

exports.handler = (event) => {
  const d = event.queryStringParameters.d

  client
    .query(q.Map(q.Paginate(q.Match(q.Index('session_ind'), d))))
    .then((res) => {
      console.log(JSON.stringify(res))
      return {
        statusCode: 200,
       res
      }
    })
    .catch((err) => {
      return {
        statusCode: 400,
        err,
      }
    })
}
