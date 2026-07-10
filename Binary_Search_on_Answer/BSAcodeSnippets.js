export const BSAcodeSnippets = {

    python: `def integer_square_root(n):
    low, high = 0, n
    answer = 0

    while low <= high:
        mid = low + (high - low) // 2

        if mid * mid <= n:
            answer = mid
            low = mid + 1
        else:
            high = mid - 1

    return answer

n = int(input("Enter a number: "))
print("Integer Square Root:", integer_square_root(n))
`,

    java: `import java.util.*;

public class BinarySearchOnAnswerExample {

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

        System.out.print("Enter a number: ");

        int n = sc.nextInt();

        System.out.println("Integer Square Root: " + integerSquareRoot(n));
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

    printf("Enter a number: ");
    scanf("%d", &n);

    printf("Integer Square Root: %d\\n", integerSquareRoot(n));

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

    int n;

    cout << "Enter a number: ";
    cin >> n;

    cout << "Integer Square Root: " << integerSquareRoot(n) << endl;

    return 0;
}
`
};