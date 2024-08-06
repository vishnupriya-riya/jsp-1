// Using variables to represent a book

var bookTitle;
var bookAuthor;
var bookTitle2;
var bookAuthor2;
var bookTitle3;
var bookAuthor3;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";
bookTitle2 = "Agni Siragugal";
bookAuthor2 = "A.B.J";
bookTitle3 = "Harry Potter";
bookAuthor3 = "J.K.Rowling";
console.log(bookTitle + " by " + bookAuthor);
console.log(bookTitle2 + " by " + bookAuthor2);
console.log(bookTitle3 + " by " + bookAuthor3);

//for printing 100 books
for(i=1;i<=10;i++){
    let j =prompt(`Enter the book${i}: `);
    console.log(`Book${i}: ${j}`);
}

//for printing 100 books 
for(i=1;i<=100;i++){
    let j =prompt(`Enter the book${i}: `);
    console.log(`Book${i}: ${j}`);
}


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