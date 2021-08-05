import mongoose from 'mongoose';
const { Schema } = mongoose;

const StudentSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    passhash: { type: String, required: true },
    created: { type: Date, required: true }
});

export default StudentSchema;