/*
# Przeprogramowani.pl - Opanuj JavaScript

Moduł II. - Przeglądarka bez tajemnic

## Ćwiczenie nr. 9 - ciasteczkowy potwór

### Jak zacząć

Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

### Cel ćwiczenia

Powiadomienia o wykorzystaniu ciasteczek są konieczne na każdej stronie www.

Spraw aby:
1. po kliknięciu na przycisk "Shure" modal znikna
2. wykorzystaj mechanizm ciasteczek i spraw aby użytkownik,
 który wyraził zgodę na wykorzystanie ciasteczek,
  już nigdy ich więcej nie zobaczył! 

### Punkty bonusowe

- Zaimplementuj animację znikającego modala wykorzystując CSS oraz JavaScript
- Zamiast mechanizmu cookie wykorzystaj localStorage.

https://stackblitz.com/edit/ciasteczkowy-potwor-yfwuct?file=index.js !!!!!!   <<=== Live Preview
*/

const shureButton = document.querySelector('.mt-3');
const modal = shureButton.parentElement;

function hideModal(e) {
  localStorage.setItem('shure-cookie', 'good-cookie');
  if (localStorage.getItem('shure-cookie')) {
    modal.style.display = 'none';
  }
}

function checkStorage(item) {
  if (localStorage.getItem(item)) return true;
}

shureButton.addEventListener('click', hideModal);
window.addEventListener('DOMContentLoaded', () => {
  if (checkStorage('shure-cookie')) {
    modal.style.display = 'none';
  }
});
