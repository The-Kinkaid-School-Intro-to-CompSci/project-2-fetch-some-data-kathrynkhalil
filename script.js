function runProgram(){

    console.log('runProgram');
    const api_url ="https://zenquotes.io/api/quotes/";
    getapi(api_url)

    let searchButton = document.querySelector(`#Button`)
    searchButton.addEventListener('click', findQuote);
}
document.addEventListener('DOMContentLoaded', runProgram);
let data;

async function getapi(url)
{
  const response = await fetch(url);
  data = await response.json();


  const arr = ["hi", "hello"];
  console.log(arr[1])

  console.log(data[2]);
  let firstQuote = data[0]
  let actualQuote = firstQuote.q
  let QuotePara = document.querySelector(`#QuoteParagraph`);
  QuotePara.textContent = data[0].q
}

function findQuote(){
  console.log('Clicked');
  let input = document.querySelector(`#SearchBox`);
  console.log(input.value);
  console.log(data[2]);
  Number(input.value)
  if(input.value > 50||input.value < 1){
    
  }
  let firstQuote = data[input.value]
  let actualQuote = firstQuote.q
  let QuotePara = document.querySelector(`#QuoteParagraph`);
  QuotePara.textContent = actualQuote


}

