arrayOfQuots = [
  {
    qouts: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    qouts: "You only live once, but if you do it right, once is enough.",
    author: " Mae West",
  },
  {
    qouts:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    qouts: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    qouts: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    qouts: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
];
// var oldQouts = [];
function newQuots() {
  var arrLength = arrayOfQuots.length;
  var randomNumber = Math.floor(Math.random() * arrLength);
    // if (oldQouts.indexOf(randomNumber) === -1) {
        // console.log(oldQouts);
        //   oldQouts.push(randomNumber);
          document.getElementById("quote").innerHTML =
            '" ' + arrayOfQuots[randomNumber].qouts + ' "';
          document.getElementById("author").innerHTML =
            "-- " + arrayOfQuots[randomNumber].author;
        // }
        
 
}
