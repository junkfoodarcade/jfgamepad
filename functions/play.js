import { connect, db } from '../config/db';

export async function handler(event) {
  const sessionId = event.queryStringParameters.d
  await connect();
  const data = db('JunkFood').collection('data').find({sessionId:sessionId})
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }

}
