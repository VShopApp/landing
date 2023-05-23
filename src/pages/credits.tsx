import PageLayout from "../components/PageLayout";
import { APIUser } from "discord-api-types/v10";

const DISCORD_API_URL = "https://discord.com/api/v10";
const credits = [
	{
		name: "Mobile app",
		users: [{ discordId: "346977366569910274" }],
	},
	{
		name: "Website",
		users: [{ discordId: "346977366569910274" }],
	},
	{
		name: "Documentation",
		users: [{ discordId: "224270178836283392" }],
	},
	{
		name: "Resources",
		users: [
			{ discordId: "239625893738315776", info: "Creator of valorant-api-docs" },
			{ discordId: "373913699943186432", info: "Creator of valorant-api.com" },
		],
	},
	{
		name: "Translators",
		users: [
			{ discordId: "224270178836283392", info: "German" },
			{ discordId: "707488849420615751", info: "German" },
			{ discordId: "413020881246355457", info: "Chinese Simplified & Traditional" },
			{ discordId: "504207204644290570", info: "French" },
			{ discordId: "812814570988503141", info: "French" },
			{ discordId: "690008685946208323", info: "Korean" },
			{ discordId: "901134108221128725", info: "Korean" },
			{ discordId: "366377379599351809", info: "Korean" },
			{ discordId: "395347408243916802", info: "Portuguese" },
			{ discordId: "744189530470350919", info: "Portuguese" },
			{ discordId: "295182226998558730", info: "Russian" },
			{ discordId: "1069385327418024037", info: "Turkish" },
			{ discordId: "643500735031541760", info: "Arabic" },
			{ discordId: "284350640279257091", info: "Polish" },
			{ discordId: "942000444912324618", info: "Italian" },
			{ discordId: "889070107693834251", info: "Italian" },
			{ discordId: "774992489945890896", info: "Italian" },
			{ discordId: "517401133384466461", info: "Japanese" },
			{ discordId: "330593196012863490", info: "Spanish" },
			{ discordId: "399191813623119894", info: "Spanish" },
			{ discordId: "880312739300536331", info: "Thai" },
			{ discordId: "504207204644290570", info: "Vietnamese" },
			{ discordId: "813389418349985833", info: "Vietnamese" },
		],
	},
];

interface IFullCredit {
	name: string;
	users: {
		discordId: string;
		info?: string;
		username: string;
		discriminator: string;
		avatar: string | null;
	}[];
}
export async function getStaticProps() {
	try {
		const fullCredits: IFullCredit[] = [];
		for (let i = 0; i < credits.length; i++) {
			fullCredits[i] = {
				name: credits[i].name,
				users: await Promise.all(
					credits[i].users.map(async user => {
						const res = await fetch(`${DISCORD_API_URL}/users/${user.discordId}`, {
							headers: { Authorization: `Bot ${process.env.BOT_TOKEN}` },
						});

						if (res.status === 200) {
							const discordUser: APIUser = await res.json();
							return {
								username: discordUser.username,
								discriminator: discordUser.discriminator,
								avatar: discordUser.avatar,
								...user,
							};
						} else {
							throw new Error(`Error fetching user ${user.discordId}, status: ${res.status}.`);
						}
					})
				),
			};
		}

		return {
			props: {
				fullCredits,
			},
			revalidate: 10 * 60,
		};
	} catch (e) {
		return {};
	}
}

export default function Credits({ fullCredits }: { fullCredits: IFullCredit[] }) {
	return (
		<>
			<PageLayout pageTitle="Credits">
				<div>
					{fullCredits.map((item, i) => (
						<div key={i}>
							<h1 className="text-2xl font-bold">
								{item.name}{" "}
								<span className="text-gray-300 font-normal text-xl">({item.users.length})</span>
							</h1>
							<div className="my-4">
								{item.users.map((user, i) => (
									<div key={i} className="flex items-center space-x-2 py-1">
										<img
											alt={`${user.username}'s profile picture`}
											src={
												user.avatar
													? `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png?size=64`
													: `https://cdn.discordapp.com/embed/avatars/${
															Number.parseInt(user.discriminator) % 5
													  }.png`
											}
											className="w-10 rounded-full"
										/>
										<div>
											<p className="text-lg">{user.username}</p>
											{(user as any).info && (
												<p className="text-xs text-gray-300">{(user as any).info}</p>
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
