import { connect } from "mongoose";

const db = connect('mongodb://localhost:27017/students', {useNewUrlParser: true});

export default db;