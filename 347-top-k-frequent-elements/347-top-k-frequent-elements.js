/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let topKMap = new Map()
    for(const num of nums){
        topKMap.set(num,(topKMap.has(num) ? topKMap.get(num) + 1 : 1));
    }
    const sortedMap = [...topKMap.entries()].sort((a, b) => b[1] - a[1]);
    const returnKeys = sortedMap.map((elem) => elem[0]);
    return returnKeys.splice(0,k)
};