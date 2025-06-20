//========== CHARDS BOT ==========//
module.exports.config = {
  name: "Shonav2",
  version: "0.0.1",
  hasPermission: 0,
  credits: "CHARDS BOT",
  description: "Mirai Bard Version",
  commandCategory: "entertainment",
  usages: "ask anything",
  cooldowns: 5,
};
//========== CHARDS BOT ==========//
// -- RICHARD RETADA -- //
//========== CHARDS BOT ==========//
const axios = require("axios");
const fs = require("fs");
module.exports.run = async function({ api, event }) {
  const { threadID, messageID } = event;
  const query = event.body.slice(5).trim();

  if (!query) {
    api.sendMessage("Could you kindly share your inquiry or pose a question?", threadID, messageID);
    return;
  }

  api.sendMessage("We are currently searching for an answer. Please hold on while we find the information you're looking for...", threadID, messageID);

  try {
    const response = await axios.get(`https://sensui-useless-apis.codersensui.repl.co/api/tools/bard?question=${query}`);
    const { content, images } = response.data.newResponse;

    if (content && content.length > 0) {
      if (!fs.existsSync("cache")) fs.mkdirSync("cache");

      const attachments = [];
      for (let i = 0; i < images.length; i++) {
        const imagePath = `cache/test${i + 1}.png`;

        try {
          const imageResponse = await axios.get(images[i].url, { responseType: "arraybuffer" });
          fs.writeFileSync(imagePath, imageResponse.data);
          attachments.push(fs.createReadStream(imagePath));
        } catch (error) {
          console.error("An error has occurred during the process of downloading and saving the photo. Apologies for the inconvenience.", error);
        }
      }

      api.sendMessage({ attachment: attachments, body: content }, threadID, messageID);
    } else {
      api.sendMessage(content, threadID, messageID);
    }
  } catch (error) {
    console.error("An error has occurred while attempting to fetch data from the Bard API. We apologize for the inconvenience and will work to resolve the issue as soon as possible.", error);
    api.sendMessage("We regret to inform you that the attempt to fetch data from the API has failed. We apologize for the inconvenience and will address the issue promptly.", threadID, messageID);
  }
};
