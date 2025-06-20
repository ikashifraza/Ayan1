module.exports.config = {
    name: "stageclip",
    version: "1.0.0",
    hasPermision: 0,
    credit: "𝐃𝐀𝐍𝐈 𝐌𝐀𝐋𝐈𝐊",
    description: "random quran verse",
    commandCategory: "random-img",
    cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  var link = ["https://i.imgur.com/jy0uOYh.mp4","https://i.imgur.com/1bfDhNA.mp4","https://i.imgur.com/My8sJA7.mp4","https://i.imgur.com/nqscYyT.mp4","https://i.imgur.com/qzSz13Q.mp4","https://i.imgur.com/FtBnhfo.mp4","https://i.imgur.com/rdqmKCk.mp4","https://i.imgur.com/qQgBh3k.mp4","https://i.imgur.com/JwerFUS.mp4","https://i.imgur.com/kDv0Dor.mp4","https://i.imgur.com/M3p22fc.mp4","https://i.imgur.com/LcbOgMx.mp4","https://i.imgur.com/YQSTaqh.mp4","https://i.imgur.com/zoGC3vX.mp4","https://i.imgur.com/eNgpZ0M.mp4","https://i.imgur.com/Gh8Vh96.mp4","https://i.imgur.com/aixK9jM.mp4","https://i.imgur.com/VeZbS0K.mp4","https://i.imgur.com/ZVFjDru.mp4","https://i.imgur.com/9V257kD.mp4","https://i.imgur.com/lzXQbS4.mp4","https://i.imgur.com/6cM4Ayf.mp4","https://i.imgur.com/mFfuAUY.mp4","https://i.imgur.com/aQCmba6.mp4","https://i.imgur.com/wEHNPP0.mp4","https://i.imgur.com/Yz4AUj2.mp4","https://i.imgur.com/43DcCim.mp4","https://i.imgur.com/1dFzJOM.mp4","https://i.imgur.com/GAIrV1Q.mp4","https://i.imgur.com/BpoDD11.mp4","https://i.imgur.com/1mJvHaj.mp4","https://i.imgur.com/STVDK4r.mp4","https://i.imgur.com/A01B9jc.mp4","https://i.imgur.com/SkbUayY.mp4","https://i.imgur.com/rUDKlB7.mp4","https://i.imgur.com/0lT2PD8.mp4","https://i.imgur.com/eRLPatK.mp4","https://i.imgur.com/QJTZ3Up.mp4",];
var amir = [`𝗖𝗼𝗱𝗲𝗱 𝗕𝘆:𝐃𝐀𝐍𝐈 𝐌𝐀𝐋𝐈𝐤`];
  var juswa1 = amir[Math.floor(Math.random() * amir.length)];
  var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.mp4")).on("close",() => callback());
   };