const fs = require("fs");
var path = require("path");

module.exports = {
  createEvent(event) {
    var eventCode =
      "module.exports = {\n" + `   name: "${event}",\n` + "   execute(client";
    if (
      event == "channelDelete" ||
      event == "channelCreate" ||
      event == "channelPinsUpdate"
    ) {
      eventCode += ", channel";
    } else if (event == "channelUpdate") {
      eventCode += ", oldChannel, newChannel";
    } else if (event == "emojiDelete" || event == "emojiCreate") {
      eventCode += ", emoji";
    } else if (event == "emojiUpdate") {
      eventCode += ", oldemoji, newEmoji";
    } else if (event == "guildBanAdd" || event == "guildBanRemove") {
      eventCode += ", guild, user";
    } else if (
      event == "guildCreate" ||
      event == "guildDelete" ||
      event == "guildIntegrationsUpdate" ||
      event == "guildUnavailable"
    ) {
      eventCode += ", guild";
    } else if (event == "guildMemberAdd" || event == "guildMemberRemove") {
      eventCode += ", member";
    } else if (event == "guildMembersChunk") {
      eventCode += ", members, guild";
    } else if (event == "guildMemberUpdate") {
      eventCode += ", oldMember, newMember";
    } else if (event == "guildUpdate") {
      eventCode += ", oldGuild, newGuild";
    } else if (event == "messageDeleteBulk") {
      eventCode += ", messages";
    } else if (
      event == "messageDelete" ||
      event == "messageReactionRemoveAll" ||
      event == "shardDisconnect" ||
      event == "shardError"
    ) {
      eventCode += ", message";
    } else if (
      event == "messageReactionAdd" ||
      event == "messageReactionRemove"
    ) {
      eventCode += ", reaction, user";
    } else if (event == "messageReactionRemoveEmoji") {
      eventCode += ", reaction";
    } else if (event == "messageUpdate") {
      eventCode += ", oldMessage, newMessage";
    } else if (event == "presenceUpdate") {
      eventCode += ", oldPresence, newPresence";
    } else if (event == "rateLimit") {
      eventCode += "rateLimitInfo";
    } else if (event == "roleCreate" || event == "roleDelete") {
      eventCode += ", role";
    } else if (event == "roleUpdate") {
      eventCode += ", oldRole, newRole";
    } else if (event == "shardReady") {
      eventCode += ", id, unavailableGuilds";
    } else if (event == "shardReconnecting") {
      eventCode += ", id";
    } else if (event == "shardResume") {
      eventCode += ", id, replayedEvents";
    } else if (event == "typingStart") {
      eventCode += ", channel, user";
    } else if (event == "userUpdate") {
      eventCode += ", oldUser, newUser";
    } else if (event == "voiceStateUpdate") {
      eventCode += ", oldState, newState";
    } else if (event == "warn") {
      eventCode += ", info";
    } else if (event == "webhookUpdate") {
      eventCode += ", channel";
    } else if (event == "debug") {
      eventCode += ", info";
    } else if (event == "error") {
      eventCode += ", error";
    }
    eventCode +=
      ") {\n" +
      `
    
    ` +
      "}\n};";
    if (event == undefined) {
      return console.log("Cancelled!");
    }
    fs.writeFile(path.join("events", event + ".js"), eventCode, err => {
      if (err) console.log(err);
    });
    console.log("Created event: " + event + " in events/" + event + ".js");
  }
};
