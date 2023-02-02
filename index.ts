import config from './config.json';
import fetch from 'node-fetch';
import rpc from 'discord-rpc';

const client = new rpc.Client({ transport: 'ipc' })

export async function refreshRPC() {
    fetch(`https://top.gg/api/bots/${config.clientId}/stats`, {          
        headers:{ "Authorization": config.apiKey}     
    })
    .then(response => response.json())
    .then(data => {

        if(data && data.server_count) {
            let serverCount = Number(data.server_count).toLocaleString();

            client.setActivity({
                details: `Advanced giveaway system.`,
                state: `${serverCount} server`,
                largeImageKey: 'enterprise',
                largeImageText: 'Invite Enterprise',
                instance: false,
                buttons: [
                    {
                        label: "Invite",
                        url: "https://discord.com/api/oauth2/authorize?client_id=995432171328241684&permissions=8&scope=bot%20applications.commands"
                    },
                    {
                        label: "Vote",
                        url: "https://top.gg/bot/995432171328241684/vote"
                    }
                ]
              });
        }
    })
}

client.on('ready', () => {
    refreshRPC()
    
    setInterval(() => {
        refreshRPC()
    }, 300 * 1000)
})

client.login({ clientId: config.clientId })