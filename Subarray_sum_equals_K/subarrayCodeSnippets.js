// src/data/codeSnippets.js

export const subarraySumCodeSnippets = {
  c: `#include <stdio.h>
#include <stdlib.h>

#define SIZE 100

typedef struct {
    int key;
    int value;
} HashMap;

int subarraySum(int nums[], int n, int k) {
    HashMap map[SIZE];

    for(int i = 0; i < SIZE; i++) {
        map[i].key = 1000000;
        map[i].value = 0;
    }

    int prefixSum = 0;
    int count = 0;

    map[0].key = 0;
    map[0].value = 1;

    for(int i = 0; i < n; i++) {

        prefixSum += nums[i];

        for(int j = 0; j < SIZE; j++) {
            if(map[j].key == prefixSum - k)
                count += map[j].value;
        }

        int found = 0;

        for(int j = 0; j < SIZE; j++) {
            if(map[j].key == prefixSum) {
                map[j].value++;
                found = 1;
                break;
            }
        }

        if(!found) {
            for(int j = 0; j < SIZE; j++) {
                if(map[j].key == 1000000) {
                    map[j].key = prefixSum;
                    map[j].value = 1;
                    break;
                }
            }
        }
    }

    return count;
}

int main() {

    int nums[] = {1, 1, 1};
    int k = 2;

    int n = sizeof(nums) / sizeof(nums[0]);

    printf("Number of subarrays = %d\\n", subarraySum(nums, n, k));

    return 0;
}
`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

int subarraySum(vector<int>& nums, int k) {

    unordered_map<int,int> mp;

    mp[0] = 1;

    int prefixSum = 0;
    int count = 0;

    for(int num : nums) {

        prefixSum += num;

        if(mp.find(prefixSum - k) != mp.end())
            count += mp[prefixSum - k];

        mp[prefixSum]++;
    }

    return count;
}

int main() {

    vector<int> nums = {1, 1, 1};

    int k = 2;

    cout << "Number of subarrays = "
         << subarraySum(nums, k) << endl;

    return 0;
}
`,

  python: `def subarray_sum(nums, k):

    prefix_sum = 0
    count = 0

    prefix_count = {0: 1}

    for num in nums:

        prefix_sum += num

        if prefix_sum - k in prefix_count:
            count += prefix_count[prefix_sum - k]

        prefix_count[prefix_sum] = prefix_count.get(prefix_sum, 0) + 1

    return count


nums = [1, 1, 1]
k = 2

print("Number of subarrays =", subarray_sum(nums, k))
`,

  java: `import java.util.*;

public class Main {

    public static int subarraySum(int[] nums, int k) {

        HashMap<Integer, Integer> map = new HashMap<>();

        map.put(0, 1);

        int prefixSum = 0;
        int count = 0;

        for(int num : nums) {

            prefixSum += num;

            if(map.containsKey(prefixSum - k))
                count += map.get(prefixSum - k);

            map.put(prefixSum,
                    map.getOrDefault(prefixSum, 0) + 1);
        }

        return count;
    }

    public static void main(String[] args) {

        int[] nums = {1, 1, 1};

        int k = 2;

        System.out.println(
            "Number of subarrays = " +
            subarraySum(nums, k)
        );
    }
}
`
};