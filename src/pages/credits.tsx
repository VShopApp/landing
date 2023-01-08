import PageLayout from "../components/PageLayout";

const credits = [
	{
		name: "Mobile app",
		members: [
			{
				name: "vasc",
				imgUrl: "https://avatars.githubusercontent.com/u/39592306",
			},
		],
	},
	{
		name: "Website",
		members: [{ name: "vasc", imgUrl: "https://avatars.githubusercontent.com/u/39592306" }],
	},
	{
		name: "Documentation",
		members: [{ name: "MuteBefehl", imgUrl: "https://avatars.githubusercontent.com/u/36934652" }],
	},
	{
		name: "Resources",
		members: [
			{
				name: "techchrism",
				info: "Creator of valorant-api-docs",
				imgUrl: "https://avatars.githubusercontent.com/u/26680599",
			},
			{
				name: "Not0fficer",
				info: "Creator of valorant-api.com",
				imgUrl: "https://avatars.githubusercontent.com/u/29897990",
			},
		],
	},
	{
		name: "Translators",
		members: [
			{
				name: "MuteBefehl",
				info: "German",
				imgUrl: "https://avatars.githubusercontent.com/u/36934652",
			},
			{
				name: "C0taro",
				info: "German",
				imgUrl: "",
			},
			{
				name: "ReyyZero",
				info: "Chinese Simplified & Traditional",
				imgUrl: "",
			},
			{
				name: "Ban",
				info: "Arabic",
				imgUrl: "",
			},
			{
				name: "Hoffo",
				info: "Italian",
				imgUrl: "",
			},
			{
				name: "Lul",
				info: "Italian",
				imgUrl: "",
			},
			{
				name: "Playboy?",
				info: "Italian",
				imgUrl: "",
			},
			{
				name: "Jennet",
				info: "Korean",
				imgUrl: "",
			},
			{
				name: "Mokdori_Dambi",
				info: "Korean",
				imgUrl: "",
			},
			{
				name: "posh",
				info: "Korean",
				imgUrl: "",
			},
			{
				name: "strumyk;x",
				info: "Polish",
				imgUrl: "",
			},
			{
				name: "Ivailo",
				info: "Portuguese",
				imgUrl: "",
			},
			{
				name: "poke",
				info: "Portuguese",
				imgUrl: "",
			},
			{
				name: "Hidy",
				info: "Russian",
				imgUrl: "",
			},
			{
				name: "GARN",
				info: "Thai",
				imgUrl: "",
			},
			{
				name: "Endless Kaan",
				info: "Turkish",
				imgUrl: "",
			},
			{
				name: "Chí Kiên",
				info: "Vietnamese",
				imgUrl: "",
			},
			{
				name: "damnlinh",
				info: "Vietnamese",
				imgUrl: "",
			},
			{
				name: "Shynoku",
				info: "Japanese",
				imgUrl: "",
			},
		],
	},
];

export default function Credits() {
	return (
		<>
			<PageLayout pageTitle="Credits">
				<div>
					{credits.map((item, i) => (
						<div key={i}>
							<h1 className="text-2xl font-bold">
								{item.name}{" "}
								<span className="text-gray-300 font-normal text-xl">({item.members.length})</span>
							</h1>
							<div className="my-4">
								{item.members.map((member, i) => (
									<div key={i} className="flex items-center space-x-2 py-1">
										<img
											alt={`${member.name}'s profile picture`}
											src={member.imgUrl}
											className="w-10 rounded-full"
										/>
										<div>
											<p className="text-lg">{member.name}</p>
											{(member as any).info && (
												<p className="text-xs text-gray-300">{(member as any).info}</p>
											)}
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</PageLayout>
		</>
	);
}
