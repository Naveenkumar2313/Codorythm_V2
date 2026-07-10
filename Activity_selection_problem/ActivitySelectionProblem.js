export const activitySelectionProblems = [
  // --- EASY ---
  {
    id: 'as-e1', title: 'Classic Activity Selection', difficulty: 'Easy',
    description: 'Given `n` activities with their start and end times, return the maximum number of non-overlapping activities that can be performed by a single person. Assume the start of one activity can equal the end of another.',
    constraints: ['1 <= n <= 10^4', '0 <= start[i] <= end[i] <= 10^9'],
    examples: [
      { input: 'start = [1,3,0,5,8,5], end = [2,4,6,7,9,9]', output: '4', explanation: 'Activities (1,2), (3,4), (5,7), (8,9) can be selected.' },
      { input: 'start = [10, 12, 20], end = [20, 25, 30]', output: '2', explanation: 'Activities (10,20) and (20,30) can be selected.' }
    ],
    testCases: [
      { input: '6\n1 3 0 5 8 5\n2 4 6 7 9 9', expectedOutput: '4', hidden: false },
      { input: '3\n10 12 20\n20 25 30', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: `def max_activities(start, end):
    pass

n = int(input())
start = list(map(int, input().split()))
end = list(map(int, input().split()))
print(max_activities(start, end))`,
      java: `import java.util.*;

public class Solution {
    public static int maxActivities(int[] start, int[] end) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] start = new int[n];
            for (int i = 0; i < n; i++) start[i] = sc.nextInt();
            int[] end = new int[n];
            for (int i = 0; i < n; i++) end[i] = sc.nextInt();
            System.out.println(maxActivities(start, end));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int maxActivities(int* start, int* end, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* start = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &start[i]);
    int* end = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &end[i]);
    printf("%d\\n", maxActivities(start, end, n));
    free(start); free(end);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int maxActivities(vector<int>& start, vector<int>& end) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> start(n), end(n);
        for (int i = 0; i < n; i++) cin >> start[i];
        for (int i = 0; i < n; i++) cin >> end[i];
        cout << maxActivities(start, end) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'as-e2', title: 'Meeting Rooms', difficulty: 'Easy',
    description: 'Given an array of meeting time intervals consisting of start and end times, determine if a person could attend all meetings (i.e., no overlapping intervals).',
    constraints: ['0 <= n <= 10^4', '0 <= start[i] < end[i] <= 10^6'],
    examples: [
      { input: 'start = [0,5,15], end = [30,10,20]', output: 'false', explanation: '(0,30) overlaps with (5,10) and (15,20).' },
      { input: 'start = [7,2], end = [10,4]', output: 'true', explanation: 'No overlaps between (7,10) and (2,4).' }
    ],
    testCases: [
      { input: '3\n0 5 15\n30 10 20', expectedOutput: 'false', hidden: false },
      { input: '2\n7 2\n10 4', expectedOutput: 'true', hidden: false }
    ],
    starterCode: {
      python: `def can_attend(start, end):
    pass

n = int(input())
if n > 0:
    start = list(map(int, input().split()))
    end = list(map(int, input().split()))
else:
    start, end = [], []
print(str(can_attend(start, end)).lower())`,
      java: `import java.util.*;

public class Solution {
    public static boolean canAttend(int[] start, int[] end) {
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] start = new int[n];
            for (int i = 0; i < n; i++) start[i] = sc.nextInt();
            int[] end = new int[n];
            for (int i = 0; i < n; i++) end[i] = sc.nextInt();
            System.out.println(canAttend(start, end));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool canAttend(int* start, int* end, int n) {
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* start = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &start[i]);
    int* end = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &end[i]);
    printf("%s\\n", canAttend(start, end, n) ? "true" : "false");
    free(start); free(end);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

bool canAttend(vector<int>& start, vector<int>& end) {
    return false;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> start(n), end(n);
        for (int i = 0; i < n; i++) cin >> start[i];
        for (int i = 0; i < n; i++) cin >> end[i];
        cout << (canAttend(start, end) ? "true" : "false") << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'as-e3', title: 'Assign Cookies', difficulty: 'Easy',
    description: 'Assume you are an awesome parent and want to give your children some cookies. Each child `i` has a greed factor `g[i]`, which is the minimum size of a cookie that the child will be content with; and each cookie `j` has a size `s[j]`. If `s[j] >= g[i]`, we can assign the cookie `j` to the child `i`, and the child will be content. Maximize the number of content children.',
    constraints: ['1 <= g.length <= 3 * 10^4', '0 <= s.length <= 3 * 10^4', '1 <= g[i], s[j] <= 2^31 - 1'],
    examples: [
      { input: 'g = [1,2,3], s = [1,1]', output: '1', explanation: 'Only the child with greed factor 1 can be satisfied.' }
    ],
    testCases: [
      { input: '3\n1 2 3\n2\n1 1', expectedOutput: '1', hidden: false },
      { input: '2\n1 2\n3\n1 2 3', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: `def find_content_children(g, s):
    pass

m = int(input())
g = list(map(int, input().split())) if m > 0 else []
n = int(input())
s = list(map(int, input().split())) if n > 0 else []
print(find_content_children(g, s))`,
      java: `import java.util.*;

public class Solution {
    public static int findContentChildren(int[] g, int[] s) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int[] g = new int[m];
            for (int i = 0; i < m; i++) g[i] = sc.nextInt();
            int n = sc.nextInt();
            int[] s = new int[n];
            for (int i = 0; i < n; i++) s[i] = sc.nextInt();
            System.out.println(findContentChildren(g, s));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int findContentChildren(int* g, int gSize, int* s, int sSize) {
    return 0;
}

int main() {
    int m, n;
    if (scanf("%d", &m) != 1) return 0;
    int* g = (int*)malloc(m * sizeof(int));
    for (int i = 0; i < m; i++) scanf("%d", &g[i]);
    if (scanf("%d", &n) != 1) return 0;
    int* s = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &s[i]);
    printf("%d\\n", findContentChildren(g, m, s, n));
    free(g); free(s);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int findContentChildren(vector<int>& g, vector<int>& s) {
    return 0;
}

int main() {
    int m, n;
    if (cin >> m) {
        vector<int> g(m);
        for (int i = 0; i < m; i++) cin >> g[i];
        cin >> n;
        vector<int> s(n);
        for (int i = 0; i < n; i++) cin >> s[i];
        cout << findContentChildren(g, s) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'as-e4', title: 'Lemonade Change', difficulty: 'Easy',
    description: 'At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time. Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. Return true if you can provide every customer with correct change.',
    constraints: ['1 <= bills.length <= 10^5', 'bills[i] is either 5, 10, or 20.'],
    examples: [
      { input: 'bills = [5,5,5,10,20]', output: 'true', explanation: 'You collect three $5s, use one $5 for $10 change, use one $10 and one $5 for $20 change.' },
      { input: 'bills = [5,5,10,10,20]', output: 'false', explanation: 'You cannot give change to the last customer.' }
    ],
    testCases: [
      { input: '5\n5 5 5 10 20', expectedOutput: 'true', hidden: false },
      { input: '5\n5 5 10 10 20', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `def lemonade_change(bills):
    pass

n = int(input())
bills = list(map(int, input().split()))
print(str(lemonade_change(bills)).lower())`,
      java: `import java.util.*;

public class Solution {
    public static boolean lemonadeChange(int[] bills) {
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] bills = new int[n];
            for (int i = 0; i < n; i++) bills[i] = sc.nextInt();
            System.out.println(lemonadeChange(bills));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool lemonadeChange(int* bills, int n) {
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* bills = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &bills[i]);
    printf("%s\\n", lemonadeChange(bills, n) ? "true" : "false");
    free(bills);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

bool lemonadeChange(vector<int>& bills) {
    return false;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> bills(n);
        for (int i = 0; i < n; i++) cin >> bills[i];
        cout << (lemonadeChange(bills) ? "true" : "false") << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'as-e5', title: 'Maximum Units on a Truck', difficulty: 'Easy',
    description: 'You are assigned to put some amount of boxes onto one truck. You are given a truck size and two arrays: `boxCount` (number of boxes of a type) and `units` (number of units per box of that type). Return the maximum total number of units that can be put on the truck.',
    constraints: ['1 <= n <= 1000', '1 <= boxCount[i], units[i] <= 1000', '1 <= truckSize <= 10^6'],
    examples: [
      { input: 'boxCount = [1,2,3], units = [3,2,1], truckSize = 4', output: '8', explanation: 'Take 1 box of type 1 (3 units), 2 boxes of type 2 (4 units), and 1 box of type 3 (1 unit). Total = 8.' }
    ],
    testCases: [
      { input: '3\n1 2 3\n3 2 1\n4', expectedOutput: '8', hidden: false },
      { input: '4\n5 3 4 7\n10 9 7 5\n10', expectedOutput: '91', hidden: false }
    ],
    starterCode: {
      python: `def max_units(boxCount, units, truckSize):
    pass

n = int(input())
boxCount = list(map(int, input().split()))
units = list(map(int, input().split()))
truckSize = int(input())
print(max_units(boxCount, units, truckSize))`,
      java: `import java.util.*;

public class Solution {
    public static int maxUnits(int[] boxCount, int[] units, int truckSize) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] boxCount = new int[n];
            for (int i = 0; i < n; i++) boxCount[i] = sc.nextInt();
            int[] units = new int[n];
            for (int i = 0; i < n; i++) units[i] = sc.nextInt();
            int truckSize = sc.nextInt();
            System.out.println(maxUnits(boxCount, units, truckSize));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int maxUnits(int* boxCount, int* units, int n, int truckSize) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* boxCount = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &boxCount[i]);
    int* units = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &units[i]);
    int truckSize;
    scanf("%d", &truckSize);
    printf("%d\\n", maxUnits(boxCount, units, n, truckSize));
    free(boxCount); free(units);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int maxUnits(vector<int>& boxCount, vector<int>& units, int truckSize) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> boxCount(n), units(n);
        for (int i = 0; i < n; i++) cin >> boxCount[i];
        for (int i = 0; i < n; i++) cin >> units[i];
        int truckSize;
        cin >> truckSize;
        cout << maxUnits(boxCount, units, truckSize) << "\\n";
    }
    return 0;
}`
    }
  },
  
  // --- MEDIUM ---
  {
    id: 'as-m1', title: 'Non-overlapping Intervals', difficulty: 'Medium',
    description: 'Given an array of intervals represented by `start` and `end` arrays, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.',
    constraints: ['1 <= n <= 10^5', '-5 * 10^4 <= start[i] < end[i] <= 5 * 10^4'],
    examples: [
      { input: 'start = [1,2,3,1], end = [2,3,4,3]', output: '1', explanation: 'Remove (1,3) to make the rest non-overlapping.' },
      { input: 'start = [1,2], end = [2,3]', output: '0', explanation: 'You don\'t need to remove any of the intervals since they\'re already non-overlapping.' }
    ],
    testCases: [
      { input: '4\n1 2 3 1\n2 3 4 3', expectedOutput: '1', hidden: false },
      { input: '2\n1 2\n2 3', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `def erase_overlap_intervals(start, end):
    pass

n = int(input())
start = list(map(int, input().split()))
end = list(map(int, input().split()))
print(erase_overlap_intervals(start, end))`,
      java: `import java.util.*;

public class Solution {
    public static int eraseOverlapIntervals(int[] start, int[] end) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] start = new int[n];
            for (int i = 0; i < n; i++) start[i] = sc.nextInt();
            int[] end = new int[n];
            for (int i = 0; i < n; i++) end[i] = sc.nextInt();
            System.out.println(eraseOverlapIntervals(start, end));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int eraseOverlapIntervals(int* start, int* end, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* start = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &start[i]);
    int* end = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &end[i]);
    printf("%d\\n", eraseOverlapIntervals(start, end, n));
    free(start); free(end);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int eraseOverlapIntervals(vector<int>& start, vector<int>& end) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> start(n), end(n);
        for (int i = 0; i < n; i++) cin >> start[i];
        for (int i = 0; i < n; i++) cin >> end[i];
        cout << eraseOverlapIntervals(start, end) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'as-m2', title: 'Minimum Number of Arrows to Burst Balloons', difficulty: 'Medium',
    description: 'Balloons are represented by 2D intervals `[start, end]`. An arrow can be shot up exactly vertically from an x-coordinate. A balloon is burst if the arrow falls between `start` and `end` (inclusive). Find the minimum number of arrows that must be shot to burst all balloons.',
    constraints: ['1 <= n <= 10^5', '-2^31 <= start[i] < end[i] <= 2^31 - 1'],
    examples: [
      { input: 'start = [10,2,1,7], end = [16,8,6,12]', output: '2', explanation: 'Shoot at x=6 (bursts [2,8] and [1,6]) and x=11 (bursts [10,16] and [7,12]).' }
    ],
    testCases: [
      { input: '4\n10 2 1 7\n16 8 6 12', expectedOutput: '2', hidden: false },
      { input: '4\n1 2 3 4\n2 3 4 5', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: `def find_min_arrows(start, end):
    pass

n = int(input())
start = list(map(int, input().split()))
end = list(map(int, input().split()))
print(find_min_arrows(start, end))`,
      java: `import java.util.*;

public class Solution {
    public static int findMinArrows(int[] start, int[] end) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] start = new int[n];
            for (int i = 0; i < n; i++) start[i] = sc.nextInt();
            int[] end = new int[n];
            for (int i = 0; i < n; i++) end[i] = sc.nextInt();
            System.out.println(findMinArrows(start, end));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int findMinArrows(int* start, int* end, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* start = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &start[i]);
    int* end = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &end[i]);
    printf("%d\\n", findMinArrows(start, end, n));
    free(start); free(end);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int findMinArrows(vector<int>& start, vector<int>& end) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> start(n), end(n);
        for (int i = 0; i < n; i++) cin >> start[i];
        for (int i = 0; i < n; i++) cin >> end[i];
        cout << findMinArrows(start, end) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'as-m3', title: 'Minimum Platforms', difficulty: 'Medium',
    description: 'Given arrival and departure times of all trains that reach a railway station, find the minimum number of platforms required for the railway station so that no train is kept waiting.',
    constraints: ['1 <= n <= 5000', '0 <= arr[i] < dep[i] <= 2359'],
    examples: [
      { input: 'arr = [900, 940, 950, 1100, 1500, 1800], dep = [910, 1200, 1120, 1130, 1900, 2000]', output: '3', explanation: 'At 9:50, there are 3 trains at the station.' }
    ],
    testCases: [
      { input: '6\n900 940 950 1100 1500 1800\n910 1200 1120 1130 1900 2000', expectedOutput: '3', hidden: false },
      { input: '3\n900 1100 1235\n1000 1200 1240', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: `def find_platform(arr, dep):
    pass

n = int(input())
arr = list(map(int, input().split()))
dep = list(map(int, input().split()))
print(find_platform(arr, dep))`,
      java: `import java.util.*;

public class Solution {
    public static int findPlatform(int[] arr, int[] dep) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int[] dep = new int[n];
            for (int i = 0; i < n; i++) dep[i] = sc.nextInt();
            System.out.println(findPlatform(arr, dep));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int findPlatform(int* arr, int* dep, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int* dep = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &dep[i]);
    printf("%d\\n", findPlatform(arr, dep, n));
    free(arr); free(dep);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int findPlatform(vector<int>& arr, vector<int>& dep) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n), dep(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        for (int i = 0; i < n; i++) cin >> dep[i];
        cout << findPlatform(arr, dep) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'as-m4', title: 'Jump Game', difficulty: 'Medium',
    description: 'You are given an integer array `nums`. You are initially positioned at the array\'s first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.',
    constraints: ['1 <= nums.length <= 10^4', '0 <= nums[i] <= 10^5'],
    examples: [
      { input: 'nums = [2,3,1,1,4]', output: 'true', explanation: 'Jump 1 step from index 0 to 1, then 3 steps to the last index.' },
      { input: 'nums = [3,2,1,0,4]', output: 'false', explanation: 'You will always arrive at index 3 no matter what.' }
    ],
    testCases: [
      { input: '5\n2 3 1 1 4', expectedOutput: 'true', hidden: false },
      { input: '5\n3 2 1 0 4', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `def can_jump(nums):
    pass

n = int(input())
nums = list(map(int, input().split()))
print(str(can_jump(nums)).lower())`,
      java: `import java.util.*;

public class Solution {
    public static boolean canJump(int[] nums) {
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(canJump(nums));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool canJump(int* nums, int n) {
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\\n", canJump(nums, n) ? "true" : "false");
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

bool canJump(vector<int>& nums) {
    return false;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        cout << (canJump(nums) ? "true" : "false") << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'as-m5', title: 'Task Scheduler', difficulty: 'Medium',
    description: 'Given a characters array `tasks`, representing the tasks a CPU needs to do, and a non-negative integer `k` that represents the cooling period between two identical tasks. Return the least number of units of times that the CPU will take to finish all the given tasks.',
    constraints: ['1 <= tasks.length <= 10^4', 'tasks[i] is an uppercase English letter.', '0 <= k <= 100'],
    examples: [
      { input: 'tasks = ["A","A","A","B","B","B"], k = 2', output: '8', explanation: 'A -> B -> idle -> A -> B -> idle -> A -> B.' }
    ],
    testCases: [
      { input: '6\n2\nA A A B B B', expectedOutput: '8', hidden: false },
      { input: '6\n0\nA A A B B B', expectedOutput: '6', hidden: false }
    ],
    starterCode: {
      python: `def least_interval(tasks, k):
    pass

n = int(input())
k = int(input())
tasks = input().split()
print(least_interval(tasks, k))`,
      java: `import java.util.*;

public class Solution {
    public static int leastInterval(char[] tasks, int k) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int k = sc.nextInt();
            char[] tasks = new char[n];
            for (int i = 0; i < n; i++) tasks[i] = sc.next().charAt(0);
            System.out.println(leastInterval(tasks, k));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int leastInterval(char* tasks, int n, int k) {
    return 0;
}

int main() {
    int n, k;
    if (scanf("%d %d", &n, &k) != 2) return 0;
    char* tasks = (char*)malloc(n * sizeof(char));
    for (int i = 0; i < n; i++) scanf(" %c", &tasks[i]);
    printf("%d\\n", leastInterval(tasks, n, k));
    free(tasks);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int leastInterval(vector<char>& tasks, int k) {
    return 0;
}

int main() {
    int n, k;
    if (cin >> n >> k) {
        vector<char> tasks(n);
        for (int i = 0; i < n; i++) cin >> tasks[i];
        cout << leastInterval(tasks, k) << "\\n";
    }
    return 0;
}`
    }
  },

  // --- HARD ---
  {
    id: 'as-h1', title: 'Minimum Meeting Rooms', difficulty: 'Hard',
    description: 'Given an array of meeting time intervals consisting of start and end times, find the minimum number of conference rooms required.',
    constraints: ['1 <= n <= 10^4', '0 <= start[i] < end[i] <= 10^6'],
    examples: [
      { input: 'start = [0,5,15], end = [30,10,20]', output: '2', explanation: 'Room 1: (0,30), Room 2: (5,10) then (15,20).' },
      { input: 'start = [7,2], end = [10,4]', output: '1', explanation: 'All meetings can be held in one room.' }
    ],
    testCases: [
      { input: '3\n0 5 15\n30 10 20', expectedOutput: '2', hidden: false },
      { input: '2\n7 2\n10 4', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: `def min_meeting_rooms(start, end):
    pass

n = int(input())
start = list(map(int, input().split()))
end = list(map(int, input().split()))
print(min_meeting_rooms(start, end))`,
      java: `import java.util.*;

public class Solution {
    public static int minMeetingRooms(int[] start, int[] end) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] start = new int[n];
            for (int i = 0; i < n; i++) start[i] = sc.nextInt();
            int[] end = new int[n];
            for (int i = 0; i < n; i++) end[i] = sc.nextInt();
            System.out.println(minMeetingRooms(start, end));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int minMeetingRooms(int* start, int* end, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* start = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &start[i]);
    int* end = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &end[i]);
    printf("%d\\n", minMeetingRooms(start, end, n));
    free(start); free(end);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int minMeetingRooms(vector<int>& start, vector<int>& end) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> start(n), end(n);
        for (int i = 0; i < n; i++) cin >> start[i];
        for (int i = 0; i < n; i++) cin >> end[i];
        cout << minMeetingRooms(start, end) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'as-h2', title: 'Minimum Number of Taps to Open to Water a Garden', difficulty: 'Hard',
    description: 'There is a one-dimensional garden on the x-axis starting from 0 to n. You are given an integer `n` and an array `ranges` of length `n+1` where `ranges[i]` (0-indexed) means the i-th tap can water the area `[i - ranges[i], i + ranges[i]]`. Return the minimum number of taps that should be open to water the whole garden `[0, n]`. If it cannot be watered, return -1.',
    constraints: ['1 <= n <= 10^4', 'ranges.length == n + 1', '0 <= ranges[i] <= 100'],
    examples: [
      { input: 'n = 5, ranges = [3,4,1,1,0,0]', output: '1', explanation: 'Tap at index 1 covers [0, 5], watering the entire garden.' }
    ],
    testCases: [
      { input: '5\n3 4 1 1 0 0', expectedOutput: '1', hidden: false },
      { input: '3\n0 0 0 0', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: `def min_taps(n, ranges):
    pass

n = int(input())
ranges = list(map(int, input().split()))
print(min_taps(n, ranges))`,
      java: `import java.util.*;

public class Solution {
    public static int minTaps(int n, int[] ranges) {
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] ranges = new int[n + 1];
            for (int i = 0; i <= n; i++) ranges[i] = sc.nextInt();
            System.out.println(minTaps(n, ranges));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int minTaps(int n, int* ranges, int rangesSize) {
    return -1;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* ranges = (int*)malloc((n + 1) * sizeof(int));
    for (int i = 0; i <= n; i++) scanf("%d", &ranges[i]);
    printf("%d\\n", minTaps(n, ranges, n + 1));
    free(ranges);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int minTaps(int n, vector<int>& ranges) {
    return -1;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> ranges(n + 1);
        for (int i = 0; i <= n; i++) cin >> ranges[i];
        cout << minTaps(n, ranges) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'as-h3', title: 'Video Stitching', difficulty: 'Hard',
    description: 'You are given a series of video clips from a sporting event. Each clip is represented by an interval `[start, end]`. Return the minimum number of clips needed so that we can cut the clips into segments that cover the entire sporting event `[0, time]`. If impossible, return -1.',
    constraints: ['1 <= n <= 100', '0 <= start[i] <= end[i] <= 100', '1 <= time <= 100'],
    examples: [
      { input: 'start = [0,1,2,3,4,5,6,8], end = [2,9,8,9,7,9,9,10], time = 10', output: '3', explanation: 'We take the clips [0,2], [2,8], and [8,10].' }
    ],
    testCases: [
      { input: '8\n10\n0 1 2 3 4 5 6 8\n2 9 8 9 7 9 9 10', expectedOutput: '3', hidden: false },
      { input: '3\n5\n0 1 2\n1 2 3', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: `def video_stitching(start, end, time):
    pass

n = int(input())
time = int(input())
start = list(map(int, input().split()))
end = list(map(int, input().split()))
print(video_stitching(start, end, time))`,
      java: `import java.util.*;

public class Solution {
    public static int videoStitching(int[] start, int[] end, int time) {
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int time = sc.nextInt();
            int[] start = new int[n];
            for (int i = 0; i < n; i++) start[i] = sc.nextInt();
            int[] end = new int[n];
            for (int i = 0; i < n; i++) end[i] = sc.nextInt();
            System.out.println(videoStitching(start, end, time));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int videoStitching(int* start, int* end, int n, int time) {
    return -1;
}

int main() {
    int n, time;
    if (scanf("%d %d", &n, &time) != 2) return 0;
    int* start = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &start[i]);
    int* end = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &end[i]);
    printf("%d\\n", videoStitching(start, end, n, time));
    free(start); free(end);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int videoStitching(vector<int>& start, vector<int>& end, int time) {
    return -1;
}

int main() {
    int n, time;
    if (cin >> n >> time) {
        vector<int> start(n), end(n);
        for (int i = 0; i < n; i++) cin >> start[i];
        for (int i = 0; i < n; i++) cin >> end[i];
        cout << videoStitching(start, end, time) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'as-h4', title: 'Jump Game II', difficulty: 'Hard',
    description: 'You are given a 0-indexed integer array `nums` of length `n`. You are initially positioned at `nums[0]`. Each element `nums[i]` represents the maximum length of a forward jump from index `i`. Find the minimum number of jumps to reach `nums[n - 1]`. You can assume that you can always reach the last index.',
    constraints: ['1 <= nums.length <= 10^4', '0 <= nums[i] <= 1000'],
    examples: [
      { input: 'nums = [2,3,1,1,4]', output: '2', explanation: 'Jump 1 step from index 0 to 1, then 3 steps to the last index.' }
    ],
    testCases: [
      { input: '5\n2 3 1 1 4', expectedOutput: '2', hidden: false },
      { input: '5\n2 3 0 1 4', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: `def jump(nums):
    pass

n = int(input())
nums = list(map(int, input().split()))
print(jump(nums))`,
      java: `import java.util.*;

public class Solution {
    public static int jump(int[] nums) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(jump(nums));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int jump(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", jump(nums, n));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int jump(vector<int>& nums) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        cout << jump(nums) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'as-h5', title: 'Maximum Profit in Job Scheduling', difficulty: 'Hard',
    description: 'We have `n` jobs, where every job is scheduled to be done from `startTime[i]` to `endTime[i]`, obtaining a profit of `profit[i]`. Return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.',
    constraints: ['1 <= n <= 5 * 10^4', '1 <= startTime[i] < endTime[i] <= 10^9', '1 <= profit[i] <= 10^4'],
    examples: [
      { input: 'start = [1,2,3,3], end = [3,4,5,6], profit = [50,10,40,70]', output: '120', explanation: 'Choose job 1 and 4. Profit = 50 + 70 = 120.' }
    ],
    testCases: [
      { input: '4\n1 2 3 3\n3 4 5 6\n50 10 40 70', expectedOutput: '120', hidden: false },
      { input: '5\n1 2 3 4 6\n3 5 10 6 9\n20 20 100 70 60', expectedOutput: '150', hidden: false }
    ],
    starterCode: {
      python: `def job_scheduling(start, end, profit):
    pass

n = int(input())
start = list(map(int, input().split()))
end = list(map(int, input().split()))
profit = list(map(int, input().split()))
print(job_scheduling(start, end, profit))`,
      java: `import java.util.*;

public class Solution {
    public static int jobScheduling(int[] start, int[] end, int[] profit) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] start = new int[n];
            for (int i = 0; i < n; i++) start[i] = sc.nextInt();
            int[] end = new int[n];
            for (int i = 0; i < n; i++) end[i] = sc.nextInt();
            int[] profit = new int[n];
            for (int i = 0; i < n; i++) profit[i] = sc.nextInt();
            System.out.println(jobScheduling(start, end, profit));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int jobScheduling(int* start, int* end, int* profit, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* start = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &start[i]);
    int* end = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &end[i]);
    int* profit = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &profit[i]);
    printf("%d\\n", jobScheduling(start, end, profit, n));
    free(start); free(end); free(profit);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int jobScheduling(vector<int>& start, vector<int>& end, vector<int>& profit) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> start(n), end(n), profit(n);
        for (int i = 0; i < n; i++) cin >> start[i];
        for (int i = 0; i < n; i++) cin >> end[i];
        for (int i = 0; i < n; i++) cin >> profit[i];
        cout << jobScheduling(start, end, profit) << "\\n";
    }
    return 0;
}`
    }
  }
];