const axios = require("axios");

module.exports.config = {
  name: "sim2",
  version: "1",
  hasPermssion: 0,
  credits: "Grey, Daniel",
  description: "Message",
  commandCategory: "Fun",
  usages: "sim <message>",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
  let { threadID, messageID } = event;
  const response = args.join(" ");

  if (!args[0]) {
    api.sendMessage("Hi!", threadID, messageID);
    return;
  }

  try {
    const res = await axios.get(`https://testapi.heckerman06.repl.co/api/other/simsimi?message=${response}&lang=ur`);
    const respond = res.data.message;
    api.sendMessage(respond, threadID, messageID);
  } catch (error) {
    api.sendMessage("Error occurred while fetching data from the Simsimi API.", threadID, messageID);
  }
};