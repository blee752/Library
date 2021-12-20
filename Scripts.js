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
const demo = new book('The Hobbit', 'J.R.R. Tolkien', 295, 'yes');

const demo2 = new book('The Fellowship Of The Ring', 'J.R.R. Tolkien', 448, 'no');
demo.info();

myLibrary.push(demo);
myLibrary.push(demo2);

const addBookBt = document.querySelector('.add-book');

/* const statusBt = document.querySelectorAll('.status');
 */const libraryContainer = document.querySelector('.grid-container');

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
        const cell = document.createElement('div');
        const title = document.createElement('h3');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const buttonBox = document.createElement('div');
        const readBt = document.createElement('button');
        const removeBt = document.createElement('button');

        cell.className = 'grid-item';
        readBt.className = 'status';
        removeBt.className ='Remove-Bt';

        title.innerText = `${book.title}`;
        author.innerText = `By ${book.author}`;
        pages.innerText = `Pages: ${book.pages}`;
        cell.dataset.title = book.title;
        
        if(book.read === 'no'){
            readBt.className += ' red';
            readBt.innerText = `Not Read`;
        }
        else {
            readBt.className += ' green';
            readBt.innerText = 'Read';
        }
        
        removeBt.innerText = `Remove`;

        buttonBox.appendChild(readBt);
        buttonBox.appendChild(removeBt);
        cell.appendChild(title);
        cell.appendChild(author);
        cell.appendChild(pages);
        cell.appendChild(buttonBox);
        
        
        libraryContainer.appendChild(cell);
    })
}
createLibrary();

//On load, check if mylibrary isnt empty, if not run loop function to add entries onto webpage

//function to clear grid container inner html


//on delete, find parent div of the clicked remove button, delete it from DOM. Track the title of that div, and find it in myLibrary array then pop it

function toggleEvent(){
    const statusBt = document.querySelectorAll('.status');
    let newStatus;
    if(statusBt !== null){
    statusBt.forEach(statusBt => {
        statusBt.addEventListener('click', e => {
            let classnameString = e.target.className;
            if(classnameString.includes('red')){
                e.target.classList.remove('red');
                e.target.classList.add('green');
                e.target.innerText = 'Read';
                newStatus = e.target.parentNode.parentNode.dataset.title;
                modifyStatus('yes',newStatus);
            }
            else {
                e.target.classList.remove('green')
                e.target.classList.add('red');
                e.target.innerText = 'Not Read'
                newStatus = e.target.parentNode.parentNode.dataset.title;
                modifyStatus('no', newStatus);
            }
 })
    }
     )}}
function removeEvent(){
    const removeBt = document.querySelectorAll('.Remove-Bt');
    let toDelete;
    if(removeBt !== null){
    removeBt.forEach(removeBt => {
        removeBt.addEventListener('click', e => {
            
            toDelete = e.target.parentNode.parentNode.dataset.title;
            deleteBook(toDelete);
            console.log(myLibrary);
            resetLib();
})
    }
        )}}
toggleEvent();
removeEvent();

function resetLib(){
    libraryContainer.replaceChildren();
    createLibrary();
    toggleEvent();
removeEvent();
}
function modifyStatus (status, title){
    myLibrary.forEach(book => {
        if(book.title === title){
            book.read = status;
        }
    })
}
//send the string, no and yes, to this function from the event listener
//This function should go through the mylibrary array and find the corresponding 
//item in the array and modify the status property
//potentially add the dataset class to the container div of the buttons to access the title?

function deleteBook(title){
    myLibrary.forEach(book => {
        if(book.title === title){
            myLibrary.pop(book);
        }
    })
}


const modal = document.querySelector('.modal-window');
addBookBt.addEventListener('click', e => {
    modal.style.display = 'block';
})

const spanClose = document.querySelector('span');
spanClose.addEventListener('click', e => {
    modal.style.display = 'none';
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }