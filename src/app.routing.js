import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePageComponent from './pages/home-page/home-page.component';
import DetailPageComponent from './pages/detail-page/detail-page.component';


const routes = [
	{
		path: "/",
		component: HomePageComponent
	},
	{
		path: "/detail",
		component: DetailPageComponent
	}
];

const RouterOutlet = function (customProps) {
	return routes.map((route, i) => (
		<Route
			exact
			key={i}
			path={route.path}
			render={props => {
				props = Object.assign(props, customProps);
				return (<route.component {...props} routes={route.routes} />)
			}}
		/>
	));
}

export default RouterOutlet;
