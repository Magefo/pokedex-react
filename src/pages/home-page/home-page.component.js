import { Component } from 'react';
import { fromEvent } from 'rxjs';

import './home-page.component.scss';
import template from './home-page.component.jsx';
import { isNullOrUndefined } from 'util';

class HomePageComponent extends Component {

	scrollSubscription;
	pokemonListSubscription;

	constructor(props) {
		super(props);
		this.state = {
			pokemons: []
		};
		this.props.gameService.resetPlayers();
		this.pokemonListSubscription = props.pokemonService.getPokemonList().subscribe(pokemons => {
			this.setState({
				pokemons: Object.assign([], pokemons)
			});
			setTimeout(_ => document.dispatchEvent(new CustomEvent('scroll')), 1000);
		});

		this.scrollSubscription = fromEvent(document, 'scroll').subscribe(event => this.onWindowScroll(event));
	}

	componentWillUnmount() {
		this.pokemonListSubscription.unsubscribe();
		this.scrollSubscription.unsubscribe();
	}

	onWindowScroll(event) {
		const pos = event.srcElement.scrollingElement.clientHeight + event.srcElement.scrollingElement.scrollTop;
		const max = event.srcElement.scrollingElement.offsetHeight;
		if (pos >= max) {
			const offset = this.state.pokemons.length;
			this.props.pokemonService.getPokemonList(offset).subscribe((pokemons) => {
				this.setState({
					pokemons: this.state.pokemons.concat(pokemons)
				});
			});
		}
	}

	selectPokemon(pokemon) {
		if (isNullOrUndefined(this.props.gameService.player1)) {
			this.props.gameService.player1 = pokemon;
		} else {
			this.props.gameService.player2 = pokemon;
			this.setState({ redirect: true });
		}
	}

	render = template;
}

export default HomePageComponent;
