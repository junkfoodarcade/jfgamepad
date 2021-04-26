const faunadb = require('faunadb')
const {query} = faunadb;
const client = new faunadb.Client({
  secret: process.env.SNOWPACK_PUBLIC_FAUNADB_SECRET
})

module.exports = {query, client};