module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "Anup Kumar",
    description: "Notification of bots or people entering groups with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
    const path = join(__dirname, "cache", "joinGif");
    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
 
    const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("", event.threadID, () => api.sendMessage({body: `✩̣̣̣̣̣ͯ┄•͙──✧❝𝘽𝙊𝙏✰❞✧──•͙┄✩̣̣̣̣̣ͯ\n\n${global.config.BOTNAME} 𝘾𝙊𝙉𝙉𝙀𝘾𝙏𝙀𝘿 🌐✅\n▬▬▬▬▬▬▬▬▬▬▬▬\n    ❀°••• ┄─────╮\n𝘼𝙎𝙎𝘼𝙇𝘼𝙈 𝙐 𝘼𝙇𝘼𝙄𝙆𝙐𝙈\n    ╰─────┄ •••°❀\n▬▬▬▬▬▬▬▬▬▬▬▬\n𝙃𝙀𝙇𝙇𝙊 𝙈𝙔 𝙉𝘼𝙈𝙀 𝙄𝙎 ${global.config.BOTNAME}\n▬▬▬▬▬▬▬▬▬▬▬▬\n𝙈𝙔 𝙋𝙍𝙀𝙁𝙄𝙓 𝙄𝙎 : [ ${global.config.PREFIX} ]\n▬▬▬▬▬▬▬▬▬▬▬▬\n𝙏𝙔𝙋𝙀 ${global.config.PREFIX}𝙃𝙀𝙇𝙋 𝙏𝙊 𝙎𝙀𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙇𝙄𝙎𝙏.\n▬▬▬▬▬▬▬▬▬▬▬▬
𝙈𝙔 𝘽𝙊𝙎𝙎 𝙉𝘼𝙈𝙀 𝙄𝙎 (𝗗𝗔𝗡𝗜 𝗠𝗔𝗟𝗜𝗞)💖\n▬▬▬▬▬▬▬▬▬▬▬▬\n𝙆𝙄𝙉𝘿𝙇𝙔 𝙐𝙎𝙀 ${global.config.PREFIX}𝘾𝘼𝙇𝙇𝙀𝘿 𝙁𝙊𝙍 𝘼𝙉𝙔 𝙄𝙎𝙎𝙐𝙀💫\n▬▬▬▬▬▬▬▬▬▬▬▬
𝙏𝙃𝘼𝙉𝙆𝙎 𝙔𝙊𝙐 𝙁𝙊𝙍 𝙐𝙎𝙄𝙉𝙂 𝘾𝘼𝙉𝘿𝙔 (𝙇𝘼𝙁𝙃𝘼𝙉𝙂𝘼) 𝘽𝙊𝙏☀️ `, attachment: fs.createReadStream(__dirname + "/cache/joinMp4/hello.gif")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinGif");
            const pathGif = join(path, `${threadID}.gif`);
 
            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);
            
            (typeof threadData.customJoin == "undefined") ? msg = "┈ ⋞ 〈 ⏣ 𝙃𝙀𝙇𝙇𝙊𝙒 ⏣ 〉 ⋟ ┈\n▬▬▬▬▬▬▬▬▬▬▬▬\n➡️ {name},\n▬▬▬▬▬▬▬▬▬▬▬▬ 𝙔𝙊𝙐'𝙍𝙀 𝙏𝙃𝙀' {soThanhVien} 𝙈𝙀𝙈𝘽𝙀𝙍\n▬▬▬▬▬▬▬▬▬▬▬▬\n𝙊𝙁 {threadName} <3\n▬▬▬▬▬▬▬▬▬▬▬▬\n𝘾𝙃𝙄𝙇 𝙆𝙍𝙊 𝙈𝘼𝙎𝙏𝙄 𝙆𝙍𝙊 𝙂𝙄𝙍𝙇𝙎 𝙆𝙄 𝙄𝙕𝘼𝙏 𝙆𝙍𝙊 𝙍 𝙂𝙍𝙊𝙐𝙋 𝙆 𝙍𝙐𝙇𝙀𝙎 𝙁𝙊𝙇𝙇𝙊𝙒 𝙆𝙍𝙊 𝙎𝙃𝙐𝙆𝙍𝙄𝙔𝘼💛" : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);
 
            if (existsSync(path)) mkdirSync(path, { recursive: true });
 
            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));
 
            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }
 
            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
}