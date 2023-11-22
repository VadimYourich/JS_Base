"use strict";

var addButtonEl = document.querySelector(".addButton");
var removeButtonEl = document.querySelector(".removeButton");
var cloneButtonEl = document.querySelector(".cloneButton");
var contentEl = document.querySelector(".content");
var count = 3;
addButtonEl.addEventListener("click", function () {
  var newBoxEl = document.createElement("div");
  newBoxEl.classList.add("box");
  newBoxEl.textContent = contentEl.children.length + 1;
  contentEl.appendChild(newBoxEl);
});
removeButtonEl.addEventListener("click", function () {
  if (contentEl.children.length > 0) {
    var lastBox = contentEl.lastChild;
    contentEl.removeChild(lastBox);
  }
});
cloneButtonEl.addEventListener("click", function () {
  if (contentEl.children.length > 0) {
    var lastBox = contentEl.lastChild;
    var clone = lastBox.cloneNode(true);
    contentEl.appendChild(clone);
  }
});