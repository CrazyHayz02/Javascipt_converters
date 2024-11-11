// Establishing variables for the elements that will be used
const convertButton = document.getElementById("convert-btn");
const textPal = document.getElementById("number");
const hiddenResult = document.getElementById("output");

//Function for converting numbers to roman nums
const convertToRoman = (num) => {
    const romans = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
        
    };

    let results = "";
    for (const i in romans) {
        if (num >= romans[i]){
            results += i.repeat(Math.trunc(num/romans[i]));
            num -= romans[i]*(Math.trunc(num/romans[i]))
        }
    }
    hiddenResult.innerHTML = results;

}

//Function for checking the input is valid
const validInput = (newStr, int) => {
    if (!newStr || newStr.match(/[e.]/g)) {
        hiddenResult.innerHTML ='Please enter a valid number.';
        return false;
    } else if (int < 1) {
        hiddenResult.innerHTML = "Please enter a number greater than or equal to 1.";
        return false;
    } else if (int > 3999) {
        hiddenResult.innerHTML ="Please enter a number less than or equal to 3999.";
        return false;
    } else {
        return true;
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
    const newStr = textPal.value;
    const int = parseInt(newStr, 10);

    if (validInput(newStr, int)) {
        convertToRoman(int);
    }

}
