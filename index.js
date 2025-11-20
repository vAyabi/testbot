// index.js
// Feature 1 : système de commandes avec préfixe

const { Client, GatewayIntentBits } = require("discord.js");

// Préfixe des commandes
const PREFIX = "!";

// Client avec les intents nécessaires pour lire les messages
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Quand le bot est prêt
client.once("ready", () => {
  console.log(`Bot connecté en tant que ${client.user.tag}`);
});

// Écoute des messages
client.on("messageCreate", (message) => {
  // On ignore les bots
  if (message.author.bot) return;

  // On ignore les messages sans préfixe
  if (!message.content.startsWith(PREFIX)) return;

  // On enlève le préfixe et on sépare commande + arguments
  const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
  const command = args.shift().toLowerCase();

  console.log(`Commande reçue : ${command} avec args :`, args);

  // Pour l'instant, aucune vraie fonctionnalité :
  // on se contente de répondre un message générique.
  message.reply("Commande reçue, mais les fonctionnalités arriveront plus tard 😉");
});

// ⚠️ TOKEN à remplacer par ton vrai token plus tard
const TOKEN = "A_REMPLACER_PAR_UN_VRAI_TOKEN";

client.login(TOKEN);
