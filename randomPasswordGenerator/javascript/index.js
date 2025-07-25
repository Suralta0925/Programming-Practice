function initGenerator(){
    const passwordLength = document.getElementById("passwordLength").value;
    const includesLowerCase = document.getElementById("lowercase").checked;
    const includesUpperCase = document.getElementById("uppercase").checked;
    const includesNumbers = document.getElementById("numbers").checked;
    const includesSymbols = document.getElementById("symbols").checked;
    const password = generatePassword(passwordLength,
                                      includesLowerCase,
                                      includesUpperCase,
                                      includesNumbers,
                                      includesSymbols);
    let result = document.getElementById("result");
    result.textContent = `Password Generated: ${password}`;

    
} 

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers,includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolsChars = "!@#$%^&*()_+-=";

    let allowedChars ="";
    let password = "";

    

    allowedChars += includeLowercase ? lowercaseChars:"";
    allowedChars += includeUppercase ? uppercaseChars:"";
    allowedChars += includeNumbers ? numberChars:"";
    allowedChars += includeSymbols ? symbolsChars:"";
    
    if (allowedChars.length !== 0){
        for(let i=0;i<length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
    }
    else{
        window.alert("At least 1 set of character needs to be selected")
    }

    return password;
}