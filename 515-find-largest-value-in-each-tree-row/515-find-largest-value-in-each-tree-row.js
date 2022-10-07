/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if(!root) return [];
    
    let queue = [root];
    let res = [];
    
    
    while(queue.length > 0) {
        let rowLength = queue.length;
        let maxValue = -Infinity;
        
        while(rowLength != 0) {
            let node = queue.shift();
            
            maxValue = Math.max(maxValue, node.val);
            
            if(node.left) {
                queue.push(node.left);
            }
            
            if(node.right) {
                queue.push(node.right);
            }
            
            rowLength--;
        }
        
        res.push(maxValue);
    }
    return res;
};