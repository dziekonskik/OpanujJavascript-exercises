/*
# Przeprogramowani.pl - Opanuj JavaScript

Moduł II. - Przeglądarka bez tajemnic

## Ćwiczenie nr. 5 - Las

### Jak zacząć

Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

### Cel ćwiczenia

Pod jednym z drzew ukryty został skarb, którego teraz szuka twój użytkownik.

Spraw, żeby na skutek ruchu kursorem nad lasem:

1. w przypadku miejsca gdzie znajduje się skarb (drzewo z klasą `treasure`), wyświetlić emoji dostępne pod zmienną `images.treasure`
2. w przypadku miejsca, gdzie nie znajduje się skarb, wyświetlić emoji dostępne pod zmienną `images.leafs`
3. po odkryciu skarbu, w preferowany przez ciebie sposób powiadomić użytkownika o zwycięstwie 💪

### Punkty bonusowe

1. Być może po odkryciu skarbu użytkownik mógłby usłyszeć wybrany przez ciebie podkład dźwiękowy?
 Zweryfikuj możliwości biblioteki [Howler](https://howlerjs.com/)

 https://stackblitz.com/edit/las-daj5py?file=index.js !!!!!!   <<=== Live Preview

*/
// import { Howl, Howler } from 'howler';
const images = {
  treasure: '💰',
  leafs: '🍃',
};

const forest = document.querySelector('.entry');

function treasureFinder(e) {
  if (e.target.classList.contains('treasure')) {
    e.target.innerHTML = images.treasure;
    alert('You know the BUSHES ;D');
    return;
  } else if (e.target.classList.contains('tree')) {
    e.target.innerHTML = images.leafs;
  }
}
forest.addEventListener('mouseover', treasureFinder);
