// src/data/codeSnippets.js
export const LSWRCcodeSnippets = {
    c: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
    int map[256];
    memset(map, -1, sizeof(map));
    int left = 0, maxLen = 0;
    for (int right = 0; s[right] != '\\0'; right++) {
        if (map[(unsigned char)s[right]] >= left)
            left = map[(unsigned char)s[right]] + 1;
        map[(unsigned char)s[right]] = right;
        if (right - left + 1 > maxLen)
            maxLen = right - left + 1;
    }
    return maxLen;
}

int main() {
    char s[] = "abcabcbb";
    printf("Longest substring length: %d\\n", lengthOfLongestSubstring(s));
    return 0;
}
`,

    cpp: `#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> map;
    int left = 0, maxLen = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        if (map.count(s[right]) && map[s[right]] >= left)
            left = map[s[right]] + 1;
        map[s[right]] = right;
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    string s = "abcabcbb";
    cout << "Longest substring length: " << lengthOfLongestSubstring(s) << endl;
    return 0;
}
`,

    python: `def length_of_longest_substring(s):
    char_map = {}
    left = 0
    max_len = 0
    for right, ch in enumerate(s):
        if ch in char_map and char_map[ch] >= left:
            left = char_map[ch] + 1
        char_map[ch] = right
        max_len = max(max_len, right - left + 1)
    return max_len

s = "abcabcbb"
print(f"Longest substring length: {length_of_longest_substring(s)}")
`,

    java: `import java.util.*;

public class LongestSubstringExample {
    public static int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int left = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            char ch = s.charAt(right);
            if (map.containsKey(ch) && map.get(ch) >= left)
                left = map.get(ch) + 1;
            map.put(ch, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        String s = "abcabcbb";
        System.out.println("Longest substring length: " + lengthOfLongestSubstring(s));
    }
}
`
};
