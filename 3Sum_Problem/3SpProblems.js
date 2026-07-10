export const threeSumProblems = [
  // EASY
    {
        id:"three-sum-easy-1",
        title:"Detect Any Zero Sum Triplet",
        difficulty:"Easy",
        description:"Given an integer array, determine whether there exists at least one triplet of distinct indices whose values sum to zero. Input contains n followed by n integers. Print true if such a triplet exists, otherwise print false.",
        constraints:[
            "0 <= n <= 5000",
            "-100000 <= nums[i] <= 100000",
            "Triplet indices must be distinct",
            "Expected time complexity is O(n^2)"
        ],
        examples:[
            {
                input:"n = 6, nums = [-1, 0, 1, 2, -1, -4]",
                output:"true",
                explanation:"The values -1, 0, and 1 form a zero-sum triplet."
            },
            {
                input:"n = 5, nums = [1, 2, 3, 4, 5]",
                output:"false",
                explanation:"No three values in the array sum to zero."
            }
        ],
        testCases:[
            { input:"6\n-1 0 1 2 -1 -4", expectedOutput:"true", hidden:false },
            { input:"5\n1 2 3 4 5", expectedOutput:"false", hidden:false },
            { input:"3\n0 0 0", expectedOutput:"true", hidden:true },
            { input:"4\n-5 2 3 10", expectedOutput:"true", hidden:true },
            { input:"2\n1 -1", expectedOutput:"false", hidden:true }
        ],
        starterCode:{
            python:`import sys

def has_zero_sum_triplet(nums):
    return False

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    nums = data[1:1 + n]
    print(str(has_zero_sum_triplet(nums)).lower())

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static boolean hasZeroSumTriplet(int[] nums) {
        return false;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        System.out.println(hasZeroSumTriplet(nums));
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool hasZeroSumTriplet(int* nums, int n) {
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    printf("%s\\n", hasZeroSumTriplet(nums, n) ? "true" : "false");
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

bool hasZeroSumTriplet(vector<int>& nums) {
    return false;
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    cout << (hasZeroSumTriplet(nums) ? "true" : "false") << "\\n";
    return 0;
}`
        }
    },
    {
        id:"three-sum-easy-2",
        title:"First Zero Sum Triplet",
        difficulty:"Easy",
        description:"Given an integer array, print the first zero-sum triplet found by the sorted two-pointer method. The printed triplet must be in nondecreasing order. If no triplet exists, print None.",
        constraints:[
            "0 <= n <= 3000",
            "-100000 <= nums[i] <= 100000",
            "Return one valid triplet only",
            "If multiple triplets exist, use the first one discovered after sorting"
        ],
        examples:[
            {
                input:"n = 6, nums = [-1, 0, 1, 2, -1, -4]",
                output:"-1 -1 2",
                explanation:"After sorting, the first zero-sum triplet discovered is -1, -1, 2."
            },
            {
                input:"n = 4, nums = [1, 2, 4, 8]",
                output:"None",
                explanation:"No zero-sum triplet exists."
            }
        ],
        testCases:[
            { input:"6\n-1 0 1 2 -1 -4", expectedOutput:"-1 -1 2", hidden:false },
            { input:"4\n1 2 4 8", expectedOutput:"None", hidden:false },
            { input:"3\n0 0 0", expectedOutput:"0 0 0", hidden:true },
            { input:"5\n-2 -1 3 4 5", expectedOutput:"-2 -1 3", hidden:true },
            { input:"2\n-1 1", expectedOutput:"None", hidden:true }
        ],
        starterCode:{
            python:`import sys

def first_zero_sum_triplet(nums):
    return []

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    nums = data[1:1 + n]
    answer = first_zero_sum_triplet(nums)
    print(" ".join(map(str, answer)) if answer else "None")

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static int[] firstZeroSumTriplet(int[] nums) {
        return new int[0];
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        int[] answer = firstZeroSumTriplet(nums);
        if (answer.length == 0) {
            System.out.println("None");
        } else {
            System.out.println(answer[0] + " " + answer[1] + " " + answer[2]);
        }
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool firstZeroSumTriplet(int* nums, int n, int* answer) {
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    int answer[3];
    if (firstZeroSumTriplet(nums, n, answer)) {
        printf("%d %d %d\\n", answer[0], answer[1], answer[2]);
    } else {
        printf("None\\n");
    }
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

vector<int> firstZeroSumTriplet(vector<int>& nums) {
    return {};
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    vector<int> answer = firstZeroSumTriplet(nums);
    if (answer.empty()) {
        cout << "None\\n";
    } else {
        cout << answer[0] << " " << answer[1] << " " << answer[2] << "\\n";
    }
    return 0;
}`
        }
    },
    {
        id:"three-sum-easy-3",
        title:"Count Index Triplets with Zero Sum",
        difficulty:"Easy",
        description:"Given an integer array, count how many triplets of indices i, j, and k satisfy i < j < k and nums[i] + nums[j] + nums[k] = 0. Print the count as an integer.",
        constraints:[
            "0 <= n <= 3000",
            "-10000 <= nums[i] <= 10000",
            "Count index triplets, not just unique value triplets",
            "The answer fits in a 64-bit signed integer"
        ],
        examples:[
            {
                input:"n = 6, nums = [-1, 0, 1, 2, -1, -4]",
                output:"3",
                explanation:"The zero-sum index triplets correspond to values [-1, 0, 1], [-1, 0, 1], and [-1, -1, 2]."
            },
            {
                input:"n = 4, nums = [0, 0, 0, 0]",
                output:"4",
                explanation:"Any three of the four zeroes form a zero-sum triplet."
            }
        ],
        testCases:[
            { input:"6\n-1 0 1 2 -1 -4", expectedOutput:"3", hidden:false },
            { input:"4\n0 0 0 0", expectedOutput:"4", hidden:false },
            { input:"5\n1 -1 2 -2 0", expectedOutput:"2", hidden:true },
            { input:"3\n1 2 3", expectedOutput:"0", hidden:true },
            { input:"5\n-2 -2 0 2 2", expectedOutput:"4", hidden:true }
        ],
        starterCode:{
            python:`import sys

def count_zero_sum_index_triplets(nums):
    return 0

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    nums = data[1:1 + n]
    print(count_zero_sum_index_triplets(nums))

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static long countZeroSumIndexTriplets(int[] nums) {
        return 0L;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        System.out.println(countZeroSumIndexTriplets(nums));
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>

long long countZeroSumIndexTriplets(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    printf("%lld\\n", countZeroSumIndexTriplets(nums, n));
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

long long countZeroSumIndexTriplets(vector<int>& nums) {
    return 0;
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    cout << countZeroSumIndexTriplets(nums) << "\\n";
    return 0;
}`
        }
    },
    {
        id:"three-sum-easy-4",
        title:"3Sum in a Sorted Array",
        difficulty:"Easy",
        description:"Given an already sorted integer array, print all unique triplets whose sum is zero. Each triplet must appear on a new line in nondecreasing order. If no triplet exists, print None.",
        constraints:[
            "0 <= n <= 3000",
            "-100000 <= nums[i] <= 100000",
            "nums is sorted in nondecreasing order",
            "Duplicate triplets must not be printed"
        ],
        examples:[
            {
                input:"n = 6, nums = [-4, -1, -1, 0, 1, 2]",
                output:"-1 -1 2\n-1 0 1",
                explanation:"These are the two unique zero-sum triplets."
            },
            {
                input:"n = 5, nums = [1, 2, 3, 4, 5]",
                output:"None",
                explanation:"All values are positive, so no zero-sum triplet exists."
            }
        ],
        testCases:[
            { input:"6\n-4 -1 -1 0 1 2", expectedOutput:"-1 -1 2\n-1 0 1", hidden:false },
            { input:"5\n1 2 3 4 5", expectedOutput:"None", hidden:false },
            { input:"3\n0 0 0", expectedOutput:"0 0 0", hidden:true },
            { input:"7\n-3 -2 -1 0 1 2 3", expectedOutput:"-3 0 3\n-3 1 2\n-2 -1 3\n-2 0 2\n-1 0 1", hidden:true },
            { input:"0\n", expectedOutput:"None", hidden:true }
        ],
        starterCode:{
            python:`import sys

def three_sum_sorted(nums):
    return []

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    nums = data[1:1 + n]
    answer = three_sum_sorted(nums)
    if not answer:
        print("None")
    else:
        for triplet in answer:
            print(*triplet)

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static List<List<Integer>> threeSumSorted(int[] nums) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        List<List<Integer>> answer = threeSumSorted(nums);
        if (answer.isEmpty()) {
            System.out.println("None");
        } else {
            for (List<Integer> triplet : answer) {
                System.out.println(triplet.get(0) + " " + triplet.get(1) + " " + triplet.get(2));
            }
        }
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    printf("None\\n");
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> threeSumSorted(vector<int>& nums) {
    return {};
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    vector<vector<int>> answer = threeSumSorted(nums);
    if (answer.empty()) {
        cout << "None\\n";
    } else {
        for (const auto& triplet : answer) {
            cout << triplet[0] << " " << triplet[1] << " " << triplet[2] << "\\n";
        }
    }
    return 0;
}`
        }
    },
    {
        id:"three-sum-easy-5",
        title:"Find Triplet with Given Sum",
        difficulty:"Easy",
        description:"Given an integer array and a target value, determine whether any triplet of distinct indices has a sum equal to the target. Input contains n, the array, and target. Print true or false.",
        constraints:[
            "0 <= n <= 5000",
            "-100000 <= nums[i] <= 100000",
            "-300000 <= target <= 300000",
            "Expected time complexity is O(n^2)"
        ],
        examples:[
            {
                input:"n = 6, nums = [12, 3, 4, 1, 6, 9], target = 24",
                output:"true",
                explanation:"The values 3, 9, and 12 sum to 24."
            },
            {
                input:"n = 5, nums = [1, 2, 4, 8, 16], target = 31",
                output:"false",
                explanation:"No triplet reaches the target."
            }
        ],
        testCases:[
            { input:"6\n12 3 4 1 6 9\n24", expectedOutput:"true", hidden:false },
            { input:"5\n1 2 4 8 16\n31", expectedOutput:"false", hidden:false },
            { input:"3\n1 2 3\n6", expectedOutput:"true", hidden:true },
            { input:"4\n-1 2 1 -4\n2", expectedOutput:"true", hidden:true },
            { input:"2\n5 5\n10", expectedOutput:"false", hidden:true }
        ],
        starterCode:{
            python:`import sys

def has_triplet_sum(nums, target):
    return False

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print(str(has_triplet_sum(nums, target)).lower())

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static boolean hasTripletSum(int[] nums, int target) {
        return false;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        int target = scanner.nextInt();
        System.out.println(hasTripletSum(nums, target));
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool hasTripletSum(int* nums, int n, int target) {
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    int target;
    scanf("%d", &target);
    printf("%s\\n", hasTripletSum(nums, n, target) ? "true" : "false");
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

bool hasTripletSum(vector<int>& nums, int target) {
    return false;
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    int target;
    cin >> target;
    cout << (hasTripletSum(nums, target) ? "true" : "false") << "\\n";
    return 0;
}`
        }
    },
  // MEDIUM
    {
        id:"three-sum-medium-1",
        title:"Unique Zero Sum Triplets",
        difficulty:"Medium",
        description:"Given an unsorted integer array, print all unique triplets whose sum is zero. Triplets must be printed in lexicographic order after sorting each triplet. If there are no triplets, print None.",
        constraints:[
            "0 <= n <= 3000",
            "-100000 <= nums[i] <= 100000",
            "Duplicate triplets must not appear in the output",
            "Expected time complexity is O(n^2)"
        ],
        examples:[
            {
                input:"n = 6, nums = [-1, 0, 1, 2, -1, -4]",
                output:"-1 -1 2\n-1 0 1",
                explanation:"The two unique zero-sum triplets are shown in sorted order."
            },
            {
                input:"n = 4, nums = [0, 0, 0, 0]",
                output:"0 0 0",
                explanation:"Even though there are four zeroes, the unique value triplet appears once."
            }
        ],
        testCases:[
            { input:"6\n-1 0 1 2 -1 -4", expectedOutput:"-1 -1 2\n-1 0 1", hidden:false },
            { input:"4\n0 0 0 0", expectedOutput:"0 0 0", hidden:false },
            { input:"5\n1 2 3 4 5", expectedOutput:"None", hidden:true },
            { input:"7\n-2 0 1 1 2 -1 -4", expectedOutput:"-2 0 2\n-2 1 1\n-1 0 1", hidden:true },
            { input:"3\n-2 0 2", expectedOutput:"-2 0 2", hidden:true }
        ],
        starterCode:{
            python:`import sys

def unique_three_sum(nums):
    return []

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    nums = data[1:1 + n]
    answer = unique_three_sum(nums)
    if not answer:
        print("None")
    else:
        for triplet in answer:
            print(*triplet)

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static List<List<Integer>> uniqueThreeSum(int[] nums) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        List<List<Integer>> answer = uniqueThreeSum(nums);
        if (answer.isEmpty()) {
            System.out.println("None");
        } else {
            for (List<Integer> triplet : answer) {
                System.out.println(triplet.get(0) + " " + triplet.get(1) + " " + triplet.get(2));
            }
        }
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    printf("None\\n");
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> uniqueThreeSum(vector<int>& nums) {
    return {};
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    vector<vector<int>> answer = uniqueThreeSum(nums);
    if (answer.empty()) {
        cout << "None\\n";
    } else {
        for (const auto& triplet : answer) {
            cout << triplet[0] << " " << triplet[1] << " " << triplet[2] << "\\n";
        }
    }
    return 0;
}`
        }
    },
    {
        id:"three-sum-medium-2",
        title:"Three Sum Closest",
        difficulty:"Medium",
        description:"Given an integer array and a target value, find the triplet sum closest to the target. If two sums are equally close, print the smaller sum.",
        constraints:[
            "3 <= n <= 5000",
            "-100000 <= nums[i] <= 100000",
            "-300000 <= target <= 300000",
            "The answer fits in a 32-bit signed integer"
        ],
        examples:[
            {
                input:"n = 4, nums = [-1, 2, 1, -4], target = 1",
                output:"2",
                explanation:"The closest sum to 1 is 2 from -1 + 1 + 2."
            },
            {
                input:"n = 3, nums = [0, 0, 0], target = 1",
                output:"0",
                explanation:"Only one triplet exists and its sum is 0."
            }
        ],
        testCases:[
            { input:"4\n-1 2 1 -4\n1", expectedOutput:"2", hidden:false },
            { input:"3\n0 0 0\n1", expectedOutput:"0", hidden:false },
            { input:"5\n1 1 1 0 -2\n1", expectedOutput:"0", hidden:true },
            { input:"5\n5 2 7 4 -3\n10", expectedOutput:"9", hidden:true },
            { input:"4\n-5 -4 -3 -2\n-10", expectedOutput:"-10", hidden:true }
        ],
        starterCode:{
            python:`import sys

def three_sum_closest(nums, target):
    return 0

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print(three_sum_closest(nums, target))

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static int threeSumClosest(int[] nums, int target) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        int target = scanner.nextInt();
        System.out.println(threeSumClosest(nums, target));
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>

int threeSumClosest(int* nums, int n, int target) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    int target;
    scanf("%d", &target);
    printf("%d\\n", threeSumClosest(nums, n, target));
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

int threeSumClosest(vector<int>& nums, int target) {
    return 0;
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    int target;
    cin >> target;
    cout << threeSumClosest(nums, target) << "\\n";
    return 0;
}`
        }
    },
    {
        id:"three-sum-medium-3",
        title:"Count Triplets Smaller Than Target",
        difficulty:"Medium",
        description:"Given an integer array and a target value, count the number of index triplets i < j < k whose sum is strictly smaller than the target.",
        constraints:[
            "0 <= n <= 5000",
            "-100000 <= nums[i] <= 100000",
            "-300000 <= target <= 300000",
            "The answer fits in a 64-bit signed integer"
        ],
        examples:[
            {
                input:"n = 4, nums = [-2, 0, 1, 3], target = 2",
                output:"2",
                explanation:"The valid triplets are [-2, 0, 1] and [-2, 0, 3]."
            },
            {
                input:"n = 3, nums = [1, 1, 1], target = 4",
                output:"1",
                explanation:"The only triplet sum is 3, which is smaller than 4."
            }
        ],
        testCases:[
            { input:"4\n-2 0 1 3\n2", expectedOutput:"2", hidden:false },
            { input:"3\n1 1 1\n4", expectedOutput:"1", hidden:false },
            { input:"5\n5 1 3 4 7\n12", expectedOutput:"4", hidden:true },
            { input:"4\n0 0 0 0\n0", expectedOutput:"0", hidden:true },
            { input:"5\n-1 -1 -1 2 2\n1", expectedOutput:"7", hidden:true }
        ],
        starterCode:{
            python:`import sys

def count_triplets_smaller(nums, target):
    return 0

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print(count_triplets_smaller(nums, target))

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static long countTripletsSmaller(int[] nums, int target) {
        return 0L;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        int target = scanner.nextInt();
        System.out.println(countTripletsSmaller(nums, target));
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>

long long countTripletsSmaller(int* nums, int n, int target) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    int target;
    scanf("%d", &target);
    printf("%lld\\n", countTripletsSmaller(nums, n, target));
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

long long countTripletsSmaller(vector<int>& nums, int target) {
    return 0;
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    int target;
    cin >> target;
    cout << countTripletsSmaller(nums, target) << "\\n";
    return 0;
}`
        }
    },
    {
        id:"three-sum-medium-4",
        title:"Three Sum Multiplicity",
        difficulty:"Medium",
        description:"Given an integer array that may contain duplicates and a target value, count the number of index triplets i < j < k whose values sum to target. Print the answer modulo 1000000007.",
        constraints:[
            "0 <= n <= 5000",
            "0 <= nums[i] <= 100000",
            "0 <= target <= 300000",
            "Return the answer modulo 1000000007"
        ],
        examples:[
            {
                input:"n = 10, nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5], target = 8",
                output:"20",
                explanation:"There are 20 index triplets whose values sum to 8."
            },
            {
                input:"n = 4, nums = [0, 0, 0, 0], target = 0",
                output:"4",
                explanation:"Choose any three of the four zeroes."
            }
        ],
        testCases:[
            { input:"10\n1 1 2 2 3 3 4 4 5 5\n8", expectedOutput:"20", hidden:false },
            { input:"4\n0 0 0 0\n0", expectedOutput:"4", hidden:false },
            { input:"5\n1 1 1 1 1\n3", expectedOutput:"10", hidden:true },
            { input:"6\n1 2 3 4 5 6\n10", expectedOutput:"3", hidden:true },
            { input:"3\n2 2 2\n6", expectedOutput:"1", hidden:true }
        ],
        starterCode:{
            python:`import sys

def three_sum_multiplicity(nums, target):
    return 0

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print(three_sum_multiplicity(nums, target))

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static int threeSumMultiplicity(int[] nums, int target) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        int target = scanner.nextInt();
        System.out.println(threeSumMultiplicity(nums, target));
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>

int threeSumMultiplicity(int* nums, int n, int target) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    int target;
    scanf("%d", &target);
    printf("%d\\n", threeSumMultiplicity(nums, n, target));
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

int threeSumMultiplicity(vector<int>& nums, int target) {
    return 0;
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    int target;
    cin >> target;
    cout << threeSumMultiplicity(nums, target) << "\\n";
    return 0;
}`
        }
    },
    {
        id:"three-sum-medium-5",
        title:"Count Triplets with Sum in Range",
        difficulty:"Medium",
        description:"Given an integer array and two integers low and high, count the number of index triplets i < j < k whose sum lies in the inclusive range [low, high].",
        constraints:[
            "0 <= n <= 5000",
            "-100000 <= nums[i] <= 100000",
            "-300000 <= low <= high <= 300000",
            "The answer fits in a 64-bit signed integer"
        ],
        examples:[
            {
                input:"n = 5, nums = [-2, 0, 1, 3, 5], low = 2, high = 4",
                output:"4",
                explanation:"The valid triplets are [-2, 0, 5], [-2, 1, 3], [-2, 1, 5], and [0, 1, 3]."
            },
            {
                input:"n = 4, nums = [1, 1, 1, 1], low = 3, high = 3",
                output:"4",
                explanation:"Every choice of three ones has sum 3."
            }
        ],
        testCases:[
            { input:"5\n-2 0 1 3 5\n2 4", expectedOutput:"4", hidden:false },
            { input:"4\n1 1 1 1\n3 3", expectedOutput:"4", hidden:false },
            { input:"5\n-1 0 2 4 5\n3 6", expectedOutput:"5", hidden:true },
            { input:"3\n10 20 30\n0 50", expectedOutput:"0", hidden:true },
            { input:"5\n-5 -2 0 3 8\n-7 1", expectedOutput:"5", hidden:true }
        ],
        starterCode:{
            python:`import sys

def count_triplets_in_range(nums, low, high):
    return 0

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    nums = data[1:1 + n]
    low = data[1 + n]
    high = data[2 + n]
    print(count_triplets_in_range(nums, low, high))

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static long countTripletsInRange(int[] nums, int low, int high) {
        return 0L;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        int low = scanner.nextInt();
        int high = scanner.nextInt();
        System.out.println(countTripletsInRange(nums, low, high));
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>

long long countTripletsInRange(int* nums, int n, int low, int high) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    int low, high;
    scanf("%d %d", &low, &high);
    printf("%lld\\n", countTripletsInRange(nums, n, low, high));
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

long long countTripletsInRange(vector<int>& nums, int low, int high) {
    return 0;
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    int low, high;
    cin >> low >> high;
    cout << countTripletsInRange(nums, low, high) << "\\n";
    return 0;
}`
        }
    },
  // HARD
    {
        id:"three-sum-hard-1",
        title:"Four Sum Using 3Sum Strategy",
        difficulty:"Hard",
        description:"Given an integer array and a target value, print all unique quadruplets whose sum equals the target. Each quadruplet must be printed in nondecreasing order. If none exist, print None.",
        constraints:[
            "0 <= n <= 600",
            "-100000 <= nums[i] <= 100000",
            "-400000 <= target <= 400000",
            "Duplicate quadruplets must not be printed"
        ],
        examples:[
            {
                input:"n = 6, nums = [1, 0, -1, 0, -2, 2], target = 0",
                output:"-2 -1 1 2\n-2 0 0 2\n-1 0 0 1",
                explanation:"These are all unique quadruplets that sum to zero."
            },
            {
                input:"n = 5, nums = [2, 2, 2, 2, 2], target = 8",
                output:"2 2 2 2",
                explanation:"Only one unique quadruplet exists."
            }
        ],
        testCases:[
            { input:"6\n1 0 -1 0 -2 2\n0", expectedOutput:"-2 -1 1 2\n-2 0 0 2\n-1 0 0 1", hidden:false },
            { input:"5\n2 2 2 2 2\n8", expectedOutput:"2 2 2 2", hidden:false },
            { input:"4\n1 2 3 4\n50", expectedOutput:"None", hidden:true },
            { input:"5\n-3 -1 0 2 4\n2", expectedOutput:"-3 -1 2 4", hidden:true },
            { input:"7\n-2 -1 -1 1 1 2 2\n0", expectedOutput:"-2 -1 1 2\n-1 -1 1 1", hidden:true }
        ],
        starterCode:{
            python:`import sys

def four_sum(nums, target):
    return []

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    answer = four_sum(nums, target)
    if not answer:
        print("None")
    else:
        for quad in answer:
            print(*quad)

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static List<List<Integer>> fourSum(int[] nums, int target) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        int target = scanner.nextInt();
        List<List<Integer>> answer = fourSum(nums, target);
        if (answer.isEmpty()) {
            System.out.println("None");
        } else {
            for (List<Integer> quad : answer) {
                System.out.println(quad.get(0) + " " + quad.get(1) + " " + quad.get(2) + " " + quad.get(3));
            }
        }
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    int target;
    scanf("%d", &target);
    printf("None\\n");
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> fourSum(vector<int>& nums, int target) {
    return {};
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    int target;
    cin >> target;
    vector<vector<int>> answer = fourSum(nums, target);
    if (answer.empty()) {
        cout << "None\\n";
    } else {
        for (const auto& quad : answer) {
            cout << quad[0] << " " << quad[1] << " " << quad[2] << " " << quad[3] << "\\n";
        }
    }
    return 0;
}`
        }
    },
    {
        id:"three-sum-hard-2",
        title:"3Sum Across Three Arrays",
        difficulty:"Hard",
        description:"Given three arrays A, B, and C of equal length n, count the number of index triples (i, j, k) such that A[i] + B[j] + C[k] = 0. Input contains n, then the three arrays. Print the count.",
        constraints:[
            "0 <= n <= 3000",
            "-100000 <= A[i], B[i], C[i] <= 100000",
            "The answer fits in a 64-bit signed integer",
            "An O(n^2) hash-map approach is expected"
        ],
        examples:[
            {
                input:"n = 2, A = [-1, -1], B = [0, 1], C = [1, 0]",
                output:"4",
                explanation:"Each valid pair from A and B can be matched with a complement in C."
            },
            {
                input:"n = 3, A = [1, 2, 3], B = [4, 5, 6], C = [7, 8, 9]",
                output:"0",
                explanation:"All sums are positive."
            }
        ],
        testCases:[
            { input:"2\n-1 -1\n0 1\n1 0", expectedOutput:"4", hidden:false },
            { input:"3\n1 2 3\n4 5 6\n7 8 9", expectedOutput:"0", hidden:false },
            { input:"2\n0 0\n0 0\n0 0", expectedOutput:"8", hidden:true },
            { input:"3\n-1 0 1\n-1 0 1\n-1 0 1", expectedOutput:"7", hidden:true },
            { input:"1\n5\n-2\n-3", expectedOutput:"1", hidden:true }
        ],
        starterCode:{
            python:`import sys

def count_three_array_zero_sum(a_values, b_values, c_values):
    return 0

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    index = 1
    a_values = data[index:index + n]
    index += n
    b_values = data[index:index + n]
    index += n
    c_values = data[index:index + n]
    print(count_three_array_zero_sum(a_values, b_values, c_values))

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static long countThreeArrayZeroSum(int[] aValues, int[] bValues, int[] cValues) {
        return 0L;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] aValues = new int[n];
        int[] bValues = new int[n];
        int[] cValues = new int[n];
        for (int i = 0; i < n; i++) aValues[i] = scanner.nextInt();
        for (int i = 0; i < n; i++) bValues[i] = scanner.nextInt();
        for (int i = 0; i < n; i++) cValues[i] = scanner.nextInt();
        System.out.println(countThreeArrayZeroSum(aValues, bValues, cValues));
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>

long long countThreeArrayZeroSum(int* aValues, int* bValues, int* cValues, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* aValues = (int*)malloc(n * sizeof(int));
    int* bValues = (int*)malloc(n * sizeof(int));
    int* cValues = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &aValues[i]);
    for (int i = 0; i < n; i++) scanf("%d", &bValues[i]);
    for (int i = 0; i < n; i++) scanf("%d", &cValues[i]);
    printf("%lld\\n", countThreeArrayZeroSum(aValues, bValues, cValues, n));
    free(aValues);
    free(bValues);
    free(cValues);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

long long countThreeArrayZeroSum(vector<int>& aValues, vector<int>& bValues, vector<int>& cValues) {
    return 0;
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> aValues(n), bValues(n), cValues(n);
    for (int i = 0; i < n; i++) cin >> aValues[i];
    for (int i = 0; i < n; i++) cin >> bValues[i];
    for (int i = 0; i < n; i++) cin >> cValues[i];
    cout << countThreeArrayZeroSum(aValues, bValues, cValues) << "\\n";
    return 0;
}`
        }
    },
    {
        id:"three-sum-hard-3",
        title:"Minimum Absolute Three Sum",
        difficulty:"Hard",
        description:"Given an integer array, find the triplet sum whose absolute value is minimum. If two sums have the same absolute value, print the smaller sum.",
        constraints:[
            "3 <= n <= 5000",
            "-100000 <= nums[i] <= 100000",
            "The answer fits in a 32-bit signed integer",
            "Expected time complexity is O(n^2)"
        ],
        examples:[
            {
                input:"n = 5, nums = [-8, -5, -3, 4, 9]",
                output:"1",
                explanation:"The sum 1 from -5 + -3 + 9 has the smallest absolute value among all triplet sums."
            },
            {
                input:"n = 4, nums = [-7, -2, 4, 9]",
                output:"0",
                explanation:"The values -7, -2, and 9 sum exactly to zero."
            }
        ],
        testCases:[
            { input:"5\n-8 -5 -3 4 9", expectedOutput:"1", hidden:false },
            { input:"4\n-7 -2 4 9", expectedOutput:"0", hidden:false },
            { input:"3\n1 2 3", expectedOutput:"6", hidden:true },
            { input:"5\n-10 -4 2 5 7", expectedOutput:"-1", hidden:true },
            { input:"5\n-6 -1 2 3 8", expectedOutput:"-1", hidden:true }
        ],
        starterCode:{
            python:`import sys

def minimum_absolute_three_sum(nums):
    return 0

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    nums = data[1:1 + n]
    print(minimum_absolute_three_sum(nums))

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static int minimumAbsoluteThreeSum(int[] nums) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        System.out.println(minimumAbsoluteThreeSum(nums));
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>

int minimumAbsoluteThreeSum(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    printf("%d\\n", minimumAbsoluteThreeSum(nums, n));
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

int minimumAbsoluteThreeSum(vector<int>& nums) {
    return 0;
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    cout << minimumAbsoluteThreeSum(nums) << "\\n";
    return 0;
}`
        }
    },
    {
        id:"three-sum-hard-4",
        title:"Count Unique Value Triplets for Target",
        difficulty:"Hard",
        description:"Given an integer array and a target value, count how many unique value triplets sum to the target. Triplets with the same three values count once even if they can be formed by many index combinations.",
        constraints:[
            "0 <= n <= 5000",
            "-100000 <= nums[i] <= 100000",
            "-300000 <= target <= 300000",
            "Duplicate value triplets must be counted once"
        ],
        examples:[
            {
                input:"n = 6, nums = [-1, 0, 1, 2, -1, -4], target = 0",
                output:"2",
                explanation:"The unique value triplets are [-1, -1, 2] and [-1, 0, 1]."
            },
            {
                input:"n = 5, nums = [1, 1, 1, 2, 2], target = 4",
                output:"1",
                explanation:"Only the value triplet [1, 1, 2] is counted."
            }
        ],
        testCases:[
            { input:"6\n-1 0 1 2 -1 -4\n0", expectedOutput:"2", hidden:false },
            { input:"5\n1 1 1 2 2\n4", expectedOutput:"1", hidden:false },
            { input:"7\n-2 0 1 1 2 -1 -4\n0", expectedOutput:"3", hidden:true },
            { input:"4\n0 0 0 0\n0", expectedOutput:"1", hidden:true },
            { input:"5\n1 2 3 4 5\n50", expectedOutput:"0", hidden:true }
        ],
        starterCode:{
            python:`import sys

def count_unique_value_triplets(nums, target):
    return 0

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print(count_unique_value_triplets(nums, target))

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static int countUniqueValueTriplets(int[] nums, int target) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        int target = scanner.nextInt();
        System.out.println(countUniqueValueTriplets(nums, target));
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>

int countUniqueValueTriplets(int* nums, int n, int target) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    int target;
    scanf("%d", &target);
    printf("%d\\n", countUniqueValueTriplets(nums, n, target));
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

int countUniqueValueTriplets(vector<int>& nums, int target) {
    return 0;
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    int target;
    cin >> target;
    cout << countUniqueValueTriplets(nums, target) << "\\n";
    return 0;
}`
        }
    },
    {
        id:"three-sum-hard-5",
        title:"Answer Multiple 3Sum Queries",
        difficulty:"Hard",
        description:"Given one integer array and q target queries, answer each query with true if any triplet of distinct indices sums to that target, otherwise false. Print one answer per line.",
        constraints:[
            "0 <= n <= 700",
            "1 <= q <= 200",
            "-100000 <= nums[i] <= 100000",
            "-300000 <= target <= 300000"
        ],
        examples:[
            {
                input:"n = 5, nums = [-2, 0, 1, 3, 5], q = 3, targets = [2, 4, 10]",
                output:"true\ntrue\nfalse",
                explanation:"The targets 2 and 4 are achievable by triplets, while 10 is not."
            },
            {
                input:"n = 3, nums = [1, 2, 3], q = 2, targets = [6, 7]",
                output:"true\nfalse",
                explanation:"Only target 6 can be made from the single triplet."
            }
        ],
        testCases:[
            { input:"5\n-2 0 1 3 5\n3\n2 4 10", expectedOutput:"true\ntrue\nfalse", hidden:false },
            { input:"3\n1 2 3\n2\n6 7", expectedOutput:"true\nfalse", hidden:false },
            { input:"4\n0 0 0 0\n2\n0 1", expectedOutput:"true\nfalse", hidden:true },
            { input:"5\n-5 -1 2 4 9\n3\n0 5 20", expectedOutput:"false\ntrue\nfalse", hidden:true },
            { input:"2\n1 2\n1\n3", expectedOutput:"false", hidden:true }
        ],
        starterCode:{
            python:`import sys

def answer_three_sum_queries(nums, targets):
    return [False] * len(targets)

def solve():
    data = list(map(int, sys.stdin.read().strip().split()))
    if not data:
        return
    n = data[0]
    index = 1
    nums = data[index:index + n]
    index += n
    q = data[index]
    index += 1
    targets = data[index:index + q]
    for value in answer_three_sum_queries(nums, targets):
        print(str(value).lower())

if __name__ == "__main__":
    solve()`,
            java:`import java.util.*;

public class Solution {
    public static boolean[] answerThreeSumQueries(int[] nums, int[] targets) {
        return new boolean[targets.length];
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) {
            return;
        }
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        int q = scanner.nextInt();
        int[] targets = new int[q];
        for (int i = 0; i < q; i++) {
            targets[i] = scanner.nextInt();
        }
        boolean[] answer = answerThreeSumQueries(nums, targets);
        for (boolean value : answer) {
            System.out.println(value);
        }
    }
}`,
            c:`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool hasTripletForTarget(int* nums, int n, int target) {
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        return 0;
    }
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    int q;
    scanf("%d", &q);
    for (int i = 0; i < q; i++) {
        int target;
        scanf("%d", &target);
        printf("%s\\n", hasTripletForTarget(nums, n, target) ? "true" : "false");
    }
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

vector<bool> answerThreeSumQueries(vector<int>& nums, vector<int>& targets) {
    return vector<bool>(targets.size(), false);
}

int main() {
    int n;
    if (!(cin >> n)) {
        return 0;
    }
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    int q;
    cin >> q;
    vector<int> targets(q);
    for (int i = 0; i < q; i++) {
        cin >> targets[i];
    }
    vector<bool> answer = answerThreeSumQueries(nums, targets);
    for (bool value : answer) {
        cout << (value ? "true" : "false") << "\\n";
    }
    return 0;
}`
        }
    }
];
