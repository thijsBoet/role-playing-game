import characterData from './data.js';
import Character from './Character.js';

function render() {
	document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
	document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

function attack() {
	wizard.getDiceHtml();
	orc.getDiceHtml();
	wizard.takeDamage(orc.currentDiceScore);
	orc.takeDamage(wizard.currentDiceScore);

	render();
	if (wizard.dead || orc.dead) {
		endGame();
	}
}

function endGame() {
	const endMessage =
		wizard.health === 0 && orc.health === 0
			? 'No victors - all creatures are dead!'
			: wizard.health < 0
			? 'The Wizard is Victorious!'
			: 'The Orc is Victorious!';

	const endEmoji =
		wizard.health === 0 && orc.health === 0
			? '💀'
			: wizard.health < 0
			? '🔮'
			: '☠️';

	document.querySelector('body').innerHTML = `
		<div class="end-game">
			<h2>Game Over</h2>
			<h3>${endMessage}</h3>
			<p class="end-emoji">${endEmoji}</p>
		</div>`
}

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

document
	.getElementById('attack-button')
	.addEventListener('click', () => attack());
render();
