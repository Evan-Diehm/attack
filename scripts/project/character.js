//set in characterCreation();
function Character(charName, charClass, level, health, maxHealth){
	this.charBlocking = false;
	this.charClass = charClass;
	this.charHealth = health;
	this.charLevel = level;
	this.charName = charName;
	this.charMaxHealth = maxHealth;
}

// function characterCreation(){
	
// 	var charName = document.getElementById('characterName').value;
// 	var	 charClass = document.getElementById('characterClass');
// 	playerClass = charClass.options[charClass.selectedIndex].value;

// 	var character = new Character(charName, playerClass, 1, 10, 10);

// 	party.push(character);
// 	//document.cookie = "character=" + characterName ;
	
// 	hide('characterSelection');
// 	show('fight');
// }

function levelUp(){
	show("level-up");
	hide("fight");
	for(var i = 0; i < party.length; i++){
		party[i].charLevel = party[i].charLevel + 1;
		console.log(party[i].charLevel);
		party[i].charMaxHealth =party[i].charMaxHealth + 5;
		party[i].charHealth = party[i].charMaxHealth;
	}

	createPartyMember();
	document.getElementById("combatLog").innerHTML = " ";
	document.getElementById("combatLog").innerText = " ";
}