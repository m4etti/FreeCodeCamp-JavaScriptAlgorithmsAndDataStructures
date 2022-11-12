function rot13(input){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const encodedAlphabet = "NOPQRSTUVWXYZABCDEFGHIJKLM".split("");
    let map = new Map();
    for(let i = 0; i< alphabet.length; i++){
        map.set(encodedAlphabet[i], alphabet[i])
    }
    let output = input.split("").map(x => {
        if (map.has(x)){
            return map.get(x);
        }
        else{
            return x;
        }
    });
    output = output.join("");
    return output;

}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));