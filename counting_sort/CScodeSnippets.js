export const CScodeSnippets = {
    c: `#include <stdio.h>

void countingSort(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++)
        if (arr[i] > max) max = arr[i];

    int count[max + 1];
    for (int i = 0; i <= max; i++) count[i] = 0;

    for (int i = 0; i < n; i++) count[arr[i]]++;

    int index = 0;
    for (int i = 0; i <= max; i++) {
        for (int j = 0; j < count[i]; j++)
            arr[index++] = i;
    }
}

int main() {
    int arr[] = {4, 2, 2, 8, 3, 3, 1};
    int n = sizeof(arr) / sizeof(arr[0]);
    countingSort(arr, n);

    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    return 0;
}
`,

    cpp: `#include <iostream>
using namespace std;

void countingSort(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++)
        if (arr[i] > max) max = arr[i];

    int* count = new int[max + 1];
    for (int i = 0; i <= max; i++) count[i] = 0;

    for (int i = 0; i < n; i++) count[arr[i]]++;

    int index = 0;
    for (int i = 0; i <= max; i++) {
        for (int j = 0; j < count[i]; j++)
            arr[index++] = i;
    }
}

int main() {
    int arr[] = {4, 2, 2, 8, 3, 3, 1};
    int n = sizeof(arr) / sizeof(arr[0]);
    countingSort(arr, n);

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    return 0;
}
`,

    python: `def counting_sort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)

    for num in arr:
        count[num] += 1

    sorted_arr = []
    for i in range(max_val + 1):
        sorted_arr.extend([i] * count[i])

    return sorted_arr

arr = [4, 2, 2, 8, 3, 3, 1]
print(counting_sort(arr))
`,

    java: `public class CountingSort {
    public static void countingSort(int[] arr) {
        int max = arr[0];
        for (int x : arr) if (x > max) max = x;

        int[] count = new int[max + 1];
        for (int x : arr) count[x]++;

        int index = 0;
        for (int i = 0; i <= max; i++) {
            while (count[i]-- > 0) {
                arr[index++] = i;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {4, 2, 2, 8, 3, 3, 1};
        countingSort(arr);
        for (int x : arr) System.out.print(x + " ");
    }
}
`
};