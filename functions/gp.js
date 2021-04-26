const { query, client } = require('../db/fauna')

exports.handler = (event) => {
  const d = event.queryStringParameters.d.split('|')
  const item = {
    data: {
      _createdAt: d[0] - 0,
      btn: d[1],
      sessionId: d[2],
      userId=d[3]
    },
  }
  return client
    .query(query.Create(query.Collection('entries'), item))
    .then((response) => {
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      }
    })
    .catch((err) => {
      return {
        statusCode: 400,
        body: JSON.stringify(err),
      }
    })
}
