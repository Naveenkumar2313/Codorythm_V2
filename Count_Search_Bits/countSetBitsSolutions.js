export const countSetBitsSolutions = {

  'csb-e1': {

    python: `def count_set_bits(n):
    count = 0

    while n > 0:
        n &= (n - 1)  # Remove the rightmost set bit
        count += 1

    return count

n = int(input())
print(count_set_bits(n))
`,

    java: `import java.util.*;

public class Solution {

    public static int countSetBits(int n) {

        int count = 0;

        while (n > 0) {
            n &= (n - 1); // Remove the rightmost set bit
            count++;
        }

        return count;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int n = sc.nextInt();

            System.out.println(countSetBits(n));
        }
    }
}
`,

    c: `#include <stdio.h>

int countSetBits(int n) {

    int count = 0;

    while (n > 0) {
        n &= (n - 1); // Remove the rightmost set bit
        count++;
    }

    return count;
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    printf("%d \n", countSetBits(n));

    return 0;
}
`,

    cpp: `#include <iostream>

using namespace std;

int countSetBits(int n) {

    int count = 0;

    while (n > 0) {
        n &= (n - 1); // Remove the rightmost set bit
        count++;
    }

    return count;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {

        cout << countSetBits(n) << "\n";
    }

    return 0;
}
`
  },
  'csb-e2': {

    python: `def is_power_of_two(n):
    if n <= 0:
        return False

    count = 0

    while n > 0:
        n &= (n - 1)  # Remove the rightmost set bit
        count += 1

    return count == 1

n = int(input())
print(is_power_of_two(n))
`,

    java: `import java.util.*;

public class Solution {

    public static boolean isPowerOfTwo(int n) {

        if (n <= 0)
            return false;

        int count = 0;

        while (n > 0) {
            n &= (n - 1); // Remove the rightmost set bit
            count++;
        }

        return count == 1;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int n = sc.nextInt();

            System.out.println(isPowerOfTwo(n));
        }
    }
}
`,

    c: `#include <stdio.h>
#include <stdbool.h>

bool isPowerOfTwo(int n) {

    if (n <= 0)
        return false;

    int count = 0;

    while (n > 0) {
        n &= (n - 1); // Remove the rightmost set bit
        count++;
    }

    return count == 1;
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    printf("%s \n", isPowerOfTwo(n) ? "true" : "false");

    return 0;
}
`,

    cpp: `#include <iostream>

using namespace std;

bool isPowerOfTwo(int n) {

    if (n <= 0)
        return false;

    int count = 0;

    while (n > 0) {
        n &= (n - 1); // Remove the rightmost set bit
        count++;
    }

    return count == 1;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {

        cout << (isPowerOfTwo(n) ? "true" : "false") << "\n";
    }

    return 0;
}
`
},
'csb-e3': {

    python: `def total_set_bits(arr):
    total = 0

    for num in arr:
        while num > 0:
            num &= (num - 1)  # Remove the rightmost set bit
            total += 1

    return total

n = int(input())
arr = list(map(int, input().split()))
print(total_set_bits(arr))
`,

    java: `import java.util.*;

public class Solution {

    public static int totalSetBits(int[] arr) {

        int total = 0;

        for (int num : arr) {

            while (num > 0) {
                num &= (num - 1); // Remove the rightmost set bit
                total++;
            }
        }

        return total;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int n = sc.nextInt();
            int[] arr = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }

            System.out.println(totalSetBits(arr));
        }
    }
}
`,

    c: `#include <stdio.h>
#include <stdlib.h>

int totalSetBits(int* arr, int size) {

    int total = 0;

    for (int i = 0; i < size; i++) {

        int num = arr[i];

        while (num > 0) {
            num &= (num - 1); // Remove the rightmost set bit
            total++;
        }
    }

    return total;
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* arr = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("%d\\n", totalSetBits(arr, n));

    free(arr);

    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

int totalSetBits(vector<int>& arr) {

    int total = 0;

    for (int num : arr) {

        while (num > 0) {
            num &= (num - 1); // Remove the rightmost set bit
            total++;
        }
    }

    return total;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {

        vector<int> arr(n);

        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }

        cout << totalSetBits(arr) << "\\n";
    }

    return 0;
}
`
},
'csb-e4': {

    python: `def count_odd_set_bits(arr):

    count = 0

    for num in arr:

        set_bits = 0
        temp = num

        while temp > 0:
            temp &= (temp - 1)  # Remove the rightmost set bit
            set_bits += 1

        if set_bits % 2 == 1:
            count += 1

    return count

n = int(input())
arr = list(map(int, input().split()))
print(count_odd_set_bits(arr))
`,

    java: `import java.util.*;

public class Solution {

    public static int countOddSetBits(int[] arr) {

        int count = 0;

        for (int num : arr) {

            int setBits = 0;
            int temp = num;

            while (temp > 0) {
                temp &= (temp - 1); // Remove the rightmost set bit
                setBits++;
            }

            if (setBits % 2 == 1) {
                count++;
            }
        }

        return count;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int n = sc.nextInt();
            int[] arr = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }

            System.out.println(countOddSetBits(arr));
        }
    }
}
`,

    c: `#include <stdio.h>
#include <stdlib.h>

int countOddSetBits(int* arr, int size) {

    int count = 0;

    for (int i = 0; i < size; i++) {

        int temp = arr[i];
        int setBits = 0;

        while (temp > 0) {
            temp &= (temp - 1); // Remove the rightmost set bit
            setBits++;
        }

        if (setBits % 2 == 1) {
            count++;
        }
    }

    return count;
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* arr = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("%d\\n", countOddSetBits(arr, n));

    free(arr);

    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

int countOddSetBits(vector<int>& arr) {

    int count = 0;

    for (int num : arr) {

        int temp = num;
        int setBits = 0;

        while (temp > 0) {
            temp &= (temp - 1); // Remove the rightmost set bit
            setBits++;
        }

        if (setBits % 2 == 1) {
            count++;
        }
    }

    return count;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {

        vector<int> arr(n);

        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }

        cout << countOddSetBits(arr) << "\\n";
    }

    return 0;
}
`
},
'csb-e5': {

    python: `def max_set_bit_element(arr):
    max_set_bits = -1
    answer = float('inf')

    for num in arr:
        temp = num
        count = 0

        while temp > 0:
            temp &= (temp - 1)  # Remove the rightmost set bit
            count += 1

        if count > max_set_bits:
            max_set_bits = count
            answer = num
        elif count == max_set_bits and num < answer:
            answer = num

    return answer

n = int(input())
arr = list(map(int, input().split()))
print(max_set_bit_element(arr))
`,

    java: `import java.util.*;

public class Solution {

    public static int maxSetBitElement(int[] arr) {

        int maxSetBits = -1;
        int answer = Integer.MAX_VALUE;

        for (int num : arr) {

            int temp = num;
            int count = 0;

            while (temp > 0) {
                temp &= (temp - 1); // Remove the rightmost set bit
                count++;
            }

            if (count > maxSetBits) {
                maxSetBits = count;
                answer = num;
            } else if (count == maxSetBits && num < answer) {
                answer = num;
            }
        }

        return answer;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int n = sc.nextInt();
            int[] arr = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }

            System.out.println(maxSetBitElement(arr));
        }
    }
}
`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int maxSetBitElement(int* arr, int size) {

    int maxSetBits = -1;
    int answer = INT_MAX;

    for (int i = 0; i < size; i++) {

        int temp = arr[i];
        int count = 0;

        while (temp > 0) {
            temp &= (temp - 1); // Remove the rightmost set bit
            count++;
        }

        if (count > maxSetBits) {
            maxSetBits = count;
            answer = arr[i];
        } else if (count == maxSetBits && arr[i] < answer) {
            answer = arr[i];
        }
    }

    return answer;
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* arr = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("%d\\n", maxSetBitElement(arr, n));

    free(arr);

    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int maxSetBitElement(vector<int>& arr) {

    int maxSetBits = -1;
    int answer = INT_MAX;

    for (int num : arr) {

        int temp = num;
        int count = 0;

        while (temp > 0) {
            temp &= (temp - 1); // Remove the rightmost set bit
            count++;
        }

        if (count > maxSetBits) {
            maxSetBits = count;
            answer = num;
        } else if (count == maxSetBits && num < answer) {
            answer = num;
        }
    }

    return answer;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {

        vector<int> arr(n);

        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }

        cout << maxSetBitElement(arr) << "\\n";
    }

    return 0;
}
`
},
'csb-m1': {

    python: `def hamming_distance(x, y):
    xor = x ^ y
    count = 0

    while xor > 0:
        xor &= (xor - 1)  # Remove the rightmost set bit
        count += 1

    return count

x = int(input())
y = int(input())
print(hamming_distance(x, y))
`,

    java: `import java.util.*;

public class Solution {

    public static int hammingDistance(int x, int y) {

        int xor = x ^ y;
        int count = 0;

        while (xor > 0) {
            xor &= (xor - 1); // Remove the rightmost set bit
            count++;
        }

        return count;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int x = sc.nextInt();
            int y = sc.nextInt();

            System.out.println(hammingDistance(x, y));
        }
    }
}
`,

    c: `#include <stdio.h>

int hammingDistance(int x, int y) {

    int xor = x ^ y;
    int count = 0;

    while (xor > 0) {
        xor &= (xor - 1); // Remove the rightmost set bit
        count++;
    }

    return count;
}

int main() {

    int x, y;

    if (scanf("%d %d", &x, &y) != 2)
        return 0;

    printf("%d\\n", hammingDistance(x, y));

    return 0;
}
`,

    cpp: `#include <iostream>

using namespace std;

int hammingDistance(int x, int y) {

    int xor = x ^ y;
    int count = 0;

    while (xor > 0) {
        xor &= (xor - 1); // Remove the rightmost set bit
        count++;
    }

    return count;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int x, y;

    if (cin >> x >> y) {

        cout << hammingDistance(x, y) << "\\n";
    }

    return 0;
}
`
},
'csb-m2': {

    python: `def count_numbers_with_k_set_bits(arr, k):
    count = 0

    for num in arr:
        temp = num
        set_bits = 0

        while temp > 0:
            temp &= (temp - 1)  # Remove the rightmost set bit
            set_bits += 1

        if set_bits == k:
            count += 1

    return count

n = int(input())
arr = list(map(int, input().split()))
k = int(input())

print(count_numbers_with_k_set_bits(arr, k))
`,

    java: `import java.util.*;

public class Solution {

    public static int countNumbersWithKSetBits(int[] arr, int k) {

        int count = 0;

        for (int num : arr) {

            int temp = num;
            int setBits = 0;

            while (temp > 0) {
                temp &= (temp - 1); // Remove the rightmost set bit
                setBits++;
            }

            if (setBits == k) {
                count++;
            }
        }

        return count;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int n = sc.nextInt();
            int[] arr = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(countNumbersWithKSetBits(arr, k));
        }
    }
}
`,

    c: `#include <stdio.h>
