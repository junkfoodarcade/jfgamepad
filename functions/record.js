const { client } = require('../config/db')

exports.handler = async (event) => {
  const d = event.queryStringParameters.d
  const [sid,btn,ts] = d.split('|');
  await client.connect();
  const db =client.db('JunkFood');
  const data = db.collection('data');
  let item = {
    "_createdAt": ts,
    "sessionId": sid,
    btn
  };
  const b = await data.insertOne(item);
  const myDoc = await data.findOne();
  console.log(myDoc);
}
