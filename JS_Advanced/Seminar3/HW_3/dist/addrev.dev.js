"use strict";

var initialData = [{
  product: "product-1",
  reviews: [{
    id: 1,
    text: "Супер!"
  }]
}];
startInitialData(initialData);
var btnRevEl = document.querySelector(".addButton");
var formEventEl = document.querySelector(".form__event");
btnRevEl.addEventListener("click", function () {
  formEventEl.textContent = "";
  var productName = getProductName();
  var reviewText = getReviewText();

  if (productName && reviewText) {
    var newRevID = getReviewMaxID();
    var revObject = {
      id: ++newRevID,
      text: reviewText
    };
    addReviewInLocalStorage(productName, revObject);
    resetForm();
  }
});