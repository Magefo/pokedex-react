class GameService {
	player1;
	player2;

	constructor() {
		console.log('initialized game service');
	}

	resetPlayers() {
		this.player1 = null;
		this.player2 = null;
	}
}

export default GameService;