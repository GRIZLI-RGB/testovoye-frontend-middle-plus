import { createSlice } from "@reduxjs/toolkit";

export const gamesSlice = createSlice({
	name: "games",
	initialState: [],
	reducers: {
		getGamesWithOffset: (_, { payload }) => {
			console.log(payload);
		},
		getGamesProviders: () => {},
		getGamesCurrencies: () => {},
	},
});
export const { actions, reducer } = gamesSlice;
