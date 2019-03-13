module.exports = function sign(mod) {
	let gameId;
	
	mod.hook('S_LOGIN', 12, (event) => {
		gameId = event.gameId;
	});
	
	mod.hook('S_AIR_REACTION_END', 1, (event) => {
		if(gameId.toString() == event.gameId.toString()) {
			event.loc.z += 2;
			return true;
		}
	});
}
