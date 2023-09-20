import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "./store/store.ts";

import router from "./routes.tsx";

import "./global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>,
);
