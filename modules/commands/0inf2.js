module.exports.config = {
	name: "infov2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Horizon & đuợc mod bởi Mr.ben theo sự chỉ dẫn nhiệt tình của DKhang",
	description: "Lấy thông tin người dùng dạng canvas",
	commandCategory: "Tiện ích",
	usages: "getInfo",
	cooldowns: 5
};
module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
    }
module.exports.run =async function({ api, event,args,client }) {  
        const { loadImage, createCanvas , registerFont} = require("canvas");
  const { threadID, senderID, type, messageReply } = event;  
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];

let pathImg = __dirname + "/cache/tan.png";
  let pathAvt1 = __dirname + "/cache/Avtmot.png";
  if (type == "message_reply") uid = messageReply.senderID;
  else uid = senderID;
 var cc = await api.getUserInfoV5(uid);
  //console.log(cc[0].o0.data.messaging_actors[0])
  var name = cc[0].o0.data.messaging_actors[0].name;
  var gender = cc[0].o0.data.messaging_actors[0].gender;
  var id = cc[0].o0.data.messaging_actors[0].id;
  var url = cc[0].o0.data.messaging_actors[0].url;
  var username = cc[0].o0.data.messaging_actors[0].username;
  var shortname = cc[0].o0.data.messaging_actors[0].short_name;
  var friend = cc[0].o0.data.messaging_actors[0].is_viewer_friend; 
  var cv = cc[0].o0.data.messaging_actors[0].work_info; 
  var mess = cc[0].o0.data.messaging_actors[0].is_messenger_user; 
  var chucvu = cc[0].o0.data.messaging_actors[0].is_employee; 
  var block = cc[0].o0.data.messaging_actors[0].is_message_blocked_biewer;

  var background = ["https://i.imgur.com/Vblq0gn.jpg"];
    var rd = background[Math.floor(Math.random() * background.length)];
    let tân = (
    await axios.get(`https://graph.facebook.com/${uid}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt1, Buffer.from(tân, "utf-8"));
  ben = await this.circle(pathAvt1);
  let getbackground = (
    await axios.get(`${rd}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getbackground, "utf-8"));
  let font = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/CaviarDreams.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/bot/CaviarDreams.ttf`, Buffer.from(font, "utf-8"));
  let baseImage = await loadImage(pathImg);
    let baseAvt1 = await loadImage(ben);
    let canvas = createCanvas(baseImage.width, baseImage.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseAvt1, 150, 115, 170, 170);
registerFont(__dirname + `/bot/CaviarDreams.ttf`, {
family: "time"
    });
    ctx.textAlign = "start";
    ctx.fillStyle = "#00FFFF";
    ctx.font = "26px time"; ctx.fillText(`Name: ${shortname}\nUsername:\n${username == "" ? "không dùng" : username}\nGender: ${gender == "MALE" ? "Male" : "Female"}`, 470, 135)
ctx.restore();
    ctx.save();
    ctx.beginPath(); 
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    fs.removeSync(pathAvt1);
  return api.sendMessage({
    body: `====[𝐈𝐍𝐅𝐎]====\n👤𝐍𝐚𝐦𝐞: ${name}\n👁𝐌𝐚𝐢𝐧 𝐍𝐚𝐦𝐞: ${shortname}\n🤳𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞: ${username == "" ? "không dùng" : username}\n👀𝐆𝐞𝐧𝐝𝐞𝐫: ${gender == "MALE" ? "Male" : "Female"}\n🏷𝐔𝐈𝐃: ${id}\nLinkFB: ${url}\n🤝𝐅𝐫𝐢𝐞𝐧𝐝𝐬: ${friend == true ? "Befriended with bots" : "Not yet friends with bots"}\n👋${mess == true ? "Messaged with bot" : "haven't messaged with bot yet"}\n🙄${block == true ? "Bot messages blocked" : "Do not block bot messages"}\n🗺𝐉𝐨𝐛: ${cv == null ? "Not available" : cv}\n💌𝐏𝐨𝐬𝐢𝐭𝐢𝐨𝐧: ${chucvu == null ? "Do not have" : chucvu}`, attachment: fs.createReadStream(pathImg) }, event.threadID, () => fs.unlinkSync(pathImg));
} 
//test xem,no đc, z đc rồi ha 
// is_viewer_friend: xem danh sách bb, sao nx ah
// làm như bth, lấy typename ko, nó bị lỗi replytest
//var callback = () => senblabla,  còn đó ko....