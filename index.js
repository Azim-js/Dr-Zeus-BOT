const Discord=require('discord.js');

const client=new Discord.Client();

client.on("ready",()=>{
    console.log(`LOGGED IN ${client.tag}!`);
})

client.on("message",msg=>{
    if(msg.content==="ping"){
        msg.reply("pong");
    }
})

client.login(process.env.TOKEN)