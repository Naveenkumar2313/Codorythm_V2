const codeSnippets = {
    python: `class TrieNode:
    def __init__(self):
        self.children = [None, None]


def insert_number(root, number):
    current = root

    for bit_position in range(30, -1, -1):
        bit = (number >> bit_position) & 1

        if current.children[bit] is None:
            current.children[bit] = TrieNode()

        current = current.children[bit]


def find_best_xor(root, number):
    current = root
    best_xor = 0

    for bit_position in range(30, -1, -1):
        bit = (number >> bit_position) & 1
        opposite_bit = 1 - bit

        if current.children[opposite_bit] is not None:
            best_xor |= 1 << bit_position
            current = current.children[opposite_bit]
        else:
            current = current.children[bit]

    return best_xor


def maximum_xor(numbers):
    if len(numbers) < 2:
        return 0

    root = TrieNode()
    insert_number(root, numbers[0])
    max_xor = 0

    for index in range(1, len(numbers)):
        max_xor = max(max_xor, find_best_xor(root, numbers[index]))
        insert_number(root, numbers[index])

    return max_xor


numbers = [3, 10, 5, 25, 2, 8]
print("Maximum XOR:", maximum_xor(numbers))
`,

    java: `public class MaximumXorViaTrieExample {

    static class TrieNode {
        TrieNode[] children = new TrieNode[2];
    }

    private static final int MAX_BIT = 30;

    public static void insertNumber(TrieNode root, int number) {
        TrieNode current = root;

        for (int bitPosition = MAX_BIT; bitPosition >= 0; bitPosition--) {
            int bit = (number >> bitPosition) & 1;

            if (current.children[bit] == null) {
                current.children[bit] = new TrieNode();
            }

            current = current.children[bit];
        }
    }

    public static int findBestXor(TrieNode root, int number) {
        TrieNode current = root;
        int bestXor = 0;

        for (int bitPosition = MAX_BIT; bitPosition >= 0; bitPosition--) {
            int bit = (number >> bitPosition) & 1;
            int oppositeBit = 1 - bit;

            if (current.children[oppositeBit] != null) {
                bestXor |= 1 << bitPosition;
                current = current.children[oppositeBit];
            } else {
                current = current.children[bit];
            }
        }

        return bestXor;
    }

    public static int maximumXor(int[] numbers) {
        if (numbers.length < 2) {
            return 0;
        }

        TrieNode root = new TrieNode();
        insertNumber(root, numbers[0]);
        int maxXor = 0;

        for (int index = 1; index < numbers.length; index++) {
            maxXor = Math.max(maxXor, findBestXor(root, numbers[index]));
            insertNumber(root, numbers[index]);
        }

        return maxXor;
    }

    public static void main(String[] args) {
        int[] numbers = {3, 10, 5, 25, 2, 8};

        System.out.println("Maximum XOR: " + maximumXor(numbers));
    }
}
`,

    c: `#include <stdio.h>
#include <stdlib.h>

#define MAX_BIT 30

typedef struct TrieNode {
    struct TrieNode* children[2];
} TrieNode;

TrieNode* createTrieNode() {
    TrieNode* node = (TrieNode*)malloc(sizeof(TrieNode));
    node->children[0] = NULL;
    node->children[1] = NULL;
    return node;
}

void insertNumber(TrieNode* root, int number) {
    TrieNode* current = root;

    for (int bitPosition = MAX_BIT; bitPosition >= 0; bitPosition--) {
        int bit = (number >> bitPosition) & 1;

        if (current->children[bit] == NULL) {
            current->children[bit] = createTrieNode();
        }

        current = current->children[bit];
    }
}

int findBestXor(TrieNode* root, int number) {
    TrieNode* current = root;
    int bestXor = 0;

    for (int bitPosition = MAX_BIT; bitPosition >= 0; bitPosition--) {
        int bit = (number >> bitPosition) & 1;
        int oppositeBit = 1 - bit;

        if (current->children[oppositeBit] != NULL) {
            bestXor |= 1 << bitPosition;
            current = current->children[oppositeBit];
        } else {
            current = current->children[bit];
        }
    }

    return bestXor;
}

int maximumXor(int numbers[], int size) {
    if (size < 2) {
        return 0;
    }

    TrieNode* root = createTrieNode();
    insertNumber(root, numbers[0]);

    int maxXor = 0;

    for (int index = 1; index < size; index++) {
        int currentXor = findBestXor(root, numbers[index]);

        if (currentXor > maxXor) {
            maxXor = currentXor;
        }

        insertNumber(root, numbers[index]);
    }

    return maxXor;
}

int main() {
    int numbers[] = {3, 10, 5, 25, 2, 8};
    int size = sizeof(numbers) / sizeof(numbers[0]);

    printf("Maximum XOR: %d\\n", maximumXor(numbers, size));

    return 0;
}
`,

    cpp: `#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

class TrieNode {
public:
    TrieNode* children[2];

    TrieNode() {
        children[0] = nullptr;
        children[1] = nullptr;
    }
};

const int MAX_BIT = 30;

void insertNumber(TrieNode* root, int number) {
    TrieNode* current = root;

    for (int bitPosition = MAX_BIT; bitPosition >= 0; bitPosition--) {
        int bit = (number >> bitPosition) & 1;

        if (current->children[bit] == nullptr) {
            current->children[bit] = new TrieNode();
        }

        current = current->children[bit];
    }
}

int findBestXor(TrieNode* root, int number) {
    TrieNode* current = root;
    int bestXor = 0;

    for (int bitPosition = MAX_BIT; bitPosition >= 0; bitPosition--) {
        int bit = (number >> bitPosition) & 1;
        int oppositeBit = 1 - bit;

        if (current->children[oppositeBit] != nullptr) {
            bestXor |= 1 << bitPosition;
            current = current->children[oppositeBit];
        } else {
            current = current->children[bit];
        }
    }

    return bestXor;
}

int maximumXor(const vector<int>& numbers) {
    if (numbers.size() < 2) {
        return 0;
    }

    TrieNode* root = new TrieNode();
    insertNumber(root, numbers[0]);

    int maxXor = 0;

    for (int index = 1; index < numbers.size(); index++) {
        maxXor = max(maxXor, findBestXor(root, numbers[index]));
        insertNumber(root, numbers[index]);
    }

    return maxXor;
}

int main() {
    vector<int> numbers = {3, 10, 5, 25, 2, 8};

    cout << "Maximum XOR: " << maximumXor(numbers) << endl;

    return 0;
}
`
};

export default codeSnippets;
