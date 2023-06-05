function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

var levelOrder = function(root) {
  let result = [];
  
  function helper(node, level) {
      if (node === null) return;
      
      if (result[level] === undefined) {
          result[level] = [node.val];
      } else {
          result[level].push(node.val);
      }
      
      helper(node.left, level + 1);
      helper(node.right, level + 1);
  }
  
  helper(root, 0);
  
  return result;
};

// 주어진 트리 예시
let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
result = levelOrder(root); // [[3], [9, 20], [15, 7]]

result.forEach(item => console.log(item));
