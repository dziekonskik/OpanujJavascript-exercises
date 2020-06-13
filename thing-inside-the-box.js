/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 11 - Thing inside the box
 */

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, sprawdzającą czy pudełko jest puste.
*
*
https://repl.it/@jaseveen/Thing-inside-the-box-1   !!!!!! <<=== Live Preview
*/
function thing(box) {
  if (
    box.includes('o') &&
    box.charAt(box.indexOf('o') - 2) === '*' &&
    box.charAt(box.indexOf('o') + 2) === '*'
  ) {
    return true;
  }
  return false;
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(
  thing(`*****
                *   * o
                *   *
                *****`),
  false
);

verify(
  thing(`*****
                * o *
                *   *
                *****`),
  true
);

verify(
  thing(`*****
                 *   *
                 *   *
                 *****`),
  false
);
