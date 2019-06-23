var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const expensesSchema = new Schema({
  name: String,
  category: String,
  amount: Number,
  date: { type: Date, default: Date.now }
});
const expensesModel = mongoose.model("expenses", expensesSchema);
module.exports = expensesModel;
