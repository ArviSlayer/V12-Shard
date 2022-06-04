const Discord = require('discord.js');
const client = new Discord.Client()
const express = require('express');
const ayarlar = require('./ayarlar.json');

const captain = new Discord.ShardingManager('./BotunAnaDosyası.js', { //BotunAnaDoyası Kısmını Silip Ana Dosyanızın Adını (main.js - bot.js) vs. Yazacaksınız

    totalShards: 2,

    token: (process.env.TOKEN) //.env İsimiyle Dosya Oluşturup İçine <"token": "BOT TOKENİ"> Girin

});

captain.on('shardCreate', shard => {
  
  console.log(`${shard.id+1} ID'li Shard Kullanıma Hazır`)

    const webhook = new Discord.WebhookClient("WEBHOOK ID`NİZ","WEBHOOK TOKEN`İNİZ")
const embed1 = new Discord.MessageEmbed() 
 .setColor("RED") 
.setTitle("BOTUNUZUN ADI・Shard") 
 .setDescription(`<a:abuyutec:976511062943866940>・**${shard.id+1}/${shard.id+1} ID'li Shard'a Bağlanılıyor...`)
webhook.send(embed1)
    setTimeout(() => {

  const webhook = new Discord.WebhookClient("WEBHOOK ID`NİZ","WEBHOOK TOKEN`İNİZ")
const embed = new Discord.MessageEmbed() 
.setColor("BLURPLE") 
.setTitle("BOTUNUZUN ADI・Shard") 
 .setDescription(`<a:atik:981936970710286436>・**${shard.id+1}/${shard.id+1} ID'li Shard'a Bağlanıldı`)
webhook.send(embed)
  }, 3000)

});


setTimeout(() => {

    captain.broadcastEval("process.exit()");

}, 8600000);

captain.spawn();










//Discord: ArviS#0011
//Discord Sunucum: https://discord.gg/strangerthingstr

//İnstagram: @arvis_here