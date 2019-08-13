function solve() {//TODO in judge not 100 points
  let firstPlayerDiv = document.getElementById('player1Div');
  let secondPlayerDiv = document.getElementById('player2Div');
  let resultDiv = document.getElementById('result');
  let firstSpan = resultDiv.children[0];
  let secondSpan = resultDiv.children[2];
  let historyDiv = document.getElementById('history');

  const winnerBorder = '2px solid green';
  const looserBorder = '2px solid red';

  const compareCards = () => {
    let firstCardValue = Number.parseInt(firstSpan.textContent);
    let secondCardValue = Number.parseInt(secondSpan.textContent);
    let firstCard = findElementByValue(firstPlayerDiv, 'img', firstCardValue);
    let secondCard = findElementByValue(secondPlayerDiv, 'img', secondCardValue);

    if (firstCardValue && secondCardValue) {
      if (firstCardValue > secondCardValue) {
        firstCard.style.border = winnerBorder;
        secondCard.style.border = looserBorder;
      } else if (firstCardValue < secondCardValue) {
        firstCard.style.border = looserBorder;
        secondCard.style.border = winnerBorder;
      } else {
        firstCard.style.border = winnerBorder;
        secondCard.style.border = winnerBorder;
      }
      firstSpan.textContent = '';
      secondSpan.textContent = '';
      let historyPairs = `[${firstCardValue} vs ${secondCardValue}]`;
      historyDiv.textContent = historyDiv.textContent + historyPairs + ' ';

    }
  }
  for (let currentCard of Array.from(document.getElementsByClassName('cards')[0].children)) {
    for (let img of Array.from(currentCard.getElementsByTagName('img'))) {
      img.addEventListener('click', function () {
          let cardVal = img.getAttribute('name');
          let parentId = img.parentNode.id;
          img.setAttribute('src', 'images/whiteCard.jpg')

          if (parentId === 'player1Div') {
            firstSpan.textContent = cardVal;
          } else if (parentId === 'player2Div') {
            secondSpan.textContent = cardVal;
          } else {
            alert('WRONG PARENT ELEMENT ' + img.parentNode);
          }

          compareCards();
        }
      );
    }
  }

  const findElementByValue = (parentElement, tagName, value) => {
    for (element of parentElement.getElementsByTagName(tagName)) {
      if (element.getAttribute('name') === value.toString()) {
        return element;
      }
    }
  }


}