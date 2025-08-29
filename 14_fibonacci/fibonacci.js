const fibonacci = function(n) {
    switch (+n) {
        
        case 0 : return 0;
        break;
        
        case 1 : 
        case 2 : return 1;
        break;

        default :
        if (n < 0){
            return "OOPS";
        }

        else {
            let a = 1, b = 1;
            for (let i = 3; i <= n; i++) {
            let t = a + b;
            a = b;
            b = t;
            }
            return b;
        }
}};



// Do not edit below this line
module.exports = fibonacci;