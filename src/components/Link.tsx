import type { IconType } from "react-icons";

interface props {
	href: string;
	text: string;
	icon: IconType;
	openInNewTab?: boolean;
}
export default function Link({ href, text, icon: Icon, openInNewTab = true }: props) {
	return (
		<a
			href={href}
			target={openInNewTab ? "_blank" : undefined}
			rel="noopener noreferrer"
			className="flex items-center justify-center space-x-1 text-lg bg-zinc-900 px-3 py-2 rounded border border-white border-opacity-25 hover:bg-zinc-800"
		>
			<Icon />
			<span>{text}</span>
		</a>
	);
}
