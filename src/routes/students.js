import express from express;
import { addNewStudent } from '../controllers/student'
 
const routes = () => {
    const studentRoute = express.Router();
    studentRoute.post('/students', addNewStudent)
}
 
export default routes;