var lowerCase = ('abcdefghijklmnopqrstuvwxyz')
var upperCase = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
var number = ('0123456789')
var specialCharacter = ('!@#$%^&()*')
var passwordLength = 8 || 128


function generatePassword () {
  
  var passwordLength = parseInt(prompt('Choose a number between 8 and 128 for your password length'));
    isNaN(passwordLength)
    if (passwordLength < 8 || passwordLength > 128){
    alert('Oh no! You chose a number less than 8 or greater than 128')
    prompt("Choose a number between 8 and 128 for the length of your password.");
    }
    
    var specialCharacter = parseInt(prompt('Would you like your password to contain special characters?  e.g !@#($)%^&*    Type:  "Yes" or "No"'));
    
    var number = parseInt(prompt('Would you like your password to contain a number?  e.g 0123456789    Type "Yes" or "No"')); 
    
    var lowerCase = parseInt(prompt('Would you like your password to contain lower case letters?  e.g abcdefghijklmnopqrstuvwxyz    Type:  "Yes" or "No"'));
    
    var upperCase = parseInt(prompt('Would you like your password to contain upper case letters?  e.g BCDEFGHIJKLMNOPQRSTUVWXYZ    Type:  "Yes" or "No"'));
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





