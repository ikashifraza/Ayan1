module.exports.config = {
name: "restart",
version: "30.0.0",
hasPermssion: 2,
credits: "manhIT\nModified: Choru Tiktokers",
description: "Restart the Bot",
commandCategory: "system",
usages: "",
cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
const { threadID, messageID } = event;
console.log('Bot is restarting...');
return api.sendMessage(`「 𝐑𝐄𝐒𝐓𝐀𝐑𝐓 」\n\n${global.config.BOTNAME} 𝗶𝘀 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝗦𝗼𝗺𝗲 𝗦𝗲𝗰𝗼𝗻𝗱𝘀 ⌚...!!!\n\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 : 𓆩𝐃𝐀𝐍𝐈 𝐊𝐀 𝐇𝐎 𝐘𝐀𝐑𓆩๏𓆪`, threadID, () => process.exit(1));
}