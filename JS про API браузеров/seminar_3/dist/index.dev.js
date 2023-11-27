"use strict";

var ACCESS_KEY = "YOU KEY";

function addPictures(container) {
  fetch("https://api.unsplash.com/photos/", {
    method: "GET",
    headers: {
      Authorization: "Client-ID ".concat(ACCESS_KEY)
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    data.forEach(function (pic) {
      var imgEl = document.createElement("img");
      imgEl.src = pic.urls.regular;
      imgEl.classList.add("unsplash-img");
      container.appendChild(imgEl);
    });
  })["catch"](function (e) {
    return console.log(e);
  });
}

var imageContainerEl = document.querySelector(".img-container");
addPictures(imageContainerEl);
window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addPictures(imageContainerEl);
    console.log("addPictures");
  }
});