const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
    host: "neruxvace.net",
    version: "1.8.9",
    username: "henriwergin@gmail.com",
    password: "Henri2404!?",
    auth: "microsoft"
})

bot.on("chat", function(username, message){
    if(username === bot.username) return;

    let msg = message.toString();

    if(msg = ".join Danze"){
        bot.chat("Jo mach ich")
        bot.chat("/ps join Its_Danze")
        }
    }
)