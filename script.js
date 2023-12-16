// Document elements
let password=document.getElementById("password")
const genBtn=document.getElementById("generate")

// characters in password
let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
let numChars = "0123456789";
let specialChars = "a'+,.-/:;<>=?[]_{}`~!@#$%^&*()";

//generate password
function passGen() {
  let passwordOptions = '';
  let finalPassword = '';
  // let passLength = promptLength();
  // let upperCaseChars = 
  // let lowerCaseChars = ("lowercase")
  // let numChars = writePassword("numeric")
  // let specialChars = getChoice("special")
  // let selectCharType = false;
  //selecting atleast 1 character type
  let length = parseInt(
    prompt('How many characters would you like your password to contain?')
  )
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    window.location.reload(true)
  }
  if (length > 128) {
    alert('Password length must be less than 129 characters');
    window.location.reload(true)
  }
  // while (selectCharType == false) {
  //   let lowerCaseChars = getChoice ("lowercase")
  //   let upperCaseChars = getChoice ("uppercase")
  //   let numChars = getChoice("numeric")
  //   let specialChars = getChoice("special")
  // }


  // PROMPTS

  // Variable to store boolean regarding the inclusion of numbers.
let useNumChars = confirm(
  'Click OK to confirm including numbers.'
);
// Variable to store boolean regarding the inclusion of lowercase characters
let useLowerCaseChars = confirm(
  'Click OK to confirm including lowercase characters.'
);
// Variable to store boolean regarding the inclusion of uppercase characters
let useUpperCaseChars = confirm(
  'Click OK to confirm including uppercase characters.'
);
  //Variable to store boolean regarding the inclusion of special characters
let useSpecialChars = confirm(
  'Click OK to confirm including special characters.'
);


if(useNumChars) {
  passwordOptions+= numChars
}
if(useLowerCaseChars) {
  passwordOptions+= lowerCaseChars
}
if(useUpperCaseChars) {
  passwordOptions+= upperCaseChars
}
if(useSpecialChars) {
  passwordOptions+= specialChars
}

//useNumChars
for (let i = 0; i <= length; i++) {
  let randomNum = Math.floor(Math.random() * passwordOptions.length);
  finalPassword += passwordOptions.substring(randomNum, randomNum +1);
 }
  return finalPassword
}

// Write password to the #password input
function writePassword() {
  let password = passGen();
  let passwordText = document.querySelector("#password");
  passwordText.innerHTML = password;
}

// Add event listener to generate button
genBtn.addEventListener("click", writePassword);