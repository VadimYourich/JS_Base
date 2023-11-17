"use strict";

function renderReviews() {
  var btnRevEl = document.querySelector(".checkBtn");
  btnRevEl.addEventListener("click", function () {
    spanErrorEl.textContent = "";
    var productName = getProductName();
    var reviewText = getReviewText();

    if (reviewText) {
      saveNewReview(productName, reviewText);
      var newLi = document.createElement("li");
      newLi.className = "rev";
      newLi.id = productName;
      newLi.textContent = reviewText;
      var findRev = document.querySelectorAll(".listReviews");
      findRev.forEach(function (item) {
        if (item.id === productName) {
          item.append(newLi);
        }
      });
    }

    var txtArea = document.querySelector(".textarea");
    txtArea.value = "";
    getListRev();
  });
}

function getReviewText() {
  var textArea = document.querySelector(".textarea").value;

  try {
    if (textArea.length < 50) {
      throw new Error("Комментарий слишком короткий");
    } else if (textArea.length > 500) {
      throw new Error("Комментарий слишком длинный");
    } else {
      return textArea;
    }
  } catch (error) {
    spanErrorEl.textContent = error.message;
  }
}

function getProductName() {
  var selectedProduct = document.querySelector('input[name="choice"]:checked');

  try {
    var checkedProduct;

    if (selectedProduct) {
      checkedProduct = selectedProduct.id;
      return checkedProduct;
    } else {
      throw new Error("Вы не выбрали товар для отзыва!");
    }
  } catch (error) {
    spanErrorEl.textContent = error.message;
  }
}

function saveNewReview(prodName, revText) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = initialData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item.product === prodName) {
        var newRev = {
          id: +lastReviewsID,
          text: revText
        };
        newRev.id = ++lastReviewsID;
        newRev.text = revText;
        item.reviews.push(newRev);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function getListRev() {
  initialData.forEach(function (item) {
    console.log(item.reviews);
  });
}