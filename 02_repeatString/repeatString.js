const repeatString = function(word, number) {
    if(number < 0) {
        return "ERROR"
    }
    let repeat = "";
    for(let i = 0; i < number; i++) {
        repeat += word;
    }
    return repeat
};

// Do not edit below this line
module.exports = repeatString;
