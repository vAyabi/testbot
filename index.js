// index.js
// Bot Discord squelette, aucune fonctionnalité pour l’instant.

const { Client, GatewayIntentBits } = require("discord.js");

// Client minimal
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// Événement déclenché quand le bot est connecté
client.once("ready", () => {
  console.log(`Bot connecté en tant que ${client.user.tag}`);
});

// TODO: ajouter des fonctionnalités petit à petit ici

// ⚠️ Pour l’instant on met un token placeholder.
// Quand vous voudrez vraiment lancer le bot, remplacez par votre vrai token
// ou ajoutez un système .env dans un autre commit.
const TOKEN = "A_REMPLACER_PAR_UN_VRAI_TOKEN";

client.login(TOKEN);
