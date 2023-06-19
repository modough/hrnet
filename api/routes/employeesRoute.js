import { Router } from 'express';
import {
    createEmployee,
    deleteEmployee,
    findAllEmployees,
    findOneEmployee,
    updateOneEmployee
} from '../controllers/employeesController.js';
import { tokenValidation } from '../middlewares/tokenValidation.js';


//express.Router() créer des routeurs séparés pour chaque route principale
const router = Router();

// -------- 
// list de tous les articles rajoutés  
router.get('/employeesList', findAllEmployees);

// ---------
// voir le detail d'un article
router.get('/employee/:id', findOneEmployee);

//---------------------
// methode creation d'article
router.post('/employee/create', createEmployee);

//--------------------------
//supprimer un article
router.delete('/employee/:id', deleteEmployee);

//-----------------
// modifier un article
router.put('/employee/:id', updateOneEmployee);

export default router;