const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const { spawn } = require('child_process')

let multer = require('multer');
let upload = multer();

var imgName;

app.use(cors());
app.use(fileUpload());

app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/upload", upload.single("newFile"), (req, res) => {
  console.log("Here \n", req.files);
  const newpath = __dirname + "/../../../uploads/";
  const file = req.files.newFile;
  const filename = file.name;


  setTimeout(() => {
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        res.status(500).send({ message: "upload failed", code: 500 });
      }
      console.log("file uploaded")
    });
    return res.status(200).json({ result: true, msg: 'file uploaded' });
  }, 3000);
});

app.delete("/upload", (req, res) => {
  console.log("file deleted")
  return res.status(200).json({ result: true, msg: 'file deleted' });
});

app.post('/evaluate', (req, res) => {
  try {
    if (imgName !== undefined || imgName != null) {
      var dataToSend;
      // spawn new child process to call the python script
      const imgScript = spawn('python3', ['./../../img_process/main.py', imgName]);
      // collect data from script
      imgScript.stdout.on('data', (data) => {
        dataToSend = data.toString();
      });

      imgScript.on('close', (code) => {
        imgName = undefined;
        res.send(dataToSend);
      });
    } else {
      res.status(500).send("Image not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(8080, () => {
  console.log("Server running on port 8080")
});
