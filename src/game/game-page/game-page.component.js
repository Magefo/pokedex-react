import { Component } from 'react';
import { Stage, Bitmap } from '@createjs/easeljs';

import './game-page.component.scss';
import template from './game-page.component.jsx';
const createjs = window.createjs;

class GamePageComponent extends Component {

	stage;
	queue;

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.stage = new Stage('game-canvas');
		this.preload();
	}

	preload() {
		this.queue = new createjs.LoadQueue();
		this.queue.on('complete', handleComplete, this);
		this.queue.loadManifest([
			{ id: 'background', src: '/sprites/battle-background.png' },
			{ id: 'player1', src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png' },
			{ id: 'player2', src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
		]);

		function handleComplete() {
			const background = new Bitmap(this.queue.getResult('background'));
			background.x = background.y = 0;

			const player1 = new Bitmap(this.queue.getResult('player1'));
			player1.x = 160;
			player1.y = 250;
			player1.scaleX = 5;
			player1.scaleY = 5;

			const player2 = new Bitmap(this.queue.getResult('player2'));
			player2.x = 800;
			player2.y = 140;
			player2.scaleX = 3;
			player2.scaleY = 3;

			this.stage.addChild(background);
			this.stage.addChild(player1);
			this.stage.addChild(player2);
			this.stage.update();
		}
	}

	render = template;
}

export default GamePageComponent;
