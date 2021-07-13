const Discord=require('discord.js');

const client=new Discord.Client();

const mySecret = process.env[TOKEN]

client.on("ready",()=>{
    console.log(`LOGGED IN ${client.user.tag}!`);
})

client.on("message",msg=>{
    if(msg.content==="hi zeus" || msg.content==="hello zeus"){
        msg.reply("HEY, SCIENCE IS THE KEY FOR YOUR QUEST !");
    }
})

client.login(mySecret)