const passport = require ('passport');
const LocalStrategy = require ('passport-local').Strategy;
const connect = require('../db/db.js');
const connection = connect.connectToDB();
const helpers = require('../controller/helpers');
passport.use('local.connexion', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passResqToCallback: true
}, async (req, email, password, done)=>{
    //console.log(req.body);
    const {nom} = req.body
        const newUser = {
        email,
        password,
        nom
    }
    newUser.password = await helpers.encryptPassword(password);
    const result = await connection.query('INSERT INTO Utilisateur SET ?', [newUser]);
    console.log(result);
}));

//passport.serializeUser((user,done) => {

//});
