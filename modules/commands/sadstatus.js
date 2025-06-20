module.exports.config = {
	name: "sadvideo",
	version: "30.0.10",
	hasPermssion: 0,
	credits: "Dark Rulex Team",
	description: "Random Sad Status",
	commandCategory: "random video",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://dark-rulex-vip.0xanupx0.repl.co/sadvideo').then(res => {
//	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: ``,
						attachment: fs.createReadStream(__dirname + `/cache/sadvideo.Mp4`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sadvideo.Mp4`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/sadvideo.Mp4`)).on("close", callback);
			})
}