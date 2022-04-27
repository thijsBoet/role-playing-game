import characterData from './data.js';
import Character from './Character.js';

let monstersArray = ['orc', 'demon', 'goblin'];
let isWaiting = false;

function getNewMonster() {
	const nextMonsterData =
		monstersArray.length > 0 ? characterData[monstersArray.shift()] : {};

	return new Character(nextMonsterData);
}

function render() {
	document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
	document.getElementById('monster').innerHTML = monster.getCharacterHtml();
}

function attack() {
	if (!isWaiting) {
		wizard.getDiceHtml();
		monster.getDiceHtml();
		wizard.takeDamage(monster.currentDiceScore);
		monster.takeDamage(wizard.currentDiceScore);

		render();
		if (wizard.dead) {
			endGame();
		} else if (monster.dead) {
			isWaiting = true;
			if (monstersArray.length > 0) {
				isWaiting = false;
				monster = getNewMonster();
				setTimeout(() => () => {
					render();
				}, 1500);
			} else {
				endGame();
			}
		}
	}
}

function endGame() {
	const endMessage =
		wizard.health === 0 && monster.health === 0
			? 'No victors - all creatures are dead!'
			: wizard.health < 0
			? 'The Wizard is Victorious!'
			: 'The Monsters are Victorious!';

	const endEmoji =
		wizard.health === 0 && monster.health === 0
			? '💀'
			: wizard.health < 0
			? '🔮'
				: '☠️';

	isWaiting = true;
	setTimeout(() => {
		isWaiting = false;
		document.querySelector('body').innerHTML = `
			<div class="end-game">
				<h2>Game Over</h2>
				<h3>${endMessage}</h3>
				<p class="end-emoji">${endEmoji}</p>
			</div>`;
	}, 1500);
}

const wizard = new Character(characterData.hero);
let monster = getNewMonster();

document
	.getElementById('attack-button')
	.addEventListener('click', () => attack());
render();