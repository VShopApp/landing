import Login from "../components/Login";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home • VShop</title>
			</Head>
			<div className="flex flex-col lg:flex-row items-center justify-center w-full h-full">
				<div className="w-full lg:w-1/2 p-7">
					<h1 className="text-7xl font-bold">
						Check your{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-500">
							Valorant
						</span>{" "}
						Shop with{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">
							ease
						</span>
						.
					</h1>
					<p className="text-lg mt-5 text-gray-300">
						With VShop you can check your Valorant Shop, Bundle and Night Shop on the go. We also
						have an Android app, which you can download on the{" "}
						<a
							className="text-primary hover:underline"
							href="https://play.google.com/store/apps/details?id=dev.vasc.vshop"
							target="_blank"
						>
							Google Play Store
						</a>
						.
					</p>
				</div>
				<div className="flex justify-center w-full lg:w-1/2 p-7 lg:p-0">
					<Login />
				</div>
			</div>
		</>
	);
}
