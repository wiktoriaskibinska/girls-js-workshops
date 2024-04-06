let currentNumber = 1;

//slide5
function showSlide5() {
  const slide5 = document.querySelector("#slide5");
  document.querySelector(".show").classList.remove("show");
  slide5.classList.add("show");
}
const pin5 = document.querySelector("#pin5");
pin5.addEventListener("click", showSlide5);
//slide4
function showSlide4() {
  const slide4 = document.querySelector("#slide4");
  document.querySelector(".show").classList.remove("show");
  slide4.classList.add("show");
}
const pin4 = document.querySelector("#pin4");
pin4.addEventListener("click", showSlide4);
//slide3
function showSlide3() {
  const slide3 = document.querySelector("#slide3");
  document.querySelector(".show").classList.remove("show");
  slide3.classList.add("show");
}
const pin3 = document.querySelector("#pin3");
pin3.addEventListener("click", showSlide3);
//slide2
function showSlide2() {
  const slide2 = document.querySelector("#slide2");
  document.querySelector(".show").classList.remove("show");
  slide2.classList.add("show");
}
const pin2 = document.querySelector("#pin2");
pin2.addEventListener("click", showSlide2);
//slide1
function showSlide1() {
  const slide1 = document.querySelector("#slide1");
  document.querySelector(".show").classList.remove("show");
  slide1.classList.add("show");
}
const pin1 = document.querySelector("#pin1");
pin1.addEventListener("click", showSlide1);
///
//next
document.querySelector("#next").addEventListener("click", handleNext);

function handleNext() {
  document.querySelector(".show").classList.remove("show");
  let newNumber = currentNumber + 1;
  if (newNumber > 5) {
    newNumber = 1;
  }
  document.querySelector("#slide" + newNumber).classList.add("show");
  currentNumber = newNumber;
}
//previous
function handlePrevious() {
  document.querySelector(".show").classList.remove("show");
  let newNumber = currentNumber - 1;
  if (newNumber < 1) {
    newNumber = 5;
  }
  document.querySelector("#slide" + newNumber).classList.add("show");
  currentNumber = newNumber;
}
document.querySelector("#prev").addEventListener("click", handlePrevious);
