export const BNScodeSnippets = {
    c: `#include <stdio.h>
#include <stdbool.h>

#define N 4

bool isSafe(int board[N][N], int row, int col) {
    for (int i = 0; i < col; i++)
        if (board[row][i]) return false;

    for (int i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i][j]) return false;

    for (int i = row, j = col; i < N && j >= 0; i++, j--)
        if (board[i][j]) return false;

    return true;
}

bool solveNQueens(int board[N][N], int col) {
    if (col >= N) return true;

    for (int i = 0; i < N; i++) {
        if (isSafe(board, i, col)) {
            board[i][col] = 1;
            if (solveNQueens(board, col + 1)) return true;
            board[i][col] = 0;
        }
    }
    return false;
}

int main() {
    int board[N][N] = {{0, 0, 0, 0},
                       {0, 0, 0, 0},
                       {0, 0, 0, 0},
                       {0, 0, 0, 0}};

    if (solveNQueens(board, 0)) {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++)
                printf("%d ", board[i][j]);
            printf("\\n");
        }
    } else {
        printf("No solution");
    }
    return 0;
}
`,

    cpp: `#include <iostream>
using namespace std;

#define N 4

bool isSafe(bool board[N][N], int row, int col) {
    for (int i = 0; i < col; i++)
        if (board[row][i]) return false;

    for (int i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i][j]) return false;

    for (int i = row, j = col; i < N && j >= 0; i++, j--)
        if (board[i][j]) return false;

    return true;
}

bool solveNQueens(bool board[N][N], int col) {
    if (col >= N) return true;

    for (int i = 0; i < N; i++) {
        if (isSafe(board, i, col)) {
            board[i][col] = true;
            if (solveNQueens(board, col + 1)) return true;
            board[i][col] = false;
        }
    }
    return false;
}

int main() {
    bool board[N][N] = { {false} };

    if (solveNQueens(board, 0)) {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++)
                cout << board[i][j] << " ";
            cout << endl;
        }
    }
    return 0;
}
`,

    python: `def is_safe(board, row, col):
    for i in range(col):
        if board[row][i]:
            return False

    i, j = row, col
    while i >= 0 and j >= 0:
        if board[i][j]:
            return False
        i -= 1
        j -= 1

    i, j = row, col
    while i < len(board) and j >= 0:
        if board[i][j]:
            return False
        i += 1
        j -= 1

    return True

def solve_n_queens(board, col):
    if col >= len(board):
        return True

    for i in range(len(board)):
        if is_safe(board, i, col):
            board[i][col] = 1
            if solve_n_queens(board, col + 1):
                return True
            board[i][col] = 0
    return False

n = 4
board = [[0] * n for _ in range(n)]

if solve_n_queens(board, 0):
    for row in board:
        print(row)
`,

    java: `public class NQueens {
    static int N = 4;

    static boolean isSafe(int[][] board, int row, int col) {
        for (int i = 0; i < col; i++)
            if (board[row][i] == 1) return false;

        for (int i = row, j = col; i >= 0 && j >= 0; i--, j--)
            if (board[i][j] == 1) return false;

        for (int i = row, j = col; i < N && j >= 0; i++, j--)
            if (board[i][j] == 1) return false;

        return true;
    }

    static boolean solveNQueens(int[][] board, int col) {
        if (col >= N) return true;

        for (int i = 0; i < N; i++) {
            if (isSafe(board, i, col)) {
                board[i][col] = 1;
                if (solveNQueens(board, col + 1)) return true;
                board[i][col] = 0;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int[][] board = new int[N][N];

        if (solveNQueens(board, 0)) {
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < N; j++)
                    System.out.print(board[i][j] + " ");
                System.out.println();
            }
        }
    }
}
`
};