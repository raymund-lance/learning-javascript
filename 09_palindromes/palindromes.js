const palindromes = function (string) {
    const lettersNumbers = 'abcdefghijklmnopqrstuvwxyz1234567890';

    const cleanString = string
        .toLowerCase()
        .split('')
        .filter((getSameString) => lettersNumbers.includes(getSameString))
        .join('');

    const reverseString = cleanString.split('').reverse().join('');

    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
