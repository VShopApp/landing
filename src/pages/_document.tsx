import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</Head>
			<body className="bg-secondary text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
