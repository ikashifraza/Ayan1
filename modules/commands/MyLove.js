module.exports.config = {
  name: "mylove",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Mr Amir",
  description: "Pairing Love",
  commandCategory: "Love", 
  usages: "mylove", 
  cooldowns: 5
};
module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function({ api, event,Threads, Users }) {
        const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
     const { loadImage, createCanvas, registerFont } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
    const request = require('request');
  const res = await axios.get(`https://docs-api.jrtxtracy.repl.co/saying/hearing?apikey=JRTvip_2200708248`);
var love = res.data.data;
   const pidusage = await global.nodemodule["pidusage"](process.pid);
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Karachi").format("D/MM/YYYY || hh:mm:ss");
    var thu = moment.tz('Asia/karachi').format('dddd');
     if (thu == 'Sunday') thu = '𝗦𝘂𝗻𝗱𝗮𝘆'
  if (thu == 'Monday') thu = '𝗠𝗼𝗻𝗱𝗮𝘆'
  if (thu == 'Tuesday') thu = '𝗧𝘂𝗲𝘀𝗱𝗮𝘆'
  if (thu == 'Wednesday') thu = '𝗪𝗲𝗱𝗻𝗲𝘀𝗱𝗮𝘆'
  if (thu == "Thursday") thu = '𝗧𝗵𝘂𝗿𝘀𝗱𝗮𝘆'
  if (thu == 'Friday') thu = '𝗙𝗿𝗶𝗗𝗮𝘆'
  if (thu == 'Saturday') thu = '𝗦𝗮𝘁𝘂𝗿𝗱𝗮𝘆'
  let pathImg = __dirname + "/noprefix/mdl.jpg";
  let pathAvt1 = __dirname + "/cache/Av7.png";
  let pathAvt2 = __dirname + "/cache/7.png";
  var id1 = event.senderID;
        var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
        var tle = Math.floor(Math.random() * 101);
        var namee = (await Users.getData(event.senderID)).name
        const botID = api.getCurrentUserID();
        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
        var id = listUserID[Math.floor(Math.random() * listUserID.length)];
        var name = (await Users.getData(id)).name 
var background = ["https://imgur.com/c7Eppap.png","https://i.imgur.com/4qT6XAd.png"];
    var rd = background[Math.floor(Math.random() * background.length)];
  
        let getAvtmot = (
    await axios.get( `https://graph.facebook.com/${id1}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,{ responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt1, Buffer.from(getAvtmot, "utf-8"));
avt1 = await this.circle(pathAvt1);
        let getAvthai = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt2, Buffer.from(getAvthai, "utf-8"));
 avt2 = await this.circle(pathAvt2);             
   if (!fs.existsSync(__dirname +
        `/tad/UTMFacebookK&TItali.ttf`)) {
        let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1lh3U5emvpL4wJvxW_M8LFORc4rargy1s&export=download`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/tad/UTMFacebookK&TItali.ttf`, Buffer.from(getfont, "utf-8"));
   }
  let getbackground = (
    await axios.get(`${rd}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getbackground, "utf-8"));
  
    let baseImage = await loadImage(pathImg);
    let baseAvt1 = await loadImage(avt1);
  let baseAvt2 = await loadImage(avt2);
    let canvas = createCanvas(baseImage.width, baseImage.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseAvt1, 447, 92, 130, 130);
ctx.drawImage(baseAvt2, 85, 92, 130, 130);
registerFont(__dirname + `/tad/UTMFacebookK&TItali.ttf`, {
      family: "UTM"
    });
    ctx.textAlign = "start";    
    ctx.font = "23px UTM";
    ctx.fillStyle = "#00000";
    ctx.fillText(`${namee}`, 475, 65);
  ctx.font = "23px UTM";
    ctx.fillStyle = "#00000";
    ctx.fillText(`${name}`, 100, 65);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    fs.removeSync(pathAvt1);
fs.removeSync(pathAvt2);
        return api.sendMessage({body:`💓=== [ 𝗟𝗼𝘃𝗲𝗹𝘆 𝗖𝗼𝘂𝗽𝗹𝗲 ] ===💓\n━━━━━━━━━━━━\n [⚜️] 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 𝗣𝗮𝗶𝗿𝗶𝗻𝗴 [⚜️]\n[❤️]➜ 𝗬𝗼𝘂𝗿 𝗡𝗮𝗠𝗲: ${namee}\n[🤍]➜ 𝗬𝗼𝘂𝗿 𝗟𝗼𝘃𝗲𝗿 𝗡𝗮𝗠𝗲: ${name}\n[🎀]➜ 𝗟𝗼𝘆𝗮𝗹: ${tle}%\n[⏰]➜ 𝗧𝗶𝗠𝗲: ${gio} || ${thu}\n━━━━━━━━━━━━`,attachment: fs.createReadStream(pathImg) }, event.threadID, () => fs.unlinkSync(pathImg));
} 
