"use strict";

function displayProducts(category) {
  const productsList = document.getElementById("products-list");
  productsList.innerHTML = "";

  productsData.forEach((product) => {
    if (category === "" || product.category === category) {
      const listItem = document.createElement("li");
      listItem.textContent = product.name;
      productsList.appendChild(listItem);
    }
  });
}
