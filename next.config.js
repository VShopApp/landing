module.exports = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/kQseRYZdnG",
        permanent: false,
      },
    ];
  },
};
