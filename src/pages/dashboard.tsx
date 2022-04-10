import {useEffect, useState} from "react";
import {AiFillPlayCircle} from "react-icons/ai";
import Cookies from "universal-cookie";
import {BiLoaderAlt} from "react-icons/bi";
import Head from "next/head";

interface item {
	uuid: string;
	displayName: string;
	levelItem?: any;
	displayIcon: string;
	streamedVideo?: string;
	assetPath: string;
	price: number;
}

interface nightItem extends item {
	discountPrice: number;
	discountPercent: number;
}

export default function Dashboard() {
	const cookies = new Cookies();

	const [loading, setLoading] = useState(true);
	const [region, setRegion] = useState("eu");
	const [shop, setShop] = useState<item[]>([]);
	const [bundle, setBundle] = useState<any>({});
	const [nightMarket, setNightMarket] = useState<nightItem[]>([]);
	const [showVideo, setShowVideo] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const riotaccesstoken = cookies.get("riotAccessToken");
			const riotentitlementstoken = cookies.get("riotEntitlementsToken");

			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shop`, {
				headers: {riotaccesstoken, riotentitlementstoken, region},
			});
			const data = await res.json();
			setShop(data.shop);
			setBundle(data.bundle);

			const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/nightmarket`, {
				headers: {riotaccesstoken, riotentitlementstoken, region},
			});
			const data2 = await res2.json();
			setNightMarket(data2.nightMarket);

			setLoading(false);
		};
		fetchData();
	}, [region]);

	if (loading) {
		return (
			<div className="flex items-center justify-center h-screen">
				<BiLoaderAlt className="animate-spin h-10 w-10 text-primary" />
			</div>
		);
	}

	return (
		<>
			<Head>
				<title>Dashboard • VShop</title>
			</Head>
			<div className="w-full h-full">
				<div className="rounded-md w-full p-3 md:p-5 space-y-7">
					<div
						className="flex justify-center items-center h-[20vh] bg-cover bg-center bg-no-repeat bg-blend-darken bg-[#00000095] text-center rounded shadow"
						style={{backgroundImage: `url("${bundle.displayIcon}")`}}
					>
						<div>
							<h1 className="text-3xl md:text-4xl font-bold tracking-wide">
								{bundle.displayName} Bundle
							</h1>
							<div className="flex items-center justify-center space-x-2 text-xl">
								<span>{bundle.price}</span> <img className="h-5 w-5" src="/img/vp.png" />
							</div>
						</div>
					</div>
					<div className="bg-[#00000075] border border-[#ffffff25] rounded p-5 shadow">
						<h1 className="text-3xl font-bold">Shop</h1>
						<div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4 mt-10">
							{shop.map(item => (
								<div className="w-full">
									{showVideo === item.uuid && item.streamedVideo && (
										<div
											onClick={() => {
												setShowVideo("");
											}}
											className="fixed top-0 left-0 flex justify-center items-center w-full h-screen bg-black bg-opacity-75 z-10"
										>
											<video className="w-[90%] md:w-1/2" src={item.streamedVideo} autoPlay loop />
										</div>
									)}
									<img className="h-24 w-full object-contain" src={item.displayIcon} />
									<h1 className="text-xl">{item.displayName}</h1>
									<div className="flex items-center space-x-2 text-md">
										<span>{item.price}</span> <img className="h-5 w-5" src="/img/vp.png" />
									</div>
									{item.streamedVideo && (
										<button
											className="flex items-center space-x-1 bg-primary p-1 px-2 rounded mt-4"
											onClick={() => {
												setShowVideo(item.uuid);
											}}
										>
											<AiFillPlayCircle className="h-5 w-5" />
											<span>Video</span>
										</button>
									)}
								</div>
							))}
						</div>
					</div>
					{nightMarket.length > 0 && (
						<div className="bg-[#00000075] border border-[#ffffff25] rounded p-5 shadow">
							<h1 className="text-3xl font-bold">Night Market</h1>
							<div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4 mt-10">
								{nightMarket.map(item => (
									<div className="w-full">
										{showVideo === item.uuid && item.streamedVideo && (
											<div
												onClick={() => {
													setShowVideo("");
												}}
												className="flex justify-center items-center w-full h-screen bg-black bg-opacity-75 absolute top-0 left-0 z-10"
											>
												<video className="w-1/2 h-1/2" src={item.streamedVideo} autoPlay loop />
											</div>
										)}
										<img className="h-24 w-full object-contain" src={item.displayIcon} />
										<h1 className="text-xl">{item.displayName}</h1>
										<div className="flex items-center space-x-2 text-md">
											<span>
												<span className="line-through">{item.price}</span> {item.discountPrice}
											</span>
											<img className="h-5 w-5" src="/img/vp.png" />
											<span>
												(<span className="text-green-600">-{item.discountPercent}%</span>)
											</span>
										</div>
										{item.streamedVideo && (
											<button
												className="flex items-center space-x-1 bg-primary p-1 px-2 rounded mt-4"
												onClick={() => {
													setShowVideo(item.uuid);
												}}
											>
												<AiFillPlayCircle className="h-5 w-5" />
												<span>Video</span>
											</button>
										)}
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
