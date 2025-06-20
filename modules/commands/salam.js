module.exports.config = {
	name: "assalam u alaikum",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "𝐃𝐚𝐫𝐤 𝐑𝐮𝐥𝐞𝐱 𝐊𝐢𝐧𝐠 𝐀𝐧𝐮𝐩", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("Assalam u Alaikum")==0 || event.body.indexOf("salam")==0 || event.body.indexOf("Assalam o Alaikum")==0 || event.body.indexOf("assalamualaikum")==0 || event.body.indexOf("assalam")==0 || event.body.indexOf("ASSALAM U ALAIKUM")==0 || event.body.indexOf("ASSALAM O ALAIKUM")==0 || event.body.indexOf("Walaikum assalam")==0 || event.body.indexOf("sallam")==0 || event.body.indexOf("a ssalam")==0 ) { 
		var msg = {
				body: `<3 -ωʌɭʌɪ̽ƙʋო ʌᵴ ᵴʌɭʌო ωʌʀʌʜოʌʈʋɭʌʜɪ̽ ωʌ ɓʌʀʌƙʌʈʋ 𝐃ɛ̽ʌʀ ${name} ❤️`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }