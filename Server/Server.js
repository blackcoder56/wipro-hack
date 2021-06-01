const express = require('express');
const upload = require('express-fileupload');

const app = express();

app.use(upload());

app.post('/image',async(req,res)=>{
    if(req.files){
        if(req.files.img){
            console.log(req.files.img)
            req.files.img.mv('./shot.jpg');
            res.status(200).send({msg:"OK"});
        }
    }
})

app.listen(3000,(err)=>{
    if(err) console.log('Server error');
    else console.log('Server status OK');
})