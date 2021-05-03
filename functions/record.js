const client  = require('../config/db')

exports.handler = async (event) => {
  const d = event.queryStringParameters.d
  const [ts,btn,sid] = d.split('|');
  await client.connect();
  const db =client.db('JunkFood');
  const data = db.collection('data');
  let item = {
    "_createdAt": +ts,
    "sessionId": sid,
    btn: +btn
  };
  const {insertedId} = await data.insertOne(item);
  return {
    statusCode: 200,
    body: JSON.stringify({id:insertedId})
  }
}
