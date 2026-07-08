export const jobSequencingProblems = [
  // --- EASY ---
  {
    id: 'js-e1',
    title: 'Classic Job Sequencing with Deadlines',
    difficulty: 'Easy',
    description: 'Given a list of jobs where every job has a unique ID, a deadline, and a profit, schedule the jobs such that the maximum total profit is earned. Each job takes exactly one unit of time and only one job can be scheduled in a single time slot.',
    constraints: [
      '1 <= jobs.length <= 100',
      '1 <= deadline <= 100',
      '1 <= profit <= 1000'
    ],
    examples: [
      {
        input: 'Jobs = [(A,2,100),(B,1,19),(C,2,27),(D,1,25),(E,3,15)]',
        output: '142',
        explanation: 'Schedule jobs A, C and E. Total profit = 100 + 27 + 15 = 142.'
      },
      {
        input: 'Jobs = [(J1,2,50),(J2,1,60),(J3,2,20)]',
        output: '110',
        explanation: 'Schedule jobs J2 and J1 to obtain the maximum profit.'
      }
    ],
    testCases: [
      {
        input: '5\nA 2 100\nB 1 19\nC 2 27\nD 1 25\nE 3 15',
        expectedOutput: '142',
        hidden: false
      },
      {
        input: '3\nJ1 2 50\nJ2 1 60\nJ3 2 20',
        expectedOutput: '110',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\nprint(job_sequencing(jobs))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int jobSequencing(String[][] jobs) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for (int i = 0; i < n; i++) {\n                jobs[i][0] = sc.next();\n                jobs[i][1] = sc.next();\n                jobs[i][2] = sc.next();\n            }\n            System.out.println(jobSequencing(jobs));\n        }\n    }\n}',

      c: '#include <stdio.h>\n\nint jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for (int i = 0; i < n; i++) {\n        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);\n    }\n    printf("%d\\n", jobSequencing(jobId, deadline, profit, n));\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nint jobSequencing(vector<vector<string>>& jobs) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<string>> jobs(n, vector<string>(3));\n        for (int i = 0; i < n; i++) {\n            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];\n        }\n        cout << jobSequencing(jobs) << "\\n";\n    }\n    return 0;\n}'
    }
  },  {
    id: 'js-e2',
    title: 'Maximum Number of Jobs Scheduled',
    difficulty: 'Easy',
    description: 'Given a list of jobs where each job has a deadline and profit, determine the maximum number of jobs that can be scheduled such that each job is completed before or on its deadline. Each job takes exactly one unit of time.',
    constraints: [
      '1 <= jobs.length <= 100',
      '1 <= deadline <= 100',
      '1 <= profit <= 1000'
    ],
    examples: [
      {
        input: 'Jobs = [(A,2,100),(B,1,19),(C,2,27),(D,1,25),(E,3,15)]',
        output: '3',
        explanation: 'Jobs A, C and E can be scheduled successfully.'
      },
      {
        input: 'Jobs = [(J1,1,35),(J2,1,30),(J3,2,25)]',
        output: '2',
        explanation: 'Only two jobs can be completed within the available slots.'
      }
    ],
    testCases: [
      {
        input: '5\nA 2 100\nB 1 19\nC 2 27\nD 1 25\nE 3 15',
        expectedOutput: '3',
        hidden: false
      },
      {
        input: '3\nJ1 1 35\nJ2 1 30\nJ3 2 25',
        expectedOutput: '2',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def max_jobs_scheduled(jobs):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\nprint(max_jobs_scheduled(jobs))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int maxJobsScheduled(String[][] jobs) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for (int i = 0; i < n; i++) {\n                jobs[i][0] = sc.next();\n                jobs[i][1] = sc.next();\n                jobs[i][2] = sc.next();\n            }\n            System.out.println(maxJobsScheduled(jobs));\n        }\n    }\n}',

      c: '#include <stdio.h>\n\nint maxJobsScheduled(char jobId[][20], int deadline[], int profit[], int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for (int i = 0; i < n; i++) {\n        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);\n    }\n    printf("%d\\n", maxJobsScheduled(jobId, deadline, profit, n));\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nint maxJobsScheduled(vector<vector<string>>& jobs) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<string>> jobs(n, vector<string>(3));\n        for (int i = 0; i < n; i++) {\n            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];\n        }\n        cout << maxJobsScheduled(jobs) << "\\n";\n    }\n    return 0;\n}'
    }
  },  {
    id: 'js-e3',
    title: 'Maximum Profit Scheduling',
    difficulty: 'Easy',
    description: 'Given a list of jobs where every job has a deadline and a profit, schedule the jobs such that the maximum total profit is earned. Each job requires exactly one unit of time and only one job can be executed at a time.',
    constraints: [
      '1 <= jobs.length <= 100',
      '1 <= deadline <= 100',
      '1 <= profit <= 1000'
    ],
    examples: [
      {
        input: 'Jobs = [(A,4,20),(B,1,10),(C,1,40),(D,1,30)]',
        output: '60',
        explanation: 'Schedule jobs C and A. Total profit = 40 + 20 = 60.'
      },
      {
        input: 'Jobs = [(J1,2,50),(J2,2,20),(J3,1,10)]',
        output: '70',
        explanation: 'Schedule jobs J1 and J2 for maximum profit.'
      }
    ],
    testCases: [
      {
        input: '4\nA 4 20\nB 1 10\nC 1 40\nD 1 30',
        expectedOutput: '60',
        hidden: false
      },
      {
        input: '3\nJ1 2 50\nJ2 2 20\nJ3 1 10',
        expectedOutput: '70',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\nprint(job_sequencing(jobs))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int jobSequencing(String[][] jobs) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for (int i = 0; i < n; i++) {\n                jobs[i][0] = sc.next();\n                jobs[i][1] = sc.next();\n                jobs[i][2] = sc.next();\n            }\n            System.out.println(jobSequencing(jobs));\n        }\n    }\n}',

      c: '#include <stdio.h>\n\nint jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for (int i = 0; i < n; i++) {\n        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);\n    }\n    printf("%d\\n", jobSequencing(jobId, deadline, profit, n));\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nint jobSequencing(vector<vector<string>>& jobs) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<string>> jobs(n, vector<string>(3));\n        for (int i = 0; i < n; i++) {\n            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];\n        }\n        cout << jobSequencing(jobs) << "\\n";\n    }\n    return 0;\n}'
    }
  }, {
    id: 'js-e4',
    title: 'Count Unscheduled Jobs',
    difficulty: 'Easy',
    description: 'Given a list of jobs where every job has a unique ID, a deadline, and a profit, schedule the jobs such that the maximum total profit is earned. Return the number of jobs that could not be scheduled before their deadlines.',
    constraints: [
      '1 <= jobs.length <= 100',
      '1 <= deadline <= 100',
      '1 <= profit <= 1000'
    ],
    examples: [
      {
        input: 'Jobs = [(A,2,100),(B,1,19),(C,2,27),(D,1,25),(E,3,15)]',
        output: '2',
        explanation: 'Jobs A, C and E are scheduled. Jobs B and D remain unscheduled.'
      },
      {
        input: 'Jobs = [(J1,1,20),(J2,2,30),(J3,3,40)]',
        output: '0',
        explanation: 'All jobs can be scheduled before their deadlines.'
      }
    ],
    testCases: [
      {
        input: '5\nA 2 100\nB 1 19\nC 2 27\nD 1 25\nE 3 15',
        expectedOutput: '2',
        hidden: false
      },
      {
        input: '3\nJ1 1 20\nJ2 2 30\nJ3 3 40',
        expectedOutput: '0',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\nprint(job_sequencing(jobs))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int jobSequencing(String[][] jobs) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for (int i = 0; i < n; i++) {\n                jobs[i][0] = sc.next();\n                jobs[i][1] = sc.next();\n                jobs[i][2] = sc.next();\n            }\n            System.out.println(jobSequencing(jobs));\n        }\n    }\n}',

      c: '#include <stdio.h>\n\nint jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for (int i = 0; i < n; i++) {\n        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);\n    }\n    printf("%d\\n", jobSequencing(jobId, deadline, profit, n));\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nint jobSequencing(vector<vector<string>>& jobs) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<string>> jobs(n, vector<string>(3));\n        for (int i = 0; i < n; i++) {\n            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];\n        }\n        cout << jobSequencing(jobs) << "\\n";\n    }\n    return 0;\n}'
    } 
  },{
    id: 'js-e5',
    title: 'Can All Jobs Be Scheduled?',
    difficulty: 'Easy',
    description: 'Given a list of jobs where every job has a unique ID, a deadline, and a profit, determine whether all jobs can be scheduled before or on their respective deadlines. Return `true` if every job can be scheduled; otherwise, return `false`.',
    constraints: [
      '1 <= jobs.length <= 100',
      '1 <= deadline <= 100',
      '1 <= profit <= 1000'
    ],
    examples: [
      {
        input: 'Jobs = [(A,1,20),(B,2,30),(C,3,40)]',
        output: 'true',
        explanation: 'All jobs can be assigned unique time slots before their deadlines.'
      },
      {
        input: 'Jobs = [(A,1,20),(B,1,30),(C,1,40)]',
        output: 'false',
        explanation: 'Only one job can be completed before deadline 1.'
      }
    ],
    testCases: [
      {
        input: '3\nA 1 20\nB 2 30\nC 3 40',
        expectedOutput: 'true',
        hidden: false
      },
      {
        input: '3\nA 1 20\nB 1 30\nC 1 40',
        expectedOutput: 'false',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\nprint(str(job_sequencing(jobs)).lower())',

      java: 'import java.util.*;\n\npublic class Main {\n    public static boolean jobSequencing(String[][] jobs) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for (int i = 0; i < n; i++) {\n                jobs[i][0] = sc.next();\n                jobs[i][1] = sc.next();\n                jobs[i][2] = sc.next();\n            }\n            System.out.println(jobSequencing(jobs));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {\n    return false;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for (int i = 0; i < n; i++) {\n        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);\n    }\n    printf("%s\\n", jobSequencing(jobId, deadline, profit, n) ? "true" : "false");\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nbool jobSequencing(vector<vector<string>>& jobs) {\n    return false;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<string>> jobs(n, vector<string>(3));\n        for (int i = 0; i < n; i++) {\n            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];\n        }\n        cout << (jobSequencing(jobs) ? "true" : "false") << "\\n";\n    }\n    return 0;\n}'
    }
  },
    {
    id: 'js-m1',
    title: 'Print Scheduled Jobs',
    difficulty: 'Medium',
    description: 'Given a list of jobs where every job has a unique ID, a deadline, and a profit, schedule the jobs to maximize the total profit. Return the IDs of the scheduled jobs in the order of their assigned time slots.',
    constraints: [
      '1 <= jobs.length <= 100',
      '1 <= deadline <= 100',
      '1 <= profit <= 1000'
    ],
    examples: [
      {
        input: 'Jobs = [(A,2,100),(B,1,19),(C,2,27),(D,1,25),(E,3,15)]',
        output: 'C A E',
        explanation: 'The optimal schedule is C in slot 1, A in slot 2 and E in slot 3.'
      },
      {
        input: 'Jobs = [(J1,2,50),(J2,1,60),(J3,2,20)]',
        output: 'J2 J1',
        explanation: 'Scheduling J2 followed by J1 gives the maximum profit.'
      }
    ],
    testCases: [
      {
        input: '5\nA 2 100\nB 1 19\nC 2 27\nD 1 25\nE 3 15',
        expectedOutput: 'C A E',
        hidden: false
      },
      {
        input: '3\nJ1 2 50\nJ2 1 60\nJ3 2 20',
        expectedOutput: 'J2 J1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\nprint(*job_sequencing(jobs))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static List<String> jobSequencing(String[][] jobs) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for(int i=0;i<n;i++){\n                jobs[i][0]=sc.next();\n                jobs[i][1]=sc.next();\n                jobs[i][2]=sc.next();\n            }\n            List<String> ans = jobSequencing(jobs);\n            for(String s:ans) System.out.print(s+" ");\n        }\n    }\n}',

      c: '#include <stdio.h>\n\nvoid jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for(int i=0;i<n;i++) scanf("%s %d %d",jobId[i],&deadline[i],&profit[i]);\n    jobSequencing(jobId,deadline,profit,n);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvector<string> jobSequencing(vector<vector<string>>& jobs){\n    return {};\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin>>n;\n    vector<vector<string>> jobs(n,vector<string>(3));\n    for(int i=0;i<n;i++) cin>>jobs[i][0]>>jobs[i][1]>>jobs[i][2];\n    vector<string> ans=jobSequencing(jobs);\n    for(string s:ans) cout<<s<<" ";\n}'
    }
  },  {
    id: 'js-m2',
    title: 'Job Sequencing with Limited Slots',
    difficulty: 'Medium',
    description: 'Given a list of jobs where every job has a unique ID, a deadline, and a profit, along with a fixed number of available time slots `k`, schedule the jobs such that the maximum total profit is earned. Return the maximum profit obtained.',
    constraints: [
      '1 <= jobs.length <= 100',
      '1 <= deadline <= 100',
      '1 <= profit <= 1000',
      '1 <= k <= 100'
    ],
    examples: [
      {
        input: 'Jobs = [(A,2,100),(B,1,19),(C,2,27),(D,1,25),(E,3,15)], k = 2',
        output: '127',
        explanation: 'Only two slots are available. Schedule jobs A and C for a total profit of 127.'
      },
      {
        input: 'Jobs = [(J1,3,50),(J2,2,60),(J3,1,20)], k = 2',
        output: '110',
        explanation: 'Schedule J2 and J1 to maximize the profit.'
      }
    ],
    testCases: [
      {
        input: '5\nA 2 100\nB 1 19\nC 2 27\nD 1 25\nE 3 15\n2',
        expectedOutput: '127',
        hidden: false
      },
      {
        input: '3\nJ1 3 50\nJ2 2 60\nJ3 1 20\n2',
        expectedOutput: '110',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs, k):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\nk = int(input())\nprint(job_sequencing(jobs, k))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int jobSequencing(String[][] jobs, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for (int i = 0; i < n; i++) {\n                jobs[i][0] = sc.next();\n                jobs[i][1] = sc.next();\n                jobs[i][2] = sc.next();\n            }\n            int k = sc.nextInt();\n            System.out.println(jobSequencing(jobs, k));\n        }\n    }\n}',

      c: '#include <stdio.h>\n\nint jobSequencing(char jobId[][20], int deadline[], int profit[], int n, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for (int i = 0; i < n; i++) {\n        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);\n    }\n    int k;\n    scanf("%d", &k);\n    printf("%d\\n", jobSequencing(jobId, deadline, profit, n, k));\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint jobSequencing(vector<vector<string>>& jobs, int k) {\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    vector<vector<string>> jobs(n, vector<string>(3));\n    for (int i = 0; i < n; i++) {\n        cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];\n    }\n    int k;\n    cin >> k;\n    cout << jobSequencing(jobs, k) << "\\n";\n    return 0;\n}'
    }
  },  {
    id: 'js-m3',
    title: 'Maximum Profit with Equal Deadlines',
    difficulty: 'Medium',
    description: 'Given a list of jobs where multiple jobs may have the same deadline, schedule the jobs such that the maximum total profit is earned. Each job requires exactly one unit of time and only one job can be executed in a single time slot.',
    constraints: [
      '1 <= jobs.length <= 100',
      '1 <= deadline <= 100',
      '1 <= profit <= 1000'
    ],
    examples: [
      {
        input: 'Jobs = [(A,2,50),(B,2,80),(C,2,20),(D,1,30)]',
        output: '110',
        explanation: 'Schedule jobs D and B. Total profit = 30 + 80 = 110.'
      },
      {
        input: 'Jobs = [(J1,1,40),(J2,1,20),(J3,2,50),(J4,2,30)]',
        output: '90',
        explanation: 'Schedule jobs J1 and J3. Total profit = 40 + 50 = 90.'
      }
    ],
    testCases: [
      {
        input: '4\nA 2 50\nB 2 80\nC 2 20\nD 1 30',
        expectedOutput: '110',
        hidden: false
      },
      {
        input: '4\nJ1 1 40\nJ2 1 20\nJ3 2 50\nJ4 2 30',
        expectedOutput: '90',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\nprint(job_sequencing(jobs))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int jobSequencing(String[][] jobs) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for (int i = 0; i < n; i++) {\n                jobs[i][0] = sc.next();\n                jobs[i][1] = sc.next();\n                jobs[i][2] = sc.next();\n            }\n            System.out.println(jobSequencing(jobs));\n        }\n    }\n}',

      c: '#include <stdio.h>\n\nint jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for (int i = 0; i < n; i++) {\n        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);\n    }\n    printf("%d\\n", jobSequencing(jobId, deadline, profit, n));\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nint jobSequencing(vector<vector<string>>& jobs) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<string>> jobs(n, vector<string>(3));\n        for (int i = 0; i < n; i++) {\n            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];\n        }\n        cout << jobSequencing(jobs) << "\\n";\n    }\n    return 0;\n}'
    }
  },  {
    id: 'js-m4',
    title: 'Find Total Idle Time Slots',
    difficulty: 'Medium',
    description: 'Given a list of jobs where every job has a unique ID, a deadline, and a profit, schedule the jobs to maximize the total profit. Return the number of unused time slots after scheduling all possible jobs.',
    constraints: [
      '1 <= jobs.length <= 100',
      '1 <= deadline <= 100',
      '1 <= profit <= 1000'
    ],
    examples: [
      {
        input: 'Jobs = [(A,2,100),(B,1,19),(C,2,27),(D,1,25),(E,5,15)]',
        output: '2',
        explanation: 'The maximum deadline is 5. Three jobs are scheduled, leaving two slots unused.'
      },
      {
        input: 'Jobs = [(J1,1,20),(J2,2,30),(J3,3,40)]',
        output: '0',
        explanation: 'All available slots are occupied.'
      }
    ],
    testCases: [
      {
        input: '5\nA 2 100\nB 1 19\nC 2 27\nD 1 25\nE 5 15',
        expectedOutput: '2',
        hidden: false
      },
      {
        input: '3\nJ1 1 20\nJ2 2 30\nJ3 3 40',
        expectedOutput: '0',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\nprint(job_sequencing(jobs))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int jobSequencing(String[][] jobs) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for (int i = 0; i < n; i++) {\n                jobs[i][0] = sc.next();\n                jobs[i][1] = sc.next();\n                jobs[i][2] = sc.next();\n            }\n            System.out.println(jobSequencing(jobs));\n        }\n    }\n}',

      c: '#include <stdio.h>\n\nint jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for (int i = 0; i < n; i++) {\n        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);\n    }\n    printf("%d\\n", jobSequencing(jobId, deadline, profit, n));\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nint jobSequencing(vector<vector<string>>& jobs) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<string>> jobs(n, vector<string>(3));\n        for (int i = 0; i < n; i++) {\n            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];\n        }\n        cout << jobSequencing(jobs) << "\\n";\n    }\n    return 0;\n}'
    }
  },  {
    id: 'js-m5',
    title: 'Job Sequencing with Profit Threshold',
    difficulty: 'Medium',
    description: 'Given a list of jobs where every job has a unique ID, a deadline, and a profit, along with a minimum profit threshold `P`, schedule the jobs such that the maximum total profit is earned. Return `true` if the total scheduled profit is greater than or equal to `P`; otherwise, return `false`.',
    constraints: [
      '1 <= jobs.length <= 100',
      '1 <= deadline <= 100',
      '1 <= profit <= 1000',
      '1 <= P <= 100000'
    ],
    examples: [
      {
        input: 'Jobs = [(A,2,100),(B,1,19),(C,2,27),(D,1,25),(E,3,15)], P = 140',
        output: 'true',
        explanation: 'The maximum profit is 142, which is greater than or equal to the required threshold.'
      },
      {
        input: 'Jobs = [(J1,1,40),(J2,1,30),(J3,2,20)], P = 100',
        output: 'false',
        explanation: 'The maximum obtainable profit is 60, which is less than the required threshold.'
      }
    ],
    testCases: [
      {
        input: '5\nA 2 100\nB 1 19\nC 2 27\nD 1 25\nE 3 15\n140',
        expectedOutput: 'true',
        hidden: false
      },
      {
        input: '3\nJ1 1 40\nJ2 1 30\nJ3 2 20\n100',
        expectedOutput: 'false',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs, p):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\np = int(input())\nprint(str(job_sequencing(jobs, p)).lower())',

      java: 'import java.util.*;\n\npublic class Main {\n    public static boolean jobSequencing(String[][] jobs, int p) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for (int i = 0; i < n; i++) {\n                jobs[i][0] = sc.next();\n                jobs[i][1] = sc.next();\n                jobs[i][2] = sc.next();\n            }\n            int p = sc.nextInt();\n            System.out.println(jobSequencing(jobs, p));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool jobSequencing(char jobId[][20], int deadline[], int profit[], int n, int p) {\n    return false;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for (int i = 0; i < n; i++) {\n        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);\n    }\n    int p;\n    scanf("%d", &p);\n    printf("%s\\n", jobSequencing(jobId, deadline, profit, n, p) ? "true" : "false");\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nbool jobSequencing(vector<vector<string>>& jobs, int p) {\n    return false;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<string>> jobs(n, vector<string>(3));\n        for (int i = 0; i < n; i++) {\n            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];\n        }\n        int p;\n        cin >> p;\n        cout << (jobSequencing(jobs, p) ? "true" : "false") << "\\n'
    }
    },
    {
    id: 'js-h1',
    title: 'Job Sequencing with Large Deadlines',
    difficulty: 'Hard',
    description: 'Given a list of jobs where every job has a unique ID, a deadline, and a profit, schedule the jobs such that the maximum total profit is earned. The maximum deadline can be as large as 10^5, so design an efficient solution instead of checking every slot linearly.',
    constraints: [
      '1 <= jobs.length <= 10^5',
      '1 <= deadline <= 10^5',
      '1 <= profit <= 10^9'
    ],
    examples: [
      {
        input: 'Jobs = [(A,100000,100),(B,99999,200),(C,100000,150)]',
        output: '450',
        explanation: 'All three jobs can be scheduled efficiently before their deadlines.'
      },
      {
        input: 'Jobs = [(J1,1,50),(J2,1,40),(J3,2,60)]',
        output: '110',
        explanation: 'Schedule jobs J3 and J1 for the maximum profit.'
      }
    ],
    testCases: [
      {
        input: '3\nA 100000 100\nB 99999 200\nC 100000 150',
        expectedOutput: '450',
        hidden: false
      },
      {
        input: '3\nJ1 1 50\nJ2 1 40\nJ3 2 60',
        expectedOutput: '110',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\nprint(job_sequencing(jobs))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int jobSequencing(String[][] jobs) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for (int i = 0; i < n; i++) {\n                jobs[i][0] = sc.next();\n                jobs[i][1] = sc.next();\n                jobs[i][2] = sc.next();\n            }\n            System.out.println(jobSequencing(jobs));\n        }\n    }\n}',

      c: '#include <stdio.h>\n\nint jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for (int i = 0; i < n; i++) {\n        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);\n    }\n    printf("%d\\n", jobSequencing(jobId, deadline, profit, n));\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nint jobSequencing(vector<vector<string>>& jobs) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<string>> jobs(n, vector<string>(3));\n        for (int i = 0; i < n; i++) {\n            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];\n        }\n        cout << jobSequencing(jobs) << "\\n";\n    }\n    return 0;\n}'
    }
  },  {
    id: 'js-h2',
    title: 'Return Complete Job Schedule',
    difficulty: 'Hard',
    description: 'Given a list of jobs where every job has a unique ID, a deadline, and a profit, schedule the jobs such that the maximum total profit is earned. Return the complete schedule showing the job assigned to every available time slot. Use `-` for empty slots.',
    constraints: [
      '1 <= jobs.length <= 10^5',
      '1 <= deadline <= 10^5',
      '1 <= profit <= 10^9'
    ],
    examples: [
      {
        input: 'Jobs = [(A,2,100),(B,1,19),(C,2,27),(D,1,25),(E,3,15)]',
        output: 'C A E',
        explanation: 'The optimal schedule assigns C to slot 1, A to slot 2 and E to slot 3.'
      },
      {
        input: 'Jobs = [(J1,3,50),(J2,1,60),(J3,2,40)]',
        output: 'J2 J3 J1',
        explanation: 'The jobs are placed in their respective slots to maximize profit.'
      }
    ],
    testCases: [
      {
        input: '5\nA 2 100\nB 1 19\nC 2 27\nD 1 25\nE 3 15',
        expectedOutput: 'C A E',
        hidden: false
      },
      {
        input: '3\nJ1 3 50\nJ2 1 60\nJ3 2 40',
        expectedOutput: 'J2 J3 J1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\nprint(*job_sequencing(jobs))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static List<String> jobSequencing(String[][] jobs) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for (int i = 0; i < n; i++) {\n                jobs[i][0] = sc.next();\n                jobs[i][1] = sc.next();\n                jobs[i][2] = sc.next();\n            }\n            List<String> ans = jobSequencing(jobs);\n            for (String job : ans) {\n                System.out.print(job + " ");\n            }\n        }\n    }\n}',

      c: '#include <stdio.h>\n\nvoid jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for (int i = 0; i < n; i++) {\n        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);\n    }\n    jobSequencing(jobId, deadline, profit, n);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nvector<string> jobSequencing(vector<vector<string>>& jobs) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<string>> jobs(n, vector<string>(3));\n        for (int i = 0; i < n; i++) {\n            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];\n        }\n        vector<string> ans = jobSequencing(jobs);\n        for (string job : ans) {\n            cout << job << " ";\n        }\n    }\n    return 0;\n}'
    }
  },   {
    id: 'js-h3',
    title: 'Lexicographically Smallest Optimal Schedule',
    difficulty: 'Hard',
    description: 'Given a list of jobs where every job has a unique ID, a deadline, and a profit, schedule the jobs such that the maximum total profit is earned. If multiple optimal schedules exist with the same maximum profit, return the lexicographically smallest schedule.',
    constraints: [
      '1 <= jobs.length <= 10^5',
      '1 <= deadline <= 10^5',
      '1 <= profit <= 10^9'
    ],
    examples: [
      {
        input: 'Jobs = [(A,2,50),(B,2,50),(C,1,40)]',
        output: 'C A',
        explanation: 'Both schedules "C A" and "C B" produce the same profit of 90. Return the lexicographically smaller schedule.'
      },
      {
        input: 'Jobs = [(J1,2,100),(J2,2,100),(J3,1,50)]',
        output: 'J3 J1',
        explanation: 'Both J1 and J2 give the same maximum profit. J1 is lexicographically smaller, so it is selected.'
      }
    ],
    testCases: [
      {
        input: '3\nA 2 50\nB 2 50\nC 1 40',
        expectedOutput: 'C A',
        hidden: false
      },
      {
        input: '3\nJ1 2 100\nJ2 2 100\nJ3 1 50',
        expectedOutput: 'J3 J1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\nprint(*job_sequencing(jobs))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static List<String> jobSequencing(String[][] jobs) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for (int i = 0; i < n; i++) {\n                jobs[i][0] = sc.next();\n                jobs[i][1] = sc.next();\n                jobs[i][2] = sc.next();\n            }\n            List<String> ans = jobSequencing(jobs);\n            for (String job : ans) {\n                System.out.print(job + " ");\n            }\n        }\n    }\n}',

      c: '#include <stdio.h>\n\nvoid jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for (int i = 0; i < n; i++) {\n        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);\n    }\n    jobSequencing(jobId, deadline, profit, n);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nvector<string> jobSequencing(vector<vector<string>>& jobs) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<string>> jobs(n, vector<string>(3));\n        for (int i = 0; i < n; i++) {\n            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];\n        }\n        vector<string> ans = jobSequencing(jobs);\n        for (string job : ans) {\n            cout << job << " ";\n        }\n        return 0;\n    }\n}'
    }
  },   {
    id: 'js-h4',
    title: 'Maximum Profit and Scheduled Jobs',
    difficulty: 'Hard',
    description: 'Given a list of jobs where every job has a unique ID, a deadline, and a profit, schedule the jobs such that the maximum total profit is earned. Return both the total number of scheduled jobs and the maximum profit.',
    constraints: [
      '1 <= jobs.length <= 10^5',
      '1 <= deadline <= 10^5',
      '1 <= profit <= 10^9'
    ],
    examples: [
      {
        input: 'Jobs = [(A,2,100),(B,1,19),(C,2,27),(D,1,25),(E,3,15)]',
        output: '3 142',
        explanation: 'Three jobs (A, C and E) are scheduled with a total profit of 142.'
      },
      {
        input: 'Jobs = [(J1,1,40),(J2,2,50),(J3,2,20)]',
        output: '2 90',
        explanation: 'Jobs J1 and J2 are scheduled. Total scheduled jobs = 2 and total profit = 90.'
      }
    ],
    testCases: [
      {
        input: '5\nA 2 100\nB 1 19\nC 2 27\nD 1 25\nE 3 15',
        expectedOutput: '3 142',
        hidden: false
      },
      {
        input: '3\nJ1 1 40\nJ2 2 50\nJ3 2 20',
        expectedOutput: '2 90',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\nresult = job_sequencing(jobs)\nprint(result[0], result[1])',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int[] jobSequencing(String[][] jobs) {\n        return new int[2];\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for (int i = 0; i < n; i++) {\n                jobs[i][0] = sc.next();\n                jobs[i][1] = sc.next();\n                jobs[i][2] = sc.next();\n            }\n            int[] ans = jobSequencing(jobs);\n            System.out.println(ans[0] + " " + ans[1]);\n        }\n    }\n}',

      c: '#include <stdio.h>\n\nvoid jobSequencing(char jobId[][20], int deadline[], int profit[], int n, int result[]) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d",&n)!=1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for(int i=0;i<n;i++) scanf("%s %d %d",jobId[i],&deadline[i],&profit[i]);\n    int result[2];\n    jobSequencing(jobId,deadline,profit,n,result);\n    printf("%d %d\\n",result[0],result[1]);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\npair<int,int> jobSequencing(vector<vector<string>>& jobs){\n    return {0,0};\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin>>n;\n    vector<vector<string>> jobs(n,vector<string>(3));\n    for(int i=0;i<n;i++) cin>>jobs[i][0]>>jobs[i][1]>>jobs[i][2];\n    pair<int,int> ans=jobSequencing(jobs);\n    cout<<ans.first<<" "<<ans.second<<"\\n";\n    return 0;\n}'
    }
  },  {
    id: 'js-h5',
    title: 'Schedule Jobs for Maximum Profit',
    difficulty: 'Hard',
    description: 'Given a list of jobs where every job has a unique ID, a deadline, and a profit, schedule the jobs such that the maximum total profit is earned. Return the scheduled job IDs in execution order along with the total profit.',
    constraints: [
      '1 <= jobs.length <= 10^5',
      '1 <= deadline <= 10^5',
      '1 <= profit <= 10^9'
    ],
    examples: [
      {
        input: 'Jobs = [(A,2,100),(B,1,19),(C,2,27),(D,1,25),(E,3,15)]',
        output: 'C A E\n142',
        explanation: 'The scheduled jobs are C, A and E with a total profit of 142.'
      },
      {
        input: 'Jobs = [(J1,1,40),(J2,2,50),(J3,2,20)]',
        output: 'J1 J2\n90',
        explanation: 'Jobs J1 and J2 are scheduled with a total profit of 90.'
      }
    ],
    testCases: [
      {
        input: '5\nA 2 100\nB 1 19\nC 2 27\nD 1 25\nE 3 15',
        expectedOutput: 'C A E\n142',
        hidden: false
      },
      {
        input: '3\nJ1 1 40\nJ2 2 50\nJ3 2 20',
        expectedOutput: 'J1 J2\n90',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def job_sequencing(jobs):\n    pass\n\nn = int(input())\njobs = []\nfor _ in range(n):\n    job_id, deadline, profit = input().split()\n    jobs.append((job_id, int(deadline), int(profit)))\nresult = job_sequencing(jobs)\nprint(*result[0])\nprint(result[1])',

      java: 'import java.util.*;\n\npublic class Main {\n    public static Object[] jobSequencing(String[][] jobs) {\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[][] jobs = new String[n][3];\n            for (int i = 0; i < n; i++) {\n                jobs[i][0] = sc.next();\n                jobs[i][1] = sc.next();\n                jobs[i][2] = sc.next();\n            }\n            Object[] ans = jobSequencing(jobs);\n        }\n    }\n}',

      c: '#include <stdio.h>\n\nvoid jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    char jobId[n][20];\n    int deadline[n], profit[n];\n    for(int i=0;i<n;i++) scanf("%s %d %d",jobId[i],&deadline[i],&profit[i]);\n    jobSequencing(jobId,deadline,profit,n);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\npair<vector<string>,int> jobSequencing(vector<vector<string>>& jobs){\n    return {{},0};\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin>>n;\n    vector<vector<string>> jobs(n,vector<string>(3));\n    for(int i=0;i<n;i++) cin>>jobs[i][0]>>jobs[i][1]>>jobs[i][2];\n    auto ans=jobSequencing(jobs);\n    for(auto &job:ans.first) cout<<job<<" ";\n    cout<<"\\n"<<ans.second;\n    return 0;\n}'
    }
  }
];
  
