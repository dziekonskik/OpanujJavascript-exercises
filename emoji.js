/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 7 - "Emoji"
 */

/*
* Cel zadania
*------------
* Zaimplementuj funkcję "useEmoji", która zastąpi wszystkie słowa danego parametru zgodnie 
* z mapowaniem z obiektu "emojiMappings";
*
* Przykład:
* useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!') // => 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!'
* useEmoji('Jadę po nowy samochód :D') // => 'Jadę po nowy 🏎 :D'

https://repl.it/@jaseveen/emoji-1    !!!!!! <<=== Live Preview
*/

const emojiMappings = {
  stop: '🚫',
  gwiazda: '⭐️',
  samochód: '🏎',
  buduję: '🧱',
  budzik: '⏰',
};

function useEmoji(input) {
  const output = input;
  return output
    .split(' ')
    .map((word) => {
      for ([key, value] of Object.entries(emojiMappings)) {
        if (word === key) {
          return output.replace(new RegExp(word, 'g'), value);
        }
      }
    })
    .join('');
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
  useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!'),
  'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!'
);
verify(useEmoji('Jadę po nowy samochód :D'), 'Jadę po nowy 🏎 :D');
verify(
  useEmoji('Właśnie buduję swoje skille w JS'),
  'Właśnie 🧱 swoje skille w JS'
);
