const dialog = document.querySelector('dialog');
dialog.showModal();
const addon = document.querySelector('.addon');
const bottom = document.querySelector('.bottom');

// event listeners
dialog.querySelector('button.cl').addEventListener('click', () => {
  dialog.close();
});
addon.addEventListener('click', () => {
  dialog.showModal();
});
dialog.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = dialog.querySelector('label #bookName').value;
  let author = dialog.querySelector('label #author').value;
  let pages = dialog.querySelector('label #pages').value;
  let status = dialog.querySelector('label #stat').checked ? 1 : 0;
  addBookToLibrary(name, author, pages, status);
});

const myLibrary = [];

class Book {
  // the constructor...
  constructor(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}
Book.prototype.flipStatus = function() {
  this.status = !this.status;
}
function addBookToLibrary(name, author, pages, status) {
  let book = new Book(name, author, pages, status);
  myLibrary.push(book);
  bottom.innerHTML = "";
  render();
}
function render() {
  for (let i = 0; i < myLibrary.length; i++) {
    let div = document.createElement('div');
    div.innerHTML = `
<p>Name: ${myLibrary[i].name}</p>
<p>Author: ${myLibrary[i].author}</p>
<p>Pages: ${myLibrary[i].pages}</p>
<p>Status: ${myLibrary[i].status ? "Read" : "Unread"}</p>
<button onclick="bookChangeStat(${i})">Change Status</button>
<button onclick="bookRemoval(${i})">Delete</button>
`;
    bottom.appendChild(div);
  }
}
// task 5
function bookRemoval(idx) {
  myLibrary.splice(idx, 1);
  bottom.innerHTML = "";
  render();
}
// task 6
function bookChangeStat(idx) {
  myLibrary[idx].status = myLibrary[idx].status ? 0 : 1;
  bottom.innerHTML = "";
  render();
}
