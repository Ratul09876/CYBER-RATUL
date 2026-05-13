module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Ꭱ4ͲUᏞ ☢️_𖣘 BOSS ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["100000478146113", "61576357565998"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ Off ] Oky , Ꭱ4ͲUᏞ ☢️_𖣘 BOSS ", event.threadID, event.messageID);
  api.sendMessage(`[ OK ] ${global.config.BOTNAME} Bot are now turned off.`,event.threadID, () =>process.exit(0))
}
