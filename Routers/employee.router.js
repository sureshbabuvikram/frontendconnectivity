import express from 'express'
import { createEmployee, deleteEmployeeById, getAllEmployees, getEmployeeById, updateEmployeeById } from '../Controllers/employee.controller.js';

const router = express.Router()

router.post('/create/emp',createEmployee)
router.get('/employees', getAllEmployees)
router.get('/:id', getEmployeeById)
router.put('/edit/emp/:id',updateEmployeeById)  //http://localhost:5000/api/emp/edit/emp/
router.delete('/delete/emp/:id', deleteEmployeeById)



export default router;