#include <stdlib.h>

int countNumbersWithKSetBits(int* arr, int size, int k) {

    int count = 0;

    for (int i = 0; i < size; i++) {

        int temp = arr[i];
        int setBits = 0;

        while (temp > 0) {
            temp &= (temp - 1); // Remove the rightmost set bit
            setBits++;
        }

        if (setBits == k) {
            count++;
        }
    }

    return count;
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* arr = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    int k;
    scanf("%d", &k);

    printf("%d\\n", countNumbersWithKSetBits(arr, n, k));

    free(arr);

    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

int countNumbersWithKSetBits(vector<int>& arr, int k) {

    int count = 0;

    for (int num : arr) {

        int temp = num;
        int setBits = 0;

        while (temp > 0) {
            temp &= (temp - 1); // Remove the rightmost set bit
            setBits++;
        }

        if (setBits == k) {
            count++;
        }
    }

    return count;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {

        vector<int> arr(n);

        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }

        int k;
        cin >> k;

        cout << countNumbersWithKSetBits(arr, k) << "\\n";
    }

    return 0;
}
`
},
'csb-m3': {

    python: `def min_bit_flips(a, b):
    xor = a ^ b
    count = 0

    while xor > 0:
        xor &= (xor - 1)  # Remove the rightmost set bit
        count += 1

    return count

