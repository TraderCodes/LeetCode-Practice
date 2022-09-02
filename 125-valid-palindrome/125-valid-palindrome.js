/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   s = s.replace(/[^a-z0-9]/gi,"")
    let leftIndex = 0 
    let rightIndex = s.length-1
    while(leftIndex < rightIndex){
        if(s[leftIndex].toUpperCase() !== s[rightIndex].toUpperCase()){
            return false
        }
        leftIndex ++
        rightIndex --
        
    }
    return true
    
};


// Pseudo Code:
// 1. Use Regex to get get rid of special characters.
// 2. Create variable for left index to keep track of left pointer to increment.
// 3. Create variable for right index to keep track of right pointer to decrement.
// 4. Create while loop to iterate through string (until each pointer meets).
// a. Create condition to see if letters of each pointer don't equal to each other. Return false.
// b. Increment left pointer.
// c. Decrement right pointer.
// 4. Return true (loop through string without returning false.)

// Time Complexity: O(n): loop
// Space Complexity: O(1): pointers variable