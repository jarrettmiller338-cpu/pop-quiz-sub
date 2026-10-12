let score = 0;

let question1 = prompt("What is 5 + 5? A. 10 B. 15");

if (question1 === "A" || question1 === "a") {
  score = score + 1;
  alert("Correct!");
} else {
  alert("Wrong answer!");
}

let question2 = prompt("Which one is a string? A. 25 B. Hello");

if (question2 === "B" || question2 === "b") {
  score = score + 1;
  alert("Correct!");
} else {
  alert("Wrong answer!");
}

let question3 = prompt("What does Boolean mean? A. True or False B. Numbers");

if (question3 === "A" || question3 === "a") {
  score = score + 1;
  alert("Correct!");
} else {
  alert("Wrong answer!");
}

if (score === 0) {
  alert("You got 0 out of 3. Better luck next time!");
} else if (score === 3) {
  alert("You got 3 out of 3! Great job!");
} else {
  alert("You got " + score + " out of 3. Good try!");
}

console.log("Final Score: " + score);
