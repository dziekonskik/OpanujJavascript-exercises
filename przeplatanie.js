/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 3 - "Przeplatanie"
 */

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję, która dla dwóch podanych parametrów wykona "przeplatanie"
 * - używając kolejnych cyfr parametrów połączy je w jeden string.
 *
 * Przykład:
 * zipIt(111, 222) // => '121212'
 * zipIt(123, 456) // => '142536'
 * zipIt(12, 5555) // => '152555'
 */

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazane parametry są typu number. Jeśli parametry nie
* spełniają tego warunku, funkcja powinna rzucić wyjątek.

https://repl.it/@jaseveen/przeplatanie             !!!!!! <<=== Live Preview
*/

function zipIt(first, second) {
  if (typeof first !== 'number' || typeof second !== 'number') {
    throw new Error('please provide a number');
  }
  const result = [];
  const arrFromFirst = first.toString().split('');
  const arrFromSecond = second.toString().split('');

  for (
    let i = 0;
    i < Math.max(first.toString().length, second.toString().length);
    i++
  ) {
    result.push(arrFromFirst[i]);
    result.push(arrFromSecond[i]);
  }

  return result.join('');
}
/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(zipIt(111, 222), '121212');
verify(zipIt(123, 456), '142536');
verify(zipIt(12, 5555), '152555');
