	//set in characterCreation();
var character = null;
	characterClass = null;
	charLvl = 1;
	//set in enemycration();
	charHealth = 10;
	enemyHealth = 10;
function characterCreation(){
	character = document.getElementById('characterName').value;
	var	 charClass = document.getElementById('characterClass');
	characterClass = charClass.options[charClass.selectedIndex].value;

	//document.cookie = "character=" + characterName ;
	
	hide('characterSelection');
	show('attack');
}

function attack(){
	var youHit = Math.floor(Math.random() * 2);

	if(youHit){
		console.log("you hit");
		var damage = Math.floor(Math.random() * 5 + 1);
		console.log("damage=" + damage);
		enemyHealth -= damage;
		console.log("enemy Health=" + enemyHealth);
		if(enemyHealth <= 0){
			levelUp();
		}
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
		console.log("enemy hit");
		var damage = Math.floor(Math.random() * 5 + 1);
		charHealth -= charHealth;
		if(charHealth <= 0){
			hide("attack");
			show("dead");
		}

	}

}

function levelUp(xp){
	show("level-up");
	hide("attack");

	charLvl = charLvl + 1;

	console.log("you won");
}



function show (elementId) {
	document.getElementById(elementId).classList.remove("hidden");
}

function hide(elementId){
	document.getElementById(elementId).classList.add("hidden");
}