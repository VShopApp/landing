import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				{process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && process.env.NEXT_PUBLIC_PLAUSIBLE_URL && (
					<script
						defer
						data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
						src={`${process.env.NEXT_PUBLIC_PLAUSIBLE_URL}/js/script.outbound-links.js`}
					></script>
				)}
			</Head>
			<body className="bg-secondary text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
