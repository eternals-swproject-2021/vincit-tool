const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const { spawn } = require('child_process')
const axios = require('axios');
const path = require('path');

let multer = require('multer');
const { delay } = require('lodash');
let upload = multer();

var imgName;

app.use(cors());
app.use(fileUpload());

app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, () => {
  console.log("Server running on port 8080")
});

app.post("/upload", upload.single("newFile"), (req, res) => {
  console.log("/upload is called",);

  try {
    if (!req.files) {
      res.sendStatus(503);
    } else {
      let img = req.files.newFile;
      if (path.extname(img.name) === '.png' | '.jpg') {
        img.mv('./uploads/' + img.name);
        imgName = img.name;
        console.log("ImageName1: ", imgName)
        res.sendStatus(200);
        console.log("file uploaded \n")
        axios.post("http://localhost:8080/evaluate");
      } else {
        res.sendStatus(503);
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/evaluate', (req, res) => {
  console.log("/evaluate is called")

  try {
    var dataToSend;
    console.log("imgname: ", imgName);
    if (imgName !== undefined || imgName != null) {
      console.log("ImageName2: ", imgName)
      // spawn new child process to call the python script
      const imgScript = spawn('python3', ['./img_process/main.py', imgName]);
     
      // collect data from script
      imgScript.stdout.on('data', (data) => {
        dataToSend = data.toString();

      });

      console.log("Data2: ", dataToSend)

      imgScript.on('close', (code) => {
        imgName = undefined;
        res.send(dataToSend);
        console.log("data: ", JSON.parse(dataToSend));

        // axios.post("http://localhost:8080/color-contrast", JSON.parse(dataToSend))
        //   .then((response) => {
        //     console.log(response.data);
        //     res.send(response.data)
        //   });
      });
    } else {
      res.status(500).send("Image not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/upload", (req, res) => {
  console.log("file deleted")
  return res.status(200).json({ result: true, msg: 'file deleted' });
});


