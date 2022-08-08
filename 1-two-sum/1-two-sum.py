class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap = {} # value : index
        
        for i, n in enumerate(nums):
            diff = target - n
            if diff in prevMap:
                return {prevMap[diff] , i}
            prevMap[n] = i
        return        
        
        
        
        
        
        
        
#         make a hashmap the maps the value with index



# using hashmap cause o(n) space
# going through each number 1 wasted o(n) time
        