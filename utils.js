const getDiceRollArray = diceCount =>
	new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);

const getDicePlaceholderHtml = diceCount =>
	new Array(diceCount)
		.fill(0)
		.map(() => `<div class="placeholder-dice"></div>`)
		.join('');

const getPercentage = (num, total) => Math.round((num / total) * 100);


export { getDiceRollArray, getDicePlaceholderHtml, getPercentage };