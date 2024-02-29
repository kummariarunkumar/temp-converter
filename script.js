const celsbtn = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");
window.addEventListener("load", () => {
  degree.value = "";
  celsbtn.innerHTML = "";
});
convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
});
function convertToCelsius() {
  let inputValue = degree.value;
if (tempType.value === "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    celsbtn.innerHTML = `${FahrenheitToCelsius.toFixed(3)}`;
  } else if (tempType.value === "kelvin") {
    const KelvinToCelsius = inputValue - 273.15;
    celsbtn.innerHTML = `${KelvinToCelsius.toFixed(3)}`;
  }
}
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  const form = document.getElementById('form');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});
