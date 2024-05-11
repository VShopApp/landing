import Link from "next/link";

export default function Footer() {
	return (
		<div className="w-full bg-black bg-opacity-50 mt-10">
			<div className="w-full p-10 flex flex-col md:flex-row justify-evenly text-gray-300 space-y-5 md:space-y-0">
				<div>
					<h2 className="text-xl font-bold text-white mb-2">VShop</h2>
					<div className="space-y-[0.5px]">
						<p>
							<a href="https://docs.vshop.one">Documentation</a>
						</p>
						<p>
							<Link href="/credits">Credits</Link>
						</p>
					</div>
				</div>
				<div>
					<h2 className="text-xl font-bold text-white mb-2">Get In Touch</h2>
					<div className="space-y-[0.5px]">
						<p>
							<a href="/discord">Discord</a>
						</p>
						<p>
							<a href="mailto:nico@vasc.dev">E-Mail</a>
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
