module.exports = {
    
    trigger: "contrast",
    enabled: true,
    
    category: "Image Manipulation",
    description: "Contrast the image",
    permissionLevel: 1,
	example: "contrast [amount]",
    
    where: 2,
    
    commandInitialization: function(){

        //initialize me daddy
        bot.addAlias(this, 'real');

    },

    triggerCommand: function (message, args, config){

       var image    = bot.cache.lastImage[message.author.id]; 
       var id       = bot.snowflake.nextId();

       var intensity = 50;

       if(!isNaN(args[1]))
           intensity = Number(args[1]);


       if(intensity > 100)
           intensity = 100

       if(intensity < -100)
           intensity = -100

       if(image == undefined){ message.channel.send(bot.L(config, 'imageCommands', 'noImage' )); return; }
       if(message.channel.type != "dm"){ if(!message.channel.permissionsFor(message.guild.me).has('ATTACH_FILES')) { message.channel.send( bot.L(config, 'genericMessages', 'errorBotPermissionS', 'Attach Files') ); return; } }
       message.channel.send( bot.L(config, 'imageCommands', 'processingImage') ).then( response =>{

        Jimp.read(image, function (err, file) {
            if (err){ message.channel.send( bot.L(config, 'shared', 'errorGeneric')  ) };

            file.contrast(intensity/100).write(id + ".png", ()=>{
                message.channel.send( '',  { files: [id + ".png"] }).then((ree)=>{
                    response.delete();
                    fs.unlink("./" + id + ".png", ()=>{})
                    bot.cache.lastImage[message.author.id] = ree.attachments.first().url;
                })
            })

        })
    })

    }

}