"use strict";

/*  Отслеживание изменения ориентации экрана:
Напишите код, который отслеживает изменение ориентации экрана устройства (с портретной на ландшафтную и наоборот) и выводит сообщение об этом на веб-странице. */

function trackingScreenOrientation() {
  if (window.matchMedia("(orientation: portrait)").matches) {
    alert("Ориентации экрана изменена на альбомную");
  } else {
    alert("Ориентации экрана изменена на портретную");
  }
}

window.addEventListener("resize", () => {
  window.addEventListener("orientationchange", trackingScreenOrientation);
});
