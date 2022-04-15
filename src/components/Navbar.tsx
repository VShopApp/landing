import Link from "next/link";
import {MouseEventHandler, useEffect, useState} from "react";
import {BiMenu} from "react-icons/bi";
import {FiShoppingCart} from "react-icons/fi";
import {MdQuestionAnswer} from "react-icons/md";
import {FaDiscord} from "react-icons/fa";
import {motion} from "framer-motion";
import {IoIosArrowDown} from "react-icons/io";
import {useRouter} from "next/router";

const items = [
	{
		name: "FAQ",
		href: "/faq",
		icon: <MdQuestionAnswer />,
	},
	{
		name: "Discord",
		href: "/discord",
		icon: <FaDiscord />,
	},
];

const Navbar = () => {
	const [regionSwitcherOpen, setRegionSwitcherOpen] = useState(false);
	const [region, setRegion] = useState("...");
	const router = useRouter();

	const regionSwitcherVariants = {
		open: {opacity: 1, display: "block"},
		closed: {opacity: 0, transitionEnd: {display: "none"}},
	};

	const toggleNavItems: MouseEventHandler = e => {
		var menu = document.getElementById("menu") as HTMLDivElement;
		var regionSwitcher = document.getElementById("regionSwitcher") as HTMLDivElement;
		menu.classList.toggle("hidden");
		regionSwitcher.classList.toggle("hidden");
	};

	const changeRegion: MouseEventHandler = e => {
		const region = (e.currentTarget as HTMLButtonElement).name;
		setRegion(region);
		localStorage.setItem("region", region);

		router.reload();
	};

	useEffect(() => {
		const region = localStorage.getItem("region") || "eu";
		setRegion(region);
	}, []);

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
			<div className="hidden md:block mt-3 md:m-0" id="regionSwitcher">
				<div className="relative inline-block text-left">
					<button
						type="button"
						onClick={() => setRegionSwitcherOpen(isUserMenuOpen => !isUserMenuOpen)}
						className="flex flex-row items-center space-x-1 rounded-md shadow-sm px-4 py-2 bg-black bg-opacity-25 border border-white border-opacity-25 text-sm font-medium focus:outline-none"
						id="menu-button"
						aria-expanded="true"
						aria-haspopup="true"
					>
						<p className="uppercase">🌍 {region}</p>
						<IoIosArrowDown
							className={`transition-transform w-4 h-4 ${regionSwitcherOpen && "rotate-180"}`}
						/>
					</button>
					<motion.div
						animate={regionSwitcherOpen ? "open" : "closed"}
						variants={regionSwitcherVariants}
						transition={{duration: 0.2}}
						style={{display: "none"}}
					>
						<div
							id="userMenu"
							className="origin-top-right absolute left-0 md:right-0 md:left-auto w-32 py-1 mt-2 rounded-md shadow-lg bg-secondary border border-white border-opacity-25 ring-1 ring-gray-500 ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="menu-button"
							tabIndex={-1}
						>
							<div>
								<button
									className="w-full py-2 text-sm text-center px-5 hover:bg-secondary2"
									role="menuitem"
									name="eu"
									tabIndex={-1}
									onClick={changeRegion}
								>
									Europe
								</button>
							</div>
							<div>
								<button
									className="w-full py-2 text-sm text-center hover:bg-secondary2"
									role="menuitem"
									name="na"
									tabIndex={-1}
									onClick={changeRegion}
								>
									North America
								</button>
							</div>
							<div>
								<button
									className="w-full py-2 text-sm text-center hover:bg-secondary2"
									role="menuitem"
									name="ap"
									tabIndex={-1}
									onClick={changeRegion}
								>
									Asia Pacific
								</button>
							</div>
							<div>
								<button
									className="w-full py-2 text-sm text-center hover:bg-secondary2"
									role="menuitem"
									name="kr"
									tabIndex={-1}
									onClick={changeRegion}
								>
									Korea
								</button>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