a = int(input())
b = int(input())

print(min_bit_flips(a, b))
`,

    java: `import java.util.*;

public class Solution {

    public static int minBitFlips(int a, int b) {

        int xor = a ^ b;
        int count = 0;

        while (xor > 0) {
            xor &= (xor - 1); // Remove the rightmost set bit
            count++;
        }

        return count;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int a = sc.nextInt();
            int b = sc.nextInt();

            System.out.println(minBitFlips(a, b));
        }
    }
}
`,

    c: `#include <stdio.h>

int minBitFlips(int a, int b) {

    int xor = a ^ b;
    int count = 0;

    while (xor > 0) {
        xor &= (xor - 1); // Remove the rightmost set bit
        count++;
    }

    return count;
}

int main() {

    int a, b;

    if (scanf("%d %d", &a, &b) != 2)
        return 0;

    printf("%d\\n", minBitFlips(a, b));

    return 0;
}
`,

    cpp: `#include <iostream>

using namespace std;

int minBitFlips(int a, int b) {

    int xor = a ^ b;
    int count = 0;

    while (xor > 0) {
        xor &= (xor - 1); // Remove the rightmost set bit
        count++;
    }

    return count;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int a, b;

    if (cin >> a >> b) {

        cout << minBitFlips(a, b) << "\\n";
    }

    return 0;
}
`
},
'csb-m4': {

    python: `def counting_bits(n):
    result = []

    for i in range(n + 1):
        num = i
        count = 0

        while num > 0:
            num &= (num - 1)  # Remove the rightmost set bit
            count += 1

        result.append(count)

    return result

