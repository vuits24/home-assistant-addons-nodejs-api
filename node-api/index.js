const express = require('express');
const fs = require('fs');
const app = express();
const port = 3002;
//var {google:googleDriverConfig, config:configData, timeUpdate, hostToken} =require("/data/options.json");
const axios = require('axios');
var saveConfig = async () => {
  try {
    var dataConfig = fs.readFileSync('/data/options.json', {encoding: 'utf-8'});
    var dataConfigOb = JSON.parse(dataConfig);
   var response = await axios.post('http://localhost:3001/setup-config', dataConfigOb);
   console.log(response);
  } catch (error) {
    console.log(error.message);
  }
 
};
app.listen(port, "0.0.0.0",  () => {
 // saveConfig();
  console.log(`Lắng nghe sự kiện dưới trang http://0.0.0.0:${port}`)
})
