import React from "react";
import { IoOpenOutline } from "react-icons/io5";

interface LinkImgProps {
	image: React.ReactElement;
	href: string;
}

const LinkImg = ({ image: Image, href }: LinkImgProps) => {
	return (
		<div className="relative w-xl h-xl group">
			{Image ? Image : null}

			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 group-hover:bg-black rounded-md transition-all"
			>
				<IoOpenOutline size={50} />
			</a>
		</div>
	);
};

export default LinkImg;
