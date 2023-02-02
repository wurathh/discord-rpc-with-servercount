# Discord Bot RPC with Server Count
Show your Discord bot's server count on your Discord profile using Top.gg's API with Discord RPC.

## Requirements
1. Your bot must be published and approved on [Top.gg](https://top.gg/bot/new).
2. You must use the [Top.gg API](https://docs.top.gg) in your bot process to post your server count to Top.gg.

## Setup
1. Clone the repo to your PC.
2. Install the NPM packages.
3. Create your `config.json` file to use your [Top.gg API key](https://docs.top.gg/api/@reference/).
4. Customize your RPC data in `index.ts` to use [rich presence assets from your bot](https://discord.com/developers/applications) (`https://discord.com/developers/applications/:bot_id/rich-presence/assets`).
5. Save your `config.json` and `index.ts` files.
6. Open your Discord desktop client.
7. Start the process using `npm run start`.

> Thanks to [@pixxies](https://github.com/pixxies).