n = int(input())
print(counting_bits(n))
`,

    java: `import java.util.*;

public class Solution {

    public static int[] countingBits(int n) {

        int[] result = new int[n + 1];

        for (int i = 0; i <= n; i++) {

            int num = i;
            int count = 0;

            while (num > 0) {
                num &= (num - 1); // Remove the rightmost set bit
                count++;
            }

            result[i] = count;
        }

        return result;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int n = sc.nextInt();

            System.out.println(Arrays.toString(countingBits(n)));
        }
    }
}
`,

    c: `#include <stdio.h>
#include <stdlib.h>

int* countingBits(int n) {

    int* result = (int*)malloc((n + 1) * sizeof(int));

    for (int i = 0; i <= n; i++) {

        int num = i;
        int count = 0;

        while (num > 0) {
            num &= (num - 1); // Remove the rightmost set bit
            count++;
        }

        result[i] = count;
    }

    return result;
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* result = countingBits(n);

    for (int i = 0; i <= n; i++) {
        printf("%d", result[i]);

        if (i != n)
            printf(" ");
    }

    printf("\\n");

    free(result);

    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

vector<int> countingBits(int n) {

    vector<int> result(n + 1);

    for (int i = 0; i <= n; i++) {

        int num = i;
        int count = 0;

        while (num > 0) {
            num &= (num - 1); // Remove the rightmost set bit
            count++;
        }

        result[i] = count;
    }

    return result;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {

        vector<int> result = countingBits(n);

        for (int i = 0; i < result.size(); i++) {
            cout << result[i];

            if (i != result.size() - 1)
                cout << " ";
        }

        cout << "\\n";
    }

    return 0;
}
`
},
'csb-m5': {

    python: `def longest_equal_set_bits(arr):
    if not arr:
        return 0

    max_length = 0
    current_length = 0
    previous_count = -1

    for num in arr:
        temp = num
        set_bits = 0

        while temp > 0:
            temp &= (temp - 1)  # Remove the rightmost set bit
            set_bits += 1

        if set_bits == previous_count:
            current_length += 1
        else:
            current_length = 1
            previous_count = set_bits

        max_length = max(max_length, current_length)

    return max_length

n = int(input())
arr = list(map(int, input().split()))
print(longest_equal_set_bits(arr))
`,

    java: `import java.util.*;

public class Solution {

    public static int longestEqualSetBits(int[] arr) {

        if (arr.length == 0)
            return 0;

        int maxLength = 0;
        int currentLength = 0;
        int previousCount = -1;

        for (int num : arr) {

            int temp = num;
            int setBits = 0;

            while (temp > 0) {
                temp &= (temp - 1); // Remove the rightmost set bit
                setBits++;
            }

            if (setBits == previousCount) {
                currentLength++;
            } else {
                currentLength = 1;
                previousCount = setBits;
            }

            maxLength = Math.max(maxLength, currentLength);
        }

        return maxLength;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int n = sc.nextInt();
            int[] arr = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }

            System.out.println(longestEqualSetBits(arr));
        }
    }
}
`,

    c: `#include <stdio.h>
