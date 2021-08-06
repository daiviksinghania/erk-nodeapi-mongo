
import { hashSync } from "bcryptjs";
import Student from "../models/student";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants";

export const addNewStudent = async(req, res) => {
    console.log("reached at controller");
    let encpwd = hashSync(req.body.student.pwd, 10);
    console.log(encpwd)
    let student = new Student({
        name: req.body.student.name,
        email: req.body.student.email,
        passhash: encpwd,
        created:(new Date()).toLocaleDateString()
    })
    console.log(student)
    try {
        await student.save()
        const newStudent = student;
        res.status(201).json(newStudent)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// console.log("controller")
// export const addNewStudent = (req, res, next) => {
//     res.json({message: "POST new student"}); // dummy function for now
// };

// const addNewStudent = (req, res, next) => {
//     res.json({message: "POST new student"}); // dummy function for now
// };

// module.exports = {addNewStudent};
