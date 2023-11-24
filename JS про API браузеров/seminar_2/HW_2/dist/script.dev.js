"use strict";
/* 
 Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. 
 Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

a. Контейнер для отображения текущего изображения.
b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

2. Используйте HTML для создания элементов интерфейса.

3. Используйте JavaScript для обработки событий:

a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения 
   должно отображаться первое, и наоборот.

5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.
 */

var imagesUrls = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
var currentIndex;

if (imagesUrls.length % 2 == 0) {
  currentIndex = imagesUrls.length / 2 - 1;
} else {
  currentIndex = imagesUrls.length / 2 - 0.5;
}

var imageEl = document.querySelector("#image");
imageEl.src = imagesUrls[currentIndex];
var paginationCircles = [];
var paginationEl = document.querySelector(".pagination");
addPagination();
var nextButton = document.querySelector("#next");
nextButton.addEventListener("click", function () {
  currentIndex = indexActivePaginationCircle();
  paginationCircles.forEach(function (circle) {
    circle.classList.remove("active");
  });
  currentIndex++;

  if (currentIndex >= imagesUrls.length) {
    currentIndex = 0;
  }

  imageEl.src = imagesUrls[currentIndex];
  paginationCircles[currentIndex].classList.add("active");
});
var previousButton = document.querySelector("#previous");
previousButton.addEventListener("click", function () {
  currentIndex = indexActivePaginationCircle();
  paginationCircles.forEach(function (circle) {
    circle.classList.remove("active");
  });
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = imagesUrls.length - 1;
  }

  imageEl.src = imagesUrls[currentIndex];
  paginationCircles[currentIndex].classList.add("active");
});
changePaginationCircle();