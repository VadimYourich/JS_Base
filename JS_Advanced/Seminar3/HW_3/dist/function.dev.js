"use strict";

function startInitialData(arrProducts) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arrProducts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      localStorage.setItem(item.product, JSON.stringify(item.reviews));
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

function getProductName() {
  var productName = document.querySelector(".form__product").value;

  try {
    if (productName.length === 0) {
      throw new Error("Ошибка! Не введено название продукта.");
    } else if (productName.length < 3) {
      throw new Error("Ошибка! Название продукта очень короткое.");
    } else {
      return productName;
    }
  } catch (error) {
    formEventEl.textContent = error.message;
  }
}

function getReviewText() {
  var textArea = document.querySelector(".form__textArea").value;

  try {
    if (textArea.length < 5) {
      throw new Error("Ошибка! Комментарий слишком короткий.");
    } else if (textArea.length > 100) {
      throw new Error("Ошибка! Комментарий слишком длинный.");
    } else {
      return textArea;
    }
  } catch (error) {
    formEventEl.textContent = error.message;
  }
}

function getReviewMaxID() {
  var maxID = 0;

  for (var key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      var valueKey = JSON.parse(localStorage.getItem(key));
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = valueKey[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var obj = _step2.value;

          if (maxID < +obj.id) {
            maxID = +obj.id;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }

  return maxID;
}

function findKeyLocalStorage(prodName) {
  for (var key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      if (key === prodName) {
        return prodName;
      }
    }
  }
}

function addReviewInLocalStorage(prodName, revObj) {
  if (!findKeyLocalStorage(prodName)) {
    localStorage.setItem(prodName, JSON.stringify([revObj]));
  } else {
    var arrGetValueByKey = JSON.parse(localStorage.getItem(prodName));
    arrGetValueByKey.push(revObj);
    localStorage.setItem(prodName, JSON.stringify(arrGetValueByKey));
  }

  formEventEl.textContent = "Отзыв добавлен!";
}

function resetForm() {
  var prodName = document.querySelector("[name=\"productName\"]");
  prodName.value = "";
  var textArea = document.querySelector(".form__textArea");
  textArea.value = "";
} // --- viewrev.js -------------------------------------------------------------------------


function renderListProducts() {
  var boxRevEl = document.querySelector(".boxReviews");

  for (var key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      var divElem = "<div class=\"boxReviews__product\" id=\"".concat(key, "\">\n                <span class=\"boxReviews__span\">").concat(key, "</span>\n                <input type=\"submit\" value=\"\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B\" id=\"show\" class=\"boxReviews__button\">\n                <input type=\"submit\" value=\"\u0441\u043A\u0440\u044B\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B\" id=\"hide\" class=\"boxReviews__button\">\n            </div><ul class=\"boxReviews__ulbox\"></ul>");
      boxRevEl.innerHTML += divElem;
    }
  }
}

function renderListReviews(lstRevProd, ulboxEl) {
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = lstRevProd[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var review = _step3.value;
      var liEl = "<li class=\"boxReviews__lirev\" id=\"".concat(review.id, "\">\n        <span class=\"boxReviews__lispan\">").concat(review.text, "</span>\n        <input type=\"submit\" value=\"\u0443\u0434\u0430\u043B\u0438\u0442\u044C\" id=\"").concat(review.id, "\" class=\"boxReviews__delbtn\">\n        </li>");
      ulboxEl.innerHTML += liEl;
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
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