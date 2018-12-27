const { make_tree } = require('../utils');
const test = (make_tree([3,9,27], [0]))[0];
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};
console.log(maxDepth(test));