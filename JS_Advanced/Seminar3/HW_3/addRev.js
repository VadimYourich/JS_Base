"use strict";

const initialData = [
  {
    product: "product-1",
    reviews: [
      {
        id: 1,
        text: "Супер!",
      },
    ],
  },
];

startInitialData(initialData);

const btnRevEl = document.querySelector(".addButton");
const formEventEl = document.querySelector(".form__event");

btnRevEl.addEventListener("click", () => {
  formEventEl.textContent = "";

  const productName = getProductName();
  const reviewText = getReviewText();

  if (productName && reviewText) {
    let newRevID = getReviewMaxID();
    const revObject = {
      id: ++newRevID,
      text: reviewText,
    };
    addReviewInLocalStorage(productName, revObject);
    resetForm();
  }
});
