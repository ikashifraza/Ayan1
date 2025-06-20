const fs = require("fs");
module.exports.config = {
	name: "owner2",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Muhammad Ali", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("owner") || react.includes("owner") || react.includes("owner") ||
react.includes("Owner") ||
react.includes("owner")) {
		var msg = {
				body: `★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★
               ✦𝐃𝐀𝐍𝐈 𝐌𝐀𝐋𝐈𝐊✦

☞𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞:
https://www.facebook.com/100083009085825

★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 :  ✦𝐃𝐀𝐍𝐈 𝐌𝐀𝐋𝐈𝐊✦`,attachment: fs.createReadStream(__dirname + `/noprefix/dani.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }