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