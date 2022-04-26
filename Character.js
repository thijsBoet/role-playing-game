import {
	getDiceRollArray,
	getDicePlaceholderHtml,
	getPercentage,
} from './utils.js';

export default function Character(data) {
	Object.assign(this, data);
	this.diceArray = getDicePlaceholderHtml(data.diceCount);
	this.maxHealth = data.health;

	this.getDiceHtml = () => {
		this.currentDiceScore = getDiceRollArray(this.diceCount);
		this.diceArray = this.currentDiceScore
			.map(num => `<div class="dice">${num}</div>`)
			.join('');
	};

	this.takeDamage = attackScoreArray => {
		const totalAttackScore = attackScoreArray.reduce(
			(total, num) => (total += num)
		);
		getPercentage(this.health, this.maxHealth);

		if (this.health <= 0) {
			this.dead = true;
			this.health = 0;
		} else {
			this.health -= totalAttackScore;
		}
	};

	this.getHealthBarHtml = () => {
		const healthPercentage = getPercentage(this.health, this.maxHealth);
		console.log(healthPercentage);
		return `<div class="health-bar-outer">
					<div class="health-bar-inner ${
						healthPercentage < 25 ? 'danger' : healthPercentage < 50 ? 'warning' : ''
					}"
						style="width: ${healthPercentage}">
					</div>
				</div>`;
	};

	this.getCharacterHtml = () => {
		const { name, avatar, health, diceArray } = this;
		const healthBar = this.getHealthBarHtml();
		return `<div class="character-card">
			<h4 class="name"> ${name} </h4>
			<img class="avatar" src="${avatar}"/>
			<p class="health">health: <b> ${health} </b></p>
			${healthBar}
			<div class="dice-container">
				${diceArray}
			</div>
		</div>`;
	};
}
