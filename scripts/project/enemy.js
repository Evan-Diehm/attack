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