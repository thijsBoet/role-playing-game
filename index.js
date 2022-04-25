const renderCharacter = ({
	elementId,
	name,
	avatar,
	health,
	diceRoll,
	diceCount,
}) => {
   let diceHtml = '';

   diceRoll.map(dice => diceHtml += `<div class="dice">${dice}</div>`).join('');

   document.getElementById(elementId).innerHTML = `<div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">
         ${diceHtml}
      </div>
   </div>`;
};

const getDiceRollArray = (diceCount) => {
   let diceRoll = [];
   for (let i = 0; i < diceCount; i++) diceRoll.push(Math.floor(Math.random() * 6) + 1);
   return diceRoll;
}
console.log(getDiceRollArray(3));

const hero = {
	elementId: 'hero',
	name: 'Wizard',
	avatar: 'images/wizard.png',
	health: 60,
	diceRoll: [3,1,4],
	diceCount: 3,
};

const monster = {
	elementId: 'monster',
	name: 'Orc',
	avatar: 'images/orc.png',
	health: 10,
	diceRoll: [2],
	diceCount: 1,
};

renderCharacter(hero);
renderCharacter(monster);
