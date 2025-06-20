module.exports.config = {
    name: "Hotvideos",
    version: "1.0.0",
    hasPermision: 0,
    credit: "M Amir",
    description: "random quran verse",
     commandCategory: "random-img",
    cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  var link = ["https://i.imgur.com/SNyXOqM.mp4","https://i.imgur.com/Rq6WXBD.mp4","https://i.imgur.com/D5Af9Sa.mp4","https://i.imgur.com/Q6fcnF9.mp4","https://i.imgur.com/vwlq0kp.mp4","https://i.imgur.com/9Qy4AJm.mp4","https://i.imgur.com/8L2fM51.mp4","https://i.imgur.com/metnQo6.mp4","https://i.imgur.com/L4KQYHb.mp4","https://i.imgur.com/VK0RtjX.mp4https://i.imgur.com/VK0RtjX.mp4","https://i.imgur.com/la8tjV9.mp4","https://i.imgur.com/wazaZez.mp4","https://i.imgur.com/ek30UPP.mp4","https://i.imgur.com/ppCxvYX.mp4","https://i.imgur.com/JcPFV3R.mp4","https://i.imgur.com/gSF9s4w.mp4","https://i.imgur.com/wTscCjO.mp4","https://i.imgur.com/bG4W0zt.mp4","https://i.imgur.com/qvzdRnP.mp4","https://i.imgur.com/QiiOQfi.mp4","https://i.imgur.com/EfMnoAF.mp4","https://i.imgur.com/q5Zb6D2.mp4","https://i.imgur.com/OCajteB.mp4","https://i.imgur.com/f1o9eOT.mp4","https://i.imgur.com/I7V3ev7.mp4","https://i.imgur.com/CAbPFHB.mp4","https://i.imgur.com/17wBawy.mp4","https://i.imgur.com/HVi0Cr8.mp4","https://i.imgur.com/pLWL0kp.mp4","https://i.imgur.com/kw7kNj9.mp4","https://i.imgur.com/Ge0wuYM.mp4","https://i.imgur.com/B1cN7aB.mp4","https://i.imgur.com/mSRzMlS.mp4","https://i.imgur.com/BhztkXb.mp4","https://i.imgur.com/tGtaSJd.mp4","https://i.imgur.com/tEEEdE8.mp4",""];
var amir = [`𝗖𝗿𝗲𝗱𝗶𝘁𝘀:  𓆩𝐃𝐀𝐍𝐈 𝐌𝐀𝐋𝐈𝐊𓆩๏𓆪`];
  var juswa1 = amir[Math.floor(Math.random() * amir.length)];
  var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.mp4")).on("close",() => callback());
   };