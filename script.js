var library = [];

var shelves = document.querySelector('.cards');

shelves.addEventListener('click',updateShelve);


const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");

function toggleModal() {
    modal.classList.toggle("show-modal");
    trigger.classList.toggle("trigger");
    trigger.classList.toggle("close");

}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);



class Book{
    constructor(title,author,pages,isRead){
        this.title = `"${title}"`;
        this.author = `By '${author}'`;
        this.pages = `${pages} pages`;
        this.isRead = isRead;
    
        this.div = document.createElement('div');
        this.div.classList.add('card');
        
    }
    makeCard =  ()=>{

        this.div.setAttribute('data-book', this.title)
    
        var h3 = document.createElement('h3');
        h3.textContent = this.title;
        
        
        var p = document.createElement('p');
        p.textContent = this.author;
        
        var p2 = document.createElement('p');
        p2.textContent = this.pages;
        
        var button = document.createElement('button');
        button.textContent = this.isRead ? 'Read' : 'Not Read';
        button.classList.add(`${this.isRead ? 'read' : 'not-read'}`);
    
    
        var button2 = document.createElement('button');
        button2.textContent = 'Remove';
        button2.classList.add('delete');
    
        
        this.div.appendChild(h3);
        this.div.appendChild(p);
        this.div.appendChild(p2);
        this.div.appendChild(button);
        this.div.appendChild(button2);
    
    }

}


function Book(title,author,pages,isRead){
    this.title = `"${title}"`;
    this.author = `By '${author}'`;
    this.pages = `${pages} pages`;
    this.isRead = isRead;

    this.div = document.createElement('div');
    this.div.classList.add('card');
    
    
    
    //shelves.appendChild(this.div)
    
}




Book.prototype.makeCard = function (){

    this.div.setAttribute('data-book', this.title)

    var h3 = document.createElement('h3');
    h3.textContent = this.title;
    
    
    var p = document.createElement('p');
    p.textContent = this.author;
    
    var p2 = document.createElement('p');
    p2.textContent = this.pages;
    
    var button = document.createElement('button');
    button.textContent = this.isRead ? 'Read' : 'Not Read';
    button.classList.add(`${this.isRead ? 'read' : 'not-read'}`);


    var button2 = document.createElement('button');
    button2.textContent = 'Remove';
    button2.classList.add('delete');

    
    this.div.appendChild(h3);
    this.div.appendChild(p);
    this.div.appendChild(p2);
    this.div.appendChild(button);
    this.div.appendChild(button2);

}


function addBook(e){
    e.preventDefault();
    const title = document.getElementById('title').value;
    document.getElementById('title').value = '';
    const author = document.getElementById('author').value;
    document.getElementById('author').value = ''
    const pages = document.getElementById('pages').value;
    document.getElementById('pages').value=''
    const read = document.getElementById('read-status').checked;
    document.getElementById('read-status').checked = false;

    const book = new Book(title,author,pages,read);




    book.makeCard();
    toggleModal();

    library.push(book);
    displayBooks();
}



function displayBooks(){
    library.forEach(book => {shelves.appendChild(book.div)});
}



function updateShelve(e){
    if(e.target.className === 'delete'){
        var card = e.target.parentElement;
        library = library.filter(book=> !(book.title === card.getAttribute('data-book')));
        shelves.removeChild(card);
    }
    else if(e.target.className === 'read' || e.target.className === 'not-read'){
        var card = e.target.parentElement;
        library.forEach(book=> {
            if(book.title === card.getAttribute('data-book')){
                

                e.target.textContent = `${book.isRead ? 'Not Read' : 'Read'}`

                e.target.classList.remove(`${book.isRead ? 'read' : 'not-read'}`);
                
                book.isRead = !book.isRead;
                e.target.classList.add(`${book.isRead ? 'read' : 'not-read'}`);
            }
        });

        


    }
}