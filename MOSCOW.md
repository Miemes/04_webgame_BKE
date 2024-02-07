 Must have:
  maak een random getal DONE
  link de keverdelen aan getallen
  popup met regels
  spelers laten zien welk nummer is gegooid DONE

 Should have:
  2 spelers

 Could have:
  openingsscherm
  teken je eigen keverdelen

 Won’t have:
  // Function to simulate rolling a six-sided die
  function rollDie() {
  // Generate a random number between 1 and 6
    return Math.floor(Math.random() * 6) + 1;
  }

  // Function to roll the die and log the result
  function rollDieAndAlert() {
    var dieResult = rollDie();
    alert("You rolled a " + dieResult);
  }

