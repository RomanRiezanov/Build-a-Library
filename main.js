class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(ckecked) {
      this._isCheckedOut = checked;
    }
    toggleCheckedOutStatus() {
      // if(this._isCheckedOut) {
      //   this._isCheckedOut = false;
      // } else {
      //   this._isChechedOut = true;
      // }
      this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
      const summedNums = this._ratings.reduce((acc,curVal) => {
        return acc + curVal;
      })
        const result = summedNums / this._ratings.length;
        return result;
    }
    addRating(rating) {
      if (rating >= 1 && rating <= 5) {
        this._ratings.push(rating);
      }
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages, numberOfChapters) {
      super(title);
      this._author = author;
      this._pages = pages;
      this._numberOfChupters = numberOfChapters;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
    get numberOfChapters() {
      return this._numberOfChapters;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime, movieCast) {
      super(title);
      this._director = director;
      this._runTime = runTime;
      this._movieCast = movieCast;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
    get movieCast() {
      return this._movieCast;
    }
  }
  
  class CD extends Media {
    constructor(artist, title, songs, time) {
      super(title);
      this._artist = artist;
      this._songs = songs;
      this._time = time;
    }
    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
    get time() {
      return this._time;
    }
    shuffle() {
      let currentIndex = this._songs.length,  randomIndex;
  
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
      [this._songs[currentIndex], this._songs[randomIndex]] = [
        this._songs[randomIndex], this._songs[currentIndex]];
      }
    }
  }
  
  class Catalog {
    constructor(mediaList){
      this._MyCatalog = [mediaList];
    }
    get mediaList() {
      return this._mediaList;
    }
    set mediaList(newMedialist)  {
      this._MyCatalog.push(newMedialist);
     }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckedOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  speed.toggleCheckedOutStatus();
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  console.log(speed.getAverageRating());
  
  
  const michael = new CD('Michael Jackson', 'Thriller', ['Wanna Be Startin’ Somethin’', 'The Girl Is Mine', 'Baby Be Mine', 'Thriller'], 11);
  
  michael.toggleCheckedOutStatus();
  console.log(michael.isCheckedOut)
  
  michael.addRating(5);
  michael.addRating(5);
  michael.addRating(5);
  
  console.log(michael.getAverageRating());
  
  michael.shuffle();
  console.log(michael);
  
  const Test = new Catalog('Firs Catalog');
  Test.mediaList = historyOfEverything;
  Test.mediaList = speed;
  Test.mediaList = michael;
  console.log(Test)