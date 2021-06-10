module.exports = {
  name: "ping",
  description: "Ping!",
  usage: "put usage here",
  permissions: "SEND_MESSAGES",
  guildOnly: false,
  cooldown: 1,
  args: false,
  execute(message, args) {
    message.channel.send("Pong.");
  }
};
