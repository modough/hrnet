import { Router } from 'express';
import { createEmployee, deleteEmployee, findAllEmployees, findOneEmployee, updateOneEmployee } from '../controllers/employeesController';
import { tokenValidation } from '../middlewares/tokenValidation';
//express.Router() créer des routeurs séparés pour chaque route principale
const router = Router();

// -------- 
// list de tous les articles rajoutés  
router.get('/', tokenValidation, findAllEmployees);

// ---------
// voir le detail d'un article
router.get('/:id', tokenValidation, findOneEmployee);

//---------------------
// methode creation d'article
router.post('/', tokenValidation, createEmployee);

//--------------------------
//supprimer un article
router.delete('/:id', tokenValidation, deleteEmployee);

//-----------------
// modifier un article
router.put('/:id', tokenValidation, updateOneEmployee);

export default router;