//const v4 = require('uuid'); 
import  express from 'express';
import {v4 as uuid4} from 'uuid'; //const dotenv = require('dotenv').config()
import mysql from 'mysql'; // const mysql = require('mysql');
import bodyParser from 'body-parser';
import  EtudiantController from './controllers/etudiantController.js';
import  EmployerController from './controllers/employerController.js';

import basicAuth from './middlewares/basicAuth.js';


//Ce qui va nous permettre de lire params dans .env


const PORT = 8000;
/**
 * Créer notre application
 */


const app = express();


app.use(bodyParser.json());
app.use(basicAuth);

app.use('/etudiants', EtudiantController);
app.use('/employer', EmployerController);

//app.use('/notes', NoteController)

app.listen(PORT, () =>{
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

// app.listen(PORT, function(){
//     console.log(`Serveur lancé sur http://localhost:${PORT}`);
// });





