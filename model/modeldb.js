const connect = require('../db/db.js');
const connection = connect.connectToDB();

const controller = {};
/*-------------------Accueil---------------------------*/
controller.accueil = (req, res) =>{
   res.render('explore');
  
}

/*-------------------Connexion---------------------------*/

controller.connexion = (req, res) =>{
   res.render('connecter');
  
}

/*-------------------Home---------------------------*/

controller.connexion = (req, res) =>{
   res.render('home');
  
}

controller.connexion = async (req, res) =>{
   console.log(req.body)
   const { text } = req.body;
   await connection.query('INSERT INTO Tweet set ?', { 
       text
    });
res.render('home');

}

module.exports = controller;
