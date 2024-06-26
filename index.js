function diceRoller() {
  let randomNo1 = Math.round(Math.random() * 6)+1;
  let randomNo2 = Math.round(Math.random() * 6)+1;
  //player 1 images
  if (randomNo1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
  } else if (randomNo1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
  } else if (randomNo1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
  } else if (randomNo1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
  } else if (randomNo1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
  } else if (randomNo1 === 6) {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
  } else {
    return "invalid";
  }
  //player 2 images
  if (randomNo2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
  } else if (randomNo2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
  } else if (randomNo2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
  } else if (randomNo2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
  } else if (randomNo2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
  } else if (randomNo2 === 6) {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
  } else {
    return "invalid";
  }
  return [randomNo1, randomNo2];
}

let [p1,p2] = diceRoller();
if (p1 === p2) {
    document.getElementById("who-wins").textContent = "Match Draw";
  } else if (p1 > p2) {
    document.getElementById("who-wins").textContent = "Player 1 Wins!";
  } else {
    document.getElementById("who-wins").textContent = "Player 2 Wins!";
  }

document.getElementById("p1-no").textContent = p1;
document.getElementById("p2-no").textContent = p2;
