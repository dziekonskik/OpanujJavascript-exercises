/*
# Przeprogramowani.pl - Opanuj JavaScript

Moduł II. - Przeglądarka bez tajemnic

## Ćwiczenie nr. 6 - Tajny kod

### Jak zacząć

Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

### Cel ćwiczenia

Twoim celem jest zakodowanie logiki urządzenia rejestrującego tajne kody.

Twoje urządzenie powinno obsługiwać trzy typy przycisków:

* Przyciski numeryczne, dzięki którym zbudujesz tajny kod
* Przycisk `Zapisz`, po naciśnięciu którego powinieneś wyświetlić zarejestrony kod
* Przycisk `Reset`, po naciśnięciu którego powinieneś być w stanie zarejestrować nowy kod oraz ukryć ten zapisany poprzednio

Przykład działania:

1. Użytkownik naciska sekwencje 1-2-2-4
2. Użytkownik naciska przycisk "Zapisz"
3. Wyświetlacz prezentuje zapisany kod "1224"
4. Użytkownik naciska przycisk "Reset"
5. Użytkownik naciska sekwencje 5-2-7-1
6. Wyświetlacz prezentuje zapisany kod "5271"

Wskazówki:

* Do wyświetlacza odwołasz się poprzez klasę `display`
* Do przycisków odwołasz się poprzez klasę `keyboard__button`
* Wartość przycisku pobierz z atrybutu `data-value` - na podstawie wartości powinieneś zdecydować
 czy pracujesz z przyciskiem numerycznym, czy przyciskiem funkcyjnym

 https://stackblitz.com/edit/tajny-kod-5dme2k?file=index.js  !!!!!git add .

*/
let display = document.querySelector('.display');
const keybord = document.querySelectorAll('.keyboard__button');
let passwordBearer = '';

function inputHandler(e) {
  const dataValue = e.target.dataset.value;
  if (dataValue !== '99' && dataValue !== '-99') {
    passwordBearer += `${dataValue}`;
  }
  if (dataValue === '99') {
    localStorage.setItem('secret-code', `${passwordBearer}`);
    display.textContent = `${localStorage.getItem('secret-code')}`;
  } else if (dataValue === '-99') {
    localStorage.clear();
    display.textContent = '';
    passwordBearer = '';
  }
}
display.textContent = `${localStorage.getItem('secret-code')}`;
keybord.forEach((key) => {
  key.addEventListener('click', inputHandler);
});