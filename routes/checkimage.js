const router = require('express').Router();


router.post('/upload',async(req,res)=>{
   try{
        if(!req.files){
            res.send({
                status: false,
                message: 'File is not uploaded'
            });
        }else{
            let img = req.files.img;

            //place file in upload directory
            img.mv('./uploads/' + img.name)
            res.send({
                status: true,
                message: 'File is uploaded',
                data:{
                    name:img,
                    mimetype:img.mimetype,
                    size:img.size
                }
            });
        }


   }catch(err){
       res.status(500).send(err);
   }

});

module.exports = router;