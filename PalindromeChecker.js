function palindrome(input) {
    const onlyletters = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const len = onlyletters.length;
    for(let i=0; i<Math.floor(len/2); i++){
      if (onlyletters[i]!=onlyletters[len -i-1]){
        return false;
      }
    }
    return true;
  }
  
  console.log(palindrome("ey1e"));