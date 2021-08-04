import { addNewStudent } from '../controllers/student'
 
const routes = (app) => {
    app.route('/students')
        .post(addNewStudent)
}
 
export default routes
