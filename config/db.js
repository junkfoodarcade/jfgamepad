const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://gary:pq0qpq0qp@cluster0.u9e3x.mongodb.net/JunkFood?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = client;