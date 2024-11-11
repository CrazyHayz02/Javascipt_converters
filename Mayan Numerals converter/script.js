// Establishing variables for the elements that will be used
const convertButton = document.getElementById("convert-btn");
const textPal = document.getElementById("number");
const hiddenResult = document.getElementById("output");

//Function for converting numbers to roman nums
const convertToRoman = (num) => {
    const romans = {
        19: "....|||",
        18: "...|||",
        17: "..|||",
        16: ".|||",
        15: "|||",
        14: "....||",
        13: "...||",
        12: "..||",
        11: ".||",
        10: "||",
        9: "....|",
        8: "...|",
        7: "..|",
        6: ".|",
        5: "|",
        4: "....",
        3: "...",
        2: "..",
        1: ".",
        0: "⬭"
    };

    let results = "";
    if (num <= 19) {
        for (const i in romans) {
            if (num == i){
                results = "";
                results += romans[i];
            }
        }
    } else {
        let numLeft = 0;
        if (num >= 20 && num < 400){
            let twentPlus = Math.trunc(num/20)
            for (const i in romans) {
                if (twentPlus == i){
                    results = "";
                    results += romans[i];
                }
            }
            numLeft = num - (twentPlus * 20);
            for (const i in romans) {
                if (numLeft == i){
                    results += "  " + romans[i];
                }
            }
        }
        if (num >= 400 && num < 8000){
            let forHunPlus = Math.trunc(num/400)
            for (const i in romans) {
                if (forHunPlus == i){
                    results = "";
                    results += romans[i];
                    console.log(results);
                }
            }
            numLeft =  num - (forHunPlus * 400);

            let twentPlus = Math.trunc(numLeft/20)
            for (const i in romans) {
                if (twentPlus == i){
                    results += "  " + romans[i];
                    console.log(results);
                }
            }
            numLeft -=  (twentPlus * 20);

            for (const i in romans) {
                if (numLeft == i){
                    results += "  " + romans[i];
                    console.log(results);
                }
            }
        }
        if (num >= 8000 && num < 160000){
            let eightThPlus = Math.trunc(num/8000)
            for (const i in romans) {
                if (eightThPlus == i){
                    results = "";
                    results += romans[i];
                    console.log(results);
                }
            }
            numLeft = num - (eightThPlus * 8000);

            let forHunPlus = Math.trunc(numLeft/400)
            for (const i in romans) {
                if (forHunPlus == i){
                    results += "  " + romans[i];
                    console.log(results);
                }
            }
            numLeft -=  (forHunPlus * 400);

            let twentPlus = Math.trunc(numLeft/20)
            for (const i in romans) {
                if (twentPlus == i){
                    results += "  " + romans[i];
                    console.log(results);
                }
            }
            numLeft -=  (twentPlus * 20);

            for (const i in romans) {
                if (numLeft == i){
                    results += "  " + romans[i];
                    console.log(results);
                }
            }
        }
        if (num >= 160000 && num < 1000000){
            let sixHunThPlus = Math.trunc(num/160000)
            for (const i in romans) {
                if (sixHunThPlus == i){
                    results = "";
                    results += romans[i];
                    console.log(results);
                }
            }
            numLeft = num - (sixHunThPlus * 160000);

            let eightThPlus = Math.trunc(numLeft/8000)
            for (const i in romans) {
                if (eightThPlus == i){
                    results += "  " + romans[i];
                    console.log(results);
                }
            }
            numLeft -= (eightThPlus * 8000);

            let forHunPlus = Math.trunc(numLeft/400)
            for (const i in romans) {
                if (forHunPlus == i){
                    results += "  " + romans[i];
                    console.log(results);
                }
            }
            numLeft -=  (forHunPlus * 400);

            let twentPlus = Math.trunc(numLeft/20)
            for (const i in romans) {
                if (twentPlus == i){
                    results += "  " + romans[i];
                    console.log(results);
                }
            }
            numLeft -=  (twentPlus * 20);

            for (const i in romans) {
                if (numLeft == i){
                    results += "  " + romans[i];
                    console.log(results);
                }
            }
        }
    }
    hiddenResult.innerHTML = results;

}

//Function for checking the input is valid
const validInput = (newStr, int) => {
    if (!newStr || newStr.match(/[e.]/g)) {
        hiddenResult.innerHTML ='Please enter a valid number.';
        return false;
    } else if (int < 0) {
        hiddenResult.innerHTML = "Please enter a number greater than or equal to 0.";
        return false;
    } else if (int >= 0 && int <= 999999 ) {
        return true;    
    } else {
        hiddenResult.innerHTML ="Please enter a number less than 10000000.";
        return false;
    }

} 

//Action for the button click
convertButton.addEventListener("click", () => {
    newData(textPal.value);
    textPal.value = '';
});


textPal.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        newData(textPal.value);
        textPal.value = '';
    }
});

const newData = (input) => {
    console.log(input);
    const newStr = textPal.value;
    const int = parseInt(newStr, 10);
    hiddenResult.innerHTML = ""

    if (validInput(newStr, int)) {
        convertToRoman(int);
    }

}
