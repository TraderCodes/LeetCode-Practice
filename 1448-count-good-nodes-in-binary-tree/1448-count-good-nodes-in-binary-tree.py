# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = rightv
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        
        def number_good_nodes (node, max_encountered) -> int:
            if node is None:
                return 0
            
            m = max (max_encountered, node.val)
            count = number_good_nodes (node.left, m)
            count += number_good_nodes (node.right, m)
            if node.val >= max_encountered:
                count += 1
                
            return count
            
        return number_good_nodes (root, float('-inf'))