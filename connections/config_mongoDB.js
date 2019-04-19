var MongoClient = require('mongodb').MongoClient
module.exports = {
    url: "mongodb://localhost:27017/m_dishes",
    db: "m_dishes",
    collectionDB : "c_dishes",
    mDb : MongoClient
}