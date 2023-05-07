document.getElementById("calculateBtn").addEventListener("click", (e) => {
  const weightStr = document.getElementById("weightInput").value;
  const heightStr = document.getElementById("heightInput").value;
  const weight = parseFloat(weightStr);
  const height = parseFloat(heightStr);
  //console.log(typeof weight);
  const calculation = weight / (height * height);
  const result = calculation.toFixed(2);
  document.getElementById("result").innerHTML = `Your BMI is ${result}`;
  document.getElementById("weightInput").value = "";
  document.getElementById("heightInput").value = "";
  e.preventDefault();
});