#include <stdlib.h>

int longestEqualSetBits(int* arr, int size) {

    if (size == 0)
        return 0;

    int maxLength = 0;
    int currentLength = 0;
    int previousCount = -1;

    for (int i = 0; i < size; i++) {

        int temp = arr[i];
        int setBits = 0;

        while (temp > 0) {
            temp &= (temp - 1); // Remove the rightmost set bit
            setBits++;
        }

        if (setBits == previousCount) {
            currentLength++;
        } else {
            currentLength = 1;
            previousCount = setBits;
        }

        if (currentLength > maxLength)
            maxLength = currentLength;
    }

    return maxLength;
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* arr = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("%d\\n", longestEqualSetBits(arr, n));

    free(arr);

    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

int longestEqualSetBits(vector<int>& arr) {

    if (arr.empty())
        return 0;

    int maxLength = 0;
    int currentLength = 0;
    int previousCount = -1;

    for (int num : arr) {

        int temp = num;
        int setBits = 0;

        while (temp > 0) {
            temp &= (temp - 1); // Remove the rightmost set bit
            setBits++;
        }

        if (setBits == previousCount) {
            currentLength++;
        } else {
            currentLength = 1;
            previousCount = setBits;
        }

        if (currentLength > maxLength)
            maxLength = currentLength;
    }

    return maxLength;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {

        vector<int> arr(n);

        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }

        cout << longestEqualSetBits(arr) << "\\n";
    }

    return 0;
}
`
},
'csb-h1': {

    python: `def largest_power_of_2(n):
    power = 0
    while (1 << (power + 1)) <= n:
        power += 1
    return power

def total_set_bits(n):
    if n == 0:
        return 0

    x = largest_power_of_2(n)

    bits_up_to_2x = x * (1 << (x - 1)) if x != 0 else 0
    msb_bits = n - (1 << x) + 1
    remaining = n - (1 << x)

    return bits_up_to_2x + msb_bits + total_set_bits(remaining)

n = int(input())
print(total_set_bits(n))
`,

    java: `import java.util.*;

public class Solution {

    public static int largestPowerOf2(int n) {
        int power = 0;

        while ((1 << (power + 1)) <= n) {
            power++;
        }

        return power;
    }

