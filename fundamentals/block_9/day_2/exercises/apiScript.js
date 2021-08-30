const API_URL = 'https://icanhazdadjoke.com/';


const createText = (text) => {
  const jokeContainer = document.querySelector('#jokeContainer');
  return jokeContainer.innerText = text;
} 


const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => createText(data.joke))
};

window.onload = () => fetchJoke();


