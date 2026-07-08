// src/data/codeSnippets.js
export const WSGcodeSnippets = {
    c: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

#define ROWS 3
#define COLS 4

bool dfs(char grid[ROWS][COLS], int r, int c, char *word, int idx) {
    if (idx == strlen(word)) return true;
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return false;
    if (grid[r][c] != word[idx]) return false;

    char temp = grid[r][c];
    grid[r][c] = '#';

    bool found = dfs(grid, r+1, c, word, idx+1) ||
                 dfs(grid, r-1, c, word, idx+1) ||
                 dfs(grid, r, c+1, word, idx+1) ||
                 dfs(grid, r, c-1, word, idx+1);

    grid[r][c] = temp;
    return found;
}

bool wordSearch(char grid[ROWS][COLS], char *word) {
    for (int r = 0; r < ROWS; r++)
        for (int c = 0; c < COLS; c++)
            if (dfs(grid, r, c, word, 0)) return true;
    return false;
}

int main() {
    char grid[ROWS][COLS] = {
        {'A','B','C','E'},
        {'S','F','C','S'},
        {'A','D','E','E'}
    };
    char word[] = "ABCCED";

    if (wordSearch(grid, word))
        printf("Word found\\n");
    else
        printf("Word not found\\n");

    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool dfs(vector<vector<char>>& grid, int r, int c, string& word, int idx) {
    if (idx == word.size()) return true;
    if (r < 0 || r >= grid.size() || c < 0 || c >= grid[0].size()) return false;
    if (grid[r][c] != word[idx]) return false;

    char temp = grid[r][c];
    grid[r][c] = '#';

    bool found = dfs(grid, r+1, c, word, idx+1) ||
                 dfs(grid, r-1, c, word, idx+1) ||
                 dfs(grid, r, c+1, word, idx+1) ||
                 dfs(grid, r, c-1, word, idx+1);

    grid[r][c] = temp;
    return found;
}

bool wordSearch(vector<vector<char>>& grid, string word) {
    for (int r = 0; r < grid.size(); r++)
        for (int c = 0; c < grid[0].size(); c++)
            if (dfs(grid, r, c, word, 0)) return true;
    return false;
}

int main() {
    vector<vector<char>> grid = {
        {'A','B','C','E'},
        {'S','F','C','S'},
        {'A','D','E','E'}
    };
    string word = "ABCCED";

    if (wordSearch(grid, word))
        cout << "Word found" << endl;
    else
        cout << "Word not found" << endl;

    return 0;
}
`,

    python: `def word_search(grid, word):
    rows, cols = len(grid), len(grid[0])

    def dfs(r, c, idx):
        if idx == len(word):
            return True
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return False
        if grid[r][c] != word[idx]:
            return False

        temp = grid[r][c]
        grid[r][c] = '#'

        found = (dfs(r+1, c, idx+1) or
                 dfs(r-1, c, idx+1) or
                 dfs(r, c+1, idx+1) or
                 dfs(r, c-1, idx+1))

        grid[r][c] = temp
        return found

    for r in range(rows):
        for c in range(cols):
            if dfs(r, c, 0):
                return True
    return False

grid = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
]
word = "ABCCED"
result = word_search(grid, word)

if result:
    print("Word found")
else:
    print("Word not found")
`,

    java: `import java.util.*;

public class WordSearchExample {
    static boolean dfs(char[][] grid, int r, int c, String word, int idx) {
        if (idx == word.length()) return true;
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return false;
        if (grid[r][c] != word.charAt(idx)) return false;

        char temp = grid[r][c];
        grid[r][c] = '#';

        boolean found = dfs(grid, r+1, c, word, idx+1) ||
                        dfs(grid, r-1, c, word, idx+1) ||
                        dfs(grid, r, c+1, word, idx+1) ||
                        dfs(grid, r, c-1, word, idx+1);

        grid[r][c] = temp;
        return found;
    }

    public static boolean wordSearch(char[][] grid, String word) {
        for (int r = 0; r < grid.length; r++)
            for (int c = 0; c < grid[0].length; c++)
                if (dfs(grid, r, c, word, 0)) return true;
        return false;
    }

    public static void main(String[] args) {
        char[][] grid = {
            {'A','B','C','E'},
            {'S','F','C','S'},
            {'A','D','E','E'}
        };
        String word = "ABCCED";

        if (wordSearch(grid, word))
            System.out.println("Word found");
        else
            System.out.println("Word not found");
    }
}
`
};
