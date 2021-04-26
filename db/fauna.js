const faunadb = require('faunadb')
const {query} = faunadb;
const client = new faunadb.Client({
  secret: import.meta.env.SNOWPACK_PUBLIC_FAUNADB_SECRET
})

module.exports = {query, client};