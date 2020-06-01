/*
# Przeprogramowani.pl - Opanuj JavaScript

Moduł II. - Przeglądarka bez tajemnic

## Ćwiczenie nr. 8 - Sortowanie danych

### Jak zacząć

Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

### Cel ćwiczenia

W tabeli znajdują się informacje o modułach kursu "Opanuj JavaScript".

Spraw aby:
1. po kliknięciu na "Czas trwania" moduły sortowały się według czasu trwania
2. trzałka przy napisie "Czas trwania" sugerowała użytkownikowi kolejność
3. sekundy były wyświetlane w formacie hh:mm:ss

https://stackblitz.com/edit/sortowanie-danych-ww2rsa?file=index.js   !!!!!!!    <<=== Live Preview

### Punkty bonusowe
Zaimplementuj animację zamiany kolejności wykorzystując animacje CSS.
*/

const table = document.querySelector('tbody');
let tableRows = Array.from(document.querySelectorAll('tbody tr'));
const sortButton =
  table.previousElementSibling.firstElementChild.lastElementChild;
//const sortButton = document.querySelector('.hover:text-orange-600') - czemu tak wywala błąd uncaught DOM exeption ?;

function calculateTime(totalSeconds) {
  const hours = parseInt(totalSeconds / 3600);
  const minutes = parseInt((totalSeconds - hours * 3600) / 60);
  const seconds = totalSeconds - hours * 3600 - 60 * minutes;
  return [hours, minutes, seconds];
}

tableRows.forEach((row) => {
  row.lastElementChild.textContent = `${
    calculateTime(row.lastElementChild.textContent)[0]
  }:${calculateTime(row.lastElementChild.textContent)[1]}:${
    calculateTime(row.lastElementChild.textContent)[2]
  }`;
});

function sortTableRows(e) {
  const buttonIcon = sortButton.firstElementChild.firstElementChild;
  if (buttonIcon.classList.contains('fa-caret-up')) {
    tableRows = [...tableRows].sort((a, b) => {
      a = parseInt(a.lastElementChild.textContent);
      b = parseInt(b.lastElementChild.textContent);
      buttonIcon.classList.replace('fa-caret-up', 'fa-caret-down');
      return a - b;
    });
  } else if (buttonIcon.classList.contains('fa-caret-down')) {
    tableRows = [...tableRows].sort((a, b) => {
      a = parseInt(a.lastElementChild.textContent);
      b = parseInt(b.lastElementChild.textContent);
      buttonIcon.classList.replace('fa-caret-down', 'fa-caret-up');
      return b - a;
    });
  }
  tableRows.map((row) => {
    row.classList.add('appear');
    table.appendChild(row);
  });
}

sortButton.addEventListener('click', sortTableRows);
