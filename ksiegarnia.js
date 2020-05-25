/*
# Przeprogramowani.pl - Opanuj JavaScript

Moduł II. - Przeglądarka bez tajemnic

## Ćwiczenie nr. 7 - Księgarnia

### Jak zacząć

Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

### Cel ćwiczenia

Spraw, aby wyszukiwarka książek z Goodreads.com zaczęła działać poprawnie. 

Aby zadanie uznać za zakończone, jako użytkownik powinienem być w stanie:
1. Wpisać frazę z nazwą książki w pole wyszukiwania
2. Nacisnąć przycisk `Wyszukaj` aby pobrać dane z Goodreads.com
3. Zobaczyć pięć przykładowych wyników z API Goodreads, zawierających okładkę oraz nazwę ksiażki.

### Punkty bonusowe

1. Rozbuduj wyniki wyszukiwania o nazwę autora
2. Rozbuduj wyniki o link do detali książki na `Goodreads.com`

API którego możesz używać znajduje się pod adresem 
`https://cors-anywhere.herokuapp.com/
https://www.goodreads.com/book/auto_complete?format=json&q=harry%20potter`, 
gdzie `q` to parametr z nazwą książki.

https://stackblitz.com/edit/ksiegarnia-ydthre?file=index.js  !!!!!
*/
const searchInput = document.querySelector('.form__input');
const submitButton = document.querySelector('#form__button');
const displayList = document.querySelector('.results');
const form = document.forms[0];
const API_URL =
  'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=';

function submitSearch(e) {
  e.preventDefault();
  fetch(API_URL + searchInput.value)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayList.innerHTML = '';
      data.forEach((book) => {
        const mockLi = `
        <li class="entry">
          <img
            class="entry__image"
            src="${book.imageUrl}"
            alt="Cover"
          />
          <p class="entry__name">${book.bookTitleBare}</p>       
          <p class="entry__name"> Autor: ${book.author.name}</p>                     
          <a class="entry__name" href="http://${book.bookUrl}">Click for details</a>
        </li>`;
        displayList.innerHTML += mockLi;
      });
    })
    .catch((error) => {
      console.log(error);
      throw new Error('niepowodzenie');
    });
}

form.addEventListener('submit', submitSearch);
submitButton.addEventListener('submit', submitSearch);
