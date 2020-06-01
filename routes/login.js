const express = require ('express');
const connect = require('../db/db.js');
const controller = require ('../model/modeldb');
const passport = require ('passport');
const connection = connect.connectToDB();



var router = express.Router();
/*-------------------------------------------------------------*/
router.get('/accueil', controller.accueil);


router.get('/connexion', (req, res) =>{
    res.render('connecter');
   
});


/*-------------------------------------------------------------*/


/*----------------------------------------------*/

module.exports = router;