//set in characterCreation();
var party = []
	selectedParyMember;

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

	charLvl = charLvl + 1;
	charMaxHealth = charMaxHealth + 5;
	charHealth = charMaxHealth;

	document.getElementById("combatLog").innerHTML = " ";
	document.getElementById("combatLog").innerText = " ";
}