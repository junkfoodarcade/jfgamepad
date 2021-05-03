const client = require('../config/db')
exports.handler = async (event) => {
  const sessionId = event.queryStringParameters.d
  await client.connect();
  const data = client.db('JunkFood').collection('data')
  .find(
    {
      sessionId: "ea406704-2a8e-4c7f-b1ef-1ab785dcd1e2"
    })
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }

}
