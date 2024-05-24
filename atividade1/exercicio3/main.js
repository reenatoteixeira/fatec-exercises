const registerBtn = document.getElementById("registerBtn"),
  tableBody = document.getElementById("tableBody"),
  registeredStudents = document.getElementById("registeredStudents"),
  passedStudents = document.getElementById("passedStudents"),
  failedStudents = document.getElementById("failedStudents");

let students = [],
  registered = 0,
  passed = 0,
  failed = 0;

registerBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value,
    grade1 = parseFloat(document.getElementById("grade1").value),
    grade2 = parseFloat(document.getElementById("grade2").value),
    grade3 = parseFloat(document.getElementById("grade3").value),
    finalGrade = ((grade1 + grade2 + grade3) / 3).toFixed(2),
    situation = finalGrade >= 7 ? "Aprovado" : "Reprovado";

  if (name === "" || isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
    alert("Por favor, preencha todos os campos");
    return;
  }

  if (
    grade1 < 0 ||
    grade1 > 10 ||
    grade2 < 0 ||
    grade2 > 10 ||
    grade3 < 0 ||
    grade3 > 10
  ) {
    alert("As notas devem ser entre 0 e 10");
    return;
  }

  registered++;
  passed = situation === "Aprovado" ? passed + 1 : passed;
  failed = situation === "Reprovado" ? failed + 1 : failed;

  let student = new Student(
    name,
    grade1,
    grade2,
    grade3,
    finalGrade,
    situation
  );

  students.push(student);

  tableBody.innerHTML = "";
  registeredStudents.innerHTML = registered;
  passedStudents.innerHTML = passed;
  failedStudents.innerHTML = failed;

  students.forEach((student) => {
    tableBody.innerHTML += `
    <tr>
      <td class="tableName">${student.name}</td>
      <td class="tableGrade">${student.grade1}</td>
      <td class="tableGrade">${student.grade2}</td>
      <td class="tableGrade">${student.grade3}</td>
      <td class="tableGrade">${student.finalGrade}</td>
      <td class="tableSituation">${student.situation}</td>
    </tr>`;
  });
});
