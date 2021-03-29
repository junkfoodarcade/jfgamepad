const faunadb = require('faunadb')

/* configure faunaDB Client with our secret */
const q = faunadb.query
const client = new faunadb.Client({
  secret: 'fnAEAn3pMzACArbfSOO4uxJVpMnohIrxaI9m-Twi',
})

exports.handler = (event) => {
  const d = event.queryStringParameters.d.split('|');
  return client
    .query(
      q.Create(q.Collection('user'), {
        name: d[0],
        username: d[1],
      })
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
