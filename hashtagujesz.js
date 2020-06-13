/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 14 - "Hashtagujesz"
 */

/*
* Cel zadania
*------------
* Zaimplementuj funkcję wyszukującą hashtagi w zdaniu
*
*
* Przykład:
* findTags('W 2020 #opanujeJS'); // => opanujeJS
* findTags('Za chwilę dodam #opanujeJS!'); // => opanujeJS
* findTags('Lubię tagować #yolo #love#happy #h3cker'); // => yolo, love, happy, h3cker

https://repl.it/@jaseveen/Hashtagujesz#index.js   !!!!!! <<=== Live Preview
* 
*/

function findTags(message) {
  let hash = message;
  return hash.match(/(?<=#)\w+/g);
}

/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(', ') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(findTags('W 2020 #opanujeJS'), 'opanujeJS');
verify(findTags('Za chwilę dodam #opanujeJS!'), 'opanujeJS');
verify(
  findTags('Lubię tagować #yolo #love#happy #h3cker'),
  'yolo, love, happy, h3cker'
);
