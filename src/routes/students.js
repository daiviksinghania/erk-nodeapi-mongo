import express from 'express';
import { addNewStudent } from '../controllers/student';
// const studentController = require('../controllers/student'); 

// const routes = () => {
//     const studentRoute = express.Router();
//     console.log("reached at student router");
//     // studentRoute.post('/students', addNewStudent)
//     studentRoute.post('/students', studentController.addNewStudent);
// }
 
// export default routes;


const studentRoute  = express.Router(); 
// studentRoute.post('/students', studentController.addNewStudent); 
studentRoute.post('/students', addNewStudent); 
export default studentRoute;