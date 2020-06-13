/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 21 - "HTML String"
 */

/*
* Cel zadania
*------------
* To zadanie stanowi wstęp do projektu "Abstract Syntax Trees" https://przeprogramowani.pl/opanuj-javascript_ast.pdf. Zacznij od zapoznania się z jego wprowadzeniem i opisem.
*
* Twoim rozgrzewkowym zadaniem jest napisanie funkcji, która przekonwertuje pojedynczy obiekt AST na HTML String.
*
* Przykład: convertAstToHtmlString({ 
“nodeType”: “element”, “tagName”: “div”,
“attributes”: [ { “name”: “class”, “value”: “test” }],
“children”: [ “nodeType”: “text”, “value”: “Hello world!”]
}) => "<div class="test">Hello world!</div>"
* 
* 
https://repl.it/@jaseveen/HTML-String    !!!!!! <<=== Live Preview
*/

function convertAstToHtmlString(astObject) {
  const destructured = JSON.parse(JSON.stringify(astObject));
  const { tagName, attributes, children } = destructured;
  const atribute = attributes.map(({ name, value }) => {
    return `${name}="${value}"`;
  });
  const innerText = children.map(({ nodeType, value }) =>
    nodeType === 'text' ? value : 'Incorrect Input'
  );
  return `<${tagName} ${atribute}>${innerText}</${tagName}>`;
}

/* Weryfikacja */
function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(
  convertAstToHtmlString({
    nodeType: 'element',
    tagName: 'div',
    attributes: [{ name: 'class', value: 'test' }],
    children: [{ nodeType: 'text', value: 'Hello world!' }],
  }),
  '<div class="test">Hello world!</div>'
);
