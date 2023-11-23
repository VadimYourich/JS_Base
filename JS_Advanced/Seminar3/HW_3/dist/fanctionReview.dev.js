"use strict";

function renderListProducts() {
  var boxRevEl = document.querySelector(".boxReviews");

  for (var key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      var divElem = "<div class=\"boxReviews__product\" id=\"".concat(key, "\">\n                  <span class=\"boxReviews__span\">").concat(key, "</span>\n                  <input type=\"submit\" value=\"\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B\" id=\"show\" class=\"boxReviews__button\">\n                  <input type=\"submit\" value=\"\u0441\u043A\u0440\u044B\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B\" id=\"hide\" class=\"boxReviews__button\">\n              </div><ul class=\"boxReviews__ulbox\"></ul>");
      boxRevEl.innerHTML += divElem;
    }
  }
}

function renderListReviews(lstRevProd, ulboxEl) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = lstRevProd[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var review = _step.value;
      var liEl = "<li class=\"boxReviews__lirev\" id=\"".concat(review.id, "\">\n          <span class=\"boxReviews__lispan\">").concat(review.text, "</span>\n          <input type=\"submit\" value=\"\u0443\u0434\u0430\u043B\u0438\u0442\u044C\" id=\"").concat(review.id, "\" class=\"boxReviews__delbtn\">\n          </li>");
      ulboxEl.innerHTML += liEl;
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

function deleteReview(nameProduct) {
  var delRevEl = document.querySelectorAll(".boxReviews__delbtn");
  delRevEl.forEach(function (rev) {
    return rev.addEventListener("click", function () {
      var reviewsProduct = JSON.parse(localStorage.getItem(nameProduct));

      if (reviewsProduct.length > 1) {
        var newReviewsProduct = reviewsProduct.filter(function (elem) {
          return elem.id !== +rev.id;
        });
        localStorage.setItem(nameProduct, JSON.stringify(newReviewsProduct));
        var elLi = document.getElementById(rev.id);
        elLi.remove();
      } else {
        var _elLi = document.getElementById(rev.id);

        _elLi.remove();

        localStorage.removeItem(nameProduct);
        var delProdEl = document.getElementById(nameProduct);
        delProdEl.remove();
      }
    });
  });
}