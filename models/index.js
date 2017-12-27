var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title:  String,
  author: String,
  isbn: String,
  price: String,
  pages: String,
  description: String,
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', bookSchema);
