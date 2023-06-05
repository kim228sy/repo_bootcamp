function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

var levelOrder = function(root) {
  if (!root) return []; // root가 null이면 빈 배열 반환
  let result = [];
  let queue = [root];

  while (queue.length !== 0) {
      let levelSize = queue.length; // 현재 level의 노드 개수
      let currentLevel = []; // 현재 level의 노드 값을 저장할 배열

      for (let i = 0; i < levelSize; i++) {
          let currentNode = queue.shift(); // 현재 노드를 queue에서 제거
          currentLevel.push(currentNode.val); // 현재 노드의 값을 currentLevel에 추가
          

          if (currentNode.left !== null) {
              queue.push(currentNode.left); // 왼쪽 자식 노드를 queue에 추가
          }
          if (currentNode.right !== null) {
              queue.push(currentNode.right); // 오른쪽 자식 노드를 queue에 추가
          }
      }
      result.push(currentLevel); // 각 level의 노드 값 배열을 결과에 추가
  }

  return result;
};

// 주어진 트리 예시
let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

result = levelOrder(root); // [[3], [9, 20], [15, 7]]

result.forEach(item => console.log(item));
