class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        
        # solution 1
        return sorted(t) == sorted(s)
        # if len(s) != len(t):
        #     return False
        # countS , countT = {} ,{}
      
        dic1, dic2 = {}, {}
        for item in s:
            dic1[item] = dic1.get(item, 0) + 1
        for item in t:
            dic2[item] = dic2.get(item, 0) + 1
        return dic1 == dic2

#  first create a hashmap
#  check if the length are the same 
        