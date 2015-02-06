	//set in characterCreation();
var character = null;
	characterClass = null;
	charLvl = 1;
	charHealth = 10;
	//set in enemycration();
	enemyHealth = null;
function characterCreation(){
	character = document.getElementById('characterName').value;
	var	 charClass = document.getElementById('characterClass');
	characterClass = charClass.options[charClass.selectedIndex].value;

	//document.cookie = "character=" + characterName ;
	
	hide('characterSelection');
	show('fight');
}

function createEnemy(){
	enemyHealth = Math.floor(Math.random() * 20 + 10 );
	document.getElementById("enemyHealth").innerText = enemyHealth ;

	
}

function attack(){
	var youHit = Math.floor(Math.random() * 2);

	if(youHit){
		console.log("you hit");
		var damage = Math.floor(Math.random() * 5 + 1);
		enemyHealth -= damage;

		if(enemyHealth <= 0){
			levelUp();
		}

		document.getElementById("combatLog").innerHTML = document.getElementById("combatLog").innerHTML + '<br>You hit the enemy for <span class="char">' + damage + ' </span> damage';
	}else{
		document.getElementById("combatLog").innerHTML = document.getElementById("combatLog").innerHTML + '<br>You missed'
	}

	if(enemyHealth > 0){
		defend();
	}	
}


function block(){

}

function defend(){
	var enemyHit = Math.floor(Math.random() * 20);

	if(enemyHit){
		var damage = Math.floor(Math.random() * 5 + 1);
		charHealth -= damage;
		document.getElementById("charHealth").innerText = charHealth ;
		if(charHealth <= 0){
			hide("fight");
			show("dead");
		}
		document.getElementById("combatLog").innerHTML = document.getElementById("combatLog").innerHTML + '<br>enmy hit you for <span class="char">' + damage + ' </span> damage';
	}else{
		document.getElementById("combatLog").innerHTML = document.getElementById("combatLog").innerHTML + '<br>enemy missed'
	}

}

function levelUp(xp){
	show("level-up");
	hide("fight");

	charLvl = charLvl + 1;

	console.log("you won");
}



function show (elementId) {
	document.getElementById(elementId).classList.remove("hidden");
}

function hide(elementId){
	document.getElementById(elementId).classList.add("hidden");
}






createEnemy();

enemyDiv = document.getElementById("charHealth").innerText = charHealth;