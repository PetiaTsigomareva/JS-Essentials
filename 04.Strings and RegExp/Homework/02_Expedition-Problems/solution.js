function solve() {
  let keyword = document.getElementById('string').value;
  let text = document.getElementById('text').value;

  let messagePattern = `${keyword}(.*)${keyword}`;
  let messageRegex = new RegExp(messagePattern, 'g');
  let messageMatch = messageRegex.exec(text);
  let message = messageMatch[1];

  let geographicalCoordinatesPattern = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gmi;
  let eastMatch;
  let northMatch;
  let match = geographicalCoordinatesPattern.exec(text);

  while (match !== null) {
    if (match[1].toUpperCase() === 'NORTH') {
      northMatch = match;
    } else {
      eastMatch = match;
    }
    match = geographicalCoordinatesPattern.exec(text);
  }

  let spanResult=document.getElementById('result');

  let p1=document.createElement('p');
  p1.innerHTML=`${northMatch[2]}.${northMatch[3]} N`;

  let p2=document.createElement('p');
  p2.innerHTML=`${eastMatch[2]}.${eastMatch[3]} E`;

  let p3=document.createElement('p');
  p3.innerHTML=`Message: ${message}`;

  spanResult.appendChild(p1);
  spanResult.appendChild(p2);
  spanResult.appendChild(p3);


}