module.exports.config = {
    name: "Poetryclip",
    version: "1.0.0",
    hasPermision: 0,
    credit: "𝐃𝐀𝐍𝐈 𝐌𝐀𝐋𝐈𝐊",
    description: "random quran verse",
    usePrefix: true,
    commandCategory: "random-img",
    cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  var link = ["https://i.imgur.com/iV29nRt.mp4","https://i.imgur.com/CSTooc0.mp4", "https://i.imgur.com/x8RueYD.mp4", "https://i.imgur.com/gCk6CAi.mp4", "https://i.imgur.com/PJi29ed.mp4", "https://i.imgur.com/SgmdsYF.mp4", "https://i.imgur.com/InnYmjK.mp4", "https://i.imgur.com/m6fmTgh.mp4", "https://i.imgur.com/YZMOduu.mp4", "https://i.imgur.com/6Z3oOhp.mp4", "https://i.imgur.com/gdzT76d.mp4", "https://i.imgur.com/1MKzBe5.mp4", "https://i.imgur.com/gXpOIDh.mp4", "https://i.imgur.com/i9RmbkQ.mp4", "https://i.imgur.com/QuG6foV.mp4", "https://i.imgur.com/nYusRat.mp4", "https://i.imgur.com/lWqgRVN.mp4", "https://i.imgur.com/mqZhk1N.mp4", "https://i.imgur.com/jtGSrVe.mp4", "https://i.imgur.com/OIPdz6K.mp4", "https://i.imgur.com/fgn6Ioa.mp4", "https://i.imgur.com/IWrce1b.mp4", "https://i.imgur.com/yTrQmEu.mp4", "https://i.imgur.com/RuGCAkx.mp4", "https://i.imgur.com/vSILELX.mp4", "https://i.imgur.com/v6EnRud.mp4", "https://i.imgur.com/vY4q7GN.mp4", "https://i.imgur.com/gHHhMdD.mp4", "https://i.imgur.com/C7A8yVG.mp4", "https://i.imgur.com/Vfllgtp.mp4", "https://i.imgur.com/QlLUKyR.mp4", "https://i.imgur.com/xOjDm8y.mp4", "https://i.imgur.com/P8vhVDg.mp4", "https://i.imgur.com/L7Yo5oY.mp4", "https://i.imgur.com/GYcNd3z.mp4", "https://i.imgur.com/nb0OiyY.mp4", "https://i.imgur.com/QOgZKpj.mp4", "https://i.imgur.com/xtOsCdu.mp4", "https://i.imgur.com/nehq4YD.mp4", "https://i.imgur.com/mpR4xIG.mp4", "https://i.imgur.com/Df2LmjT.mp4", "https://i.imgur.com/JZ1uOTE.mp4", "https://i.imgur.com/xx2eu0V.mp4", "https://i.imgur.com/4Xp7mOw.mp4", "https://i.imgur.com/y0CSNcf.mp4", "https://i.imgur.com/ctiLWqZ.mp4", "https://i.imgur.com/oq2xp9W.mp4", "https://i.imgur.com/qASjfzw.mp4", ""];
var amir = [`𝗖𝗼𝗱𝗲𝗱 𝗕𝘆:𝐃𝐀𝐍𝐈 𝐌𝐀𝐋𝐈𝐤`];
  var juswa1 = amir[Math.floor(Math.random() * amir.length)];
  var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.mp4")).on("close",() => callback());
   };