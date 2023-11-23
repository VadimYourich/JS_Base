"use strict";

function startInitialData(arrProducts) {
  for (const item of arrProducts) {
    localStorage.setItem(item.product, JSON.stringify(item.reviews));
  }
}

function getProductName() {
  const productName = document.querySelector(".form__product").value;
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
  const textArea = document.querySelector(".form__textArea").value;
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
  let maxID = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      const valueKey = JSON.parse(localStorage.getItem(key));
      for (const obj of valueKey) {
        if (maxID < +obj.id) {
          maxID = +obj.id;
        }
      }
    }
  }
  return maxID;
}

function findKeyLocalStorage(prodName) {
  for (let key in localStorage) {
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
    const arrGetValueByKey = JSON.parse(localStorage.getItem(prodName));
    arrGetValueByKey.push(revObj);
    localStorage.setItem(prodName, JSON.stringify(arrGetValueByKey));
  }
  formEventEl.textContent = "Отзыв добавлен!";
}

function resetForm() {
  const prodName = document.querySelector(`[name="productName"]`);
  prodName.value = "";

  const textArea = document.querySelector(".form__textArea");
  textArea.value = "";
}
