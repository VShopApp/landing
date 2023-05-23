import Link from "next/link";
import AndroidDownload from "./AndroidDownload";

export default function Footer() {
	return (
		<div className="w-full bg-zinc-900">
			<div className="w-full py-10 px-10 flex flex-col md:flex-row justify-evenly text-gray-300 space-y-5 md:space-y-0">
				<div>
					<h2 className="text-xl font-bold text-white mb-2">VShop</h2>
					<div className="space-y-[0.5px]">
						<p>
							<a href="https://docs.vshop.one">Documentation</a>
						</p>
						<p>
							<Link href="/credits">Credits</Link>
						</p>
						<p>
							<Link href="/donate">Donate</Link>
						</p>
					</div>
				</div>
				<div>
					<h2 className="text-xl font-bold text-white mb-2">Socials</h2>
					<div className="space-y-[0.5px]">
						<p>
							<a href="/discord">Discord Server</a>
						</p>
					</div>
				</div>
				<div>
					<h2 className="text-xl font-bold text-white mb-2">Legal</h2>
					<div className="space-y-[0.5px]">
						<p>
							<Link href="/privacy">Privacy Policy</Link>
						</p>
					</div>
				</div>
				<div>
					<h2 className="text-xl font-bold text-white mb-2">Download</h2>
					<div className="flex flex-col items-start justify-start space-y-1">
						<AndroidDownload />
						<a href="https://apps.apple.com/app/vshop-for-valorant/id1636765187">
							<img alt="App Store Badge" src="/img/app-store-badge.png" className="w-40" />
						</a>
					</div>
				</div>
			</div>
			<div className="p-4 text-center text-xs text-gray-300">
				<p>
					VShop isn&apos;t endorsed by Riot Games and doesn&apos;t reflect the views or opinions of
					Riot Games or anyone officially involved in producing or managing Riot Games properties.
				</p>
				<p>
					Riot Games, and all associated properties are trademarks or registered trademarks of Riot
					Games, Inc.
				</p>
			</div>
		</div>
	);
}
