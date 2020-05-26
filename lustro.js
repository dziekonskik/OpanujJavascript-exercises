// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 1 - Lustro

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// Spraw, aby tekst lustrzany pojawiał się... w lustrze ;)

// Dostęp do pola tekstowego uzyskasz poprzez klasę `.text-input`.
// Dostęp do lustra uzyskasz poprzez klasę `.mirror`.

//https://stackblitz.com/edit/lustro-fj5qzu?file=index.js  !!!!!  <<=== Live Preview

const input = document.querySelector('.text-input');

input.addEventListener('keyup', () => {
  const mirror = document.querySelector('.mirror');
  const reversed = [...input.value].reverse().join('');
  mirror.innerHTML = reversed;
});