    public static int totalSetBits(int n) {

        if (n == 0)
            return 0;

        int x = largestPowerOf2(n);

        int bitsUpTo2x = (x == 0) ? 0 : x * (1 << (x - 1));
        int msbBits = n - (1 << x) + 1;
        int remaining = n - (1 << x);

        return bitsUpTo2x + msbBits + totalSetBits(remaining);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int n = sc.nextInt();

            System.out.println(totalSetBits(n));
        }
    }
}
`,

    c: `#include <stdio.h>

int largestPowerOf2(int n) {

    int power = 0;

    while ((1 << (power + 1)) <= n) {
        power++;
    }

    return power;
}

int totalSetBits(int n) {

    if (n == 0)
        return 0;

    int x = largestPowerOf2(n);

    int bitsUpTo2x = (x == 0) ? 0 : x * (1 << (x - 1));
    int msbBits = n - (1 << x) + 1;
    int remaining = n - (1 << x);

    return bitsUpTo2x + msbBits + totalSetBits(remaining);
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    printf("%d\\n", totalSetBits(n));

    return 0;
}
`,

    cpp: `#include <iostream>

using namespace std;

int largestPowerOf2(int n) {

    int power = 0;

    while ((1 << (power + 1)) <= n) {
        power++;
    }

    return power;
}

int totalSetBits(int n) {

    if (n == 0)
        return 0;

    int x = largestPowerOf2(n);

    int bitsUpTo2x = (x == 0) ? 0 : x * (1 << (x - 1));
    int msbBits = n - (1 << x) + 1;
    int remaining = n - (1 << x);

    return bitsUpTo2x + msbBits + totalSetBits(remaining);
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {

        cout << totalSetBits(n) << "\\n";
    }

    return 0;
}
`
},
'csb-h2': {

    python: `def max_set_bits_in_range(l, r):
    max_set_bits = 0

    for num in range(l, r + 1):
        temp = num
        count = 0

        while temp > 0:
            temp &= (temp - 1)  # Remove the rightmost set bit
            count += 1

        if count > max_set_bits:
            max_set_bits = count

    return max_set_bits

l = int(input())
r = int(input())

print(max_set_bits_in_range(l, r))
`,

    java: `import java.util.*;

public class Solution {

    public static int maxSetBitsInRange(int l, int r) {

        int maxSetBits = 0;

        for (int num = l; num <= r; num++) {

            int temp = num;
            int count = 0;

            while (temp > 0) {
                temp &= (temp - 1); // Remove the rightmost set bit
                count++;
            }

            if (count > maxSetBits) {
                maxSetBits = count;
            }
        }

        return maxSetBits;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int l = sc.nextInt();
            int r = sc.nextInt();

            System.out.println(maxSetBitsInRange(l, r));
        }
    }
}
`,

    c: `#include <stdio.h>

int maxSetBitsInRange(int l, int r) {

    int maxSetBits = 0;

    for (int num = l; num <= r; num++) {

        int temp = num;
        int count = 0;

        while (temp > 0) {
            temp &= (temp - 1); // Remove the rightmost set bit
            count++;
        }

        if (count > maxSetBits) {
            maxSetBits = count;
        }
    }

    return maxSetBits;
}

int main() {

    int l, r;

    if (scanf("%d %d", &l, &r) != 2)
        return 0;

    printf("%d\\n", maxSetBitsInRange(l, r));

    return 0;
}
`,

    cpp: `#include <iostream>

using namespace std;

