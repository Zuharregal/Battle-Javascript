function RPGActor() {
  this.life = Math.floor(Math.random() * 11) + 10; // random life between 10 and 20
  this.hitpoints = Math.floor(Math.random() * 6) + 5; // random hit points between 5 and 10
  this.alive = true;
  
  this.attack = function(enemy) {
    let success = Math.floor(Math.random() * 3); // 0 = miss, 1 or 2 = hit
    if (success > 0) {
      enemy.life -= this.hitpoints;
      if (enemy.life <= 0) {
        enemy.life = 0;
        enemy.alive = false;
      }
    }
  }
}

function play() {
  let actor1 = new RPGActor();
  let actor2 = new RPGActor();
  let battleDiv = document.getElementById("battle");
  battleDiv.innerHTML = "Actor 1: " + actor1.life + " life points<br>";
  battleDiv.innerHTML += "Actor 2: " + actor2.life + " life points<br><br>";
  
  let attackingActor = actor1;
  let defendingActor = actor2;
  
  while (actor1.alive && actor2.alive) {
    attackingActor.attack(defendingActor);
    battleDiv.innerHTML += "Actor 1 attacks Actor 2 for " + attackingActor.hitpoints + " damage<br>";
    battleDiv.innerHTML += "Actor 2 now has " + defendingActor.life + " life points<br><br>";
    
    // switch attacker and defender
    let temp = attackingActor;
    attackingActor = defendingActor;
    defendingActor = temp;
  }
  
  if (actor1.alive) {
    battleDiv.innerHTML += "Actor 1 wins!";
  } else {
    battleDiv.innerHTML += "Actor 2 wins!";
  }
}