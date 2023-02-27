var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=',]
var passwordLength = 8 || 128


function generatePassword () {
  
  var passwordLength = parseInt(prompt('Choose a number between 8 and 128 for your password length'));
    isNaN(passwordLength)
    if (passwordLength < 8 || passwordLength > 128){
    alert('Oh no! You chose a number less than 8 or greater than 128')
    prompt("Choose a number between 8 and 128 for the length of your password.");
    do {
      alert('Oh no! You chose a number less than 8 or greater than 128')
      prompt("Choose a number between 8 and 128 for the length of your password.");
    }
    while (passwordLength < 8 || passwordLength > 128)
    }
    
  var specialCharacter = parseInt(window.confirm('Would you like your password to contain special characters?  e.g !@#($)%^&*'));
    if (specialCharacter == true){
      available = available.concat(specialCharacter)
    }
    
    var number = parseInt(window.confirm('Would you like your password to contain a number?  e.g 0123456789')); 
    if (number == true){
      available = available.concat(number)
    }
    
    var lowerCase = parseInt(window.confirm('Would you like your password to contain lower case letters?  e.g abcdefghijklmnopqrstuvwxyz'));
    if (lowerCase == true){
      available = available.concat(lowerCase)
    }
    
    var upperCase = parseInt(window.confirm('Would you like your password to contain upper case letters?  e.g BCDEFGHIJKLMNOPQRSTUVWXYZ'));
    if (upperCase == true){
      available = available.concat(upperCase)
    }
    
  var available = []  
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





