module.exports.config = {
    name: "logos",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "... - Long LTD",
    description: "War In Chatbox",
    commandCategory: "Noprefix",
    usages: "noprefix",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("★𝗟𝗢𝗚𝗢𝗦 𝗖𝗠𝗡𝗗𝗦★\n\n1 ✏️*berry\n2 ✏️*butterfly\n3 ✏️*Grass\n4 ✏️*Pubg\n5 ✏️*glitch\n6 ✏️*glitch2\n7 ✏️*gold\n8 ✏️*flaming\n9 ✏️*chocolate\n10✏️*orange\n11 ✏️*neonlight\n12 ✏️*3Dbox\n13 ✏️*Thunder\n14 ✏️*logobear\n15 ✏️*neon\n16 ✏️*3Dchrismas\n17 ✏️*strawberry\n18 ✏️*cup\n19 ✏️*lighter\n20 ✏️*pencil\n21 ✏️*sky\n\n𝗡𝗲𝘄 𝗟𝗼𝗴𝗼𝘀 𝗖𝗼𝗺𝗶𝗻𝗴 𝗦𝗼𝗼𝗻..\nMade By: 𝗠 𝗔𝗺𝗶𝗿");


  }
