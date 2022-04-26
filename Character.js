import { getDiceRollArray } from './utils.js';

export default function Character(data) {
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