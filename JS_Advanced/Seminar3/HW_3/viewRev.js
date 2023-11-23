"use strict";

renderListProducts();

const btnRevShowEl = document.querySelectorAll("#show");

btnRevShowEl.forEach((elem) =>
  elem.addEventListener("click", () => {
    const keyProdEl = elem.previousElementSibling.textContent;
    const listRevProd = JSON.parse(localStorage.getItem(keyProdEl));

    const parentEl = elem.parentElement;
    const ulboxEl = parentEl.nextElementSibling;

    renderListReviews(listRevProd, ulboxEl);

    elem.nextElementSibling.style = "display: block";
    elem.style = "display: none";

    deleteReview(keyProdEl);
  })
);

const btnRevHideEl = document.querySelectorAll("#hide");

btnRevHideEl.forEach((elem) =>
  elem.addEventListener("click", () => {
    const parentEl = elem.parentElement;
    const ulboxEl = parentEl.nextElementSibling;
    ulboxEl.innerHTML = "";

    elem.previousElementSibling.style = "display: block";
    elem.style = "display: none";
  })
);
