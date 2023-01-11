function convertToRoman(num){
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let rest = num;
    let output = "";
    while(rest > 0){
        arabic.every((element,i) => {
            if(rest >= element){   
                rest -= element;
                output += roman[i];
                return false;
            }
            else{
                return true;
            } 
        });
    }
    return output;
}
console.log(convertToRoman(1900));