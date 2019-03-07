import React from 'react';
import ReactDOM from 'react-dom';
import HomePageComponent from './home-page.component';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<HomePageComponent />, div);
	ReactDOM.unmountComponentAtNode(div);
});
