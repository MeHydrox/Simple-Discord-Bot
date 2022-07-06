const express = require("express")
const app = express();

app.listen("3000", (req, res) => {
  console.log("Project is running")
}
 
app.get("/", () => {
  res.send("Hello World")
});

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]})

client.on("message", message => {
  if(message.content === "ping") {
    message.channel.send("Pong!")
  }
 //adding commands < remove this line :)
  if(message.content === "command") {
    message.channel.send("Reply")
  }
});

client.login("your bot token")
