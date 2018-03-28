// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function getRandomQuote () {
  let randomQuote = quotes[Math.floor( Math.random() *  quotes.length )];
  randomBackgroundColor();
  return randomQuote;
}

function printQuote () {
  let randomQuote = getRandomQuote();
  html = '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;

//if citation is available...append onto the HTML script
  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }

//if year is available...append onto the HTML script
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }

  if (randomQuote.categorization) {
    html += '<h1>' + randomQuote.categorization + '</h1>';
  }

  let div = document.getElementById('quote-box').innerHTML = html;
  return html;

}

function randomBackgroundColor () {
  var r = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var backGroundColor= "rgb(" + r + "," + b + "," + g + ")";
  document.body.style.background = backGroundColor;
}

//how to reset time after each click?
//also would this be better to add in the HTML file or leave here?
setInterval(function(){ printQuote() }, 10000);
