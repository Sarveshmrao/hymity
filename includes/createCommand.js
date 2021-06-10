const fs = require("fs");
var path = require("path");

module.exports = {
  async createCommand(name, category) {
    if (fs.existsSync(path.join("commands", category))) {
    } else {
      try {
        fs.mkdirSync(path.join("commands", category), { recursive: true });
      } catch (e) {
        console.log("Error: ", e);
      }
    }
    const command = `
module.exports = {
  name: "${name}",
  aliases: [],
  description: "Description Here",
  usage: "Put Usage Here",
  permissions: "SEND_MESSAGES",
  guildOnly: false,
  cooldown: 1,
  args: false,
  ownerOnly: false,
  execute(message, args, client) {
    message.channel.send("${name} command works!");
  }
};`;

    fs.writeFile(
      path.join("commands", category, name + ".js"),
      command,
      err => {
        if (err) console.log(err);
      }
    );
    console.log(
      "Created Command: " +
        name +
        " in commands/" +
        category +
        "/" +
        name +
        ".js"
    );
  }
};
