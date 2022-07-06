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
