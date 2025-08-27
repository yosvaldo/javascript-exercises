const sumAll = function(start,end) {
    let result = 0;

    if (!(start < 0 || end < 0 || start %1 != 0 || end %1 != 0 || typeof start != 'number' || typeof end != 'number')){

        if (start<=end){
        for (let i=start; i<=end; i++){
            result += i;
        }
        }

        else {
        for (let i=end; i<=start; i++){
            result += i;
        }    
        }
    }

    else {
        result = 'ERROR';
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
