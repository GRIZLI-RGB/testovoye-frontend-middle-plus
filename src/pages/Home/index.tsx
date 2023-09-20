import Card from "../../components/Card";
import Button from "../../components/UI/Button";
import Filters from "../../components/Filters";

import { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

import "./Home.scss";

interface IGame {
	id: string;
	title: string;
	popularity: number;
	collections: {
		popularity: number;
	};
	provider: string;
	real: object[];
}

const Home = () => {
	const [games, setGames] = useState<IGame[]>([]);
	const [currentGames, setCurrentGames] = useState<IGame[]>([]);
	const [offset, setOffset] = useState(1);

	const currency = useSelector((state: RootState) => state.filters.currency);
	const provider = useSelector((state: RootState) => state.filters.provider);

	useEffect(() => {
		axios
			.get("/api/games.json")
			.then(({ data }) => {
				let arr: IGame[] = [];
				Object.keys(data).map(uniqueTitle => {
					arr = [...arr, { id: uniqueTitle, ...data[uniqueTitle] }];
				});
				setGames(
					arr.sort(
						(a: IGame, b: IGame) => b.collections.popularity - a.collections.popularity,
					),
				);
			})
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		if (games.length > 0) {
			setCurrentGames(
				games
					.filter(
						(game: IGame) =>
							Object.keys(game.real).includes(currency) || currency === "",
					)
					.filter((game: IGame) => game.provider === provider || provider === "")
					.slice(0, offset * 12),
			);
		}
	}, [games, offset, currency, provider]);

	useEffect(() => {
		setOffset(1);
	}, [provider, currency]);
	const handleClickMore = () => {
		setOffset(prevState => prevState + 1);
	};

	return (
		<section className="home">
			<Filters />
			<div className="home__cards">
				{currentGames.length === 0 ? (
					<div className="home__cards-zero">Нет подходящих игр</div>
				) : (
					currentGames.map(({ id, title }) => <Card key={id} title={title} id={id} />)
				)}
			</div>
			{offset * 12 <= currentGames.length && (
				<div className="home__more">
					<Button text="Показать еще" onClick={handleClickMore} />
				</div>
			)}
		</section>
	);
};

export default Home;
