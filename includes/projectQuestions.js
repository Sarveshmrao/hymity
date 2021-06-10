const prompt = require("prompt");
const chalk = require("chalk");
const { createProject } = require("./createProject");

module.exports = {
  projectQuestions() {
    var name = "";
    var prefix = "";
    var token = "";
    var owner = "";
    prompt.message = " ";
    prompt.delimiter = " ";
    const properties = [
      {
        name: "name",
        validator: /^[a-zA-Z]+$/,
        warning: "Project name must be only letters and is required.",
        description: chalk.white("Project Name:"),
        required: true
      },
      {
        name: "prefix",
        description: chalk.white("Bot Prefix: "),
        warning: "Bot prefix is required.",
        required: true
      },
      {
        name: "token",
        hidden: true,
        replace: "*",
        description: chalk.white("Discord Bot Token: "),
        warning: "Bot token is required.",
        required: true
      },
      {
        name: "owner",
        description: chalk.white("Discord Bot Owner ID: "),
        warning: "Bot Owner ID is required.",
        required: true
      }
    ];

    prompt.start();

    prompt.get(properties, function (err, result) {
      if (err) {
        return onErr(err);
      }
      name = result.name;
      token = result.token;
      prefix = result.prefix;
      owner = result.owner;
      createProject(name, prefix, token, owner);
    });
  }
};
