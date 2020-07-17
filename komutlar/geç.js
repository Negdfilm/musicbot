const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyDSiyHBWZI9dDZBWXloNVhrHbpzTTfa0L8');

exports.run = async (client, message, args) => {
    const queue = client.queue;
    
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
   
    if (!voiceChannel) return message.channel.send("Bir sesli kanalda değilsin.");
  
  
    if (!serverQueue) return message.channel.send("Şuanda herhangi bir şarkı çalmıyor.");
  
  if(!message.member.hasPermission("KİCK_MEMBERS")) return message.reply("İZİNİN YOKKKK"); 
    serverQueue.connection.dispatcher.end('');
    message.channel.send("Şarkı başarıyla geçildi!")

};

exports.conf = {
    enabled: true,
    aliases: ['g'],
    permLevel: 0
};

exports.help = {
    name: 'geç',
    description: 'Sıradaki şarkıya geçer. Sırada şarkı yoksa şarkıyı kapatır.',
    usage: 'geç'
};