int maxSetBitsInRange(int l, int r) {

    int maxSetBits = 0;

    for (int num = l; num <= r; num++) {

        int temp = num;
        int count = 0;

        while (temp > 0) {
            temp &= (temp - 1); // Remove the rightmost set bit
            count++;
        }

        if (count > maxSetBits) {
            maxSetBits = count;
        }
    }

    return maxSetBits;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int l, r;

    if (cin >> l >> r) {

        cout << maxSetBitsInRange(l, r) << "\\n";
    }

    return 0;
}
`
},
'csb-h3': {

    python: `def count_numbers_with_k_set_bits(n, k):
    comb = [[0] * 33 for _ in range(33)]

    for i in range(33):
        comb[i][0] = 1
        comb[i][i] = 1

    for i in range(2, 33):
        for j in range(1, i):
            comb[i][j] = comb[i - 1][j - 1] + comb[i - 1][j]

    answer = 0
    remaining = k

    for bit in range(31, -1, -1):
        if (n >> bit) & 1:
            if remaining >= 0:
                answer += comb[bit][remaining]

            remaining -= 1

            if remaining < 0:
                break

    if remaining == 0:
        answer += 1

    return answer

n = int(input())
k = int(input())

print(count_numbers_with_k_set_bits(n, k))
`,

    java: `import java.util.*;

public class Solution {

    public static int countNumbersWithKSetBits(int n, int k) {

        int[][] comb = new int[33][33];

        for (int i = 0; i <= 32; i++) {
            comb[i][0] = 1;
            comb[i][i] = 1;
        }

        for (int i = 2; i <= 32; i++) {
            for (int j = 1; j < i; j++) {
                comb[i][j] = comb[i - 1][j - 1] + comb[i - 1][j];
            }
        }

        int answer = 0;
        int remaining = k;

        for (int bit = 31; bit >= 0; bit--) {

            if (((n >> bit) & 1) == 1) {

                if (remaining >= 0)
                    answer += comb[bit][remaining];

                remaining--;

                if (remaining < 0)
                    break;
            }
        }

        if (remaining == 0)
            answer++;

        return answer;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int n = sc.nextInt();
            int k = sc.nextInt();

            System.out.println(countNumbersWithKSetBits(n, k));
        }
    }
}
`,

    c: `#include <stdio.h>

int countNumbersWithKSetBits(int n, int k) {

    int comb[33][33] = {0};

    for (int i = 0; i <= 32; i++) {
        comb[i][0] = 1;
        comb[i][i] = 1;
    }

    for (int i = 2; i <= 32; i++) {
        for (int j = 1; j < i; j++) {
            comb[i][j] = comb[i - 1][j - 1] + comb[i - 1][j];
        }
    }

    int answer = 0;
    int remaining = k;

    for (int bit = 31; bit >= 0; bit--) {

        if ((n >> bit) & 1) {

            if (remaining >= 0)
                answer += comb[bit][remaining];

            remaining--;

            if (remaining < 0)
                break;
        }
    }

    if (remaining == 0)
        answer++;

    return answer;
}

int main() {

    int n, k;

    if (scanf("%d %d", &n, &k) != 2)
        return 0;

    printf("%d\\n", countNumbersWithKSetBits(n, k));

    return 0;
}
`,

    cpp: `#include <iostream>

using namespace std;

int countNumbersWithKSetBits(int n, int k) {

    int comb[33][33] = {};

    for (int i = 0; i <= 32; i++) {
        comb[i][0] = 1;
        comb[i][i] = 1;
    }

    for (int i = 2; i <= 32; i++) {
        for (int j = 1; j < i; j++) {
            comb[i][j] = comb[i - 1][j - 1] + comb[i - 1][j];
        }
    }

    int answer = 0;
    int remaining = k;

    for (int bit = 31; bit >= 0; bit--) {

        if ((n >> bit) & 1) {

            if (remaining >= 0)
                answer += comb[bit][remaining];

            remaining--;

            if (remaining < 0)
                break;
        }
    }

    if (remaining == 0)
        answer++;

    return answer;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, k;

    if (cin >> n >> k) {

        cout << countNumbersWithKSetBits(n, k) << "\\n";
    }

    return 0;
}
`
},
'csb-h4': {

    python: `def smallest_number_with_k_set_bits(n, k):
    LIMIT = (1 << 31) - 1

    while n <= LIMIT:
        temp = n
        count = 0

        while temp > 0:
            temp &= (temp - 1)  # Remove the rightmost set bit
            count += 1

        if count == k:
            return n

        n += 1

    return -1

