// import all required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Router.js');

// database connectivity
mongoose.connect('mongodb+srv://crud-application:crud-application@firstone.2ev89vc.mongodb.net/crud-app?retryWrites=true&w=majority', { useUnifiedTopology : true, useNewUrlParser : true })
    .then(()=>{console.log('connected to database')})
    .catch(err=>{console.log('Error in database connectivity',err)});


const app = express();
app.listen(8000);

app.use(cors());
app.use(express.json({extended : true}));
app.use('/', router);
