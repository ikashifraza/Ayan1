var amir = "Made By Mr Amir";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "ttt",
  version: "1.0",
  hasPermssion: 0,
  credits: `${amir}`, 
  description: "Logo maker Api",
  commandCategory: "logo",
  usages: "logo <type> <name>",
  cooldowns: 2,
};
//CREDITS AMIR FOR THE API :)
module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;
  if (args.length < 2) {
    return api.sendMessage(`Invalid command format! Use: logo <type> <name>\n\nLogo Type:\n\ntransformer\n\nflowerlogo\n\nharry\n\ngraffiti\n\norange\n\nmagma\n\nberry`, threadID, messageID);
  }
  let type = args[0].toLowerCase();
  let name = (await api.getUserInfo(senderID))[senderID].name
let text = args.slice(1).join(" ");
  const text1 = text.substr(0, text.indexOf(' | ')); 
  const length = parseInt(text1.length)
  const text2 = text.split(" | ").pop()
  const length_2 = parseInt(text2.length)
  let pathImg = __dirname + `/cache/Amir.png`;
  let apiUrl, message;
  
  switch (type) {
    case "1":
      apiUrl = `https://all-in-1--apis-amir.repl.co/api/textpro/pornhub?text=${text1}&text2=${text2}`;
      message = "[PORNHUB] Logo Created:";
      break;
      case "2":
      apiUrl = `https://all-in-1--apis-amir.repl.co/api/ephoto/quotestatus?text=${text1}&text2=${text2}`;
      message = "[Green] Logo Created:";
      break;
      case "3":
      apiUrl = `https://all-in-1--apis-amir.repl.co/api/photooxy/pubg?text=${text1}&text2=${text2}`;
      message = "[PUBG] Logo Created:";
      break;
    default:
      return api.sendMessage(`Invalid logo type!`, threadID, messageID);
  }

  api.sendMessage("Please wait...", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};