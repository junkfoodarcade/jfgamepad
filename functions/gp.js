const faunadb = require('faunadb')

/* configure faunaDB Client with our secret */
const q = faunadb.query
const client = new faunadb.Client({
  secret: 'fnAEAn3pMzACArbfSOO4uxJVpMnohIrxaI9m-Twi',
})

exports.handler = (event) => {
  return client
    .query(
      q.Create(q.Collection('user'), {
        name: event.queryStringParameters.d,
        username: event.queryStringParameters.d,
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
