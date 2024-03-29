//write a isValidPassword function
//it accepts 2 arguments: password and username
//password must:
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain the username
// If all requirements are met, return true.
// Otherwise: false



function isValidPassword(username, password) {
 

    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const theSame = password === username;
    if(tooShort || hasSpace || theSame) return false;
    return true;
}



console.log(isValidPassword('dudebro', "iloveyou123"));