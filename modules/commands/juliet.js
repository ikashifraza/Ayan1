module.exports.config = {
	name: "malik",
	version: "1.1.1",
	hasPermission: 0,
	credits: "John Lester",
	description: "Bot React",
	usePrefix: true,
	commandCategory: "No Prefix",
	cooldowns: 0,
};
const fs = require("fs");
const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("hh:mm:s");
  const hours = moment.tz("Asia/Karachi").format("hh");
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
      if(react.includes("@Ju Lii Et") || 
react.includes("Ju Lii Et") || react.includes("Ju Lii Et") || react.includes("Ju Lii Et") || react.includes("@Ju Lii Et") || react.includes("@Ju Lii Et") || react.includes("@Ju Lii Et") || react.includes("Ju Lii Et")) {
      var heart = {
				body: `「 𝐂𝐀𝐋𝐋𝐈𝐍𝐆 𝐉𝐔𝐋𝐈𝐄𝐓 」\n           🅂🄾🅁🅁🅈\n𝐉𝐔𝐋𝐈𝐄𝐓) 𝐢𝐬 𝐂𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 𝐁𝐮𝐬𝐲.!!!\n\n⌚𝐓𝐈𝐌𝐄: ${time}\n\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 : 𓆩⃝𝗗𝗔𝗡𝗜𓆩๏𓆪`,attachment: fs.createReadStream(__dirname + `/noprefix/j.jpg`)
			}
			api.sendMessage(heart, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
                }
        }
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
  