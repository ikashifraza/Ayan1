module.exports.config = {
    name: "kalma3",
    version: "1.0.0",
    hasPermision: 0,
    credit: "CaNDY Project",
    description: "kalma3",
    commandCategory: "random-img",
    cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  var link = ["https://i.imgur.com/o3T6qru.mp4" ,];
var alikoja = [`𝙠𝙖𝙡𝙢𝙖3\n\n\nتیسراکلمہ تمجید\n\nسُبْحَانَ اﷲِ وَالْحَمْدُِ ﷲِ وَلَآ اِلٰهَ اِلَّا اﷲُ وَاﷲُ اَکْبَرُ ط وَلَا حَوْلَ وَلَا قُوَّةَ اِلَّا بِاﷲِ الْعَلِيِ الْعَظِيْمِ.\n\nاللہ پاک ہے اور سب تعریفیں اللہ ہی کے لیے ہیں اور اللہ کے سوا کوئی عبادت کے لائق نہیں اور اللہ سب سے بڑا ہے۔ گناہوں سے بچنے کی طاقت اور نیکی کی توفیق نہیں مگر اللہ کی طرف سے عطا ہوتی ہے جو بہت بلند عظمت والا ہے \n\n(𝘾𝙍𝘼𝘿𝙄𝙏:- 𝗗𝗔𝗡𝗜 𝗠𝗔𝗟𝗜𝗞)❤️🌿`];
  var juswa1 = alikoja[Math.floor(Math.random() * alikoja.length)];
  var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.mp4")).on("close",() => callback());
   };