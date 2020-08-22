const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.RichEmbed()
    .setColor('#fffa00')
    .setAuthor(`${client.user.username} `, client.user.avatarURL) 
      .setDescription('**fa+Yardım** ile yardım alabilirsiniz.')
      .addField('** fa+Komutlar (10)**', `herkesin kullanabileceği standart komutlar. \n` +  '`1>fa+ailemiz!` , `2>fa+alıntı {mesaj id}!` , `3>fa+oyun-ara {bir oyun söyle}!` , `4>fa+hastebin {kod/cümle}!` , `5>fa+servericon!` , `6>fa+istatistik!` , `7>fa+saat!` , `8>fa+spotify!` , `9>fa+youtube {aradığın vidio ismi}!` , `10>fa+embedyaz {yazcağın yazı}!`')
      .addField('** fa+Eğlence (12)**',   `herkes için kullanılabilecek eğlence komutları. \n` + '`1>fa+düello @kullanıcı!` , `2>fa+dans {1,8 arası sayı söyle}!` , `3>fa+bulanık!` , `4>fa+fb!` , `5>fa+gs!` , `6>fa+bjk!` , `7>fa+hacked!` , `8>fa+havadurumu herangibi bir il!` , `9>fa+mcödül Title/text!` , `10>fa+rastgeleşifre!` , `11>fa+wasted!` , `12>fa+çekic {@kullanıcı}!`')
      .addField('** fa+Moderasyon (13)**',`yetkililer için moderasyon komutları bölüm . \n` +  '`1>fa+yazı-kanal-aç {açmak istediğiniz kanalın adı}!` , `2>fa+duyur {duyurmak istediğiniz şey}!` , `3>fa+otorol @kullanıcı #kayıtoda!` , `4>fa+otorolsıfırla!` , `5>fa+kapat otoyazı!` , `6>fa+otorolmesajkapat!` , `7>fa+oto-tag!` , `8>fa+reklam-taraması!` , `9>fa+ses-kanal-aç {açmak istediğiniz kanalın adı}!` , `10>fa+temizle/sil!` , `11>fa+bayan @kullanıcı {yeni kullanıcı ismi}!` , `12>fa+erkek @kullanıcı {yeni kullanıcı ismi}!` , `13>fa+katıl {Olduğun kanal}!`')
      .addField('** fa+Kurucu (3)**',`yetkililer için Kurucu komutları bölüm . \n` + '`1>fa+reboot {bota yenilenme çeker}!` , `2>fa+sunucunutanıt!` , `3>fa+sunucu-kurulum!`')
    .setFooter(`© ${client.user.username} ` , client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embedyardim).catch()
    
//////`${client.user.username}`
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp", "help", 'y', 'yadrım'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};