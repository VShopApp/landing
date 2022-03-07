import Link from "next/link";
import {MouseEventHandler} from "react";
import {BiMenu} from "react-icons/bi";
import {FiShoppingCart} from "react-icons/fi";
import {MdQuestionAnswer} from "react-icons/md";

const items = [
	{
		name: "FAQ",
		href: "/faq",
		icon: <MdQuestionAnswer />,
	},
];

const Navbar = () => {
	const toggleNavItems: MouseEventHandler = e => {
		var nav = document.getElementById("menu") as HTMLDivElement;
		nav.classList.toggle("hidden");
	};

	return (
		<nav className="flex items-center justify-between flex-wrap bg-primary py-5 pl-[10%] pr-[10%] text-white">
			<Link href="/">
				<a className="flex items-center flex-shrink-0 mr-4 space-x-2">
					<FiShoppingCart className="w-7 h-7" />
					<span className="font-semibold text-xl tracking-tight">VShop</span>
				</a>
			</Link>
			<div className="block md:hidden" onClick={toggleNavItems}>
				<button className="flex items-center px-3 py-2">
					<BiMenu className="text-2xl" />
				</button>
			</div>
			<div
				className="w-full flex-grow md:flex md:items-center md:w-auto hidden mt-4 md:mt-0"
				id="menu"
			>
				<div className="text-sm md:flex-grow space-y-2 md:space-y-0 md:space-x-2 md:flex md:items-center">
					{items.map(item => (
						<Link href={item.href} key={item.name}>
							<a className="flex items-center space-x-1 md:mt-0 text-white hover:underline">
								{item.icon} <span>{item.name}</span>
							</a>
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
