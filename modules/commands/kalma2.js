module.exports.config = {
    name: "kalma2",
    version: "1.0.0",
    hasPermision: 0,
    credit: "CaNDY Project",
    description: "kalma2",
    usePrefix: true,
    commandCategory: "random-img",
    cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  var link = ["https://i.imgur.com/TJlHmYl.mp4" ,];
var alikoja = [`𝙠𝙖𝙡𝙢𝙖2\n\n\nدوسرا کلمہ شہادت\n\nاَشْهَدُ اَنْ لاَّ اِلٰهَ اِلاَّ اﷲُ وَحْدَهُ لَا شَرِيْکَ لَهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ.\n\nمیں گواہی دیتا ہوں کہ اللہ کے سوا کوئی عبادت کے لائق نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں اور میں گواہی دیتا ہوں کہ بیشک محمد ( صلی اللہ علیہ وآلہ وسلم ) اللہ کے بندے اور رسول ہیں \n\n(𝘾𝙍𝘼𝘿𝙄𝙏:- 𝗗𝗔𝗡𝗜 𝗠𝗔𝗟𝗜𝗞❤️🌿`];
  var juswa1 = alikoja[Math.floor(Math.random() * alikoja.length)];
  var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.mp4")).on("close",() => callback());
   };