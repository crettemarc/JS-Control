let playerOne = {
    name: "Larsen",
    lifePoints: 10,
}

let playerTwo = {
    name: "Delta",
    lifePoints: 10,
}

players = [playerOne, playerTwo]

function dealDammage(victim, dmg){
    victim.lifePoints = victim.lifePoints - dmg
}

function showStats(players){
    players.forEach((player) => {
        console.log(player)
    })
}

console.log("A ma droite ", playerOne.name);
console.log("A ma gauche ", playerTwo.name);
console.log("Présentons les deux combatants");
console.log(playerOne.name, "avec", playerOne.lifePoints, "points de vie");
console.log(playerTwo.name, "avec", playerTwo.lifePoints, "points de vie");
console.log("Fight !");
console.log(playerOne.name, "aura l'honneur de commencer");

while (playerOne.lifePoints > 0 && playerTwo.lifePoints > 0){
    dealDammage(playerTwo, 1)
    
}


