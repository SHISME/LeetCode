const { make_tree } = require('../utils');

const test1 = (make_tree([1,-2,-3,1,3,-2,null,-1], [0]))[0];

/**
 * 思路：
 * 
 * 用递归的思想，从叶子节点往上走，如果要往上走，我们只能选择走左边或者右边或者不走，
 * 这样我们就遍历了所有的情况，选取里面最大的情况则为最优的结果
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let result = root.val;
    dfs(root);
    function dfs(root) {
        if (!root) return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);
        result = Math.max(result, root.val, left + root.val, right + root.val, root.val + left + right );
        return Math.max(root.val, root.val + left, root.val + right);
    }
    return result;
    
};
console.log(maxPathSum(test1));