const getDiceRollArray = diceCount =>
	new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);



export { getDiceRollArray };