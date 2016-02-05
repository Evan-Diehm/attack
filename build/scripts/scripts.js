var party = [],
	advisary = [],
	selectedFighter,
	selectedTarget,
	initiativePosition = 0,
	maleNameArray = ["Billy", "Jimmy", "Teddy", "Fred"],
	femaleNameArray = ["Nancy","Jill", "Mary"],
	classArray = ["Monk", "Mage", "Warrior", "Ranger"],
	initiative = [],
	god = new Character("god","Artomous", "druid", 1, 10, 10, 1, "party");
	godess = new Character("godess","Eco", "Warrior", 1, 10, 10, 1, "party");
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
function createEnemy(){
	var enemyHealth = Math.floor(Math.random() * (15 - 10 + 1)) + 10
		enemyLevel = party[0].charLevel
		enemyName = "Skeleton"
		enemySpeed = Math.floor(Math.random() * 5);
		enemyId = makeId();

	var enemy = new Character(enemyId ,enemyName, "", enemyLevel, enemyHealth, enemyHealth, enemySpeed, "enemy")

	advisary.push(enemy);

	document.getElementById("enemyHealth").id = enemyId + "Health"

	document.getElementById(enemyId + "Health").innerText = enemyHealth;
}
function attack(){
	// if(selectedFighter.blocking ===true){
	// 	selectedFighter.blocking = false;
	// }
	var charHit = Math.floor(Math.random() * 2);
	if(charHit){
		var damage = Math.floor(Math.random() * 5) + 1;
		
		selectedTarget.charHealth -= damage;

		logCombat(selectedFighter.charName + ' hit ' + selectedTarget.charName +' for <span class="char">' + damage + ' </span> damage');

		displayActivity(selectedTarget.charId, selectedTarget.charHealth, "Health");

	}else{
		logCombat(selectedFighter.charName + ' missed');
	}

	if(selectedTarget.charHealth > 0){
		fight();
	}else{
		if(selectedTarget.alegance == "enemy"){
			for (var i = 0; i < advisary.length; i++)
			    if (advisary[i].charName && items[i].id === "animal") { 
			        advisary.splice(i, 1);
			        break;
			    }
		}else{

		}
		console.log("target is dead");
	}
}


function block(){
	var defender = selectedFighter;
	selectedFighter.blocking = true;
	//var block = Math.floor(Math.random() *2);
	var heal = Math.floor(Math.random() * (defender.charMaxHealth / 3)) + 1;
	logCombat(defender.charName + ' healed for <span class="char">' + heal + '</span>');

	defender.charHealth = defender.charHealth + heal;
	if(defender.charHealth > defender.charMaxHealth){
		defender.charHealth = defender.charMaxHealth;
	}
	document.getElementById(selectedFighter.charName + "Health").innerText = defender.charHealth;
	if(block){
		logCombat('you successfully blocked your enemies attack');
	}else{
		logCombat('hahahahaha I can\'t believe you just tried to block');
		defend();
	}
	
}

function endFight(){
	if(advisary.length == 0){
		levelup();
	}else{
		show("dead");
		hide("fight");
	}
}


function fight(action){
	
	if(initiativePosition >= initiative.length - 1){
		initiativePosition = 0;
	}else{
		initiativePosition++;
	}
	
	selectedFighter = initiative[initiativePosition];

	if(party.length == 0 || advisary.length == 0){
		endFight();
	}else{

		if(initiative[initiativePosition].alegance == "enemy"){
			
			var i = Math.floor(Math.random(party.length));

			selectedTarget = party[i];

			attack();

		}else{

			/*================================
				selectedTarget needs to be set up so play can select acutal target
			====================================*/
			selectedTarget = advisary[0];


			if(action == "attack"){
				attack();
			}else if(action == "block"){
				block();
			}
		}

	}		
}

function logCombat(action){

	document.getElementById("combatLog").innerHTML = document.getElementById("combatLog").innerHTML + '<br>' + action

	var combatLog = document.getElementById("combatLog");
	combatLog.scrollTop = combatLog.scrollHeight;
}


function setInitiative () {
	var partyList = party
		enemyList = advisary
		fighters = partyList.concat(enemyList);

	initiative = fighters.sort(function(a, b){
		return a.charSpeed - b.charSpeed
	});
}



function setupFight(){
	displayParty();
	show("fight");
	hide("level-up");
	createEnemy();
	setInitiative();

	if(initiative[0].alegance == "enemy"){
		fight("attack");
	}
	
	document.getElementById("combatLog").innerHTML = " ";
}

party.push(god);
party.push(godess);
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

	var charClass = classArray[Math.floor(Math.random() * classArray.length)];
		charHealth = party[0].charMaxHealth
		charLevel = party[0].charLevel		
		charMaxHealth = party[0].charMaxHealth
		charSpeed = Math.floor(Math.random() * 5);
		alegance = "party",
		charId = makeId();

	var character = new Character(charId, charName, charClass, charLevel, charHealth, charMaxHealth, charSpeed, alegance );

	party.push(character);
	
}

function displayParty(){
	var partyContainer = document.getElementById('partyContainer')
	partyContainer.innerHTML  = "";
	for(var i = 0; i < party.length; i++){

		var charHealth = document.createElement('div')
			charName = document.createElement('h2')
			charNode = document.createTextNode(party[i].charName)
			div = document.createElement('div')
			pnode = document.createTextNode(party[i].charHealth);

		

		charHealth.className = 'charHealth';
		charHealth.id = party[i].charId + "Health";
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


function displayActivity(targEle, displayItm, addon ){
	console.log(addon);

	if(addon != null){
		document.getElementById(targEle + addon).innerText = displayItm;	
	}else{
		document.getElementById(targEle).innerText = displayItm;
	}
	
}


function makeId(alegance)
{
    var genId = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ ){
        genId += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    if(alegance == "enemy"){
    	for(var r=0; r < advisary.length - 1; r++){
    		if(advisary[r].charId == genId){
    			makeId();
    		}else{
	    		return genId;
	    	}
    	}
    }else if(alegance == "party"){
    	for(var r=0; r < advisary.length - 1; r++){
    		if(party[r].charId == genId){
    			makeId();
    		}else{
	    		return genId;
	    	}
    	}
    }
}