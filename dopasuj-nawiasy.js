/*
 * Cel zadania
 *------------
 * Otrzymując stringa zawierającego nawiasy kwadratowe [], klamry {} lub nawiasy okrągłe (), upewnij się że wszystkie z par są dopasowane i prawidłowo zagnieżdżone. Jeżeli wszystko się zgadza, zwróć true. W przypadku wykrycia błędów, zwróc false.
 *
 * Przykład: '[{()}]' => true
 * Przykład: '[{]}' => false
 *
 * https://repl.it/@jaseveen/Dopasuj-nawiasy-1 !!!
 */

function checkBrackets(stringWithBrackets) {
  const compare = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const openingBrackets = [...stringWithBrackets]
    .map((bracket) => {
      if (Object.keys(compare).includes(bracket)) return bracket;
    })
    .filter((entry) => entry);

  const closingBrackets = [...stringWithBrackets]
    .map((bracket) => {
      if (Object.values(compare).includes(bracket)) return bracket;
    })
    .filter((entry) => entry);

  const openingBracketsCount = openingBrackets.filter((bracket, index, arr) => {
    if (arr[index] === arr[index + 1]) return bracket;
  });
  const closingBracketsCount = closingBrackets.filter((bracket, index, arr) => {
    if (arr[index] === arr[index + 1]) return bracket;
  });

  if (stringWithBrackets.length % 2 !== 0) return false;
  if (openingBracketsCount.length !== closingBracketsCount.length) return false;

  for ([key, val] of Object.entries(compare)) {
    if (
      stringWithBrackets.indexOf(key) % 2 === 0 &&
      stringWithBrackets.indexOf(val) % 2 !== 0
    ) {
      return true;
    } else if (
      stringWithBrackets.indexOf(key) % 2 !== 0 &&
      stringWithBrackets.indexOf(val) % 2 === 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}

/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(checkBrackets('[{()}]'), true);
verify(checkBrackets('[{]}'), false);
verify(checkBrackets('()[{}]'), true);
verify(checkBrackets('{[(]}}'), false);
