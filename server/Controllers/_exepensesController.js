const express = require('express')
const Expense_router = express.Router();
const expensesModel = require('../schemas/expenses')

Expense_router.post('/save', (req, res) => {
    let Data = new expensesModel(req.body);
    Data.save((err, result) => {
        if (err) return console.error(err);
        console.log(result)
        res.send(result.name + " saved to bookstore collection.");
    });

})

Expense_router.get('/explist', (req, res) => {
    expensesModel.find((err, result) => {
        if (err) return console.error(err);
        res.send(result)
    })
})

Expense_router.post('/explist', (req, res) => {
    expensesModel.findOne({},(err, result) => {
        if (err) return console.error(err);
        res.send(result)
    })
})



module.exports = Expense_router;