// src/data/codeSnippets.js
export const MWScodeSnippets = {
    c: `#include <stdio.h>
#include <string.h>
#include <limits.h>

void minWindow(char* s, char* t, char* result) {
    int need[128] = {0}, window[128] = {0};
    int tLen = strlen(t), sLen = strlen(s);
    for (int i = 0; i < tLen; i++) need[(int)t[i]]++;
    int have = 0, required = 0;
    for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
    int left = 0, minLen = INT_MAX, start = 0;
    for (int right = 0; right < sLen; right++) {
        char c = s[right];
        window[(int)c]++;
        if (need[(int)c] > 0 && window[(int)c] == need[(int)c]) have++;
        while (have == required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }
            window[(int)s[left]]--;
            if (need[(int)s[left]] > 0 && window[(int)s[left]] < need[(int)s[left]]) have--;
            left++;
        }
    }
    if (minLen == INT_MAX) result[0] = '\\0';
    else { strncpy(result, s + start, minLen); result[minLen] = '\\0'; }
}

int main() {
    char s[] = "ADOBECODEBANC";
    char t[] = "ABC";
    char result[100001];
    minWindow(s, t, result);
    printf("Minimum window substring: %s\\n", result);
    return 0;
}
`,

    cpp: `#include <iostream>
#include <string>
#include <unordered_map>
#include <climits>
using namespace std;

string minWindow(string s, string t) {
    unordered_map<char, int> need, window;
    for (char c : t) need[c]++;
    int have = 0, required = need.size();
    int left = 0, minLen = INT_MAX, start = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        window[s[right]]++;
        if (need.count(s[right]) && window[s[right]] == need[s[right]]) have++;
        while (have == required) {
            if (right - left + 1 < minLen) { minLen = right - left + 1; start = left; }
            window[s[left]]--;
            if (need.count(s[left]) && window[s[left]] < need[s[left]]) have--;
            left++;
        }
    }
    return minLen == INT_MAX ? "" : s.substr(start, minLen);
}

int main() {
    string s = "ADOBECODEBANC", t = "ABC";
    cout << "Minimum window substring: " << minWindow(s, t) << endl;
    return 0;
}
`,

    python: `def min_window(s, t):
    from collections import Counter
    need = Counter(t)
    window = {}
    have, required = 0, len(need)
    left = 0
    min_len = float('inf')
    start = 0
    for right, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        if c in need and window[c] == need[c]:
            have += 1
        while have == required:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                start = left
            window[s[left]] -= 1
            if s[left] in need and window[s[left]] < need[s[left]]:
                have -= 1
            left += 1
    return s[start:start + min_len] if min_len != float('inf') else ""

s = "ADOBECODEBANC"
t = "ABC"
print(f"Minimum window substring: {min_window(s, t)}")
`,

    java: `import java.util.*;

public class MinimumWindowSubstring {
    public static String minWindow(String s, String t) {
        Map<Character, Integer> need = new HashMap<>();
        for (char c : t.toCharArray()) need.put(c, need.getOrDefault(c, 0) + 1);
        int have = 0, required = need.size();
        Map<Character, Integer> window = new HashMap<>();
        int left = 0, minLen = Integer.MAX_VALUE, start = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            window.put(c, window.getOrDefault(c, 0) + 1);
            if (need.containsKey(c) && window.get(c).equals(need.get(c))) have++;
            while (have == required) {
                if (right - left + 1 < minLen) { minLen = right - left + 1; start = left; }
                char lc = s.charAt(left);
                window.put(lc, window.get(lc) - 1);
                if (need.containsKey(lc) && window.get(lc) < need.get(lc)) have--;
                left++;
            }
        }
        return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
    }

    public static void main(String[] args) {
        String s = "ADOBECODEBANC", t = "ABC";
        System.out.println("Minimum window substring: " + minWindow(s, t));
    }
}
`
};
