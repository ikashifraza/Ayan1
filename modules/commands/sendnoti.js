const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "sendnoti",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "TruongMini, mod by Clarence-DK",
    description: "",
    commandCategory: "Tiện ích",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Pakistan").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `== 𝗨𝘀𝗲𝗿 𝗥𝗲𝗽𝗹𝘆 ==\n\n『Reply』 : ${body}\n\n\n𝗡𝗮𝗺𝗲 ${name}  𝗚𝗿𝗼𝘂𝗽 ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `== 𝗨𝘀𝗲𝗿 𝗥𝗲𝗽𝗹𝘆 ==\n\n『Reply』 : ${body}\n\n\n𝗡𝗮𝗺𝗲: ${name} 𝗚𝗿𝗼𝘂𝗽 ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `𝗔𝗱𝗺𝗶𝗻 𝗥𝗲𝗽𝗹𝗶𝗲𝗱\n\n『Message』 : ${body}\n\n\n𝗔𝗱𝗺𝗶𝗻: ${name}\n\n𝐀𝐠𝐫 𝐢𝐬 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐤𝐚 𝐑𝐞𝐩𝐥𝐲 𝐊𝐫𝐧𝐚 𝐡𝐚𝐢 𝐭𝐮 𝐑𝐞𝐩𝐥𝐲 𝐌𝐚𝐢𝐧 𝐀𝐩𝐧𝐚 𝐌𝐬𝐠 𝐋𝐢𝐤𝐡𝐲𝐧`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body} 𝗔𝗱𝗺𝗶𝗻 𝗥𝗲𝗽𝗹𝗶𝗲𝗱\n\n𝗔𝗱𝗺𝗶𝗻: ${name}\n\nReply to this Message if you want to respond to this Announce.`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Pakistan").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `*┏━━ೋ•  •ೋ━━┓*
          𝗔𝗻𝗻𝗼𝘂𝗻𝗰𝗲𝗺𝗲𝗻𝘁
*┗━━ೋ•  •ೋ━━┛*
\n  ${args.join(" ")}\n\n𝐅𝐫𝐎𝐦: ${await Users.getNameUser(senderID)} `;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `*┏━━ೋ•  •ೋ━━┓*
          𝗔𝗻𝗻𝗼𝘂𝗻𝗰𝗲𝗺𝗲𝗻𝘁
*┗━━ೋ•  •ೋ━━┛*
\n ${args.join(" ")}\n\n𝐅𝐫𝐎𝐦: ${await Users.getNameUser(senderID)}`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`Send to ${can} thread, not send to ${canNot} thread`, threadID);
}