const router = require('express').Router();
const path = require('path');
const {spawn} = require('child_process')
const axios = require('axios');
const { env } = require('process');


var imgName;

router.post('/upload',(req,res)=>{
   try{
        if(!req.files){
            res.sendStatus(503);
        }else{
            let img = req.files.img;
            if(path.extname(img.name) == '.png' | '.jpg'){
                  //place file in upload directory
                  img.mv('./uploads/' + img.name);
                  imgName = img.name;
                  res.sendStatus(200);
            }else{
                res.sendStatus(503);
            }
        }

   }catch(err){
       res.status(500).send(err);
   }

});

router.post('/evaluate', (req,res)=>{
    try{
        var dataToSend;
        if(imgName != undefined || variable != null){
            // spawn new child process to call the python script
            const imgScript = spawn('python3', ['./img_process/main.py',imgName]);
            // collect data from script
            imgScript.stdout.on('data',  (data)=> {
                dataToSend = data.toString();
                
            });


            imgScript.on('close', (code) => {
                imgName = undefined;
                //res.send(dataToSend);
                //console.log(JSON.parse(dataToSend));
                    
                axios.post('http://'+env.HOST+":"+ env.PORT+"/api/color-contrast",JSON.parse(dataToSend))
                .then((response)=>{
                    //console.log(response.data);
                    res.send(response.data)
                });
                
               
                
             });

            
     }else{
        res.status(500).send("Image not found");
     }
    }catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;