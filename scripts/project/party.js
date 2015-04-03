function createPartyMember(){
	
	var gender	 = Math.floor(Math.random() * 2);
	var charName;
	if(gender){
		charName = maleNameArray[Math.floor(Math.random() * maleNameArray.length)]
	}else{
		//charName femaleNameArray[Math.floor(Math.random() * femaleNameArray.length)]
	}

	var charClass = classArray[Math.floor(Math.random() * classArray.length)];
	var charLevel = party[0].level;
	var charHealth = party[0].maxHealth;
	var charMaxHealth = party[0].maxHealth;
	var charBlocking = false;


	var character = new Character(charName, charClass, charLevel, charHealth, charMaxHealth, charBlocking);

	party.push(character);
	
}

