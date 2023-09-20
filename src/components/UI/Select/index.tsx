import { FC, useRef, useState } from "react";

import useOnClickOutside from "../../../hooks/useOnClickOutside.ts";

import "./Select.scss";

interface ISelect {
	placeholder: string;
	values: string[];
	value: string;
	setValue: (itemClicked: string) => void;
}

const Select: FC<ISelect> = ({ setValue, value, placeholder, values }) => {
	const [open, setOpen] = useState(false);

	const selectRef = useRef(null);

	useOnClickOutside(selectRef, () => setOpen(false));

	return (
		<div className="select" ref={selectRef}>
			<div className="select__title" onClick={() => setOpen(!open)}>
				<h6 className={"select__title-value"}>{value === "" ? placeholder : value}</h6>
				<img
					style={{
						transform: open ? "rotateX(180deg)" : "rotateX(0deg)",
					}}
					className="select__title-arrow"
					src={"/img/arrow-down.svg"}
					alt={"Открыть/закрыть"}
				/>
			</div>
			{open && (
				<ul className="select__content">
					{values.map((item: string, index: number) => (
						<li
							key={index}
							onClick={() => {
								setValue(item);
								setOpen(false);
							}}
							className="select__content-item"
						>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Select;
