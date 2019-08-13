function solve() {
    let paragraphElement = document.getElementById('input');
    let paragraphElementSentences = paragraphElement.innerHTML.split('. ');
    let divOutputElement=document.getElementById('output');

   for (let i=0;i<paragraphElementSentences.length;i+=3){
       let paragraph=document.createElement('p');
       paragraph.textContent=paragraphElementSentences[i];

       if(paragraphElementSentences[i+1]!==undefined){
           paragraph.textContent += '. ' + paragraphElementSentences[i + 1];
       }
       if(paragraphElementSentences[i+2]!==undefined){
           paragraph.textContent += '. ' + paragraphElementSentences[i + 2];
       }
       divOutputElement.appendChild(paragraph);
   }

}