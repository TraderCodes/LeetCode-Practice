class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
#       create hash
        hashset = set()
        for n in nums:
            if n in hashset:
                return True
#               if it doesn't contains duplicate we add value
            hashset.add(n)
        return False
                
                
                
# 3 different ways to solve
# brute force , sorting and using hashset