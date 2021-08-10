// require the needed discord.js classes
const Discord = require("discord.js-selfbot");
const { Intents } = require("discord.js-selfbot");
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

require('dotenv').config();

client.on("ready", async() => {
    console.log(`${client.user.tag} has logged in`)
    client.user.setActivity("Grinding Levels", {type: "PLAYING"})

    const Guild = client.guilds.cache.get(process.env.GUILD)
    const Channel = Guild.channels.cache.get(process.env.CHANNEL)

    const lmao = [
        "Kunwar will lose",
        "Kunwar wont win",
        "Ima get this number one",
        "apple",
        "apple pie",
        "joink",
        "lv69 max is a legend",
        "killer is best",
        "I coded this bot",
        "You dont know who I am",
        "I am disquised as a lebanese",
        "I did not get cwl bonus :( but I dont care",
        "Can I get your number?",
        "Get it",
    ];

    setInterval(() => {
        Channel.send(`${lmao[Math.floor(Math.random() * 11)]}`)
    }, 30000);
})

client.login(process.env.TOKEN);