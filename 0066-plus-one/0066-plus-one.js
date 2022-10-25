/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        const sum = digits[i] + 1
        if (sum > 9) {
            digits[i] = sum - 10
            if (i == 0) {
                digits.unshift(1)
            }
        } else {
            digits[i] = sum
            return digits
        }
    }
    return digits
};