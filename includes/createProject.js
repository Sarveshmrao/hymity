const { exec } = require("child_process");
const fs = require("fs");
var path = require("path");
const fse = require("fs-extra");
module.exports = {
  async createProject(name, prefix, token, owner) {
    //writing package.json
    const packagejson = {
      name: name,
      version: "1.0.0",
      description: "",
      main: "index.js",
      scripts: {
        dev: "nodemon ./bot.js",
        start: "node ./bot.js",
        build: ""
      },
      keywords: [],
      author: "",
      license: "ISC",
      dependencies: {
        "discord.js": "^12.5.3"
      },
      devDependencies: {
        nodemon: "^2.0.7"
      }
    };
    console.log("Initializing NPM....");
    const packageJsonString = JSON.stringify(packagejson, null, 2);
    try {
      fs.mkdirSync(name, { recursive: true });
    } catch (e) {
      console.log("Error: ", e);
    }
    fs.writeFile(path.join(name, "package.json"), packageJsonString, err => {
      if (err) console.log(err);
    });
    const configjson = {
      name: name,
      language: "javascript",
      manager: "npm",
      token: token,
      prefix: prefix,
      owner: owner
    };
    console.log("NPM Initialized \nCreating Config....");
    const configJsonString = JSON.stringify(configjson, null, 2);
    fs.writeFile(path.join(name, "hooray.json"), configJsonString, err => {
      if (err) console.log(err);
    });

    const srcDir = __dirname + "/template";
    const destDir = name;
    console.log("Config Created! \nCreating Direcotries!");
    fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log(
          "Project Created! \n Run `cd " +
            name +
            "` to create commands and events."
        );
      }
    });
  }
};
