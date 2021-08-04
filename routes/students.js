const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Student = require("../models/student");
const jwt = require("jsonwebtoken")
const constants = require("../config/constants")

router.post('/', (req,res) => {
    var student = new Student({
        name: req.body.student.name,
        email: req.body.student.email,
        passhash: bcrypt.hashSync(req.body.student
            .pwd, 10)
    })
    student.save().then(
        (newstudent) => {
            const sessionToken = jwt.sign(newstudent._id, constants.JWT_SECRET, { expiresIn: 60*60*24})
            res.json({
                user: newstudent,
                message: 'success',
                sessionToken: sessionToken
            })
        },
        (err) => {
            res.send(500, err.message);
        }
    );
});

module.exports = router;
