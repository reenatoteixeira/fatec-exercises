const registerBtn = document.getElementById("registerBtn"),
  tableBody = document.getElementById("tableBody"),
  highUsageCars = document.getElementById("highUsageCars"),
  actualDate = new Date(),
  actualYear = actualDate.getFullYear();

let cars = [],
  highUsage = 0;

registerBtn.addEventListener("click", () => {
  const brand = document.getElementById("brand").value,
    model = document.getElementById("model").value,
    year = parseInt(document.getElementById("year").value),
    usage = parseInt(document.getElementById("usage").value),
    carAge = actualYear - year,
    usageAvg = carAge === 0 ? usage : (usage / carAge).toFixed(2);

  if (brand === "" || model === "" || isNaN(year) || isNaN(usage)) {
    alert("Por favor, preencha todos os campos");
    return;
  }

  if (year < 0 || usage < 0) {
    alert("Os valores devem ser maiores que 0.");
    return;
  }

  highUsage = usage > 100000 ? highUsage + 1 : highUsage;

  let car = new Car(brand, model, year, usage, usageAvg);

  cars.push(car);

  tableBody.innerHTML = "";
  highUsageCars.innerHTML = highUsage;

  cars.forEach((car) => {
    tableBody.innerHTML += `
    <tr>
      <td class="tableBrand">${car.brand}</td>
      <td class="tableModel">${car.model}</td>
      <td class="tableNumber">${car.year}</td>
      <td class="tableNumber">${car.usage}</td>
      <td class="tableAvg">${car.usageAvg}</td>
    </tr>`;
  });
});
