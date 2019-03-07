import { Component } from 'react';
import PokemonService from './shared/services/pokemon/pokemon.service';

import './app.component.scss';
import template from './app.component.jsx';

class AppComponent extends Component {
	pokemonService;

	constructor(props) {
		super(props);
		this.pokemonService = new PokemonService();
	}

	render = template;
}

export default AppComponent;
