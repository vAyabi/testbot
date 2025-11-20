// index.js
// Bot Discord squelette, aucune fonctionnalité pour l’instant.

const { Client, GatewayIntentBits } = require("discord.js");

const PREFIX = "!";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Événement déclenché quand le bot est connecté
client.once("ready", () => {
  console.log(`Bot connecté en tant que ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
  const command = args.shift().toLowerCase();

  console.log(`Commande reçue : ${command} avec args :`, args);

  if (command === "ping") {
    handlePingCommand(message);
  } else {
    message.reply("Commande inconnue. Essaie `!ping` pour tester le bot.");
  }
});

// Feature 2 : commande !ping
function handlePingCommand(message) {
  const sentAt = Date.now();

  message.channel.send("Pong ?").then((sentMessage) => {
    const latency = Date.now() - sentAt;
    sentMessage.edit(`Pong ! Latence ≈ **${latency}ms**`);
  });
}
// ⚠️ Pour l’instant on met un token placeholder.
// Quand vous voudrez vraiment lancer le bot, remplacez par votre vrai token
// ou ajoutez un système .env dans un autre commit.
const TOKEN = "A_REMPLACER_PAR_UN_VRAI_TOKEN";

client.login(TOKEN);
