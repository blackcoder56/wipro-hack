const snapShot = require('screenshot-desktop');
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');


setInterval(()=>{
    console.log('Starting taking snapshot..');
    snapShot({filename:'new.jpg'}).then((imgPath) => {
        try {
          sendData(imgPath);
        } catch (error) {
          console.log('Sending failed');
        }
      });

},3000);


async function sendData(buffer){
  const formdata = new FormData();
  formdata.append('new',fs.createReadStream('new.jpg'));
  try {
    const r = await axios.post('http://192.168.43.6:4000/bufferImage/',formdata,{
      headers: formdata.getHeaders()
    });

    // const res = await axios({
    //   method:"POST",
    //   url:"http://192.168.43.6:4000/bufferImage/",
    //   headers:{
    //    // "Content-Type":"multipart/form-data"
    //   },
    //   data:{
    //     image:buffer,
    //     from:'Tester',
    //     to:'Client'
    //   }
    // });
  } catch (error) {
    console.log('Data not sended...');
  }
}