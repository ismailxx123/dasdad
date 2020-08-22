const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "💫❤ | FeArLeSs | ❤ 𝒽𝑜ş 𝑔𝑒𝓁𝒹𝒾𝓃𝒾𝓏💫",
        "🌙Tagımız:❤ | FeArLeSs🌙",
        "🔥𝖍𝖊𝖗 𝖙ü𝖗𝖑ü 𝖔𝖞𝖚𝖓 𝖛𝖆𝖗𝖉ı𝖗. 𝖎𝖞𝖎 𝖊ğ𝖑𝖊𝖓𝖈𝖊𝖑𝖊𝖗🔥"  
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.twitch.tv/nigthfish" );
        }, 2 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setActivity(`💧❄ ${prefix}yardım - ${client.guilds.size} sunucu - ${client.users.size} kullanıcı 💧❄`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
