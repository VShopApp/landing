import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<script
					async
					src="https://analytics.vasc.cloud/script.js"
					data-website-id="ee9f31f2-ec08-459d-b3bd-1b87753ace74"
				></script>
			</Head>
			<body className="bg-secondary text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
