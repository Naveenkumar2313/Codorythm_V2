export const BSAsolutions = {
  'bsoa-e1': {

    python: `def integer_square_root(n):
    low = 0
    high = n
    answer = 0

    while low <= high:
        mid = low + (high - low) // 2

        if mid * mid <= n:
            answer = mid
            low = mid + 1
        else:
            high = mid - 1

    return answer

n = int(input())
print(integer_square_root(n))
`,

    java: `import java.util.*;

public class Solution {

    public static int integerSquareRoot(int n) {

        int low = 0;
        int high = n;
        int answer = 0;

        while (low <= high) {

            int mid = low + (high - low) / 2;

            if ((long) mid * mid <= n) {
                answer = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return answer;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int n = sc.nextInt();

            System.out.println(integerSquareRoot(n));
        }
    }
}
`,

    c: `#include <stdio.h>

int integerSquareRoot(int n) {

    int low = 0;
    int high = n;
    int answer = 0;

    while (low <= high) {

        int mid = low + (high - low) / 2;

        if ((long long)mid * mid <= n) {
            answer = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return answer;
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    printf("%d\\n", integerSquareRoot(n));

    return 0;
}
`,

    cpp: `#include <iostream>

using namespace std;

int integerSquareRoot(int n) {

    int low = 0;
    int high = n;
    int answer = 0;

    while (low <= high) {

        int mid = low + (high - low) / 2;

        if (1LL * mid * mid <= n) {
            answer = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return answer;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {

        cout << integerSquareRoot(n) << "\\n";
    }

    return 0;
}
`
},
}