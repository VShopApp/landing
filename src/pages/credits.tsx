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
				imgUrl: "/img/avatars/707488849420615751.jpg",
			},
			{
				name: "ReyyZero",
				info: "Chinese Simplified & Traditional",
				imgUrl: "/img/avatars/413020881246355457.jpg",
			},
			{
				name: "Ban",
				info: "Arabic",
				imgUrl: "/img/avatars/643500735031541760.jpg",
			},
			{
				name: "Hoffo",
				info: "Italian",
				imgUrl: "/img/avatars/774992489945890896.jpg",
			},
			{
				name: "Mr Schneckenmann",
				info: "Italian",
				imgUrl: "/img/avatars/889070107693834251.jpg",
			},
			{
				name: "Enzo Ferrari",
				info: "Italian",
				imgUrl: "/img/avatars/942000444912324618.jpg",
			},
			{
				name: "Jennet",
				info: "Korean",
				imgUrl: "/img/avatars/901134108221128725.jpg",
			},
			{
				name: "Mokdori_Dambi",
				info: "Korean",
				imgUrl: "/img/avatars/366377379599351809.jpg",
			},
			{
				name: "mrespalier",
				info: "Korean",
				imgUrl: "/img/avatars/690008685946208323.jpg",
			},
			{
				name: "strumyk;x",
				info: "Polish",
				imgUrl: "/img/avatars/284350640279257091.jpg",
			},
			{
				name: "Ivailo",
				info: "Portuguese",
				imgUrl: "/img/avatars/395347408243916802.jpg",
			},
			{
				name: "poke",
				info: "Portuguese",
				imgUrl: "/img/avatars/default.png",
			},
			{
				name: "Hidy",
				info: "Russian",
				imgUrl: "/img/avatars/531840835025764383.jpg",
			},
			{
				name: "GARN",
				info: "Thai",
				imgUrl: "/img/avatars/880312739300536331.jpg",
			},
			{
				name: "Kaanimsi",
				info: "Turkish",
				imgUrl: "/img/avatars/910503529364471889.jpg",
			},
			{
				name: "Chí Kiên",
				info: "Vietnamese",
				imgUrl: "/img/avatars/504207204644290570.jpg",
			},
			{
				name: "damnlinh",
				info: "Vietnamese",
				imgUrl: "/img/avatars/813389418349985833.jpg",
			},
			{
				name: "Shynoku",
				info: "Japanese",
				imgUrl: "/img/avatars/517401133384466461.jpg",
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
