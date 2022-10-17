/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    //sort out negative numbers since they can't ever be a palindrome
    if(x >= 0) {
        return (x == x.toString().split("").reverse().join(""));

    } else {
        return false;

    }

};