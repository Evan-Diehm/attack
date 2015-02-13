//set in characterCreation();
var character = null;
	characterClass = null;
	charLvl = 1;
	charHealth = 10;
	charMaxHealth = 10;
	//set in enemycration();
	
function characterCreation(){
	character = document.getElementById('characterName').value;
	var	 charClass = document.getElementById('characterClass');
	characterClass = charClass.options[charClass.selectedIndex].value;

	//document.cookie = "character=" + characterName ;
	
	hide('characterSelection');
	show('fight');
}
var enemyHealth = null;
function createEnemy(){
	enemyHealth = Math.floor(Math.random() * (15 - 10 + 1)) + 10;

	document.getElementById("enemyHealth").innerText = enemyHealth;	
}
function attack(){
	var youHit = Math.floor(Math.random() * 2);

	if(youHit){
		console.log("you hit");
		var damage = Math.floor(Math.random() * 5) + 1;
		enemyHealth -= damage;

		if(enemyHealth <= 0){
			levelUp();
		}

		logCombat('You hit the enemy for <span class="char">' + damage + ' </span> damage');
		document.getElementById("enemyHealth").innerText = charHealth;
	}else{
		logCombat('You missed');
	}

	if(enemyHealth > 0){
		defend();
	}	
}


function block(){
	var block = Math.floor(Math.random() *2);
	var heal = Math.floor(Math.random() * (charHealth / 3)) +1;
	logCombat('you healed for' + heal);
	charHealth = charHealth + heal;
	if(charHealth > charMaxHealth){
		charHealth = charMaxHealth;
	}
	document.getElementById("charHealth").innerText = charHealth;
	if(block){
		logCombat('you successfully blocked your enemies attack');
	}else{
		logCombat('hahahahaha I can\'t believe you just tried to block');
		defend();
	}
	
}

function defend(){
	var enemyHit = Math.floor(Math.random() * 2);

	if(enemyHit){
		var damage = Math.floor(Math.random() * 5) + 1;
		charHealth -= damage;
		document.getElementById("charHealth").innerText = charHealth ;
		if(charHealth <= 0){
			hide("fight");
			show("dead");
		}
		logCombat('enmy hit you for <span class="char">' + damage + ' </span> damage');
	}else{
		logCombat('enemy missed');
	}

	document.getElementById("charHealth").innerText = charHealth;

}

function levelUp(xp){
	show("level-up");
	hide("fight");

	charLvl = charLvl + 1;
}


function logCombat(action){

	document.getElementById("combatLog").innerHTML = document.getElementById("combatLog").innerHTML + '<br>' + action

	var combatLog = document.getElementById("combatLog");
	combatLog.scrollTop = combatLog.scrollHeight;
}

function show (elementId) {
	document.getElementById(elementId).classList.remove("hidden");
}

function hide(elementId){
	document.getElementById(elementId).classList.add("hidden");
}

createEnemy();

enemyDiv = document.getElementById("charHealth").innerText = charHealth;