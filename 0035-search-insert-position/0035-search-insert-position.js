/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = 0;
    while(nums[index] <= target && index < nums.length){
        if(nums[index] === target)
        return index;

        ++index;
    } 

    return index;
};