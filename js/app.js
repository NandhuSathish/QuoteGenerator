const colors = [
  "#5990c3",
  "#E97050",
  "#E9AC50",
  "#E9C750",
  //   "#DDE950",
  "#AFE950",
  "#8AE950",
  "#50E97B",
  "#50E9C4",
  "#50C4E9",
  "#50B2E9",
  "#5084E9",
  "#5350E9",
  "#8150E9",
  "#9C50E9",
  "#D450E9",
  "#E950C7",
  "#E95090",
  "#E95059",
];
const nextBtn = document.querySelector(".next");
const shareBtn = document.querySelector(".share");
const authorName = document.getElementById("authorName");
const quoteText = document.getElementById("quote");
const loder = document.querySelector(".lds-ripple");
const container = document.querySelector(".container");

async function getQuote() {
  const apiUrl = "https://api.quotable.io/random";
  const proxy = "https://cors-anywhere.herokuapp.com/";
  try {
    const response = await fetch(proxy + apiUrl);
    const data = await response.json();
    // if author name is blank
    if (data.author === "") {
      authorName.innerText = "Unknown";
    }
    quoteText.innerText = data.content;
    authorName.innerText = data.author;
    console.log(data);
  } catch (error) {
    console.log("Whoops an error occured ", error);
    randomColor();
    getQuote();
  }
}
function randomColor() {
  randomNo = Math.floor(Math.random() * colors.length);
  console.log(randomNo);
  document.body.style.backgroundColor = colors[randomNo];
}
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorName.innerText;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(tweetUrl, "_blank");
}

// next quote
nextBtn.addEventListener("click", () => {
  randomColor();
  getQuote();
});
// share quote
shareBtn.addEventListener("click", () => {
  tweetQuote();
});
// on load
randomColor();
getQuote();
