const fs = require("fs");

module.exports.config = {

	name: "maryam",

    version: "1.0.1",

	hasPermssion: 0,

	credits: "MR CHAND", 

	description: "no prefix",

	commandCategory: "No command marks needed",

	usages: "...",

    cooldowns: 1, 

};



module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {

	var { threadID, messageID } = event;

	if (event.body.indexOf("maryam")==0 || (event.body.indexOf("Maryam")==0 || (event.body.indexOf("admin")==0 || (event.body.indexOf("Admin")==0)))) {

		var msg = {

				body: "𝐌𝐀𝐑𝐘𝐀𝐌 𝐀𝐃𝐌𝐈𝐍 𝐇𝐄𝐑𝐄,",

				attachment: fs.createReadStream(__dirname + `/noprefix/MARYAM.jpg`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



      }