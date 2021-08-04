import db from '../config/db.js';
import StudentSchema from './student-schema';

const Student = db.model("Student", StudentSchema);

export default Student;