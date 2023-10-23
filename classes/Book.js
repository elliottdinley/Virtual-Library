const Media = require("./Media.js");

class Book extends Media {
    constructor(title, year, genre, author, numPages, rating) {
        super(title, year, genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }

    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }

    static highestRating(books) {
        return books.reduce((max, val) => {
            return max.rating > val.rating ? max : val;
        })
    }

    static calculateAverageRating(books) {
        return books.reduce((acc, val) => acc + val.rating, 0) / books.length;
    }
}

module.exports = Book;