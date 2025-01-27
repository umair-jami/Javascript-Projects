const api_url = "https://api.api-ninjas.com/v1/quotes?max_length=200"; // Add max_length parameter
const api_key = "ED3JBYQcpi23e2y2nsDejQ==lMLqSgOUcuMNQImm"; // Replace with your actual API key
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "X-Api-Key": api_key, // API key in the headers
      },
    });
    const data = await response.json();
    quote.innerHTML = data[0].quote;
    author.innerHTML = `- ${data[0].author}`;
    console.log(data[0]);
  } catch (error) {
    console.error("Error fetching the quote:", error);
  }
}

getQuote(api_url);
function tweet() {
    const tweetText = `${quote.innerText} ${author.innerText}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, "Tweet Window", "width=500,height=300");
  }
  

