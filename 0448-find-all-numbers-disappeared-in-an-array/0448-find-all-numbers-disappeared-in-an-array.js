/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var lookup= {}
    var bag=[];
    for(i=0;i<nums.length;i++)
    {
        var key=nums[i]
        if(lookup[key]==undefined)
        {
            lookup[key]=1
        }
    }
    for(j=1;j<=nums.length;j++)
    {
        var key1=j
        if(lookup[key1]==undefined)
        {
            bag.push(key1);
        }
    }
    return bag;
};