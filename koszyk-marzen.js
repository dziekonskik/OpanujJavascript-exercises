/*
# Przeprogramowani.pl - Opanuj JavaScript

Moduł II. - Przeglądarka bez tajemnic

## Ćwiczenie nr. 11 Koszyk marzeń

### Jak zacząć

Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

### Cel ćwiczenia

Koszyk w sklepie Internetowym to jeden z pierwszych elementów 
do implementacji którego bardzo przydatny był JavaScript.
Tym razem to Ty stworzysz swój koszyk marzeń.

Spraw aby:
1. cena w podsumowaniu była prawidłowa w zależności obecnych
 produktów oraz ich ilości
2. daj możliwość zmiany ilości produktów
3. daj możliwość usunięcia dowolnego produktu

https://stackblitz.com/edit/koszyk-marzen-j1el5k?file=index.js      !!!!!!   <<=== Live Preview

### Punkty bonusowe

- wyświetl użytkownikowi informację, gdy koszyk będzie pusty.
*/
const basket = document.querySelector('.bg-white');
const prices = Array.from(document.querySelectorAll('.flex.justify-end'));

const basePrice = prices.map((price) => {
  price = price.firstElementChild.nextElementSibling;
  price = price.innerHTML.split(' ')[0];
  return price;
});

function updateBasket(e) {
  const totalPrice = document.querySelector('.pr-4').firstElementChild;
  let quantity = Array.from(document.querySelectorAll('input.w-10'));

  function priceCalc() {
    return quantity.reduce((acc, currV) => parseInt(acc) + parseInt(currV));
  }

  quantity = quantity.map((input, index) => {
    const price = input.parentElement.nextElementSibling;
    price.innerHTML = `${basePrice[index] * input.value} zł`;
    return price.innerHTML.split(' ')[0];
  });

  totalPrice.innerHTML = quantity.length > 0 ? `${priceCalc()} zł` : `${0} zł`;
  if (quantity.length === 0) alert('koszyk jest pusty!');

  if (e.target.tagName === 'path') {
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
    totalPrice.innerHTML = `${priceCalc()} zł`;
  }

  if (e.target.tagName === 'BUTTON') {
    setTimeout(() => {
      e.target.innerHTML = 'Wszedłeś w TO!';
    }, 600);
  }
}

basket.addEventListener('click', updateBasket);
