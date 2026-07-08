export const AVLTreeProblems = [
  // --- EASY ---
  {
    id: 'avl-e1', title: 'Height of AVL Tree', difficulty: 'Easy',
    description: 'Given n keys inserted one by one into an AVL tree, return the height of the resulting AVL tree. Height is defined as the number of edges on the longest path from root to a leaf.',
    constraints: ['1 <= n <= 100', '1 <= keys[i] <= 10^4', 'All keys are distinct'],
    examples: [
      { input: 'n = 3\nkeys = [10, 20, 30]', output: '1', explanation: 'Inserting 10, 20, 30 triggers an RR rotation. Resulting tree has height 1.' },
      { input: 'n = 6\nkeys = [10, 20, 30, 40, 50, 25]', output: '2', explanation: 'After all insertions and rebalancing, the AVL tree has height 2.' }
    ],
    testCases: [
      { input: '3\n10 20 30', expectedOutput: '1', hidden: false },
      { input: '6\n10 20 30 40 50 25', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'class Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\ndef avl_height(root):\n    pass\n\ndef insert(root, key):\n    pass\n\nn = int(input())\nkeys = list(map(int, input().split()))\nroot = None\nfor k in keys:\n    root = insert(root, k)\nprint(avl_height(root))',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    public static int avlHeight(Node root) {\n        return 0;\n    }\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Node root = null;\n        for (int i = 0; i < n; i++)\n            root = insert(root, sc.nextInt());\n        System.out.println(avlHeight(root));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nint avlHeight(Node* root) {\n    return 0;\n}\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    Node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        int k; scanf("%d", &k);\n        root = insert(root, k);\n    }\n    printf("%d\\n", avlHeight(root));\n    return 0;\n}',
      cpp: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nint avlHeight(Node* root) {\n    return 0;\n}\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n; cin >> n;\n    Node* root = nullptr;\n    for (int i = 0; i < n; i++) {\n        int k; cin >> k;\n        root = insert(root, k);\n    }\n    cout << avlHeight(root) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'avl-e2', title: 'Balance Factor of Root', difficulty: 'Easy',
    description: 'Given n keys inserted one by one into an AVL tree, return the balance factor of the root node. Balance factor = height(left subtree) - height(right subtree).',
    constraints: ['1 <= n <= 100', '1 <= keys[i] <= 10^4', 'All keys are distinct'],
    examples: [
      { input: 'n = 3\nkeys = [10, 20, 30]', output: '0', explanation: 'After RR rotation, root is 20 with left=10 and right=30. Balance factor = 0.' },
      { input: 'n = 2\nkeys = [10, 5]', output: '1', explanation: 'Root is 10 with only left child 5. Balance factor = 1.' }
    ],
    testCases: [
      { input: '3\n10 20 30', expectedOutput: '0', hidden: false },
      { input: '2\n10 5', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: 'class Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\ndef balance_factor(root):\n    pass\n\ndef insert(root, key):\n    pass\n\nn = int(input())\nkeys = list(map(int, input().split()))\nroot = None\nfor k in keys:\n    root = insert(root, k)\nprint(balance_factor(root))',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    public static int balanceFactor(Node root) {\n        return 0;\n    }\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Node root = null;\n        for (int i = 0; i < n; i++)\n            root = insert(root, sc.nextInt());\n        System.out.println(balanceFactor(root));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nint balanceFactor(Node* root) {\n    return 0;\n}\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    Node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        int k; scanf("%d", &k);\n        root = insert(root, k);\n    }\n    printf("%d\\n", balanceFactor(root));\n    return 0;\n}',
      cpp: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nint balanceFactor(Node* root) {\n    return 0;\n}\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n; cin >> n;\n    Node* root = nullptr;\n    for (int i = 0; i < n; i++) {\n        int k; cin >> k;\n        root = insert(root, k);\n    }\n    cout << balanceFactor(root) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'avl-e3', title: 'Inorder Traversal of AVL Tree', difficulty: 'Easy',
    description: 'Given n keys inserted one by one into an AVL tree, print the inorder traversal of the resulting AVL tree. Elements should be space-separated on a single line.',
    constraints: ['1 <= n <= 100', '1 <= keys[i] <= 10^4', 'All keys are distinct'],
    examples: [
      { input: 'n = 5\nkeys = [30, 20, 10, 40, 50]', output: '10 20 30 40 50', explanation: 'Inorder traversal of a BST always gives sorted order.' },
      { input: 'n = 3\nkeys = [10, 20, 30]', output: '10 20 30', explanation: 'After RR rotation, inorder is still 10 20 30.' }
    ],
    testCases: [
      { input: '5\n30 20 10 40 50', expectedOutput: '10 20 30 40 50', hidden: false },
      { input: '3\n10 20 30', expectedOutput: '10 20 30', hidden: false }
    ],
    starterCode: {
      python: 'class Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\ndef inorder(root, result):\n    pass\n\ndef insert(root, key):\n    pass\n\nn = int(input())\nkeys = list(map(int, input().split()))\nroot = None\nfor k in keys:\n    root = insert(root, k)\nresult = []\ninorder(root, result)\nprint(" ".join(map(str, result)))',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    public static void inorder(Node root, List<Integer> result) {\n    }\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Node root = null;\n        for (int i = 0; i < n; i++)\n            root = insert(root, sc.nextInt());\n        List<Integer> result = new ArrayList<>();\n        inorder(root, result);\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < result.size(); i++) {\n            if (i > 0) sb.append(" ");\n            sb.append(result.get(i));\n        }\n        System.out.println(sb);\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nvoid inorder(Node* root, int first) {\n}\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    Node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        int k; scanf("%d", &k);\n        root = insert(root, k);\n    }\n    inorder(root, 1);\n    printf("\\n");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nvoid inorder(Node* root, vector<int>& result) {\n}\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n; cin >> n;\n    Node* root = nullptr;\n    for (int i = 0; i < n; i++) {\n        int k; cin >> k;\n        root = insert(root, k);\n    }\n    vector<int> result;\n    inorder(root, result);\n    for (int i = 0; i < (int)result.size(); i++) {\n        if (i > 0) cout << " ";\n        cout << result[i];\n    }\n    cout << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'avl-e4', title: 'Search in AVL Tree', difficulty: 'Easy',
    description: 'Given n keys inserted into an AVL tree and a target value, return `true` if the target exists in the tree, otherwise return `false`.',
    constraints: ['1 <= n <= 100', '1 <= keys[i] <= 10^4', '1 <= target <= 10^4', 'All keys are distinct'],
    examples: [
      { input: 'n = 5\nkeys = [10, 20, 30, 40, 50]\ntarget = 30', output: 'true', explanation: '30 was inserted and exists in the AVL tree.' },
      { input: 'n = 5\nkeys = [10, 20, 30, 40, 50]\ntarget = 25', output: 'false', explanation: '25 was never inserted so it does not exist.' }
    ],
    testCases: [
      { input: '5\n10 20 30 40 50\n30', expectedOutput: 'true', hidden: false },
      { input: '5\n10 20 30 40 50\n25', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'class Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\ndef search(root, target):\n    pass\n\ndef insert(root, key):\n    pass\n\nn = int(input())\nkeys = list(map(int, input().split()))\ntarget = int(input())\nroot = None\nfor k in keys:\n    root = insert(root, k)\nprint(str(search(root, target)).lower())',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    public static boolean search(Node root, int target) {\n        return false;\n    }\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Node root = null;\n        for (int i = 0; i < n; i++)\n            root = insert(root, sc.nextInt());\n        int target = sc.nextInt();\n        System.out.println(search(root, target));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nbool search(Node* root, int target) {\n    return false;\n}\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    Node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        int k; scanf("%d", &k);\n        root = insert(root, k);\n    }\n    int target; scanf("%d", &target);\n    printf("%s\\n", search(root, target) ? "true" : "false");\n    return 0;\n}',
      cpp: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nbool search(Node* root, int target) {\n    return false;\n}\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n; cin >> n;\n    Node* root = nullptr;\n    for (int i = 0; i < n; i++) {\n        int k; cin >> k;\n        root = insert(root, k);\n    }\n    int target; cin >> target;\n    cout << (search(root, target) ? "true" : "false") << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'avl-e5', title: 'Count Nodes in AVL Tree', difficulty: 'Easy',
    description: 'Given n keys inserted one by one into an AVL tree, return the total number of nodes in the resulting AVL tree.',
    constraints: ['1 <= n <= 100', '1 <= keys[i] <= 10^4', 'All keys are distinct'],
    examples: [
      { input: 'n = 5\nkeys = [10, 20, 30, 40, 50]', output: '5', explanation: '5 distinct keys are inserted so the tree has 5 nodes.' },
      { input: 'n = 3\nkeys = [10, 10, 20]', output: '2', explanation: 'Duplicate key 10 is ignored. Only 2 distinct nodes exist.' }
    ],
    testCases: [
      { input: '5\n10 20 30 40 50', expectedOutput: '5', hidden: false },
      { input: '3\n10 10 20', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'class Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\ndef count_nodes(root):\n    pass\n\ndef insert(root, key):\n    pass\n\nn = int(input())\nkeys = list(map(int, input().split()))\nroot = None\nfor k in keys:\n    root = insert(root, k)\nprint(count_nodes(root))',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    public static int countNodes(Node root) {\n        return 0;\n    }\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Node root = null;\n        for (int i = 0; i < n; i++)\n            root = insert(root, sc.nextInt());\n        System.out.println(countNodes(root));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nint countNodes(Node* root) {\n    return 0;\n}\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    Node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        int k; scanf("%d", &k);\n        root = insert(root, k);\n    }\n    printf("%d\\n", countNodes(root));\n    return 0;\n}',
      cpp: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nint countNodes(Node* root) {\n    return 0;\n}\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n; cin >> n;\n    Node* root = nullptr;\n    for (int i = 0; i < n; i++) {\n        int k; cin >> k;\n        root = insert(root, k);\n    }\n    cout << countNodes(root) << "\\n";\n    return 0;\n}'
    }
  },
];

