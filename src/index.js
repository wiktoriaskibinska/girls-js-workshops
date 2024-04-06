let currentNumber = 1;
document.querySelector("#slide" + currentNumber).classList.add("show");
document.querySelector("#pin" + currentNumber).classList.add("selected");

//next
document.querySelector("#next").addEventListener("click", handleNext);

function handleNext() {
  let newNumber = currentNumber + 1;
  if (newNumber > 5) {
    newNumber = 1;
  }
  showSlide(newNumber);
}
//previous
document.querySelector("#prev").addEventListener("click", handlePrevious);
function handlePrevious() {
  let newNumber = currentNumber - 1;
  if (newNumber < 1) {
    newNumber = 5;
  }
  showSlide(newNumber);
}

//ultimate showSlide

const showSlide = (newNumber) => {
  document.querySelector(".show").classList.remove("show");
  document.querySelector("#slide" + newNumber).classList.add("show");

  currentNumber = newNumber;
  showPin(newNumber);
  console.log(currentNumber);
};

function showPin(newNumber) {
  document.querySelector(".selected").classList.remove("selected");
  document.querySelector("#pin" + newNumber).classList.add("selected");
}
for (let numerPinu = 1; numerPinu <= 5; numerPinu++) {
  document.querySelector("#pin" + numerPinu).addEventListener("click", () => {
    showSlide(numerPinu);
  });
}
///
