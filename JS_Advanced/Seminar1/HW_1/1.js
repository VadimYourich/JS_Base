"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
  albums: [
    {
      title: "Mercury Falling",
      artist: "Sting",
      year: "1996",
    },
    {
      title: "Sacred Love",
      artist: "Sting",
      year: "2003",
    },
    {
      title: "Songs From The Labyrinth",
      artist: "Sting",
      year: "2006",
    },
    {
      title: "25 Years",
      artist: "Sting",
      year: "2011",
    },
  ],
  *[Symbol.iterator]() {
    for (const album of this.albums) {
      yield `${album.title} - ${album.artist} (${album.year})`;
    }
  },
};

for (const album of musicCollection) {
  console.log(album);
}
