module.exports.config = {
    name: "otherbot2",
    version: "1.0.5",
    hasPermssion: 0,
    credits: "CANDY-PROJECT",
    description: "AUTOLEAVE",
    commandCategory: "system",
    usages: "add",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
}
module.exports.onLoad = function () {
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
    !fs.existsSync(path.join(__dirname, "./candy/otherbot.json")) ? fs.writeFileSync(path.join(__dirname, `./candy/otherbot.json`), JSON.stringify({}, null, 4), {mode: 0o666}) : "";
}

module.exports.handleEvent = async ({api, event}) => {
    const request = global.nodemodule["request"]
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
    var data = JSON.parse(fs.readFileSync(path.join(__dirname, "./candy/otherbot.json"), {encoding: "utf8"}))
    //Lấy tên nhóm (threadName) và tên người nhắn (name)
    let user = await api.getUserInfo(event.senderID)
    let thread = await api.getThreadInfo(event.threadID)
    let name = user[event.senderID].name

      //Khai báo admin bot
    var admin = "" //Thay uid adminbot :> ????
    if(event.senderID == api.getCurrentUserID()) return;
    if (data[event.body]) {
      return api.sendMessage({
        body: ` ${name} OTHERBOT DETECTED ${event.body}?\n Send bot`,
        mentions:[{
                tag:name, 
                id:event.senderID
            }]
      },event.threadID,() => {
            var idad = global.config.ADMINBOT
            api.removeUserFromGroup(api.getCurrentUserID(),event.threadID)
            for(let ad of idad){
                setTimeout(()=>{
                    var callback = () => api.sendMessage({
                        body:`[SYSTEM] The bot just went out ${thread.name} - ${event.threadID}\n Reason: \n${name} - ${event.senderID} : ${event.body}`,
                        attachment: fs.createReadStream(__dirname + "/candy/avatar_thread_otherbot.jpg")
                    }, ad, () => fs.unlinkSync(__dirname + "/candy/avatar_thread_otherbot.jpg"))
                    request(encodeURI(`${thread.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/candy/avatar_thread_otherbot.jpg')).on('close',() => callback())
                },5000)
            }
        })
    }
}
module.exports.run = async function({api, args, event}) {
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
    var content = args.splice(1, args.length)
    if (!content) return api.sendMessage(`Lack of travel!`,event.threadID, event.messageID)
    var data = JSON.parse(fs.readFileSync(path.join(__dirname, "./candy/otherbot.json"), {encoding: "utf8"}))
    if (!args[0])return api.sendMessage(`Use: \notherbot [word]\n\n\n by Candy!`,event.threadID,event.messageID)
    if (args[0] == `add`){
      if (!content) return api.sendMessage(`Missing words need more!`,event.threadID, event.messageID)
      if (data[content]) return api.sendMessage(`Already available from ${content}`,event.threadID, event.messageID)
      data[content] = {}
      try{
         fs.writeFileSync(path.join(__dirname, `./candy/otherbot.json`), JSON.stringify(data, null, 4), {mode: 0o666})
        return api.sendMessage("More words success!", event.threadID, event.messageID)
      }catch(err){
        return api.sendMessage("Loi: "+err, event.threadID, event.messageID)
      }
    }else if(args[0] == `del`){
      if (!data[content]) return api.sendMessage(`There is no word for this`,event.threadID, event.messageID)
      delete data[content]
      try{
         fs.writeFileSync(path.join(__dirname, `./candy/otherbot.json`), JSON.stringify(data, null, 4), {mode: 0o666})
      return api.sendMessage("Delete word successfully!", event.threadID, event.messageID)
      }catch(err){
        return api.sendMessage("Loi: "+err, event.threadID, event.messageID)
      }
    }else if(args[0] == `list`){
        var list = Object.keys(data) , number = 0 ;
        var msg = "List of forbidden words:\n";
        for(let text of list){
            number++
            msg += `${number}. ${text}\n`
        }
        return api.sendMessage(msg, event.threadID, event.messageID)
    }
                   }