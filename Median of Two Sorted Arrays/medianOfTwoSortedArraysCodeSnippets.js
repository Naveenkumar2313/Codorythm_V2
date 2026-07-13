export const medianOfTwoSortedArraysCodeSnippets = {
    c: `#include <stdio.h>
#define MAX(a,b) ((a)>(b)?(a):(b))
#define MIN(a,b) ((a)<(b)?(a):(b))

double findMedian(int A[], int m, int B[], int n) {
    if (m > n) return findMedian(B, n, A, m);
    int low = 0, high = m;
    while (low <= high) {
        int i = (low + high) / 2;
        int j = (m + n + 1) / 2 - i;
        
        int maxLeftA = (i == 0) ? -2e9 : A[i-1];
        int minRightA = (i == m) ? 2e9 : A[i];
        int maxLeftB = (j == 0) ? -2e9 : B[j-1];
        int minRightB = (j == n) ? 2e9 : B[j];
        
        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            if ((m + n) % 2 == 1)
                return MAX(maxLeftA, maxLeftB);
            return (MAX(maxLeftA, maxLeftB) + MIN(minRightA, minRightB)) / 2.0;
        } else if (maxLeftA > minRightB) {
            high = i - 1;
        } else {
            low = i + 1;
        }
    }
    return 0.0;
}
`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

double findMedian(vector<int>& A, vector<int>& B) {
    int m = A.size(), n = B.size();
    if (m > n) return findMedian(B, A);
    int low = 0, high = m;
    while (low <= high) {
        int i = (low + high) / 2;
        int j = (m + n + 1) / 2 - i;
        
        int maxLeftA = (i == 0) ? -2e9 : A[i-1];
        int minRightA = (i == m) ? 2e9 : A[i];
        int maxLeftB = (j == 0) ? -2e9 : B[j-1];
        int minRightB = (j == n) ? 2e9 : B[j];
        
        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            if ((m + n) % 2 == 1)
                return max(maxLeftA, maxLeftB);
            return (max(maxLeftA, maxLeftB) + min(minRightA, minRightB)) / 2.0;
        } else if (maxLeftA > minRightB) {
            high = i - 1;
        } else {
            low = i + 1;
        }
    }
    return 0.0;
}
`,

    python: `def find_median(A, B):
    m, n = len(A), len(B)
    if m > n:
        return find_median(B, A)
    low, high = 0, m
    while low <= high:
        i = (low + high) // 2
        j = (m + n + 1) // 2 - i
        
        maxLeftA = float('-inf') if i == 0 else A[i-1]
        minRightA = float('inf') if i == m else A[i]
        maxLeftB = float('-inf') if j == 0 else B[j-1]
        minRightB = float('inf') if j == n else B[j]
        
        if maxLeftA <= minRightB and maxLeftB <= minRightA:
            if (m + n) % 2 == 1:
                return float(max(maxLeftA, maxLeftB))
            return (max(maxLeftA, maxLeftB) + min(minRightA, minRightB)) / 2.0
        elif maxLeftA > minRightB:
            high = i - 1
        else:
            low = i + 1
    return 0.0
`,

    java: `import java.util.*;

public class MedianExample {
    public static double findMedian(int[] A, int[] B) {
        int m = A.length, n = B.length;
        if (m > n) return findMedian(B, A);
        int low = 0, high = m;
        while (low <= high) {
            int i = (low + high) / 2;
            int j = (m + n + 1) / 2 - i;
            
            int maxLeftA = (i == 0) ? Integer.MIN_VALUE : A[i-1];
            int minRightA = (i == m) ? Integer.MAX_VALUE : A[i];
            int maxLeftB = (j == 0) ? Integer.MIN_VALUE : B[j-1];
            int minRightB = (j == n) ? Integer.MAX_VALUE : B[j];
            
            if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
                if ((m + n) % 2 == 1)
                    return Math.max(maxLeftA, maxLeftB);
                return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2.0;
            } else if (maxLeftA > minRightB) {
                high = i - 1;
            } else {
                low = i + 1;
            }
        }
        return 0.0;
    }
}
`
};
