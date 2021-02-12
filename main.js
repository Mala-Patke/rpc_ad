const rpc = require('discord-rpc');

const client = new rpc.Client({ transport : 'ipc'}); 


client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            assets: {
                large_image: 'img'
            },
            details: 'Join for daily Giveaways',
            state: 'And Gamenights!',
            buttons: [
                { label: 'Join Now!', url: 'https://discord.gg/yM3aARfQck/' }
            ]
        }
    });
});

client.login({ clientId: "782759579653898270" })
    .then(() => console.log(`RPC is online! This exe and discord must be open at the same time for this to work.`))
    .catch(console.error);