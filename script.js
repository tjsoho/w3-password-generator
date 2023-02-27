var lowerCase = ('abcdefghijklmnopqrstuvwxyz')
var upperCase = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
var number = ('0123456789')
var specialCharacter = ('!@#$%^&()*')
var passwordLength = 8 || 128


function generatePassword () {
  // 
  prompt("Choose a number between 8 and 128 for the length of your password.");
    var length = parseInt(prompt('How many characters would you like your password to contain?'));
    // If user input is less than 8 or greater than 128 send a prompt message to let them know.
    if (passwordLength < 8 || passwordLength > 128)
    isNaN(passwordLength)
    alert('Oh no! You chose a number less than 8 or greater than 128')
    prompt("Choose a number between 8 and 128 for the length of your password.");

  prompt('Would you like your password to contain special characters?  e.g' + '       ' + specialCharacter);
  
  prompt('Would you like your password to contain a number?  e.g' + '       ' + number); 

  prompt('Would you like your password to contain lower case letters?  e.g ' + '       ' + lowerCase);
  
  prompt('Would you like your password to contain upper case letters?  e.g ' + '       ' + upperCase);
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





