const chalk = require("chalk");
const prompts = require("prompts");
const fs = require("fs");
module.exports = {
  async createOption(selectCreate) {
    var result = "";
    var project = false;
    if (fs.existsSync("hymity.json")) {
    } else {
      project = true;
    }
    async function askQns() {
      const response = await prompts({
        type: "select",
        name: "value",
        message: "What do you want to do?",
        choices: [
          {
            title: "Command",
            description: "Generate a Command",
            value: "0",
            disabled: project
          },
          {
            title: "Event",
            description: "Generate a Event",
            value: "1",
            disabled: project
          },
          {
            title: "Project",
            description: "Create a new Discord.JS Project",
            value: "2"
          }
        ]
      });
      result = response.value;
    }
    await askQns();
    selectCreate(result);
  }
};
