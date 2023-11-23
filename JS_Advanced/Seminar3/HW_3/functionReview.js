"use strict";

function renderListProducts() {
  const boxRevEl = document.querySelector(".boxReviews");

  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      const divElem = `<div class="boxReviews__product" id="${key}">
                <span class="boxReviews__span">${key}</span>
                <input type="submit" value="показать отзывы" id="show" class="boxReviews__button">
                <input type="submit" value="скрыть отзывы" id="hide" style="display: none" class="boxReviews__button"></input>
              </div>
              <ul class="boxReviews__ulbox"></ul>`;
      boxRevEl.innerHTML += divElem;
    }
  }
}

function renderListReviews(listRevProd, ulboxEl) {
  for (const review of listRevProd) {
    const liEl = `<li class="boxReviews__lirev" id="${review.id}">
          <span class="boxReviews__lispan">${review.text}</span>
          <input type="submit" value="удалить" id="${review.id}" class="boxReviews__delbtn">
          </li>`;
    ulboxEl.innerHTML += liEl;
  }
}

function deleteReview(nameProduct) {
  const delRevEl = document.querySelectorAll(".boxReviews__delbtn");

  delRevEl.forEach((rev) =>
    rev.addEventListener("click", () => {
      const reviewsProduct = JSON.parse(localStorage.getItem(nameProduct));

      if (reviewsProduct.length > 1) {
        let newReviewsProduct = reviewsProduct.filter(
          (elem) => elem.id !== +rev.id
        );
        localStorage.setItem(nameProduct, JSON.stringify(newReviewsProduct));
        const elLi = document.getElementById(rev.id);
        elLi.remove();
      } else {
        const elLi = document.getElementById(rev.id);
        elLi.remove();
        localStorage.removeItem(nameProduct);
        const delProdEl = document.getElementById(nameProduct);
        delProdEl.remove();
      }
    })
  );
}
