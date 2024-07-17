const reverseString = function(word) {
    let string = "";
    if(word === ""){
        return string;
    }
    for (let i = word.length; i >= 0; i--){
        string += word.charAt(i);
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
