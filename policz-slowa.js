/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 16 - "Policz słowa"
 */

/*
* Cel zadania
*------------
* Otrzymując zdanie jako parametr wejściowy, zwróć obiekt, który będzie zawierał liczbę wystąpień każdego słowa w zdaniu. Zignoruj to czy słowo jest napisane z dużej czy z małej litery.
*
* 
*
* Przykład:
* countWords("Nauka JavaScript z kursem Opanuj JavaScript to frajda"); // => {
  nauka: 1,
  javascript: 2,
  z: 1,
  kursem: 1,
  opanuj: 1,
  to: 1,
  frajda: 1
}
* 
* 
*/

function countWords(sentence) {
    let working = sentence
    let counter = 0;
    working = working.replace(',', '').toLowerCase().split(' ');
    let arrays = working.map(word => {
      return [word, counter]
    })
    working.forEach(word => {
      arrays.forEach(array => {
        if (word === array[0]) array[1]++
      })
      return arrays
    })
    return Object.fromEntries(arrays)
  }
  
  /* Weryfikacja */
  
  function verify(input, goal) {
    input = Array.isArray(input) ? input.join(", ") : input;
    if (input == goal) {
      console.log("Gratulacje!");
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(
    JSON.stringify(
      countWords("Nauka JavaScript z kursem Opanuj JavaScript to frajda")
    ),
    JSON.stringify({
      nauka: 1,
      javascript: 2,
      z: 1,
      kursem: 1,
      opanuj: 1,
      to: 1,
      frajda: 1,
    })
  );
  verify(
    JSON.stringify(countWords("Tanie wino jest dobre, bo jest tanie i dobre")),
    JSON.stringify({
      tanie: 2,
      wino: 1,
      jest: 2,
      dobre: 2,
      bo: 1,
      i: 1,
    })
  );