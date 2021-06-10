const prompt = require("prompt");
const chalk = require("chalk");
const { createEvent } = require("./createEvent");
const fs = require("fs");

module.exports = {
  async eventQuestions() {
    if (fs.existsSync("hooray.json")) {
    } else {
      return console.log("This is not a hooray project.");
    }
    const prompts = require("prompts");
    var result = "";
    async function askQuestions() {
      const response = await prompts({
        type: "autocomplete",
        name: "event",
        message: "Which event(s) would you like to generate?",
        choices: [
          { title: "CHANNEL_CREATE", value: "channelCreate" },
          { title: "CHANNEL_DELETE", value: "channelDelete" },
          { title: "CHANNEL_PINS_UPDATE", value: "channelPinsUpdate" },
          { title: "CHANNEL_UPDATE", value: "channelUpdate" },
          { title: "DEBUG", value: "debug" },
          { title: "EMOJI_CREATE", value: "emojiCreate" },
          { title: "EMOJI_DELETE", value: "emojiDelete" },
          { title: "EMOJI_UPDATE", value: "emojiUpdate" },
          { title: "ERROR", value: "error" },
          { title: "GUILD_BAN_ADD", value: "guildBanAdd" },
          { title: "GUILD_BAN_REMOVE", value: "guildBanRemove" },
          { title: "GUILD_CREATE", value: "guildCreate" },
          { title: "GUILD_DELETE", value: "guildDelete" },
          {
            title: "GUILD_INTEGRATIONS_UPDATE",
            value: "guildIntegrationsUpdate"
          },
          { title: "GUILD_MEMBER_ADD", value: "guildMemberAdd" },
          { title: "GUILD_MEMBER_REMOVE", value: "guildMemberRemove" },
          { title: "GUILD_MEMBERS_CHUNK", value: "guildMembersChunk" },
          { title: "GUILD_MEMBERS_SPEAKING", value: "guildMembersSpeaking" },
          { title: "GUILD_MEMBER_UPDATE", value: "guildMemberUpdate" },
          { title: "GUILD_UNAVAILABLE", value: "guildUnavailable" },
          { title: "GUILD_UPDATE", value: "guildUpdate" },
          //{ title: "MESSAGE", value: "message" },
          { title: "MESSAGE_DELETE", value: "messageDelete" },
          { title: "MESSAGE_DELETE_BULK", value: "messageDeleteBulk" },
          { title: "MESSAGE_REACTION_ADD", value: "messageReactionAdd" },
          { title: "MESSAGE_REACTION_REMOVE", value: "messageReactionRemove" },
          {
            title: "MESSAGE_REACTION_REMOVE_ALL",
            value: "messageReactionRemoveAll"
          },
          {
            title: "MESSAGE_REACTION_REMOVE_EMOJI",
            value: "messageReactionRemoveEmoji"
          },
          { title: "MESSAGE_UPDATE", value: "messageUpdate" },
          { title: "PRESENCE_UPDATE", value: "presenceUpdate" },
          { title: "RATE_LIMIT", value: "rateLimit" },
          //{ title: "READY", value: "ready" },
          { title: "ROLE_CREATE", value: "roleCreate" },
          { title: "ROLE_DELETE", value: "roleDelete" },
          { title: "ROLE_UPDATE", value: "roleUpdate" },
          { title: "SHARD_DISCONNECT", value: "shardDisconnect" },
          { title: "SHARD_ERROR", value: "shardError" },
          { title: "SHARD_READY", value: "shardReady" },
          { title: "SHARD_RECONNECTING", value: "shardReconnecting" },
          { title: "SHARD_RESUME", value: "shardResume" },
          { title: "TYPING_START", value: "typingStart" },
          { title: "USER_UPDATE", value: "userUpdate" },
          { title: "VOICE_STATE_UPDATE", value: "voiceStateUpdate" },
          { title: "WARN", value: "warn" },
          { title: "WEBHOOK_UPDATE", value: "webhookUpdate" }
        ],
        hint: "- Space to select. Return to submit"
      });
      result = response.event;
    }
    await askQuestions();
    createEvent(result);
  }
};
