import Head from "next/head";
import PageLayout from "../components/PageLayout";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import { FiGithub, FiLock, FiServer, FiSmartphone } from "react-icons/fi";
import { AiFillAndroid } from "react-icons/ai";
import Link from "../components/Link";
import LinkImg from "../components/LinkImg";

import LINKS from "../constants/links";
import ACTIVITIES from "../constants/activities";

export default function Home() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex(Math.floor(Math.random() * ACTIVITIES.length)),
			3000
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<>
			<Head>
				<title>VShop: Check your game shop with ease.</title>
			</Head>
			<PageLayout>
				<div className="text-center mt-10">
					<div className="text-4xl sm:text-5xl py-5 font-medium">
						<h1>Check your game shop while</h1>
						<div className="text-primary inline-flex text-ellipsis">
							<TextTransition springConfig={presets.gentle}>{ACTIVITIES[index]}</TextTransition>
						</div>
					</div>
					<h2 className="text-xl text-gray-300 pb-3">Fully transparent, secure and elegant.</h2>
					<div className="flex items-center justify-center space-x-2">
						<Link
							href={LINKS.LATEST_RELEASE_APK}
							text="Download Android APK"
							icon={AiFillAndroid}
							openInNewTab={false}
						/>
						<Link href={LINKS.MOBILE_REPO} text="Source Code" icon={FiGithub} />
					</div>
					<div className="my-2">
						<a
							href={LINKS.DISTRIBUTION_INFO}
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary underline underline-offset-4 text-sm"
						>
							Why is it not on the Play Store or App Store?
						</a>
					</div>
					{/* <div className="flex items-center justify-center space-x-3 mt-5 overflow-x-auto">
						{["0", "1", "3"].map((img, i) => (
							<img
								alt="VShop App Screenshot"
								key={i}
								src={`/img/screenshots/${img}.png`}
								className="w-56 rounded-lg"
							/>
						))}
					</div> */}
				</div>
				<div
					id="transparent"
					className="flex items-center justify-evenly mt-10 md:space-x-5 bg-white bg-opacity-5 border border-white border-opacity-10 p-10 rounded-lg"
				>
					<div>
						<h1 className="text-5xl font-bold">Transparent.</h1>
						<p className="text-lg text-gray-300 mt-3">
							Our source code is publicly available on{" "}
							<a
								href={LINKS.MOBILE_REPO}
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary underline underline-offset-4"
							>
								GitHub
							</a>{" "}
							for anyone to see, so you can verify what we are doing on your device. We are also
							open to contributions!
						</p>
					</div>

					<LinkImg
						href={LINKS.MOBILE_REPO}
						image={
							<img
								alt="Source Code of the VShop mobile app on GitHub"
								src="/img/github.png"
								className="hidden lg:block rounded-md w-[100%] shadow-md"
							/>
						}
					/>
				</div>
				<div
					id="secure"
					className="flex items-center justify-evenly mt-10 md:space-x-5 bg-white bg-opacity-5 border border-white border-opacity-10 p-10 rounded-lg"
				>
					<FiLock className="hidden md:block w-48 h-28" />
					<div>
						<h1 className="text-5xl font-bold">Secure.</h1>
						<p className="text-lg text-gray-300 mt-3">
							We transfer your credentials securely and <b>directly</b> to the official servers
							without any detours. Your credentials are never transmitted or stored to any other
							services or servers.
						</p>
					</div>
				</div>
				<div
					id="elegant"
					className="flex items-center justify-evenly mt-10 md:space-x-5 bg-white bg-opacity-5 border border-white border-opacity-10 p-10 rounded-lg"
				>
					<div>
						<h1 className="text-5xl font-bold">Elegant.</h1>
						<p className="text-lg text-gray-300 mt-3">
							Built with{" "}
							<a
								href={LINKS.RN_PAPER}
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary underline underline-offset-4"
							>
								React Native Paper
							</a>
							, VShop seamlessly blends in with the Android operating system, making it an elegant
							way to see what your game store has to offer.
						</p>
					</div>

					<LinkImg
						href={LINKS.RN_PAPER}
						image={
							<img
								alt="VShop mockup"
								src="/img/rnp.svg"
								className="hidden md:block rounded-md w-64 h-max object-cover p-10"
							/>
						}
					/>
				</div>
			</PageLayout>
		</>
	);
}
