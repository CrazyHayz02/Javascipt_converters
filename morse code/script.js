// Establishing variables for the elements that will be used
const convertButton = document.getElementById("convert-btn");
const textPal = document.getElementById("number");
const hiddenResult = document.getElementById("output");

//Function for converting numbers to roman nums
const convertToRoman = (word) => {
    const morse = {
        a: '.-',
        b: '-...',
        c: '-.-.',   
        d: '-..' ,   
        e: '.',      
        f: '..-.',   
        g: '--.',    
        h: '....',   
        i: '..',     
        j: '.---',   
        k: '-.-',    
        l: '.-..',   
        m: '--',     
        n: '-.',     
        o: '---',    
        p: '.--.',   
        q: '--.-',   
        r: '.-.',    
        s: '...',    
        t: '-',      
        u: '..-',    
        v: '...-',   
        w: '.--',   
        x: '-..-',   
        y: '-.--',   
        z: '--..',   
        1: '.----',  
        2: '..---',  
        3: '...--',
        4: '....-',  
        5: '.....',  
        6: '-....',  
        7: '--...',  
        8: '---..',  
        9: '----.',  
        0: '-----',   
        ' ': '/'
    };

    let results = "";
    word.split('').forEach(letter => {
        console.log(letter);
        for (const i in morse) {
            console.log(i);
            if (letter == i){
                results += morse[i] + "   ";
            }
        } 
    });
        

    hiddenResult.innerHTML = results;

}

//Function for checking the input is valid
const validInput = (newStr, int) => {
    if (!newStr || newStr.match(/[!@#$%^&*]/g)) {
        hiddenResult.innerHTML ='Please enter a valid number.';
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
    console.log(input);
    const newStr = textPal.value;
    hiddenResult.innerHTML = ""

    if (validInput(newStr)) {
        convertToRoman(newStr);
    }

}
