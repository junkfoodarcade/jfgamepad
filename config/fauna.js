const faunadb = require('faunadb')
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.SNOWPACK_PUBLIC_FAUNADB_SECRET
})

module.exports = {q, client};