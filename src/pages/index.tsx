import Head from "next/head";
import {AiFillApple, AiOutlineGoogle} from "react-icons/ai";

function DownloadBtn({name, url, icon}: {name: string; url: string; icon: JSX.Element}) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer"
			className="bg-primary text-white px-4 py-2 rounded-lg flex items-center space-x-1"
		>
			{icon}
			<span>{name}</span>
		</a>
	);
}

export default function Home() {
	return (
		<>
			<Head>
				<title>Home • VShop</title>
			</Head>
			<div className="flex items-center justify-center w-full h-full text-center">
				<div className="flex flex-col items-center w-1/3">
					<img src="/img/vshop.png" alt="VShop Logo" className="w-32 h-32 rounded-3xl" />
					<h1 className="text-6xl font-bold mt-3">VShop</h1>
					<p className="text-xl text-gray-300 mt-3">
						Check your{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-500">
							Valorant
						</span>{" "}
						Shop with{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">
							ease
						</span>
						.
					</p>
					<div className="flex items-center space-x-3 mt-5">
						<DownloadBtn
							name="Google Play"
							url="https://play.google.com/store/apps/details?id=dev.vasc.vshop"
							icon={<AiOutlineGoogle className="w-6 h-6" />}
						/>
						<DownloadBtn
							name="TestFlight"
							url="https://testflight.apple.com/join/PMbtW6bX"
							icon={<AiFillApple className="w-6 h-6" />}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
