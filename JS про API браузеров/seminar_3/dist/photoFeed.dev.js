"use strict";

var photoContainer = document.getElementById("photo-container");
var page = 1;
var ACCESS_KEY = "";

function fetchPhotos() {
  var response, photos;
  return regeneratorRuntime.async(function fetchPhotos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch( //   `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=B3ufbb5TWS6NbJFv9ZSKZ7kysJCPuAbD6cgpcCmo42Q`
          "https://api.unsplash.com/photos?page=".concat(page, "&per_page=9&client_id=").concat(ACCESS_KEY)));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          photos = _context.sent;
          return _context.abrupt("return", photos);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error("Ошибка при загрузке фотографий:", _context.t0);
          return _context.abrupt("return", []);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

function loadMorePhotos() {
  var responseObj;
  return regeneratorRuntime.async(function loadMorePhotos$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchPhotos());

        case 2:
          responseObj = _context2.sent;
          responseObj.forEach(function (photo) {
            var imgEl = document.createElement("img");
            imgEl.src = photo.urls.small;
            console.log(imgEl);
            photoContainer.appendChild(imgEl);
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMorePhotos();
  }
}); // Загрузка первой партии фотографий при загрузке страницы

loadMorePhotos();