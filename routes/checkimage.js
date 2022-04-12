const router = require('express').Router();
const path = require('path');

router.post('/upload',async(req,res)=>{
   try{
        if(!req.files){
            res.sendStatus(503);
        }else{
            let img = req.files.img;
            if(path.extname(img.name) == '.png' | '.jpg'){
                  //place file in upload directory
                  img.mv('./uploads/' + img.name);
                  res.sendStatus(200);
            }else{
                res.sendStatus(503);
            }
        }

   }catch(err){
       res.status(500).send(err);
   }

});

module.exports = router;