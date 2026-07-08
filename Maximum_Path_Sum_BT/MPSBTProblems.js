export const maximumPathSumProblems = [
  {
  id: 'mpsbt-e1',
  title: 'Path Sum',
  difficulty: 'Easy',
  description: 'Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding all the node values along the path equals targetSum. Otherwise, return false.\n\nA leaf is a node with no left or right child.',
  constraints: [
    'The number of nodes in the tree is in the range [0, 5000].',
    '-1000 <= Node.val <= 1000',
    '-1000 <= targetSum <= 1000'
  ],
  examples: [
    {
      input: '5 4 8 11 null 13 4 7 2 null null null 1\n22',
      output: 'true',
      explanation: 'The root-to-leaf path 5 → 4 → 11 → 2 has a sum of 22.'
    },
    {
      input: '1 2 3\n5',
      output: 'false',
      explanation: 'There is no root-to-leaf path whose sum equals 5.'
    }
  ],
  testCases: [
    {
      input: '5 4 8 11 null 13 4 7 2 null null null 1\n22',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '1 2 3\n5',
      expectedOutput: 'false',
      hidden: false
    }
  ],
  starterCode: {
    python: 'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Solution:\n    def hasPathSum(self, root, targetSum):\n        # Write your code here\n        pass',

    java: 'class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int val) {\n        this.val = val;\n    }\n}\n\nclass Main {\n    public boolean hasPathSum(TreeNode root, int targetSum) {\n        // Write your code here\n    }\n}',

    c: '#include <stdbool.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode *left;\n    struct TreeNode *right;\n};\n\nbool hasPathSum(struct TreeNode* root, int targetSum) {\n    // Write your code here\n}',

    cpp: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n\n    TreeNode(int x) {\n        val = x;\n        left = right = nullptr;\n    }\n};\n\nclass Solution {\npublic:\n    bool hasPathSum(TreeNode* root, int targetSum) {\n        // Write your code here\n    }\n};'
  }
},{
  id: 'mpsbt-e2',
  title: 'Maximum Depth of Binary Tree',
  difficulty: 'Easy',
  description: 'Given the root of a binary tree, return its maximum depth.\n\nThe maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
  constraints: [
    'The number of nodes in the tree is in the range [0, 10000].',
    '-100 <= Node.val <= 100'
  ],
  examples: [
    {
      input: '3 9 20 null null 15 7',
      output: '3',
      explanation: 'The longest path from the root node to a leaf contains 3 nodes.'
    },
    {
      input: '1 null 2',
      output: '2',
      explanation: 'The longest path is 1 → 2.'
    }
  ],
  testCases: [
    {
      input: '3 9 20 null null 15 7',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '1 null 2',
      expectedOutput: '2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Solution:\n    def maxDepth(self, root):\n        # Write your code here\n        pass',

    java: 'class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int val) {\n        this.val = val;\n    }\n}\n\nclass Solution {\n    public int maxDepth(TreeNode root) {\n        // Write your code here\n    }\n}',

    c: '#include <stdio.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode *left;\n    struct TreeNode *right;\n};\n\nint maxDepth(struct TreeNode* root) {\n    // Write your code here\n}',

    cpp: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n\n    TreeNode(int x) {\n        val = x;\n        left = right = nullptr;\n    }\n};\n\nclass Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        // Write your code here\n    }\n};'
  }
},{
  id: 'mpsbt-e3',
  title: 'Maximum Root-to-Leaf Path Sum',
  difficulty: 'Easy',
  description: 'Given the root of a binary tree, return the maximum possible sum of node values along any path starting from the root node and ending at a leaf node.\n\nA leaf is a node with no left or right child.',
  constraints: [
    'The number of nodes in the tree is in the range [1, 10000].',
    '-1000 <= Node.val <= 1000'
  ],
  examples: [
    {
      input: '1 2 3',
      output: '4',
      explanation: 'The maximum root-to-leaf path is 1 → 3 with a sum of 4.'
    },
    {
      input: '10 5 15 2 7',
      output: '25',
      explanation: 'The maximum root-to-leaf path is 10 → 15 with a sum of 25.'
    }
  ],
  testCases: [
    {
      input: '1 2 3',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '10 5 15 2 7',
      expectedOutput: '25',
      hidden: false
    }
  ],
  starterCode: {
    python: 'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Solution:\n    def maxRootToLeafSum(self, root):\n        # Write your code here\n        pass',

    java: 'class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int val) {\n        this.val = val;\n    }\n}\n\nclass Solution {\n    public int maxRootToLeafSum(TreeNode root) {\n        // Write your code here\n    }\n}',

    c: '#include <stdio.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode *left;\n    struct TreeNode *right;\n};\n\nint maxRootToLeafSum(struct TreeNode* root) {\n    // Write your code here\n}',

    cpp: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n\n    TreeNode(int x) {\n        val = x;\n        left = right = nullptr;\n    }\n};\n\nclass Solution {\npublic:\n    int maxRootToLeafSum(TreeNode* root) {\n        // Write your code here\n    }\n};'
  }
},{
  id: 'mpsbt-m1',
  title: 'Path Sum II',
  difficulty: 'Medium',
  description: 'Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values equals targetSum.\n\nEach path should be returned as a list of integers. Return the paths in any order.',
  constraints: [
    'The number of nodes in the tree is in the range [0, 5000].',
    '-1000 <= Node.val <= 1000',
    '-1000 <= targetSum <= 1000'
  ],
  examples: [
    {
      input: '5 4 8 11 null 13 4 7 2 null null 5 1\n22',
      output: '[[5,4,11,2],[5,8,4,5]]',
      explanation: 'There are two root-to-leaf paths whose sum is equal to 22.'
    },
    {
      input: '1 2 3\n5',
      output: '[]',
      explanation: 'There is no root-to-leaf path whose sum equals 5.'
    }
  ],
  testCases: [
    {
      input: '5 4 8 11 null 13 4 7 2 null null 5 1\n22',
      expectedOutput: '[[5,4,11,2],[5,8,4,5]]',
      hidden: false
    },
    {
      input: '1 2 3\n5',
      expectedOutput: '[]',
      hidden: false
    }
  ],
  starterCode: {
    python: 'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Solution:\n    def pathSum(self, root, targetSum):\n        # Write your code here\n        pass',

    java: 'import java.util.*;\n\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int val) {\n        this.val = val;\n    }\n}\n\nclass Solution {\n    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode *left;\n    struct TreeNode *right;\n};\n\nvoid pathSum(struct TreeNode* root, int targetSum) {\n    // Write your code here\n}',

    cpp: '#include <vector>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n\n    TreeNode(int x) {\n        val = x;\n        left = right = nullptr;\n    }\n};\n\nclass Solution {\npublic:\n    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {\n        // Write your code here\n        return {};\n    }\n};'
  }
},{
  id: 'mpsbt-m2',
  title: 'Path Sum III',
  difficulty: 'Medium',
  description: 'Given the root of a binary tree and an integer targetSum, return the total number of paths whose sum of node values equals targetSum.\n\nThe path does not need to start at the root or end at a leaf, but it must always travel downward from parent to child.',
  constraints: [
    'The number of nodes in the tree is in the range [0, 1000].',
    '-1000000000 <= Node.val <= 1000000000',
    '-1000 <= targetSum <= 1000'
  ],
  examples: [
    {
      input: '10 5 -3 3 2 null 11 3 -2 null 1\n8',
      output: '3',
      explanation: 'There are three downward paths whose sum is equal to 8.'
    },
    {
      input: '5 4 8 11 null 13 4 7 2 null null 5 1\n22',
      output: '3',
      explanation: 'There are three downward paths whose sum is equal to 22.'
    }
  ],
  testCases: [
    {
      input: '10 5 -3 3 2 null 11 3 -2 null 1\n8',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '5 4 8 11 null 13 4 7 2 null null 5 1\n22',
      expectedOutput: '3',
      hidden: false
    }
  ],
  starterCode: {
    python: 'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Solution:\n    def pathSum(self, root, targetSum):\n        # Write your code here\n        pass',

    java: 'class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int val) {\n        this.val = val;\n    }\n}\n\nclass Solution {\n    public int pathSum(TreeNode root, int targetSum) {\n        // Write your code here\n    }\n}',

    c: '#include <stdio.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode *left;\n    struct TreeNode *right;\n};\n\nint pathSum(struct TreeNode* root, int targetSum) {\n    // Write your code here\n}',

    cpp: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n\n    TreeNode(int x) {\n        val = x;\n        left = right = nullptr;\n    }\n};\n\nclass Solution {\npublic:\n    int pathSum(TreeNode* root, int targetSum) {\n        // Write your code here\n    }\n};'
  }
},{
  id: 'mpsbt-m3',
  title: 'Diameter of Binary Tree',
  difficulty: 'Medium',
  description: 'Given the root of a binary tree, return the length of its diameter.\n\nThe diameter of a binary tree is the length of the longest path between any two nodes in the tree. This path may or may not pass through the root.\n\nThe length of the diameter is measured by the number of edges between the two end nodes.',
  constraints: [
    'The number of nodes in the tree is in the range [1, 10000].',
    '-100 <= Node.val <= 100'
  ],
  examples: [
    {
      input: '1 2 3 4 5',
      output: '3',
      explanation: 'The longest path is 4 → 2 → 1 → 3 (or 5 → 2 → 1 → 3), which contains 3 edges.'
    },
    {
      input: '1 2',
      output: '1',
      explanation: 'The longest path is between nodes 1 and 2.'
    }
  ],
  testCases: [
    {
      input: '1 2 3 4 5',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '1 2',
      expectedOutput: '1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Solution:\n    def diameterOfBinaryTree(self, root):\n        # Write your code here\n        pass',

    java: 'class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int val) {\n        this.val = val;\n    }\n}\n\nclass Solution {\n    public int diameterOfBinaryTree(TreeNode root) {\n        // Write your code here\n    }\n}',

    c: '#include <stdio.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode *left;\n    struct TreeNode *right;\n};\n\nint diameterOfBinaryTree(struct TreeNode* root) {\n    // Write your code here\n}',

    cpp: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n\n    TreeNode(int x) {\n        val = x;\n        left = right = nullptr;\n    }\n};\n\nclass Solution {\npublic:\n    int diameterOfBinaryTree(TreeNode* root) {\n        // Write your code here\n    }\n};'
  }
},{
  id: 'mpsbt-h1',
  title: 'Binary Tree Maximum Path Sum',
  difficulty: 'Hard',
  description: 'Given the root of a non-empty binary tree, return the maximum path sum.\n\nA path is a sequence of nodes where each pair of adjacent nodes is connected by an edge. A node can appear at most once in the path. The path may start and end at any node in the tree and does not necessarily have to pass through the root.',
  constraints: [
    'The number of nodes in the tree is in the range [1, 30000].',
    '-1000 <= Node.val <= 1000'
  ],
  examples: [
    {
      input: '1 2 3',
      output: '6',
      explanation: 'The maximum path is 2 → 1 → 3 with a sum of 6.'
    },
    {
      input: '-10 9 20 null null 15 7',
      output: '42',
      explanation: 'The maximum path is 15 → 20 → 7 with a sum of 42.'
    }
  ],
  testCases: [
    {
      input: '1 2 3',
      expectedOutput: '6',
      hidden: false
    },
    {
      input: '-10 9 20 null null 15 7',
      expectedOutput: '42',
      hidden: false
    }
  ],
  starterCode: {
    python: 'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Solution:\n    def maxPathSum(self, root):\n        # Write your code here\n        pass',

    java: 'class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int val) {\n        this.val = val;\n    }\n}\n\nclass Solution {\n    public int maxPathSum(TreeNode root) {\n        // Write your code here\n    }\n}',

    c: '#include <stdio.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode *left;\n    struct TreeNode *right;\n};\n\nint maxPathSum(struct TreeNode* root) {\n    // Write your code here\n}',

    cpp: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n\n    TreeNode(int x) {\n        val = x;\n        left = right = nullptr;\n    }\n};\n\nclass Solution {\npublic:\n    int maxPathSum(TreeNode* root) {\n        // Write your code here\n    }\n};'
  }
},{
  id: 'mpsbt-h2',
  title: 'House Robber III',
  difficulty: 'Hard',
  description: 'A thief plans to rob houses arranged in the form of a binary tree. Each node represents a house containing a certain amount of money.\n\nIf two directly connected houses are robbed on the same night, the alarm will be triggered.\n\nReturn the maximum amount of money the thief can rob without alerting the police.',
  constraints: [
    'The number of nodes in the tree is in the range [1, 10000].',
    '0 <= Node.val <= 10000'
  ],
  examples: [
    {
      input: '3 2 3 null 3 null 1',
      output: '7',
      explanation: 'Rob houses with values 3 (root), 3 and 1. The maximum amount that can be robbed is 7.'
    },
    {
      input: '3 4 5 1 3 null 1',
      output: '9',
      explanation: 'Rob houses with values 4 and 5. The maximum amount that can be robbed is 9.'
    }
  ],
  testCases: [
    {
      input: '3 2 3 null 3 null 1',
      expectedOutput: '7',
      hidden: false
    },
    {
      input: '3 4 5 1 3 null 1',
      expectedOutput: '9',
      hidden: false
    }
  ],
  starterCode: {
    python: 'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Solution:\n    def rob(self, root):\n        # Write your code here\n        pass',

    java: 'class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int val) {\n        this.val = val;\n    }\n}\n\nclass Solution {\n    public int rob(TreeNode root) {\n        // Write your code here\n    }\n}',

    c: '#include <stdio.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode *left;\n    struct TreeNode *right;\n};\n\nint rob(struct TreeNode* root) {\n    // Write your code here\n}',

    cpp: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n\n    TreeNode(int x) {\n        val = x;\n        left = right = nullptr;\n    }\n};\n\nclass Solution {\npublic:\n    int rob(TreeNode* root) {\n        // Write your code here\n    }\n};'
  }
},{
  id: 'mpsbt-h3',
  title: 'Distribute Coins in Binary Tree',
  difficulty: 'Hard',
  description: 'You are given the root of a binary tree with n nodes where the total number of coins in the tree is exactly n. Each node contains a certain number of coins.\n\nIn one move, you may move a single coin between two adjacent nodes (parent and child).\n\nReturn the minimum number of moves required so that every node has exactly one coin.',
  constraints: [
    'The number of nodes in the tree is in the range [1, 100].',
    '0 <= Node.val <= 100',
    'The total number of coins equals the total number of nodes.'
  ],
  examples: [
    {
      input: '3 0 0',
      output: '2',
      explanation: 'Move one coin from the root to the left child and one coin from the root to the right child.'
    },
    {
      input: '0 3 0',
      output: '3',
      explanation: 'Three moves are required to distribute the coins so that every node contains exactly one coin.'
    }
  ],
  testCases: [
    {
      input: '3 0 0',
      expectedOutput: '2',
      hidden: false
    },
    {
      input: '0 3 0',
      expectedOutput: '3',
      hidden: false
    }
  ],
  starterCode: {
    python: 'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Solution:\n    def distributeCoins(self, root):\n        # Write your code here\n        pass',

    java: 'class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int val) {\n        this.val = val;\n    }\n}\n\nclass Solution {\n    public int distributeCoins(TreeNode root) {\n        // Write your code here\n    }\n}',

    c: '#include <stdio.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode *left;\n    struct TreeNode *right;\n};\n\nint distributeCoins(struct TreeNode* root) {\n    // Write your code here\n}',

    cpp: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n\n    TreeNode(int x) {\n        val = x;\n        left = right = nullptr;\n    }\n};\n\nclass Solution {\npublic:\n    int distributeCoins(TreeNode* root) {\n        // Write your code here\n    }\n};'
  }
}
];