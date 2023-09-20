import "./Card.scss";

import { Link } from "react-router-dom";
import { FC } from "react";

interface ICard {
	title: string;
	id: string;
}

const Card: FC<ICard> = ({ title, id }) => {
	return (
		<Link to={`/game/${id.replace(/\//g, "-")}/${title}`}>
			<div className="card">
				<div className="card__preview">
					<img src={`https://cdn2.softswiss.net/i/s2/${id}.png`} alt="Обложка игры" />
				</div>
				<h6 className="card__title">{title}</h6>
			</div>
		</Link>
	);
};

export default Card;
