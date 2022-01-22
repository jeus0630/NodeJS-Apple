const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.listen(PORT,()=>{
    console.log(`app is listening on ${PORT}`);
})