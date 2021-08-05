
import { hashSync } from "bcryptjs";
import Student from "../models/student";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants";
 
// add new download to the database
export function addNewStudent(req, res) {
    let student = new Student({
        name: req.body.student.name,
        email: req.body.student.email,
        passhash: hashSync(req.body.student
            .pwd, 10)
    })
    student.save().then(
        (newstudent) => {
            // const sessionToken = sign(newstudent._id, JWT_SECRET, { expiresIn: 60*60*24})
            res.json({
                user: newstudent,
                message: 'success'
            })
        },
        (err) => {
            res.send(500, err.message);
        }
    );
}
