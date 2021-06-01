const snapShot = require('screenshot-desktop');
const axios = require('axios');
const formData = require('form-data');
const fs = require('fs');

console.log('Starting.....');

setInterval(() => {
    console.log('Start Taking Screenshot....');
    snapShot({ filename: 'shot.jpg' }).then((imgPath) => {
        console.log('Screenshot capture success....');
        console.log("<======================FILE PATH=======================>");
        console.log(imgPath);
        sedFileToServer(imgPath);
    }).catch((err)=>{
        console.log(err);
    });
}, 2000);


const sedFileToServer = async (imgPath) => {
    if(imgPath == null) console.log('Image File Was null...');
    const data = new formData();
    data.append('img',fs.createReadStream(imgPath));
    try {
        const res = await axios.post('http://localhost:3000/image',data,{
            headers: data.getHeaders()
        });
        console.log('Image Was Sended...');
    } catch (error) {
        console.log(error);
    }
}