const Discord = require('discord.js');

exports.run = async (client, message, params) => {
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  var channel = client.channels.find('id', '615666805788246016')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("»  ❤ | FeArLeSs | ❤ | Register | Canlı Destek")
  .setDescription("**Canlı Desteği kullandğın için teşekkür ederiz, Seninle ekibim ilgilenicektir lütfen bekle!**")
  .setFooter("30 Saniye içinde geri dönülmezse lütfen iletişime geçin <@615666805788246016>")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» Canlı Destek | Talep")
  .addField('**» Kullanıcı Adı:ΣƘİƤƁİZİZ 亗DirilişKhan#1061 **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı:SUNUCUMUZ BAKIMDADIR ❤ **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['canlıdestek'],
  permLevel: 0
};

exports.help = {
  name: 'canlı-destek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'g!canlı-destek'
};