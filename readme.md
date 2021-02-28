# WIPRO EXAM HACK

Follow Steps

- step 1 clone this repo.

- step 2 send friend repo on your friends laptop

- step 3 keep examer repo on your laptop

-  step 4 Install nodejs on both laptop

- step 5 connect both laptop with same wifi network or same device.

- step 6 stop windows defender and firewall on both laptop

- step 7 install pm2 in examinar laptop with this command `npm i pm2`

- step 8 Open both repo in a code editor or notepad
- step 9 run ipconfig on windows command for get your local IP 

`const  snapShot = require('screenshot-desktop');`
`const  axios = require('axios');
const  fs = require('fs');`
`const  FormData = require('form-data');`
`setInterval(()=>{`
`console.log('Starting taking snapshot..');`
`snapShot({filename:'new.jpg'}).then((imgPath) => {`
`try {sendData(imgPath);
} catch (error) {`
`console.log('Sending failed');`
`}
});
  },3000);`
`async  function  sendData(buffer){
const  formdata = new  FormData();
formdata.append('new',fs.createReadStream('new.jpg'));
try {
const  r = await  axios.post('http://`**192.168.43.6**`:4000/bufferImage/',formdata,{
headers:  formdata.getHeaders()
});
} catch (error) {
console.log('Data not sended...');
}
}`

- replace 192.168.43.6 with your friend's laptop ip which should be connected with same mobile or wifi network.

 - navigate to examer repo through cmd and run `pm2 start Script.js`
 - Navigate to friend repo through cmd and run `pm2 start server.js`
- Now go to friend repo open `image2.jpg` which is in the public folder open image now your friend can see your screen. they can solve question and send you answer of question on whatsapp or other messaging app. 
**Note:- Image will take 3 sec. to come from examer to friend.**
  
## Proof
(./![i already tried this script this script is safe.](https://github.com/blackcoder56/wipro-hack/blob/master/friend/public/image2.jpg)

