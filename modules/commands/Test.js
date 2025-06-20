module.exports.config = {
  name: "vot",
  version: "1.2.6",
  hasPermssion: 0,
  credits: "MintDaL",
  description: "Một số thông tin về bot",
  commandCategory: "tiện ích",
  hide:true,
  usages: "",
  cooldowns: 5,
    dependencies: {
		"fast-speedtest-api": ""
	}
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
  const content = args.slice(1, args.length);
  const { threadID, messageID, mentions } = event;
  const { configPath } = global.client;
  const { ADMINBOT } = global.config;
   const { NDH } = global.config;
  const { userName } = global.data;
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  const listNDH = NDH || config.NDH ||  [];
  {
    const PREFIX = config.PREFIX;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const fast = global.nodemodule["fast-speedtest-api"];
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
		const resault = await speedTest.getSpeed();
    const dateNow = Date.now();
    const time = process.uptime(),
	      	hours = Math.floor(time / (60 * 60)),
		      minutes = Math.floor((time % (60 * 60)) / 60),
		      seconds = Math.floor(time % 60);
    const data = [
     "The beauties in the world are all mediocre, only the enemy's wife makes me interested", "Butt, it's the truth", "Women are only fleeting, your wife is eternal.", "Admin is a cute person", "The youth of each of us are not the same, can be beautiful or turbulent, but left behind are memories that can't be erased forever."
    ];
    var link = [
      "https://i.imgur.com/bDgHtLv.jpg",
"https://i.imgur.com/e8pPmPv.jpg",
"https://i.imgur.com/FZNZrmg.jpg",
"https://i.imgur.com/8qk4gq0.jpg",
"https://i.imgur.com/0dM5C3z.jpg",
"https://i.imgur.com/DjPVuUm.jpg",
"https://i.imgur.com/Yuxe71d.jpg",
"https://i.imgur.com/Ud5cEFq.jpg",
"https://i.imgur.com/vCKIb0O.jpg",
"https://i.imgur.com/JkIl50k.jpg",
"https://i.imgur.com/6ABwS7i.jpg",
"https://i.imgur.com/Ye7qlbw.jpg",
"https://i.imgur.com/gryzOen.jpg",
"https://i.imgur.com/NP0sdUc.jpg",
"https://i.imgur.com/q0rKNsr.jpg",
"https://i.imgur.com/YVLjuVV.jpg",
"https://i.imgur.com/X24SK2G.jpg",
"https://i.imgur.com/eSAueQz.jpg",
"https://i.imgur.com/oRVOR0W.jpg",
"https://i.imgur.com/EkHWUpa.jpg",
"https://i.imgur.com/p2HzsXQ.jpg",
"https://i.imgur.com/vm0Sq3F.jpg",
"https://i.imgur.com/qKVZs8U.jpg",
"https://i.imgur.com/v3Zyyob.jpg",
"https://i.imgur.com/hNbsZ43.jpg",
"https://i.imgur.com/kVQx8Za.jpg",
"https://i.imgur.com/KO6rtui.jpg",
"https://i.imgur.com/EHSF0cM.jpg",
    ];
    
    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const date = moment.tz("Asia/Karachi").format("hh:MM:ss L");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++}/ ${name} - ${idAdmin}`);
      }
    }
    var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++}/ ${name1} - ${idNDH}`);
                }
            }
    var callback = () => 
      api.sendMessage({ body: `==「 ${namebot} 」==\n\n[🔰] 𝐏𝐫𝐞𝐟𝐢𝐱 𝐒𝐲𝐬𝐭𝐞𝐦: ${PREFIX}\n[📛] 𝐏𝐫𝐞𝐟𝐢𝐱 𝐛𝐨𝐱: ${prefix}\n[📱] 𝐌𝐨𝐝𝐮𝐥𝐞𝐬: ${commands.size}\n[🌐] 𝐏𝐢𝐧𝐠: ${Date.now() - dateNow}ms\n[📈] 𝐅𝐚𝐬𝐭: ${resault} 𝐌𝐁𝐒\n[🍁] 𝐓𝐨𝐭𝐚𝐥 𝐮𝐬𝐞𝐫𝐬: ${global.data.allUserID.length}\n[🎆] 𝐓𝐨𝐭𝐚𝐥 𝐭𝐡𝐫𝐞𝐚𝐝𝐬: ${global.data.allThreadID.length}\n────────────────────\n======「 𝐀𝐃𝐌𝐈𝐍 」 ======\n${msg.join("\n")}\n────────────────────\n===「 𝐋𝐨𝐯𝐞 𝐘𝐨𝐮 」 ===\n${msg1.join("\n")}\n────────────────────\n 𝐁𝐨𝐭 𝐨𝐧𝐥𝐢𝐧𝐞 ${hours} 𝐡𝐨𝐮𝐫(𝐬) ${minutes} 𝐦𝐢𝐧𝐮𝐭𝐞(𝐬) ${seconds} 𝐬𝐞𝐜𝐨𝐧𝐝(𝐬)\n\n────────────────────\n[𝐃𝐨 𝐲𝐨𝐮 𝐊𝐧𝐨𝐰 ?]: ${data[Math.floor(Math.random() * data.length)]}`, attachment: fs.createReadStream(__dirname + "/cache/nah.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/nah.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/nah.jpg")).on("close", () => callback()); 
  }
};