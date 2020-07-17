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

    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();

      return message.channel.send("Şarkı başarıyla devam ettiriliyor...");
    }
  
    if (!serverQueue) return message.channel.send("Şuanda herhangi bir şarkı çalmıyor.");

};

exports.conf = {
    enabled: true,
    aliases: ['de'],
    permLevel: 0
};

exports.help = {
    name: 'devamet',
    description: 'Duraklatılmış şarkıyı devam ettirir.',
    usage: 'devamet'
};