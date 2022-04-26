const getDiceRollArray = diceCount =>
	new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);

function Character(data) {
	Object.assign(this, data);

	this.getDiceHtml = diceCount =>
		getDiceRollArray(diceCount)
			.map(dice => `<div class="dice">${dice}</div>`)
			.join('');

	this.getCharacterHtml = () => {
		const { elementId, name, avatar, health, diceCount } = this;
		let diceHtml = this.getDiceHtml(diceCount);

		return `<div class="character-card">
			<h4 class="name"> ${name} </h4>
			<img class="avatar" src="${avatar}"/>
			<p class="health">health: <b> ${health} </b></p>
			<div class="dice-container">
				${diceHtml}
			</div>
		</div>`;
	};
}

function render() {
	document.getElementById(wizard.elementId).innerHTML =
		wizard.getCharacterHtml();
	document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
}

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

const wizard = new Character(hero);
const orc = new Character(monster);

render();
