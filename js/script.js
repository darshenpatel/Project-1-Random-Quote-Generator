// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//The following function pulls a random quote from the array of "quote" objects
function getRandomQuote () {
  let randomQuote = quotes[Math.floor( Math.random() *  quotes.length )];
  //When the page returns a random quote, the background color is changed at random too
  randomBackgroundColor();
  return randomQuote;
}

//The following function pulls the random quote we call and prints it to the page
function printQuote () {
  let randomQuote = getRandomQuote();
  html = '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;


//if citation is available...append onto the HTML script and print to the page
  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }

//if year is available...append onto the HTML script and print to the page
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }

//if categorization is available...append onto the HTML script and print ot the page
  if (randomQuote.categorization) {
    html += '<h1>' + randomQuote.categorization + '</h1>';
  }

//the div from the HTML file is called and set equal to the html script we create above
  let div = document.getElementById('quote-box').innerHTML = html;
  return html;
}

//function that randomly changes the background color
function randomBackgroundColor () {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let backGroundColor= "rgb(" + red + "," + blue + "," + green + ")";
  document.body.style.background = backGroundColor;
}

//refresh the quote after a set amount of time --- 10 seconds
let timer = setInterval(function(){ printQuote() }, 10000);

//stops the interval time we set above
let stopTime = function myStopFunction() {
  clearInterval(timer);
}
