// src/data/codeSnippets.js
export const LRCRcodeSnippets = {
    c: `#include <stdio.h>
#include <string.h>

int characterReplacement(char* s, int k) {
    int count[26] = {0};
    int left = 0, maxCount = 0, maxLen = 0;
    for (int right = 0; s[right] != '\\0'; right++) {
        count[s[right] - 'A']++;
        if (count[s[right] - 'A'] > maxCount)
            maxCount = count[s[right] - 'A'];
        while ((right - left + 1) - maxCount > k) {
            count[s[left] - 'A']--;
            left++;
        }
        if (right - left + 1 > maxLen)
            maxLen = right - left + 1;
    }
    return maxLen;
}

int main() {
    char s[] = "AABABBA";
    int k = 1;
    printf("Longest repeating replacement length: %d\\n", characterReplacement(s, k));
    return 0;
}
`,

    cpp: `#include <iostream>
#include <string>
using namespace std;

int characterReplacement(string s, int k) {
    int count[26] = {0};
    int left = 0, maxCount = 0, maxLen = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        count[s[right] - 'A']++;
        maxCount = max(maxCount, count[s[right] - 'A']);
        while ((right - left + 1) - maxCount > k) {
            count[s[left] - 'A']--;
            left++;
        }
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    string s = "AABABBA";
    int k = 1;
    cout << "Longest repeating replacement length: " << characterReplacement(s, k) << endl;
    return 0;
}
`,

    python: `def character_replacement(s, k):
    count = {}
    left = 0
    max_count = 0
    max_len = 0
    for right in range(len(s)):
        count[s[right]] = count.get(s[right], 0) + 1
        max_count = max(max_count, count[s[right]])
        while (right - left + 1) - max_count > k:
            count[s[left]] -= 1
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len

s = "AABABBA"
k = 1
print(f"Longest repeating replacement length: {character_replacement(s, k)}")
`,

    java: `import java.util.*;

public class LongestRepeatingReplacement {
    public static int characterReplacement(String s, int k) {
        int[] count = new int[26];
        int left = 0, maxCount = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            count[s.charAt(right) - 'A']++;
            maxCount = Math.max(maxCount, count[s.charAt(right) - 'A']);
            while ((right - left + 1) - maxCount > k) {
                count[s.charAt(left) - 'A']--;
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        String s = "AABABBA";
        int k = 1;
        System.out.println("Longest repeating replacement length: " + characterReplacement(s, k));
    }
}
`
};
