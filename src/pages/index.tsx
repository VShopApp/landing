import Head from "next/head";
import PageLayout from "../components/PageLayout";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";

const activities = [
	"making breakfast.",
	"exercising.",
	"watching a movie.",
	"reading a book.",
	"relaxing on the couch.",
	"taking a walk.",
	"going for a run.",
	"going to the gym.",
	"attending a meeting.",
	"exploring a new city.",
	"cooking a meal.",
	"gardening.",
	"attending a class.",
	"going to a concert.",
	"going to a museum.",
	"visiting a zoo.",
	"going to a theme park.",
	"taking a road trip.",
	"going on a hike.",
	"going to the beach.",
	"going on a vacation.",
	"traveling abroad.",
	"going to a festival.",
	"attending a workshop.",
	"visiting a winery.",
	"attending a book club.",
	"going to a theater.",
	"going to a coffee shop.",
];

export default function Home() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex(Math.floor(Math.random() * activities.length)),
			3000
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<>
			<Head>
				<title>VShop: Check your Valorant Shop with ease.</title>
			</Head>
			<PageLayout>
				<div className="flex flex-col-reverse md:flex-row items-center h-full w-full justify-evenly lg:px-[5%] py-5 md:py-20">
					<div className="max-w-lg">
						<h1 className="text-3xl md:text-4xl font-bold text-center md:text-left py-3 md:p-0">
							Check your Valorant store while{" "}
							<span className="text-gray-400 inline-flex">
								<TextTransition springConfig={presets.stiff}>{activities[index]}</TextTransition>
							</span>
						</h1>
						<div className="mt-2 md:mt-8 flex flex-row items-center justify-center md:justify-start space-x-3">
							<a href="https://play.google.com/store/apps/details?id=dev.vasc.vshop">
								<img src="/img/google-play-badge.png" className="w-44" />
							</a>
							<a href="https://apps.apple.com/app/vshop-for-valorant/id1636765187">
								<img src="/img/app-store-badge.png" className="w-44" />
							</a>
						</div>
					</div>
					<img src="/img/mockup.png" className="h-[500px]" />
				</div>
			</PageLayout>
		</>
	);
}
