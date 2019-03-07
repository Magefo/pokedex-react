import { from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
const axios = require('axios');

const POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon';
const LIMIT = 20;

class PokemonService {
	selectedPokemon

	getPokemonList(offset = 0) {
		const pokemonsUrl = `${POKEMONS_URL}?limit=${LIMIT}&offset=${offset}`;
		return from(axios.get(`${pokemonsUrl}`)).pipe(
			map(data => data.data),
			map(data => data.results),
			catchError(error => this.handleError(error, []))
		);
	}

	getPokemon(url) {
		return from(axios.get(`${url}`)).pipe(
			map(data => data.data),
			catchError(error => this.handleError(error, {}))
		);
	}

	handleError(error, returnObj) {
		console.log(error);
		alert('Error fetching data');
		return of(returnObj);
	}
}

export default PokemonService;