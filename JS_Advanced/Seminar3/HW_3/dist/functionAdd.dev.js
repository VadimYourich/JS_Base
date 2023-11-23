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
}