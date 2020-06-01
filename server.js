const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const moment = require("moment");
const morgan = require("morgan");
const session = require("express-session");
const flash = require("connect-flash");
const myrouter = require("./routes/index.js");
const myrouter2 = require("./routes/login.js");
const connect = require("./db/db.js");
const passport = require("passport");

const connection = connect.connectToDB();

//config moment
moment().format();

//config express
var app = express();
require("./controller/password.js");

//config dossier 'public' pour css, js etc.
app.use(express.static("public"));
app.use(cookieParser("keyboard cat"));
app.use(session({ secret: "secret", cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }));

//middlewares retournera un msg d'erreur en cas de login erroné
app.use(flash()); //instalar mensajerias de flash para validar
app.use(passport.initialize());
app.use(passport.session());
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Handlebars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//config morgan
morgan(":method :url :status :res[content-length] - :response-time ms");

app.get("/", function (req, res) {
  connection.query("SELECT * FROM Tweet", (error, tweets) => {
    //console.log(utilisateur);
    //res.send('listas')
    res.render("home", { tweets });
  });
});

app.use("/", myrouter);
app.use("/", myrouter2);

connect.connectToDB();
app.listen(8080, () => {
  console.log("serveur connecté au port 8080");
});
