const codeSnippets = {
python:`def three_sum(nums):
    nums.sort()
    triplets = []
    n = len(nums)

    for fixed_index in range(n - 2):
        if fixed_index > 0 and nums[fixed_index] == nums[fixed_index - 1]:
            continue

        left = fixed_index + 1
        right = n - 1

        while left < right:
            current_sum = nums[fixed_index] + nums[left] + nums[right]

            if current_sum == 0:
                triplets.append([nums[fixed_index], nums[left], nums[right]])
                left += 1
                right -= 1

                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1
            elif current_sum < 0:
                left += 1
            else:
                right -= 1

    return triplets


n = int(input())
nums = list(map(int, input().split()))
answer = three_sum(nums)

if not answer:
    print("No triplets")
else:
    for triplet in answer:
        print(*triplet)`,
java:`import java.util.*;

public class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> triplets = new ArrayList<>();
        int n = nums.length;

        for (int fixedIndex = 0; fixedIndex < n - 2; fixedIndex++) {
            if (fixedIndex > 0 && nums[fixedIndex] == nums[fixedIndex - 1]) {
                continue;
            }

            int left = fixedIndex + 1;
            int right = n - 1;

            while (left < right) {
                int currentSum = nums[fixedIndex] + nums[left] + nums[right];

                if (currentSum == 0) {
                    triplets.add(Arrays.asList(nums[fixedIndex], nums[left], nums[right]));
                    left++;
                    right--;

                    while (left < right && nums[left] == nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] == nums[right + 1]) {
                        right--;
                    }
                } else if (currentSum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return triplets;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }

        List<List<Integer>> answer = threeSum(nums);
        if (answer.isEmpty()) {
            System.out.println("No triplets");
        } else {
            for (List<Integer> triplet : answer) {
                System.out.println(triplet.get(0) + " " + triplet.get(1) + " " + triplet.get(2));
            }
        }
    }
}`,
c:`#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int first;
    int second;
    int third;
} Triplet;

int compareIntegers(const void* a, const void* b) {
    int first = *(const int*)a;
    int second = *(const int*)b;
    return (first > second) - (first < second);
}

void addTriplet(Triplet** triplets, int* size, int* capacity, int a, int b, int c) {
    if (*size == *capacity) {
        *capacity *= 2;
        *triplets = (Triplet*)realloc(*triplets, (*capacity) * sizeof(Triplet));
    }
    (*triplets)[*size].first = a;
    (*triplets)[*size].second = b;
    (*triplets)[*size].third = c;
    (*size)++;
}

Triplet* threeSum(int* nums, int n, int* resultSize) {
    qsort(nums, n, sizeof(int), compareIntegers);
    int capacity = 8;
    Triplet* triplets = (Triplet*)malloc(capacity * sizeof(Triplet));
    *resultSize = 0;

    for (int fixedIndex = 0; fixedIndex < n - 2; fixedIndex++) {
        if (fixedIndex > 0 && nums[fixedIndex] == nums[fixedIndex - 1]) {
            continue;
        }

        int left = fixedIndex + 1;
        int right = n - 1;

        while (left < right) {
            int currentSum = nums[fixedIndex] + nums[left] + nums[right];

            if (currentSum == 0) {
                addTriplet(&triplets, resultSize, &capacity, nums[fixedIndex], nums[left], nums[right]);
                left++;
                right--;

                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right + 1]) {
                    right--;
                }
            } else if (currentSum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}

int main() {
    int n;
    scanf("%d", &n);

    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }

    int resultSize = 0;
    Triplet* answer = threeSum(nums, n, &resultSize);

    if (resultSize == 0) {
        printf("No triplets\\n");
    } else {
        for (int i = 0; i < resultSize; i++) {
            printf("%d %d %d\\n", answer[i].first, answer[i].second, answer[i].third);
        }
    }

    free(answer);
    free(nums);
    return 0;
}`,
cpp:`#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> threeSum(vector<int> nums) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> triplets;
    int n = (int)nums.size();

    for (int fixedIndex = 0; fixedIndex < n - 2; fixedIndex++) {
        if (fixedIndex > 0 && nums[fixedIndex] == nums[fixedIndex - 1]) {
            continue;
        }

        int left = fixedIndex + 1;
        int right = n - 1;

        while (left < right) {
            int currentSum = nums[fixedIndex] + nums[left] + nums[right];

            if (currentSum == 0) {
                triplets.push_back({nums[fixedIndex], nums[left], nums[right]});
                left++;
                right--;

                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right + 1]) {
                    right--;
                }
            } else if (currentSum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}

int main() {
    int n;
    cin >> n;

    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }

    vector<vector<int>> answer = threeSum(nums);
    if (answer.empty()) {
        cout << "No triplets\\n";
    } else {
        for (const vector<int>& triplet : answer) {
            cout << triplet[0] << " " << triplet[1] << " " << triplet[2] << "\\n";
        }
    }

    return 0;
}`
};

export default codeSnippets;
