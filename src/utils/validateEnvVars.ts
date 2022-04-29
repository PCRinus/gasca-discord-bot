export const validateEnv = () => {
  if (!process.env.BOT_TOKEN) {
    console.error("Missing discord bot token");
    return false;
  }

  return true;
};
