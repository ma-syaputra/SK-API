'use strict'
var urlDB = require("./../connections/config_mongoDB")

module.exports = {
    inc_dish: function() {
        return new Promise((resolve, reject) => {
            urlDB.mDb.connect(urlDB.url,{ useNewUrlParser: true }, function(err, db) {
                if (err) return reject(err);
                var dbo = db.db(urlDB.db)
                dbo.collection("counters").findAndModify( 
                    { _id: 'productid' }, null, { $inc: { seq: 1 } }, function(err, result){
                    resolve(result.value.seq)
                } );
            })
        })
    }
}


