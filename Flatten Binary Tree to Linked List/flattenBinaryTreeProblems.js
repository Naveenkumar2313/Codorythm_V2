export const flattenBinaryTreeProblems = [
  {
    "id": "fbt-e1",
    "title": "Inorder Traversal",
    "difficulty": "Easy",
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values as a space-separated string.",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    "examples": [
      {
        "input": "1 -1 2 3",
        "output": "1 3 2",
        "explanation": "Inorder traversal: left, root, right."
      }
    ],
    "testCases": [
      {
        "input": "4\n1 -1 2 3",
        "expectedOutput": "1 3 2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef inorder(root):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\n# Output: space separated traversal\n",
      "java": "import java.util.*;\n\nclass TreeNode {\n    int val; TreeNode left, right;\n    TreeNode(int x) { val = x; }\n}\n\npublic class Solution {\n    public static List<Integer> inorderTraversal(TreeNode root) {\n        return new ArrayList<>();\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nstruct TreeNode {\n    int val; struct TreeNode *left, *right;\n};\n// implement inorder\n",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nstruct TreeNode {\n    int val; TreeNode *left, *right;\n};\n// implement inorder\n"
    }
  },
  {
    "id": "fbt-e2",
    "title": "Preorder Traversal",
    "difficulty": "Easy",
    "description": "Given the root of a binary tree, return the preorder traversal of its nodes' values.",
    "constraints": [
      "Number of nodes is in range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    "examples": [
      {
        "input": "1 -1 2 3",
        "output": "1 2 3",
        "explanation": "Preorder: root, left, right."
      }
    ],
    "testCases": [
      {
        "input": "4\n1 -1 2 3",
        "expectedOutput": "1 2 3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def preorder(root): pass",
      "java": "class Solution {}",
      "c": "struct TreeNode* preorder()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "fbt-e3",
    "title": "Postorder Traversal",
    "difficulty": "Easy",
    "description": "Given the root of a binary tree, return the postorder traversal of its nodes' values.",
    "constraints": [
      "Number of nodes is in range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    "examples": [
      {
        "input": "1 -1 2 3",
        "output": "3 2 1",
        "explanation": "Postorder: left, right, root."
      }
    ],
    "testCases": [
      {
        "input": "4\n1 -1 2 3",
        "expectedOutput": "3 2 1",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def postorder(root): pass",
      "java": "class Solution {}",
      "c": "struct TreeNode* postorder()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "fbt-e4",
    "title": "Maximum Depth",
    "difficulty": "Easy",
    "description": "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    "constraints": [
      "Number of nodes is in range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    "examples": [
      {
        "input": "3 9 20 -1 -1 15 7",
        "output": "3",
        "explanation": "Longest path is root to 7 (3 -> 20 -> 7), depth is 3."
      }
    ],
    "testCases": [
      {
        "input": "7\n3 9 20 -1 -1 15 7",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def max_depth(root): pass",
      "java": "class Solution {}",
      "c": "int maxDepth()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "fbt-e5",
    "title": "Same Tree",
    "difficulty": "Easy",
    "description": "Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.",
    "constraints": [
      "The number of nodes in both trees is in the range [0, 100].",
      "-10^4 <= Node.val <= 10^4"
    ],
    "examples": [
      {
        "input": "1 2 3\n1 2 3",
        "output": "true",
        "explanation": "Both trees are structurally identical with identical values."
      }
    ],
    "testCases": [
      {
        "input": "3\n1 2 3\n3\n1 2 3",
        "expectedOutput": "true",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def is_same(p, q): pass",
      "java": "class Solution {}",
      "c": "bool isSame()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "fbt-m1",
    "title": "Flatten Tree to Linked List",
    "difficulty": "Medium",
    "description": "Given the root of a binary tree, flatten the tree into a right-skewed linked list in-place.",
    "constraints": [
      "Number of nodes is in range [0, 500].",
      "-100 <= Node.val <= 100"
    ],
    "examples": [
      {
        "input": "1 2 5 3 4 -1 6",
        "output": "1 2 3 4 5 6",
        "explanation": "The flattened tree preorder sequence."
      }
    ],
    "testCases": [
      {
        "input": "7\n1 2 5 3 4 -1 6",
        "expectedOutput": "1 2 3 4 5 6",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def flatten(root): pass",
      "java": "class Solution {}",
      "c": "void flatten()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "fbt-m2",
    "title": "Right Side View",
    "difficulty": "Medium",
    "description": "Given the root of a binary tree, imagine yourself standing on the right side of it. Return the values of the nodes you can see ordered from top to bottom.",
    "constraints": [
      "Number of nodes is in range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    "examples": [
      {
        "input": "1 2 3 -1 5 -1 4",
        "output": "1 3 4",
        "explanation": "The right side view is root 1, right 3, and rightmost at next level 4."
      }
    ],
    "testCases": [
      {
        "input": "7\n1 2 3 -1 5 -1 4",
        "expectedOutput": "1 3 4",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def right_view(root): pass",
      "java": "class Solution {}",
      "c": "int* rightView()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "fbt-m3",
    "title": "Populate Next Right Pointers",
    "difficulty": "Medium",
    "description": "Given a perfect binary tree, populate each next pointer to point to its next right node. If there is no next right node, set it to NULL. Return the values level-by-level.",
    "constraints": [
      "Number of nodes is in range [0, 500].",
      "-100 <= Node.val <= 100"
    ],
    "examples": [
      {
        "input": "1 2 3 4 5 6 7",
        "output": "1 # 2 3 # 4 5 6 7 #",
        "explanation": "Each level output is terminated by #."
      }
    ],
    "testCases": [
      {
        "input": "7\n1 2 3 4 5 6 7",
        "expectedOutput": "1 # 2 3 # 4 5 6 7 #",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def connect(root): pass",
      "java": "class Solution {}",
      "c": "struct TreeNode* connect()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "fbt-m4",
    "title": "Flatten BST to Sorted List",
    "difficulty": "Medium",
    "description": "Given the root of a binary search tree (BST), flatten it into a right-skewed sorted list in-place (inorder sequence). Return the new root.",
    "constraints": [
      "Number of nodes is in range [0, 500].",
      "-100 <= Node.val <= 100"
    ],
    "examples": [
      {
        "input": "4 2 5 1 3",
        "output": "1 2 3 4 5",
        "explanation": "Sorted flattened list values."
      }
    ],
    "testCases": [
      {
        "input": "5\n4 2 5 1 3",
        "expectedOutput": "1 2 3 4 5",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def flatten_bst(root): pass",
      "java": "class Solution {}",
      "c": "struct TreeNode* flattenBST()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "fbt-m5",
    "title": "Path Sum II",
    "difficulty": "Medium",
    "description": "Given the root of a binary tree and an integer `targetSum`, return all root-to-leaf paths where the sum of the node values in the path equals `targetSum`.",
    "constraints": [
      "Number of nodes in the tree is in range [0, 500].",
      "-1000 <= Node.val <= 1000",
      "-1000 <= targetSum <= 1000"
    ],
    "examples": [
      {
        "input": "5 4 8 11 -1 13 4 7 2 -1 -1 -1 -1 5 1\n22",
        "output": "5 4 11 2\n5 8 4 5",
        "explanation": "Two paths sum up to 22."
      }
    ],
    "testCases": [
      {
        "input": "15\n5 4 8 11 -1 13 4 7 2 -1 -1 -1 -1 5 1\n22",
        "expectedOutput": "5 4 11 2\n5 8 4 5",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def path_sum(root, target): pass",
      "java": "class Solution {}",
      "c": "void pathSum()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "fbt-h1",
    "title": "Serialize and Deserialize",
    "difficulty": "Hard",
    "description": "Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. Return the serialized representation of the tree.",
    "constraints": [
      "The number of nodes is in range [0, 1000].",
      "-1000 <= Node.val <= 1000"
    ],
    "examples": [
      {
        "input": "1 2 3 -1 -1 4 5",
        "output": "1,2,3,null,null,4,5",
        "explanation": "The output matches standard serialization."
      }
    ],
    "testCases": [
      {
        "input": "7\n1 2 3 -1 -1 4 5",
        "expectedOutput": "1,2,3,null,null,4,5",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def serialize(root): pass",
      "java": "class Solution {}",
      "c": "char* serialize()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "fbt-h2",
    "title": "Maximum Path Sum",
    "difficulty": "Hard",
    "description": "Given the root of a binary tree, return the maximum path sum of any non-empty path. A path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections.",
    "constraints": [
      "The number of nodes is in range [1, 30000].",
      "-1000 <= Node.val <= 1000"
    ],
    "examples": [
      {
        "input": "-10 9 20 -1 -1 15 7",
        "output": "42",
        "explanation": "The maximum path sum is 15 + 20 + 7 = 42."
      }
    ],
    "testCases": [
      {
        "input": "7\n-10 9 20 -1 -1 15 7",
        "expectedOutput": "42",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def max_path_sum(root): pass",
      "java": "class Solution {}",
      "c": "int maxPathSum()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "fbt-h3",
    "title": "Recover BST",
    "difficulty": "Hard",
    "description": "Two nodes of a Binary Search Tree (BST) are swapped by mistake. Recover the tree without changing its structure. Output the recovered tree values in inorder.",
    "constraints": [
      "Number of nodes is in range [2, 1000].",
      "-2^31 <= Node.val <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "1 3 -1 -1 2",
        "output": "1 2 3",
        "explanation": "Swapped node 3 and 2 are recovered to get sorted inorder [1, 2, 3]."
      }
    ],
    "testCases": [
      {
        "input": "5\n1 3 -1 -1 2",
        "expectedOutput": "1 2 3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def recover_tree(root): pass",
      "java": "class Solution {}",
      "c": "void recoverTree()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "fbt-h4",
    "title": "Construct Tree Preorder Inorder",
    "difficulty": "Hard",
    "description": "Given two integer arrays `preorder` and `inorder` where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree (printed as level-order string).",
    "constraints": [
      "1 <= preorder.length <= 3000",
      "inorder.length == preorder.length",
      "-3000 <= preorder[i], inorder[i] <= 3000",
      "preorder and inorder consist of unique values."
    ],
    "examples": [
      {
        "input": "3 9 20 15 7\n9 3 15 20 7",
        "output": "3 9 20 null null 15 7",
        "explanation": "The constructed binary tree is printed level-order."
      }
    ],
    "testCases": [
      {
        "input": "5\n3 9 20 15 7\n5\n9 3 15 20 7",
        "expectedOutput": "3 9 20 null null 15 7",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def build_tree(preorder, inorder): pass",
      "java": "class Solution {}",
      "c": "struct TreeNode* buildTree()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "fbt-h5",
    "title": "BST Iterator",
    "difficulty": "Hard",
    "description": "Implement the `BSTIterator` class that represents an iterator over the in-order traversal of a binary search tree. Given the tree and operation sequences, return the outputs of `next()` and `hasNext()` operations.",
    "constraints": [
      "The number of nodes is in range [1, 10^5].",
      "0 <= Node.val <= 10^6",
      "At most 10^5 calls to next and hasNext."
    ],
    "examples": [
      {
        "input": "7 3 15 -1 -1 9 20\nnext next hasNext next hasNext next hasNext next hasNext",
        "output": "3 9 true 15 true 20 false",
        "explanation": "Outputs of operations in sequence."
      }
    ],
    "testCases": [
      {
        "input": "7\n7 3 15 -1 -1 9 20\n9\nnext next hasNext next hasNext next hasNext next hasNext",
        "expectedOutput": "3 9 true 15 true 20 false",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "class BSTIterator: pass",
      "java": "class BSTIterator {}",
      "c": "struct BSTIterator {}",
      "cpp": "class BSTIterator {}"
    }
  }
];
