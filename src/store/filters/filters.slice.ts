import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
	currency: string;
	provider: string;
}

const initialState: CounterState = {
	currency: "",
	provider: "",
};

export const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setFilterCurrency: (state, action: PayloadAction<string>) => {
			state.currency = action.payload;
			console.log(state.currency)
		},
		setFilterProvider: (state, action: PayloadAction<string>) => {
			state.provider = action.payload;
			console.log(state.provider)
		},
	},
});

export const { setFilterCurrency, setFilterProvider } = filtersSlice.actions;

export default filtersSlice.reducer;
