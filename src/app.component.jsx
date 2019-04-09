import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RouterOutlet from './app.routing';

export default function () {
	return (
		<Router>
			<div className="container-fluid">
				<header>
					<img src="/img/pokemon-logo.png" alt="Pokemon" />
					<h6>Pokedex</h6>
				</header>
				<RouterOutlet pokemonService={this.pokemonService} gameService={this.gameService} />
			</div>
		</Router >
	);
}
