module.exports.config = {
    name: "dua",
    version: "1.0.0",
    hasPermision: 0,
    credit: "CaNDY Project",
    description: "dua",
    usePrefix: true,
    commandCategory: "random-img",
    cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  var link = ["https://i.imgur.com/8ArCQLs.mp4" ,];
var alikoja = [`  ❀°••• ┄─────╮\n                     💫💫دعائے قنوت💫💫\n ╰─────┄ •••°❀\n\nاَللّٰہُمَّ إِنَّا نَسْتَعِیْنُکَ وَنَسْتَغْفِرُکَ وَنُؤْمِنُ بِکَ وَنَتَوَکَّلُ عَلَیْکَ وَنُثْنِيْ عَلَیْکَ الْخَیْرَ وَنَشْکُرُکَ وَلَا نَکْفُرُکَ وَنَخْلَعُ وَنَتْرُکُ مَنْ یَّفْجُرُکَ۔ اَللّٰہُمَّ إِیَّاکَ نَعْبُدُ وَلَکَ نُصَلِّيْ وَنَسْجُدُ وَإِلَیْکَ نَسْعٰی وَنَحْفِدُ وَنَرْجُوْ رَحْمَتَکَ وَنَخْشٰی عَذَابَکَ إِنَّ عَذَابَکَ بِالْکُفَّارِمُلْحِقٌ\n\n(𝘾𝙍𝘼𝘿𝙄𝙏:- 𝗗𝗔𝗡𝗜 𝗠𝗔𝗟𝗜𝗞)❤️🌿`];
  var juswa1 = alikoja[Math.floor(Math.random() * alikoja.length)];
  var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.mp4")).on("close",() => callback());
   };