function addPagination() {
  imagesUrls.forEach(createPaginationCircle);
  paginationCircles[currentIndex].classList.add("active");
}

function createPaginationCircle() {
  const divEl = document.createElement("div");
  divEl.className = "pagination__circle";
  paginationEl.appendChild(divEl);
  paginationCircles.push(divEl);
}

function indexActivePaginationCircle() {
  for (let i = 0; i < paginationCircles.length; i++) {
    if (paginationCircles[i].classList.contains("active")) return i;
  }
}

function changePaginationCircle() {
  const paginationCirclesEl = document.querySelectorAll(".pagination__circle");
  for (let i = 0; i < paginationCirclesEl.length; i++) {
    paginationCirclesEl[i].addEventListener("click", () => {
      imageEl.src = imagesUrls[i];
      paginationCircles.forEach((circle) => {
        circle.classList.remove("active");
      });
      paginationCircles[i].classList.add("active");
    });
  }
}
