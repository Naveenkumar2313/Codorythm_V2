export const singleNumberCodeSnippets = {
    c: `#include <stdio.h>

int findSingleNumber(int arr[], int size) {
    int unique = 0;
    for (int i = 0; i < size; i++) {
        unique ^= arr[i];
    }
    return unique;
}

int main() {
    int arr[] = {4, 1, 2, 1, 2};
    int size = sizeof(arr) / sizeof(arr[0]);
    printf("The unique element is %d\\n", findSingleNumber(arr, size));
    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

int findSingleNumber(const vector<int>& arr) {
    int unique = 0;
    for (int num : arr) {
        unique ^= num;
    }
    return unique;
}

int main() {
    vector<int> arr = {4, 1, 2, 1, 2};
    cout << "The unique element is " << findSingleNumber(arr) << endl;
    return 0;
}
`,

    python: `def find_single_number(arr):
    unique = 0
    for num in arr:
        unique ^= num
    return unique

if __name__ == "__main__":
    arr = [4, 1, 2, 1, 2]
    print(f"The unique element is {find_single_number(arr)}")
`,

    java: `public class SingleNumberExample {
    public static int findSingleNumber(int[] arr) {
        int unique = 0;
        for (int num : arr) {
            unique ^= num;
        }
        return unique;
    }

    public static void main(String[] args) {
        int[] arr = {4, 1, 2, 1, 2};
        System.out.println("The unique element is " + findSingleNumber(arr));
    }
}
`
};
