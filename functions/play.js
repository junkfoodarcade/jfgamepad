const { q, client } = require('../config/fauna')

exports.handler = async (event) => {
  console.log('Start')
  const d = event.queryStringParameters.d
  const res = await client.query(q.Match(q.Index('session_ind', d)))
  console.log(res)
  console.log(JSON.stringify(res));
  return {
    statusCode: 200,
    body: res
  }
}
