/*
# Przeprogramowani.pl - Opanuj JavaScript

Moduł II. - Przeglądarka bez tajemnic

## Ćwiczenie nr. 14 - Paginacja

### Jak zacząć

Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

### Cel ćwiczenia

Wyświetlanie dużej ilości danych bywa uciążliwe. 
Paginacja (stronicowanie) to sposób aby sobie z tym poradzić.

Zaimplementuj prosty mechanizm pagiancji, który na jednej stronie 
wyświetli 2 elementy z listy.
- Przyciski "Previous" & "Next" powinny się wyłączać w chwili 
gdy jesteśmy odpowiednio na pierwszej i ostatniej stronie paginacji.

https://stackblitz.com/edit/paginacja-jpumxv?file=index.js       !!!!!!   <<=== Live Preview
*/

const container = document.querySelector('.contacts');
const pageList = document.querySelector('.page-list');
const pages = Array.from(document.querySelector('.page-list').children);
const allContacts = Array.from(document.querySelector('.contacts').children);
const prevButton = pageList.firstElementChild;
const nextButton = pageList.lastElementChild;
const namesPerPage = 2;
let counter = 1;
const lastKnownCurrentPage = [];
const displayContainer = [];

displayContainer.length > 2
  ? (displayContainer.length = 2)
  : displayContainer.length;

const numericPageButtons = pages.filter((page) => {
  const buttonValue = page.firstElementChild.textContent;
  return /\d/.test(parseInt(buttonValue));
});

allContacts.forEach((person, index) => {
  if (index > 1) {
    person.remove();
    hideButton(prevButton);
  }
});

/*------=======Funkcje pomocnicze=======------*/

function render(where, what) {
  return where.appendChild(what);
}

function clear() {
  allContacts.forEach((person) => person.remove());
}

function calculatePageContent(currentPage) {
  return [currentPage * namesPerPage - 1, currentPage * namesPerPage - 2];
}

function hideButton(button) {
  button.classList.add('disabled');
}

function showButton(button) {
  button.classList.remove('disabled');
}

function prevNextBtnToggle(currentPage) {
  const isOnPageOne = currentPage === 1;
  const isNoLongerOnPageOne = currentPage > 1;
  const isOnTheLastPage = currentPage === numericPageButtons.length;
  const isNotOnLastPage = currentPage < numericPageButtons.length;

  if (isOnPageOne) hideButton(prevButton);
  if (isNoLongerOnPageOne) showButton(prevButton);
  if (isOnTheLastPage) hideButton(nextButton);
  if (isNotOnLastPage) showButton(nextButton);
}

function fillContainer(params) {
  const contactOneIsNotUndefined =
    allContacts[calculatePageContent(params)[1]] !== undefined;
  const contactTwoIsNotUndefined =
    allContacts[calculatePageContent(params)[0]] !== undefined;

  if (contactOneIsNotUndefined && contactTwoIsNotUndefined) {
    displayContainer.unshift(allContacts[calculatePageContent(params)[1]]);
    displayContainer.unshift(allContacts[calculatePageContent(params)[0]]);
  }
}

/*------=======Logika właściwa=======------*/

function changePage(e) {
  const currentPage = parseInt(e.target.textContent);

  clear();

  lastKnownCurrentPage.unshift(currentPage);

  fillContainer(currentPage);

  render(container, displayContainer[0]);
  render(container, displayContainer[1]);

  prevNextBtnToggle(currentPage);
}

function prevNextPage(e) {
  clear();

  e.target.textContent === 'Previous' ? counter-- : counter++;

  lastKnownCurrentPage.unshift(counter);

  fillContainer(lastKnownCurrentPage[0]);

  render(container, displayContainer[0]);
  render(container, displayContainer[1]);

  prevNextBtnToggle(lastKnownCurrentPage[0]);
}

numericPageButtons.forEach((page) => {
  page.addEventListener('click', changePage);
});

prevButton.addEventListener('click', prevNextPage);
nextButton.addEventListener('click', prevNextPage);
