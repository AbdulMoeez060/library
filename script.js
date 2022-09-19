var library = [];

var body = document.querySelector('body');

function Book(title,author,pages,isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.div = document.createElement('div');
    this.div.classList.add('card');
    
    this.h3 = document.createElement('h3');
    this.h3.textContent = this.title;
    
    
    this.p = document.createElement('p');
    this.p.textContent = this.author;
    
    this.p2 = document.createElement('p');
    this.p2.textContent = this.pages;
    
    this.button = document.createElement('button');
    this.button.textContent = this.isRead;
    
    this.div.appendChild(this.h3);
    this.div.appendChild(this.p);
    this.div.appendChild(this.p2);
    this.div.appendChild(this.button);
    
    body.appendChild(this.div)
    
}

function addBook(e){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const book = new Book(title,author,pages,read);

    library.push(book);
}