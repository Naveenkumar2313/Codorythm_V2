// src/data/codeSnippets.js
export const GPcodeSnippets = {
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void generate(char* current, int open, int close, int n, int pos) {
    if (pos == 2 * n) {
        current[pos] = '\\0';
        printf("%s\\n", current);
        return;
    }
    if (open < n) {
        current[pos] = '(';
        generate(current, open + 1, close, n, pos + 1);
    }
    if (close < open) {
        current[pos] = ')';
        generate(current, open, close + 1, n, pos + 1);
    }
}

int main() {
    int n = 3;
    char current[2 * n + 1];
    printf("All valid parentheses for n = %d:\\n", n);
    generate(current, 0, 0, n, 0);
    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

void generate(string current, int open, int close, int n, vector<string>& result) {
    if ((int)current.size() == 2 * n) {
        result.push_back(current);
        return;
    }
    if (open < n)
        generate(current + "(", open + 1, close, n, result);
    if (close < open)
        generate(current + ")", open, close + 1, n, result);
}

int main() {
    int n = 3;
    vector<string> result;
    generate("", 0, 0, n, result);
    cout << "All valid parentheses for n = " << n << ":" << endl;
    for (const string& s : result)
        cout << s << endl;
    return 0;
}
`,

    python: `def generate_parentheses(n):
    result = []

    def backtrack(current, open, close):
        if len(current) == 2 * n:
            result.append(current)
            return
        if open < n:
            backtrack(current + "(", open + 1, close)
        if close < open:
            backtrack(current + ")", open, close + 1)

    backtrack("", 0, 0)
    return result

n = 3
combinations = generate_parentheses(n)
print(f"All valid parentheses for n = {n}:")
for combo in combinations:
    print(combo)
`,

    java: `import java.util.*;

public class GenerateParenthesesExample {
    public static void generate(String current, int open, int close, int n, List<String> result) {
        if (current.length() == 2 * n) {
            result.add(current);
            return;
        }
        if (open < n)
            generate(current + "(", open + 1, close, n, result);
        if (close < open)
            generate(current + ")", open, close + 1, n, result);
    }

    public static void main(String[] args) {
        int n = 3;
        List<String> result = new ArrayList<>();
        generate("", 0, 0, n, result);
        System.out.println("All valid parentheses for n = " + n + ":");
        for (String s : result)
            System.out.println(s);
    }
}
`
};
