const Discord = require("discord.js") 

exports.run = async (client, message, args) => {
const promises = [
	client.shard.fetchClientValues('guilds.cache.size'),
	client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
];

Promise.all(promises)
	.then(results => {
		const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
		const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
		
                 const embed = new Discord.MessageEmbed() 

                 .addField("BOTUNUZUN ADI・Genel Bilgileri") 
                 .addField("<:ainfo:973975005471834233>・Toplam Sunucu Sayısı:", totalGuilds) 
                 .addField("<:ayeler:974345579016626246>・Toplam Kullanıcı Sayısı:", totalMembers) 
                 .addField("<a:ayukleniyor:976807798123933747>・Shard ID:", client.shard.ids) 
                 .addField("<a:ayukleniyor:976807798123933747>・Shard Sayısı:", "1") 

                 .addField(`${client.shard.ids}・ID'li Shard'ın Bilgileri`, random)
                 .addField("<:ainfo:973975005471834233>・Toplam Sunucu", client.guilds.cache.size) 
                 .addField("<:ayeler:974345579016626246>・Toplam Kullanıcı", client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()) 
                .setTimestamp() 

                 .setColor("BLURPLE") 
                 .setFooter(`Gecikme: ${client.ws.ping}`, client.user.displayAvatarURL()) 
                return message.channel.send(embed);
	})
	.catch(console.error);

}
exports.conf = {
aliases: [] 
}
exports.help = {
name: "shard" 
} 










//Discord: ArviS#0011
//Discord Sunucum: https://discord.gg/strangerthingstr

//İnstagram: @arvis_here