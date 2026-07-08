export const containerWithMostWaterProblems = [
  // --- EASY ---
  {
    id: 'cwm-e1',
    title: 'Container With Most Water',
    difficulty: 'Easy',
    description: 'Given an array `height` where each element represents the height of a vertical line, find two lines that together with the x-axis form a container that holds the maximum amount of water. Return the maximum area.',
    constraints: [
      '2 <= height.length <= 10^5',
      '0 <= height[i] <= 10^4'
    ],
    examples: [
      {
        input: 'height = [1,8,6,2,5,4,8,3,7]',
        output: '49',
        explanation: 'The maximum area is formed by heights 8 and 7 with width 7.'
      },
      {
        input: 'height = [1,1]',
        output: '1',
        explanation: 'Only one container can be formed with area 1.'
      }
    ],
    testCases: [
      {
        input: '9\n1 8 6 2 5 4 8 3 7',
        expectedOutput: '49',
        hidden: false
      },
      {
        input: '2\n1 1',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def max_area(height):\n    pass\n\nn=int(input())\nheight=list(map(int,input().split()))\nprint(max_area(height))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int maxArea(int[] height) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            System.out.println(maxArea(height));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maxArea(int* height,int size){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    printf("%d\\n",maxArea(height,n));\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maxArea(vector<int>& height){\n    return 0;\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> height(n);\n        for(int i=0;i<n;i++) cin>>height[i];\n        cout<<maxArea(height)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'cwm-e2',
    title: 'Maximum Width Between Increasing Heights',
    difficulty: 'Easy',
    description: 'Given an array of heights, find the maximum width between two indices `i` and `j` (`i < j`) such that `height[j] >= height[i]`. Return the maximum width.',
    constraints: [
      '2 <= height.length <= 10^5',
      '0 <= height[i] <= 10^4'
    ],
    examples: [
      {
        input: 'height = [6,0,8,2,1,5]',
        output: '4',
        explanation: 'The maximum valid width is between indices 1 and 5.'
      },
      {
        input: 'height = [5,4,3,2,1]',
        output: '0',
        explanation: 'No valid increasing pair exists.'
      }
    ],
    testCases: [
      {
        input: '6\n6 0 8 2 1 5',
        expectedOutput: '4',
        hidden: false
      },
      {
        input: '5\n5 4 3 2 1',
        expectedOutput: '0',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def max_width(height):\n    pass\n\nn=int(input())\nheight=list(map(int,input().split()))\nprint(max_width(height))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int maxWidth(int[] height){\n        return 0;\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            System.out.println(maxWidth(height));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maxWidth(int* height,int size){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    printf("%d\\n",maxWidth(height,n));\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maxWidth(vector<int>& height){\n    return 0;\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> height(n);\n        for(int i=0;i<n;i++) cin>>height[i];\n        cout<<maxWidth(height)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'cwm-e3',
    title: 'Maximum Area Between Adjacent Lines',
    difficulty: 'Easy',
    description: 'Given an array of heights, find the maximum water that can be stored using only adjacent vertical lines.',
    constraints: [
      '2 <= height.length <= 10^5',
      '0 <= height[i] <= 10^4'
    ],
    examples: [
      {
        input: 'height = [3,7,2,5]',
        output: '3',
        explanation: 'The first two adjacent lines form the maximum area: min(3,7) × 1 = 3.'
      },
      {
        input: 'height = [1,2]',
        output: '1',
        explanation: 'Only one adjacent pair exists.'
      }
    ],
    testCases: [
      {
        input: '4\n3 7 2 5',
        expectedOutput: '3',
        hidden: false
      },
      {
        input: '2\n1 2',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def max_adjacent_area(height):\n    pass\n\nn=int(input())\nheight=list(map(int,input().split()))\nprint(max_adjacent_area(height))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int maxAdjacentArea(int[] height){\n        return 0;\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            System.out.println(maxAdjacentArea(height));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maxAdjacentArea(int* height,int size){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    printf("%d\\n",maxAdjacentArea(height,n));\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maxAdjacentArea(vector<int>& height){\n    return 0;\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> height(n);\n        for(int i=0;i<n;i++) cin>>height[i];\n        cout<<maxAdjacentArea(height)<<"\\n";\n    }\n    return 0;\n}'
    }
  },   {
    id: 'cwm-e4',
    title: 'Tallest Boundary Container',
    difficulty: 'Easy',
    description: 'Given an array of heights, find the maximum area formed using the tallest line in the array and any other line.',
    constraints: [
      '2 <= height.length <= 10^5',
      '0 <= height[i] <= 10^4'
    ],
    examples: [
      {
        input: 'height = [1,8,6,2,5,4]',
        output: '18',
        explanation: 'Using the tallest line (8) and height 6 gives area min(8,6) × 3 = 18.'
      },
      {
        input: 'height = [5,1]',
        output: '1',
        explanation: 'Only one possible container exists.'
      }
    ],
    testCases: [
      {
        input: '6\n1 8 6 2 5 4',
        expectedOutput: '18',
        hidden: false
      },
      {
        input: '2\n5 1',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def tallest_boundary_container(height):\n    pass\n\nn=int(input())\nheight=list(map(int,input().split()))\nprint(tallest_boundary_container(height))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int tallestBoundaryContainer(int[] height){\n        return 0;\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            System.out.println(tallestBoundaryContainer(height));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint tallestBoundaryContainer(int* height,int size){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    printf("%d\\n",tallestBoundaryContainer(height,n));\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint tallestBoundaryContainer(vector<int>& height){\n    return 0;\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> height(n);\n        for(int i=0;i<n;i++) cin>>height[i];\n        cout<<tallestBoundaryContainer(height)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'cwm-e5',
    title: 'Maximum Area With Fixed Left Boundary',
    difficulty: 'Easy',
    description: 'Given an array of heights, consider the leftmost line as fixed. Find the maximum area that can be formed using this line and any other line.',
    constraints: [
      '2 <= height.length <= 10^5',
      '0 <= height[i] <= 10^4'
    ],
    examples: [
      {
        input: 'height = [4,3,2,1,4]',
        output: '16',
        explanation: 'Using the first and last lines gives area min(4,4) × 4 = 16.'
      },
      {
        input: 'height = [1,2]',
        output: '1',
        explanation: 'Only one possible container exists.'
      }
    ],
    testCases: [
      {
        input: '5\n4 3 2 1 4',
        expectedOutput: '16',
        hidden: false
      },
      {
        input: '2\n1 2',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def fixed_left_container(height):\n    pass\n\nn=int(input())\nheight=list(map(int,input().split()))\nprint(fixed_left_container(height))',

      java: 'import java.util.*;\n\npublic class Main{\n    public static int fixedLeftContainer(int[] height){\n        return 0;\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            System.out.println(fixedLeftContainer(height));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint fixedLeftContainer(int* height,int size){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    printf("%d\\n",fixedLeftContainer(height,n));\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint fixedLeftContainer(vector<int>& height){\n    return 0;\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> height(n);\n        for(int i=0;i<n;i++) cin>>height[i];\n        cout<<fixedLeftContainer(height)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  // --- MEDIUM ---

  {
    id: 'cwm-m1',
    title: 'Container With Minimum Required Area',
    difficulty: 'Medium',
    description: 'Given an array of heights and an integer K, determine whether there exists a pair of lines that can form a container having an area greater than or equal to K.',
    constraints: [
      '2 <= height.length <= 10^5',
      '1 <= K <= 10^9'
    ],
    examples: [
      {
        input: 'height = [1,8,6,2,5,4,8,3,7], K = 40',
        output: 'true',
        explanation: 'The maximum area is 49 which is greater than or equal to 40.'
      },
      {
        input: 'height = [1,1], K = 5',
        output: 'false',
        explanation: 'The largest possible area is only 1.'
      }
    ],
    testCases: [
      {
        input: '9\n1 8 6 2 5 4 8 3 7\n40',
        expectedOutput: 'true',
        hidden: false
      },
      {
        input: '2\n1 1\n5',
        expectedOutput: 'false',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def has_required_area(height,k):\n    pass\n\nn=int(input())\nheight=list(map(int,input().split()))\nk=int(input())\nprint(str(has_required_area(height,k)).lower())',

      java: 'import java.util.*;\n\npublic class Main {\n    public static boolean hasRequiredArea(int[] height,int k){\n        return false;\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            int k=sc.nextInt();\n            System.out.println(hasRequiredArea(height,k));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nbool hasRequiredArea(int* height,int size,int k){\n    return false;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    int k; scanf("%d",&k);\n    printf("%s\\n",hasRequiredArea(height,n,k)?"true":"false");\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool hasRequiredArea(vector<int>& height,int k){\n    return false;\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> height(n);\n        for(int i=0;i<n;i++) cin>>height[i];\n        int k; cin>>k;\n        cout<<(hasRequiredArea(height,k)?"true":"false")<<"\\n";\n    }\n    return 0;\n}'
    }
  },   {
    id: 'cwm-m2',
    title: 'Best Pair of Lines',
    difficulty: 'Medium',
    description: 'Given an array of heights, return the indices of the two lines that form the container with the maximum amount of water. If multiple answers exist, return any one of them.',
    constraints: [
      '2 <= height.length <= 10^5',
      '0 <= height[i] <= 10^4'
    ],
    examples: [
      {
        input: 'height = [1,8,6,2,5,4,8,3,7]',
        output: '[1,8]',
        explanation: 'The lines at indices 1 and 8 form the maximum area of 49.'
      },
      {
        input: 'height = [1,1]',
        output: '[0,1]',
        explanation: 'Only one valid pair exists.'
      }
    ],
    testCases: [
      {
        input: '9\n1 8 6 2 5 4 8 3 7',
        expectedOutput: '1 8',
        hidden: false
      },
      {
        input: '2\n1 1',
        expectedOutput: '0 1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def best_pair(height):\n    pass\n\nn=int(input())\nheight=list(map(int,input().split()))\nans=best_pair(height)\nprint(ans[0],ans[1])',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int[] bestPair(int[] height){\n        return new int[]{0,0};\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            int[] ans=bestPair(height);\n            System.out.println(ans[0]+" "+ans[1]);\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid bestPair(int* height,int size,int* left,int* right){\n    *left=0; *right=0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    int l,r;\n    bestPair(height,n,&l,&r);\n    printf("%d %d\\n",l,r);\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\npair<int,int> bestPair(vector<int>& height){\n    return {0,0};\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> height(n);\n        for(int i=0;i<n;i++) cin>>height[i];\n        auto ans=bestPair(height);\n        cout<<ans.first<<" "<<ans.second<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'cwm-m3',
    title: 'Maximum Container After One Height Update',
    difficulty: 'Medium',
    description: 'Given an array of heights, an index and a new height, update the height at that index and return the maximum container area after the update.',
    constraints: [
      '2 <= height.length <= 10^5',
      '0 <= height[i], newHeight <= 10^4'
    ],
    examples: [
      {
        input: 'height = [1,8,6,2,5], index = 3, newHeight = 10',
        output: '16',
        explanation: 'After updating the height, the largest possible container has area 16.'
      },
      {
        input: 'height = [1,1], index = 0, newHeight = 5',
        output: '1',
        explanation: 'Only one container exists.'
      }
    ],
    testCases: [
      {
        input: '5\n1 8 6 2 5\n3\n10',
        expectedOutput: '16',
        hidden: false
      },
      {
        input: '2\n1 1\n0\n5',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def updated_max_area(height,index,new_height):\n    pass\n\nn=int(input())\nheight=list(map(int,input().split()))\nindex=int(input())\nnew_height=int(input())\nprint(updated_max_area(height,index,new_height))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int updatedMaxArea(int[] height,int index,int newHeight){\n        return 0;\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            int index=sc.nextInt();\n            int newHeight=sc.nextInt();\n            System.out.println(updatedMaxArea(height,index,newHeight));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint updatedMaxArea(int* height,int size,int index,int newHeight){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    int index,newHeight;\n    scanf("%d%d",&index,&newHeight);\n    printf("%d\\n",updatedMaxArea(height,n,index,newHeight));\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint updatedMaxArea(vector<int>& height,int index,int newHeight){\n    return 0;\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> height(n);\n        for(int i=0;i<n;i++) cin>>height[i];\n        int index,newHeight;\n        cin>>index>>newHeight;\n        cout<<updatedMaxArea(height,index,newHeight)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'cwm-m4',
    title: 'Container With Height Constraint',
    difficulty: 'Medium',
    description: 'Given an array of heights and an integer H, find the maximum container area using only lines whose heights are greater than or equal to H.',
    constraints: [
      '2 <= height.length <= 10^5',
      '0 <= height[i] <= 10^4'
    ],
    examples: [
      {
        input: 'height = [1,8,6,2,5,4,8,3,7], H = 6',
        output: '49',
        explanation: 'Only heights ≥ 6 are considered. The maximum area is still 49.'
      },
      {
        input: 'height = [1,2,3], H = 5',
        output: '0',
        explanation: 'No valid pair exists.'
      }
    ],
    testCases: [
      {
        input: '9\n1 8 6 2 5 4 8 3 7\n6',
        expectedOutput: '49',
        hidden: false
      },
      {
        input: '3\n1 2 3\n5',
        expectedOutput: '0',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def constrained_container(height,h):\n    pass\n\nn=int(input())\nheight=list(map(int,input().split()))\nh=int(input())\nprint(constrained_container(height,h))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int constrainedContainer(int[] height,int h){\n        return 0;\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            int h=sc.nextInt();\n            System.out.println(constrainedContainer(height,h));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint constrainedContainer(int* height,int size,int h){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    int h;\n    scanf("%d",&h);\n    printf("%d\\n",constrainedContainer(height,n,h));\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint constrainedContainer(vector<int>& height,int h){\n    return 0;\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> height(n);\n        for(int i=0;i<n;i++) cin>>height[i];\n        int h;\n        cin>>h;\n        cout<<constrainedContainer(height,h)<<"\\n";\n    }\n    return 0;\n}'
    }
  },   {
    id: 'cwm-m5',
    title: 'Maximum Area After Removing One Line',
    difficulty: 'Medium',
    description: 'Given an array of heights, remove exactly one line from the array. Return the maximum container area that can be formed using the remaining lines.',
    constraints: [
      '2 <= height.length <= 10^5',
      '0 <= height[i] <= 10^4'
    ],
    examples: [
      {
        input: 'height = [1,8,6,2,5]',
        output: '15',
        explanation: 'Removing the height 2 allows the remaining lines to form a maximum area of 15.'
      },
      {
        input: 'height = [1,1,1]',
        output: '1',
        explanation: 'Removing any one line still leaves a maximum area of 1.'
      }
    ],
    testCases: [
      {
        input: '5\n1 8 6 2 5',
        expectedOutput: '15',
        hidden: false
      },
      {
        input: '3\n1 1 1',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def max_area_after_removal(height):\n    pass\n\nn=int(input())\nheight=list(map(int,input().split()))\nprint(max_area_after_removal(height))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int maxAreaAfterRemoval(int[] height){\n        return 0;\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            System.out.println(maxAreaAfterRemoval(height));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maxAreaAfterRemoval(int* height,int size){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    printf("%d\\n",maxAreaAfterRemoval(height,n));\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maxAreaAfterRemoval(vector<int>& height){\n    return 0;\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> height(n);\n        for(int i=0;i<n;i++) cin>>height[i];\n        cout<<maxAreaAfterRemoval(height)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  // --- HARD ---

  {
    id: 'cwm-h1',
    title: 'Container With Variable Width',
    difficulty: 'Hard',
    description: 'Given two arrays `position` and `height`, where `position[i]` represents the x-coordinate of the i-th vertical line, find the maximum amount of water that can be stored between any two lines.',
    constraints: [
      '2 <= position.length == height.length <= 10^5',
      '0 <= height[i] <= 10^4',
      'position is strictly increasing'
    ],
    examples: [
      {
        input: 'position = [1,3,6,10], height = [2,5,4,3]',
        output: '14',
        explanation: 'The maximum area is between positions 3 and 10.'
      },
      {
        input: 'position = [0,2], height = [1,1]',
        output: '2',
        explanation: 'Width is 2 and height is 1.'
      }
    ],
    testCases: [
      {
        input: '4\n1 3 6 10\n2 5 4 3',
        expectedOutput: '14',
        hidden: false
      },
      {
        input: '2\n0 2\n1 1',
        expectedOutput: '2',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def max_variable_width(position,height):\n    pass\n\nn=int(input())\nposition=list(map(int,input().split()))\nheight=list(map(int,input().split()))\nprint(max_variable_width(position,height))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int maxVariableWidth(int[] position,int[] height){\n        return 0;\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] position=new int[n];\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) position[i]=sc.nextInt();\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            System.out.println(maxVariableWidth(position,height));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maxVariableWidth(int* position,int* height,int size){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* position=(int*)malloc(n*sizeof(int));\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&position[i]);\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    printf("%d\\n",maxVariableWidth(position,height,n));\n    free(position);\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maxVariableWidth(vector<int>& position,vector<int>& height){\n    return 0;\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> position(n),height(n);\n        for(int i=0;i<n;i++) cin>>position[i];\n        for(int i=0;i<n;i++) cin>>height[i];\n        cout<<maxVariableWidth(position,height)<<"\\n";\n    }\n    return 0;\n}'
    }
  },   {
    id: 'cwm-h2',
    title: 'Maximum Water With K Pointer Moves',
    difficulty: 'Hard',
    description: 'Given an array of heights and an integer K, start with two pointers at both ends of the array. You may move either pointer inward at most K times in total. Return the maximum container area that can be formed.',
    constraints: [
      '2 <= height.length <= 10^5',
      '1 <= K <= height.length'
    ],
    examples: [
      {
        input: 'height = [1,8,6,2,5,4,8,3,7], K = 4',
        output: '49',
        explanation: 'The maximum area achievable within 4 pointer moves is 49.'
      },
      {
        input: 'height = [1,1], K = 1',
        output: '1',
        explanation: 'Only one container can be formed.'
      }
    ],
    testCases: [
      {
        input: '9\n1 8 6 2 5 4 8 3 7\n4',
        expectedOutput: '49',
        hidden: false
      },
      {
        input: '2\n1 1\n1',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def max_area_k_moves(height,k):\n    pass\n\nn=int(input())\nheight=list(map(int,input().split()))\nk=int(input())\nprint(max_area_k_moves(height,k))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int maxAreaKMoves(int[] height,int k){\n        return 0;\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            int k=sc.nextInt();\n            System.out.println(maxAreaKMoves(height,k));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maxAreaKMoves(int* height,int size,int k){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    int k; scanf("%d",&k);\n    printf("%d\\n",maxAreaKMoves(height,n,k));\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maxAreaKMoves(vector<int>& height,int k){\n    return 0;\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> height(n);\n        for(int i=0;i<n;i++) cin>>height[i];\n        int k; cin>>k;\n        cout<<maxAreaKMoves(height,k)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'cwm-h3',
    title: 'Dynamic Container Queries',
    difficulty: 'Hard',
    description: 'Given an array of heights and multiple update queries, update the specified height after each query and return the maximum container area after every update.',
    constraints: [
      '2 <= height.length <= 10^5',
      '1 <= queries <= 10^5'
    ],
    examples: [
      {
        input: 'height = [1,8,6,2], updates = [(2,10)]',
        output: '[16]',
        explanation: 'After updating index 2 to 10, the maximum container area becomes 16.'
      },
      {
        input: 'height = [1,1], updates = [(1,5)]',
        output: '[1]',
        explanation: 'Only one possible container remains.'
      }
    ],
    testCases: [
      {
        input: '4\n1 8 6 2\n1\n2 10',
        expectedOutput: '16',
        hidden: false
      },
      {
        input: '2\n1 1\n1\n1 5',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def dynamic_queries(height,queries):\n    pass\n\nn=int(input())\nheight=list(map(int,input().split()))\nq=int(input())\nqueries=[tuple(map(int,input().split())) for _ in range(q)]\nprint(*dynamic_queries(height,queries))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static List<Integer> dynamicQueries(int[] height,int[][] queries){\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            int q=sc.nextInt();\n            int[][] queries=new int[q][2];\n            for(int i=0;i<q;i++){\n                queries[i][0]=sc.nextInt();\n                queries[i][1]=sc.nextInt();\n            }\n            List<Integer> ans=dynamicQueries(height,queries);\n            for(int x:ans) System.out.print(x+\" \");\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid dynamicQueries(int* height,int size,int q){}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    int q; scanf("%d",&q);\n    for(int i=0;i<q;i++){\n        int idx,val;\n        scanf("%d%d",&idx,&val);\n    }\n    dynamicQueries(height,n,q);\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> dynamicQueries(vector<int>& height,vector<pair<int,int>>& queries){\n    return {};\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> height(n);\n        for(int i=0;i<n;i++) cin>>height[i];\n        int q; cin>>q;\n        vector<pair<int,int>> queries(q);\n        for(int i=0;i<q;i++) cin>>queries[i].first>>queries[i].second;\n        vector<int> ans=dynamicQueries(height,queries);\n        for(int x:ans) cout<<x<<" ";\n    }\n    return 0;\n}'
    }
  },   {
    id: 'cwm-h4',
    title: 'Top K Maximum Containers',
    difficulty: 'Hard',
    description: 'Given an array of heights and an integer K, return the K largest distinct container areas that can be formed using any two lines. Return the areas in descending order.',
    constraints: [
      '2 <= height.length <= 10^5',
      '1 <= K <= 100'
    ],
    examples: [
      {
        input: 'height = [1,8,6,2,5,4,8,3,7], K = 3',
        output: '[49,40,36]',
        explanation: 'The three largest distinct container areas are 49, 40 and 36.'
      },
      {
        input: 'height = [1,1], K = 1',
        output: '[1]',
        explanation: 'Only one container area exists.'
      }
    ],
    testCases: [
      {
        input: '9\n1 8 6 2 5 4 8 3 7\n3',
        expectedOutput: '49 40 36',
        hidden: false
      },
      {
        input: '2\n1 1\n1',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def top_k_containers(height,k):\n    pass\n\nn=int(input())\nheight=list(map(int,input().split()))\nk=int(input())\nprint(*top_k_containers(height,k))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static List<Integer> topKContainers(int[] height,int k){\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            int k=sc.nextInt();\n            List<Integer> ans=topKContainers(height,k);\n            for(int x:ans) System.out.print(x+" ");\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid topKContainers(int* height,int size,int k){}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    int k; scanf("%d",&k);\n    topKContainers(height,n,k);\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> topKContainers(vector<int>& height,int k){\n    return {};\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> height(n);\n        for(int i=0;i<n;i++) cin>>height[i];\n        int k; cin>>k;\n        vector<int> ans=topKContainers(height,k);\n        for(int x:ans) cout<<x<<" ";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'cwm-h5',
    title: 'Maximum Container in Circular Array',
    difficulty: 'Hard',
    description: 'Given an array of heights arranged in a circular manner, find the maximum amount of water that can be contained between any two lines considering the circular distance.',
    constraints: [
      '2 <= height.length <= 10^5',
      '0 <= height[i] <= 10^4'
    ],
    examples: [
      {
        input: 'height = [2,1,5,4]',
        output: '8',
        explanation: 'Considering the circular arrangement, the maximum container area is 8.'
      },
      {
        input: 'height = [1,1]',
        output: '1',
        explanation: 'Only one possible container exists.'
      }
    ],
    testCases: [
      {
        input: '4\n2 1 5 4',
        expectedOutput: '8',
        hidden: false
      },
      {
        input: '2\n1 1',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def circular_container(height):\n    pass\n\nn=int(input())\nheight=list(map(int,input().split()))\nprint(circular_container(height))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int circularContainer(int[] height){\n        return 0;\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] height=new int[n];\n            for(int i=0;i<n;i++) height[i]=sc.nextInt();\n            System.out.println(circularContainer(height));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint circularContainer(int* height,int size){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* height=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&height[i]);\n    printf("%d\\n",circularContainer(height,n));\n    free(height);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint circularContainer(vector<int>& height){\n    return 0;\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> height(n);\n        for(int i=0;i<n;i++) cin>>height[i];\n        cout<<circularContainer(height)<<"\\n";\n    }\n    return 0;\n}'
    }
  }

];