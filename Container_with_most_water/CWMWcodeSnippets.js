// src/data/codeSnippets.js
export const CWMcodeSnippets = {
    c: `#include <stdio.h>

int min(int a, int b) {
    return (a < b) ? a : b;
}

int maxArea(int height[], int size) {
    int left = 0, right = size - 1;
    int maxWater = 0;

    while (left < right) {
        int width = right - left;
        int area = min(height[left], height[right]) * width;

        if (area > maxWater)
            maxWater = area;

        if (height[left] < height[right])
            left++;
        else
            right--;
    }

    return maxWater;
}

int main() {
    int height[] = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    int size = sizeof(height) / sizeof(height[0]);

    printf("Maximum water = %d\\n", maxArea(height, size));

    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int maxWater = 0;

    while (left < right) {
        int width = right - left;
        int area = min(height[left], height[right]) * width;

        maxWater = max(maxWater, area);

        if (height[left] < height[right])
            left++;
        else
            right--;
    }

    return maxWater;
}

int main() {
    vector<int> height = {1, 8, 6, 2, 5, 4, 8, 3, 7};

    cout << "Maximum water = " << maxArea(height) << endl;

    return 0;
}
`,

    python: `def max_area(height):
    left = 0
    right = len(height) - 1
    max_water = 0

    while left < right:
        width = right - left
        area = min(height[left], height[right]) * width

        max_water = max(max_water, area)

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_water

height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

print("Maximum water =", max_area(height))
`,

    java: `import java.util.*;
public class Main {
    public static int maxArea(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int maxWater = 0;

        while (left < right) {
            int width = right - left;
            int area = Math.min(height[left], height[right]) * width;

            maxWater = Math.max(maxWater, area);

            if (height[left] < height[right])
                left++;
            else
                right--;
        }

        return maxWater;
    }

    public static void main(String[] args) {
        int[] height = {1, 8, 6, 2, 5, 4, 8, 3, 7};

        System.out.println("Maximum water = " + maxArea(height));
    }
}
`
};