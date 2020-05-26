/*
# Przeprogramowani.pl - Opanuj JavaScript

Moduł II. - Przeglądarka bez tajemnic

## Ćwiczenie nr. 3 - Reprodukcja obrazu

### Jak zacząć

Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

### Cel ćwiczenia

Przy pomocy kodu JavaScript, odwzoruj oryginał obrazu na płótnie powyżej.

W pliku `index.js` pobrana została referencja do elementu nadrzędnego twojego płótna - jest to zmienna `fakeCanvas`. Od tej zmiennej
 możesz rozpocząć pracę przy odwzorowaniu obrazu. Powodzenia!

Pamiętaj - to nauka, więc unikaj drogi na skróty:

* nie modyfikuj struktury kodu HTML
* nie modyfikuj styli CSS
* nie kopiuj oryginału i nie wklejaj go w miejscep płótna ;)
*/

//https://stackblitz.com/edit/reprodukcja-tp6off?file=index.js   !!!!!  <<=== Live Preview

const PIXEL_COLOR = '#e44d4d';

const fakeCanvas = document.querySelector('.fake-canvas');
const rows = fakeCanvas.children;

for (let i = 1; i < rows.length - 1; i++) {
  rows[
    i
  ].firstElementChild.nextElementSibling.style.backgroundColor = PIXEL_COLOR;
  rows[
    i
  ].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = PIXEL_COLOR;
  rows[
    i
  ].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = PIXEL_COLOR;
  rows[i].lastElementChild.previousElementSibling.classList.add('pixel-dot');
  rows[
    i
  ].lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.classList.add(
    'pixel-dot'
  );
}

rows[1].firstElementChild.nextElementSibling.nextElementSibling.style.backgroundColor = PIXEL_COLOR;
rows[5].firstElementChild.nextElementSibling.nextElementSibling.style.backgroundColor = PIXEL_COLOR;
rows[3].lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.backgroundColor = PIXEL_COLOR;
rows[3].lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove(
  'pixel-dot'
);
rows[4].lastElementChild.previousElementSibling.classList.remove('pixel-dot');
