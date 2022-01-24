const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');
const addRoute = require('./routes/add');
const listRoute = require('./routes/list');
const homeRoute = require('./routes/home');
const detailRoute = require('./routes/detail');
const editRoute = require('./routes/edit');
const db = require('./config/db');
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(session({secret : '비밀코드', resave : true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/add',addRoute);
app.use('/list',listRoute);
app.use('/',homeRoute);
app.use('/detail',detailRoute);
app.use('/edit',editRoute);

app.use((req,res)=>{
    res.send('NOT FOUND');
})

db.connect(()=>{
    app.listen(PORT,()=>{
        console.log(`app is listening on ${PORT}`);
    })
})