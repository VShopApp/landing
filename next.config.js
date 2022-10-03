module.exports = {
	async redirects() {
		return [
			{
				source: "/discord",
				destination: "https://discord.gg/G58HZKGjv2",
				permanent: false,
			},
			{
				source: "/donate",
				destination: "https://www.buymeacoffee.com/vasc",
				permanent: false,
			},
		];
	},
};
