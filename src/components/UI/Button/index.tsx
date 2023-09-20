import "./Button.scss";
import { FC } from "react";
import clsx from "clsx";

interface IButton {
	type?: "primary" | "secondary";
	text: string;
	onClick: () => void;
}

const Button: FC<IButton> = ({ type = "primary", text, onClick }) => {
	return (
		<button
			className={clsx("button", {
				"button--secondary": type === "secondary",
			})}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
