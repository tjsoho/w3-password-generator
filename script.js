var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
var specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=',]
var passwordLengthArray = 8 || 128


function generatePassword () {
  var available = []  
  var passwordLength = parseInt(prompt('Choose a number between 8 and 128 for your password length'));
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
      alert('Oh no! You chose a number less than 8 or greater than 128')
      passwordLength = prompt("Choose a number between 8 and 128 for the length of your password.");
    }
    
  var specialCharacterResponse = window.confirm('Would you like your password to contain special characters?  e.g !@#($)%^&*');
    if (specialCharacterResponse == true){
      console.log('special worked')
      available = available.concat(specialCharacterArray)
    }
    
  var number = window.confirm('Would you like your password to contain a number?  e.g 0123456789'); 
    if (number == true){
      available = available.concat(number)
    }
  
  var lowerCase = window.confirm('Would you like your password to contain lower case letters?  e.g abcdefghijklmnopqrstuvwxyz');
    if (lowerCase == true){
      available = available.concat(lowerCase)
    }
  
  var upperCase = window.confirm('Would you like your password to contain upper case letters?  e.g BCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (upperCase == true){
      available = available.concat(upperCase)
    }
    
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





