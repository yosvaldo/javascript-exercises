const reverseString = function(text) {
let length = text.length;
let string = '';
for (let i=length-1; i>=0; i--){
    string += text.charAt(i);
}
return string;
};

// Do not edit below this line
module.exports = reverseString;
