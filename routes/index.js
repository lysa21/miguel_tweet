const express = require ('express');
const connect = require('../db/db.js');
const controller = require ('../model/modeldb');
const connection = connect.connectToDB();

var router = express.Router();

/*----------------------------Home---------------------------------*/

router.get('/home', (req, res) =>{
    res.render('home');
   
});

router.post('/home',async (req, res) =>{
   console.log(req.body)
   const { text } = req.body;
   await connection.query('INSERT INTO Tweet set ?', { 
       text
    });
res.render('home');

});
/*-----------------------------mostrerTweet--------------------------------*/


router.get('/inscrit', (req, res) =>{
    connection.query('SELECT * FROM Tweet', (error, tweets) => {
    //console.log(utilisateur);
    //res.send('listas')
    res.render('tweetHome', {tweets});
    });   
});  

/*--------------------------effacerTweet-----------------------------------*/

router.get('/effacer/:id_tweet', async (req, res) => {
    //console.log(req.params.id_utilisateur);
    const { id_tweet } = req.params;
    await connection.query('DELETE FROM Tweet WHERE id_tweet = ?', [id_tweet]);
    //res.send('Effacer')
    res.render('tweetHome');
});



router.get('/tweet', (req, res) =>{
    res.render('tweets');
   
});

router.get('/tweet', (req, res) =>{
    res.render('tweets');
   
});

module.exports = router;

