"use strict";

function addPagination() {
  imagesUrls.forEach(createPaginationCircle);
  paginationCircles[currentIndex].classList.add("active");
}

function createPaginationCircle() {
  var divEl = document.createElement("div");
  divEl.className = "pagination__circle";
  paginationEl.appendChild(divEl);
  paginationCircles.push(divEl);
}

function indexActivePaginationCircle() {
  for (var i = 0; i < paginationCircles.length; i++) {
    if (paginationCircles[i].classList.contains("active")) return i;
  }
}

function changePaginationCircle() {
  var paginationCirclesEl = document.querySelectorAll(".pagination__circle");

  var _loop = function _loop(i) {
    paginationCirclesEl[i].addEventListener("click", function () {
      imageEl.src = imagesUrls[i];
      paginationCircles.forEach(function (circle) {
        circle.classList.remove("active");
      });
      paginationCircles[i].classList.add("active");
    });
  };

  for (var i = 0; i < paginationCirclesEl.length; i++) {
    _loop(i);
  }
}