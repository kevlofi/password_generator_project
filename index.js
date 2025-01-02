const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordEl1 = document.querySelector("#password-el1");
let passwordEl2 = document.querySelector("#password-el2");

console.log(passwordEl1);
console.log(passwordEl2);

let randNumber = Math.floor(Math.random() * (18 - 12 + 1)) + 12;

function generatePasswords() {
  passwordEl1.textContent = "";
  passwordEl2.textContent = "";

  for (let i = 0; i < randNumber; i++) {
    let randNumber2 = Math.floor(Math.random() * (91 - 1 + 1));
    passwordEl1.textContent += characters[randNumber2];
  }

  for (let i = 0; i < randNumber; i++) {
    let randNumber2 = Math.floor(Math.random() * (91 - 1 + 1));
    passwordEl2.textContent += characters[randNumber2];
  }
}

console.log(randNumber);
