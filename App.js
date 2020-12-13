// by MS
const quoteText = document.querySelector("#text"),
  quoteAuthor = document.querySelector("#author"),
  newQuoteBtn = document.querySelector("#new-quote"),
  bodyTag = document.querySelector("body"),
  twitterBtn = document.querySelector("#tweet-quote"),
  tumblrBtn = document.querySelector("#tumblr-quote");

var colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

fetchQuote();

newQuoteBtn.addEventListener("click", () => {
  fetchQuote();
});

function fetchQuote() {
  fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  )
    .then((response) => response.json())
    .then((data) => {
      let index = Math.floor(Math.random() * data.quotes.length),
        currentQuote = data.quotes[index].quote,
        currentAuthor = data.quotes[index].author;

      quoteText.innerHTML = currentQuote;
      quoteAuthor.innerHTML = currentAuthor;

      let colorIndex = Math.floor(Math.random() * colorArray.length);
      [bodyTag, twitterBtn, tumblrBtn, newQuoteBtn].forEach((elem) => {
        elem.style.cssText = `background-color: ${colorArray[colorIndex]}`;
      });
      bodyTag.style.cssText += `color: ${colorArray[colorIndex]}`;

      twitterBtn.attributes.href.value = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${
        currentQuote + '" ' + currentAuthor
      }`;

      tumblrBtn.attributes.href.value = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp,BitCamp&caption=${
        currentAuthor +
        "&content=" +
        currentQuote +
        "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
      }`;
    });
}
