import { verify } from "jsonwebtoken";
import Student from "../models/student";
import { JWT_SECRET } from "../config/constants";

export default (req, res, next) => {
    const sessionToken = req.headers.authorization;
    if(!req.body.student && sessionToken){
        verify(sessionToken, JWT_SECRET,(err, decodedId) => {
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
    }
    else{
        next();
    }
};