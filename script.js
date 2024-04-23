const reset = document.getElementById("reset-btn");

let morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};

let userInput = "";

//create a user input function for the word box
function userWordInput(word) {
  let display = document.getElementById("word-input");
  display.innerHTML + -word;
}

// 1. create an onclick function for the translate button. The function can just be empty for now.
document.getElementById("translate-btn").addEventListener("click", () => {
  userInput = document.getElementById("word-input").value.toUpperCase();

  const str = userInput;
  const lettersArr = Array.from(str);
  console.log(lettersArr);

  lettersArr.forEach((str) => {
    let outputMorse = getMorseFromEnglish(str);
    console.log(outputMorse);
    let result = document.getElementById("result-box");
    result.innerHTML += outputMorse + " ";
  
  });
  reset.classList.remove("hide")
  
})

    let wordInput = document.getElementById("word-input")
    wordInput.addEventListener("click", function(){
         wordInput = ""

    })

    

    
    

// 2. store the word in a "global" variable

// 3. make if/else for each english alphabet "single" leter returning morse code equivalent

// 1. Turn the userInput into an array. This way we can loop/iterate over it.

// 2. Create a forEach to loopover

// 2.1 Convert the letter to uppercase
//string method
// 3. Convert each letter in the word to it's morse equivalent

// 4. somehow find how to put leters together to display the whole translated word

// 5. Find how to put words together

// Update the innerHTML to have the morse translation
function getMorseFromEnglish(input) {
  if (input == "A") {
    return ".-";
  } else if (input == "B") {
    return "-...";
  } else if (input == "C") {
    return "-.-.";
  } else if (input == "D") {
    return "-..";
  } else if (input == "E") {
    return ".";
  } else if (input == "F") {
    return "..-.";
  } else if (input == "G") {
    return "--.";
  } else if (input == "H") {
    return "....";
  } else if (input == "I") {
    return "..";
  } else if (input == "J") {
    return ".---";
  } else if (input == "K") {
    return "-.-";
  } else if (input == "L") {
    return ".-..";
  } else if (input == "M") {
    return "--";
  } else if (input == "N") {
    return "-.";
  } else if (input == "O") {
    return "---";
  } else if (input == "P") {
    return ".--.";
  } else if (input == "Q") {
    return "--.-";
  } else if (input == "R") {
    return ".-.";
  } else if (input == "S") {
    return "...";
  } else if (input == "T") {
    return "-";
  } else if (input == "U") {
    return "..-";
  } else if (input == "V") {
    return "...-";
  } else if (input == "W") {
    return ".--";
  } else if (input == "X") {
    return "-..-";
  } else if (input == "Y") {
    return "-.--";
  } else if (input == "Z") {
    return "--..";
  } else if (input == "0") {
    return "-----";
  } else if (input == "1") {
    return ".----";
  } else if (input == "2") {
    return "..---";
  } else if (input == "3") {
    return "...--";
  } else if (input == "4") {
    return "....-";
  } else if (input == "5") {
    return ".....";
  } else if (input == "6") {
    return "-....";
  } else if (input == "7") {
    return "--...";
  } else if (input == "8") {
    return "---..";
  } else if (input == "9") {
    return "----.";
  } else if (input == " ") return "/";
}
