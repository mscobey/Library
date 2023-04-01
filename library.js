let library = [];

//Book constructor 
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=()=>{
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
    };
}
//add book object to library 
function addBookToLibrary(book){
    library.push(book);
}
//display books on page
const container = document.getElementById('container');

function clearDisplay(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
function displayLibrary(){
    clearDisplay();
    for(let i=0;i<library.length;i++){
        let book =library[i];
        let div = document.createElement('div');
        if(book.read==='read'){
            div.innerHTML=`<strong>${book.title}</strong><br><i>${book.author}</i><br>${book.pages} pages<br>${book.read}<br><button id='r${i}' class='bookBtn'>Not Read</button><button id='${i}' class='bookBtn'>remove</button>`;
        }
        else{
            div.innerHTML=`<strong>${book.title}</strong><br><i>${book.author}</i><br>${book.pages} pages<br>${book.read}<br><button id='r${i}' class='bookBtn'>Read</button><button id='${i}' class='bookBtn'>remove</button>`;
        }
        
        container.appendChild(div).className='bookDiv';
        removeBtn(i);
        readBook(book,i);
        
    }
}

//new book button
//Using div right now, will use a real form eventually
const form=document.getElementById('form');
let newTitle=document.getElementById('title');
let newAuthor=document.getElementById('author');
let newPages=document.getElementById('pages');


document.getElementById('newBookBtn').addEventListener('click',()=>{
    form.style.display="block";
});
document.getElementById('submit').addEventListener('click',()=>{
    
    const newBook = new Book(newTitle.value,newAuthor.value,newPages.value,document.querySelector('input[name="read"]:checked').value);
    addBookToLibrary(newBook);
    displayLibrary();
    form.style.display='none';
});

 function removeBtn(i){
    document.getElementById(`${i}`).addEventListener('click',()=>{
        deleteBook(i);
    });
}

function deleteBook(i){
    library.splice(i,1);
    displayLibrary();
}

function readBook(book,i){
    document.getElementById(`r${i}`).addEventListener('click',()=>{
        if(book.read==='read'){
            book.read='not read';
        }
        else{
            book.read='read';
        }
        displayLibrary();

    });
}
