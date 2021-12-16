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

const demo = new book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

const demo2 = new book('The Fellowship Of The Ring', 'J.R.R. Tolkien', 448, 'not read yet');
demo.info();

myLibrary.push(demo);
myLibrary.push(demo2);

let cell = document.createElement('div');
let title = document.createElement('h3');
let author = document.createElement('p');
let pages = document.createElement('p');
let read = document.createElement('p');
const libraryContainer = document.querySelector('.main-container');
title.innerText = myLibrary[1].title;
author.innerText = myLibrary[1].author;
pages.innerText = myLibrary[1].pages;
read.innerText = myLibrary[1].read;

cell.appendChild(title);
cell.appendChild(author);
cell.appendChild(pages);
cell.appendChild(read);
libraryContainer.appendChild(cell);
//container.appendChild(cell);