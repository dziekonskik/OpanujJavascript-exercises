// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 2 - Żarówka

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// Przy pomocy kodu JavaScript, spraw, aby przełącznik światła sterował żarówką powyżej.

// Żarówka zaświeci się, jeśli element z klasą `.bulb` wzbogaci się o klasę `.bulb--on`.

// Pamiętaj, że przełącznik to nie tylko włączanie, ale też wyłączanie światła.

const swicz = document.querySelector('#light-toggle');

swicz.addEventListener('change', (e) => {
  const bulb = e.target.parentElement.previousElementSibling;
  bulb.classList.toggle('bulb--on');
});
/*
<div class="bulb">
  <div class="bulb__top"></div>
  <img class="bulb__wire" src="https://i.imgur.com/YHZCVPl.png" alt="Wire">
  <div class="bulb__bottom"></div>
</div>

<label for="light-toggle">
  <input name="light-toggle" id="light-toggle" type="checkbox">
  Światło włączone
</label>

h1, h2 {
    font-family: Lato;
  }
  
  .bulb {
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    position: relative;
  }
  
  .bulb__top {
    width: 50px;
    height: 50px;
    border-radius: 45%;
    border: 1px solid #717171;
  }
  
  .bulb__wire {
    position: absolute;
    top: 0;
  }
  
  .bulb__bottom {
    width: 18px;
    height: 15px;
    border-radius: 5px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border: 2px solid #717171;
    position: relative;
    top: -3px;
  }
  
  .bulb--on > .bulb__top {
    background: yellow;
  }
  */
