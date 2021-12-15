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

const test = new book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
test.info();

