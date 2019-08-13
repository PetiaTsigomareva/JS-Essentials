function getData() {
  //Get Input
  let input = JSON.parse(document.querySelector('textarea').value);
  let actionCriteria = input.pop();
  let peopleInArr = [];
  let peopleOutArr = [];
  let blackListArr = [];

  for (let people of input) {
    let currentAction = people.action;
    let currentPeople = {firstName: people.firstName, lastName: people.lastName};

    if (currentAction === 'peopleIn') { //In action
      if (!blackListArr.find(p => p.firstName === currentPeople.firstName && p.lastName === currentPeople.lastName)) {
        peopleInArr.push(currentPeople);
      }
    } else if (currentAction === 'peopleOut') {//Out action
      if (peopleInArr.find(p => p.firstName === currentPeople.firstName && p.lastName === currentPeople.lastName)) {
        let index = peopleInArr.findIndex(p => p.firstName === currentPeople.firstName && p.lastName === currentPeople.lastName);
        peopleInArr.splice(index, 1);
        peopleOutArr.push(currentPeople);
      }
    } else if (currentAction === 'blacklist') {  //Black list action
      if (peopleInArr.find(p => p.firstName === currentPeople.firstName && p.lastName === currentPeople.lastName)) {
        let index = peopleInArr.findIndex(p => p.firstName === currentPeople.firstName && p.lastName === currentPeople.lastName);
        peopleInArr.splice(index, 1);
        peopleOutArr.push(currentPeople);
      }
      blackListArr.push(currentPeople);
    }

  }

  //Get Output
  let peopleIn = document.querySelector('#peopleIn p');
  let peopleOut = document.querySelector('#peopleOut p');
  let blackList = document.querySelector('#blacklist p');

  let output = {};
  output['peopleIn'] = peopleInArr;
  output['peopleOut'] = peopleOutArr;
  output['blacklist'] = blackListArr;

  if (actionCriteria.action !== '' && actionCriteria.criteria !== '') {
    output[actionCriteria.action] = output[actionCriteria.action].sort((a, b) => a[actionCriteria.criteria].localeCompare(b[actionCriteria.criteria]));

  }
  peopleIn.textContent = output.peopleIn.map(p => JSON.stringify(p)).join(' ');
  peopleOut.textContent = output.peopleOut.map(p => JSON.stringify(p)).join(' ');
  blackList.textContent = output.blacklist.map(p => JSON.stringify(p)).join(' ');
}