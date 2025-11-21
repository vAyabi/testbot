// index.js
// Feature 1 : système de commandes avec préfixe

const { Client, GatewayIntentBits } = require("discord.js");

const PREFIX = "!";

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
  // Pour l'instant, aucune vraie fonctionnalité :
  // on se contente de répondre un message générique.
  message.reply("Commande reçue, mais les fonctionnalités arriveront plus tard 😉");
});

// Feature 3 : commande !help
function handleHelpCommand(message) {
  message.channel.send(
    [
      "Voici les commandes disponibles :",
      "`!ping` - Vérifie si le bot répond et affiche la latence.",
      "`!help` - Affiche ce message d’aide.",
      "`!userinfo` - Affiche des infos sur toi.",
    ].join("\n"),
  );
}

// Feature 3 : commande !userinfo
function handleUserInfoCommand(message) {
  const member = message.member;
  const user = message.author;

  const lines = [
    `👤 Pseudo : **${user.username}**`,
    `🆔 ID : \`${user.id}\``,
    member
      ? `📅 A rejoint le serveur : **${member.joinedAt.toLocaleDateString()}**`
      : "📅 Info de serveur non disponible.",
  ];

  message.channel.send(lines.join("\n"));
}

  message.channel.send("Pong ?").then((sentMessage) => {
    const latency = Date.now() - sentAt;
    sentMessage.edit(`Pong ! Latence ≈ **${latency}ms**`);
  });
}
// ⚠️ Pour l’instant on met un token placeholder.
// Quand vous voudrez vraiment lancer le bot, remplacez par votre vrai token
// ou ajoutez un système .env dans un autre commit.
const TOKEN = process.env.DISCORD_BOT_TOKEN;

client.login(TOKEN);
