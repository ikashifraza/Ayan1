module.exports.config = {
  name: "tiktok",
  version: "1.0.0",
  credits: "libyzxy0",
  description: "Generate random tiktok girl videos",
  hasPermssion: 0,
  commandCategory: "other",
  usage: "[shoti]",
  cooldowns: 0,
  dependencies: [],
};

module.exports.run = async function({ api, event }) {
  const axios = require("axios");
  const request = require('request');
  const fs = require("fs")
  let data = await axios.get('https://shoti-api.libyzxy0.repl.co/api/get-shoti?apikey=jj');
  let url = data.data.data.url;
  var file = fs.createWriteStream("modules/commands/cache/shoti.mp4");
  var rqs = request(encodeURI(url));
  rqs.pipe(file);
  file.on('finish', () => {
    return api.sendMessage({
      attachment: fs.createReadStream(__dirname + '/cache/shoti.mp4')
    }, event.threadID, event.messageID)
  })
};