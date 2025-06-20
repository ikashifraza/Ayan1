module.exports.config = {
  name: "pakistan",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Zeeshan Altaf",
  description: "Dont Change This Credits Otherwise Your Bot lol",
  commandCategory: "random-img",
  usages: "pakistan",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/vlChxdG.jpeg",
"https://i.imgur.com/CBIW1ka.jpeg",
"https://i.imgur.com/kAx7EQI.jpeg",
 "https://i.imgur.com/LTiJK0N.jpeg",
"https://i.imgur.com/EyavF7o.jpeg",
"https://i.imgur.com/ry0GKbn.jpeg",
"https://i.imgur.com/qgTtqfA.jpeg",
"https://i.imgur.com/3clTYXg.jpeg",
"https://i.imgur.com/3QfGxNS.jpeg",
"https://i.imgur.com/3QfGxNS.jpeg",
"https://i.imgur.com/JND5RAl.jpeg",
"https://i.imgur.com/EadcKHn.jpeg",
"https://i.imgur.com/rxpHMWW.jpeg",
"https://i.imgur.com/qZ7C8Zy.jpeg",
"https://i.imgur.com/QUYk3zz.jpeg",
"https://i.imgur.com/0XgxtXu.jpeg",
"https://i.imgur.com/1SNngbj.jpeg",
"https://i.imgur.com/xia4CsQ.jpeg",
"https://i.imgur.com/oLrIJxV.jpeg",
"https://i.imgur.com/5SK1sBm.jpeg",

     ];
     var callback = () => api.sendMessage({body:`•𝐁𝐄𝐀𝐔𝐓𝐘 𝐎𝐅 𝐏𝐀𝐊𝐈𝐒𝐓𝐀𝐍🇵🇰  
     
•𝐍𝐀𝐓𝐔𝐑𝐄 𝐎𝐅 𝐏𝐀𝐊𝐈𝐒𝐓𝐀𝐍😘         
                                               [𝙈𝘼𝘿𝙀 𝘽𝙔 ✰☪︎𝐃𝐀𝐍𝐈 𝐌𝐀𝐋𝐈𝐊✰☪︎]
${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
