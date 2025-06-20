module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "left notification",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
  const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? " " : "\n\n𝙊𝙃 𝙉𝙊\n𝙋𝙄𝘾𝙃𝙒𝘼𝙍𝘼𝙔 𝙋𝘼𝙍 𝙆𝙄𝘾𝙆𝙀𝘿 𝘽𝙔 𝘼𝘿𝙈𝙄𝙉 🖐🥳";
  (typeof data.customLeave == "undefined") ? msg = "𝘿𝘼𝙍𝙋𝙊𝙆 𝘽𝙃𝘼𝙂 𝙂𝘼𝙔𝘼 𝙂𝙍𝙊𝙐𝙋 𝙎𝘼{name} {type}" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);
  
  var link = [  
"https://i.imgur.com/U2Uqx9J.jpg",
"https://i.imgur.com/vtg9SY8.jpg",
"https://i.imgur.com/FTM9eHt.jpg",
"https://i.imgur.com/VGb89J8.jpg",
  ];
  var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashO.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashO.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashO.jpg")).on("close", () => callback());
                                                                  }