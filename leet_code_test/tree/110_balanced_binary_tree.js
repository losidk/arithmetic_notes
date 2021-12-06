//Given a binary tree, determine if it is height-balanced.
//
// For this problem, a height-balanced binary tree is defined as:
//
//
// a binary tree in which the left and right subtrees of every node differ in
//height by no more than 1.
//
//
//
// Example 1:
//
//
//Input: root = [3,9,20,null,null,15,7]
//Output: true
//
//
// Example 2:
//
//
//Input: root = [1,2,2,3,3,null,null,4,4]
//Output: false
//
//
// Example 3:
//
//
//Input: root = []
//Output: true
//
//
//
// Constraints:
//
//
// The number of nodes in the tree is in the range [0, 5000].
// -10⁴ <= Node.val <= 10⁴
//
// Related Topics Tree Depth-First Search Binary Tree 👍 4681 👎 267


//leetcode submit region begin(Prohibit modification and deletion)
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) {
    return true
  }
  let heightDiff = Math.abs(maxDepth(root.left) - maxDepth(root.right))
  if (heightDiff > 1) {
    return false
  } else {
    return isBalanced(root.left) && isBalanced(root.right)
  }
};

function maxDepth(root) {
  if (!root) {
    return 0
  }
  return traversalTree(root, 1)
};

function traversalTree(root, index) {
  if (!root) {
    return index
  }
  if (root.left || root.right) {
    index = index + 1
  }
  return Math.max(traversalTree(root.left, index), traversalTree(root.right, index))
}

//leetcode submit region end(Prohibit modification and deletion)
