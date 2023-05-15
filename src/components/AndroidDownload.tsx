import { FaAndroid } from "react-icons/fa";

export default function AndroidDownload() {
	return (
		<a href="https://github.com/VShopApp/mobile/releases/latest/download/VShop.apk">
			<div className="flex flex-row items-center justify-center py-2 px-4 rounded-lg space-x-3 bg-black border border-white border-opacity-60">
				<FaAndroid className="w-8 h-8" />
				<div>
					<p className="text-xs font-medium">Download for</p>
					<p className="text-xl font-bold leading-none">Android</p>
				</div>
			</div>
		</a>
	);
}
