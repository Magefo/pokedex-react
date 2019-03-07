import React from 'react';
import ReactDOM from 'react-dom';
import PokemonCardComponent from './pokemon-card.component';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<PokemonCardComponent />, div);
	ReactDOM.unmountComponentAtNode(div);
});
