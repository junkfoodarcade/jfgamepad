const faunadb = require('faunadb')

/* configure faunaDB Client with our secret */
const q = faunadb.query
const client = new faunadb.Client({
  secret: 'fnAEAn3pMzACArbfSOO4uxJVpMnohIrxaI9m-Twi',
})

exports.handler = (event) => {
  const d = event.queryStringParameters.d.split('|');
  console.log(d);
  const item = {
    data: {
      _createdAt: d[0] -0,
      btn: d[1]
    }
  }
  return client
    .query(
      q.Create(q.Collection('entries'), item)
    )
    .then((response) => {
      console.log('success')
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
