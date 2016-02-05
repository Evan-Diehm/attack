//set in characterCreation();
function Character(charId, charName, charClass, level, health, maxHealth, speed, alegance){
	this.alegance = alegance;
	this.charBlocking = false;
	this.charClass = charClass;
	this.charHealth = health;
	this.charLevel = level;
	this.charName = charName;
	this.charMaxHealth = maxHealth;
	this.charSpeed = speed;
	this.charId = charId;
}

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