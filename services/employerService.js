import {v4 as uuidv4} from 'uuid';
import mysqlConnection from '../database/connectionDB.js';


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Recuperer tous les etudiants
 */

function getEmployer(req, res){
    mysqlConnection.query("SELECT * FROM `employer`", (error, results, fields) =>{
        if(!error){
            
            console.log(results);
            res.status(200).send(results)
        }else
        console.log(JSON.stringify(error))
    })
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Récuperer un étudiant à partir de son ID
 */
function getEmpByID(req, res){
    const id = req.params.id;
    //const {id} = req.params;
    mysqlConnection.query("SELECT * FROM `employer` WHERE id = '"+id+"'", (error, results, fields) =>{
        if(!error){
            if(results[0])
                res.status(200).send(results[0])
            else 
                res.status(404).send({message: "Aucun étudiant avec cet ID"})
        }else
        console.log(JSON.stringify(error))
    })
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Suprimmer un étudiant à partir de l'ID
 */
function deleteEmp (req, res){
    const id = req.params.id;
    mysqlConnection.query("DELETE FROM `employer` WHERE id = '"+id+"'", (error, results, fields) =>{
        if(!error){
            if(results.affectedRows >= 1)
                res.send({message: `Element avec id = ${id} a été bien suprimmé`});
            else    
            res.send({message: `Element avec id = ${id} n'a été trouvé`}); 
        }else{
            res.send({message: JSON.stringify(error)})
        }
    })
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Ajouter un employer
 */
function create (req, res) {
    const postedData = req.body;
    const EmployertWithID = {... postedData, id: uuidv4()};
    mysqlConnection.query("INSERT INTO `employer` (`id`, `prenom`, `nom`, `age`) VALUES ('"+EmployertWithID.id+"', '"+EmployertWithID.prenom+"', '"+EmployertWithID.nom+"', "+EmployertWithID.age+");", (err, results, fields)=>{
        if(!err)
            res.status(201).send(EmployertWithID);
        else
            res.status(400).send({message: "Erreur lors de creation"});  
    })
    
    
}

export default  {getEmployer, getEmpByID, create, deleteEmp}