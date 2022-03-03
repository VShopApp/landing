import "tailwindcss/tailwind.css";
import React from "react";
import {AppProps} from "next/app";
import {SWRConfig} from "swr";
import Navbar from "../components/Navbar";

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<SWRConfig
				value={{
					refreshInterval: 0,
					fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
				}}
			>
				<div className="flex flex-col h-screen">
					<Navbar />
					<Component {...pageProps} />
				</div>
			</SWRConfig>
		</>
	);
}
