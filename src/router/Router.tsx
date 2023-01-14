import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import {IRoute, routes} from "./routes";

const Router = () => {
	const renderRoute = (item: IRoute) => (
		<Route path={item.path} element={<item.component />} />
	)

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(renderRoute)}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
