const client = require('../config/db')
exports.handler = async (event) => {
  const sessionId = event.queryStringParameters.d
  await client.connect();
  const data = client.db('JunkFood').collection('data').find({sessionId:sessionId})

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }

}
