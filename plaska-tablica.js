/*
* Cel zadania
*------------
* Weź tablicę zawierającą zagnieżdżone tablice i zwróć płaską tablicę zawierającą  wartości liczbowe bez powtórek oraz pozbawioną wartości null/undefined.
*
* Przykładowo: 
* flattenArray([4, [3, 2, undefined, 1], [1, 4, null, 5]]) => [4, 3, 2, 1, 5]
* 
* Oczekuj tylko jednego poziomu zagnieżdżenia tablic.
* 
https://repl.it/@jaseveen/Plaska-tablica   !!!!!! <<=== Live Preview
*/

function flattenArray(deepArray) {
  const toFlatten = deepArray.flat();
  const numbersOnly = toFlatten.filter((el) => {
    if (el !== null && el !== undefined) return el;
  });
  const noDuplicates = new Set(numbersOnly);
  return Array.from(noDuplicates);
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

verify(
  flattenArray([4, [3, 2, undefined, 1], [1, 4, null, 5]]),
  '4, 3, 2, 1, 5'
);
verify(flattenArray([null, [1, 2, 3], [null, undefined]]), '1, 2, 3');
