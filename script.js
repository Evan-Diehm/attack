	//set in characterCreation();
var character = null;
	characterClass = null;
	charLvl = 1;
	//set in enemycration();
	enemyHealth = 10;
function characterCreation(){
	character = document.getElementById('characterName').value;
	var	 charClass = document.getElementById('characterClass');
	characterClass = charClass.options[charClass.selectedIndex].value;

	//document.cookie = "character=Artomous" ;
	
	hide('characterSelection');
	show('chapterOne')
}

function attack(){
	var youHit = Math.floor(Math.random() * 2);

	if(youHit){
		var damage = Math.floor(Math.random() * 5 + 1);
		enemyHealth -= damage;
		if(enemyHealth <= 0){
			levelUp();
		}	
	}

	console.log("you hit="+youHit);
	console.log("damage=" + damage);
	console.log("enemy Health=" + enemyHealth);
}

function levelUp(xp){
	show("level-up");
	hide("attack");

	console.log("you won");
}



function show (elementId) {
	document.getElementById(elementId).style.display = "block";
}

function hide(elementId){
	document.getElementById(elementId).style.display = "none";
}