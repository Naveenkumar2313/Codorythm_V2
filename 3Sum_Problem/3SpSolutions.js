const solutions = [
    {
        id:"three-sum-easy-1",
        solution:{
            python:`import sys

def has_zero_sum_triplet(nums):
    nums.sort()
    n = len(nums)
    for i in range(n - 2):
        left = i + 1
        right = n - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                return True
            if total < 0:
                left += 1
            else:
                right -= 1
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
        Arrays.sort(nums);
        int n = nums.length;
        for (int i = 0; i < n - 2; i++) {
            int left = i + 1;
            int right = n - 1;
            while (left < right) {
                int total = nums[i] + nums[left] + nums[right];
                if (total == 0) {
                    return true;
                }
                if (total < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
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

int compareIntegers(const void* a, const void* b) {
    int first = *(const int*)a;
    int second = *(const int*)b;
    return (first > second) - (first < second);
}

bool hasZeroSumTriplet(int* nums, int n) {
    qsort(nums, n, sizeof(int), compareIntegers);
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total == 0) {
                return true;
            }
            if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
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
    sort(nums.begin(), nums.end());
    int n = (int)nums.size();
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total == 0) {
                return true;
            }
            if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
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
        solution:{
            python:`import sys

def first_zero_sum_triplet(nums):
    nums.sort()
    n = len(nums)
    for i in range(n - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left = i + 1
        right = n - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                return [nums[i], nums[left], nums[right]]
            if total < 0:
                left += 1
            else:
                right -= 1
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
        Arrays.sort(nums);
        int n = nums.length;
        for (int i = 0; i < n - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            int left = i + 1;
            int right = n - 1;
            while (left < right) {
                int total = nums[i] + nums[left] + nums[right];
                if (total == 0) {
                    return new int[]{nums[i], nums[left], nums[right]};
                }
                if (total < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
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

int compareIntegers(const void* a, const void* b) {
    int first = *(const int*)a;
    int second = *(const int*)b;
    return (first > second) - (first < second);
}

bool firstZeroSumTriplet(int* nums, int n, int* answer) {
    qsort(nums, n, sizeof(int), compareIntegers);
    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total == 0) {
                answer[0] = nums[i];
                answer[1] = nums[left];
                answer[2] = nums[right];
                return true;
            }
            if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
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
    sort(nums.begin(), nums.end());
    int n = (int)nums.size();
    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total == 0) {
                return {nums[i], nums[left], nums[right]};
            }
            if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
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
        solution:{
            python:`import sys

def count_zero_sum_index_triplets(nums):
    nums.sort()
    n = len(nums)
    count = 0
    for i in range(n - 2):
        left = i + 1
        right = n - 1
        target = -nums[i]
        while left < right:
            pair_sum = nums[left] + nums[right]
            if pair_sum < target:
                left += 1
            elif pair_sum > target:
                right -= 1
            else:
                if nums[left] == nums[right]:
                    length = right - left + 1
                    count += length * (length - 1) // 2
                    break
                left_value = nums[left]
                right_value = nums[right]
                left_count = 0
                right_count = 0
                while left <= right and nums[left] == left_value:
                    left_count += 1
                    left += 1
                while right >= left and nums[right] == right_value:
                    right_count += 1
                    right -= 1
                count += left_count * right_count
    return count

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
        Arrays.sort(nums);
        int n = nums.length;
        long count = 0;
        for (int i = 0; i < n - 2; i++) {
            int left = i + 1;
            int right = n - 1;
            int target = -nums[i];
            while (left < right) {
                int pairSum = nums[left] + nums[right];
                if (pairSum < target) {
                    left++;
                } else if (pairSum > target) {
                    right--;
                } else {
                    if (nums[left] == nums[right]) {
                        long length = right - left + 1L;
                        count += length * (length - 1) / 2;
                        break;
                    }
                    int leftValue = nums[left];
                    int rightValue = nums[right];
                    long leftCount = 0;
                    long rightCount = 0;
                    while (left <= right && nums[left] == leftValue) {
                        leftCount++;
                        left++;
                    }
                    while (right >= left && nums[right] == rightValue) {
                        rightCount++;
                        right--;
                    }
                    count += leftCount * rightCount;
                }
            }
        }
        return count;
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

int compareIntegers(const void* a, const void* b) {
    int first = *(const int*)a;
    int second = *(const int*)b;
    return (first > second) - (first < second);
}

long long countZeroSumIndexTriplets(int* nums, int n) {
    qsort(nums, n, sizeof(int), compareIntegers);
    long long count = 0;
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        int target = -nums[i];
        while (left < right) {
            int pairSum = nums[left] + nums[right];
            if (pairSum < target) {
                left++;
            } else if (pairSum > target) {
                right--;
            } else {
                if (nums[left] == nums[right]) {
                    long long length = right - left + 1;
                    count += length * (length - 1) / 2;
                    break;
                }
                int leftValue = nums[left];
                int rightValue = nums[right];
                long long leftCount = 0;
                long long rightCount = 0;
                while (left <= right && nums[left] == leftValue) {
                    leftCount++;
                    left++;
                }
                while (right >= left && nums[right] == rightValue) {
                    rightCount++;
                    right--;
                }
                count += leftCount * rightCount;
            }
        }
    }
    return count;
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
    sort(nums.begin(), nums.end());
    int n = (int)nums.size();
    long long count = 0;
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        int target = -nums[i];
        while (left < right) {
            int pairSum = nums[left] + nums[right];
            if (pairSum < target) {
                left++;
            } else if (pairSum > target) {
                right--;
            } else {
                if (nums[left] == nums[right]) {
                    long long length = right - left + 1;
                    count += length * (length - 1) / 2;
                    break;
                }
                int leftValue = nums[left];
                int rightValue = nums[right];
                long long leftCount = 0;
                long long rightCount = 0;
                while (left <= right && nums[left] == leftValue) {
                    leftCount++;
                    left++;
                }
                while (right >= left && nums[right] == rightValue) {
                    rightCount++;
                    right--;
                }
                count += leftCount * rightCount;
            }
        }
    }
    return count;
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
        solution:{
            python:`import sys

def three_sum_sorted(nums):
    result = []
    n = len(nums)
    for i in range(n - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left = i + 1
        right = n - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1
    return result

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
        List<List<Integer>> result = new ArrayList<>();
        int n = nums.length;
        for (int i = 0; i < n - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            int left = i + 1;
            int right = n - 1;
            while (left < right) {
                int total = nums[i] + nums[left] + nums[right];
                if (total == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    left++;
                    right--;
                    while (left < right && nums[left] == nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] == nums[right + 1]) {
                        right--;
                    }
                } else if (total < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
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
#include <stdbool.h>

bool printThreeSumSorted(int* nums, int n) {
    bool printed = false;
    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total == 0) {
                printf("%d %d %d\\n", nums[i], nums[left], nums[right]);
                printed = true;
                left++;
                right--;
                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right + 1]) {
                    right--;
                }
            } else if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return printed;
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
    if (!printThreeSumSorted(nums, n)) {
        printf("None\\n");
    }
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> threeSumSorted(vector<int>& nums) {
    vector<vector<int>> result;
    int n = (int)nums.size();
    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total == 0) {
                result.push_back({nums[i], nums[left], nums[right]});
                left++;
                right--;
                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right + 1]) {
                    right--;
                }
            } else if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
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
        solution:{
            python:`import sys

def has_triplet_sum(nums, target):
    nums.sort()
    n = len(nums)
    for i in range(n - 2):
        left = i + 1
        right = n - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == target:
                return True
            if total < target:
                left += 1
            else:
                right -= 1
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
        Arrays.sort(nums);
        int n = nums.length;
        for (int i = 0; i < n - 2; i++) {
            int left = i + 1;
            int right = n - 1;
            while (left < right) {
                int total = nums[i] + nums[left] + nums[right];
                if (total == target) {
                    return true;
                }
                if (total < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
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

int compareIntegers(const void* a, const void* b) {
    int first = *(const int*)a;
    int second = *(const int*)b;
    return (first > second) - (first < second);
}

bool hasTripletSum(int* nums, int n, int target) {
    qsort(nums, n, sizeof(int), compareIntegers);
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total == target) {
                return true;
            }
            if (total < target) {
                left++;
            } else {
                right--;
            }
        }
    }
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
    sort(nums.begin(), nums.end());
    int n = (int)nums.size();
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total == target) {
                return true;
            }
            if (total < target) {
                left++;
            } else {
                right--;
            }
        }
    }
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
    {
        id:"three-sum-medium-1",
        solution:{
            python:`import sys

def unique_three_sum(nums):
    nums.sort()
    result = []
    n = len(nums)
    for i in range(n - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left = i + 1
        right = n - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1
    return result

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
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        int n = nums.length;
        for (int i = 0; i < n - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            int left = i + 1;
            int right = n - 1;
            while (left < right) {
                int total = nums[i] + nums[left] + nums[right];
                if (total == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    left++;
                    right--;
                    while (left < right && nums[left] == nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] == nums[right + 1]) {
                        right--;
                    }
                } else if (total < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
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
#include <stdbool.h>

int compareIntegers(const void* a, const void* b) {
    int first = *(const int*)a;
    int second = *(const int*)b;
    return (first > second) - (first < second);
}

bool printUniqueThreeSum(int* nums, int n) {
    qsort(nums, n, sizeof(int), compareIntegers);
    bool printed = false;
    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total == 0) {
                printf("%d %d %d\\n", nums[i], nums[left], nums[right]);
                printed = true;
                left++;
                right--;
                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right + 1]) {
                    right--;
                }
            } else if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return printed;
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
    if (!printUniqueThreeSum(nums, n)) {
        printf("None\\n");
    }
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> uniqueThreeSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> result;
    int n = (int)nums.size();
    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total == 0) {
                result.push_back({nums[i], nums[left], nums[right]});
                left++;
                right--;
                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right + 1]) {
                    right--;
                }
            } else if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
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
        solution:{
            python:`import sys

def three_sum_closest(nums, target):
    nums.sort()
    best = nums[0] + nums[1] + nums[2]
    n = len(nums)
    for i in range(n - 2):
        left = i + 1
        right = n - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if abs(total - target) < abs(best - target) or (abs(total - target) == abs(best - target) and total < best):
                best = total
            if total < target:
                left += 1
            elif total > target:
                right -= 1
            else:
                return target
    return best

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
        Arrays.sort(nums);
        int n = nums.length;
        int best = nums[0] + nums[1] + nums[2];
        for (int i = 0; i < n - 2; i++) {
            int left = i + 1;
            int right = n - 1;
            while (left < right) {
                int total = nums[i] + nums[left] + nums[right];
                int currentDiff = Math.abs(total - target);
                int bestDiff = Math.abs(best - target);
                if (currentDiff < bestDiff || (currentDiff == bestDiff && total < best)) {
                    best = total;
                }
                if (total < target) {
                    left++;
                } else if (total > target) {
                    right--;
                } else {
                    return target;
                }
            }
        }
        return best;
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
#include <limits.h>

int compareIntegers(const void* a, const void* b) {
    int first = *(const int*)a;
    int second = *(const int*)b;
    return (first > second) - (first < second);
}

int absoluteValue(int value) {
    return value < 0 ? -value : value;
}

int threeSumClosest(int* nums, int n, int target) {
    qsort(nums, n, sizeof(int), compareIntegers);
    int best = nums[0] + nums[1] + nums[2];
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            int currentDiff = absoluteValue(total - target);
            int bestDiff = absoluteValue(best - target);
            if (currentDiff < bestDiff || (currentDiff == bestDiff && total < best)) {
                best = total;
            }
            if (total < target) {
                left++;
            } else if (total > target) {
                right--;
            } else {
                return target;
            }
        }
    }
    return best;
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
    sort(nums.begin(), nums.end());
    int n = (int)nums.size();
    int best = nums[0] + nums[1] + nums[2];
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            int currentDiff = abs(total - target);
            int bestDiff = abs(best - target);
            if (currentDiff < bestDiff || (currentDiff == bestDiff && total < best)) {
                best = total;
            }
            if (total < target) {
                left++;
            } else if (total > target) {
                right--;
            } else {
                return target;
            }
        }
    }
    return best;
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
        solution:{
            python:`import sys

def count_triplets_smaller(nums, target):
    nums.sort()
    n = len(nums)
    count = 0
    for i in range(n - 2):
        left = i + 1
        right = n - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total < target:
                count += right - left
                left += 1
            else:
                right -= 1
    return count

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
        Arrays.sort(nums);
        int n = nums.length;
        long count = 0;
        for (int i = 0; i < n - 2; i++) {
            int left = i + 1;
            int right = n - 1;
            while (left < right) {
                int total = nums[i] + nums[left] + nums[right];
                if (total < target) {
                    count += right - left;
                    left++;
                } else {
                    right--;
                }
            }
        }
        return count;
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

int compareIntegers(const void* a, const void* b) {
    int first = *(const int*)a;
    int second = *(const int*)b;
    return (first > second) - (first < second);
}

long long countTripletsSmaller(int* nums, int n, int target) {
    qsort(nums, n, sizeof(int), compareIntegers);
    long long count = 0;
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total < target) {
                count += right - left;
                left++;
            } else {
                right--;
            }
        }
    }
    return count;
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
    sort(nums.begin(), nums.end());
    int n = (int)nums.size();
    long long count = 0;
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total < target) {
                count += right - left;
                left++;
            } else {
                right--;
            }
        }
    }
    return count;
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
        solution:{
            python:`import sys

MOD = 1000000007

def three_sum_multiplicity(nums, target):
    nums.sort()
    n = len(nums)
    answer = 0
    for i in range(n - 2):
        left = i + 1
        right = n - 1
        remaining = target - nums[i]
        while left < right:
            pair_sum = nums[left] + nums[right]
            if pair_sum < remaining:
                left += 1
            elif pair_sum > remaining:
                right -= 1
            else:
                if nums[left] == nums[right]:
                    length = right - left + 1
                    answer += length * (length - 1) // 2
                    break
                left_value = nums[left]
                right_value = nums[right]
                left_count = 0
                right_count = 0
                while left <= right and nums[left] == left_value:
                    left_count += 1
                    left += 1
                while right >= left and nums[right] == right_value:
                    right_count += 1
                    right -= 1
                answer += left_count * right_count
                answer %= MOD
    return answer % MOD

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
    private static final long MOD = 1000000007L;

    public static int threeSumMultiplicity(int[] nums, int target) {
        Arrays.sort(nums);
        int n = nums.length;
        long answer = 0;
        for (int i = 0; i < n - 2; i++) {
            int left = i + 1;
            int right = n - 1;
            int remaining = target - nums[i];
            while (left < right) {
                int pairSum = nums[left] + nums[right];
                if (pairSum < remaining) {
                    left++;
                } else if (pairSum > remaining) {
                    right--;
                } else {
                    if (nums[left] == nums[right]) {
                        long length = right - left + 1L;
                        answer += length * (length - 1) / 2;
                        answer %= MOD;
                        break;
                    }
                    int leftValue = nums[left];
                    int rightValue = nums[right];
                    long leftCount = 0;
                    long rightCount = 0;
                    while (left <= right && nums[left] == leftValue) {
                        leftCount++;
                        left++;
                    }
                    while (right >= left && nums[right] == rightValue) {
                        rightCount++;
                        right--;
                    }
                    answer = (answer + leftCount * rightCount) % MOD;
                }
            }
        }
        return (int)(answer % MOD);
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

const long long MOD = 1000000007LL;

int compareIntegers(const void* a, const void* b) {
    int first = *(const int*)a;
    int second = *(const int*)b;
    return (first > second) - (first < second);
}

int threeSumMultiplicity(int* nums, int n, int target) {
    qsort(nums, n, sizeof(int), compareIntegers);
    long long answer = 0;
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        int remaining = target - nums[i];
        while (left < right) {
            int pairSum = nums[left] + nums[right];
            if (pairSum < remaining) {
                left++;
            } else if (pairSum > remaining) {
                right--;
            } else {
                if (nums[left] == nums[right]) {
                    long long length = right - left + 1;
                    answer = (answer + length * (length - 1) / 2) % MOD;
                    break;
                }
                int leftValue = nums[left];
                int rightValue = nums[right];
                long long leftCount = 0;
                long long rightCount = 0;
                while (left <= right && nums[left] == leftValue) {
                    leftCount++;
                    left++;
                }
                while (right >= left && nums[right] == rightValue) {
                    rightCount++;
                    right--;
                }
                answer = (answer + leftCount * rightCount) % MOD;
            }
        }
    }
    return (int)(answer % MOD);
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

const long long MOD = 1000000007LL;

int threeSumMultiplicity(vector<int>& nums, int target) {
    sort(nums.begin(), nums.end());
    int n = (int)nums.size();
    long long answer = 0;
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        int remaining = target - nums[i];
        while (left < right) {
            int pairSum = nums[left] + nums[right];
            if (pairSum < remaining) {
                left++;
            } else if (pairSum > remaining) {
                right--;
            } else {
                if (nums[left] == nums[right]) {
                    long long length = right - left + 1;
                    answer = (answer + length * (length - 1) / 2) % MOD;
                    break;
                }
                int leftValue = nums[left];
                int rightValue = nums[right];
                long long leftCount = 0;
                long long rightCount = 0;
                while (left <= right && nums[left] == leftValue) {
                    leftCount++;
                    left++;
                }
                while (right >= left && nums[right] == rightValue) {
                    rightCount++;
                    right--;
                }
                answer = (answer + leftCount * rightCount) % MOD;
            }
        }
    }
    return (int)(answer % MOD);
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
        solution:{
            python:`import sys

def count_at_most(nums, limit):
    nums.sort()
    n = len(nums)
    count = 0
    for i in range(n - 2):
        left = i + 1
        right = n - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total <= limit:
                count += right - left
                left += 1
            else:
                right -= 1
    return count

def count_triplets_in_range(nums, low, high):
    return count_at_most(nums[:], high) - count_at_most(nums[:], low - 1)

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
    private static long countAtMost(int[] sortedNums, int limit) {
        int n = sortedNums.length;
        long count = 0;
        for (int i = 0; i < n - 2; i++) {
            int left = i + 1;
            int right = n - 1;
            while (left < right) {
                int total = sortedNums[i] + sortedNums[left] + sortedNums[right];
                if (total <= limit) {
                    count += right - left;
                    left++;
                } else {
                    right--;
                }
            }
        }
        return count;
    }

    public static long countTripletsInRange(int[] nums, int low, int high) {
        Arrays.sort(nums);
        return countAtMost(nums, high) - countAtMost(nums, low - 1);
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

int compareIntegers(const void* a, const void* b) {
    int first = *(const int*)a;
    int second = *(const int*)b;
    return (first > second) - (first < second);
}

long long countAtMost(int* nums, int n, int limit) {
    long long count = 0;
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total <= limit) {
                count += right - left;
                left++;
            } else {
                right--;
            }
        }
    }
    return count;
}

