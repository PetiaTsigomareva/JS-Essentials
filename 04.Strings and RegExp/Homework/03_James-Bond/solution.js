function solve() {
  let inputField = JSON.parse(document.getElementById('array').value);
  let keyword = inputField[0];
  let text = inputField[1];

  let keywordRegex = new RegExp(`(^| )${keyword}`, 'gi');
  let messageRegex = new RegExp(`${keyword}[ ]+([!%$#A-Z]{8,})([., ]|$)`, 'gm');
  console.log(keywordRegex);
  console.log(messageRegex);
  let match = text.match(messageRegex);

  console.log(match);



}
