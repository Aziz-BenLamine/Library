const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    render();
}

function render() {
    let Libraryel = document.querySelector("#library");
    Libraryel.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookel = document.createElement("div");
        bookel.setAttribute("class", "book-card");
        bookel.innerHTML = `
    <div class="card-header">
        <h3 class="title">${book.title}</h3>
        <h5 class="author">by ${book.author}</h5>
    </div>
    <div class="card-body">
        <p>${book.pages} pages</p>
        <p class="read-status ${book.read ? "" : "not-read-status"}">${book.read ? "Read" : "Not Read Yet"}</p>
        <div class="buttons">
            <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
            <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
        </div>
    </div>`;
        Libraryel.appendChild(bookel);
    }
}

function removeBook(index){
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary(event) {
    event.preventDefault();
    let title = document.querySelector("#title").value.trim();
    let author = document.querySelector("#author").value.trim();
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    if (!title || !author || pages <= 0) {
        alert("Please enter valid book details.");
        return;
    }

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
    newBookForm.style.display = "none";
    backdrop.style.display = "none";
}

let addBookbtn = document.querySelector("#add-book-btn");
addBookbtn.addEventListener("click", function () {
    let newBookForm = document.querySelector("#new-book-form");
    let backdrop = document.querySelector("#backdrop");

    if(newBookForm.style.display === "none" || !newBookForm.styledisplay){
        newBookForm.style.display = "block";
        backdrop.style.display = "block";
    }
    else{
        newBookForm.style.display = "none";
        backdrop.style.display = "none";
    }
})

document.querySelector("#backdrop").addEventListener("click", function(){
    document.querySelector("#new-book-form").style.display = "none";
    document.querySelector("#backdrop").style.display = "none";
})

document.querySelector("#new-book-form").addEventListener("submit", addBookToLibrary);