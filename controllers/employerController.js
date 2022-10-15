import EmployerServices from '../services/employerService.js';

import express from 'express';



const routes = express.Router();


routes.get('/', EmployerServices.getEmployer);

routes.get('/:id', EmployerServices.getEmpByID);

routes.delete('/:id', EmployerServices.deleteEmp);

routes.post('/poster', EmployerServices.create);


export default  routes;

