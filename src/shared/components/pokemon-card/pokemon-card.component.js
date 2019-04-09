import { Component } from 'react';

import './pokemon-card.component.scss';
import template from './pokemon-card.component.jsx';

class PokemonCardComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemon: null
		};
		props.pokemonService.getPokemon(props.pokemon.url).subscribe(pokemon => {
			this.setState({
				pokemon: Object.assign({}, pokemon)
			});
		});
	}

	select() {
		this.props.onSelect(this.state.pokemon);
	}

	showDetail() {
		this.props.pokemonService.selectedPokemon = Object.assign({}, this.state.pokemon);
		this.setState({ redirect: true });
	}

	render = template;
}

export default PokemonCardComponent;
