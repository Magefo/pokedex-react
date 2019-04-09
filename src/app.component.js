import { Component } from 'react';
import PokemonService from './shared/services/pokemon/pokemon.service';
import GameService from './game/services/game.service';

import './app.component.scss';
import template from './app.component.jsx';

class AppComponent extends Component {
	pokemonService;
	gameService;

	constructor(props) {
		super(props);
		this.pokemonService = new PokemonService();
		this.gameService = new GameService();
	}

	render = template;
}

export default AppComponent;
