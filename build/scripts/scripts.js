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
var enemyHealth = null;
function createEnemy(){
	enemyHealth = Math.floor(Math.random() * (15 - 10 + 1)) + 10;

	document.getElementById("enemyHealth").innerText = enemyHealth;
}
function fight(){
	show("fight");
	hide("level-up");
	createEnemy();
	document.getElementById("charHealth").innerText = charHealth;
	document.getElementById("combatLog").innerHTML = " ";
}


function attack(){
	if(selectedParyMember.block ===true){
		selectedParyMember.block = false;
	}
	var charHit = Math.floor(Math.random() * 2);
	if(charHit){
		var damage = Math.floor(Math.random() * 5) + 1;
		enemyHealth -= damage;

		if(enemyHealth <= 0){
			levelUp();
		}

		logCombat('You hit the enemy for <span class="char">' + damage + ' </span> damage');
		document.getElementById("enemyHealth").innerText = enemyHealth;
	}else{
		logCombat('You missed');
	}

	if(enemyHealth > 0){
		defend();
	}
}


function block(){;
	var defender = selectedParyMember;
	selectedParyMember.block = true;
	//var block = Math.floor(Math.random() *2);
	var heal = Math.floor(Math.random() * (defender.maxHealth / 3)) + 1;
	logCombat(defender.charName + ' healed for <span class="char">' + heal + '</span>');

	defender.health = defender.health + heal;
	if(defender.health > defender.maxHealth){
		defender.health = defender.maxHealth;
	}
	document.getElementById("charHealth").innerText = defender.health;
	if(block){
		logCombat('you successfully blocked your enemies attack');
	}else{
		logCombat('hahahahaha I can\'t believe you just tried to block');
		defend();
	}
	
}

function defend(){
	var defender = party[Math.floor(Math.random() * party.length)];
	var enemyHit = Math.floor(Math.random() * 2);

	if(enemyHit){
		var damage = Math.floor(Math.random() * 5) + 1;
		defender.health -= damage;
		document.getElementById("charHealth").innerText = defender.health;
		if(defender.health <= 0){
			hide("fight");
			show("dead");
		}
		logCombat('enmy hit you for <span class="char">' + damage + ' </span> damage');
	}else{
		logCombat('enemy missed');
	}

	document.getElementById("charHealth").innerText = defender.health;

}

function logCombat(action){

	document.getElementById("combatLog").innerHTML = document.getElementById("combatLog").innerHTML + '<br>' + action

	var combatLog = document.getElementById("combatLog");
	combatLog.scrollTop = combatLog.scrollHeight;
}



createEnemy();

var god = new Character("Artomous", "druid", 1, 10, 10);
party.push(god);
document.getElementById("charHealth").innerText = party[0].health;

selectedParyMember = party[0];
function show (elementId) {
	document.getElementById(elementId).classList.remove("hidden");
}

function hide(elementId){
	document.getElementById(elementId).classList.add("hidden");
}