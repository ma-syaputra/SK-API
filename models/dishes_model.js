'use strict'
var urlDB = require("./../connections/config_mongoDB")
module.exports = {
    list: function() {
        return new Promise((resolve, reject) => {
            urlDB.mDb.connect(urlDB.url,{ useNewUrlParser: true }, function(err, db) {
                if (err) return reject(err);
                var dbo = db.db(urlDB.db)
                dbo.collection(urlDB.collectionDB).find({}).toArray(function(err, result) {
                    if (err) return reject(err);
                    resolve(result)
                })
            })
        })
    },
    save: function(data) {
        return new Promise((resolve, reject) => {
            urlDB.mDb.connect(urlDB.url,{ useNewUrlParser: true }, function(err, db) {
                if (err) return reject(err)
                var dbo = db.db(urlDB.db)
                var doc = data
                dbo.collection(urlDB.collectionDB).insertOne(doc, function(err, res) {
                    if (err) return reject(err);
                        resolve(true)
                });
            })
        })
    },
    detail: function(id) {
        return new Promise((resolve, reject) => {
            urlDB.mDb.connect(urlDB.url,{ useNewUrlParser: true }, function(err, db) {
                if (err) return reject(err)
                var dbo = db.db(urlDB.db)
                var query = { dishesId: id };
                console.log(query)
                dbo.collection(urlDB.collectionDB).find(query).toArray(function(err, result) {
                    if (err) return reject(err);
                    console.log(result)
                    resolve(result);
                  });
            })
        })
    },
    edit: function(id,data) {
        return new Promise((resolve, reject) => {
            urlDB.mDb.connect(urlDB.url,{ useNewUrlParser: true }, function(err, db) {
                if (err) return reject(err)
                var dbo = db.db(urlDB.db)
                var query = { dishesId: id }
                var newvalues = { $set: data }
                dbo.collection(urlDB.collectionDB).updateOne(query, newvalues, function(err, res) {
                    if (err) return reject(err)
                    resolve(true)
                  })
            })
        })
    },
    remove: function(id) {
        return new Promise((resolve, reject) => {
            urlDB.mDb.connect(urlDB.url,{ useNewUrlParser: true }, function(err, db) {
                if (err) return reject(err)
                var dbo = db.db(urlDB.db)
                var query = { dishesId: id }
                dbo.collection(urlDB.collectionDB).deleteOne(query, function(err, res) {
                    if (err) return reject(err)
                    resolve(true)
                  })
            })
        })
    }



}

