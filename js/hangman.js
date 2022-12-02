let wordList = ["shovel", "blink", "spider"]

let targetWord = wordList[Math.floor(Math.random() *wordList.length)];

console.log(targetWord);

let guesses = 10,
userHasWon = false;
userLetter = [],
lettersLeft = '';

for(let i = 0; i <= targetWord.length - 1; i++) {
  userLetter[i] = "_";
}

lettersLeft = userLetter.length;
let message = '\n';
while(guesses > 0 && !userHasWon) {
  let userInput = prompt(message + "Guesses left :" + guesses + "\n" + userLetter.join(" ") + "\nEnter a letter:");

  for(let i = 0; i <= targetWord.length - 1; i++) {
    if (userLetter.includes(userInput)) {
      console.log(userLetter + userInput);
      message = "You have already found that letter!\n";
    } else if (userInput === targetWord[i]) {
      guesses++;
      userLetter[i] = userInput;
      lettersLeft--;
      message = "Found!\n";
      break;
    } else {
      message = "Not in the word!\n";
    }
  }

  guesses--;

  userHasWon = lettersLeft === 0 ? true : false;
}

if(userHasWon) {
  alert("Winner");
} else {
  alert("You lose");
}