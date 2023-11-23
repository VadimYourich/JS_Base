"use strict";

renderListProducts();
var btnRevEl = document.querySelectorAll(".boxReviews__button");
console.log(btnRevEl);
btnRevEl.forEach(function (elem) {
  elem.addEventListener("click", function () {
    var keyProdEl = elem.previousElementSibling.textContent;
    var listRevProd = JSON.parse(localStorage.getItem(keyProdEl));

    if (elem.value = "показать отзывы") {
      //   if ((elem.id = "show")) {
      var parentEl = elem.parentElement;
      var ulboxEl = parentEl.nextElementSibling;
      renderListReviews(listRevProd, ulboxEl);
      elem.value = "скрыть отзывы";
      elem.id = "hide"; //   } else if ((elem.id = "hide")) {
    }

    if (elem.value = "скрыть отзывы") {
      var _parentEl = elem.parentElement;
      var _ulboxEl = _parentEl.nextElementSibling;
      _ulboxEl.innerHTML = "";
      elem.value = "показать отзывы";
      elem.id = "show";
    }

    deleteReview(keyProdEl);
  });
});