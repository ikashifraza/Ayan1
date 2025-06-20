module.exports.config = {
  name: "dani",
  version: "2.0.8",
  hasPermssion: 0,
  credits: ".",
  description: "Artificial Intelligence",
  usePrefix: true,
  commandCategory: "Noprefix",
  usages: "ai [prompt] {noprefix}",
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
                                api.sendMessage("hello! i am dani how may assist you today?", event.threadID);
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