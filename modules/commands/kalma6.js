module.exports.config = {
    name: "ayat",
    version: "1.0.0",
    hasPermision: 0,
    credit: "Dani Project",
    description: "ayat",
    usePrefix: true,
    commandCategory: "random-img",
    cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  var link = ["https://i.imgur.com/oTTE7sV.mp4" ,];
var alikoja = [`  ❀°••• ┄─────╮\n                    💫💫آیات الکرسی💫💫\n ╰─────┄ •••°❀\n\بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ

اللّٰهُ لَاۤ اِلٰهَ اِلَّا هُوَ الۡحَـىُّ الۡقَيُّوۡمُۚ  لَا تَاۡخُذُهٗ سِنَةٌ وَّلَا نَوۡمٌ‌ؕ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الۡاَرۡضِ‌ؕ مَنۡ ذَا الَّذِىۡ يَشۡفَعُ عِنۡدَهٗۤ اِلَّا بِاِذۡنِهٖ‌ؕ يَعۡلَمُ مَا بَيۡنَ اَيۡدِيۡهِمۡ وَمَا خَلۡفَهُمۡ‌ۚ وَلَا يُحِيۡطُوۡنَ بِشَىۡءٍ مِّنۡ عِلۡمِهٖۤ اِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرۡسِيُّهُ السَّمٰوٰتِ وَالۡاَرۡضَ‌‌ۚ وَلَا يَــئُوۡدُهٗ حِفۡظُهُمَا ‌ۚ وَ هُوَ الۡعَلِىُّ الۡعَظِيۡمُ ۞ 

سورہ البقرہ پارہ٣ آیت نمبر:255\n\n(𝘾𝙍𝘼𝘿𝙄𝙏:- 𝗗𝗔𝗡𝗜 𝗠𝗔𝗟𝗜𝗞)❤️🌿`];
  var juswa1 = alikoja[Math.floor(Math.random() * alikoja.length)];
  var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.mp4")).on("close",() => callback());
   };