# Simple-Discord-Bot

To add more command's:

```client.on("message", message => {
  if(message.content === "Hi") {
    message.channel.send("pong!")
  }```
  
  after this:
  
  ```client.on("message", message => {
  if(message.content === "Hi") {
    message.channel.send("pong!")
  }
  if(message.content === "command") {
  message.channel.send("reply")
  }```
  
  please give credits (pls)
  
  dont forget to add your bot token:
  
  ```client.login("bot token")```
  
add this code in package.json:

``{
  "name": "bot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "discord.js": "^13.8.1",
    "express": "^4.18.1"
  }
}``
