const addButtonEl = document.querySelector(".addButton");
const removeButtonEl = document.querySelector(".removeButton");
const cloneButtonEl = document.querySelector(".cloneButton");
const contentEl = document.querySelector(".content");
let count = 3;
addButtonEl.addEventListener("click", () => {
  const newBoxEl = document.createElement("div");
  newBoxEl.classList.add("box");
  newBoxEl.textContent = contentEl.children.length + 1;
  contentEl.appendChild(newBoxEl);
});
removeButtonEl.addEventListener("click", () => {
  if (contentEl.children.length > 0) {
    const lastBox = contentEl.lastChild;
    contentEl.removeChild(lastBox);
  }
});
cloneButtonEl.addEventListener("click", () => {
  if (contentEl.children.length > 0) {
    const lastBox = contentEl.lastChild;
    const clone = lastBox.cloneNode(true);
    contentEl.appendChild(clone);
  }
});
