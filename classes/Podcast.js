const Music = require("./Music.js");

class Podcast extends Music {
    constructor(title, year, genre, length, host, episodeName, episodeNumber, guests) {
        super(title, year, genre, host, length);
        this.episodeName = episodeName;
        this.episodeNumber = episodeNumber;
        this.guests = guests;
    }

    listen() {
        return `${this.title} - Episode: ${this.episodeName}. Hosted by ${this.artist} and featuring guests ${this.guests.join(", ")}. Length: ${this.length} seconds.`
    }
}