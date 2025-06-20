module.exports.config = {
	name: "prefix",
	version: "1.1.1",
	hasPermission: 0,
	credits: "John Lester",
	description: "Bot React",
	commandCategory: "System",
	cooldowns: 0,
};
const fs = require("fs");
const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("hh:mm:s");
  const hours = moment.tz("Asia/Karachi").format("hh");
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
      if(react.includes("prefix") || react.includes("Prefix") || 
react.includes("PREFIX") || react.includes("perfix") || react.includes("Perfix") || react.includes("prfix") || react.includes("Prfix") || react.includes("PRIFIX") || react.includes("prifix") || react.includes("prifex") || react.includes("Prifex") || react.includes("prefax") || react.includes("Profix")) {
      var heart = {
				body: `「 𓆩⃝𝐒𝐇𝐎𝐍𝐀𓆩๏𓆪 𝐏𝐑𝐄𝐅𝐈𝐗 」\n\n[🔰] 𝐏𝐫𝐞𝐟𝐢𝐱 𝐒𝐲𝐬𝐭𝐞𝐦: *\n[📛] 𝐏𝐫𝐞𝐟𝐢𝐱 𝐛𝐨𝐱: *\n[📱] 𝐌𝐨𝐝𝐮𝐥𝐞𝐬: undefined \n[⌚] 𝐓𝐢𝐦𝐞: ${time}\n\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 : 𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪`,attachment: fs.createReadStream(__dirname + `/noprefix/prefix.gif`)
			}
			api.sendMessage(heart, threadID, messageID);
    api.setMessageReaction("🌸", event.messageID, (err) => {}, true)
                }
        }
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
  