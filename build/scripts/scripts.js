var party = [],
	adversary = [],
	selectedFighter,
	initiativePosition = 0,
	enemyHealth,
	maleNameArray = ["Billy", "Jimmy", "Teddy", "Fred"],
	femaleNameArray = ["Nancy","Jill", "Mary"],
	classArray = ["Monk", "Mage", "Warrior", "Ranger"],
	initiative = [],
	god = new Character("Artomous", "druid", 1, 10, 10);
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
function createEnemy(){
	enemyHealth = Math.floor(Math.random() * (15 - 10 + 1)) + 10;

	document.getElementById("enemyHealth").innerText = enemyHealth;
}
function setupFight(){
	displayParty();
	show("fight");
	hide("level-up");
	createEnemy();
	
	document.getElementById("combatLog").innerHTML = " ";
}

function fight(action ){
	if(initiativePosition > initiative.length){
		initiativePosition = 0;
	}else{
		initiativePosition++;
	}
	
	selectedFighter = initiative[initiativePosition];

	if(action == "attack"){
		attack();
	}else if(action == "block"){
		block();
	}
}


function attack(){
	// if(selectedFighter.blocking ===true){
	// 	selectedFighter.blocking = false;
	// }
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
		fight();
	}
}


function block(){
	console.log(selectedFighter);
	var defender = selectedFighter;
	selectedFighter.blocking = true;
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

// function defend(){
// 	var defender = party[Math.floor(Math.random() * party.length)];
// 	var enemyHit = Math.floor(Math.random() * 2);

// 	if(enemyHit){
// 		var damage = Math.floor(Math.random() * 5) + 1;
// 		defender.health -= damage;
// 		document.getElementById("charHealth").innerText = defender.health;
// 		if(defender.health <= 0){
// 			hide("fight");
// 			show("dead");
// 		}
// 		logCombat('enmy hit you for <span class="char">' + damage + ' </span> damage');
// 	}else{
// 		logCombat('enemy missed');
// 	}

// 	document.getElementById("charHealth").innerText = defender.health;

// }

function logCombat(action){

	document.getElementById("combatLog").innerHTML = document.getElementById("combatLog").innerHTML + '<br>' + action

	var combatLog = document.getElementById("combatLog");
	combatLog.scrollTop = combatLog.scrollHeight;
}



createEnemy();

party.push(god);
setupFight();

//selectedFighter = party[0];
function createPartyMember(){
	
	var gender	 = Math.floor(Math.random() * 2);
	var charName;
	if(gender){
		charName = maleNameArray[Math.floor(Math.random() * maleNameArray.length)]
	}else{
		charName = femaleNameArray[Math.floor(Math.random() * femaleNameArray.length)]
	}

	var charBlocking = false
		charClass = classArray[Math.floor(Math.random() * classArray.length)];
		charHealth = party[0].charMaxHealth
		charLevel = party[0].charLevel		
		charMaxHealth = party[0].charMaxHealth;


	var character = new Character(charName, charClass, charLevel, charHealth, charMaxHealth, charBlocking);

	party.push(character);
	
}

function displayParty(){
	var partyContainer = document.getElementById('partyContainer')
	partyContainer.innerHTML  = "";
	for(var i = 0; i < party.length; i++){
		console.log(party[i].charHealth);
		console.log(party[i].charName);

		var charHealth = document.createElement('div')
			charName = document.createElement('h2')
			charNode = document.createTextNode(party[i].charName)
			div = document.createElement('div')
			pnode = document.createTextNode(party[i].charHealth);

		

		charHealth.className = 'charHealth';
		charName.className = 'charName';
		div.className = 'charContainer';
		

		
		charHealth.appendChild(pnode);
		charName.appendChild(charNode); 
		div.appendChild(charName);
		div.appendChild(charHealth);
		partyContainer.appendChild(div);

	}
}
function show (elementId) {
	document.getElementById(elementId).classList.remove("hidden");
}

function hide(elementId){
	document.getElementById(elementId).classList.add("hidden");
}