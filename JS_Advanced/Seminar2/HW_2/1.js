"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books = [];

  constructor(arrBooks) {
    this.checkingDuplicateBooks(arrBooks);
    this.#books = arrBooks;
  }

  checkingDuplicateBooks(arrBooks) {
    const arrBooksTitles = arrBooks.map((obj) => obj.title);

    if (new Set(arrBooksTitles).size !== arrBooksTitles.length) {
      throw new Error("Ошибка! Список книг содержит дубликаты.");
    }
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title, author) {
    try {
      if (this.hasBook(title)) {
        throw new Error(
          `Ошибка добавления! Книга '${title}' уже существует в списке.`
        );
      }
      const newBook = new Object();
      newBook.title = title;
      newBook.author = author;
      this.#books.push(newBook);
      console.log(`\nКнига '${title}' добавлена в список!`);
    } catch (error) {
      console.error(error);
    }
  }

  hasBook(name) {
    const titlesBooks = this.#books.map((obj) => obj.title);
    if (titlesBooks.includes(name)) {
      return true;
    } else {
      return false;
    }
  }

  removeBook(title) {
    try {
      if (!this.hasBook(title)) {
        throw new Error(`Ошибка удаления! Книги '${title}' в списке нет.`);
      }
      const index = this.#books.findIndex((object) => object.title === title);
      this.#books.splice(index, 1);
      console.log(`\nКнига с названием '${title}' удалена.`);
    } catch (error) {
      console.error(error);
    }
  }
}

const books = [
  { title: "Book_1", author: "Author_1" },
  { title: "Book_2", author: "Author_1" },
  { title: "Book_3", author: "Author_2" },
  { title: "Book_4", author: "Author_3" },
  { title: "Book_5", author: "Author_3" },
];

const library = new Library(books);
console.log(library.allBooks);
library.addBook("Book_6", "Author_4");
console.log(library.allBooks);
library.addBook("Book_5", "Author_4");
console.log(library.allBooks);
library.removeBook("Book_7");
console.log(library.allBooks);
library.removeBook("Book_6");
console.log(library.allBooks);
console.log(library.hasBook("Book_6"));
console.log(library.hasBook("Book_5"));
