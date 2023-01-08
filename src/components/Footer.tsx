import Link from "next/link";

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
							<Link href="/credits">
								<a>Credits</a>
							</Link>
						</p>
						<p>
							<a href="/donate">Donate</a>
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
							<Link href="/privacy">
								<a>Privacy Policy</a>
							</Link>
						</p>
					</div>
				</div>
				<div>
					<h2 className="text-xl font-bold text-white mb-2">Download</h2>
					<a href="https://play.google.com/store/apps/details?id=dev.vasc.vshop">
						<img src="/img/google-play-badge.png" className="w-28 mb-1" />
					</a>
					<a href="https://apps.apple.com/app/vshop-for-valorant/id1636765187">
						<img src="/img/app-store-badge.png" className="w-28" />
					</a>
				</div>
			</div>
			<div className="py-4 text-center text-xs text-gray-300">
				<p>VShop is not endorsed by Riot Games in any way.</p>
				<p>
					Riot Games, Valorant, and all associated properties are trademarks or registered
					trademarks of Riot Games, Inc.
				</p>
			</div>
		</div>
	);
}
