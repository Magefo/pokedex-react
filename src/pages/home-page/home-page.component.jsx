import React from 'react';
import PokemonCardComponent from '../../shared/components/pokemon-card/pokemon-card.component';

export default function () {
	let pokemonCards = this.state.pokemons.map((pokemon, i) => {
		return (<PokemonCardComponent key={i} pokemonService={this.props.pokemonService} pokemon={pokemon} />);
	});

	return (
		<div className="container">
			<div className="row">
				{pokemonCards}
			</div>
		</div >
	);
};
