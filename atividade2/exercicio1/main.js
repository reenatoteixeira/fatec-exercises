const verifyBtn = document.getElementById("verifyBtn"),
  result = document.getElementById("result");

verifyBtn.addEventListener("click", () => {
  const number1 = parseFloat(document.getElementById("number1").value),
    number2 = parseFloat(document.getElementById("number2").value);

  if (isNaN(number1) || isNaN(number2)) {
    alert("Por favor, preencha ambos os números.");
    return;
  }

  if (number1 < 0 || number1 > 100 || number2 < 0 || number2 > 100) {
    alert("Os números devem estar entre 0 e 100.");
    return;
  }

  result.innerHTML =
    number1 === number2
      ? "Os números são iguais"
      : `O número ${Math.min(number1, number2)} é menor que ${Math.max(
          number1,
          number2
        )}.`;
});
