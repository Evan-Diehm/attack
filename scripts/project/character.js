//set in characterCreation();
function Character(charName, charClass, level, health, maxHealth){
	this.charName = charName;
	this.charClass = charClass;
	this.level = level;
	this.health = health;
	this.maxHealth = maxHealth;
	this.blocking = false;
}

function characterCreation(){
	
	var charName = document.getElementById('characterName').value;
	var	 charClass = document.getElementById('characterClass');
	playerClass = charClass.options[charClass.selectedIndex].value;

	var character = new Character(charName, playerClass, 1, 10, 10);

	party.push(character);
	//document.cookie = "character=" + characterName ;
	
	hide('characterSelection');
	show('fight');
}

function levelUp(xp){
	show("level-up");
	hide("fight");
	var i = 0;
	while(i < party.length){
		party[i].charLvl = party[i].charLvl + 1;
		party[i].maxHealth =party[i]. maxHealth + 5;
		party[i].health = party[i].maxHealth;
		i++;
	}

	createPartyMemeber();
	document.getElementById("combatLog").innerHTML = " ";
	document.getElementById("combatLog").innerText = " ";
}