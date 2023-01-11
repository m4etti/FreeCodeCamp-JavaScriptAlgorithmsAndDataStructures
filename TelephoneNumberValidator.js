function telephoneCheck(str) {
    let numbers = str.replace(/[^0-9]/g, "");   
    let wrongcharacter = str.replace(/[0-9 ()-]/g, ""); 
    let brackets = str.replace(/[^()]/g, "");   
    let nospaces = str.replace(" ", "");
    let split = str.split(/[\s()-]+/).filter(element => element); //slit to only numbers

    if (wrongcharacter.length !=0){ // fail if some other characters 
        return false;
    }
    if (numbers.length != 10 && numbers.length != 11){  // should always contain 11 numbers 
        return false;
    }
    if (numbers.length == 11 && str.charAt(0) != 1 ){   //county code always 1 
        return false;
    }
    if (brackets.length != 0 && brackets.length !=2){ // if brackets then there should be 2
        return false;
    }
    if (brackets.length == 2){  // brackets in right place?
        if (numbers.length == 10 && (str.charAt(0) != "(" || str.charAt(4) != ")")){
            return false;         
        }
        else if (numbers.length == 11 && (nospaces.charAt(1) != "(" || nospaces.charAt(5) != ")")){
            console.log(nospaces.charAt(1), nospaces.charAt(5))
            return false;
        }
    }
    if (numbers.length == 11 &&     // splits right length?
        split.length != 1 &&(
        split[0].length != 1 ||
        split[1].length != 3 ||
        split[2].length != 3 ||
        split[3].length != 4)){
            return false
        }
    return !(numbers.length == 10 &&  // splits right length?
        split.length != 1 &&(
        split[0].length != 3 ||
        split[1].length != 3 ||
        split[2].length != 4));
}
  
console.log(telephoneCheck("( 555) 555-5555 "));