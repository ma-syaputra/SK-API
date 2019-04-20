'use strict'
module.exports = {
    success_app: function(data,res) {
        res.status(200).send({status: 200,
            item : data });
            },
    fail_app: function(data,res) {
        res.status(500).send({status: 500,
            item : [] });
                console.log(data)
            },
    bad_app: function(res) {
        res.status(400).send({status: 400,
                    response : false });
            },
    send_app: function(response,res) {
        res.status(200).send({status: 200,
                        response : response });
            }
        }