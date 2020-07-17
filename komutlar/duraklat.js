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
        
  
  if (!voiceChannel) return message.channel.send("Bir sesli kanalda değilsin.")

  if (serverQueue && serverQueue.playing) {
    serverQueue.playing = false;
    serverQueue.connection.dispatcher.pause();
        
      return message.channel.send("Şarkı başarıyla duraklatıldı!");
    }
 
    if (!serverQueue) return message.channel.send("Şuanda herhangi bir şarkı çalmıyor.");

};

exports.conf = {
    enabled: true,
    aliases: ['d'],
    permLevel: 0
};

exports.help = {
    name: 'duraklat',
    description: 'Çalan şarkıyı duraklatır.',
    usage: 'duraklat'
};