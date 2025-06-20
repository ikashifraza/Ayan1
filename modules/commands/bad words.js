module.exports.config = {
	name: "Bad Words",
	version: "1.1.1",
	hasPermission: 0,
	credits: "Mr Amir",
	description: "Bad words Warning",
	commandCategory: "No Prefix",
	cooldowns: 0,
};
const fs = require("fs");
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
      if(react.includes("lun") || react.includes("Lun") || 
react.includes("lol") || react.includes("Bc") || react.includes("bc") || react.includes("lorra") || react.includes("Lorra") || react.includes("lora") || react.includes("Behnchod") || react.includes("mc") || react.includes("Mc") ||
react.includes("Lun") || 
react.includes("harami") || react.includes("Harami") || react.includes("Mkl") || react.includes("bkl") || react.includes("Bsdk") || react.includes("Chut") || react.includes("Gand") || react.includes("gand") || react.includes("chut") || react.includes("lund") || react.includes("Lund")) {
      var heart = {
				body: `Bad Words Detected Stop Saying this 🤬.`
			}
			api.sendMessage(heart, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
                }
        }
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }