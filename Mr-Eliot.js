/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 12 - "Mr. Elliot"
 */

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję zmieniającą tekst na pozdrowienia od Mr. Elliota, według przykładu.
 *
 *
 * Przykład:
 * greetings('hacker'); // => 'H4Ck3r'
 * greeting('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
 * greeting('Saving The World'); // => 'S4V1Ng tHe w0rLd'
 * 
 */
const charMappings = {
  a: '4',
  e: '3',
  i: '1',
  o: '0',
  s: '5'
}

function greeting(message) {
  let charsToNumbers = [...message].map(char => {
    for ([key, val] of Object.entries(charMappings)) {
      if (char.toLowerCase() === key) char = val
    }
    return char
  })
  return charsToNumbers.map((char, index) => {
    return index % 2 ? char.toLowerCase() : char.toUpperCase()
  }).join('')
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(greeting('hacker'), 'H4Ck3r');
verify(greeting('Control Is An Illusion'), 'C0NtR0L 15 4N 1lLu510n');
verify(greeting('Saving The World'), '54V1Ng tH3 w0rLd');


// function greeting(message) {
//   const working = message
//   let charsToNumbersResult = [];
//   [...working].map((char, index, arr) => {
//       for ([key, val] of Object.entries(charMappings)) {
//         if (char.toLowerCase() === key) arr.splice(index, 1, val)
//       }
//       charsToNumbersResult = arr
//       return charsToNumbersResult.join('')
//   })
//   return charsToNumbersResult.map((char, index) => {
//     return index % 2 ? char.toLowerCase() : char.toUpperCase()
//   }).join('')
// }