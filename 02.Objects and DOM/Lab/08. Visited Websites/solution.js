function solve() {
    let divElements = document.getElementsByClassName('link-1');
    console.log(divElements);
    for (const divElement of divElements) {
        console.log(divElement);
        divElement.addEventListener('click', (e) => {
            let currentTarget = e.currentTarget;
            let paragraphElement = currentTarget.getElementsByTagName('p')[0];
            let textParts=paragraphElement.textContent.split(' ');

            let clicks=Number(textParts[1]);
            clicks+=1;

            textParts[1]=clicks;
            paragraphElement.textContent = textParts.join(' ');

            })
    }
}