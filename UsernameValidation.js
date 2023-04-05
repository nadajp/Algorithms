function CodelandUsernameValidation(str) { 
    let valid = true;
    
    if (str.length < 4 || str.length > 25) {
      valid = false;
     } else {
        valid = validateRegex(str);
    }
     
    return valid ? "true" : "false"; 
  }
  
  function validateRegex(str) {
    return /^[A-Za-z]\w+[A-Za-z0-9]$/.test(str)
  }
     

  let usernameF1 = "bbbbbbb_"
  let usernameF2 = "a2345678901s23456789123456"
  console.log(CodelandUsernameValidation(usernameF2));