const fs = require('fs');
const axios = require('axios');

module.exports.config = {
    name: "chandu",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙",
    description: "Send Images like as War",
    commandCategory: "group",
    usages: "bold war",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event }) {
    const amirUrls = [
"https://i.imgur.com/rxhhamj.jpeg",
"https://i.imgur.com/aC2iFqF.jpeg","https://i.imgur.com/vZzn27C.jpeg","https://i.imgur.com/TT7diry.jpeg","https://i.imgur.com/YkjAhux.jpeg","https://i.imgur.com/ii1QwAR.jpeg",
        // Add more image URLs as needed
    ];

    const sendImagesWithDelay = async () => {
        for (const imageUrl of amirUrls) {
            try {
                const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
                const imageBuffer = Buffer.from(response.data, 'binary');

                // Save the image temporarily
                fs.writeFileSync('temp.jpg', imageBuffer);
     //CrediT 𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙
                api.sendMessage({
                    attachment: fs.createReadStream('temp.jpg')
                }, event.threadID);
                fs.unlinkSync('temp.jpg');

                console.log(`Image sent successfully: ${imageUrl}`);
            } catch (error) {
                console.error(`Error sending image: ${imageUrl}`);
                console.error(error);
            }

            // Adjust the delay between sending images
            const delay = 5000; // 5 seconds 
          //1000 = 1 scnd
          //2000 = 2 scnd
        //  Continue....
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    };

    sendImagesWithDelay();
}
