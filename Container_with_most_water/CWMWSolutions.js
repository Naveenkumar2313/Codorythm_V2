export const containerWithMostWaterSolutions = {
  'cwm-e1': {
    python: `def max_area(height):
    left, right = 0, len(height) - 1
    ans = 0
    while left < right:
        area = min(height[left], height[right]) * (right - left)
        ans = max(ans, area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return ans
n = int(input())
height = list(map(int, input().split()))
print(max_area(height))`,
    java: `import java.util.*;
public class Main {
    public static int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int ans = 0;
        while (left < right) {
            int area = Math.min(height[left], height[right]) * (right - left);
            ans = Math.max(ans, area);
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            System.out.println(maxArea(height));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return a < b ? a : b;
}
int maxArea(int* height, int size) {
    int left = 0, right = size - 1;
    int ans = 0;
    while (left < right) {
        int area = min(height[left], height[right]) * (right - left);
        if (area > ans) ans = area;
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    printf("%d\\n", maxArea(height, n));
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int ans = 0;
    while (left < right) {
        int area = min(height[left], height[right]) * (right - left);
        ans = max(ans, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> height(n);
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        cout << maxArea(height) << "\\n";
    }
    return 0;
}`
  },  'cwm-e2': {
    python: `def max_width(height):
    n = len(height)
    ans = 0
    for i in range(n):
        for j in range(n - 1, i, -1):
            if height[j] >= height[i]:
                ans = max(ans, j - i)
                break
    return ans
n = int(input())
height = list(map(int, input().split()))
print(max_width(height))`,
    java: `import java.util.*;
public class Main {
    public static int maxWidth(int[] height) {
        int n = height.length;
        int ans = 0;
        for (int i = 0; i < n; i++) {
            for (int j = n - 1; j > i; j--) {
                if (height[j] >= height[i]) {
                    ans = Math.max(ans, j - i);
                    break;
                }
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            System.out.println(maxWidth(height));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int maxWidth(int* height, int size) {
    int ans = 0;
    for (int i = 0; i < size; i++) {
        for (int j = size - 1; j > i; j--) {
            if (height[j] >= height[i]) {
                if (j - i > ans) ans = j - i;
                break;
            }
        }
    }
    return ans;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    printf("%d\\n", maxWidth(height, n));
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int maxWidth(vector<int>& height) {
    int n = height.size();
    int ans = 0;
    for (int i = 0; i < n; i++) {
        for (int j = n - 1; j > i; j--) {
            if (height[j] >= height[i]) {
                ans = max(ans, j - i);
                break;
            }
        }
    }
    return ans;
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> height(n);
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        cout << maxWidth(height) << "\\n";
    }
    return 0;
}`
  },   'cwm-e3': {
    python: `def max_adjacent_area(height):
    ans = 0
    for i in range(len(height) - 1):
        area = min(height[i], height[i + 1])
        ans = max(ans, area)
    return ans

n = int(input())
height = list(map(int, input().split()))
print(max_adjacent_area(height))`,
    java: `import java.util.*;

public class Main {
    public static int maxAdjacentArea(int[] height) {
        int ans = 0;
        for (int i = 0; i < height.length - 1; i++) {
            int area = Math.min(height[i], height[i + 1]);
            ans = Math.max(ans, area);
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            System.out.println(maxAdjacentArea(height));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return a < b ? a : b;
}

int maxAdjacentArea(int* height, int size) {
    int ans = 0;
    for (int i = 0; i < size - 1; i++) {
        int area = min(height[i], height[i + 1]);
        if (area > ans) ans = area;
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    printf("%d\\n", maxAdjacentArea(height, n));
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int maxAdjacentArea(vector<int>& height) {
    int ans = 0;
    for (int i = 0; i < height.size() - 1; i++) {
        int area = min(height[i], height[i + 1]);
        ans = max(ans, area);
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> height(n);
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        cout << maxAdjacentArea(height) << "\\n";
    }
    return 0;
}`
  },  'cwm-e4': {
    python: `def tallest_boundary_container(height):
    n = len(height)
    tallest = max(range(n), key=lambda i: height[i])
    ans = 0
    for i in range(n):
        if i != tallest:
            area = min(height[i], height[tallest]) * abs(tallest - i)
            ans = max(ans, area)
    return ans

n = int(input())
height = list(map(int, input().split()))
print(tallest_boundary_container(height))`,
    java: `import java.util.*;

public class Main {
    public static int tallestBoundaryContainer(int[] height) {
        int n = height.length;
        int tallest = 0;
        for (int i = 1; i < n; i++) {
            if (height[i] > height[tallest]) tallest = i;
        }
        int ans = 0;
        for (int i = 0; i < n; i++) {
            if (i != tallest) {
                int area = Math.min(height[i], height[tallest]) * Math.abs(tallest - i);
                ans = Math.max(ans, area);
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            System.out.println(tallestBoundaryContainer(height));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return a < b ? a : b;
}

int absVal(int x) {
    return x < 0 ? -x : x;
}

int tallestBoundaryContainer(int* height, int size) {
    int tallest = 0;
    for (int i = 1; i < size; i++) {
        if (height[i] > height[tallest]) tallest = i;
    }
    int ans = 0;
    for (int i = 0; i < size; i++) {
        if (i != tallest) {
            int area = min(height[i], height[tallest]) * absVal(tallest - i);
            if (area > ans) ans = area;
        }
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    printf("%d\\n", tallestBoundaryContainer(height, n));
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

int tallestBoundaryContainer(vector<int>& height) {
    int tallest = max_element(height.begin(), height.end()) - height.begin();
    int ans = 0;
    for (int i = 0; i < height.size(); i++) {
        if (i != tallest) {
            int area = min(height[i], height[tallest]) * abs(tallest - i);
            ans = max(ans, area);
        }
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> height(n);
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        cout << tallestBoundaryContainer(height) << "\\n";
    }
    return 0;
}`
  },  'cwm-e5': {
    python: `def fixed_left_container(height):
    ans = 0
    for i in range(1, len(height)):
        area = min(height[0], height[i]) * i
        ans = max(ans, area)
    return ans

n = int(input())
height = list(map(int, input().split()))
print(fixed_left_container(height))`,
    java: `import java.util.*;
public class Main {
    public static int fixedLeftContainer(int[] height) {
        int ans = 0;
        for (int i = 1; i < height.length; i++) {
            int area = Math.min(height[0], height[i]) * i;
            ans = Math.max(ans, area);
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            System.out.println(fixedLeftContainer(height));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return a < b ? a : b;
}

int fixedLeftContainer(int* height, int size) {
    int ans = 0;
    for (int i = 1; i < size; i++) {
        int area = min(height[0], height[i]) * i;
        if (area > ans) ans = area;
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    printf("%d\\n", fixedLeftContainer(height, n));
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int fixedLeftContainer(vector<int>& height) {
    int ans = 0;
    for (int i = 1; i < height.size(); i++) {
        int area = min(height[0], height[i]) * i;
        ans = max(ans, area);
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> height(n);
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        cout << fixedLeftContainer(height) << "\\n";
    }
    return 0;
}`
  },  'cwm-m1': {
    python: `def has_required_area(height, k):
    left, right = 0, len(height) - 1
    while left < right:
        area = min(height[left], height[right]) * (right - left)
        if area >= k:
            return True
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return False

n = int(input())
height = list(map(int, input().split()))
k = int(input())
print(str(has_required_area(height, k)).lower())`,
    java: `import java.util.*;

public class Main {
    public static boolean hasRequiredArea(int[] height, int k) {
        int left = 0, right = height.length - 1;
        while (left < right) {
            int area = Math.min(height[left], height[right]) * (right - left);
            if (area >= k) {
                return true;
            }
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            int k = sc.nextInt();
            System.out.println(hasRequiredArea(height, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int min(int a, int b) {
    return a < b ? a : b;
}

bool hasRequiredArea(int* height, int size, int k) {
    int left = 0, right = size - 1;
    while (left < right) {
        int area = min(height[left], height[right]) * (right - left);
        if (area >= k) {
            return true;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    int k;
    scanf("%d", &k);
    printf("%s\n", hasRequiredArea(height, n, k) ? "true" : "false");
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool hasRequiredArea(vector<int>& height, int k) {
    int left = 0, right = height.size() - 1;
    while (left < right) {
        int area = min(height[left], height[right]) * (right - left);
        if (area >= k) {
            return true;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> height(n);
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        int k;
        cin >> k;
        cout << (hasRequiredArea(height, k) ? "true" : "false") << "\\n";
    }
    return 0;
}`
  },   'cwm-m2': {
    python: `def best_pair(height):
    left, right = 0, len(height) - 1
    max_area = 0
    ans = (0, 0)
    while left < right:
        area = min(height[left], height[right]) * (right - left)
        if area > max_area:
            max_area = area
            ans = (left, right)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return ans

n = int(input())
height = list(map(int, input().split()))
ans = best_pair(height)
print(ans[0], ans[1])`,
    java: `import java.util.*;

public class Main{
    public static int[] bestPair(int[] height) {
        int left = 0, right = height.length - 1;
        int maxArea = 0;
        int[] ans = new int[2];
        while (left < right) {
            int area = Math.min(height[left], height[right]) * (right - left);
            if (area > maxArea) {
                maxArea = area;
                ans[0] = left;
                ans[1] = right;
            }
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            int[] ans = bestPair(height);
            System.out.println(ans[0] + " " + ans[1]);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return a < b ? a : b;
}

void bestPair(int* height, int size, int* leftAns, int* rightAns) {
    int left = 0, right = size - 1;
    int maxArea = 0;
    *leftAns = 0;
    *rightAns = 0;
    while (left < right) {
        int area = min(height[left], height[right]) * (right - left);
        if (area > maxArea) {
            maxArea = area;
            *leftAns = left;
            *rightAns = right;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    int leftAns, rightAns;
    bestPair(height, n, &leftAns, &rightAns);
    printf("%d %d\n", leftAns, rightAns);
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

pair<int, int> bestPair(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int maxArea = 0;
    pair<int, int> ans = {0, 0};
    while (left < right) {
        int area = min(height[left], height[right]) * (right - left);
        if (area > maxArea) {
            maxArea = area;
            ans = {left, right};
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> height(n);
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        pair<int, int> ans = bestPair(height);
        cout << ans.first << " " << ans.second << "\\n";
    }
    return 0;
}`
  },   'cwm-m3': {
    python: `def updated_max_area(height, index, new_height):
    height[index] = new_height
    left, right = 0, len(height) - 1
    ans = 0
    while left < right:
        area = min(height[left], height[right]) * (right - left)
        ans = max(ans, area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return ans

n = int(input())
height = list(map(int, input().split()))
index = int(input())
new_height = int(input())
print(updated_max_area(height, index, new_height))`,
    java: `import java.util.*;

public class Main{
    public static int updatedMaxArea(int[] height, int index, int newHeight) {
        height[index] = newHeight;
        int left = 0, right = height.length - 1;
        int ans = 0;
        while (left < right) {
            int area = Math.min(height[left], height[right]) * (right - left);
            ans = Math.max(ans, area);
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            int index = sc.nextInt();
            int newHeight = sc.nextInt();
            System.out.println(updatedMaxArea(height, index, newHeight));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return a < b ? a : b;
}

int updatedMaxArea(int* height, int size, int index, int newHeight) {
    height[index] = newHeight;
    int left = 0, right = size - 1;
    int ans = 0;
    while (left < right) {
        int area = min(height[left], height[right]) * (right - left);
        if (area > ans) ans = area;
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    int index, newHeight;
    scanf("%d%d", &index, &newHeight);
    printf("%d\n", updatedMaxArea(height, n, index, newHeight));
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int updatedMaxArea(vector<int>& height, int index, int newHeight) {
    height[index] = newHeight;
    int left = 0, right = height.size() - 1;
    int ans = 0;
    while (left < right) {
        int area = min(height[left], height[right]) * (right - left);
        ans = max(ans, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> height(n);
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        int index, newHeight;
        cin >> index >> newHeight;
        cout << updatedMaxArea(height, index, newHeight) << "\\n";
    }
    return 0;
}`
  },  'cwm-m4': {
    python: `def constrained_container(height, h):
    left, right = 0, len(height) - 1
    ans = 0
    while left < right:
        if height[left] >= h and height[right] >= h:
            area = min(height[left], height[right]) * (right - left)
            ans = max(ans, area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return ans

n = int(input())
height = list(map(int, input().split()))
h = int(input())
print(constrained_container(height, h))`,
    java: `import java.util.*;
public class Main {
    public static int constrainedContainer(int[] height, int h) {
        int left = 0, right = height.length - 1;
        int ans = 0;
        while (left < right) {
            if (height[left] >= h && height[right] >= h) {
                int area = Math.min(height[left], height[right]) * (right - left);
                ans = Math.max(ans, area);
            }
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            int h = sc.nextInt();
            System.out.println(constrainedContainer(height, h));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return a < b ? a : b;
}

int constrainedContainer(int* height, int size, int h) {
    int left = 0, right = size - 1;
    int ans = 0;
    while (left < right) {
        if (height[left] >= h && height[right] >= h) {
            int area = min(height[left], height[right]) * (right - left);
            if (area > ans) ans = area;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    int h;
    scanf("%d", &h);
    printf("%d\n", constrainedContainer(height, n, h));
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int constrainedContainer(vector<int>& height, int h) {
    int left = 0, right = height.size() - 1;
    int ans = 0;
    while (left < right) {
        if (height[left] >= h && height[right] >= h) {
            int area = min(height[left], height[right]) * (right - left);
            ans = max(ans, area);
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> height(n);
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        int h;
        cin >> h;
        cout << constrainedContainer(height, h) << "\\n";
    }
    return 0;
}`
  },  'cwm-m5': {
    python: `def max_area(height):
    left, right = 0, len(height) - 1
    ans = 0
    while left < right:
        area = min(height[left], height[right]) * (right - left)
        ans = max(ans, area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return ans

def max_area_after_removal(height):
    ans = 0
    for i in range(len(height)):
        temp = height[:i] + height[i + 1:]
        ans = max(ans, max_area(temp))
    return ans

n = int(input())
height = list(map(int, input().split()))
print(max_area_after_removal(height))`,
    java: `import java.util.*;
public class Main {
    public static int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int ans = 0;
        while (left < right) {
            int area = Math.min(height[left], height[right]) * (right - left);
            ans = Math.max(ans, area);
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return ans;
    }

    public static int maxAreaAfterRemoval(int[] height) {
        int ans = 0;
        for (int i = 0; i < height.length; i++) {
            int[] temp = new int[height.length - 1];
            int idx = 0;
            for (int j = 0; j < height.length; j++) {
                if (j != i) {
                    temp[idx++] = height[j];
                }
            }
            ans = Math.max(ans, maxArea(temp));
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            System.out.println(maxAreaAfterRemoval(height));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return a < b ? a : b;
}

int maxArea(int* height, int size) {
    int left = 0, right = size - 1;
    int ans = 0;
    while (left < right) {
        int area = min(height[left], height[right]) * (right - left);
        if (area > ans) ans = area;
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}

int maxAreaAfterRemoval(int* height, int size) {
    int ans = 0;
    for (int i = 0; i < size; i++) {
        int* temp = (int*)malloc((size - 1) * sizeof(int));
        int idx = 0;
        for (int j = 0; j < size; j++) {
            if (j != i) temp[idx++] = height[j];
        }
        int area = maxArea(temp, size - 1);
        if (area > ans) ans = area;
        free(temp);
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    printf("%d\n", maxAreaAfterRemoval(height, n));
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int ans = 0;
    while (left < right) {
        int area = min(height[left], height[right]) * (right - left);
        ans = max(ans, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}

int maxAreaAfterRemoval(vector<int>& height) {
    int ans = 0;
    for (int i = 0; i < height.size(); i++) {
        vector<int> temp;
        for (int j = 0; j < height.size(); j++) {
            if (i != j) temp.push_back(height[j]);
        }
        ans = max(ans, maxArea(temp));
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> height(n);
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        cout << maxAreaAfterRemoval(height) << "\\n";
    }
    return 0;
}`
  },  'cwm-h1': {
    python: `def max_variable_width(position, height):
    left, right = 0, len(height) - 1
    ans = 0
    while left < right:
        width = position[right] - position[left]
        area = min(height[left], height[right]) * width
        ans = max(ans, area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return ans

n = int(input())
position = list(map(int, input().split()))
height = list(map(int, input().split()))
print(max_variable_width(position, height))`,
    java: `import java.util.*;
public class Main {
    public static int maxVariableWidth(int[] position, int[] height) {
        int left = 0, right = height.length - 1;
        int ans = 0;
        while (left < right) {
            int width = position[right] - position[left];
            int area = Math.min(height[left], height[right]) * width;
            ans = Math.max(ans, area);
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] position = new int[n];
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                position[i] = sc.nextInt();
            }
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            System.out.println(maxVariableWidth(position, height));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return a < b ? a : b;
}

int maxVariableWidth(int* position, int* height, int size) {
    int left = 0, right = size - 1;
    int ans = 0;
    while (left < right) {
        int width = position[right] - position[left];
        int area = min(height[left], height[right]) * width;
        if (area > ans) ans = area;
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* position = (int*)malloc(n * sizeof(int));
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &position[i]) != 1) return 0;
    }
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    printf("%d\n", maxVariableWidth(position, height, n));
    free(position);
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int maxVariableWidth(vector<int>& position, vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int ans = 0;
    while (left < right) {
        int width = position[right] - position[left];
        int area = min(height[left], height[right]) * width;
        ans = max(ans, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> position(n), height(n);
        for (int i = 0; i < n; i++) {
            cin >> position[i];
        }
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        cout << maxVariableWidth(position, height) << "\\n";
    }
    return 0;
}`
  },  'cwm-h2': {
    python: `def max_area_k_moves(height, k):
    left, right = 0, len(height) - 1
    ans = 0
    moves = 0
    while left < right and moves <= k:
        area = min(height[left], height[right]) * (right - left)
        ans = max(ans, area)
        if moves == k:
            break
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
        moves += 1
    return ans

n = int(input())
height = list(map(int, input().split()))
k = int(input())
print(max_area_k_moves(height, k))`,
    java: `import java.util.*;
public class Main {
    public static int maxAreaKMoves(int[] height, int k) {
        int left = 0, right = height.length - 1;
        int ans = 0;
        int moves = 0;
        while (left < right && moves <= k) {
            int area = Math.min(height[left], height[right]) * (right - left);
            ans = Math.max(ans, area);
            if (moves == k) {
                break;
            }
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
            moves++;
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            int k = sc.nextInt();
            System.out.println(maxAreaKMoves(height, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return a < b ? a : b;
}

int maxAreaKMoves(int* height, int size, int k) {
    int left = 0, right = size - 1;
    int ans = 0;
    int moves = 0;
    while (left < right && moves <= k) {
        int area = min(height[left], height[right]) * (right - left);
        if (area > ans) ans = area;
        if (moves == k) {
            break;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
        moves++;
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    int k;
    scanf("%d", &k);
    printf("%d\n", maxAreaKMoves(height, n, k));
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int maxAreaKMoves(vector<int>& height, int k) {
    int left = 0, right = height.size() - 1;
    int ans = 0;
    int moves = 0;
    while (left < right && moves <= k) {
        int area = min(height[left], height[right]) * (right - left);
        ans = max(ans, area);
        if (moves == k) {
            break;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
        moves++;
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> height(n);
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        int k;
        cin >> k;
        cout << maxAreaKMoves(height, k) << "\\n";
    }
    return 0;
}`
  },  'cwm-h3': {
    python: `def max_area(height):
    left, right = 0, len(height) - 1
    ans = 0
    while left < right:
        area = min(height[left], height[right]) * (right - left)
        ans = max(ans, area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return ans

def dynamic_queries(height, queries):
    ans = []
    for idx, val in queries:
        height[idx] = val
        ans.append(max_area(height))
    return ans

n = int(input())
height = list(map(int, input().split()))
q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]
print(*dynamic_queries(height, queries))`,
    java: `import java.util.*;
public class Main {
    public static int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int ans = 0;
        while (left < right) {
            int area = Math.min(height[left], height[right]) * (right - left);
            ans = Math.max(ans, area);
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return ans;
    }

    public static List<Integer> dynamicQueries(int[] height, int[][] queries) {
        List<Integer> ans = new ArrayList<>();
        for (int[] query : queries) {
            height[query[0]] = query[1];
            ans.add(maxArea(height));
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            int q = sc.nextInt();
            int[][] queries = new int[q][2];
            for (int i = 0; i < q; i++) {
                queries[i][0] = sc.nextInt();
                queries[i][1] = sc.nextInt();
            }
            List<Integer> ans = dynamicQueries(height, queries);
            for (int x : ans) {
                System.out.print(x + " ");
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return a < b ? a : b;
}

int maxArea(int* height, int size) {
    int left = 0, right = size - 1;
    int ans = 0;
    while (left < right) {
        int area = min(height[left], height[right]) * (right - left);
        if (area > ans) ans = area;
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}

void dynamicQueries(int* height, int size, int q) {
    for (int i = 0; i < q; i++) {
        int idx, val;
        scanf("%d%d", &idx, &val);
        height[idx] = val;
        printf("%d ", maxArea(height, size));
    }
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    int q;
    scanf("%d", &q);
    dynamicQueries(height, n, q);
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int ans = 0;
    while (left < right) {
        int area = min(height[left], height[right]) * (right - left);
        ans = max(ans, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}

vector<int> dynamicQueries(vector<int>& height, vector<pair<int, int>>& queries) {
    vector<int> ans;
    for (auto& query : queries) {
        height[query.first] = query.second;
        ans.push_back(maxArea(height));
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> height(n);
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        int q;
        cin >> q;
        vector<pair<int, int>> queries(q);
        for (int i = 0; i < q; i++) {
            cin >> queries[i].first >> queries[i].second;
        }
        vector<int> ans = dynamicQueries(height, queries);
        for (int x : ans) {
            cout << x << " ";
        }
    }
    return 0;
}`
  },  'cwm-h4': {
    python: `def top_k_containers(height, k):
    areas = set()
    n = len(height)
    for i in range(n):
        for j in range(i + 1, n):
            areas.add(min(height[i], height[j]) * (j - i))
    areas = sorted(areas, reverse=True)
    return areas[:k]

n = int(input())
height = list(map(int, input().split()))
k = int(input())
print(*top_k_containers(height, k))`,
    java: `import java.util.*;
public class Main{
    public static List<Integer> topKContainers(int[] height, int k) {
        TreeSet<Integer> areas = new TreeSet<>(Collections.reverseOrder());
        for (int i = 0; i < height.length; i++) {
            for (int j = i + 1; j < height.length; j++) {
                int area = Math.min(height[i], height[j]) * (j - i);
                areas.add(area);
            }
        }
        List<Integer> ans = new ArrayList<>();
        int count = 0;
        for (int area : areas) {
            if (count == k) break;
            ans.add(area);
            count++;
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            int k = sc.nextInt();
            List<Integer> ans = topKContainers(height, k);
            for (int x : ans) {
                System.out.print(x + " ");
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
    return (*(int*)b - *(int*)a);
}

void topKContainers(int* height, int size, int k) {
    int total = size * (size - 1) / 2;
    int* areas = (int*)malloc(total * sizeof(int));
    int idx = 0;
    for (int i = 0; i < size; i++) {
        for (int j = i + 1; j < size; j++) {
            int h = height[i] < height[j] ? height[i] : height[j];
            areas[idx++] = h * (j - i);
        }
    }
    qsort(areas, idx, sizeof(int), compare);
    int printed = 0;
    for (int i = 0; i < idx && printed < k; i++) {
        if (i == 0 || areas[i] != areas[i - 1]) {
            printf("%d ", areas[i]);
            printed++;
        }
    }
    free(areas);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    int k;
    scanf("%d", &k);
    topKContainers(height, n, k);
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <algorithm>

using namespace std;

vector<int> topKContainers(vector<int>& height, int k) {
    set<int, greater<int>> areas;
    for (int i = 0; i < height.size(); i++) {
        for (int j = i + 1; j < height.size(); j++) {
            areas.insert(min(height[i], height[j]) * (j - i));
        }
    }
    vector<int> ans;
    for (int area : areas) {
        if (ans.size() == k) break;
        ans.push_back(area);
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> height(n);
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        int k;
        cin >> k;
        vector<int> ans = topKContainers(height, k);
        for (int x : ans) {
            cout << x << " ";
        }
    }
    return 0;
}`
  },  'cwm-h5': {
    python: `def circular_container(height):
    n = len(height)
    ans = 0
    for i in range(n):
        for j in range(i + 1, n):
            width = min(j - i, n - (j - i))
            area = min(height[i], height[j]) * width
            ans = max(ans, area)
    return ans

n = int(input())
height = list(map(int, input().split()))
print(circular_container(height))`,
    java: `import java.util.*;
public class Main {
    public static int circularContainer(int[] height) {
        int n = height.length;
        int ans = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int width = Math.min(j - i, n - (j - i));
                int area = Math.min(height[i], height[j]) * width;
                ans = Math.max(ans, area);
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] height = new int[n];
            for (int i = 0; i < n; i++) {
                height[i] = sc.nextInt();
            }
            System.out.println(circularContainer(height));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
    return a < b ? a : b;
}

int circularContainer(int* height, int size) {
    int ans = 0;
    for (int i = 0; i < size; i++) {
        for (int j = i + 1; j < size; j++) {
            int width = min(j - i, size - (j - i));
            int area = min(height[i], height[j]) * width;
            if (area > ans) ans = area;
        }
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* height = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &height[i]) != 1) return 0;
    }
    printf("%d\n", circularContainer(height, n));
    free(height);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int circularContainer(vector<int>& height) {
    int n = height.size();
    int ans = 0;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int width = min(j - i, n - (j - i));
            int area = min(height[i], height[j]) * width;
            ans = max(ans, area);
        }
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> height(n);
        for (int i = 0; i < n; i++) {
            cin >> height[i];
        }
        cout << circularContainer(height) << "\\n";
    }
    return 0;
}`
  }
};