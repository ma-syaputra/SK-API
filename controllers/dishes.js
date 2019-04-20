'use strict'
var m_dishes = require('./../models/dishes_model')
var m_inc_dishes = require('./../models/inc_dishes_model')
var res_app = require('./../response/status')

exports.list = (req, res) => {
    const dataDishes = m_dishes.list()
    dataDishes.then(response => {
        res_app.success_app(response,res)
    }).catch(err => {
        res_app.fail_app(err,res)
    })
}
exports.add = (req, res) => {
    const m_inc = m_inc_dishes.inc_dish()
    var dishes = req.body.name
    if (!dishes) return res_app.bad_app(res)
    m_inc.then(response => {
        console.log(response)
        var data = {
            dishesId: response,
            dishesName : dishes,
            createdDate : new Date(),
            isActive : 1}
            const dataDishes = m_dishes.save(data)
            dataDishes.then(response => {
                res_app.send_app(response,res)
            }).catch(err => {
                res_app.fail_app(err,res)
            })
        }).catch(err => {
            res_app.fail_app(err,res)
        })
    }
    exports.detail = (req, res) => {
        const id = parseInt(req.params.id);
        const dataDishes = m_dishes.detail(id)
        dataDishes.then(response => {
            res_app.success_app(response,res)
        }).catch(err => {
            res_app.fail_app(err,res);
        })
    }
    exports.edit = (req, res) => {
        const id = parseInt(req.params.id)
        var dishes = req.body.name
        if (!dishes) return res_app.bad_app(res)
        var data = {dishesName : dishes}
        const dataDishes = m_dishes.edit(id,data)
        dataDishes.then(response => {
            res_app.success_app(response,res)
        }).catch(err => {
            res_app.bad_app(res);
        })
    }

    exports.editdishes = (req, res) => {
        const id = parseInt(req.body.id)
        var dishes = req.body.name
        if (!dishes) return res_app.bad_app(res)
        var data = {dishesName : dishes}
        const dataDishes = m_dishes.edit(id,data)
        dataDishes.then(response => {
            res_app.success_app(response,res)
        }).catch(err => {
            res_app.bad_app(res);
        })
    }

    exports.deletedishes = (req, res) => {
        const id = parseInt(req.body.id)
        const dataDishes = m_dishes.remove(id)
        dataDishes.then(response => {
            res_app.success_app(response,res)
        }).catch(err => {
            res_app.bad_app(res);
        })
    }

    exports.delete = (req, res) => {
        const id = parseInt(req.params.id)
        const dataDishes = m_dishes.remove(id)
        dataDishes.then(response => {
            res_app.success_app(response,res)
        }).catch(err => {
            res_app.bad_app(res);
        })
    }
