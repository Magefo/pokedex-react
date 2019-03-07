import React from 'react';
import { Redirect } from 'react-router';
import { isNullOrUndefined } from 'util';

export default function () {
	if (this.state.redirect) {
		return <Redirect push to="/detail" />;
	}

	const pokemonImgUrl = isNullOrUndefined(this.state.pokemon) ? '' : this.state.pokemon.sprites.front_default;
	return (
		<div className="col-12 col-sm-6 col-md-4 col-xl-3">
			<div className="pokemon-card" onClick={_ => this.handleClick()}>
				<div className="row no-gutters">
					<div className="col-5 text-center">
						<div className="pokemon-card-img">
							<img className="img-fluid" src={pokemonImgUrl} alt="pokemon" />
						</div>
					</div>
					<div className="col-7">
						<div className="pokemon-card-info">
							<h5>{this.props.pokemon.name}</h5>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};
