// Using variables to represent a book

// var bookTitle;
// var bookAuthor;
// var bookTitle2;
// var bookAuthor2;
// var bookTitle3;
// var bookAuthor3;

// bookTitle = "The Hobbit";
// bookAuthor = "J. R. R. Tolkien";
// bookTitle2 = "Agni Siragugal";
// bookAuthor2 = "A.B.J";
// bookTitle3 = "Harry Potter";
// bookAuthor3 = "J.K.Rowling";
// console.log(bookTitle + " by " + bookAuthor);
// console.log(bookTitle2 + " by " + bookAuthor2);
// console.log(bookTitle3 + " by " + bookAuthor3);

class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
}

let books = [
    new Book("Book 1", "Author A", 2000),
    new Book("Book 2", "Author B", 2001),
    // Add more books similarly...
    new Book("Book 100", "Author J", 2100)
];

function displayBooks() {
    books.forEach((book, index) => {
        console.log(`${book.title} by ${book.author}, published in ${book.publicationYear}`);
    });
}

displayBooks();
 

/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */