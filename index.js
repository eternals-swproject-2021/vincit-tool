const express = require('express');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const checkImage = require('./routes/checkimage');
const app = express();

dotenv.config();

//enable file upload
app.use(fileUpload({
    createParentPath:true
}));

//middleware
//app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

//routes
app.use('/api/',checkImage);

app.use((req, res)=>{
    res.sendStatus(404);
});

app.listen(process.env.PORT,(e) => e && console.log(e));