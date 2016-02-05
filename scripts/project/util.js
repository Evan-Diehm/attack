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


function findId(charId){

	/*=============================================
		search both advisary and pary arry for charId and remove from containing array
	===================================================*/

	for (var i = 0; i < advisary.length; i++){
	    if (advisary[i].charId === charId) { 
	        advisary.splice(i, 1);
	        break;
	    }
	}
}