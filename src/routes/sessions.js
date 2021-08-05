const router = require("express").Router();
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants";
import Student from "../models/student";


router.post("/", (req, res) => {
    Student.findOne({ name: req.body.student.name}).then(
        (student) => {
            if(student){
                compare(req.body.student.pwd, student.passhash,(err, matches) =>{
                    if(matches){
                        const sessionToken = sign(student._id, JWT_SECRET, {expiresIn: 24*60*60});
                        res.json({
                            student:student,
                            message: "successfully authed",
                            sessionToken: sessionToken
                        });
                    }else{
                        res.json({
                            student: {},
                            message: "failed to auth",
                            sessionToken: ""
                        })
                    }
                })
            }else{
                res.json({
                    student: {},
                    message: "failed to auth",
                    sessionToken: ""
                })
            }
        },
        (err) => {

        }
    );
})