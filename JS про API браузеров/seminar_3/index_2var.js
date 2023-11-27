const ACCESS_KEY = "sSw3iyhCZQ9RBqLNvUb4fgTUStNe9M4VXZlA3-Nglhk";
function addPictures(container) {
  fetch(`https://api.unsplash.com/photos/`, {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((pic) => {
        const imgEl = document.createElement("img");
        imgEl.src = pic.urls.regular;
        imgEl.classList.add("unsplash-img");
        container.appendChild(imgEl);
      });
    })
    .catch((e) => console.log(e));
}

const imageContainerEl = document.querySelector(".img-container");
addPictures(imageContainerEl);

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addPictures(imageContainerEl);
    console.log("addPictures");
  }
});
