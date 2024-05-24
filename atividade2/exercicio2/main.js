const formatBtn = document.getElementById("formatBtn"),
  messageBoard = document.getElementById("messageBoard"),
  actualWord = document.getElementById("actualWord"),
  formattedWord = document.getElementById("formattedWord");

formatBtn.addEventListener("click", () => {
  const word = document.getElementById("word").value;

  let newWord = "";

  if (word.length === 0) {
    alert("Por favor, insira uma palavra.");
    return;
  }

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (i === word.length - 1) {
      newWord += letter;
      break;
    }

    newWord += letter + "-";
  }

  actualWord.setAttribute("value", word);
  formattedWord.setAttribute("value", newWord);
  messageBoard.style.display = "flex";
});
