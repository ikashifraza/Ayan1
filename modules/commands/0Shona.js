module.exports.config = {
  name: "dani",
  version: "2.0.8",
  hasPermssion: 0,
  credits: ".",
  description: "Artificial Intelligence",
  commandCategory: "Ai",
  usePrefix: true,
  usages: "ai [prompt]",
  cooldowns: 1,
  dependencies: {
        "openai": ""
    }
};
module.exports.run = async function({ api, event, args }) {
 

const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
                  apiKey: "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",
                            });
                            const openai = new OpenAIApi(configuration);
  let data = args.join(" ");
                            if (data.length < 2) {
                                api.sendMessage("𝐉𝐢𝐢 𝐁𝐨𝐋𝐨 𝐃𝐚𝐧𝐢 𝐊𝐢 𝐉𝐚𝐚𝐧 ٩(◕‿◕｡)", event.threadID);
                            } else {
                                try {
                                    const completion = await openai.createCompletion({
                                        model: "text-davinci-003",
                                        prompt: args.join(" "),
                                        temperature: 0.5,
                                        max_tokens: 2048,
                                        top_p: 0.3,
                                        frequency_penalty: 0.5,
                                        presence_penalty: 0.0,
                                    });
                                    api.sendMessage(completion.data.choices[0].text, event.threadID, event.messageID);
                                }
                                catch (error) {
                                    if (error.response) {
                                        console.log(error.response.status);
                                        console.log(error.response.data);
                                    } else {
                                        console.log(error.message);
                                        api.sendMessage(error.message, event.threadID);
                                    }
                                }
                            }
                                      }