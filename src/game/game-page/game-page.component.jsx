import React from 'react';
import { Redirect } from 'react-router';
import { isNullOrUndefined } from 'util';

export default function () {
	if (isNullOrUndefined(this.props.gameService.player1) || isNullOrUndefined(this.props.gameService.player2)) {
		return <Redirect push to="/" />;
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-lg-8">
					<canvas id="game-canvas" height="720" width="1280"></canvas>
				</div>
			</div>
		</div>
	);
};
