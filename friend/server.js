const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = http.createServer(app);
const upload = require('express-fileupload')
const fs = require('fs');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(upload());
app.use(require('cors')({origin:'*'}));
app.use('/public',express.static('public'));

let data = {
    host:null
}

app.post('/bufferImage',async(req,res)=>{
    console.log('<================================================>')
    console.log('Incomming Buffer Data of image....');
    try {
        console.log('Trying to emit buffer to client....');
        console.log('client socket id is '+data.host);
        console.log('Incomming Buffer is :- ');
        console.log({buffer:req.files.new.data.toString()});
        console.log('Sending data to '+data.host+' ...');
        if(req.files){
            req.files.new.mv('./public/image2.jpg');
        }
        console.log('Buffer data transmitted successfully....');
        console.log('<=============================================>');
        res.send({ok:"Okay"});
    } catch (error) {
        console.log('Somthing error found....');
    }
    
});


server.listen(4000,(err)=>{
    if(err) console.log('server error');
    console.log('Server started on 4000');
})