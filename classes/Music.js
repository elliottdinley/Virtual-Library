const Media = require("./Media.js");

class Music extends Media {
    constructor(title, year, genre, artist, length) {
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }

    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }

    static shortestAlbum(albums) {
        return albums.reduce((max, val) => {
            return max.length < val.length ? max : val;
        })
    }
}

module.exports = Music;