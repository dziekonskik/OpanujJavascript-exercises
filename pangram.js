/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 5 - "Pangram"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która sprawdzi, czy podany parametr to tzw. pangram.
*
* Pangram to możliwe do zrozumienia zdanie wykorzystujące wszystkie litery danego alfabetu.
*
*
* Przykład:
*
* isPangram('test') // => false
* isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!') // => true
*/

/*
* Punkty dodatkowe
*-----------------
* Zweryfikuj, czy konkretna litera występuje w podanym zdaniu tylko jeden raz.
*/

function isPangram(sentence) {
    const alphabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż'
   const filtered = sentence.toLowerCase().split('').filter(letter => {
     return alphabet.includes(letter)
   })
  return alphabet.length === filtered.length ? true : false
   
 }
 
 /* Weryfikacja */
 
 function verify(input, goal) {
   if (input === goal) {
     console.log('Gratulacje!');
   } else {
     console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
   }
 }
 
 verify(isPangram('test'), false);
 verify(isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!'), true);
 verify(isPangram('Dość gróźb fuzją, klnę, pych i małże!'), false);