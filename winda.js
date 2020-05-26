/*
# Przeprogramowani.pl - Opanuj JavaScript

Moduł II. - Przeglądarka bez tajemnic

## Ćwiczenie nr. 4 - Winda

### Jak zacząć

Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

### Cel ćwiczenia

Winda napędzana scrollem użytkownika porusza się w górę i w dół (zgodnie z kierunkiem scrollowania). 

Spraw, aby pole nad windą, informujące o kierunku poruszania się, było aktualizowane na bieżąco.

### Punkty bonusowe

1. Spraw, aby na polu z informacjami pokazywało się również aktualne piętro

https://stackblitz.com/edit/winda-2nrfyu?file=index.js !!!!!! <<=== Live Preview
*/

const directions = {
  top: '🔼',
  bottom: '🔽',
};

let dataBase = [];
const elevator = document.querySelector('.elevator');
const floors = elevator.querySelectorAll('.floor');
let direction = document.querySelector('.direction');

function showDirection(e) {
  const howFar = e.target.scrollTop;

  dataBase.push(howFar);

  if (dataBase.length > 2) dataBase = [];
  if (dataBase[0] < dataBase[1]) {
    direction.innerHTML = `Kierunek: ${directions.bottom}`;
  }
  if (dataBase[0] > dataBase[1]) {
    direction.innerHTML = `Kierunek: ${directions.top}`;
  }
}

elevator.addEventListener('scroll', showDirection);

function obverve(data) {
  console.log(data[0].target.innerText);
  direction.innerHTML += data[0].target.innerText;
  return data[0].target.innerText;
}
const ob = new IntersectionObserver(obverve, {
  threshold: 0.7,
});
floors.forEach((floor) => {
  ob.observe(floor);
});
