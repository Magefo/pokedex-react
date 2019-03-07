import React from 'react';
import { Redirect } from 'react-router';
import { isNullOrUndefined } from 'util';

export default function () {
	if (isNullOrUndefined(this.props.pokemonService.selectedPokemon)) {
		return <Redirect push to="/" />;
	}

	const pokemon = this.props.pokemonService.selectedPokemon;

	let pokemonTypes = pokemon.types.map((t, i) => (<h6 key={i}>{t.type.name}</h6>));
	let pokemonAbilities = pokemon.abilities.map((a, i) => (<h6 key={i}>{a.ability.name}</h6>));
	let pokemonStats = pokemon.stats.map((s, i) => {
		return (
		<div key={i} className="col-6 text-center">
			<h6>{s.stat.name}</h6>
			<h1 className="text-secondary font-weight-bold">{s.base_stat}</h1>
		</div>);
});

return (
	<div className="container">
		<div className="row  justify-content-center">
			<div className="col-12 col-lg-6">
				<div className="row">

					<div className="col-12 text-center">
						<div className="pokemon-section">
							{/* Header */}
							<div className="pokemon-header">
								<h2 className="pokemon-title">{pokemon.name}</h2>
							</div>

							{/* Body */}
							<div className="pokemon-body">
								{/* Basic */}
								<img src={pokemon.sprites.front_default} alt="pokemon front" className="img-fluid" />
								<img src={pokemon.sprites.back_default} alt="pokemon back" className="img-fluid" />
								<h6><b className="text-primary">Height:</b> {pokemon.height} decimetres</h6>
								<h6><b className="text-primary">Weight:</b> {pokemon.weight} hectograms</h6>
								<h6><b className="text-primary">Base experience:</b> {pokemon.base_experience}</h6>

								<hr className="w-100" />

								<div className="row">
									{/* Types */}
									<div className="col-6">
										<h5 className="pokemon-subtitle">Type</h5>
										{pokemonTypes}
									</div>
									{/* Abilities */}
									<div className="col-6">
										<h5 className="pokemon-subtitle">Abilities</h5>
										{pokemonAbilities}
									</div>
								</div>

								<hr className="w-100" />

								<div className="row">
									{/* Stats */}
									<div className="col-12">
										<h5 className="pokemon-subtitle">Stats</h5>
										<div className="row">
											{pokemonStats}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
};
