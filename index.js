#!/usr/bin/env node
const prompt = require("prompt");
const chalk = require("chalk");
const boxen = require("boxen");
const { createOption } = require("./includes/createOption");
const { selectCreate } = require("./includes/selectCreate");
const greeting = chalk.white.bold("HOORAY Bot Generator!");

const boxenOptions = {
  padding: 1,
  borderStyle: "round",
  borderColor: "white",
  backgroundColor: "#545454"
};

const msgBox = boxen(greeting, boxenOptions);
console.log(msgBox);
if (process.argv[2] == "command") {
  selectCreate(0);
} else if (process.argv[2] == "event") {
  selectCreate(1);
} else if (process.argv[2] == "project" || process.argv[2] == "new") {
  selectCreate(2);
} else {
  createOption(selectCreate);
}
