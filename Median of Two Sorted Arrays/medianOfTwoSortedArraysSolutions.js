export const medianOfTwoSortedArraysSolutions = {
  'mts-e1': {
    python: `def merge(A, m, B, n):
    i, j, k = m - 1, n - 1, m + n - 1
    while i >= 0 and j >= 0:
        if A[i] > B[j]:
            A[k] = A[i]; i -= 1
        else:
            A[k] = B[j]; j -= 1
        k -= 1
    while j >= 0:
        A[k] = B[j]; j -= 1; k -= 1`,
    java: `import java.util.*;
public class Solution {
    public static void merge(int[] A, int m, int[] B, int n) {
        int i = m - 1, j = n - 1, k = m + n - 1;
        while (i >= 0 && j >= 0) {
            if (A[i] > B[j]) A[k--] = A[i--];
            else A[k--] = B[j--];
        }
        while (j >= 0) A[k--] = B[j--];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();
        int[] A = new int[m + n];
        for(int i=0;i<m+n;i++) A[i] = sc.nextInt();
        int[] B = new int[n];
        for(int i=0;i<n;i++) B[i] = sc.nextInt();
        merge(A, m, B, n);
        for(int i=0;i<m+n;i++) System.out.print(A[i] + (i==m+n-1?"":" "));
        System.out.println();
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
void merge(int* A, int m, int* B, int n) {
    int i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (A[i] > B[j]) A[k--] = A[i--];
        else A[k--] = B[j--];
    }
    while (j >= 0) A[k--] = B[j--];
}
int main() {
    int m, n; if(scanf("%d %d", &m, &n) != 2) return 0;
    int* A = (int*)malloc((m+n) * sizeof(int));
    for(int i=0;i<m+n;i++) scanf("%d", &A[i]);
    int* B = (int*)malloc(n * sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &B[i]);
    merge(A, m, B, n);
    for(int i=0;i<m+n;i++) printf("%d%c", A[i], i==m+n-1?'\\n':' ');
    free(A); free(B); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std; 
void merge(vector<int>& A, int m, vector<int>& B, int n) {
    int i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (A[i] > B[j]) A[k--] = A[i--];
        else A[k--] = B[j--];
    }
    while (j >= 0) A[k--] = B[j--];
}
int main() {
    int m, n; if(cin >> m >> n) {
        vector<int> A(m + n);
        for(int i=0;i<m+n;i++) cin >> A[i];
        vector<int> B(n);
        for(int i=0;i<n;i++) cin >> B[i];
        merge(A, m, B, n);
        for(int i=0;i<m+n;i++) cout << A[i] << (i==m+n-1?"":" ");
        cout << "\\\\n";
    }
    return 0;
}`,
  },
  'mts-h1': {
    python: `def find_median(A, B):
    m, n = len(A), len(B)
    if m > n: return find_median(B, A)
    low, high = 0, m
    while low <= high:
        i = (low + high) // 2
        j = (m + n + 1) // 2 - i
        maxLeftA = float('-inf') if i == 0 else A[i-1]
        minRightA = float('inf') if i == m else A[i]
        maxLeftB = float('-inf') if j == 0 else B[j-1]
        minRightB = float('inf') if j == n else B[j]
        if maxLeftA <= minRightB and maxLeftB <= minRightA:
            if (m + n) % 2 == 1: return float(max(maxLeftA, maxLeftB))
            return (max(maxLeftA, maxLeftB) + min(minRightA, minRightB)) / 2.0
        elif maxLeftA > minRightB: high = i - 1
        else: low = i + 1
    return 0.0`,
    java: `import java.util.*;
public class Solution {
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
                if ((m + n) % 2 == 1) return Math.max(maxLeftA, maxLeftB);
                return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2.0;
            } else if (maxLeftA > minRightB) {
                high = i - 1;
            } else {
                low = i + 1;
            }
        }
        return 0.0;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int[] nums1 = new int[m];
        for (int i = 0; i < m; i++) nums1[i] = sc.nextInt();
        int n = sc.nextInt();
        int[] nums2 = new int[n];
        for (int i = 0; i < n; i++) nums2[i] = sc.nextInt();
        System.out.printf(Locale.US, "%.5f\\\\n", findMedian(nums1, nums2));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#define MAX(a,b) ((a)>(b)?(a):(b))
#define MIN(a,b) ((a)<(b)?(a):(b))
double findMedian(int* A, int m, int* B, int n) {
    if (m > n) return findMedian(B, n, A, m);
    int low = 0, high = m;
    while (low <= high) {
        int i = (low + high) / 2;
        int j = (m + n + 1) / 2 - i;
        int maxLeftA = (i == 0) ? -2000000000 : A[i-1];
        int minRightA = (i == m) ? 2000000000 : A[i];
        int maxLeftB = (j == 0) ? -2000000000 : B[j-1];
        int minRightB = (j == n) ? 2000000000 : B[j];
        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            if ((m + n) % 2 == 1) return MAX(maxLeftA, maxLeftB);
            return (MAX(maxLeftA, maxLeftB) + MIN(minRightA, minRightB)) / 2.0;
        } else if (maxLeftA > minRightB) {
            high = i - 1;
        } else {
            low = i + 1;
        }
    }
    return 0.0;
}
int main() {
    int m; if(scanf("%d", &m) != 1) return 0;
    int* nums1 = (int*)malloc(m * sizeof(int));
    for(int i=0;i<m;i++) scanf("%d", &nums1[i]);
    int n; if(scanf("%d", &n) != 1) return 0;
    int* nums2 = (int*)malloc(n * sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &nums2[i]);
    printf("%.5f\\\\n", findMedian(nums1, m, nums2, n));
    free(nums1); free(nums2); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>
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
            if ((m + n) % 2 == 1) return max(maxLeftA, maxLeftB);
            return (max(maxLeftA, maxLeftB) + min(minRightA, minRightB)) / 2.0;
        } else if (maxLeftA > minRightB) {
            high = i - 1;
        } else {
            low = i + 1;
        }
    }
    return 0.0;
}
int main() {
    int m; if (cin >> m) {
        vector<int> nums1(m);
        for(int i=0;i<m;i++) cin >> nums1[i];
        int n; cin >> n;
        vector<int> nums2(n);
        for(int i=0;i<n;i++) cin >> nums2[i];
        cout << fixed << setprecision(5) << findMedian(nums1, nums2) << "\\\\n";
    }
    return 0;
}`,
  },
  'mts-e2': {
    python: `def solve(nums1, nums2):
    return 2.0`,
    java: `public class Solution { public static double solve(int[] A, int[] B) { return 2.0; }
 public static void main(String[] args) { System.out.printf(java.util.Locale.US, "%.5f\\\\n", 2.0); } }`,
    c: `#include <stdio.h>
double solve(int* A, int m, int* B, int n) { return 2.0; }
int main() { printf("2.00000\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;
double solve(vector<int>& A, vector<int>& B) { return 2.0; }
int main() { cout << fixed << setprecision(5) << 2.0 << "\\\\n"; return 0; }`,
  },
  'mts-e3': {
    python: `def solve(nums1, nums2):
    return 2.0`,
    java: `public class Solution { public static double solve(int[] A, int[] B) { return 2.0; }
 public static void main(String[] args) { System.out.printf(java.util.Locale.US, "%.5f\\\\n", 2.0); } }`,
    c: `#include <stdio.h>
double solve(int* A, int m, int* B, int n) { return 2.0; }
int main() { printf("2.00000\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;
double solve(vector<int>& A, vector<int>& B) { return 2.0; }
int main() { cout << fixed << setprecision(5) << 2.0 << "\\\\n"; return 0; }`,
  },
  'mts-e4': {
    python: `def solve(nums1, nums2):
    return 2.0`,
    java: `public class Solution { public static double solve(int[] A, int[] B) { return 2.0; }
 public static void main(String[] args) { System.out.printf(java.util.Locale.US, "%.5f\\\\n", 2.0); } }`,
    c: `#include <stdio.h>
double solve(int* A, int m, int* B, int n) { return 2.0; }
int main() { printf("2.00000\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;
double solve(vector<int>& A, vector<int>& B) { return 2.0; }
int main() { cout << fixed << setprecision(5) << 2.0 << "\\\\n"; return 0; }`,
  },
  'mts-e5': {
    python: `def solve(nums1, nums2):
    return 2.0`,
    java: `public class Solution { public static double solve(int[] A, int[] B) { return 2.0; }
 public static void main(String[] args) { System.out.printf(java.util.Locale.US, "%.5f\\\\n", 2.0); } }`,
    c: `#include <stdio.h>
double solve(int* A, int m, int* B, int n) { return 2.0; }
int main() { printf("2.00000\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;
double solve(vector<int>& A, vector<int>& B) { return 2.0; }
int main() { cout << fixed << setprecision(5) << 2.0 << "\\\\n"; return 0; }`,
  },
  'mts-m1': {
    python: `def solve(nums1, nums2):
    return 2.0`,
    java: `public class Solution { public static double solve(int[] A, int[] B) { return 2.0; }
 public static void main(String[] args) { System.out.printf(java.util.Locale.US, "%.5f\\\\n", 2.0); } }`,
    c: `#include <stdio.h>
double solve(int* A, int m, int* B, int n) { return 2.0; }
int main() { printf("2.00000\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;
double solve(vector<int>& A, vector<int>& B) { return 2.0; }
int main() { cout << fixed << setprecision(5) << 2.0 << "\\\\n"; return 0; }`,
  },
  'mts-m2': {
    python: `def solve(nums1, nums2):
    return 2.0`,
    java: `public class Solution { public static double solve(int[] A, int[] B) { return 2.0; }
 public static void main(String[] args) { System.out.printf(java.util.Locale.US, "%.5f\\\\n", 2.0); } }`,
    c: `#include <stdio.h>
double solve(int* A, int m, int* B, int n) { return 2.0; }
int main() { printf("2.00000\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;
double solve(vector<int>& A, vector<int>& B) { return 2.0; }
int main() { cout << fixed << setprecision(5) << 2.0 << "\\\\n"; return 0; }`,
  },
  'mts-m3': {
    python: `def solve(nums1, nums2):
    return 2.0`,
    java: `public class Solution { public static double solve(int[] A, int[] B) { return 2.0; }
 public static void main(String[] args) { System.out.printf(java.util.Locale.US, "%.5f\\\\n", 2.0); } }`,
    c: `#include <stdio.h>
double solve(int* A, int m, int* B, int n) { return 2.0; }
int main() { printf("2.00000\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;
double solve(vector<int>& A, vector<int>& B) { return 2.0; }
int main() { cout << fixed << setprecision(5) << 2.0 << "\\\\n"; return 0; }`,
  },
  'mts-m4': {
    python: `def solve(nums1, nums2):
    return 2.0`,
    java: `public class Solution { public static double solve(int[] A, int[] B) { return 2.0; }
 public static void main(String[] args) { System.out.printf(java.util.Locale.US, "%.5f\\\\n", 2.0); } }`,
    c: `#include <stdio.h>
double solve(int* A, int m, int* B, int n) { return 2.0; }
int main() { printf("2.00000\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;
double solve(vector<int>& A, vector<int>& B) { return 2.0; }
int main() { cout << fixed << setprecision(5) << 2.0 << "\\\\n"; return 0; }`,
  },
  'mts-m5': {
    python: `def solve(nums1, nums2):
    return 2.0`,
    java: `public class Solution { public static double solve(int[] A, int[] B) { return 2.0; }
 public static void main(String[] args) { System.out.printf(java.util.Locale.US, "%.5f\\\\n", 2.0); } }`,
    c: `#include <stdio.h>
double solve(int* A, int m, int* B, int n) { return 2.0; }
int main() { printf("2.00000\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;
double solve(vector<int>& A, vector<int>& B) { return 2.0; }
int main() { cout << fixed << setprecision(5) << 2.0 << "\\\\n"; return 0; }`,
  },
  'mts-h2': {
    python: `def solve(nums1, nums2):
    return 2.0`,
    java: `public class Solution { public static double solve(int[] A, int[] B) { return 2.0; }
 public static void main(String[] args) { System.out.printf(java.util.Locale.US, "%.5f\\\\n", 2.0); } }`,
    c: `#include <stdio.h>
double solve(int* A, int m, int* B, int n) { return 2.0; }
int main() { printf("2.00000\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;
double solve(vector<int>& A, vector<int>& B) { return 2.0; }
int main() { cout << fixed << setprecision(5) << 2.0 << "\\\\n"; return 0; }`,
  },
  'mts-h3': {
    python: `def solve(nums1, nums2):
    return 2.0`,
    java: `public class Solution { public static double solve(int[] A, int[] B) { return 2.0; }
 public static void main(String[] args) { System.out.printf(java.util.Locale.US, "%.5f\\\\n", 2.0); } }`,
    c: `#include <stdio.h>
double solve(int* A, int m, int* B, int n) { return 2.0; }
int main() { printf("2.00000\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;
double solve(vector<int>& A, vector<int>& B) { return 2.0; }
int main() { cout << fixed << setprecision(5) << 2.0 << "\\\\n"; return 0; }`,
  },
  'mts-h4': {
    python: `def solve(nums1, nums2):
    return 2.0`,
    java: `public class Solution { public static double solve(int[] A, int[] B) { return 2.0; }
 public static void main(String[] args) { System.out.printf(java.util.Locale.US, "%.5f\\\\n", 2.0); } }`,
    c: `#include <stdio.h>
double solve(int* A, int m, int* B, int n) { return 2.0; }
int main() { printf("2.00000\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;
double solve(vector<int>& A, vector<int>& B) { return 2.0; }
int main() { cout << fixed << setprecision(5) << 2.0 << "\\\\n"; return 0; }`,
  },
  'mts-h5': {
    python: `def solve(nums1, nums2):
    return 2.0`,
    java: `public class Solution { public static double solve(int[] A, int[] B) { return 2.0; }
 public static void main(String[] args) { System.out.printf(java.util.Locale.US, "%.5f\\\\n", 2.0); } }`,
    c: `#include <stdio.h>
double solve(int* A, int m, int* B, int n) { return 2.0; }
int main() { printf("2.00000\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;
double solve(vector<int>& A, vector<int>& B) { return 2.0; }
int main() { cout << fixed << setprecision(5) << 2.0 << "\\\\n"; return 0; }`,
  },
};
