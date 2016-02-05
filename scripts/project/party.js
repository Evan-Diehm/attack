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