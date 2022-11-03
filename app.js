const numbers = document.getElementsByClassName("number");
const setDis = document.getElementById("output");

function setNumber(event) {
  let num = event.target.value;
  console.log(num);
  setDis.value += num;
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", setNumber);
}
