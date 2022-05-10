const router = require('express').Router();
const path = require('path');
const { spawn } = require('child_process')
const axios = require('axios');
const { env } = require('process');
const { response } = require('express');

var imgName;

router.post('/upload', (req, res) => {
    console.log("/upload is called")
    try {
        if (!req.files) {
            res.sendStatus(503);
        } else {
            let img = req.files.newFile;
            if (path.extname(img.name) == '.png' | '.jpg') {
                //place file in upload directory
                img.mv('./uploads/' + img.name);
                imgName = img.name;
                res.sendStatus(200);
                console.log("imagName1: ", imgName)
                axios.post("http://localhost:8080/api/evaluate").then((res) => {
                    console.log("after evaluate result: ", res.data)
                    return res.data;
                })
            } else {
                res.sendStatus(503);
            }
        }

    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/evaluate', (req, res) => {
    console.log("/evaluate is called")
    try {
        var dataToSend;
        if (imgName != undefined || variable != null) {
            console.log("imagName2: ", imgName)
            // spawn new child process to call the python script
            const imgScript = spawn('python3', ['./img_process/main.py', imgName]);
            // collect data from script
            imgScript.stdout.on('data', (data) => {
                dataToSend = data.toString();
            });

            imgScript.on('close', (code) => {
                imgName = undefined;
                axios.post("http://localhost:8080/api/color-contrast", JSON.parse(dataToSend))
                    .then((res) => {
                        console.log("output:" , res.data);
                        // res.send(res.data)
                        // return res.data;
                    });
            });
        } else {
            res.status(500).send("Image not found");
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete("/upload", (req, res) => {
    console.log("file deleted")
    return res.status(200).json({ result: true, msg: 'file deleted' });
});

module.exports = router;