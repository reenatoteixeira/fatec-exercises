const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
  const quantity = parseInt(document.getElementById("quantity").value),
    type = parseInt(document.getElementById("type").value),
    quantitySold = document.getElementById("quantitySold"),
    popType = document.getElementById("popType"),
    popPrice = document.getElementById("popPrice"),
    totalPrice = document.getElementById("totalPrice"),
    messageBoard = document.getElementById("messageBoard");
  
  let price = 0,
    total = "";

  if (isNaN(quantity) || quantity < 0) {
    alert("Por favor, informe a quantidade desejada");
    return;
  }

  if (isNaN(type) || type === 0) {
    alert("Por favor, selecione o tipo do picolé");
    return;
  }

  switch (type) {
    case 1:
      price = 2.50;
      break;
    
    case 2:
      price = 5.60;
      break;
    
    case 3:
      price = 7.75;
      break;
    
    default:
      break;
  }

  total = (price * quantity).toFixed(2);

  quantitySold.setAttribute("value", quantity);
  popType.setAttribute("value", type);
  popPrice.setAttribute("value", "R$" + price.toFixed(2));
  totalPrice.setAttribute("value", "R$" + total);
  messageBoard.style.display = "flex";
});
