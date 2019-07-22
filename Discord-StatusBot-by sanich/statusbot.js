const Discord = require('discord.js')
const client = new Discord.Client()
var config = require('./config.json')
let token = config.token

client.on("ready", () => {
    client.login(config.token);
    console.log(`Загружено!, ${client.user.tag}`)
});

client.on("message", (message) => {
    if(message.author.id!=client.user.id) return;
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    if (message.content == 'стрим'){
        client.user.setPresence({ game: { name: `ксго`, type: 'STREAMING', url: "https://www.twitch.tv/sanichof" } })
        console.log(`У ${client.user.username} был сменён статус на "Стримит"`)};
    if (message.content == 'играть'){
        client.user.setPresence({ game: { name: `тетрис`, type: 'PLAYING'} })   
        console.log(`У ${client.user.username} был сменён статус на "Играет"`)};
        if (message.content == 'слушать'){
            client.user.setPresence({ game: { name: `красивую музыку`, type: 'LISTENING'} })  
            console.log(`У ${client.user.username} был сменён статус на "Слушает"`)};  
            if (message.content == 'смотреть'){ 
                client.user.setPresence({ game: { name: `мультики`, type: 'WATCHING'} })
                console.log(`У ${client.user.username} был сменён статус на "Смотрит"`)};
    
})


client.login(config.token);
//by sanich
//  ------------------------------------------------ https://youtube.com/sanich ------------------------------------------------
