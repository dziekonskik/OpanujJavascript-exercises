/*
# Przeprogramowani.pl - Opanuj JavaScript

Moduł II. - Przeglądarka bez tajemnic

## Ćwiczenie nr. 10 dragNDrop

### Jak zacząć

Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

### Cel ćwiczenia

Możliwość przeciągania elementów to intuicyjny sposób manipulowania elementami.

Spraw aby:
1. było możliwe "przeciągnięcie" kart artykułów z sekcji "Drafts" do "Published" i odwrotnie.
2. daj użytkownikowi możliwość kontroli nad kolejnością artykułów w obrębie sekcji

### Punkty bonusowe

https://stackblitz.com/edit/dragndrop1-articles-ig8uss?file=index.js   !!!!!!   <<=== Live Preview

- I tak jest dość trudno ;)
*/
const draggables = Array.from(document.querySelectorAll('article.bg-white'));
const main = document.querySelectorAll('main');

draggables.forEach((item) => {
  item.setAttribute('draggable', true);
  item.addEventListener('dragstart', (e) => {
    const dragElement = e.dataTransfer.setData('my-data', e.target.className);
    console.log(dragElement);
    item.classList.add('dragging');
  });
  item.addEventListener('dragend', (e) => {
    item.classList.remove('dragging');
  });
});

main.forEach((list) => {
  list.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  list.addEventListener('dragenter', (e) => {
    e.preventDefault();
  });
  list.addEventListener('dragleave', (e) => {
    e.preventDefault();
  });
  list.addEventListener('drop', (e) => {
    const dragElement = document.querySelector('.dragging');
    list.appendChild(dragElement);
  });
});
