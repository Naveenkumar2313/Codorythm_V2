// src/data/codeSnippets.js

export const countSetBitsCodeSnippets = {

    c: `#include <stdio.h>

int countSetBits(int n) {
    int count = 0;

    while (n > 0) {
        n = n & (n - 1);
        count++;
    }

    return count;
}

int main() {
    int number = 13;

    printf("Number of set bits: %d \n", countSetBits(number));

    return 0;
}
`,

    cpp: `#include <iostream>
using namespace std;

int countSetBits(int n) {
    int count = 0;

    while (n > 0) {
        n = n & (n - 1);
        count++;
    }

    return count;
}

int main() {
    int number = 13;

    cout << "Number of set bits: " << countSetBits(number) << endl;

    return 0;
}
`,

    python: `def count_set_bits(n):
    count = 0

    while n > 0:
        n = n & (n - 1)
        count += 1

    return count

number = 13

print("Number of set bits:", count_set_bits(number))
`,

    java: `public class CountSetBits {

    public static int countSetBits(int n) {
        int count = 0;

        while (n > 0) {
            n = n & (n - 1);
            count++;
        }

        return count;
    }

    public static void main(String[] args) {

        int number = 13;

        System.out.println("Number of set bits: " + countSetBits(number));
    }
}
`
};