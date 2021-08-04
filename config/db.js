const db = require("mongoose");

db.connect('mongodb://localhost:27017/students', {useNewUrlParser: true});

module.exports = db;