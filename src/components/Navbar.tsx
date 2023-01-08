import Link from "next/link";
import { MouseEventHandler } from "react";
import { BiMenu } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

interface props {
	pageTitle?: string;
}
const Navbar = (props: props) => {
	const toggleNavItems: MouseEventHandler = e => {
		var menu = document.getElementById("menu") as HTMLDivElement;
		menu.classList.toggle("hidden");
	};

	return (
		<nav className="bg-primary py-5 pl-[10%] pr-[10%]">
			<nav className="flex items-center justify-between flex-wrap">
				<Link href="/">
					<a className="flex items-center flex-shrink-0 mr-4 space-x-2">
						<FiShoppingCart className="w-7 h-7" />
						<span className="font-semibold text-2xl tracking-wide">VShop</span>
					</a>
				</Link>
				<div className="block md:hidden" onClick={toggleNavItems}>
					<button className="flex items-center px-3 py-2">
						<BiMenu className="text-2xl" />
					</button>
				</div>
			</nav>
			{props.pageTitle && (
				<div className="h-32 flex items-end">
					<h1 className="text-5xl font-bold pb-5">{props.pageTitle}</h1>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
