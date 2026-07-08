export const binarySearchProblems = [
{
  id: 'rsv-e1',
  title: 'Binary Tree Right Side View',
  difficulty: 'Easy',
  description: 'Given the level order traversal of a binary tree where -1 represents a null node, return the values visible when the tree is viewed from the right side.',
  constraints: [
    '0 <= n <= 100',
    '-100 <= Node.val <= 100',
    '-1 represents a null node.'
  ],
  examples: [
    {
      input: '7\n1 2 3 -1 5 -1 4',
      output: '1 3 4',
      explanation: 'The rightmost node at each level is visible.'
    },
    {
      input: '4\n1 -1 2 3',
      output: '1 2 3',
      explanation: 'Every level contributes one visible node.'
    }
  ],
  testCases: [
    {
      input: '7\n1 2 3 -1 5 -1 4',
      expectedOutput: '1 3 4',
      hidden: false
    },
    {
      input: '4\n1 -1 2 3',
      expectedOutput: '1 2 3',
      hidden: false
    },
    {
      input: '2\n1 2',
      expectedOutput: '1 2',
      hidden: true
    },
    {
      input: '1\n1',
      expectedOutput: '1',
      hidden: true
    }
  ]
},{
  id: 'rsv-m1',
  title: 'Binary Tree Left Side View',
  difficulty: 'Medium',
  description: 'Given the level order traversal of a binary tree where -1 represents a null node, return the values visible when the tree is viewed from the left side from top to bottom.',
  constraints: [
    '1 <= n <= 100',
    '-100 <= Node.val <= 100',
    '-1 represents a null node.',
    'The input represents a valid binary tree.'
  ],
  examples: [
    {
      input: '7\n1 2 3 -1 5 -1 4',
      output: '1 2 5',
      explanation: 'The leftmost node at each level is visible from the left side.'
    },
    {
      input: '4\n1 -1 2 3',
      output: '1 2 3',
      explanation: 'Each level contributes its leftmost visible node.'
    }
  ],
  testCases: [
    {
      input: '7\n1 2 3 -1 5 -1 4',
      expectedOutput: '1 2 5',
      hidden: false
    },
    {
      input: '4\n1 -1 2 3',
      expectedOutput: '1 2 3',
      hidden: false
    },
    {
      input: '7\n1 2 3 4 5 6 7',
      expectedOutput: '1 2 4',
      hidden: true
    },
    {
      input: '1\n1',
      expectedOutput: '1',
      hidden: true
    },
    {
      input: '2\n1 2',
      expectedOutput: '1 2',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def left_side_view(values):\n    pass\n\nn = int(input())\nvalues = list(map(int, input().split()))\nresult = left_side_view(values)\nprint(*result)',

    java: 'import java.util.*;\n\npublic class Main {\n    public static List<Integer> leftSideView(int[] values) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] values = new int[n];\n        for(int i=0;i<n;i++) values[i]=sc.nextInt();\n        List<Integer> ans = leftSideView(values);\n        for(int x:ans) System.out.print(x + " ");\n    }\n}',

    c: '#include <stdio.h>\n\nvoid leftSideView(int values[], int n) {\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int values[n];\n    for(int i=0;i<n;i++) scanf("%d",&values[i]);\n    leftSideView(values,n);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> leftSideView(vector<int>& values){\n    return {};\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> values(n);\n    for(int i=0;i<n;i++) cin>>values[i];\n    vector<int> ans=leftSideView(values);\n    for(int x:ans) cout<<x<<" ";\n    return 0;\n}'
  }
},{
  id: 'rsv-h1',
  title: 'Top View of Binary Tree',
  difficulty: 'Hard',
  description: 'Given the level order traversal of a binary tree where -1 represents a null node, return the nodes visible when the tree is viewed from the top. If multiple nodes have the same horizontal distance, only the first node encountered in level order is visible.',
  constraints: [
    '1 <= n <= 100',
    '-1000 <= Node.val <= 1000',
    '-1 represents a null node.',
    'The input represents a valid binary tree.'
  ],
  examples: [
    {
      input: '7\n1 2 3 -1 5 -1 4',
      output: '2 1 3 4',
      explanation: 'Nodes 2, 1, 3 and 4 are visible from the top.'
    },
    {
      input: '7\n1 2 3 4 5 6 7',
      output: '4 2 1 3 7',
      explanation: 'The first node encountered at every horizontal distance forms the top view.'
    }
  ],
  testCases: [
    {
      input: '7\n1 2 3 -1 5 -1 4',
      expectedOutput: '2 1 3 4',
      hidden: false
    },
    {
      input: '7\n1 2 3 4 5 6 7',
      expectedOutput: '4 2 1 3 7',
      hidden: false
    },
    {
      input: '1\n1',
      expectedOutput: '1',
      hidden: true
    },
    {
      input: '2\n1 2',
      expectedOutput: '2 1',
      hidden: true
    },
    {
      input: '4\n1 -1 2 3',
      expectedOutput: '1 2',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def top_view(values):\n    pass\n\nn = int(input())\nvalues = list(map(int, input().split()))\nresult = top_view(values)\nprint(*result)',

    java: 'import java.util.*;\n\npublic class Main {\n    public static List<Integer> topView(int[] values) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] values = new int[n];\n        for(int i=0;i<n;i++) values[i]=sc.nextInt();\n        List<Integer> ans = topView(values);\n        for(int x:ans) System.out.print(x + " ");\n    }\n}',

    c: '#include <stdio.h>\n\nvoid topView(int values[], int n) {\n}\n\nint main() {\n    int n;\n    scanf("%d",&n);\n    int values[n];\n    for(int i=0;i<n;i++) scanf("%d",&values[i]);\n    topView(values,n);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> topView(vector<int>& values){\n    return {};\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> values(n);\n    for(int i=0;i<n;i++) cin>>values[i];\n    vector<int> ans=topView(values);\n    for(int x:ans) cout<<x<<" ";\n    return 0;\n}'
  }
}
];