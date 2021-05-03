const client  = require('../config/db')

exports.handler = async (event) => {
  const sessionId = event.queryStringParameters.d
  await client.connect();
  const db =client.db('JunkFood');
  const collection = db.collection('data');
  const data = collection.find({sessionId:sessionId});

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }

}
