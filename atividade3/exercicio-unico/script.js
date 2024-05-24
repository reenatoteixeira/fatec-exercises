const formatBtn = document.getElementById("formatBtn"),
  messageBoard = document.getElementById("messageBoard"),
  actualWord = document.getElementById("actualWord"),
  separatedWord = document.getElementById("separatedWord"),
  totalCharacters = document.getElementById("totalCharacters"),
  totalVowels = document.getElementById("totalVowels"),
  totalConsonants = document.getElementById("totalConsonants"),
  noVowels = document.getElementById("noVowels"),
  noConsonants = document.getElementById("noConsonants");

formatBtn.addEventListener("click", () => {
  const word = document.getElementById("word").value;

  let newSeparatedWord = "",
    totalCharactersCount = 0,
    totalVowelsCount = 0,
    totalConsonantsCount = 0,
    noVowelsWord = "",
    noConsonantsWord = "";

  if (word.length === 0) {
    alert("Por favor, insira uma palavra.");
    return;
  }

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    totalCharactersCount++;
    noVowelsWord = word.replace(/[aeiou]/gi, "@");
    noConsonantsWord = word.replace(/[bcdfghjklmnpqrstvwxyz]/gi, "#");

    if (letter.match(/[aeiou]/gi)) {
      totalVowelsCount++;
    }

    if (letter.match(/[bcdfghjklmnpqrstvwxyz]/gi)) {
      totalConsonantsCount++;
    }

    if (i === word.length - 1) {
      newSeparatedWord += letter;
      break;
    }
    newSeparatedWord += letter + "-";
  }

  actualWord.setAttribute("value", word);
  separatedWord.setAttribute("value", newSeparatedWord);
  totalCharacters.setAttribute("value", totalCharactersCount);
  totalVowels.setAttribute("value", totalVowelsCount);
  totalConsonants.setAttribute("value", totalConsonantsCount);
  noVowels.setAttribute("value", noVowelsWord);
  noConsonants.setAttribute("value", noConsonantsWord);
  messageBoard.style.display = "flex";
});
