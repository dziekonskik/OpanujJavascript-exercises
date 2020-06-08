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
    prevButton.style.display = 'none';
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

function hidePreviousBtn() {
  prevButton.style.display = 'none';
}

function showPreviousBtn() {
  prevButton.style.display = 'flex';
}

function hideNextBtn() {
  nextButton.style.display = 'none';
}

function showNextBtn() {
  nextButton.style.display = 'flex';
}

function prevNextBtnToggle(currentPage) {
  if (currentPage === 1) hidePreviousBtn();
  if (currentPage > 1) showPreviousBtn();
  if (currentPage === numericPageButtons.length) hideNextBtn();
  if (currentPage < numericPageButtons.length) showNextBtn();
}

function fillContainer(params) {
  if (
    allContacts[calculatePageContent(params)[1]] !== undefined &&
    allContacts[calculatePageContent(params)[0]] !== undefined
  ) {
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

function changePageBackward() {
  counter--;
  clear();
  lastKnownCurrentPage.unshift(counter);

  fillContainer(lastKnownCurrentPage[0]);

  render(container, displayContainer[0]);
  render(container, displayContainer[1]);

  prevNextBtnToggle(lastKnownCurrentPage[0]);

  counter > numericPageButtons.length ? (counter = 1) : counter;
}

function changePageForward() {
  counter++;
  clear();
  lastKnownCurrentPage.unshift(counter);

  fillContainer(lastKnownCurrentPage[0]);

  render(container, displayContainer[0]);
  render(container, displayContainer[1]);

  prevNextBtnToggle(lastKnownCurrentPage[0]);

  counter > numericPageButtons.length ? (counter = 1) : counter;
}

numericPageButtons.forEach((page) => {
  page.addEventListener('click', changePage);
});

prevButton.addEventListener('click', changePageBackward);
nextButton.addEventListener('click', changePageForward);
