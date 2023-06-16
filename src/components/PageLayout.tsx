import Head from "next/head";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface props {
	pageTitle?: string;
}
export default function PageLayout(props: PropsWithChildren<props>) {
	return (
		<>
			{props.pageTitle && (
				<Head>
					<title>{props.pageTitle} • VShop</title>
				</Head>
			)}
			<div className="flex flex-col h-screen">
				<div className="mx-[5%] md:mx-[10%]">
					<Navbar pageTitle={props.pageTitle} />
					{props.children}
				</div>
				<Footer />
			</div>
		</>
	);
}
