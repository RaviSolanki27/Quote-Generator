let realData = "";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");

getNewQuote = () =>{
    let rnum = Math.floor(Math.random() * 1642);
    console.log(rnum);
    console.log(realData[rnum].text);
    console.log(realData[rnum].author);
    quote.innerText = `${realData[rnum].text}`;
    author.innerText = `- ${realData[rnum].author}`;
}

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuote();
    // console.log(realData);
  } catch (error) {}
};

newQ.addEventListener("click",getQuotes);

getQuotes();
