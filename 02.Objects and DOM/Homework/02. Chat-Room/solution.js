function solve() {
    let sentMyMessageDiv = document.getElementsByClassName("my-message")[0];
    let sendBtn = document.getElementById("send");
    let textArea = document.getElementById("chat_input");
    let chatMessageArea = document.getElementById("chat_messages");

    sendBtn.addEventListener("click", function () {
        let sentMyMessageDivClone = sentMyMessageDiv.cloneNode(true);
        let textAreaContent = textArea.value;

        if (textAreaContent !== "") {
            sentMyMessageDivClone.textContent = textAreaContent;

            chatMessageArea.appendChild(sentMyMessageDivClone);
            textArea.value = "";
        }

    })
}


