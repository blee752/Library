//library array
let myLibrary = [];

//book constructor

function book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        console.log(`${title} by ${author}, ${pages}, ${read}`);
    }
}

function addBookToLibrary(){
    //do something
}

//test entries
const demo = new book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

const demo2 = new book('The Fellowship Of The Ring', 'J.R.R. Tolkien', 448, 'not read yet');
demo.info();

myLibrary.push(demo);
myLibrary.push(demo2);

let cell, title, author, pages, read;

const libraryContainer = document.querySelector('.grid-container');

/* //setting book information into the corresponding elements for the container
title.innerText = `${myLibrary[1].title}`;
author.innerText = `By ${myLibrary[1].author}`;
pages.innerText = `Pages: ${myLibrary[1].pages}`;
read.innerText = `Status: ${myLibrary[1].read}`;

//append book info to the container div
cell.appendChild(title);
cell.appendChild(author);
cell.appendChild(pages);
cell.appendChild(read);
//append the library entry into the library div
libraryContainer.appendChild(cell); */

//Function to loop through mylibrary and create the elements to append
function createLibrary() {
    myLibrary.forEach((book) => {
        cell = document.createElement('div');
        title = document.createElement('h3');
        author = document.createElement('p');
        pages = document.createElement('p');
        read = document.createElement('p');
        
        title.innerText = `${book.title}`;
        author.innerText = `By ${book.author}`;
        pages.innerText = `Pages: ${book.pages}`;
        read.innerText = `Status: ${book.read}`;
        
        cell.appendChild(title);
        cell.appendChild(author);
        cell.appendChild(pages);
        cell.appendChild(read);
        libraryContainer.appendChild(cell);
    })
}
createLibrary();

//On load, check if mylibrary isnt empty, if not run loop function to add entries onto webpage

