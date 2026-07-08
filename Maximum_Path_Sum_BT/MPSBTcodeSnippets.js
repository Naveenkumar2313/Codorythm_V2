// src/data/codeSnippets.js
export const maximumPathSumCodeSnippets = {
    c: `#include <stdio.h>
#include <limits.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

int max(int a, int b) {
    return a > b ? a : b;
}

int maxSum = INT_MIN;

int maxGain(struct TreeNode* root) {
    if (root == NULL)
        return 0;

    int left = max(maxGain(root->left), 0);
    int right = max(maxGain(root->right), 0);

    int currentSum = root->val + left + right;
    maxSum = max(maxSum, currentSum);

    return root->val + max(left, right);
}

int maxPathSum(struct TreeNode* root) {
    maxGain(root);
    return maxSum;
}

int main() {
    printf("Build a binary tree and call maxPathSum(root).\\n");
    return 0;
}
`,

    cpp: `#include <iostream>
#include <climits>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;

    TreeNode(int x) {
        val = x;
        left = right = nullptr;
    }
};

class Solution {
    int maxSum = INT_MIN;

    int maxGain(TreeNode* root) {
        if (root == nullptr)
            return 0;

        int left = max(maxGain(root->left), 0);
        int right = max(maxGain(root->right), 0);

        int currentSum = root->val + left + right;
        maxSum = max(maxSum, currentSum);

        return root->val + max(left, right);
    }

public:
    int maxPathSum(TreeNode* root) {
        maxGain(root);
        return maxSum;
    }
};

int main() {
    cout << "Build a binary tree and call maxPathSum(root)." << endl;
    return 0;
}
`,

    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxPathSum(self, root):
        self.maxSum = float('-inf')

        def maxGain(node):
            if node is None:
                return 0

            left = max(maxGain(node.left), 0)
            right = max(maxGain(node.right), 0)

            currentSum = node.val + left + right
            self.maxSum = max(self.maxSum, currentSum)

            return node.val + max(left, right)

        maxGain(root)
        return self.maxSum

print("Build a binary tree and call Solution().maxPathSum(root)")
`,

    java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int val) {
        this.val = val;
    }
}

public class Main {
    private int maxSum = Integer.MIN_VALUE;

    private int maxGain(TreeNode root) {
        if (root == null)
            return 0;

        int left = Math.max(maxGain(root.left), 0);
        int right = Math.max(maxGain(root.right), 0);

        int currentSum = root.val + left + right;
        maxSum = Math.max(maxSum, currentSum);

        return root.val + Math.max(left, right);
    }

    public int maxPathSum(TreeNode root) {
        maxGain(root);
        return maxSum;
    }

    public static void main(String[] args) {
        System.out.println("Build a binary tree and call maxPathSum(root).");
    }
}
`
};