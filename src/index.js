let currentNumber = 1;

//slide5
function showSlide5() {
  showSlide(5);
}
const pin5 = document.querySelector("#pin5");
pin5.addEventListener("click", showSlide5);
//slide4
function showSlide4() {
  showSlide(4);
}
const pin4 = document.querySelector("#pin4");
pin4.addEventListener("click", showSlide4);
//slide3
function showSlide3() {
  showSlide(3);
}
const pin3 = document.querySelector("#pin3");
pin3.addEventListener("click", showSlide3);
//slide2
function showSlide2() {
  showSlide(2);
}
const pin2 = document.querySelector("#pin2");
pin2.addEventListener("click", showSlide2);
//slide1
function showSlide1() {
  showSlide(1);
}
const pin1 = document.querySelector("#pin1");
pin1.addEventListener("click", showSlide1);
///
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
function handlePrevious() {
  let newNumber = currentNumber - 1;
  if (newNumber < 1) {
    newNumber = 5;
  }
  showSlide(newNumber);
}
document.querySelector("#prev").addEventListener("click", handlePrevious);
//ultimate showSlide

function showSlide(newNumber) {
  document.querySelector(".show").classList.remove("show");
  document.querySelector("#slide" + newNumber).classList.add("show");
  currentNumber = newNumber;
  console.log(currentNumber);
}
