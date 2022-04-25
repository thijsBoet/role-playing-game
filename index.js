const renderCharacter = ({
	elementId,
	name,
	avatar,
	health,
	diceCount,
}) => {
	let diceHtml = getDiceHtml(diceCount);

	document.getElementById(elementId).innerHTML = 
	`<div class="character-card">
		<h4 class="name"> ${name} </h4>
		<img class="avatar" src="${avatar}"/>
		<p class="health">health: <b> ${health} </b></p>
		<div class="dice-container">
			${diceHtml}
		</div>
	</div>`;
};

const getDiceRollArray = diceCount => new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);

const getDiceHtml = diceCount =>
	getDiceRollArray(diceCount)
		.map(dice => `<div class="dice">${dice}</div>`)
		.join('');


const hero = {
	elementId: 'hero',
	name: 'Wizard',
	avatar: 'images/wizard.png',
	health: 60,
	diceCount: 3,
};

const monster = {
	elementId: 'monster',
	name: 'Orc',
	avatar: 'images/orc.png',
	health: 10,
	diceCount: 1,
};

renderCharacter(hero);
renderCharacter(monster);
