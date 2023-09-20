import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/UI/Button";

import "./Game.scss";

const Game = () => {
	const navigate = useNavigate();
	const params = useParams();

	const handleClickToBack = () => {
		navigate("/");
	};

	return (
		<section className="game">
			<div className="game__back">
				<Button text="На главную" type="secondary" onClick={handleClickToBack} />
			</div>
			<h1 className="game__title">{params.title}</h1>
		</section>
	);
};

export default Game;
