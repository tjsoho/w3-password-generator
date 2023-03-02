// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // The below code is what outputs the random password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
var specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=',]
var passwordLengthArray = 8 || 128

function generatePassword () {
// Var available will be where all the 'confirmed' criterias are stored to be used to generate the password
  var available = []  
  var passwordLength = parseInt(prompt('Choose a number between 8 and 128 for your password length'));
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
      alert('Oh no! You chose a number less than 8 or greater than 128')
      passwordLength = prompt("Choose a number between 8 and 128 for the length of your password.");
    }
// Folloing Vars are to include special characters, numbers, lower and upper case letters
  var specialCharacterResponse = window.confirm('Would you like your password to contain special characters?  e.g !@#($)%^&*');
    if (specialCharacterResponse == true){
      available = available.concat(specialCharacterArray)
    }
    
  var numberResponse = window.confirm('Would you like your password to contain a number?  e.g 0123456789'); 
    if (numberResponse == true){
      available = available.concat(numberArray)
    }
  
  var lowerCaseResponse = window.confirm('Would you like your password to contain lower case letters?  e.g abcdefghijklmnopqrstuvwxyz');
    if (lowerCaseResponse == true){
      available = available.concat(lowerCaseArray)
    }
  
  var upperCaseResponse = window.confirm('Would you like your password to contain upper case letters?  e.g BCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (upperCaseResponse == true){
      available = available.concat(upperCaseArray)
    }

//If all responses are flase the loop below prompt the user to choose at least one
  if (
      specialCharacterResponse == false
      &&
      numberResponse == false
      &&
      lowerCaseResponse == false
      &&
      upperCaseResponse == false
    ){
      alert('Whoops! Please make sure you choose at least 1 of the criteria options')
      generatePassword()
    }
      
// Variable for the length of password chosen by the user    
 var userLength = passwordLength
   
// Loop for generating the password itself however many times the user indicated.
 let userPassword = "";
 for (var i = 0; i < passwordLength; i++) {
   let random = Math.floor(Math.random() * available.length);
   userPassword += available[random];
 }

// This returns the password after it's been generated so the user can see it
  return userPassword;
}
