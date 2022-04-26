import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js';

export default function Character(data) {
	Object.assign(this, data);
	this.diceArray = getDicePlaceholderHtml(data.diceCount);

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

		if (this.health <= 0) {
			this.dead = true;
			this.health = 0;
		} else {
			this.health -= totalAttackScore;
		}
	};

	this.getCharacterHtml = () => {
		const { name, avatar, health, diceArray } = this;

		return `<div class="character-card">
			<h4 class="name"> ${name} </h4>
			<img class="avatar" src="${avatar}"/>
			<p class="health">health: <b> ${health} </b></p>
			<div class="dice-container">
				${diceArray}
			</div>
		</div>`;
	};
}
