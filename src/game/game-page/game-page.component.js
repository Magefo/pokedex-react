import { Component } from 'react';
import { Stage, Bitmap, Graphics, Container, Shape, Text } from '@createjs/easeljs';
import { Ticker, Tween } from '@createjs/tweenjs';
import { isNullOrUndefined } from 'util';

import './game-page.component.scss';
import template from './game-page.component.jsx';

const createjs = window.createjs;
const PLAYER1_ID = 'player1';
const PLAYER2_ID = 'player2';

class GamePageComponent extends Component {
	stage;
	queue;

	componentDidMount() {
		if (!isNullOrUndefined(this.props.gameService.player1) || !isNullOrUndefined(this.props.gameService.player2)) {
			this.stage = new Stage('game-canvas');
			Ticker.addEventListener('tick', event => {
				this.stage.update();
			});
			this.preload();
		}
	}

	preload() {
		this.queue = new createjs.LoadQueue();
		this.queue.on('complete', this.initGame, this);
		this.queue.loadManifest([
			{ id: 'background', src: '/sprites/battle-background.png' },
			{ id: PLAYER1_ID, src: this.props.gameService.player1.sprites.back_default },
			{ id: PLAYER2_ID, src: this.props.gameService.player2.sprites.front_default },
		]);

		this.props.gameService.player1.playerId = PLAYER1_ID;
		this.props.gameService.player2.playerId = PLAYER2_ID;
	}

	initGame() {
		const background = new Bitmap(this.queue.getResult('background'));
		background.x = background.y = 0;

		const player1 = this.createPlayer(200, 330, 5, PLAYER1_ID);
		const player2 = this.createPlayer(800, 100, 3, PLAYER2_ID);

		this.stage.addChild(background);
		this.stage.addChild(player1);
		this.stage.addChild(player2);

		this.initialAnimation(background, player1, player2);
	}

	createPlayer(x, y, scale, playerId) {
		const playerContainer = new Container();
		playerContainer.x = x + 1280;
		playerContainer.y = y;
		playerContainer.anim = {x, y};
		const playerBitmap = this.createPlayerBitmap(scale, playerId);
		const playerHeader = this.createPlayerHeader(playerId);
		playerContainer.addChild(playerBitmap, playerHeader);
		return playerContainer;
	}

	createPlayerBitmap(scale, playerId) {
		const player = new Bitmap(this.queue.getResult(playerId));
		player.x = player.y = 0;
		player.scaleX = player.scaleY = scale;
		return player;
	}

	createPlayerHeader(playerId) {
		const player = (playerId === PLAYER1_ID) ? this.props.gameService.player1 : this.props.gameService.player2;
		const pos = (playerId === PLAYER1_ID) ? {x: 550, y: 150} : {x: -650, y: 50};
		const playerHeaderContainer = new Container();
		playerHeaderContainer.x = pos.x;
		playerHeaderContainer.y = pos.y;
		const nameText = new Text(player.name, '40px Arial', '#000000');
		nameText.x = 0;
		nameText.y = -50;

		const hitPoints = player.stats.find(s => s.stat.name === 'hp').base_stat;
		const hitPointsText = new Text(hitPoints + '/' + hitPoints, '30px Arial', '#000000');
		hitPointsText.x = 410;
		hitPointsText.y = 0;
		const playerHitPointsBar = this.createPlayerHitPointsBarShape();
		playerHeaderContainer.addChild(nameText, hitPointsText, playerHitPointsBar);
		return playerHeaderContainer;
	}

	createPlayerHitPointsBarShape() {
		const barGraphic = new Graphics();
		barGraphic.setStrokeStyle(8, 'round')
			.beginStroke('#a5a5a5')
			.beginFill('#48b732')
			.drawRoundRect(0, 0, 400, 30, 10);
		const barShape = new Shape(barGraphic);
		barShape.x = barShape.y = 0;
		return barShape;
	}

	initialAnimation(background, player1, player2) {
		Tween.get(player1).to({x: player1.anim.x, y: player1.anim.y}, 1000).call(_ => {
			Tween.get(player2).to({x: player2.anim.x, y: player2.anim.y}, 1000);
		});
	}

	render = template;
}

export default GamePageComponent;
