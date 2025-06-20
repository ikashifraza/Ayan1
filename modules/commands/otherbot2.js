module.exports.config = {
    name: "autoleave",
    version: "1.0.5",
    hasPermssion: 0,
    credits: "Zyros + HelyT - Đông Fix",
    description: "",
    commandCategory: "system",
    usages: "add [từ ngữ]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
}
module.exports.onLoad = function () {
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
    !fs.existsSync(path.join(__dirname, "./cache/autoleave.json")) ? fs.writeFileSync(path.join(__dirname, `./cache/autoleave.json`), JSON.stringify({}, null, 4), {mode: 0o666}) : "";
}

module.exports.handleEvent = async ({api, event}) => {
    const request = global.nodemodule["request"]
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
    var data = JSON.parse(fs.readFileSync(path.join(__dirname, "./cache/autoleave.json"), {encoding: "utf8"}))
    //Lấy tên nhóm (threadName) và tên người nhắn (name)
    let user = await api.getUserInfo(event.senderID)
    let thread = await api.getThreadInfo(event.threadID)
    let name = user[event.senderID].name

      //Khai báo admin bot
    var admin = "" //Thay uid adminbot :> ????
    if(event.senderID == api.getCurrentUserID()) return;
    if (data[event.body]) {
      return api.sendMessage({
        body: ` ${name} Jab iSko Rakhna Tha Tu Meri kYa ZaRoraT Thii JahiL LooG DobaRa Add mTT kRna .. Bye 🤬😠`,
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
                        body:`[SYSTEM] Bot just out ${thread.name} - ${event.threadID}\n Reason:\n${name} - ${event.senderID} : ${event.body}`,
                        attachment: fs.createReadStream(__dirname + "/cache/avatar_thread_autoleave.jpg")
                    }, ad, () => fs.unlinkSync(__dirname + "/cache/avatar_thread_autoleave.jpg"))
                    request(encodeURI(`${thread.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/avatar_thread_autoleave.jpg')).on('close',() => callback())
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
    var data = JSON.parse(fs.readFileSync(path.join(__dirname, "./cache/autoleave.json"), {encoding: "utf8"}))
    if (!args[0])return api.sendMessage(`Dùng: \nword add [từ ngữ]\n\nAuthor: Zyros + HelyT!`,event.threadID,event.messageID)
    if (args[0] == `add`){
      if (!content) return api.sendMessage(`Missing words to add!`,event.threadID, event.messageID)
      if (data[content]) return api.sendMessage(`Already available from${content}`,event.threadID, event.messageID)
      data[content] = {}
      try{
         fs.writeFileSync(path.join(__dirname, `./cache/autoleave.json`), JSON.stringify(data, null, 4), {mode: 0o666})
        return api.sendMessage("More words of success!", event.threadID, event.messageID)
      }catch(err){
        return api.sendMessage("Loi: "+err, event.threadID, event.messageID)
      }
    }else if(args[0] == `del`){
      if (!data[content]) return api.sendMessage(`There is no word for this`,event.threadID, event.messageID)
      delete data[content]
      try{
         fs.writeFileSync(path.join(__dirname, `./cache/autoleave.json`), JSON.stringify(data, null, 4), {mode: 0o666})
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