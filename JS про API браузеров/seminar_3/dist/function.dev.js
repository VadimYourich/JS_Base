"use strict";

function displayProducts(category) {
  var productsList = document.getElementById("products-list");
  productsList.innerHTML = "";
  productsData.forEach(function (product) {
    if (category === "" || product.category === category) {
      var listItem = document.createElement("li");
      listItem.textContent = product.name;
      productsList.appendChild(listItem);
    }
  });
}