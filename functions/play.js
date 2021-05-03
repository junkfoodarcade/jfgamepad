const client = require('../config/db')
exports.handler = async (event) => {
  const sessionId = event.queryStringParameters.d
  await client.connect()
  const cursor = client.db('JunkFood').collection('data').find({
    sessionId: sessionId,
  })
  const data = cursor.toArray();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
