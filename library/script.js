const addNewBtn = document.querySelector('button.addon');
const dialog = document.querySelector('#dialog');
const outputBox = document.querySelector('.outputBox');
addNewBtn.addEventListener('click', () => {
  dialog.showModal();
});
// close btn
document.querySelector('dialog button.cl').addEventListener('click', () => {
  dialog.close();
});
dialog.querySelector('form button.submit').addEventListener('click', (e) => {
  e.preventDefault();
  const labels = document.querySelectorAll('input');
  const ans = [];
  labels.forEach(input => {
    ans.push(input.value);
  });
  dialog.close();
  const book = new Book(ans[0], ans[1], ans[2], ans[3]);
  myLibrary.push(book);
  ans.length = 0;
  addBookToLibrary();
});
const myLibrary = [];

function Book(bookName, author, pages, stat) {
  this.bookName = bookName, this.author = author, this.pages = pages, this.stat = stat;
}
Book.prototype.flipStatus = function() {
  if (this.stat === 'read') {
    this.stat = 'unread';
  }
  else this.stat = 'read';
}

function addBookToLibrary() {
  // take reference
  const div = document.createElement('div');
  const frst = document.createElement('p');
  frst.textContent = `Book Name: ${myLibrary[myLibrary.length - 1].bookName}`;
  const scnd = document.createElement('p');
  scnd.textContent = `Book Author: ${myLibrary[myLibrary.length - 1].author}`;
  const thrd = document.createElement('p');
  thrd.textContent = `No of Pages: ${myLibrary[myLibrary.length - 1].pages}`;
  const frth = document.createElement('p');
  frth.textContent = `Status : ${myLibrary[myLibrary.length - 1].stat}`;
  div.appendChild(frst);
  div.appendChild(scnd);
  div.appendChild(thrd);
  div.appendChild(frth);
  // adding remove event listener
  const btn = document.createElement('button');
  btn.textContent = 'deconste';
  btn.addEventListener('click', () => {
    outputBox.removeChild(div);
  });
  div.appendChild(btn);
  const btnRead = document.createElement('button');
  div.appendChild(btnRead);
  btnRead.textContent = 'toggle status';
  btnRead.addEventListener('click', () => {
    // call prototype func
  });
  outputBox.appendChild(div);
}

// task3 now adding a flipStatus func to flip status of reading
