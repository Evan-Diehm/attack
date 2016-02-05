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