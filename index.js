const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
    host: "///",
    version: "///",
    username: "///",
    password: "///",
    auth: "microsoft"
})

bot.on("chat", function(username, message){
    if(username === bot.username) return;

    let msg = message.toString();

    if(msg = "Hello"){
        bot.chat("Hello")
        }
    }
)
