const jwt = require("jsonwebtoken");
const Student = require("../models/student");
const constants = require("../config/constants");

module.exports = (req, res, next) => {
    const sessionToken = req.headers.authorization;
    if(!req.body.student && sessionToken){
        jwt.verify(sessionToken, constants.JWT_SECRET,(err, decodedId) => {
            if(decodedId){
                Student.findOne({_id: decodedId}).then((student) => {
                    req['student'] = student;
                    next();
                }, (err) =>{
                    res.send(401, 'not authorized'); 
                })
            }else{
                res.send(401, 'not authorized');
            }
        });
    }else{
        next();
    }
};