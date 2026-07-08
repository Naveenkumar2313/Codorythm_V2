export const FractionalKnapsackProblems = [
  // --- EASY ---
  {
    id: 'fk-e1',title: 'Fractional Knapsack',difficulty: 'Easy',
    description: 'Given values and weights of items and a knapsack capacity W, maximize the total value that can be obtained. Fractions of items may be taken.',
    constraints: ['1 <= n <= 10^4','1 <= value[i], weight[i] <= 10^5','1 <= W <= 10^6'],
    examples: [
      { input: '3\n60 100 120\n10 20 30\n50', output: '240.00', explanation: 'Take first two items completely and 2/3 of the third item.'},
      { input: '2\n100 60\n20 10\n10', output: '60.00', explanation: 'Take second item completely.'
      }
    ],
    testCases: [
      { input: '3\n60 100 120\n10 20 30\n50', expectedOutput: '240.00', hidden: false },
      { input: '2\n100 60\n20 10\n10', expectedOutput: '60.00', hidden: false }
    ],
    starterCode: {
      python: 'def fractional_knapsack(values, weights, capacity):\n    pass\n\nn = int(input())\nvalues = list(map(int,input().split()))\nweights = list(map(int,input().split()))\ncapacity = int(input())\nprint(f"{fractional_knapsack(values,weights,capacity):.2f}")',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static double fractionalKnapsack(int[] values, int[] weights, int capacity) {\n        return 0.0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] values = new int[n];\n        int[] weights = new int[n];\n        for(int i=0;i<n;i++) values[i]=sc.nextInt();\n        for(int i=0;i<n;i++) weights[i]=sc.nextInt();\n        int capacity=sc.nextInt();\n        System.out.printf("%.2f\\n", fractionalKnapsack(values,weights,capacity));\n    }\n}',
      c: '#include <stdio.h>\n\ndouble fractionalKnapsack(int values[], int weights[], int n, int capacity) {\n    return 0.0;\n}\n\nint main() {\n    int n;\n    scanf("%d",&n);\n    int values[n], weights[n];\n    for(int i=0;i<n;i++) scanf("%d",&values[i]);\n    for(int i=0;i<n;i++) scanf("%d",&weights[i]);\n    int capacity;\n    scanf("%d",&capacity);\n    printf("%.2f\\n", fractionalKnapsack(values,weights,n,capacity));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\ndouble fractionalKnapsack(vector<int>& values, vector<int>& weights, int capacity) {\n    return 0.0;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> values(n), weights(n);\n    for(int i=0;i<n;i++) cin >> values[i];\n    for(int i=0;i<n;i++) cin >> weights[i];\n    int capacity;\n    cin >> capacity;\n    cout << fractionalKnapsack(values,weights,capacity);\n    return 0;\n}'
    }
  },
   {
    id: 'fk-e2',title: 'Assign Cookies',difficulty: 'Easy',
    description: 'Each child has a greed factor and each cookie has a size. Assign cookies to maximize the number of content children.',
    constraints: ['1 <= n,m <= 10^4'],
    examples: [
      { input: '3\n1 2 3\n2\n1 1', output: '1', explanation: 'Only one child can be satisfied.' },
      { input: '2\n1 2\n3\n1 2 3', output: '2', explanation: 'Both children can be satisfied.' }
    ],
    testCases: [
      { input: '3\n1 2 3\n2\n1 1', expectedOutput: '1', hidden: false },
      { input: '2\n1 2\n3\n1 2 3', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'def assign_cookies(g, s):\n    pass\n\nn = int(input())\ng = list(map(int,input().split()))\nm = int(input())\ns = list(map(int,input().split()))\nprint(assign_cookies(g,s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int assignCookies(int[] g, int[] s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] g = new int[n];\n        for(int i=0;i<n;i++) g[i]=sc.nextInt();\n        int m = sc.nextInt();\n        int[] s = new int[m];\n        for(int i=0;i<m;i++) s[i]=sc.nextInt();\n        System.out.println(assignCookies(g,s));\n    }\n}',
      c: '#include <stdio.h>\n\nint assignCookies(int g[], int n, int s[], int m) {\n    return 0;\n}\n\nint main() {\n    int n;\n    scanf("%d",&n);\n    int g[n];\n    for(int i=0;i<n;i++) scanf("%d",&g[i]);\n    int m;\n    scanf("%d",&m);\n    int s[m];\n    for(int i=0;i<m;i++) scanf("%d",&s[i]);\n    printf("%d\\n", assignCookies(g,n,s,m));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint assignCookies(vector<int>& g, vector<int>& s) {\n    return 0;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> g(n);\n    for(int i=0;i<n;i++) cin >> g[i];\n    int m;\n    cin >> m;\n    vector<int> s(m);\n    for(int i=0;i<m;i++) cin >> s[i];\n    cout << assignCookies(g,s);\n    return 0;\n}'
    }
  },

  {
    id: 'fk-e3',title: 'Maximum Units on a Truck',difficulty: 'Easy',
    description: 'You are given box types where boxTypes[i] = [numberOfBoxes, unitsPerBox]. Return the maximum total units that can be loaded on the truck.',
    constraints: ['1 <= boxTypes.length <= 10^4','1 <= truckSize <= 10^6'],
    examples: [
      { input: '3\n1 3\n2 2\n3 1\n4', output: '8', explanation: 'Load boxes with highest units first.' },
      { input: '2\n5 10\n2 5\n3', output: '30', explanation: 'Take 3 boxes of first type.' }
    ],
    testCases: [
      { input: '3\n1 3\n2 2\n3 1\n4', expectedOutput: '8', hidden: false },
      { input: '2\n5 10\n2 5\n3', expectedOutput: '30', hidden: false }
    ],
    starterCode: {
      python: 'def maximum_units(box_types, truck_size):\n    pass',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int maximumUnits(int[][] boxTypes, int truckSize) {\n        return 0;\n    }\n}',
      c: '#include <stdio.h>\n\nint maximumUnits(int boxTypes[][2], int n, int truckSize) {\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {\n    return 0;\n}'
    }
  },

  {
    id: 'fk-e4',title: 'Minimum Coins Required',difficulty: 'Easy',
    description: 'Given an amount, find the minimum number of Indian currency coins/notes required to make that amount.',
    constraints: ['1 <= amount <= 10^6'],
    examples: [
      { input: '2753', output: '6', explanation: '2000+500+200+50+2+1' },
      { input: '49', output: '5', explanation: '20+20+5+2+2' }
    ],
    testCases: [
      { input: '2753', expectedOutput: '6', hidden: false },
      { input: '49', expectedOutput: '5', hidden: false }
    ],
    starterCode: {
      python: 'def min_coins(amount):\n    pass\n\namount = int(input())\nprint(min_coins(amount))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int minCoins(int amount) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int amount = sc.nextInt();\n        System.out.println(minCoins(amount));\n    }\n}',
      c: '#include <stdio.h>\n\nint minCoins(int amount) {\n    return 0;\n}\n\nint main() {\n    int amount;\n    scanf("%d",&amount);\n    printf("%d\\n", minCoins(amount));\n    return 0;\n}',
      cpp: '#include <iostream>\nusing namespace std;\n\nint minCoins(int amount) {\n    return 0;\n}\n\nint main() {\n    int amount;\n    cin >> amount;\n    cout << minCoins(amount);\n    return 0;\n}'
    }
  },

  {
    id: 'fk-e5',title: 'Lemonade Change',difficulty: 'Easy',
    description: 'Customers are standing in a queue to buy lemonade. Each lemonade costs $5. Return true if you can provide every customer with correct change.',
    constraints: ['1 <= bills.length <= 10^5'],
    examples: [
      { input: '5\n5 5 5 10 20', output: 'true', explanation: 'Change can be given to all customers.' },
      { input: '2\n10 10', output: 'false', explanation: 'No $5 bill available for change.' }
    ],
    testCases: [
      { input: '5\n5 5 5 10 20', expectedOutput: 'true', hidden: false },
      { input: '2\n10 10', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def lemonade_change(bills):\n    pass\n\nn = int(input())\nbills = list(map(int,input().split()))\nprint(str(lemonade_change(bills)).lower())',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean lemonadeChange(int[] bills) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] bills = new int[n];\n        for(int i=0;i<n;i++) bills[i]=sc.nextInt();\n        System.out.println(lemonadeChange(bills));\n    }\n}',
      c: '#include <stdio.h>\n\nint lemonadeChange(int bills[], int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    scanf("%d",&n);\n    int bills[n];\n    for(int i=0;i<n;i++) scanf("%d",&bills[i]);\n    printf("%s\\n", lemonadeChange(bills,n) ? "true" : "false");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool lemonadeChange(vector<int>& bills) {\n    return false;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> bills(n);\n    for(int i=0;i<n;i++) cin >> bills[i];\n    cout << (lemonadeChange(bills) ? "true" : "false");\n    return 0;\n}'
    }
  },
  // --- MEDIUM ---
    {
    id: 'fk-m1',title: 'Job Sequencing Problem',difficulty: 'Medium',
    description: 'Given jobs with deadlines and profits, schedule jobs to maximize total profit. Each job takes 1 unit of time.',
    constraints: ['1 <= n <= 10^4','1 <= deadline[i] <= 10^4','1 <= profit[i] <= 10^5'],
    examples: [
      { input: 'jobs = [[1,4,20],[2,1,10],[3,1,40],[4,1,30]]', output: '60', explanation: 'Schedule jobs with profits 40 and 20 for maximum profit.' },
      { input: 'jobs = [[1,2,100],[2,1,50],[3,2,10]]', output: '150', explanation: 'Choose first and second jobs.' }
    ],
    testCases: [
      { input: '4\n1 4 20\n2 1 10\n3 1 40\n4 1 30', expectedOutput: '60', hidden: false },
      { input: '3\n1 2 100\n2 1 50\n3 2 10', expectedOutput: '150', hidden: false }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs):\n    pass',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int jobSequencing(int[][] jobs) {\n        return 0;\n    }\n}',
      c: '#include <stdio.h>\n\nint jobSequencing(int jobs[][3], int n) {\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint jobSequencing(vector<vector<int>>& jobs) {\n    return 0;\n}'
    }
  },
  {
    id: 'fk-m2',title: 'Activity Selection',difficulty: 'Medium',
    description: 'Given start and finish times of activities, select the maximum number of non-overlapping activities.',
    constraints: ['1 <= n <= 10^5'],
    examples: [
      { input: 'start = [1,3,0,5,8,5], finish = [2,4,6,7,9,9]', output: '4', explanation: 'Maximum of 4 activities can be selected.' },
      { input: 'start = [10,12,20], finish = [20,25,30]', output: '2', explanation: 'Select first and third activity.' }
    ],
    testCases: [
      { input: '6\n1 3 0 5 8 5\n2 4 6 7 9 9', expectedOutput: '4', hidden: false },
      { input: '3\n10 12 20\n20 25 30', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'def activity_selection(start, finish):\n    pass',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int activitySelection(int[] start, int[] finish) {\n        return 0;\n    }\n}',
      c: '#include <stdio.h>\n\nint activitySelection(int start[], int finish[], int n) {\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint activitySelection(vector<int>& start, vector<int>& finish) {\n    return 0;\n}'
    }
  },
  {
    id: 'fk-m3',title: 'Minimum Platforms',difficulty: 'Medium',
    description: 'Given arrival and departure times of trains, find the minimum number of platforms required so that no train waits.',
    constraints: ['1 <= n <= 10^4'],
    examples: [
      { input: 'arrival = [900,940,950,1100,1500,1800], departure = [910,1200,1120,1130,1900,2000]', output: '3', explanation: 'Minimum 3 platforms are required.' },
      { input: 'arrival = [900,1100,1235], departure = [1000,1200,1240]', output: '1', explanation: 'Only one platform is needed.' }
    ],
    testCases: [
      { input: '6\n900 940 950 1100 1500 1800\n910 1200 1120 1130 1900 2000', expectedOutput: '3', hidden: false },
      { input: '3\n900 1100 1235\n1000 1200 1240', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: 'def minimum_platforms(arrival, departure):\n    pass',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int minimumPlatforms(int[] arrival, int[] departure) {\n        return 0;\n    }\n}',
      c: '#include <stdio.h>\n\nint minimumPlatforms(int arrival[], int departure[], int n) {\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint minimumPlatforms(vector<int>& arrival, vector<int>& departure) {\n    return 0;\n}'
    }
  },
  {
    id: 'fk-m4',title: 'Gas Station',difficulty: 'Medium',
    description: 'There are n gas stations in a circle. Return the starting gas station index if you can travel around the circuit once, otherwise return -1.',
    constraints: ['1 <= n <= 10^5'],
    examples: [
      { input: 'gas = [1,2,3,4,5], cost = [3,4,5,1,2]', output: '3', explanation: 'Start at station 3.' },
      { input: 'gas = [2,3,4], cost = [3,4,3]', output: '-1', explanation: 'No valid starting station exists.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n3 4 5 1 2', expectedOutput: '3', hidden: false },
      { input: '3\n2 3 4\n3 4 3', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: 'def can_complete_circuit(gas, cost):\n    pass',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int canCompleteCircuit(int[] gas, int[] cost) {\n        return -1;\n    }\n}',
      c: '#include <stdio.h>\n\nint canCompleteCircuit(int gas[], int cost[], int n) {\n    return -1;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint canCompleteCircuit(vector<int>& gas, vector<int>& cost) {\n    return -1;\n}'
    }
  },
  {
    id: 'fk-m5',title: 'Partition Labels',difficulty: 'Medium',
    description: 'Partition a string into as many parts as possible so that each letter appears in at most one part.',
    constraints: ['1 <= s.length <= 10^5'],
    examples: [
      { input: 's = "ababcbacadefegdehijhklij"', output: '[9,7,8]', explanation: 'The partitions are "ababcbaca", "defegde", "hijhklij".' },
      { input: 's = "eccbbbbdec"', output: '[10]', explanation: 'Only one partition is possible.' }
    ],
    testCases: [
      { input: 'ababcbacadefegdehijhklij', expectedOutput: '[9,7,8]', hidden: false },
      { input: 'eccbbbbdec', expectedOutput: '[10]', hidden: false }
    ],
    starterCode: {
      python: 'def partition_labels(s):\n    pass',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> partitionLabels(String s) {\n        return new ArrayList<>();\n    }\n}',
      c: '#include <stdio.h>\n\nvoid partitionLabels(char s[]) {\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> partitionLabels(string s) {\n    return {};\n}'
    }
  },
  // --- HARD ---
    {
    id: 'fk-h1',title: 'Huffman Coding',difficulty: 'Hard',
    description: 'Given characters and their frequencies, construct a Huffman Tree and return the minimum number of bits required to encode the data.',
    constraints: ['1 <= n <= 10^4','1 <= freq[i] <= 10^6'],
    examples: [
      { input: 'chars = [a,b,c,d,e,f], freq = [5,9,12,13,16,45]', output: '224', explanation: 'Huffman Coding minimizes the total encoded length.' },
      { input: 'chars = [a,b,c], freq = [10,20,30]', output: '90', explanation: 'Build optimal Huffman Tree.' }
    ],
    testCases: [
      { input: '6\n5 9 12 13 16 45', expectedOutput: '224', hidden: false },
      { input: '3\n10 20 30', expectedOutput: '90', hidden: false }
    ],
    starterCode: {
      python: 'def huffman_coding(freq):\n    pass',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int huffmanCoding(int[] freq) {\n        return 0;\n    }\n}',
      c: '#include <stdio.h>\n\nint huffmanCoding(int freq[], int n) {\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint huffmanCoding(vector<int>& freq) {\n    return 0;\n}'
    }
  },
  {
    id: 'fk-h2',title: 'Minimum Cost to Connect Ropes',difficulty: 'Hard',
    description: 'Given lengths of ropes, connect them into one rope with minimum total cost. Cost of connecting two ropes is equal to their sum.',
    constraints: ['1 <= n <= 10^5','1 <= ropes[i] <= 10^6'],
    examples: [
      { input: 'ropes = [4,3,2,6]', output: '29', explanation: 'Connect smallest ropes first.' },
      { input: 'ropes = [1,2,3]', output: '9', explanation: 'Minimum total cost is 9.' }
    ],
    testCases: [
      { input: '4\n4 3 2 6', expectedOutput: '29', hidden: false },
      { input: '3\n1 2 3', expectedOutput: '9', hidden: false }
    ],
    starterCode: {
      python: 'def min_cost_ropes(ropes):\n    pass',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int minCostRopes(int[] ropes) {\n        return 0;\n    }\n}',
      c: '#include <stdio.h>\n\nint minCostRopes(int ropes[], int n) {\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint minCostRopes(vector<int>& ropes) {\n    return 0;\n}'
    }
  },
  {
    id: 'fk-h3',title: 'Candy Distribution',difficulty: 'Hard',
    description: 'There are N children standing in a line. Each child is assigned a rating value. Give candies such that each child has at least one candy and children with higher ratings get more candies than their neighbours. Return minimum candies needed.',
    constraints: ['1 <= n <= 10^5'],
    examples: [
      { input: 'ratings = [1,0,2]', output: '5', explanation: 'Candies = [2,1,2]' },
      { input: 'ratings = [1,2,2]', output: '4', explanation: 'Candies = [1,2,1]' }
    ],
    testCases: [
      { input: '3\n1 0 2', expectedOutput: '5', hidden: false },
      { input: '3\n1 2 2', expectedOutput: '4', hidden: false }
    ],
    starterCode: {
      python: 'def candy_distribution(ratings):\n    pass',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int candyDistribution(int[] ratings) {\n        return 0;\n    }\n}',
      c: '#include <stdio.h>\n\nint candyDistribution(int ratings[], int n) {\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint candyDistribution(vector<int>& ratings) {\n    return 0;\n}'
    }
  },
  {
    id: 'fk-h4',title: 'Minimum Number of Refueling Stops',difficulty: 'Hard',
    description: 'A car travels towards a destination. Find the minimum number of refueling stops needed to reach the target destination.',
    constraints: ['1 <= stations.length <= 10^4','1 <= fuel <= 10^9'],
    examples: [
      { input: 'target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]', output: '2', explanation: 'Two refueling stops are required.' },
      { input: 'target = 100, startFuel = 1, stations = [[10,100]]', output: '-1', explanation: 'Destination cannot be reached.' }
    ],
    testCases: [
      { input: '100\n10\n4\n10 60\n20 30\n30 30\n60 40', expectedOutput: '2', hidden: false },
      { input: '100\n1\n1\n10 100', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: 'def min_refuel_stops(target, startFuel, stations):\n    pass',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int minRefuelStops(int target, int startFuel, int[][] stations) {\n        return 0;\n    }\n}',
      c: '#include <stdio.h>\n\nint minRefuelStops(int target, int startFuel, int stations[][2], int n) {\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint minRefuelStops(int target, int startFuel, vector<vector<int>>& stations) {\n    return 0;\n}'
    }
  },
  {
    id: 'fk-h5',title: 'Course Schedule III',difficulty: 'Hard',
    description: 'You are given courses where courses[i] = [duration, lastDay]. Return the maximum number of courses that can be taken.',
    constraints: ['1 <= courses.length <= 10^4','1 <= duration,lastDay <= 10^5'],
    examples: [
      { input: 'courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]', output: '3', explanation: 'Maximum 3 courses can be completed.' },
      { input: 'courses = [[1,2]]', output: '1', explanation: 'Only one course is available.' }
    ],
    testCases: [
      { input: '4\n100 200\n200 1300\n1000 1250\n2000 3200', expectedOutput: '3', hidden: false },
      { input: '1\n1 2', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: 'def schedule_courses(courses):\n    pass',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int scheduleCourses(int[][] courses) {\n        return 0;\n    }\n}',
      c: '#include <stdio.h>\n\nint scheduleCourses(int courses[][2], int n) {\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint scheduleCourses(vector<vector<int>>& courses) {\n    return 0;\n}'
    }
  }
];