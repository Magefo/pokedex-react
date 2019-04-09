import React from 'react';
import { Redirect } from 'react-router';

import PokemonCardComponent from '../../shared/components/pokemon-card/pokemon-card.component';

export default function () {
	if (this.state.redirect) {
		return <Redirect push to="/game" />;
	}

	let pokemonCards = this.state.pokemons.map((pokemon, i) => {
		return (
			<PokemonCardComponent
				key={i}
				pokemonService={this.props.pokemonService}
				pokemon={pokemon}
				onSelect={selectedPokemon => this.selectPokemon(selectedPokemon)}
			/>);
	});

	return (
		<div className="container">
			<div className="row">
				{pokemonCards}
			</div>
		</div >
	);
};
