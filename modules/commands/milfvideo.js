module.exports.config = {
	name: "milfvideo",
	version: "30.0.10",
	hasPermssion: 2,
	credits: "Dark Rulex Team",
	description: "Porn Video",
	usePrefix: true,
	commandCategory: "random video",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://dark-rulex-vip.0xanupx0.repl.co/milfvideo').then(res => {
	// let ext = res.data.substring(res.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: ``,
						attachment: fs.createReadStream(__dirname + `/cache/sadvideo.Mp4`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sadvideo.Mp4`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/sadvideo.Mp4`)).on("close", callback);
			})
}