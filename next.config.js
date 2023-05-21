module.exports = {
	async redirects() {
		return [
			{
				source: "/discord",
				destination: "https://discord.gg/G58HZKGjv2",
				permanent: false,
			},
			{
				source: "/restore-purchase",
				destination: "https://tally.so/r/mRdPEJ",
				permanent: false,
			},
		];
	},
};