long long countTripletsInRange(int* nums, int n, int low, int high) {
    qsort(nums, n, sizeof(int), compareIntegers);
    return countAtMost(nums, n, high) - countAtMost(nums, n, low - 1);
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

long long countAtMost(const vector<int>& nums, int limit) {
    int n = (int)nums.size();
    long long count = 0;
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total <= limit) {
                count += right - left;
                left++;
            } else {
                right--;
            }
        }
    }
    return count;
}

long long countTripletsInRange(vector<int>& nums, int low, int high) {
    sort(nums.begin(), nums.end());
    return countAtMost(nums, high) - countAtMost(nums, low - 1);
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
    {
        id:"three-sum-hard-1",
        solution:{
            python:`import sys

def four_sum(nums, target):
    nums.sort()
    n = len(nums)
    result = []
    for i in range(n - 3):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        for j in range(i + 1, n - 2):
            if j > i + 1 and nums[j] == nums[j - 1]:
                continue
            left = j + 1
            right = n - 1
            while left < right:
                total = nums[i] + nums[j] + nums[left] + nums[right]
                if total == target:
                    result.append([nums[i], nums[j], nums[left], nums[right]])
                    left += 1
                    right -= 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1
                elif total < target:
                    left += 1
                else:
                    right -= 1
    return result

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
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        int n = nums.length;
        for (int i = 0; i < n - 3; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            for (int j = i + 1; j < n - 2; j++) {
                if (j > i + 1 && nums[j] == nums[j - 1]) {
                    continue;
                }
                int left = j + 1;
                int right = n - 1;
                while (left < right) {
                    long total = (long)nums[i] + nums[j] + nums[left] + nums[right];
                    if (total == target) {
                        result.add(Arrays.asList(nums[i], nums[j], nums[left], nums[right]));
                        left++;
                        right--;
                        while (left < right && nums[left] == nums[left - 1]) {
                            left++;
                        }
                        while (left < right && nums[right] == nums[right + 1]) {
                            right--;
                        }
                    } else if (total < target) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }
        return result;
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
#include <stdbool.h>

int compareIntegers(const void* a, const void* b) {
    int first = *(const int*)a;
    int second = *(const int*)b;
    return (first > second) - (first < second);
}

bool printFourSum(int* nums, int n, int target) {
    qsort(nums, n, sizeof(int), compareIntegers);
    bool printed = false;
    for (int i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (int j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }
            int left = j + 1;
            int right = n - 1;
            while (left < right) {
                long long total = (long long)nums[i] + nums[j] + nums[left] + nums[right];
                if (total == target) {
                    printf("%d %d %d %d\\n", nums[i], nums[j], nums[left], nums[right]);
                    printed = true;
                    left++;
                    right--;
                    while (left < right && nums[left] == nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] == nums[right + 1]) {
                        right--;
                    }
                } else if (total < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return printed;
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
    if (!printFourSum(nums, n, target)) {
        printf("None\\n");
    }
    free(nums);
    return 0;
}`,
            cpp:`#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> fourSum(vector<int>& nums, int target) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> result;
    int n = (int)nums.size();
    for (int i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (int j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }
            int left = j + 1;
            int right = n - 1;
            while (left < right) {
                long long total = (long long)nums[i] + nums[j] + nums[left] + nums[right];
                if (total == target) {
                    result.push_back({nums[i], nums[j], nums[left], nums[right]});
                    left++;
                    right--;
                    while (left < right && nums[left] == nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] == nums[right + 1]) {
                        right--;
                    }
                } else if (total < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
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
        solution:{
            python:`import sys
from collections import Counter

def count_three_array_zero_sum(a_values, b_values, c_values):
    pair_sums = Counter()
    for a_value in a_values:
        for b_value in b_values:
            pair_sums[a_value + b_value] += 1
    count = 0
    for c_value in c_values:
        count += pair_sums[-c_value]
    return count

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
        Map<Integer, Integer> pairCounts = new HashMap<>();
        for (int aValue : aValues) {
            for (int bValue : bValues) {
                int sum = aValue + bValue;
                pairCounts.put(sum, pairCounts.getOrDefault(sum, 0) + 1);
            }
        }
        long count = 0;
        for (int cValue : cValues) {
            count += pairCounts.getOrDefault(-cValue, 0);
        }
        return count;
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

int compareLongLong(const void* a, const void* b) {
    long long first = *(const long long*)a;
    long long second = *(const long long*)b;
    return (first > second) - (first < second);
}

long long lowerBound(long long* values, long long size, long long target) {
    long long left = 0;
    long long right = size;
    while (left < right) {
        long long mid = left + (right - left) / 2;
        if (values[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

long long upperBound(long long* values, long long size, long long target) {
    long long left = 0;
    long long right = size;
    while (left < right) {
        long long mid = left + (right - left) / 2;
        if (values[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

long long countThreeArrayZeroSum(int* aValues, int* bValues, int* cValues, int n) {
    long long pairCount = (long long)n * n;
    long long* pairSums = (long long*)malloc(pairCount * sizeof(long long));
    long long index = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            pairSums[index++] = (long long)aValues[i] + bValues[j];
        }
    }
    qsort(pairSums, pairCount, sizeof(long long), compareLongLong);
    long long answer = 0;
    for (int i = 0; i < n; i++) {
        long long target = -(long long)cValues[i];
        answer += upperBound(pairSums, pairCount, target) - lowerBound(pairSums, pairCount, target);
    }
    free(pairSums);
    return answer;
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
    unordered_map<int, int> pairCounts;
    for (int aValue : aValues) {
        for (int bValue : bValues) {
            pairCounts[aValue + bValue]++;
        }
    }
    long long count = 0;
    for (int cValue : cValues) {
        auto iterator = pairCounts.find(-cValue);
        if (iterator != pairCounts.end()) {
            count += iterator->second;
        }
    }
    return count;
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
        solution:{
            python:`import sys

def is_better(candidate, best):
    return abs(candidate) < abs(best) or (abs(candidate) == abs(best) and candidate < best)

def minimum_absolute_three_sum(nums):
    nums.sort()
    best = nums[0] + nums[1] + nums[2]
    n = len(nums)
    for i in range(n - 2):
        left = i + 1
        right = n - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if is_better(total, best):
                best = total
            if total < 0:
                left += 1
            elif total > 0:
                right -= 1
            else:
                return 0
    return best

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
    private static boolean isBetter(int candidate, int best) {
        return Math.abs(candidate) < Math.abs(best) || (Math.abs(candidate) == Math.abs(best) && candidate < best);
    }

    public static int minimumAbsoluteThreeSum(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        int best = nums[0] + nums[1] + nums[2];
        for (int i = 0; i < n - 2; i++) {
            int left = i + 1;
            int right = n - 1;
            while (left < right) {
                int total = nums[i] + nums[left] + nums[right];
                if (isBetter(total, best)) {
                    best = total;
                }
                if (total < 0) {
                    left++;
                } else if (total > 0) {
                    right--;
                } else {
                    return 0;
                }
            }
        }
        return best;
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

int compareIntegers(const void* a, const void* b) {
    int first = *(const int*)a;
    int second = *(const int*)b;
    return (first > second) - (first < second);
}

int absoluteValue(int value) {
    return value < 0 ? -value : value;
}

int isBetter(int candidate, int best) {
    int candidateAbs = absoluteValue(candidate);
    int bestAbs = absoluteValue(best);
    return candidateAbs < bestAbs || (candidateAbs == bestAbs && candidate < best);
}

int minimumAbsoluteThreeSum(int* nums, int n) {
    qsort(nums, n, sizeof(int), compareIntegers);
    int best = nums[0] + nums[1] + nums[2];
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (isBetter(total, best)) {
                best = total;
            }
            if (total < 0) {
                left++;
            } else if (total > 0) {
                right--;
            } else {
                return 0;
            }
        }
    }
    return best;
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

bool isBetter(int candidate, int best) {
    return abs(candidate) < abs(best) || (abs(candidate) == abs(best) && candidate < best);
}

int minimumAbsoluteThreeSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    int n = (int)nums.size();
    int best = nums[0] + nums[1] + nums[2];
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (isBetter(total, best)) {
                best = total;
            }
            if (total < 0) {
                left++;
            } else if (total > 0) {
                right--;
            } else {
                return 0;
            }
        }
    }
    return best;
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
        solution:{
            python:`import sys

def count_unique_value_triplets(nums, target):
    nums.sort()
    n = len(nums)
    count = 0
    for i in range(n - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left = i + 1
        right = n - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == target:
                count += 1
                left += 1
                right -= 1
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1
            elif total < target:
                left += 1
            else:
                right -= 1
    return count

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
        Arrays.sort(nums);
        int n = nums.length;
        int count = 0;
        for (int i = 0; i < n - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            int left = i + 1;
            int right = n - 1;
            while (left < right) {
                int total = nums[i] + nums[left] + nums[right];
                if (total == target) {
                    count++;
                    left++;
                    right--;
                    while (left < right && nums[left] == nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] == nums[right + 1]) {
                        right--;
                    }
                } else if (total < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return count;
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

int compareIntegers(const void* a, const void* b) {
    int first = *(const int*)a;
    int second = *(const int*)b;
    return (first > second) - (first < second);
}

int countUniqueValueTriplets(int* nums, int n, int target) {
    qsort(nums, n, sizeof(int), compareIntegers);
    int count = 0;
    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total == target) {
                count++;
                left++;
                right--;
                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right + 1]) {
                    right--;
                }
            } else if (total < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return count;
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
    sort(nums.begin(), nums.end());
    int n = (int)nums.size();
    int count = 0;
    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total == target) {
                count++;
                left++;
                right--;
                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right + 1]) {
                    right--;
                }
            } else if (total < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return count;
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
        solution:{
            python:`import sys

def has_triplet_for_target(sorted_nums, target):
    n = len(sorted_nums)
    for i in range(n - 2):
        left = i + 1
        right = n - 1
        while left < right:
            total = sorted_nums[i] + sorted_nums[left] + sorted_nums[right]
            if total == target:
                return True
            if total < target:
                left += 1
            else:
                right -= 1
    return False

def answer_three_sum_queries(nums, targets):
    nums.sort()
    return [has_triplet_for_target(nums, target) for target in targets]

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
    private static boolean hasTripletForTarget(int[] sortedNums, int target) {
        int n = sortedNums.length;
        for (int i = 0; i < n - 2; i++) {
            int left = i + 1;
            int right = n - 1;
            while (left < right) {
                int total = sortedNums[i] + sortedNums[left] + sortedNums[right];
                if (total == target) {
                    return true;
                }
                if (total < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return false;
    }

    public static boolean[] answerThreeSumQueries(int[] nums, int[] targets) {
        Arrays.sort(nums);
        boolean[] answer = new boolean[targets.length];
        for (int i = 0; i < targets.length; i++) {
            answer[i] = hasTripletForTarget(nums, targets[i]);
        }
        return answer;
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

int compareIntegers(const void* a, const void* b) {
    int first = *(const int*)a;
    int second = *(const int*)b;
    return (first > second) - (first < second);
}

bool hasTripletForTarget(int* nums, int n, int target) {
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total == target) {
                return true;
            }
            if (total < target) {
                left++;
            } else {
                right--;
            }
        }
    }
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
    qsort(nums, n, sizeof(int), compareIntegers);
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

bool hasTripletForTarget(const vector<int>& nums, int target) {
    int n = (int)nums.size();
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total == target) {
                return true;
            }
            if (total < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return false;
}

vector<bool> answerThreeSumQueries(vector<int>& nums, vector<int>& targets) {
    sort(nums.begin(), nums.end());
    vector<bool> answer;
    for (int target : targets) {
        answer.push_back(hasTripletForTarget(nums, target));
    }
    return answer;
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

export default solutions;
