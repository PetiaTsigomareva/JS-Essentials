function solve() {
    let selectToMenu = document.getElementById("selectMenuTo");
    let convertBtn = document.getElementsByTagName("button")[0];

    let binaryOption = document.createElement("option");
    binaryOption.text = "Binary";
    binaryOption.value = "binary";
    selectToMenu.appendChild(binaryOption);


    let hexadecimalOption = document.createElement("option");
    hexadecimalOption.text = "Hexadecimal";
    hexadecimalOption.value = "hexadecimal";
    selectToMenu.appendChild(hexadecimalOption);



    convertBtn.addEventListener("click", function () {
        if (selectToMenu.selectedIndex !== -1) {
            let selectedOption = selectToMenu.options[selectToMenu.selectedIndex].value;
            let inputField = document.getElementById("input");
            let inputFieldContent = parseInt(inputField.value,10);
            let resultField = document.getElementById("result");

            switch (selectedOption) {
                case "binary":
                    resultField.value = inputFieldContent.toString(2);
                    break;
                case "hexadecimal":
                    resultField.value = inputFieldContent.toString(16).toUpperCase();
                    break;
                default:
                    resultField.value = "";
                    break;

            }


        }

    })


}


