class BookClass {
    constructor(title, author, year, genre) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.genre = genre;
    }
  
    getInfo() {
      return `${this.title} by ${this.author} (${this.year}) - Genre: ${this.genre}`;
    }
  }
  
  function BookFunction(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  
    this.getInfo = function () {
      return `${this.title} by ${this.author} (${this.year}) - Genre: ${this.genre}`;
    };
  }
  

  const book1 = new BookClass("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Classic");
  const book2 = new BookClass("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
  const book3 = new BookFunction("1984", "George Orwell", 1949, "Dystopian");
  const book4 = new BookFunction("The Lord of the Rings", "J.R.R. Tolkien", 1954, "Fantasy");
  const book5 = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
    getInfo: function () {
      return `${this.title} by ${this.author} (${this.year}) - Genre: ${this.genre}`;
    },
  };
  
  console.log(book1.getInfo());
  console.log(book2.getInfo());
  console.log(book3.getInfo());
  console.log(book4.getInfo());
  console.log(book5.getInfo());