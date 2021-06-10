const prompt = require("prompt");
const chalk = require("chalk");
const { createProject } = require("./createProject");

module.exports = {
  projectQuestions() {
    var name = "";
    var prefix = "";
    var token = "";
    prompt.message = " ";
    prompt.delimiter = " ";
    const properties = [
      {
        name: "name",
        validator: /^[a-zA-Z\s\-]+$/,
        warning: "Username must be only letters, spaces, or dashes",
        description: chalk.white("Project Name:"),
        required: true
      },
      {
        name: "prefix",
        description: chalk.white("Bot Prefix: "),
        required: true
      },
      {
        name: "token",
        hidden: true,
        replace: "*",
        description: chalk.white("Discord Bot Token:"),
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
      createProject(name, prefix, token);
    });
  }
};
