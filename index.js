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
  backgroundColor: "#1D69AB"
};

const msgBox = boxen(greeting, boxenOptions);
console.log(msgBox);

var create = "";
create = createOption(selectCreate);
