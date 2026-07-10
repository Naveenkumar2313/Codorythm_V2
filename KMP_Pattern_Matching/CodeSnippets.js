const codeSnippets = {
    python: `def build_lps(pattern):
    lps = [0] * len(pattern)
    length = 0
    index = 1

    while index < len(pattern):
        if pattern[index] == pattern[length]:
            length += 1
            lps[index] = length
            index += 1
        elif length != 0:
            length = lps[length - 1]
        else:
            lps[index] = 0
            index += 1

    return lps


def kmp_search(text, pattern):
    if not pattern:
        return []

    lps = build_lps(pattern)
    matches = []
    text_index = 0
    pattern_index = 0

    while text_index < len(text):
        if text[text_index] == pattern[pattern_index]:
            text_index += 1
            pattern_index += 1

        if pattern_index == len(pattern):
            matches.append(text_index - pattern_index)
            pattern_index = lps[pattern_index - 1]
        elif text_index < len(text) and text[text_index] != pattern[pattern_index]:
            if pattern_index != 0:
                pattern_index = lps[pattern_index - 1]
            else:
                text_index += 1

    return matches


text = "ababcabcabababd"
pattern = "ababd"
result = kmp_search(text, pattern)

print("Pattern found at indices:", result)
`,

    java: `import java.util.ArrayList;
import java.util.List;

public class KMPPatternMatchingExample {

    public static int[] buildLps(String pattern) {
        int[] lps = new int[pattern.length()];
        int length = 0;
        int index = 1;

        while (index < pattern.length()) {
            if (pattern.charAt(index) == pattern.charAt(length)) {
                length++;
                lps[index] = length;
                index++;
            } else if (length != 0) {
                length = lps[length - 1];
            } else {
                lps[index] = 0;
                index++;
            }
        }

        return lps;
    }

    public static List<Integer> kmpSearch(String text, String pattern) {
        List<Integer> matches = new ArrayList<>();

        if (pattern.length() == 0) {
            return matches;
        }

        int[] lps = buildLps(pattern);
        int textIndex = 0;
        int patternIndex = 0;

        while (textIndex < text.length()) {
            if (text.charAt(textIndex) == pattern.charAt(patternIndex)) {
                textIndex++;
                patternIndex++;
            }

            if (patternIndex == pattern.length()) {
                matches.add(textIndex - patternIndex);
                patternIndex = lps[patternIndex - 1];
            } else if (textIndex < text.length() && text.charAt(textIndex) != pattern.charAt(patternIndex)) {
                if (patternIndex != 0) {
                    patternIndex = lps[patternIndex - 1];
                } else {
                    textIndex++;
                }
            }
        }

        return matches;
    }

    public static void main(String[] args) {
        String text = "ababcabcabababd";
        String pattern = "ababd";
        List<Integer> result = kmpSearch(text, pattern);

        System.out.println("Pattern found at indices: " + result);
    }
}
`,

    c: `#include <stdio.h>
#include <string.h>

void buildLps(char pattern[], int patternLength, int lps[]) {
    int length = 0;
    int index = 1;

    lps[0] = 0;

    while (index < patternLength) {
        if (pattern[index] == pattern[length]) {
            length++;
            lps[index] = length;
            index++;
        } else if (length != 0) {
            length = lps[length - 1];
        } else {
            lps[index] = 0;
            index++;
        }
    }
}

int kmpSearch(char text[], char pattern[], int matches[]) {
    int textLength = strlen(text);
    int patternLength = strlen(pattern);

    if (patternLength == 0) {
        return 0;
    }

    int lps[100];
    buildLps(pattern, patternLength, lps);

    int textIndex = 0;
    int patternIndex = 0;
    int matchCount = 0;

    while (textIndex < textLength) {
        if (text[textIndex] == pattern[patternIndex]) {
            textIndex++;
            patternIndex++;
        }

        if (patternIndex == patternLength) {
            matches[matchCount] = textIndex - patternIndex;
            matchCount++;
            patternIndex = lps[patternIndex - 1];
        } else if (textIndex < textLength && text[textIndex] != pattern[patternIndex]) {
            if (patternIndex != 0) {
                patternIndex = lps[patternIndex - 1];
            } else {
                textIndex++;
            }
        }
    }

    return matchCount;
}

int main() {
    char text[] = "ababcabcabababd";
    char pattern[] = "ababd";
    int matches[100];

    int matchCount = kmpSearch(text, pattern, matches);

    printf("Pattern found at indices:");
    for (int index = 0; index < matchCount; index++) {
        printf(" %d", matches[index]);
    }
    printf("\\n");

    return 0;
}
`,

    cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

vector<int> buildLps(const string& pattern) {
    vector<int> lps(pattern.length(), 0);
    int length = 0;
    int index = 1;

    while (index < pattern.length()) {
        if (pattern[index] == pattern[length]) {
            length++;
            lps[index] = length;
            index++;
        } else if (length != 0) {
            length = lps[length - 1];
        } else {
            lps[index] = 0;
            index++;
        }
    }

    return lps;
}

vector<int> kmpSearch(const string& text, const string& pattern) {
    vector<int> matches;

    if (pattern.empty()) {
        return matches;
    }

    vector<int> lps = buildLps(pattern);
    int textIndex = 0;
    int patternIndex = 0;

    while (textIndex < text.length()) {
        if (text[textIndex] == pattern[patternIndex]) {
            textIndex++;
            patternIndex++;
        }

        if (patternIndex == pattern.length()) {
            matches.push_back(textIndex - patternIndex);
            patternIndex = lps[patternIndex - 1];
        } else if (textIndex < text.length() && text[textIndex] != pattern[patternIndex]) {
            if (patternIndex != 0) {
                patternIndex = lps[patternIndex - 1];
            } else {
                textIndex++;
            }
        }
    }

    return matches;
}

int main() {
    string text = "ababcabcabababd";
    string pattern = "ababd";
    vector<int> result = kmpSearch(text, pattern);

    cout << "Pattern found at indices:";
    for (int index : result) {
        cout << " " << index;
    }
    cout << endl;

    return 0;
}
`
};

export default codeSnippets;
