module.exports.config = {
	name: "nude2",
	version: "20.0.2",
	hasPermssion: 2,
	credits: "CANDY-PROJECT",
	description: "Nude Girl Image",
	commandCategory: "Random-Image",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://all-in-one-api.0xanupx0.repl.co/nudeanime').then(res => {
//	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: ``,
						attachment: fs.createReadStream(__dirname + `/cache/anear.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anear.jpg`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/anear.jpg`)).on("close", callback);
			})
}
