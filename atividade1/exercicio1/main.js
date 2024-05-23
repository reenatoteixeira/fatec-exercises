const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value,
    grade1 = parseFloat(document.getElementById("grade1").value),
    grade2 = parseFloat(document.getElementById("grade2").value),
    actualName = document.getElementById("actualName"),
    actualGrade1 = document.getElementById("actualGrade1"),
    actualGrade2 = document.getElementById("actualGrade2"),
    finalGrade = document.getElementById("finalGrade"),
    result = document.getElementById("result"),
    messageBoard = document.getElementById("messageBoard"),
    average = (grade1 + grade2) / 2;
  
  let concept = "",
    situation = "";

  if (name === "" || grade1 === "" || grade2 === "") {
    alert("Por favor, preencha todos os campos");
    return;
  }

  if (grade1 < 0 || grade1 > 10) {
    alert("Nota M1 deve estar entre 0 e 10");
    return;
  }

  if (grade2 < 0 || grade2 > 10) {
    alert("Nota M2 deve estar entre 0 e 10");
    return;
  }

  if (average < 5) {
    concept = "Retido";
    situation = "failed";
  }

  if (average >= 5 && average <= 7) {
    concept = "Recuperação";
    situation = "recap";
  }

  if (average > 7) {
    concept = "Aprovado";
    situation = "passed";
  }

  actualName.setAttribute("value", name);
  actualGrade1.setAttribute("value", grade1);
  actualGrade2.setAttribute("value", grade2);
  finalGrade.setAttribute("value", average.toFixed(2));
  result.innerHTML = concept;
  result.classList.add(situation);
  messageBoard.style.display = "flex";
});
