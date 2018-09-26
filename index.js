const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const x = require('./connections/user');
const userinfo = require('./models/usermodel');

const signupRoutes = require('./route/signup');



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());

signupRoutes(app);


app.listen(2000, () => {
    console.log('server is started at 2000')
})