//DataStore for this Demo
class BookStore {

  constructor() {
    this._books = [];
    this.fetchBooks();
    this._observer = null;
  }
  

  subscribe(observer) {
    this._observer = observer;
  }

  get books() {
    return this._books;
  }

  getBook(id) {
    return this._books.filter((book) => {
      return book.id === Number(id);
    })[0];
  }

  fetchBooks = ()=> {
    fetch("http://localhost:7777/books")
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this._books = response;
        console.log("Got books from server");
        if (this._observer) {
          this._observer.dataReady();
        }
      })
  }

  addBook = (book) => {
    var self = this
    fetch('http://localhost:7777/books', 
    { method: 'POST', 
      body: JSON.stringify(book), 
      headers: new Headers({
		    'Content-Type': 'application/json'
	    })
    })
    .then(() => {
      self.fetchBooks()
    }) 
  }
 
}

export default new BookStore();