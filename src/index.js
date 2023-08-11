module.exports = function reverse(n) {
    const numberString = n.toString();
    let reversedString = "";

    for (let i = numberString.length - 1; i >= 0; i--) {
        reversedString += numberString[i];
    }

    return parseInt(reversedString);
};
