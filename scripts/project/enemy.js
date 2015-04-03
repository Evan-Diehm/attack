function createEnemy(){
	enemyHealth = Math.floor(Math.random() * (15 - 10 + 1)) + 10;

	document.getElementById("enemyHealth").innerText = enemyHealth;
}