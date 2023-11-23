"use strict";

renderListProducts();
var btnRevShowEl = document.querySelectorAll("#show");
btnRevShowEl.forEach(function (elem) {
  return elem.addEventListener("click", function () {
    var keyProdEl = elem.previousElementSibling.textContent;
    var listRevProd = JSON.parse(localStorage.getItem(keyProdEl));
    var parentEl = elem.parentElement;
    var ulboxEl = parentEl.nextElementSibling;
    renderListReviews(listRevProd, ulboxEl);
    elem.nextElementSibling.style = "display: block";
    elem.style = "display: none";
    deleteReview(keyProdEl);
  });
});
var btnRevHideEl = document.querySelectorAll("#hide");
btnRevHideEl.forEach(function (elem) {
  return elem.addEventListener("click", function () {
    var parentEl = elem.parentElement;
    var ulboxEl = parentEl.nextElementSibling;
    ulboxEl.innerHTML = "";
    elem.previousElementSibling.style = "display: block";
    elem.style = "display: none";
  });
});