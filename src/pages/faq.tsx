import {PropsWithChildren} from "react";
import Head from "next/head";

const FAQBlock = (props: PropsWithChildren<{title: string}>) => {
	return (
		<div className="bg-[#00000075] border border-[#ffffff25] p-5 rounded">
			<h1 className="text-xl font-bold">{props.title}</h1>
			<p className="mt-2 text-gray-200">{props.children}</p>
		</div>
	);
};

export default function FAQ() {
	return (
		<>
			<Head>
				<title>FAQ • VShop</title>
			</Head>
			<div className="text-center">
				<h1 className="text-4xl font-bold mt-10">FAQ</h1>
				<p className="text-gray-300">Get the answers for the most frequently asked questions.</p>
				<div className="grid md:grid-cols-2 gap-4 mt-5 px-2 md:px-20">
					<FAQBlock title="What is VShop?">
						VShop is a website & app created by vasc. It allows you to easily check your Valorant
						shop without needing to launch the game.
					</FAQBlock>
					<FAQBlock title="How secure is my data?">
						We only store your Riot ID to identify you and your shop/night market to prevent
						unnecessary API calls.
					</FAQBlock>
					<FAQBlock title="How can I trust you?">
						If you don&apos;t feel comfortable sharing your credentials with a piece of code you
						haven&apos;t even seen, you can take a look at our public GitHub repositories:
						<ul className="mt-2">
							<li>
								<a
									href="https://github.com/vascYT/vshop-web"
									className="text-primary hover:underline"
								>
									vshop-web
								</a>
							</li>
							<li>
								<a
									href="https://github.com/vascYT/vshop-mobile"
									className="text-primary hover:underline"
								>
									vshop-mobile
								</a>
							</li>
							<li>
								<a
									href="https://github.com/vascYT/vshop-backend"
									className="text-primary hover:underline"
								>
									vshop-backend
								</a>
							</li>
						</ul>
					</FAQBlock>
					<FAQBlock title="How can I contact you?">
						You can send me an{" "}
						<a href="mailto:nico@vasc.dev" className="text-primary hover:underline">
							email
						</a>{" "}
						or send me a direct message on any of the social media platforms listed on{" "}
						<a
							href="https://vasc.dev"
							className="text-primary hover:underline"
							target="_blank"
							rel="noreferrer"
						>
							my website
						</a>
						.
					</FAQBlock>
				</div>
			</div>
		</>
	);
}
