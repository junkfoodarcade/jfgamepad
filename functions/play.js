const { q, client } = require('../config/fauna')

exports.handler = (event) => {
  const d = event.queryStringParameters.d

  client
    .query(
        q.Paginate(
          q.Match(
            q.Index('session_ind'), d
          )
        )
      )
    .then((res) => {
      console.log(JSON.stringify(res.data));
       return JSON.stringify(res.data)
    })
    .catch((err) => {
      return {
        statusCode: 400,
        err,
      }
    })
}
