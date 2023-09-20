import Select from "../UI/Select";

import axios from "axios";
import { useEffect, useState } from "react";
import lodash from "lodash";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { setFilterCurrency, setFilterProvider } from "../../store/filters/filters.slice.ts";

import "./Filters.scss";

const Filters = () => {
	const [currencies, setCurrencies] = useState<string[]>([]);
	const [providers, setProviders] = useState<string[]>([]);

	const currency = useSelector((state: RootState) => state.filters.currency);
	const provider = useSelector((state: RootState) => state.filters.provider);

	const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get("/api/games.json")
			.then(({ data }) => {
				Object.keys(data).map(uniqueTitle => {
					setCurrencies(prevState =>
						lodash.union(prevState, Object.keys(data[uniqueTitle].real)),
					);
					setProviders(prevState =>
						lodash.union(prevState, [data[uniqueTitle].provider]),
					);
				});
				currencies.sort((a, b) => a.localeCompare(b));
				providers.sort((a, b) => a.localeCompare(b));
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div className="filters">
			<Select
				value={currency}
				setValue={itemClicked => dispatch(setFilterCurrency(itemClicked))}
				placeholder={"Валюта"}
				values={currencies}
			/>
			<Select
				value={provider}
				setValue={itemClicked => dispatch(setFilterProvider(itemClicked))}
				placeholder={"Провайдер"}
				values={providers}
			/>
		</div>
	);
};

export default Filters;
