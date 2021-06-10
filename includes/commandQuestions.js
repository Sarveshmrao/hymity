const prompt = require("prompt");
const chalk = require("chalk");
const { createCommand } = require("./createCommand");
const fs = require("fs");

module.exports = {
  commandQuestions() {
    if (fs.existsSync("hooray.json")) {
    } else {
      return console.log("This is not a hooray project.");
    }
    var name = "";
    var category = "";
    prompt.message = " ";
    prompt.delimiter = " ";
    const properties = [
      {
        name: "name",
        validator: /^[a-zA-Z]+$/,
        warning: "Command Name must be only letters and is required.",
        description: chalk.white.bold("Command Name:"),
        required: true
      },
      {
        name: "category",
        description: chalk.white.bold("Category: "),
        warning: "Category must be only letters and is required.",
        required: true
      }
    ];

    prompt.start();

    prompt.get(properties, function (err, result) {
      if (err) {
        return onErr(err);
      }
      name = result.name;
      category = result.category;
      createCommand(name, category);
    });
  }
};
