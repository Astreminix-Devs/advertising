const Discord = require("discord.js");

const client = new Discord.Client();

client.on("message", (message) => {
    message.author.send("Hai")
});


client.login(process.env.token)

