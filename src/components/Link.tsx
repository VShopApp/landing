import type { IconType } from "react-icons";

interface props {
	href: string;
	text: string;
	icon: IconType;
}
export default function Link({ href, text, icon: Icon }: props) {
	return (
		<a
			href={href}
			className="flex items-center justify-center space-x-1 text-lg bg-zinc-900 px-3 py-2 rounded border border-white border-opacity-25"
		>
			<Icon />
			<span>{text}</span>
		</a>
	);
}
