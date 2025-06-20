module.exports.config = {
    name: "romanticclip",
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
  var link = ["https://i.imgur.com/fsGIxvm.mp4","https://i.imgur.com/o4t9YCr.mp4","https://i.imgur.com/kNhmbec.mp4","https://i.imgur.com/jo4AbLj.mp4","https://i.imgur.com/jj3UB3u.mp4","https://i.imgur.com/wKBt8d3.mp4","https://i.imgur.com/Hytouw0.mp4","https://i.imgur.com/nZqmgF0.mp4","https://i.imgur.com/8ja20dc.mp4","https://i.imgur.com/E0zvBgw.mp4","https://i.imgur.com/k2rgBDC.mp4","https://i.imgur.com/HacMmRU.mp4","https://i.imgur.com/3kFNaKB.mp4","https://i.imgur.com/4ay8Rky.mp4","https://i.imgur.com/xn8FntH.mp4","https://i.imgur.com/2T8aajm.mp4","https://i.imgur.com/gmW3KvI.mp4","https://i.imgur.com/Bvz2R8T.mp4","https://i.imgur.com/D1BrJXg.mp4","https://i.imgur.com/CbBd27b.mp4","https://i.imgur.com/88zm4hi.mp4","https://i.imgur.com/F9Ifwjv.mp4","https://i.imgur.com/Cwp1VFf.mp4","https://i.imgur.com/nco2zrk.mp4","https://i.imgur.com/3GfMuns.mp4","https://i.imgur.com/eggGL5x.mp4","https://i.imgur.com/l6dG0QK.mp4","https://i.imgur.com/fn2xHHe.mp4","https://i.imgur.com/YZ66EgQ.mp4","https://i.imgur.com/YZ66EgQ.mp4","https://i.imgur.com/lqx4HRf.mp4","https://i.imgur.com/jtYxpIW.mp4","https://i.imgur.com/gQhZOeX.mp4","https://i.imgur.com/TEeQFph.mp4","https://i.imgur.com/ZGnwdFr.mp4",];
var amir = [`𝗖𝗼𝗱𝗲𝗱 𝗕𝘆: 𝐃𝐀𝐍𝐈 𝐌𝐀𝐋𝐈𝐊`];
  var juswa1 = amir[Math.floor(Math.random() * amir.length)];
  var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.mp4")).on("close",() => callback());
   };