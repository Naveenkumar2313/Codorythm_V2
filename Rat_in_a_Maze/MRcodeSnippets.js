export const BNScodeSnippets = {
    c: `#include <stdio.h>
#include <stdbool.h>

#define N 4

bool isSafe(int maze[N][N], int x, int y) {
    return (x >= 0 && x < N && y >= 0 && y < N && maze[x][y] == 1);
}

bool solveMazeUtil(int maze[N][N], int x, int y, int sol[N][N]) {
    if (x == N - 1 && y == N - 1 && maze[x][y] == 1) {
        sol[x][y] = 1;
        return true;
    }

    if (isSafe(maze, x, y)) {
        sol[x][y] = 1;

        if (solveMazeUtil(maze, x + 1, y, sol)) return true;
        if (solveMazeUtil(maze, x, y + 1, sol)) return true;

        sol[x][y] = 0;
    }

    return false;
}

void printSolution(int sol[N][N]) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++)
            printf("%d ", sol[i][j]);
        printf("\\n");
    }
}

int main() {
    int maze[N][N] = {
        {1, 0, 0, 0},
        {1, 1, 0, 1},
        {0, 1, 0, 0},
        {1, 1, 1, 1}
    };

    int sol[N][N] = {{0, 0, 0, 0},
                     {0, 0, 0, 0},
                     {0, 0, 0, 0},
                     {0, 0, 0, 0}};

    if (solveMazeUtil(maze, 0, 0, sol))
        printSolution(sol);
    else
        printf("No path exists\\n");

    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

#define N 4

bool isSafe(vector<vector<int>>& maze, int x, int y) {
    return (x >= 0 && x < N && y >= 0 && y < N && maze[x][y] == 1);
}

bool solveMazeUtil(vector<vector<int>>& maze, int x, int y, vector<vector<int>>& sol) {
    if (x == N - 1 && y == N - 1 && maze[x][y] == 1) {
        sol[x][y] = 1;
        return true;
    }

    if (isSafe(maze, x, y)) {
        sol[x][y] = 1;

        if (solveMazeUtil(maze, x + 1, y, sol)) return true;
        if (solveMazeUtil(maze, x, y + 1, sol)) return true;

        sol[x][y] = 0;
    }

    return false;
}

int main() {
    vector<vector<int>> maze = {
        {1, 0, 0, 0},
        {1, 1, 0, 1},
        {0, 1, 0, 0},
        {1, 1, 1, 1}
    };

    vector<vector<int>> sol(N, vector<int>(N, 0));

    if (solveMazeUtil(maze, 0, 0, sol)) {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++)
                cout << sol[i][j] << " ";
            cout << endl;
        }
    } else {
        cout << "No path exists" << endl;
    }

    return 0;
}
`,

    python: `def is_safe(maze, x, y):
    return 0 <= x < len(maze) and 0 <= y < len(maze) and maze[x][y] == 1

def solve_maze_util(maze, x, y, sol):
    if x == len(maze) - 1 and y == len(maze) - 1 and maze[x][y] == 1:
        sol[x][y] = 1
        return True

    if is_safe(maze, x, y):
        sol[x][y] = 1

        if solve_maze_util(maze, x + 1, y, sol):
            return True
        if solve_maze_util(maze, x, y + 1, sol):
            return True

        sol[x][y] = 0

    return False

maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
]

sol = [[0, 0, 0, 0] for _ in range(4)]

if solve_maze_util(maze, 0, 0, sol):
    for row in sol:
        print(row)
else:
    print("No path exists")
`,

    java: `public class RatInMaze {
    static int N = 4;

    static boolean isSafe(int[][] maze, int x, int y) {
        return (x >= 0 && x < N && y >= 0 && y < N && maze[x][y] == 1);
    }

    static boolean solveMazeUtil(int[][] maze, int x, int y, int[][] sol) {
        if (x == N - 1 && y == N - 1 && maze[x][y] == 1) {
            sol[x][y] = 1;
            return true;
        }

        if (isSafe(maze, x, y)) {
            sol[x][y] = 1;

            if (solveMazeUtil(maze, x + 1, y, sol)) return true;
            if (solveMazeUtil(maze, x, y + 1, sol)) return true;

            sol[x][y] = 0;
        }

        return false;
    }

    public static void main(String[] args) {
        int[][] maze = {
            {1, 0, 0, 0},
            {1, 1, 0, 1},
            {0, 1, 0, 0},
            {1, 1, 1, 1}
        };

        int[][] sol = new int[N][N];

        if (solveMazeUtil(maze, 0, 0, sol)) {
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < N; j++)
                    System.out.print(sol[i][j] + " ");
                System.out.println();
            }
        } else {
            System.out.println("No path exists");
        }
    }
}
`
};