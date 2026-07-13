export const aStarPathfindingCodeSnippets = {
    c: `#include <stdio.h>
#include <stdlib.h>
#include <math.h>

struct Node {
    int r, c;
    int g, h, f;
};

int manhattanDistance(int r1, int c1, int r2, int c2) {
    return abs(r1 - r2) + abs(c1 - c2);
}

int main() {
    printf("A* heuristic distance: %d\\n", manhattanDistance(0, 0, 4, 5));
    return 0;
}
`,

    cpp: `#include <iostream>
#include <cmath>
#include <vector>
#include <queue>
using namespace std;

struct Node {
    int r, c;
    int g, h, f;
    bool operator>(const Node& other) const {
        return f > other.f;
    }
};

int manhattanDistance(int r1, int c1, int r2, int c2) {
    return abs(r1 - r2) + abs(c1 - c2);
}

int main() {
    cout << "A* heuristic distance: " << manhattanDistance(0, 0, 4, 5) << endl;
    return 0;
}
`,

    python: `def manhattan_distance(r1, c1, r2, c2):
    return abs(r1 - r2) + abs(c1 - c2)

if __name__ == "__main__":
    print(f"A* heuristic distance: {manhattan_distance(0, 0, 4, 5)}")
`,

    java: `import java.util.*;

public class AStarExample {
    public static int manhattanDistance(int r1, int c1, int r2, int c2) {
        return Math.abs(r1 - r2) + Math.abs(c1 - c2);
    }

    public static void main(String[] args) {
        System.out.println("A* heuristic distance: " + manhattanDistance(0, 0, 4, 5));
    }
}
`
};
