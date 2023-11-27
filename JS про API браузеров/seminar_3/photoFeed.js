const photoContainer = document.getElementById("photo-container");
let page = 1;
const ACCESS_KEY = "";

async function fetchPhotos() {
  try {
    const response = await fetch(
      //   `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=B3ufbb5TWS6NbJFv9ZSKZ7kysJCPuAbD6cgpcCmo42Q`
      `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=${ACCESS_KEY}`
    );
    // console.log(response);
    const photos = await response.json();
    // console.log(photos);
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return [];
  }
}

async function loadMorePhotos() {
  const responseObj = await fetchPhotos();
  responseObj.forEach((photo) => {
    const imgEl = document.createElement("img");
    imgEl.src = photo.urls.small;
    console.log(imgEl);
    photoContainer.appendChild(imgEl);
  });
}
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMorePhotos();
  }
});
// Загрузка первой партии фотографий при загрузке страницы
loadMorePhotos();
