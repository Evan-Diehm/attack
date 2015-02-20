//set in characterCreation();
var party = []

function Character(name, charClass, level, health, maxHealth){
	this.name = name;
	this.charClass = charClass;
	this.level = level;
	this.health = health;
	this.maxHealth = maxHealth;
}

function characterCreation(){
	
	var name = document.getElementById('characterName').value;
	var	 charClass = document.getElementById('characterClass');
	playerClass = charClass.options[charClass.selectedIndex].value;

	var character = new Character(name, playerClass, 1, 10, 10);

	party.push(character);
	//document.cookie = "character=" + characterName ;
	
	hide('characterSelection');
	show('fight');
}

function levelUp(xp){
	show("level-up");
	hide("fight");

	charLvl = charLvl + 1;
	charMaxHealth = charMaxHealth + 5;
	charHealth = charMaxHealth;

	document.getElementById("combatLog").innerHTML = " ";
	document.getElementById("combatLog").innerText = " ";
}