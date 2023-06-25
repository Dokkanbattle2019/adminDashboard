function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return title + author + pages + read
    }
}

const hobbit = new book("hobbit", "jrr", "494", "read")
console.log(hobbit.info())