export const AVLTreeMediumProblems = [
  // --- MEDIUM ---
  {
    id: 'avl-m1', title: 'Insert and Return Root Key', difficulty: 'Medium',
    description: 'Given n keys inserted one by one into an AVL tree, return the key stored at the root of the final balanced tree.',
    constraints: ['1 <= n <= 1000', '1 <= keys[i] <= 10^5', 'All keys are distinct'],
    examples: [
      { input: 'n = 3\nkeys = [10, 20, 30]', output: '20', explanation: 'Inserting 10, 20, 30 causes RR imbalance. Left rotation makes 20 the root.' },
      { input: 'n = 3\nkeys = [30, 20, 10]', output: '20', explanation: 'Inserting 30, 20, 10 causes LL imbalance. Right rotation makes 20 the root.' }
    ],
    testCases: [
      { input: '3\n10 20 30', expectedOutput: '20', hidden: false },
      { input: '3\n30 20 10', expectedOutput: '20', hidden: false }
    ],
    starterCode: {
      python: 'class Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\ndef insert(root, key):\n    pass\n\nn = int(input())\nkeys = list(map(int, input().split()))\nroot = None\nfor k in keys:\n    root = insert(root, k)\nprint(root.key)',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Node root = null;\n        for (int i = 0; i < n; i++)\n            root = insert(root, sc.nextInt());\n        System.out.println(root.key);\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    Node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        int k; scanf("%d", &k);\n        root = insert(root, k);\n    }\n    printf("%d\\n", root->key);\n    return 0;\n}',
      cpp: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n; cin >> n;\n    Node* root = nullptr;\n    for (int i = 0; i < n; i++) {\n        int k; cin >> k;\n        root = insert(root, k);\n    }\n    cout << root->key << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'avl-m2', title: 'Level Order Traversal of AVL Tree', difficulty: 'Medium',
    description: 'Given n keys inserted one by one into an AVL tree, print the level order (BFS) traversal of the resulting tree. Print each level on a new line with elements space-separated.',
    constraints: ['1 <= n <= 1000', '1 <= keys[i] <= 10^5', 'All keys are distinct'],
    examples: [
      { input: 'n = 5\nkeys = [10, 20, 30, 40, 50]', output: '30\n20 40\n10 50', explanation: 'After all rotations, root is 30. Level 1: 20 40. Level 2: 10 50.' },
      { input: 'n = 3\nkeys = [10, 20, 30]', output: '20\n10 30', explanation: 'After RR rotation root is 20 with children 10 and 30.' }
    ],
    testCases: [
      { input: '3\n10 20 30', expectedOutput: '20\n10 30', hidden: false },
      { input: '5\n10 20 30 40 50', expectedOutput: '30\n20 40\n10 50', hidden: false }
    ],
    starterCode: {
      python: 'from collections import deque\n\nclass Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\ndef level_order(root):\n    pass\n\ndef insert(root, key):\n    pass\n\nn = int(input())\nkeys = list(map(int, input().split()))\nroot = None\nfor k in keys:\n    root = insert(root, k)\nlevel_order(root)',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    public static void levelOrder(Node root) {\n    }\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Node root = null;\n        for (int i = 0; i < n; i++)\n            root = insert(root, sc.nextInt());\n        levelOrder(root);\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nvoid levelOrder(Node* root) {\n}\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    Node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        int k; scanf("%d", &k);\n        root = insert(root, k);\n    }\n    levelOrder(root);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <queue>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nvoid levelOrder(Node* root) {\n}\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n; cin >> n;\n    Node* root = nullptr;\n    for (int i = 0; i < n; i++) {\n        int k; cin >> k;\n        root = insert(root, k);\n    }\n    levelOrder(root);\n    return 0;\n}'
    }
  },
  {
    id: 'avl-m3', title: 'Delete a Node from AVL Tree', difficulty: 'Medium',
    description: 'Given n keys inserted into an AVL tree and a key to delete, print the inorder traversal of the tree after deletion. If the key does not exist, print the inorder traversal unchanged.',
    constraints: ['1 <= n <= 1000', '1 <= keys[i] <= 10^5', '1 <= deleteKey <= 10^5', 'All inserted keys are distinct'],
    examples: [
      { input: 'n = 5\nkeys = [10, 20, 30, 40, 50]\ndeleteKey = 20', output: '10 30 40 50', explanation: 'After deleting 20 and rebalancing, inorder gives 10 30 40 50.' },
      { input: 'n = 3\nkeys = [10, 20, 30]\ndeleteKey = 99', output: '10 20 30', explanation: '99 does not exist so tree is unchanged.' }
    ],
    testCases: [
      { input: '5\n10 20 30 40 50\n20', expectedOutput: '10 30 40 50', hidden: false },
      { input: '3\n10 20 30\n99', expectedOutput: '10 20 30', hidden: false }
    ],
    starterCode: {
      python: 'class Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\ndef insert(root, key):\n    pass\n\ndef delete(root, key):\n    pass\n\ndef inorder(root, result):\n    pass\n\nn = int(input())\nkeys = list(map(int, input().split()))\ndelete_key = int(input())\nroot = None\nfor k in keys:\n    root = insert(root, k)\nroot = delete(root, delete_key)\nresult = []\ninorder(root, result)\nprint(" ".join(map(str, result)))',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static Node delete(Node root, int key) {\n        return null;\n    }\n\n    public static void inorder(Node root, List<Integer> result) {\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Node root = null;\n        for (int i = 0; i < n; i++)\n            root = insert(root, sc.nextInt());\n        int deleteKey = sc.nextInt();\n        root = delete(root, deleteKey);\n        List<Integer> result = new ArrayList<>();\n        inorder(root, result);\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < result.size(); i++) {\n            if (i > 0) sb.append(" ");\n            sb.append(result.get(i));\n        }\n        System.out.println(sb);\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nNode* delete(Node* root, int key) {\n    return NULL;\n}\n\nvoid inorder(Node* root, int* first) {\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    Node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        int k; scanf("%d", &k);\n        root = insert(root, k);\n    }\n    int deleteKey; scanf("%d", &deleteKey);\n    root = delete(root, deleteKey);\n    int first = 1;\n    inorder(root, &first);\n    printf("\\n");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nNode* deleteNode(Node* root, int key) {\n    return nullptr;\n}\n\nvoid inorder(Node* root, vector<int>& result) {\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n; cin >> n;\n    Node* root = nullptr;\n    for (int i = 0; i < n; i++) {\n        int k; cin >> k;\n        root = insert(root, k);\n    }\n    int deleteKey; cin >> deleteKey;\n    root = deleteNode(root, deleteKey);\n    vector<int> result;\n    inorder(root, result);\n    for (int i = 0; i < (int)result.size(); i++) {\n        if (i > 0) cout << " ";\n        cout << result[i];\n    }\n    cout << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'avl-m4', title: 'Kth Smallest Element in AVL Tree', difficulty: 'Medium',
    description: 'Given n keys inserted into an AVL tree and an integer k, return the kth smallest element in the tree. k is 1-indexed.',
    constraints: ['1 <= n <= 1000', '1 <= keys[i] <= 10^5', '1 <= k <= n', 'All keys are distinct'],
    examples: [
      { input: 'n = 5\nkeys = [30, 10, 50, 20, 40]\nk = 3', output: '30', explanation: 'Inorder is 10 20 30 40 50. The 3rd smallest is 30.' },
      { input: 'n = 4\nkeys = [10, 20, 30, 40]\nk = 1', output: '10', explanation: 'The 1st smallest element is 10.' }
    ],
    testCases: [
      { input: '5\n30 10 50 20 40\n3', expectedOutput: '30', hidden: false },
      { input: '4\n10 20 30 40\n1', expectedOutput: '10', hidden: false }
    ],
    starterCode: {
      python: 'class Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\ndef insert(root, key):\n    pass\n\ndef kth_smallest(root, k):\n    pass\n\nn = int(input())\nkeys = list(map(int, input().split()))\nk = int(input())\nroot = None\nfor key in keys:\n    root = insert(root, key)\nprint(kth_smallest(root, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static int kthSmallest(Node root, int k) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Node root = null;\n        for (int i = 0; i < n; i++)\n            root = insert(root, sc.nextInt());\n        int k = sc.nextInt();\n        System.out.println(kthSmallest(root, k));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nint kthSmallest(Node* root, int k, int* count) {\n    return -1;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    Node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        int k; scanf("%d", &k);\n        root = insert(root, k);\n    }\n    int k; scanf("%d", &k);\n    int count = 0;\n    printf("%d\\n", kthSmallest(root, k, &count));\n    return 0;\n}',
      cpp: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nint kthSmallest(Node* root, int k, int& count) {\n    return -1;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n; cin >> n;\n    Node* root = nullptr;\n    for (int i = 0; i < n; i++) {\n        int k; cin >> k;\n        root = insert(root, k);\n    }\n    int k; cin >> k;\n    int count = 0;\n    cout << kthSmallest(root, k, count) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'avl-m5', title: 'Count Nodes in Range', difficulty: 'Medium',
    description: 'Given n keys inserted into an AVL tree and a range [lo, hi], return the count of nodes whose keys fall within the range (inclusive).',
    constraints: ['1 <= n <= 1000', '1 <= keys[i] <= 10^5', '1 <= lo <= hi <= 10^5', 'All keys are distinct'],
    examples: [
      { input: 'n = 6\nkeys = [10, 20, 30, 40, 50, 60]\nlo = 20\nhi = 45', output: '3', explanation: 'Keys 20, 30, 40 fall within [20, 45]. Count is 3.' },
      { input: 'n = 4\nkeys = [5, 15, 25, 35]\nlo = 10\nhi = 30', output: '2', explanation: 'Keys 15 and 25 fall within [10, 30]. Count is 2.' }
    ],
    testCases: [
      { input: '6\n10 20 30 40 50 60\n20\n45', expectedOutput: '3', hidden: false },
      { input: '4\n5 15 25 35\n10\n30', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'class Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\ndef insert(root, key):\n    pass\n\ndef count_in_range(root, lo, hi):\n    pass\n\nn = int(input())\nkeys = list(map(int, input().split()))\nlo = int(input())\nhi = int(input())\nroot = None\nfor k in keys:\n    root = insert(root, k)\nprint(count_in_range(root, lo, hi))',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static int countInRange(Node root, int lo, int hi) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Node root = null;\n        for (int i = 0; i < n; i++)\n            root = insert(root, sc.nextInt());\n        int lo = sc.nextInt();\n        int hi = sc.nextInt();\n        System.out.println(countInRange(root, lo, hi));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nint countInRange(Node* root, int lo, int hi) {\n    return 0;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    Node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        int k; scanf("%d", &k);\n        root = insert(root, k);\n    }\n    int lo, hi;\n    scanf("%d", &lo);\n    scanf("%d", &hi);\n    printf("%d\\n", countInRange(root, lo, hi));\n    return 0;\n}',
      cpp: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nint countInRange(Node* root, int lo, int hi) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n; cin >> n;\n    Node* root = nullptr;\n    for (int i = 0; i < n; i++) {\n        int k; cin >> k;\n        root = insert(root, k);\n    }\n    int lo, hi;\n    cin >> lo >> hi;\n    cout << countInRange(root, lo, hi) << "\\n";\n    return 0;\n}'
    }
  },
];

export const AVLTreeHardProblems = [
  // --- HARD ---
  {
    id: 'avl-h1', title: 'AVL Tree from Sorted Array', difficulty: 'Hard',
    description: 'Given a sorted array of n distinct integers, build a balanced AVL tree by inserting elements one by one and return the inorder, preorder traversals on separate lines. Elements in each traversal should be space-separated.',
    constraints: ['1 <= n <= 1000', '1 <= arr[i] <= 10^5', 'Array is sorted in ascending order', 'All elements are distinct'],
    examples: [
      { input: 'n = 7\narr = [1, 2, 3, 4, 5, 6, 7]', output: '1 2 3 4 5 6 7\n4 2 1 3 6 5 7', explanation: 'Inorder of AVL tree is always sorted. Preorder shows root 4 after all rotations.' },
      { input: 'n = 3\narr = [1, 2, 3]', output: '1 2 3\n2 1 3', explanation: 'Inserting 1,2,3 causes RR rotation. Root becomes 2. Preorder: 2 1 3.' }
    ],
    testCases: [
      { input: '3\n1 2 3', expectedOutput: '1 2 3\n2 1 3', hidden: false },
      { input: '7\n1 2 3 4 5 6 7', expectedOutput: '1 2 3 4 5 6 7\n4 2 1 3 6 5 7', hidden: false }
    ],
    starterCode: {
      python: 'class Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\ndef insert(root, key):\n    pass\n\ndef inorder(root, result):\n    pass\n\ndef preorder(root, result):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nroot = None\nfor k in arr:\n    root = insert(root, k)\nio_res, pre_res = [], []\ninorder(root, io_res)\npreorder(root, pre_res)\nprint(" ".join(map(str, io_res)))\nprint(" ".join(map(str, pre_res)))',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static void inorder(Node root, List<Integer> result) {\n    }\n\n    public static void preorder(Node root, List<Integer> result) {\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Node root = null;\n        for (int i = 0; i < n; i++)\n            root = insert(root, sc.nextInt());\n        List<Integer> io = new ArrayList<>(), pre = new ArrayList<>();\n        inorder(root, io);\n        preorder(root, pre);\n        StringBuilder sb1 = new StringBuilder(), sb2 = new StringBuilder();\n        for (int i = 0; i < io.size(); i++) { if (i > 0) sb1.append(" "); sb1.append(io.get(i)); }\n        for (int i = 0; i < pre.size(); i++) { if (i > 0) sb2.append(" "); sb2.append(pre.get(i)); }\n        System.out.println(sb1);\n        System.out.println(sb2);\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nvoid inorder(Node* root, int* first) {\n}\n\nvoid preorder(Node* root, int* first) {\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    Node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        int k; scanf("%d", &k);\n        root = insert(root, k);\n    }\n    int first = 1;\n    inorder(root, &first);\n    printf("\\n");\n    first = 1;\n    preorder(root, &first);\n    printf("\\n");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nvoid inorder(Node* root, vector<int>& result) {\n}\n\nvoid preorder(Node* root, vector<int>& result) {\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n; cin >> n;\n    Node* root = nullptr;\n    for (int i = 0; i < n; i++) {\n        int k; cin >> k;\n        root = insert(root, k);\n    }\n    vector<int> io, pre;\n    inorder(root, io);\n    preorder(root, pre);\n    for (int i = 0; i < (int)io.size(); i++) { if (i > 0) cout << " "; cout << io[i]; }\n    cout << "\\n";\n    for (int i = 0; i < (int)pre.size(); i++) { if (i > 0) cout << " "; cout << pre[i]; }\n    cout << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'avl-h2', title: 'Merge Two AVL Trees', difficulty: 'Hard',
    description: 'Given two sets of keys each forming an AVL tree, merge both trees into a single AVL tree and print its inorder traversal. All keys across both trees are distinct.',
    constraints: ['1 <= n1, n2 <= 500', '1 <= keys[i] <= 10^5', 'All keys across both trees are distinct'],
    examples: [
      { input: 'n1 = 3\nkeys1 = [10, 20, 30]\nn2 = 3\nkeys2 = [5, 15, 25]', output: '5 10 15 20 25 30', explanation: 'Merging both trees and rebuilding AVL gives sorted inorder: 5 10 15 20 25 30.' },
      { input: 'n1 = 2\nkeys1 = [1, 3]\nn2 = 2\nkeys2 = [2, 4]', output: '1 2 3 4', explanation: 'Merged inorder traversal of both AVL trees is 1 2 3 4.' }
    ],
    testCases: [
      { input: '3\n10 20 30\n3\n5 15 25', expectedOutput: '5 10 15 20 25 30', hidden: false },
      { input: '2\n1 3\n2\n2 4', expectedOutput: '1 2 3 4', hidden: false }
    ],
    starterCode: {
      python: 'class Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\ndef insert(root, key):\n    pass\n\ndef inorder(root, result):\n    pass\n\ndef merge_avl(root1, root2):\n    pass\n\nn1 = int(input())\nkeys1 = list(map(int, input().split()))\nn2 = int(input())\nkeys2 = list(map(int, input().split()))\nroot1 = None\nfor k in keys1:\n    root1 = insert(root1, k)\nroot2 = None\nfor k in keys2:\n    root2 = insert(root2, k)\nmerged = merge_avl(root1, root2)\nresult = []\ninorder(merged, result)\nprint(" ".join(map(str, result)))',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static void inorder(Node root, List<Integer> result) {\n    }\n\n    public static Node mergeAVL(Node root1, Node root2) {\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n1 = sc.nextInt();\n        Node root1 = null;\n        for (int i = 0; i < n1; i++) root1 = insert(root1, sc.nextInt());\n        int n2 = sc.nextInt();\n        Node root2 = null;\n        for (int i = 0; i < n2; i++) root2 = insert(root2, sc.nextInt());\n        Node merged = mergeAVL(root1, root2);\n        List<Integer> result = new ArrayList<>();\n        inorder(merged, result);\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < result.size(); i++) { if (i > 0) sb.append(" "); sb.append(result.get(i)); }\n        System.out.println(sb);\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nvoid inorder(Node* root, int* arr, int* idx) {\n}\n\nNode* mergeAVL(Node* root1, Node* root2) {\n    return NULL;\n}\n\nint main() {\n    int n1;\n    scanf("%d", &n1);\n    Node* root1 = NULL;\n    for (int i = 0; i < n1; i++) {\n        int k; scanf("%d", &k);\n        root1 = insert(root1, k);\n    }\n    int n2;\n    scanf("%d", &n2);\n    Node* root2 = NULL;\n    for (int i = 0; i < n2; i++) {\n        int k; scanf("%d", &k);\n        root2 = insert(root2, k);\n    }\n    Node* merged = mergeAVL(root1, root2);\n    int arr[1001], idx = 0;\n    inorder(merged, arr, &idx);\n    for (int i = 0; i < idx; i++) { if (i > 0) printf(" "); printf("%d", arr[i]); }\n    printf("\\n");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nvoid inorder(Node* root, vector<int>& result) {\n}\n\nNode* mergeAVL(Node* root1, Node* root2) {\n    return nullptr;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n1; cin >> n1;\n    Node* root1 = nullptr;\n    for (int i = 0; i < n1; i++) { int k; cin >> k; root1 = insert(root1, k); }\n    int n2; cin >> n2;\n    Node* root2 = nullptr;\n    for (int i = 0; i < n2; i++) { int k; cin >> k; root2 = insert(root2, k); }\n    Node* merged = mergeAVL(root1, root2);\n    vector<int> result;\n    inorder(merged, result);\n    for (int i = 0; i < (int)result.size(); i++) { if (i > 0) cout << " "; cout << result[i]; }\n    cout << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'avl-h3', title: 'Lowest Common Ancestor in AVL Tree', difficulty: 'Hard',
    description: 'Given n keys inserted into an AVL tree and two node values p and q, return the key of their Lowest Common Ancestor (LCA). The LCA is the deepest node that has both p and q as descendants (a node is a descendant of itself).',
    constraints: ['1 <= n <= 1000', '1 <= keys[i] <= 10^5', '1 <= p, q <= 10^5', 'Both p and q are guaranteed to exist in the tree', 'All keys are distinct'],
    examples: [
      { input: 'n = 6\nkeys = [20, 10, 30, 5, 15, 25]\np = 5\nq = 15', output: '10', explanation: 'LCA of 5 and 15 is 10, as 10 is the deepest node that is an ancestor of both.' },
      { input: 'n = 5\nkeys = [10, 20, 30, 40, 50]\np = 10\nq = 50', output: '30', explanation: 'After AVL rotations root is 30. LCA of 10 and 50 is 30.' }
    ],
    testCases: [
      { input: '6\n20 10 30 5 15 25\n5\n15', expectedOutput: '10', hidden: false },
      { input: '5\n10 20 30 40 50\n10\n50', expectedOutput: '30', hidden: false }
    ],
    starterCode: {
      python: 'class Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\ndef insert(root, key):\n    pass\n\ndef lca(root, p, q):\n    pass\n\nn = int(input())\nkeys = list(map(int, input().split()))\np = int(input())\nq = int(input())\nroot = None\nfor k in keys:\n    root = insert(root, k)\nprint(lca(root, p, q))',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static int lca(Node root, int p, int q) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Node root = null;\n        for (int i = 0; i < n; i++)\n            root = insert(root, sc.nextInt());\n        int p = sc.nextInt();\n        int q = sc.nextInt();\n        System.out.println(lca(root, p, q));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nint lca(Node* root, int p, int q) {\n    return -1;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    Node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        int k; scanf("%d", &k);\n        root = insert(root, k);\n    }\n    int p, q;\n    scanf("%d", &p);\n    scanf("%d", &q);\n    printf("%d\\n", lca(root, p, q));\n    return 0;\n}',
      cpp: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nint lca(Node* root, int p, int q) {\n    return -1;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n; cin >> n;\n    Node* root = nullptr;\n    for (int i = 0; i < n; i++) {\n        int k; cin >> k;\n        root = insert(root, k);\n    }\n    int p, q;\n    cin >> p >> q;\n    cout << lca(root, p, q) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'avl-h4', title: 'AVL Tree Sequence of Rotations', difficulty: 'Hard',
    description: 'Given n keys inserted one by one into an AVL tree, output the total number of rotations performed during all insertions. Count each single rotation (LL or RR) as 1 and each double rotation (LR or RL) as 2.',
    constraints: ['1 <= n <= 1000', '1 <= keys[i] <= 10^5', 'All keys are distinct'],
    examples: [
      { input: 'n = 3\nkeys = [10, 20, 30]', output: '1', explanation: 'Inserting 30 causes one RR (single left) rotation. Total = 1.' },
      { input: 'n = 4\nkeys = [10, 30, 20, 5]', output: '2', explanation: 'Inserting 20 causes one LR (double) rotation counted as 2. Total = 2.' }
    ],
    testCases: [
      { input: '3\n10 20 30', expectedOutput: '1', hidden: false },
      { input: '4\n10 30 20 5', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'class Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\nrotation_count = 0\n\ndef insert(root, key):\n    pass\n\nn = int(input())\nkeys = list(map(int, input().split()))\nroot = None\nfor k in keys:\n    root = insert(root, k)\nprint(rotation_count)',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    static int rotationCount = 0;\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Node root = null;\n        for (int i = 0; i < n; i++)\n            root = insert(root, sc.nextInt());\n        System.out.println(rotationCount);\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nint rotationCount = 0;\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    Node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        int k; scanf("%d", &k);\n        root = insert(root, k);\n    }\n    printf("%d\\n", rotationCount);\n    return 0;\n}',
      cpp: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nint rotationCount = 0;\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n; cin >> n;\n    Node* root = nullptr;\n    for (int i = 0; i < n; i++) {\n        int k; cin >> k;\n        root = insert(root, k);\n    }\n    cout << rotationCount << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'avl-h5', title: 'Closest Value in AVL Tree', difficulty: 'Hard',
    description: 'Given n keys inserted into an AVL tree and a target value (which may not exist in the tree), return the key in the tree that is closest in value to the target. If two keys are equally close, return the smaller one.',
    constraints: ['1 <= n <= 1000', '1 <= keys[i] <= 10^5', '1 <= target <= 10^5', 'All keys are distinct'],
    examples: [
      { input: 'n = 5\nkeys = [10, 20, 30, 40, 50]\ntarget = 38', output: '40', explanation: '|40-38|=2 and |30-38|=8. Closest key is 40.' },
      { input: 'n = 4\nkeys = [5, 15, 25, 35]\ntarget = 20', output: '15', explanation: '|15-20|=5 and |25-20|=5. Equal distance — return smaller value 15.' }
    ],
    testCases: [
      { input: '5\n10 20 30 40 50\n38', expectedOutput: '40', hidden: false },
      { input: '4\n5 15 25 35\n20', expectedOutput: '15', hidden: false }
    ],
    starterCode: {
      python: 'class Node:\n    def __init__(self, key):\n        self.key = key\n        self.height = 1\n        self.left = None\n        self.right = None\n\ndef insert(root, key):\n    pass\n\ndef closest_value(root, target):\n    pass\n\nn = int(input())\nkeys = list(map(int, input().split()))\ntarget = int(input())\nroot = None\nfor k in keys:\n    root = insert(root, k)\nprint(closest_value(root, target))',
      java: 'import java.util.*;\n\npublic class Solution {\n    static class Node {\n        int key, height;\n        Node left, right;\n        Node(int k) { key = k; height = 1; }\n    }\n\n    public static Node insert(Node root, int key) {\n        return null;\n    }\n\n    public static int closestValue(Node root, int target) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Node root = null;\n        for (int i = 0; i < n; i++)\n            root = insert(root, sc.nextInt());\n        int target = sc.nextInt();\n        System.out.println(closestValue(root, target));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int key, height;\n    struct Node *left, *right;\n} Node;\n\nNode* insert(Node* root, int key) {\n    return NULL;\n}\n\nint closestValue(Node* root, int target) {\n    return -1;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    Node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        int k; scanf("%d", &k);\n        root = insert(root, k);\n    }\n    int target; scanf("%d", &target);\n    printf("%d\\n", closestValue(root, target));\n    return 0;\n}',
      cpp: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int key, height;\n    Node *left, *right;\n    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}\n};\n\nNode* insert(Node* root, int key) {\n    return nullptr;\n}\n\nint closestValue(Node* root, int target) {\n    return -1;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n; cin >> n;\n    Node* root = nullptr;\n    for (int i = 0; i < n; i++) {\n        int k; cin >> k;\n        root = insert(root, k);\n    }\n    int target; cin >> target;\n    cout << closestValue(root, target) << "\\n";\n    return 0;\n}'
    }
  },
];
