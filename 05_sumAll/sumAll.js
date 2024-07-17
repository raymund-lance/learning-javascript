const sumAll = function(firstNum, secondNum) {
    const message = "ERROR";
    let sum = 0;
    if(!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return message;
    }
    else if(firstNum < 0 || secondNum < 0) {
        return message;
    }
    else if(firstNum < secondNum) {
        for(let i = firstNum; i < secondNum; i++) {
            sum += i;
        }
        return sum + secondNum;
    }
    else if(firstNum > secondNum) {
        for(let i = secondNum; i < firstNum; i++) {
            sum += i;
        }
        return sum + firstNum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
