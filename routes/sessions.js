const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const constants = require("../config/constants");
const Student = require("../models/student");


router.post("/", (req, res) => {
    Student.findOne({ name: req.body.student.name}).then(
        (student) => {
            if(student){
                bcrypt.compare(req.body.student.pwd, student.passhash,(err, matches) =>{
                    if(matches){
                        const sessionToken = jwt.sign(student._id, constants.JWT_SECRET, {expiresIn: 24*60*60});
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