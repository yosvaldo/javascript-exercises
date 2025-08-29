const palindromes = function (one) {
    one = one.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    let length = one.length;
    let palindromes= '';
    let result;

    for (let i=length-1; i>=0; i--){
        palindromes += one.charAt(i);
    }

    return one === palindromes;

};

// Do not edit below this line
module.exports = palindromes;
