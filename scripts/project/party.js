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