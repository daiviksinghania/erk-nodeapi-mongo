import mongoose from 'mongoose';
import StudentSchema from './student-schema';

const Student = mongoose.model("Student", StudentSchema);

export default Student;