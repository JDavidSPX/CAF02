const btnHome = document.querySelector("#btnHome");
const btnComparison = document.querySelector("#btnComparison");
const btnDocumentation = document.querySelector("#btnDocumentation");
const btnInformation = document.querySelector("#btnInformation");

btnHome.addEventListener("click", function () {
  location.href = "CAF02/";
});
btnComparison.addEventListener("click", function () {
  location.href = "CAF02/comparison.html";
});
btnDocumentation.addEventListener("click", function () {
  location.href = "CAF02/documentation.html";
});
btnInformation.addEventListener("click", function () {
  location.href = "CAF02/information.html";
});
