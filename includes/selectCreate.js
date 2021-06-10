const { projectQuestions } = require("./projectQuestions");
const { commandQuestions } = require("./commandQuestions");
const { eventQuestions } = require("./eventQuestions");
module.exports = {
  selectCreate(id) {
    var create = "";
    if (id == 0) {
      console.log("Initializing Command Creation");
      commandQuestions();
    } else if (id == 1) {
      console.log("Initializing Event Creation");
      eventQuestions();
    } else if (id == 2) {
      console.log("Initializing Project Creation");
      projectQuestions();
    }
    return create;
  }
};
