const express = require('express');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const checkImage = require('./routes/checkImage');
const colorContrast = require('./routes/ColorContrast');
const app = express();
const cors = require('cors')

dotenv.config();
//enable file upload
app.use(fileUpload({
    createParentPath:true
}));

//middleware
const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

//routes
app.use('/api/', checkImage);
app.use('/api/', colorContrast);


app.use((req, res)=>{
    res.sendStatus(404);
});

app.listen(8080, () => {
    console.log("Server running on port 8080")
  });