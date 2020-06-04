/*
# Przeprogramowani.pl - Opanuj JavaScript

Moduł II. - Przeglądarka bez tajemnic

## Ćwiczenie nr. 12 - świetne alerty

### Jak zacząć

Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

### Cel ćwiczenia

Informowanie użytkownika o tym, co się dzieje z aplikacją jest priorytetem.
Jednym z rodzajów takiej interakcji są różnego rodzaju alerty.

Napisz klasę która:
1. będzie zawierać metodę tworzącą nowy alert na podstawie Wiadomości 
oraz Rodzaju (Error/Warning/Success)
2. w chwili gdy metoda zostanie wywołana, alert powinien być widoczny przez 
10 sekund lub do momentu gdy użytkownik na niego kliknie

https://stackblitz.com/edit/swietne-alerty-kerbds?file=index.js         !!!!!!!    <<=== Live Preview

### Punkty bonusowe

- zadbaj o to, aby wyświetlały się maksymalnie 3 alerty a pozostałe 
czekały na swoją kolej.
- zadbaj o dodanie animacji pokazywania / ukrywania alertu
*/

class customWarning {
  constructor(message, alertType) {
    this.message = message;
    this.alertType = alertType;
  }

  clearContainer() {
    const existingPopups = Array.from(document.querySelectorAll('.popup'));
    const container = document.querySelector('.container--js');
    setTimeout(() => {
      existingPopups.forEach((popup) => {
        popup.classList.add('hidePopup');
        container.removeChild(popup);
      });
    }, 10000);
    container.addEventListener('click', (e) => {
      if (e.target.tagName === 'SPAN') {
        e.target.parentElement.classList.add('hidePopup');
      }
      setTimeout(() => {
        e.target.parentElement.classList.remove('hidePopup');
      }, 4000);
    });
  }

  createAndClone(alertType) {
    switch (alertType) {
      case 'error':
        alertType = document.querySelector('.error');
        alertType = alertType.cloneNode(Infinity);
        break;
      case 'alert':
        alertType = document.querySelector('.alert');
        alertType = alertType.cloneNode(Infinity);
        break;
      case 'ok':
        alertType = document.querySelector('.ok');
        alertType = alertType.cloneNode(Infinity);
        break;
      default:
        break;
    }
    return alertType;
  }

  appendPopup() {
    const popup = this.createAndClone(this.alertType);
    const container = document.querySelector('.container--js');
    popup.firstElementChild.firstElementChild.nextElementSibling.innerText = this.message;
    setInterval(() => {
      popup.classList.remove('hidePopup');
      popup.classList.add('showPopup');
      container.appendChild(popup);
    }, 10000);
  }
}

new customWarning().clearContainer();
new customWarning('ej kurwa!', 'error').appendPopup();
new customWarning('no nie wiem', 'alert').appendPopup();
new customWarning('zajebiście!', 'ok').appendPopup();
