import Link from "next/link";
import { FiGithub, FiShoppingCart } from "react-icons/fi";

interface props {
	pageTitle?: string;
}
const Navbar = (props: props) => {
	return (
		<>
			<nav className="bg-zinc-900 backdrop-blur-md bg-opacity-75 p-5 sticky z-50 top-3 rounded-xl border border-white border-opacity-10 shadow-lg">
				<nav className="flex items-center flex-wrap">
					<Link className="flex items-center space-x-2 mr-3" href="/">
						<FiShoppingCart className="w-7 h-7" />
						<span className="font-semibold text-2xl tracking-wide">VShop</span>
					</Link>
					{[
						{ text: "Transparent", href: "/#transparent" },
						{ text: "Secure", href: "/#secure" },
						{ text: "Elegant", href: "/#elegant" },
					].map((item, i) => (
						<Link
							key={i}
							className="hidden sm:block bg-white bg-opacity-0 px-3 py-2 rounded-md hover:bg-opacity-10"
							href={item.href}
						>
							{item.text}
						</Link>
					))}
					<div className="ml-auto">
						<a href="https://github.com/vshopapp/mobile">
							<FiGithub className="w-5 h-5" />
						</a>
					</div>
				</nav>
			</nav>
			{props.pageTitle && (
				<div className="h-24 flex items-end mb-10">
					<h1 className="text-5xl font-bold">{props.pageTitle}</h1>
				</div>
			)}
		</>
	);
};

export default Navbar;