n = int(input())
k = int(input())

print(smallest_number_with_k_set_bits(n, k))
`,

    java: `import java.util.*;

public class Solution {

    public static int smallestNumberWithKSetBits(int n, int k) {

        final int LIMIT = Integer.MAX_VALUE;

        while (n <= LIMIT) {

            int temp = n;
            int count = 0;

            while (temp > 0) {
                temp &= (temp - 1); // Remove the rightmost set bit
                count++;
            }

            if (count == k)
                return n;

            if (n == LIMIT)
                break;

            n++;
        }

        return -1;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int n = sc.nextInt();
            int k = sc.nextInt();

            System.out.println(smallestNumberWithKSetBits(n, k));
        }
    }
}
`,

    c: `#include <stdio.h>
#include <limits.h>

int smallestNumberWithKSetBits(int n, int k) {

    while (n <= INT_MAX) {

        int temp = n;
        int count = 0;

        while (temp > 0) {
            temp &= (temp - 1); // Remove the rightmost set bit
            count++;
        }

        if (count == k)
            return n;

        if (n == INT_MAX)
            break;

        n++;
    }

    return -1;
}

int main() {

    int n, k;

    if (scanf("%d %d", &n, &k) != 2)
        return 0;

    printf("%d\\n", smallestNumberWithKSetBits(n, k));

    return 0;
}
`,

    cpp: `#include <iostream>
#include <climits>

using namespace std;

int smallestNumberWithKSetBits(int n, int k) {

    while (n <= INT_MAX) {

        int temp = n;
        int count = 0;

        while (temp > 0) {
            temp &= (temp - 1); // Remove the rightmost set bit
            count++;
        }

        if (count == k)
            return n;

        if (n == INT_MAX)
            break;

        n++;
    }

    return -1;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, k;

    if (cin >> n >> k) {

        cout << smallestNumberWithKSetBits(n, k) << "\\n";
    }

    return 0;
}
`
},
'csb-h5': {

    python: `def maximum_set_bit_sum(arr):
    total = 0

    for num in arr:
        temp = num

        while temp > 0:
            temp &= (temp - 1)  # Remove the rightmost set bit
            total += 1

    return total

n = int(input())
arr = list(map(int, input().split()))

print(maximum_set_bit_sum(arr))
`,

    java: `import java.util.*;

public class Solution {

    public static int maximumSetBitSum(int[] arr) {

        int total = 0;

        for (int num : arr) {

            int temp = num;

            while (temp > 0) {
                temp &= (temp - 1); // Remove the rightmost set bit
                total++;
            }
        }

        return total;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int n = sc.nextInt();
            int[] arr = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }

            System.out.println(maximumSetBitSum(arr));
        }
    }
}
`,

    c: `#include <stdio.h>
#include <stdlib.h>

int maximumSetBitSum(int* arr, int size) {

    int total = 0;

    for (int i = 0; i < size; i++) {

        int temp = arr[i];

        while (temp > 0) {
            temp &= (temp - 1); // Remove the rightmost set bit
            total++;
        }
    }

    return total;
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* arr = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("%d\\n", maximumSetBitSum(arr, n));

    free(arr);

    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

int maximumSetBitSum(vector<int>& arr) {

    int total = 0;

    for (int num : arr) {

        int temp = num;

        while (temp > 0) {
            temp &= (temp - 1); // Remove the rightmost set bit
            total++;
        }
    }

    return total;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {

        vector<int> arr(n);

        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }

        cout << maximumSetBitSum(arr) << "\\n";
    }

    return 0;
}
`
},


};