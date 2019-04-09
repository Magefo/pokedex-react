import React, { lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePageComponent from './pages/home-page/home-page.component';
import DetailPageComponent from './pages/detail-page/detail-page.component';
const GamePageComponent = lazy(() => import('./game/game-page/game-page.component'));

const routes = [
	{
		path: "/",
		component: HomePageComponent
	},
	{
		path: "/detail",
		component: DetailPageComponent
	},
	{
		path: "/game",
		component: GamePageComponent
	}
];

const RouterOutlet = function (customProps) {
	const customRoutes = routes.map((route, i) => (
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

	return (
		<Router>
			<Suspense fallback={<div>loading...</div>}>
				{customRoutes}
			</Suspense>
		</Router>
	);
}

export default RouterOutlet;
