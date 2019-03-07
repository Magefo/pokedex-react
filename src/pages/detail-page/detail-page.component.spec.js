import React from 'react';
import ReactDOM from 'react-dom';
import DetailPageComponent from './detail-page.component';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<DetailPageComponent />, div);
	ReactDOM.unmountComponentAtNode(div);
});
