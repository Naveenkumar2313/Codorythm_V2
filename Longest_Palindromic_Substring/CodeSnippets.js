const codeSnippets = {
    python: `def expand_around_center(text, left, right):
    while left >= 0 and right < len(text) and text[left] == text[right]:
        left -= 1
        right += 1

    return left + 1, right - left - 1


def longest_palindromic_substring(text):
    if not text:
        return ""

    best_start = 0
    best_length = 1

    for center in range(len(text)):
        odd_start, odd_length = expand_around_center(text, center, center)
        even_start, even_length = expand_around_center(text, center, center + 1)

        if odd_length > best_length:
            best_start = odd_start
            best_length = odd_length

        if even_length > best_length:
            best_start = even_start
            best_length = even_length

    return text[best_start:best_start + best_length]


text = "babad"
result = longest_palindromic_substring(text)

print("Longest Palindromic Substring:", result)
`,

    java: `public class LongestPalindromicSubstringExample {

    public static int[] expandAroundCenter(String text, int left, int right) {
        while (left >= 0 && right < text.length() && text.charAt(left) == text.charAt(right)) {
            left--;
            right++;
        }

        return new int[] {left + 1, right - left - 1};
    }

    public static String longestPalindromicSubstring(String text) {
        if (text.length() == 0) {
            return "";
        }

        int bestStart = 0;
        int bestLength = 1;

        for (int center = 0; center < text.length(); center++) {
            int[] odd = expandAroundCenter(text, center, center);
            int[] even = expandAroundCenter(text, center, center + 1);

            if (odd[1] > bestLength) {
                bestStart = odd[0];
                bestLength = odd[1];
            }

            if (even[1] > bestLength) {
                bestStart = even[0];
                bestLength = even[1];
            }
        }

        return text.substring(bestStart, bestStart + bestLength);
    }

    public static void main(String[] args) {
        String text = "babad";
        String result = longestPalindromicSubstring(text);

        System.out.println("Longest Palindromic Substring: " + result);
    }
}
`,

    c: `#include <stdio.h>
#include <string.h>

void expandAroundCenter(char text[], int length, int left, int right, int *start, int *palindromeLength) {
    while (left >= 0 && right < length && text[left] == text[right]) {
        left--;
        right++;
    }

    *start = left + 1;
    *palindromeLength = right - left - 1;
}

void longestPalindromicSubstring(char text[], char result[]) {
    int length = strlen(text);

    if (length == 0) {
        result[0] = '\\0';
        return;
    }

    int bestStart = 0;
    int bestLength = 1;

    for (int center = 0; center < length; center++) {
        int oddStart;
        int oddLength;
        int evenStart;
        int evenLength;

        expandAroundCenter(text, length, center, center, &oddStart, &oddLength);
        expandAroundCenter(text, length, center, center + 1, &evenStart, &evenLength);

        if (oddLength > bestLength) {
            bestStart = oddStart;
            bestLength = oddLength;
        }

        if (evenLength > bestLength) {
            bestStart = evenStart;
            bestLength = evenLength;
        }
    }

    strncpy(result, text + bestStart, bestLength);
    result[bestLength] = '\\0';
}

int main() {
    char text[] = "babad";
    char result[100];

    longestPalindromicSubstring(text, result);

    printf("Longest Palindromic Substring: %s\\n", result);

    return 0;
}
`,

    cpp: `#include <iostream>
#include <string>
using namespace std;

pair<int, int> expandAroundCenter(const string& text, int left, int right) {
    while (left >= 0 && right < text.length() && text[left] == text[right]) {
        left--;
        right++;
    }

    return {left + 1, right - left - 1};
}

string longestPalindromicSubstring(const string& text) {
    if (text.empty()) {
        return "";
    }

    int bestStart = 0;
    int bestLength = 1;

    for (int center = 0; center < text.length(); center++) {
        pair<int, int> odd = expandAroundCenter(text, center, center);
        pair<int, int> even = expandAroundCenter(text, center, center + 1);

        if (odd.second > bestLength) {
            bestStart = odd.first;
            bestLength = odd.second;
        }

        if (even.second > bestLength) {
            bestStart = even.first;
            bestLength = even.second;
        }
    }

    return text.substr(bestStart, bestLength);
}

int main() {
    string text = "babad";
    string result = longestPalindromicSubstring(text);

    cout << "Longest Palindromic Substring: " << result << endl;

    return 0;
}
`
};

export default codeSnippets;
