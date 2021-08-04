const db = require('../config/db.js');
const StudentSchema = require('./student-schema');

const Student = db.model("Student", StudentSchema);

module.exports = Student;