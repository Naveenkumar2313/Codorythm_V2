export const flattenBinaryTreeSolutions = {
  'fbt-e1': {
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def build_tree(arr):
    if not arr or arr[0] == -1: return None
    root = TreeNode(arr[0])
    q = [root]
    i = 1
    while q and i < len(arr):
        curr = q.pop(0)
        if arr[i] != -1:
            curr.left = TreeNode(arr[i])
            q.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] != -1:
            curr.right = TreeNode(arr[i])
            q.append(curr.right)
        i += 1
    return root

def inorder(root):
    res = []
    def helper(node):
        if not node: return
        helper(node.left)
        res.append(node.val)
        helper(node.right)
    helper(root)
    return res

n = int(input())
arr = list(map(int, input().split()))
root = build_tree(arr)
print(*(inorder(root)))`,
    java: `import java.util.*;
class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int x) { val = x; }
}
public class Solution {
    private static void helper(TreeNode node, List<Integer> res) {
        if (node == null) return;
        helper(node.left, res);
        res.add(node.val);
        helper(node.right, res);
    }
    public static List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        helper(root, res);
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            TreeNode root = buildTree(arr);
            List<Integer> res = inorderTraversal(root);
            for (int i = 0; i < res.size(); i++) {
                System.out.print(res.get(i) + (i == res.size() - 1 ? "" : " "));
            }
            System.out.println();
        }
    }
    private static TreeNode buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode curr = q.poll();
            if (arr[i] != -1) {
                curr.left = new TreeNode(arr[i]);
                q.add(curr.left);
            }
            i++;
            if (i < arr.length && arr[i] != -1) {
                curr.right = new TreeNode(arr[i]);
                q.add(curr.right);
            }
            i++;
        }
        return root;
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
struct TreeNode {
    int val; struct TreeNode *left, *right;
};
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = NULL; return n;
}
struct TreeNode* buildTree(int* arr, int n) {
    if (n == 0 || arr[0] == -1) return NULL;
    struct TreeNode* root = newNode(arr[0]);
    struct TreeNode** q = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    int head = 0, tail = 0;
    q[tail++] = root;
    int i = 1;
    while (head < tail && i < n) {
        struct TreeNode* curr = q[head++];
        if (arr[i] != -1) { curr->left = newNode(arr[i]); q[tail++] = curr->left; }
        i++;
        if (i < n && arr[i] != -1) { curr->right = newNode(arr[i]); q[tail++] = curr->right; }
        i++;
    }
    free(q);
    return root;
}
void inorder(struct TreeNode* root, int* first) {
    if (!root) return;
    inorder(root->left, first);
    if (*first) { printf("%d", root->val); *first = 0; } else printf(" %d", root->val);
    inorder(root->right, first);
}
void freeTree(struct TreeNode* root) {
    if (!root) return;
    freeTree(root->left);
    freeTree(root->right);
    free(root);
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    struct TreeNode* root = buildTree(arr, n);
    int first = 1;
    inorder(root, &first);
    printf("\\n");
    freeTree(root); free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct TreeNode {
    int val; TreeNode *left, *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
TreeNode* buildTree(const vector<int>& arr) {
    if (arr.empty() || arr[0] == -1) return NULL;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q;
    q.push(root);
    size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.push(curr->left); }
        i++;
        if (i < arr.size() && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.push(curr->right); }
        i++;
    }
    return root;
}
void inorder(TreeNode* root, vector<int>& res) {
    if (!root) return;
    inorder(root->left, res);
    res.push_back(root->val);
    inorder(root->right, res);
}
int main() {
    int n; if (cin >> n) {
        vector<int> arr(n); for (int i = 0; i < n; i++) cin >> arr[i];
        TreeNode* root = buildTree(arr);
        vector<int> res;
        inorder(root, res);
        for (size_t i = 0; i < res.size(); i++) cout << res[i] << (i == res.size() - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`,
  },
  'fbt-e2': {
    python: `def preorder(root):
    res = []
    def helper(node):
        if not node: return
        res.append(node.val)
        helper(node.left)
        helper(node.right)
    helper(root)
    return res

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
def build_tree(arr):
    if not arr or arr[0] == -1: return None
    root = TreeNode(arr[0])
    q = [root]
    i = 1
    while q and i < len(arr):
        curr = q.pop(0)
        if arr[i] != -1:
            curr.left = TreeNode(arr[i])
            q.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] != -1:
            curr.right = TreeNode(arr[i])
            q.append(curr.right)
        i += 1
    return root
n = int(input())
arr = list(map(int, input().split()))
root = build_tree(arr)
print(*(preorder(root)))`,
    java: `import java.util.*;
class TreeNode { int val; TreeNode left, right; TreeNode(int x){val=x;} }
public class Solution {
    private static void helper(TreeNode node, List<Integer> res) {
        if (node == null) return;
        res.add(node.val);
        helper(node.left, res);
        helper(node.right, res);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()){
            int n = sc.nextInt();
            int[] arr = new int[n];
            for(int i=0;i<n;i++) arr[i] = sc.nextInt();
            TreeNode root = buildTree(arr);
            List<Integer> res = new ArrayList<>();
            helper(root, res);
            for(int i=0;i<res.size();i++) System.out.print(res.get(i) + (i==res.size()-1?"":" "));
            System.out.println();
        }
    }
    private static TreeNode buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode curr = q.poll();
            if (arr[i] != -1) { curr.left = new TreeNode(arr[i]); q.add(curr.left); }
            i++;
            if (i < arr.length && arr[i] != -1) { curr.right = new TreeNode(arr[i]); q.add(curr.right); }
            i++;
        }
        return root;
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
struct TreeNode { int val; struct TreeNode *left, *right; };
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = NULL; return n;
}
struct TreeNode* buildTree(int* arr, int n) {
    if (n == 0 || arr[0] == -1) return NULL;
    struct TreeNode* root = newNode(arr[0]);
    struct TreeNode** q = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    int head = 0, tail = 0; q[tail++] = root; int i = 1;
    while (head < tail && i < n) {
        struct TreeNode* curr = q[head++];
        if (arr[i] != -1) { curr->left = newNode(arr[i]); q[tail++] = curr->left; }
        i++;
        if (i < n && arr[i] != -1) { curr->right = newNode(arr[i]); q[tail++] = curr->right; }
        i++;
    }
    free(q); return root;
}
void preorder(struct TreeNode* root, int* first) {
    if (!root) return;
    if (*first) { printf("%d", root->val); *first = 0; } else printf(" %d", root->val);
    preorder(root->left, first);
    preorder(root->right, first);
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    struct TreeNode* root = buildTree(arr, n);
    int first = 1; preorder(root, &first); printf("\\n");
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x) : val(x), left(NULL), right(NULL) {} };
TreeNode* buildTree(const vector<int>& arr) {
    if (arr.empty() || arr[0] == -1) return NULL;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q; q.push(root); size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.push(curr->left); }
        i++;
        if (i < arr.size() && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.push(curr->right); }
        i++;
    }
    return root;
}
void preorder(TreeNode* root, vector<int>& res) {
    if (!root) return;
    res.push_back(root->val);
    preorder(root->left, res);
    preorder(root->right, res);
}
int main() {
    int n; if (cin >> n) {
        vector<int> arr(n); for (int i = 0; i < n; i++) cin >> arr[i];
        TreeNode* root = buildTree(arr);
        vector<int> res;
        preorder(root, res);
        for (size_t i = 0; i < res.size(); i++) cout << res[i] << (i == res.size() - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`,
  },
  'fbt-e3': {
    python: `def postorder(root):
    res = []
    def helper(node):
        if not node: return
        helper(node.left)
        helper(node.right)
        res.append(node.val)
    helper(root)
    return res

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
def build_tree(arr):
    if not arr or arr[0] == -1: return None
    root = TreeNode(arr[0])
    q = [root]
    i = 1
    while q and i < len(arr):
        curr = q.pop(0)
        if arr[i] != -1:
            curr.left = TreeNode(arr[i])
            q.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] != -1:
            curr.right = TreeNode(arr[i])
            q.append(curr.right)
        i += 1
    return root
n = int(input())
arr = list(map(int, input().split()))
root = build_tree(arr)
print(*(postorder(root)))`,
    java: `import java.util.*;
class TreeNode { int val; TreeNode left, right; TreeNode(int x){val=x;} }
public class Solution {
    private static void helper(TreeNode node, List<Integer> res) {
        if (node == null) return;
        helper(node.left, res);
        helper(node.right, res);
        res.add(node.val);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()){
            int n = sc.nextInt();
            int[] arr = new int[n];
            for(int i=0;i<n;i++) arr[i] = sc.nextInt();
            TreeNode root = buildTree(arr);
            List<Integer> res = new ArrayList<>();
            helper(root, res);
            for(int i=0;i<res.size();i++) System.out.print(res.get(i) + (i==res.size()-1?"":" "));
            System.out.println();
        }
    }
    private static TreeNode buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode curr = q.poll();
            if (arr[i] != -1) { curr.left = new TreeNode(arr[i]); q.add(curr.left); }
            i++;
            if (i < arr.length && arr[i] != -1) { curr.right = new TreeNode(arr[i]); q.add(curr.right); }
            i++;
        }
        return root;
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
struct TreeNode { int val; struct TreeNode *left, *right; };
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = NULL; return n;
}
struct TreeNode* buildTree(int* arr, int n) {
    if (n == 0 || arr[0] == -1) return NULL;
    struct TreeNode* root = newNode(arr[0]);
    struct TreeNode** q = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    int head = 0, tail = 0; q[tail++] = root; int i = 1;
    while (head < tail && i < n) {
        struct TreeNode* curr = q[head++];
        if (arr[i] != -1) { curr->left = newNode(arr[i]); q[tail++] = curr->left; }
        i++;
        if (i < n && arr[i] != -1) { curr->right = newNode(arr[i]); q[tail++] = curr->right; }
        i++;
    }
    free(q); return root;
}
void postorder(struct TreeNode* root, int* first) {
    if (!root) return;
    postorder(root->left, first);
    postorder(root->right, first);
    if (*first) { printf("%d", root->val); *first = 0; } else printf(" %d", root->val);
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    struct TreeNode* root = buildTree(arr, n);
    int first = 1; postorder(root, &first); printf("\\n");
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x) : val(x), left(NULL), right(NULL) {} };
TreeNode* buildTree(const vector<int>& arr) {
    if (arr.empty() || arr[0] == -1) return NULL;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q; q.push(root); size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.push(curr->left); }
        i++;
        if (i < arr.size() && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.push(curr->right); }
        i++;
    }
    return root;
}
void postorder(TreeNode* root, vector<int>& res) {
    if (!root) return;
    postorder(root->left, res);
    postorder(root->right, res);
    res.push_back(root->val);
}
int main() {
    int n; if (cin >> n) {
        vector<int> arr(n); for (int i = 0; i < n; i++) cin >> arr[i];
        TreeNode* root = buildTree(arr);
        vector<int> res;
        postorder(root, res);
        for (size_t i = 0; i < res.size(); i++) cout << res[i] << (i == res.size() - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`,
  },
  'fbt-e4': {
    python: `def max_depth(root):
    if not root: return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
def build_tree(arr):
    if not arr or arr[0] == -1: return None
    root = TreeNode(arr[0])
    q = [root]
    i = 1
    while q and i < len(arr):
        curr = q.pop(0)
        if arr[i] != -1:
            curr.left = TreeNode(arr[i])
            q.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] != -1:
            curr.right = TreeNode(arr[i])
            q.append(curr.right)
        i += 1
    return root
n = int(input())
arr = list(map(int, input().split()))
root = build_tree(arr)
print(max_depth(root))`,
    java: `import java.util.*;
class TreeNode { int val; TreeNode left, right; TreeNode(int x){val=x;} }
public class Solution {
    public static int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()){
            int n = sc.nextInt();
            int[] arr = new int[n];
            for(int i=0;i<n;i++) arr[i] = sc.nextInt();
            TreeNode root = buildTree(arr);
            System.out.println(maxDepth(root));
        }
    }
    private static TreeNode buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode curr = q.poll();
            if (arr[i] != -1) { curr.left = new TreeNode(arr[i]); q.add(curr.left); }
            i++;
            if (i < arr.length && arr[i] != -1) { curr.right = new TreeNode(arr[i]); q.add(curr.right); }
            i++;
        }
        return root;
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#define MAX(a,b) ((a)>(b)?(a):(b))
struct TreeNode { int val; struct TreeNode *left, *right; };
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = NULL; return n;
}
struct TreeNode* buildTree(int* arr, int n) {
    if (n == 0 || arr[0] == -1) return NULL;
    struct TreeNode* root = newNode(arr[0]);
    struct TreeNode** q = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    int head = 0, tail = 0; q[tail++] = root; int i = 1;
    while (head < tail && i < n) {
        struct TreeNode* curr = q[head++];
        if (arr[i] != -1) { curr->left = newNode(arr[i]); q[tail++] = curr->left; }
        i++;
        if (i < n && arr[i] != -1) { curr->right = newNode(arr[i]); q[tail++] = curr->right; }
        i++;
    }
    free(q); return root;
}
int maxDepth(struct TreeNode* root) {
    if (!root) return 0;
    return 1 + MAX(maxDepth(root->left), maxDepth(root->right));
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    struct TreeNode* root = buildTree(arr, n);
    printf("%d\\n", maxDepth(root));
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x) : val(x), left(NULL), right(NULL) {} };
TreeNode* buildTree(const vector<int>& arr) {
    if (arr.empty() || arr[0] == -1) return NULL;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q; q.push(root); size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.push(curr->left); }
        i++;
        if (i < arr.size() && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.push(curr->right); }
        i++;
    }
    return root;
}
int maxDepth(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}
int main() {
    int n; if (cin >> n) {
        vector<int> arr(n); for (int i = 0; i < n; i++) cin >> arr[i];
        TreeNode* root = buildTree(arr);
        cout << maxDepth(root) << "\\n";
    }
    return 0;
}`,
  },
  'fbt-e5': {
    python: `def is_same(p, q):
    if not p and not q: return True
    if not p or not q: return False
    return p.val == q.val and is_same(p.left, q.left) and is_same(p.right, q.right)

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
def build_tree(arr):
    if not arr or arr[0] == -1: return None
    root = TreeNode(arr[0])
    q = [root]
    i = 1
    while q and i < len(arr):
        curr = q.pop(0)
        if arr[i] != -1:
            curr.left = TreeNode(arr[i])
            q.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] != -1:
            curr.right = TreeNode(arr[i])
            q.append(curr.right)
        i += 1
    return root
n1 = int(input())
arr1 = list(map(int, input().split()))
n2 = int(input())
arr2 = list(map(int, input().split()))
p = build_tree(arr1)
q = build_tree(arr2)
print(str(is_same(p, q)).lower())`,
    java: `import java.util.*;
class TreeNode { int val; TreeNode left, right; TreeNode(int x){val=x;} }
public class Solution {
    public static boolean isSame(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        return p.val == q.val && isSame(p.left, q.left) && isSame(p.right, q.right);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        int[] arr1 = new int[n1];
        for(int i=0;i<n1;i++) arr1[i] = sc.nextInt();
        int n2 = sc.nextInt();
        int[] arr2 = new int[n2];
        for(int i=0;i<n2;i++) arr2[i] = sc.nextInt();
        TreeNode p = buildTree(arr1);
        TreeNode q = buildTree(arr2);
        System.out.println(isSame(p, q));
    }
    private static TreeNode buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int i = 1;
        while (!queue.isEmpty() && i < arr.length) {
            TreeNode curr = queue.poll();
            if (arr[i] != -1) { curr.left = new TreeNode(arr[i]); queue.add(curr.left); }
            i++;
            if (i < arr.length && arr[i] != -1) { curr.right = new TreeNode(arr[i]); queue.add(curr.right); }
            i++;
        }
        return root;
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
struct TreeNode { int val; struct TreeNode *left, *right; };
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = NULL; return n;
}
struct TreeNode* buildTree(int* arr, int n) {
    if (n == 0 || arr[0] == -1) return NULL;
    struct TreeNode* root = newNode(arr[0]);
    struct TreeNode** q = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    int head = 0, tail = 0; q[tail++] = root; int i = 1;
    while (head < tail && i < n) {
        struct TreeNode* curr = q[head++];
        if (arr[i] != -1) { curr->left = newNode(arr[i]); q[tail++] = curr->left; }
        i++;
        if (i < n && arr[i] != -1) { curr->right = newNode(arr[i]); q[tail++] = curr->right; }
        i++;
    }
    free(q); return root;
}
bool isSame(struct TreeNode* p, struct TreeNode* q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p->val == q->val && isSame(p->left, q->left) && isSame(p->right, q->right);
}
int main() {
    int n1; if (scanf("%d", &n1) != 1) return 0;
    int* arr1 = (int*)malloc(n1 * sizeof(int));
    for (int i = 0; i < n1; i++) scanf("%d", &arr1[i]);
    int n2; if (scanf("%d", &n2) != 1) return 0;
    int* arr2 = (int*)malloc(n2 * sizeof(int));
    for (int i = 0; i < n2; i++) scanf("%d", &arr2[i]);
    struct TreeNode* p = buildTree(arr1, n1);
    struct TreeNode* q = buildTree(arr2, n2);
    printf("%s\\n", isSame(p, q) ? "true" : "false");
    free(arr1); free(arr2); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x) : val(x), left(NULL), right(NULL) {} };
TreeNode* buildTree(const vector<int>& arr) {
    if (arr.empty() || arr[0] == -1) return NULL;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q; q.push(root); size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.push(curr->left); }
        i++;
        if (i < arr.size() && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.push(curr->right); }
        i++;
    }
    return root;
}
bool isSame(TreeNode* p, TreeNode* q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p->val == q->val && isSame(p->left, q->left) && isSame(p->right, q->right);
}
int main() {
    int n1; if (cin >> n1) {
        vector<int> arr1(n1); for (int i = 0; i < n1; i++) cin >> arr1[i];
        int n2; cin >> n2;
        vector<int> arr2(n2); for (int i = 0; i < n2; i++) cin >> arr2[i];
        TreeNode* p = buildTree(arr1);
        TreeNode* q = buildTree(arr2);
        cout << (isSame(p, q) ? "true" : "false") << "\\n";
    }
    return 0;
}`,
  },
  'fbt-m1': {
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
def build_tree(arr):
    if not arr or arr[0] == -1: return None
    root = TreeNode(arr[0])
    q = [root]
    i = 1
    while q and i < len(arr):
        curr = q.pop(0)
        if arr[i] != -1:
            curr.left = TreeNode(arr[i])
            q.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] != -1:
            curr.right = TreeNode(arr[i])
            q.append(curr.right)
        i += 1
    return root
def flatten(root):
    curr = root
    while curr:
        if curr.left:
            prev = curr.left
            while prev.right:
                prev = prev.right
            prev.right = curr.right
            curr.right = curr.left
            curr.left = None
        curr = curr.right

n = int(input())
arr = list(map(int, input().split()))
root = build_tree(arr)
flatten(root)
res = []
temp = root
while temp:
    res.append(temp.val)
    temp = temp.right
print(*(res))`,
    java: `import java.util.*;
class TreeNode { int val; TreeNode left, right; TreeNode(int x){val=x;} }
public class Solution {
    public static void flatten(TreeNode root) {
        TreeNode curr = root;
        while (curr != null) {
            if (curr.left != null) {
                TreeNode prev = curr.left;
                while (prev.right != null) prev = prev.right;
                prev.right = curr.right;
                curr.right = curr.left;
                curr.left = null;
            }
            curr = curr.right;
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()){
            int n = sc.nextInt();
            int[] arr = new int[n];
            for(int i=0;i<n;i++) arr[i] = sc.nextInt();
            TreeNode root = buildTree(arr);
            flatten(root);
            TreeNode temp = root;
            while(temp != null) {
                System.out.print(temp.val + (temp.right == null ? "" : " "));
                temp = temp.right;
            }
            System.out.println();
        }
    }
    private static TreeNode buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode curr = q.poll();
            if (arr[i] != -1) { curr.left = new TreeNode(arr[i]); q.add(curr.left); }
            i++;
            if (i < arr.length && arr[i] != -1) { curr.right = new TreeNode(arr[i]); q.add(curr.right); }
            i++;
        }
        return root;
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
struct TreeNode { int val; struct TreeNode *left, *right; };
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = NULL; return n;
}
struct TreeNode* buildTree(int* arr, int n) {
    if (n == 0 || arr[0] == -1) return NULL;
    struct TreeNode* root = newNode(arr[0]);
    struct TreeNode** q = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    int head = 0, tail = 0; q[tail++] = root; int i = 1;
    while (head < tail && i < n) {
        struct TreeNode* curr = q[head++];
        if (arr[i] != -1) { curr->left = newNode(arr[i]); q[tail++] = curr->left; }
        i++;
        if (i < n && arr[i] != -1) { curr->right = newNode(arr[i]); q[tail++] = curr->right; }
        i++;
    }
    free(q); return root;
}
void flatten(struct TreeNode* root) {
    struct TreeNode* curr = root;
    while (curr) {
        if (curr->left) {
            struct TreeNode* prev = curr->left;
            while (prev->right) prev = prev->right;
            prev->right = curr->right;
            curr->right = curr->left;
            curr->left = NULL;
        }
        curr = curr->right;
    }
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    struct TreeNode* root = buildTree(arr, n);
    flatten(root);
    struct TreeNode* temp = root;
    while (temp) {
        printf("%d%c", temp->val, temp->right ? ' ' : '\\n');
        temp = temp->right;
    }
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x) : val(x), left(NULL), right(NULL) {} };
TreeNode* buildTree(const vector<int>& arr) {
    if (arr.empty() || arr[0] == -1) return NULL;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q; q.push(root); size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.push(curr->left); }
        i++;
        if (i < arr.size() && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.push(curr->right); }
        i++;
    }
    return root;
}
void flatten(TreeNode* root) {
    TreeNode* curr = root;
    while (curr) {
        if (curr->left) {
            TreeNode* prev = curr->left;
            while (prev->right) prev = prev->right;
            prev->right = curr->right;
            curr->right = curr->left;
            curr->left = NULL;
        }
        curr = curr->right;
    }
}
int main() {
    int n; if (cin >> n) {
        vector<int> arr(n); for (int i = 0; i < n; i++) cin >> arr[i];
        TreeNode* root = buildTree(arr);
        flatten(root);
        TreeNode* temp = root;
        while (temp) {
            cout << temp->val << (temp->right ? " " : "\\n");
            temp = temp->right;
        }
    }
    return 0;
}`,
  },
  'fbt-m2': {
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
def build_tree(arr):
    if not arr or arr[0] == -1: return None
    root = TreeNode(arr[0])
    q = [root]
    i = 1
    while q and i < len(arr):
        curr = q.pop(0)
        if arr[i] != -1:
            curr.left = TreeNode(arr[i])
            q.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] != -1:
            curr.right = TreeNode(arr[i])
            q.append(curr.right)
        i += 1
    return root
def right_view(root):
    if not root: return []
    res = []
    q = [root]
    while q:
        sz = len(q)
        for i in range(sz):
            curr = q.pop(0)
            if i == sz - 1: res.append(curr.val)
            if curr.left: q.append(curr.left)
            if curr.right: q.append(curr.right)
    return res
n = int(input())
arr = list(map(int, input().split()))
root = build_tree(arr)
print(*(right_view(root)))`,
    java: `import java.util.*;
class TreeNode { int val; TreeNode left, right; TreeNode(int x){val=x;} }
public class Solution {
    public static List<Integer> rightSideView(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        if (root == null) return res;
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        while(!q.isEmpty()) {
            int sz = q.size();
            for (int i = 0; i < sz; i++) {
                TreeNode curr = q.poll();
                if (i == sz - 1) res.add(curr.val);
                if (curr.left != null) q.add(curr.left);
                if (curr.right != null) q.add(curr.right);
            }
        }
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()){
            int n = sc.nextInt();
            int[] arr = new int[n];
            for(int i=0;i<n;i++) arr[i] = sc.nextInt();
            TreeNode root = buildTree(arr);
            List<Integer> res = rightSideView(root);
            for(int i=0;i<res.size();i++) System.out.print(res.get(i) + (i==res.size()-1?"":" "));
            System.out.println();
        }
    }
    private static TreeNode buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode curr = q.poll();
            if (arr[i] != -1) { curr.left = new TreeNode(arr[i]); q.add(curr.left); }
            i++;
            if (i < arr.length && arr[i] != -1) { curr.right = new TreeNode(arr[i]); q.add(curr.right); }
            i++;
        }
        return root;
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
struct TreeNode { int val; struct TreeNode *left, *right; };
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = NULL; return n;
}
struct TreeNode* buildTree(int* arr, int n) {
    if (n == 0 || arr[0] == -1) return NULL;
    struct TreeNode* root = newNode(arr[0]);
    struct TreeNode** q = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    int head = 0, tail = 0; q[tail++] = root; int i = 1;
    while (head < tail && i < n) {
        struct TreeNode* curr = q[head++];
        if (arr[i] != -1) { curr->left = newNode(arr[i]); q[tail++] = curr->left; }
        i++;
        if (i < n && arr[i] != -1) { curr->right = newNode(arr[i]); q[tail++] = curr->right; }
        i++;
    }
    free(q); return root;
}
int* rightSideView(struct TreeNode* root, int* returnSize) {
    if (!root) { *returnSize = 0; return NULL; }
    int* res = (int*)malloc(100 * sizeof(int));
    struct TreeNode** q = (struct TreeNode**)malloc(1000 * sizeof(struct TreeNode*));
    int head = 0, tail = 0;
    q[tail++] = root;
    int resIdx = 0;
    while (head < tail) {
        int sz = tail - head;
        for (int i = 0; i < sz; i++) {
            struct TreeNode* curr = q[head++];
            if (i == sz - 1) res[resIdx++] = curr->val;
            if (curr->left) q[tail++] = curr->left;
            if (curr->right) q[tail++] = curr->right;
        }
    }
    *returnSize = resIdx;
    free(q);
    return res;
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    struct TreeNode* root = buildTree(arr, n);
    int retSz;
    int* ans = rightSideView(root, &retSz);
    for(int i=0;i<retSz;i++) printf("%d%c", ans[i], i==retSz-1?'\\n':' ');
    free(arr); free(ans); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x) : val(x), left(NULL), right(NULL) {} };
TreeNode* buildTree(const vector<int>& arr) {
    if (arr.empty() || arr[0] == -1) return NULL;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q; q.push(root); size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.push(curr->left); }
        i++;
        if (i < arr.size() && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.push(curr->right); }
        i++;
    }
    return root;
}
vector<int> rightSideView(TreeNode* root) {
    vector<int> res;
    if (!root) return res;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        int sz = q.size();
        for (int i = 0; i < sz; i++) {
            TreeNode* curr = q.front(); q.pop();
            if (i == sz - 1) res.push_back(curr->val);
            if (curr->left) q.push(curr->left);
            if (curr->right) q.push(curr->right);
        }
    }
    return res;
}
int main() {
    int n; if (cin >> n) {
        vector<int> arr(n); for (int i = 0; i < n; i++) cin >> arr[i];
        TreeNode* root = buildTree(arr);
        vector<int> res = rightSideView(root);
        for (size_t i = 0; i < res.size(); i++) cout << res[i] << (i == res.size() - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`,
  },
  'fbt-m3': {
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None, next=None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
def build_tree(arr):
    if not arr or arr[0] == -1: return None
    root = TreeNode(arr[0])
    q = [root]
    i = 1
    while q and i < len(arr):
        curr = q.pop(0)
        if arr[i] != -1:
            curr.left = TreeNode(arr[i])
            q.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] != -1:
            curr.right = TreeNode(arr[i])
            q.append(curr.right)
        i += 1
    return root
def connect(root):
    if not root: return root
    leftmost = root
    while leftmost.left:
        head = leftmost
        while head:
            head.left.next = head.right
            if head.next:
                head.right.next = head.next.left
            head = head.next
        leftmost = leftmost.left
    return root
n = int(input())
arr = list(map(int, input().split()))
root = build_tree(arr)
connect(root)
res = []
curr_level = root
while curr_level:
    temp = curr_level
    while temp:
        res.append(str(temp.val))
        temp = temp.next
    res.append("#")
    curr_level = curr_level.left
print(*(res))`,
    java: `import java.util.*;
class TreeNode { int val; TreeNode left, right, next; TreeNode(int x){val=x;} }
public class Solution {
    public static TreeNode connect(TreeNode root) {
        if (root == null) return null;
        TreeNode leftmost = root;
        while (leftmost.left != null) {
            TreeNode head = leftmost;
            while (head != null) {
                head.left.next = head.right;
                if (head.next != null) head.right.next = head.next.left;
                head = head.next;
            }
            leftmost = leftmost.left;
        }
        return root;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            TreeNode root = buildTree(arr);
            connect(root);
            TreeNode currLevel = root;
            StringBuilder sb = new StringBuilder();
            while (currLevel != null) {
                TreeNode temp = currLevel;
                while (temp != null) {
                    sb.append(temp.val).append(" ");
                    temp = temp.next;
                }
                sb.append("# ");
                currLevel = currLevel.left;
            }
            System.out.println(sb.toString().trim());
        }
    }
    private static TreeNode buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode curr = q.poll();
            if (arr[i] != -1) { curr.left = new TreeNode(arr[i]); q.add(curr.left); }
            i++;
            if (i < arr.length && arr[i] != -1) { curr.right = new TreeNode(arr[i]); q.add(curr.right); }
            i++;
        }
        return root;
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
struct TreeNode { int val; struct TreeNode *left, *right, *next; };
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = n->next = NULL; return n;
}
struct TreeNode* buildTree(int* arr, int n) {
    if (n == 0 || arr[0] == -1) return NULL;
    struct TreeNode* root = newNode(arr[0]);
    struct TreeNode** q = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    int head = 0, tail = 0; q[tail++] = root; int i = 1;
    while (head < tail && i < n) {
        struct TreeNode* curr = q[head++];
        if (arr[i] != -1) { curr->left = newNode(arr[i]); q[tail++] = curr->left; }
        i++;
        if (i < n && arr[i] != -1) { curr->right = newNode(arr[i]); q[tail++] = curr->right; }
        i++;
    }
    free(q); return root;
}
struct TreeNode* connect(struct TreeNode* root) {
    if (!root) return NULL;
    struct TreeNode* leftmost = root;
    while (leftmost->left) {
        struct TreeNode* head = leftmost;
        while (head) {
            head->left->next = head->right;
            if (head->next) head->right->next = head->next->left;
            head = head->next;
        }
        leftmost = leftmost->left;
    }
    return root;
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    struct TreeNode* root = buildTree(arr, n);
    connect(root);
    struct TreeNode* currLevel = root;
    while (currLevel) {
        struct TreeNode* temp = currLevel;
        while (temp) {
            printf("%d ", temp->val);
            temp = temp->next;
        }
        printf("#%c", currLevel->left ? ' ' : '\\n');
        currLevel = currLevel->left;
    }
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right, *next; TreeNode(int x) : val(x), left(NULL), right(NULL), next(NULL) {} };
TreeNode* buildTree(const vector<int>& arr) {
    if (arr.empty() || arr[0] == -1) return NULL;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q; q.push(root); size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.push(curr->left); }
        i++;
        if (i < arr.size() && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.push(curr->right); }
        i++;
    }
    return root;
}
TreeNode* connect(TreeNode* root) {
    if (!root) return NULL;
    TreeNode* leftmost = root;
    while (leftmost->left) {
        TreeNode* head = leftmost;
        while (head) {
            head->left->next = head->right;
            if (head->next) head->right->next = head->next->left;
            head = head->next;
        }
        leftmost = leftmost->left;
    }
    return root;
}
int main() {
    int n; if (cin >> n) {
        vector<int> arr(n); for (int i = 0; i < n; i++) cin >> arr[i];
        TreeNode* root = buildTree(arr);
        connect(root);
        TreeNode* currLevel = root;
        while (currLevel) {
            TreeNode* temp = currLevel;
            while (temp) {
                cout << temp->val << " ";
                temp = temp->next;
            }
            cout << "#" << (currLevel->left ? " " : "\\n");
            currLevel = currLevel->left;
        }
    }
    return 0;
}`,
  },
  'fbt-m4': {
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
def build_tree(arr):
    if not arr or arr[0] == -1: return None
    root = TreeNode(arr[0])
    q = [root]
    i = 1
    while q and i < len(arr):
        curr = q.pop(0)
        if arr[i] != -1:
            curr.left = TreeNode(arr[i])
            q.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] != -1:
            curr.right = TreeNode(arr[i])
            q.append(curr.right)
        i += 1
    return root
def flatten_bst(root):
    dummy = TreeNode(0)
    prev = dummy
    def inorder(node):
        nonlocal prev
        if not node: return
        inorder(node.left)
        node.left = None
        prev.right = node
        prev = node
        inorder(node.right)
    inorder(root)
    return dummy.right

n = int(input())
arr = list(map(int, input().split()))
root = build_tree(arr)
new_root = flatten_bst(root)
res = []
temp = new_root
while temp:
    res.append(temp.val)
    temp = temp.right
print(*(res))`,
    java: `import java.util.*;
class TreeNode { int val; TreeNode left, right; TreeNode(int x){val=x;} }
public class Solution {
    private static TreeNode dummy = new TreeNode(0);
    private static TreeNode prev = dummy;
    private static void inorder(TreeNode node) {
        if (node == null) return;
        inorder(node.left);
        TreeNode rightNode = node.right;
        node.left = null;
        prev.right = node;
        prev = node;
        inorder(rightNode);
    }
    public static TreeNode flattenBST(TreeNode root) {
        dummy = new TreeNode(0);
        prev = dummy;
        inorder(root);
        return dummy.right;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            TreeNode root = buildTree(arr);
            TreeNode res = flattenBST(root);
            while (res != null) {
                System.out.print(res.val + (res.right == null ? "" : " "));
                res = res.right;
            }
            System.out.println();
        }
    }
    private static TreeNode buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode curr = q.poll();
            if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.add(curr.left); }
            i++;
            if (i < arr.length && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.add(curr.right); }
            i++;
        }
        return root;
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
struct TreeNode { int val; struct TreeNode *left, *right; };
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = NULL; return n;
}
struct TreeNode* buildTree(int* arr, int n) {
    if (n == 0 || arr[0] == -1) return NULL;
    struct TreeNode* root = newNode(arr[0]);
    struct TreeNode** q = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    int head = 0, tail = 0; q[tail++] = root; int i = 1;
    while (head < tail && i < n) {
        struct TreeNode* curr = q[head++];
        if (arr[i] != -1) { curr->left = newNode(arr[i]); q[tail++] = curr->left; }
        i++;
        if (i < n && arr[i] != -1) { curr->right = newNode(arr[i]); q[tail++] = curr->right; }
        i++;
    }
    free(q); return root;
}
void inorder(struct TreeNode* node, struct TreeNode** prev) {
    if (!node) return;
    inorder(node->left, prev);
    struct TreeNode* right = node->right;
    node->left = NULL;
    (*prev)->right = node;
    *prev = node;
    inorder(right, prev);
}
struct TreeNode* flattenBST(struct TreeNode* root) {
    struct TreeNode* dummy = newNode(0);
    struct TreeNode* prev = dummy;
    inorder(root, &prev);
    struct TreeNode* res = dummy->right;
    free(dummy);
    return res;
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    struct TreeNode* root = buildTree(arr, n);
    struct TreeNode* res = flattenBST(root);
    while (res) {
        printf("%d%c", res->val, res->right ? ' ' : '\\n');
        res = res->right;
    }
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x) : val(x), left(NULL), right(NULL) {} };
TreeNode* buildTree(const vector<int>& arr) {
    if (arr.empty() || arr[0] == -1) return NULL;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q; q.push(root); size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.push(curr->left); }
        i++;
        if (i < arr.size() && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.push(curr->right); }
        i++;
    }
    return root;
}
void inorder(TreeNode* node, TreeNode*& prev) {
    if (!node) return;
    inorder(node->left, prev);
    TreeNode* right = node->right;
    node->left = NULL;
    prev->right = node;
    prev = node;
    inorder(right, prev);
}
TreeNode* flattenBST(TreeNode* root) {
    TreeNode* dummy = new TreeNode(0);
    TreeNode* prev = dummy;
    inorder(root, prev);
    TreeNode* res = dummy->right;
    delete dummy;
    return res;
}
int main() {
    int n; if (cin >> n) {
        vector<int> arr(n); for (int i = 0; i < n; i++) cin >> arr[i];
        TreeNode* root = buildTree(arr);
        TreeNode* res = flattenBST(root);
        while (res) {
            cout << res->val << (res->right ? " " : "\\n");
            res = res->right;
        }
    }
    return 0;
}`,
  },
  'fbt-m5': {
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
def build_tree(arr):
    if not arr or arr[0] == -1: return None
    root = TreeNode(arr[0])
    q = [root]
    i = 1
    while q and i < len(arr):
        curr = q.pop(0)
        if arr[i] != -1:
            curr.left = TreeNode(arr[i])
            q.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] != -1:
            curr.right = TreeNode(arr[i])
            q.append(curr.right)
        i += 1
    return root
def path_sum(root, target):
    res = []
    def dfs(node, curr_sum, path):
        if not node: return
        curr_sum += node.val
        path.append(node.val)
        if not node.left and not node.right:
            if curr_sum == target:
                res.append(list(path))
        else:
            dfs(node.left, curr_sum, path)
            dfs(node.right, curr_sum, path)
        path.pop()
    dfs(root, 0, [])
    return res
n = int(input())
arr = list(map(int, input().split()))
target = int(input())
root = build_tree(arr)
ans = path_sum(root, target)
for path in ans:
    print(*(path))`,
    java: `import java.util.*;
class TreeNode { int val; TreeNode left, right; TreeNode(int x){val=x;} }
public class Solution {
    private static void dfs(TreeNode node, int target, int curr, List<Integer> path, List<List<Integer>> res) {
        if (node == null) return;
        curr += node.val;
        path.add(node.val);
        if (node.left == null && node.right == null) {
            if (curr == target) res.add(new ArrayList<>(path));
        } else {
            dfs(node.left, target, curr, path, res);
            dfs(node.right, target, curr, path, res);
        }
        path.remove(path.size() - 1);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int target = sc.nextInt();
            TreeNode root = buildTree(arr);
            List<List<Integer>> res = new ArrayList<>();
            dfs(root, target, 0, new ArrayList<>(), res);
            for (List<Integer> path : res) {
                for (int i = 0; i < path.size(); i++) {
                    System.out.print(path.get(i) + (i == path.size() - 1 ? "" : " "));
                }
                System.out.println();
            }
        }
    }
    private static TreeNode buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode curr = q.poll();
            if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.add(curr.left); }
            i++;
            if (i < arr.length && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.add(curr.right); }
            i++;
        }
        return root;
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
struct TreeNode { int val; struct TreeNode *left, *right; };
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = NULL; return n;
}
struct TreeNode* buildTree(int* arr, int n) {
    if (n == 0 || arr[0] == -1) return NULL;
    struct TreeNode* root = newNode(arr[0]);
    struct TreeNode** q = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    int head = 0, tail = 0; q[tail++] = root; int i = 1;
    while (head < tail && i < n) {
        struct TreeNode* curr = q[head++];
        if (arr[i] != -1) { curr->left = newNode(arr[i]); q[tail++] = curr->left; }
        i++;
        if (i < n && arr[i] != -1) { curr->right = newNode(arr[i]); q[tail++] = curr->right; }
        i++;
    }
    free(q); return root;
}
void dfs(struct TreeNode* node, int target, int curr, int* path, int pathIdx) {
    if (!node) return;
    curr += node->val;
    path[pathIdx++] = node->val;
    if (!node->left && !node->right) {
        if (curr == target) {
            for (int i = 0; i < pathIdx; i++) printf("%d%c", path[i], i == pathIdx - 1 ? '\\n' : ' ');
        }
    } else {
        dfs(node->left, target, curr, path, pathIdx);
        dfs(node->right, target, curr, path, pathIdx);
    }
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int target; scanf("%d", &target);
    struct TreeNode* root = buildTree(arr, n);
    int* path = (int*)malloc(n * sizeof(int));
    dfs(root, target, 0, path, 0);
    free(path); free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x) : val(x), left(NULL), right(NULL) {} };
TreeNode* buildTree(const vector<int>& arr) {
    if (arr.empty() || arr[0] == -1) return NULL;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q; q.push(root); size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.push(curr->left); }
        i++;
        if (i < arr.size() && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.push(curr->right); }
        i++;
    }
    return root;
}
void dfs(TreeNode* node, int target, int curr, vector<int>& path, vector<vector<int>>& res) {
    if (!node) return;
    curr += node->val;
    path.push_back(node->val);
    if (!node->left && !node->right) {
        if (curr == target) res.push_back(path);
    } else {
        dfs(node->left, target, curr, path, res);
        dfs(node->right, target, curr, path, res);
    }
    path.pop_back();
}
int main() {
    int n; if (cin >> n) {
        vector<int> arr(n); for (int i = 0; i < n; i++) cin >> arr[i];
        int target; cin >> target;
        TreeNode* root = buildTree(arr);
        vector<vector<int>> res;
        vector<int> path;
        dfs(root, target, 0, path, res);
        for (const auto& p : res) {
            for (size_t i = 0; i < p.size(); i++) cout << p[i] << (i == p.size() - 1 ? "" : " ");
            cout << "\\n";
        }
    }
    return 0;
}`,
  },
  'fbt-h1': {
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
def build_tree(arr):
    if not arr or arr[0] == -1: return None
    root = TreeNode(arr[0])
    q = [root]
    i = 1
    while q and i < len(arr):
        curr = q.pop(0)
        if arr[i] != -1:
            curr.left = TreeNode(arr[i])
            q.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] != -1:
            curr.right = TreeNode(arr[i])
            q.append(curr.right)
        i += 1
    return root
def serialize(root):
    if not root: return 'null'
    res = []
    q = [root]
    while q:
        node = q.pop(0)
        if node:
            res.append(str(node.val))
            q.append(node.left)
            q.append(node.right)
        else:
            res.append('null')
    while res and res[-1] == 'null': res.pop()
    return ','.join(res)

n = int(input())
arr = list(map(int, input().split()))
root = build_tree(arr)
print(serialize(root))`,
    java: `import java.util.*;
class TreeNode { int val; TreeNode left, right; TreeNode(int x){val=x;} }
public class Solution {
    public static String serialize(TreeNode root) {
        if (root == null) return "null";
        List<String> res = new ArrayList<>();
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        while(!q.isEmpty()) {
            TreeNode curr = q.poll();
            if (curr != null) {
                res.add(String.valueOf(curr.val));
                q.add(curr.left);
                q.add(curr.right);
            } else {
                res.add("null");
            }
        }
        while (res.size() > 0 && res.get(res.size() - 1).equals("null")) res.remove(res.size() - 1);
        return String.join(",", res);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            TreeNode root = buildTree(arr);
            System.out.println(serialize(root));
        }
    }
    private static TreeNode buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode curr = q.poll();
            if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.add(curr.left); }
            i++;
            if (i < arr.length && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.add(curr.right); }
            i++;
        }
        return root;
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
struct TreeNode { int val; struct TreeNode *left, *right; };
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = NULL; return n;
}
struct TreeNode* buildTree(int* arr, int n) {
    if (n == 0 || arr[0] == -1) return NULL;
    struct TreeNode* root = newNode(arr[0]);
    struct TreeNode** q = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    int head = 0, tail = 0; q[tail++] = root; int i = 1;
    while (head < tail && i < n) {
        struct TreeNode* curr = q[head++];
        if (arr[i] != -1) { curr->left = newNode(arr[i]); q[tail++] = curr->left; }
        i++;
        if (i < n && arr[i] != -1) { curr->right = newNode(arr[i]); q[tail++] = curr->right; }
        i++;
    }
    free(q); return root;
}
char* serialize(struct TreeNode* root) {
    char* res = (char*)malloc(10000 * sizeof(char));
    res[0] = '\\0';
    if (!root) { strcpy(res, "null"); return res; }
    struct TreeNode** q = (struct TreeNode**)malloc(1000 * sizeof(struct TreeNode*));
    char** vals = (char**)malloc(1000 * sizeof(char*));
    int head = 0, tail = 0, valIdx = 0;
    q[tail++] = root;
    while (head < tail) {
        struct TreeNode* curr = q[head++];
        if (curr) {
            vals[valIdx] = (char*)malloc(15 * sizeof(char));
            sprintf(vals[valIdx++], "%d", curr->val);
            q[tail++] = curr->left;
            q[tail++] = curr->right;
        } else {
            vals[valIdx] = (char*)malloc(15 * sizeof(char));
            strcpy(vals[valIdx++], "null");
        }
    }
    while (valIdx > 0 && strcmp(vals[valIdx - 1], "null") == 0) valIdx--;
    for (int i = 0; i < valIdx; i++) {
        strcat(res, vals[i]);
        if (i != valIdx - 1) strcat(res, ",");
        free(vals[i]);
    }
    free(vals); free(q);
    return res;
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    struct TreeNode* root = buildTree(arr, n);
    char* s = serialize(root);
    printf("%s\\n", s);
    free(s); free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <string>
#include <sstream>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x) : val(x), left(NULL), right(NULL) {} };
TreeNode* buildTree(const vector<int>& arr) {
    if (arr.empty() || arr[0] == -1) return NULL;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q; q.push(root); size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.push(curr->left); }
        i++;
        if (i < arr.size() && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.push(curr->right); }
        i++;
    }
    return root;
}
string serialize(TreeNode* root) {
    if (!root) return "null";
    vector<string> res;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        TreeNode* curr = q.front(); q.pop();
        if (curr) {
            res.push_back(to_string(curr->val));
            q.push(curr->left);
            q.push(curr->right);
        } else {
            res.push_back("null");
        }
    }
    while (!res.empty() && res.back() == "null") res.pop_back();
    stringstream ss;
    for (size_t i = 0; i < res.size(); i++) {
        ss << res[i] << (i == res.size() - 1 ? "" : ",");
    }
    return ss.str();
}
int main() {
    int n; if (cin >> n) {
        vector<int> arr(n); for (int i = 0; i < n; i++) cin >> arr[i];
        TreeNode* root = buildTree(arr);
        cout << serialize(root) << "\\n";
    }
    return 0;
}`,
  },
  'fbt-h2': {
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
def build_tree(arr):
    if not arr or arr[0] == -1: return None
    root = TreeNode(arr[0])
    q = [root]
    i = 1
    while q and i < len(arr):
        curr = q.pop(0)
        if arr[i] != -1:
            curr.left = TreeNode(arr[i])
            q.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] != -1:
            curr.right = TreeNode(arr[i])
            q.append(curr.right)
        i += 1
    return root
def max_path_sum(root):
    max_sum = float('-inf')
    def get_max(node):
        nonlocal max_sum
        if not node: return 0
        left = max(0, get_max(node.left))
        right = max(0, get_max(node.right))
        max_sum = max(max_sum, node.val + left + right)
        return node.val + max(left, right)
    get_max(root)
    return max_sum

n = int(input())
arr = list(map(int, input().split()))
root = build_tree(arr)
print(max_path_sum(root))`,
    java: `import java.util.*;
class TreeNode { int val; TreeNode left, right; TreeNode(int x){val=x;} }
public class Solution {
    private static int maxSum = Integer.MIN_VALUE;
    private static int getMax(TreeNode node) {
        if (node == null) return 0;
        int left = Math.max(0, getMax(node.left));
        int right = Math.max(0, getMax(node.right));
        maxSum = Math.max(maxSum, node.val + left + right);
        return node.val + Math.max(left, right);
    }
    public static int maxPathSum(TreeNode root) {
        maxSum = Integer.MIN_VALUE;
        getMax(root);
        return maxSum;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            TreeNode root = buildTree(arr);
            System.out.println(maxPathSum(root));
        }
    }
    private static TreeNode buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode curr = q.poll();
            if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.add(curr.left); }
            i++;
            if (i < arr.length && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.add(curr.right); }
            i++;
        }
        return root;
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#define MAX(a,b) ((a)>(b)?(a):(b))
struct TreeNode { int val; struct TreeNode *left, *right; };
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = NULL; return n;
}
struct TreeNode* buildTree(int* arr, int n) {
    if (n == 0 || arr[0] == -1) return NULL;
    struct TreeNode* root = newNode(arr[0]);
    struct TreeNode** q = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    int head = 0, tail = 0; q[tail++] = root; int i = 1;
    while (head < tail && i < n) {
        struct TreeNode* curr = q[head++];
        if (arr[i] != -1) { curr->left = newNode(arr[i]); q[tail++] = curr->left; }
        i++;
        if (i < n && arr[i] != -1) { curr->right = newNode(arr[i]); q[tail++] = curr->right; }
        i++;
    }
    free(q); return root;
}
int maxSum = -2147483648;
int getMax(struct TreeNode* node) {
    if (!node) return 0;
    int left = MAX(0, getMax(node->left));
    int right = MAX(0, getMax(node->right));
    maxSum = MAX(maxSum, node->val + left + right);
    return node->val + MAX(left, right);
}
int maxPathSum(struct TreeNode* root) {
    maxSum = -2147483648;
    getMax(root);
    return maxSum;
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    struct TreeNode* root = buildTree(arr, n);
    printf("%d\\n", maxPathSum(root));
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x) : val(x), left(NULL), right(NULL) {} };
TreeNode* buildTree(const vector<int>& arr) {
    if (arr.empty() || arr[0] == -1) return NULL;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q; q.push(root); size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.push(curr->left); }
        i++;
        if (i < arr.size() && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.push(curr->right); }
        i++;
    }
    return root;
}
int maxSum = -2e9;
int getMax(TreeNode* node) {
    if (!node) return 0;
    int left = max(0, getMax(node->left));
    int right = max(0, getMax(node->right));
    maxSum = max(maxSum, node->val + left + right);
    return node->val + max(left, right);
}
int maxPathSum(TreeNode* root) {
    maxSum = -2e9;
    getMax(root);
    return maxSum;
}
int main() {
    int n; if (cin >> n) {
        vector<int> arr(n); for (int i = 0; i < n; i++) cin >> arr[i];
        TreeNode* root = buildTree(arr);
        cout << maxPathSum(root) << "\\n";
    }
    return 0;
}`,
  },
  'fbt-h3': {
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
def build_tree(arr):
    if not arr or arr[0] == -1: return None
    root = TreeNode(arr[0])
    q = [root]
    i = 1
    while q and i < len(arr):
        curr = q.pop(0)
        if arr[i] != -1:
            curr.left = TreeNode(arr[i])
            q.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] != -1:
            curr.right = TreeNode(arr[i])
            q.append(curr.right)
        i += 1
    return root
def recover_tree(root):
    first, second, prev = None, None, None
    def inorder(node):
        nonlocal first, second, prev
        if not node: return
        inorder(node.left)
        if prev and prev.val > node.val:
            if not first: first = prev
            second = node
        prev = node
        inorder(node.right)
    inorder(root)
    if first and second:
        first.val, second.val = second.val, first.val

def print_inorder(root):
    res = []
    def traverse(node):
        if not node: return
        traverse(node.left)
        res.append(node.val)
        traverse(node.right)
    traverse(root)
    return res

n = int(input())
arr = list(map(int, input().split()))
root = build_tree(arr)
recover_tree(root)
print(*(print_inorder(root)))`,
    java: `import java.util.*;
class TreeNode { int val; TreeNode left, right; TreeNode(int x){val=x;} }
public class Solution {
    private static TreeNode first = null, second = null, prev = null;
    private static void inorder(TreeNode node) {
        if (node == null) return;
        inorder(node.left);
        if (prev != null && prev.val > node.val) {
            if (first == null) first = prev;
            second = node;
        }
        prev = node;
        inorder(node.right);
    }
    public static void recoverTree(TreeNode root) {
        first = second = prev = null;
        inorder(root);
        if (first != null && second != null) {
            int temp = first.val;
            first.val = second.val;
            second.val = temp;
        }
    }
    private static void printInorder(TreeNode root, List<Integer> res) {
        if (root == null) return;
        printInorder(root.left, res);
        res.add(root.val);
        printInorder(root.right, res);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            TreeNode root = buildTree(arr);
            recoverTree(root);
            List<Integer> res = new ArrayList<>();
            printInorder(root, res);
            for (int i = 0; i < res.size(); i++) {
                System.out.print(res.get(i) + (i == res.size() - 1 ? "" : " "));
            }
            System.out.println();
        }
    }
    private static TreeNode buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode curr = q.poll();
            if (arr[i] != -1) { curr.left = new TreeNode(arr[i]); q.add(curr.left); }
            i++;
            if (i < arr.length && arr[i] != -1) { curr.right = new TreeNode(arr[i]); q.add(curr.right); }
            i++;
        }
        return root;
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
struct TreeNode { int val; struct TreeNode *left, *right; };
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = NULL; return n;
}
struct TreeNode* buildTree(int* arr, int n) {
    if (n == 0 || arr[0] == -1) return NULL;
    struct TreeNode* root = newNode(arr[0]);
    struct TreeNode** q = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    int head = 0, tail = 0; q[tail++] = root; int i = 1;
    while (head < tail && i < n) {
        struct TreeNode* curr = q[head++];
        if (arr[i] != -1) { curr->left = newNode(arr[i]); q[tail++] = curr->left; }
        i++;
        if (i < n && arr[i] != -1) { curr->right = newNode(arr[i]); q[tail++] = curr->right; }
        i++;
    }
    free(q); return root;
}
struct TreeNode *first, *second, *prevNode;
void inorder(struct TreeNode* node) {
    if (!node) return;
    inorder(node->left);
    if (prevNode && prevNode->val > node->val) {
        if (!first) first = prevNode;
        second = node;
    }
    prevNode = node;
    inorder(node->right);
}
void recoverTree(struct TreeNode* root) {
    first = second = prevNode = NULL;
    inorder(root);
    if (first && second) {
        int temp = first->val;
        first->val = second->val;
        second->val = temp;
    }
}
void printInorder(struct TreeNode* root, int* firstVal) {
    if (!root) return;
    printInorder(root->left, firstVal);
    if (*firstVal) { printf("%d", root->val); *firstVal = 0; } else printf(" %d", root->val);
    printInorder(root->right, firstVal);
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    struct TreeNode* root = buildTree(arr, n);
    recoverTree(root);
    int f = 1; printInorder(root, &f); printf("\\n");
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x) : val(x), left(NULL), right(NULL) {} };
TreeNode* buildTree(const vector<int>& arr) {
    if (arr.empty() || arr[0] == -1) return NULL;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q; q.push(root); size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.push(curr->left); }
        i++;
        if (i < arr.size() && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.push(curr->right); }
        i++;
    }
    return root;
}
TreeNode *firstNode, *secondNode, *prevNode;
void inorder(TreeNode* node) {
    if (!node) return;
    inorder(node->left);
    if (prevNode && prevNode->val > node->val) {
        if (!firstNode) firstNode = prevNode;
        secondNode = node;
    }
    prevNode = node;
    inorder(node->right);
}
void recoverTree(TreeNode* root) {
    firstNode = secondNode = prevNode = nullptr;
    inorder(root);
    if (firstNode && secondNode) {
        swap(firstNode->val, secondNode->val);
    }
}
void printInorder(TreeNode* root, vector<int>& res) {
    if (!root) return;
    printInorder(root->left, res);
    res.push_back(root->val);
    printInorder(root->right, res);
}
int main() {
    int n; if (cin >> n) {
        vector<int> arr(n); for (int i = 0; i < n; i++) cin >> arr[i];
        TreeNode* root = buildTree(arr);
        recoverTree(root);
        vector<int> res;
        printInorder(root, res);
        for (size_t i = 0; i < res.size(); i++) cout << res[i] << (i == res.size() - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`,
  },
  'fbt-h4': {
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
def buildTree(preorder, inorder):
    if not preorder or not inorder: return None
    root_val = preorder[0]
    root = TreeNode(root_val)
    mid = inorder.index(root_val)
    root.left = buildTree(preorder[1:mid+1], inorder[:mid])
    root.right = buildTree(preorder[mid+1:], inorder[mid+1:])
    return root
def print_level_order(root):
    if not root: return 'null'
    res = []
    q = [root]
    while q:
        node = q.pop(0)
        if node:
            res.append(str(node.val))
            q.append(node.left)
            q.append(node.right)
        else:
            res.append('null')
    while res and res[-1] == 'null': res.pop()
    return ' '.join(res)

n = int(input())
pre = list(map(int, input().split()))
m = int(input())
ino = list(map(int, input().split()))
root = buildTree(pre, ino)
print(print_level_order(root))`,
    java: `import java.util.*;
class TreeNode { int val; TreeNode left, right; TreeNode(int x){val=x;} }
public class Solution {
    private static int preIdx = 0;
    private static Map<Integer, Integer> inMap;
    private static TreeNode helper(int[] preorder, int left, int right) {
        if (left > right) return null;
        int rootVal = preorder[preIdx++];
        TreeNode root = new TreeNode(rootVal);
        int idx = inMap.get(rootVal);
        root.left = helper(preorder, left, idx - 1);
        root.right = helper(preorder, idx + 1, right);
        return root;
    }
    public static TreeNode buildTree(int[] preorder, int[] inorder) {
        preIdx = 0;
        inMap = new HashMap<>();
        for (int i = 0; i < inorder.length; i++) inMap.put(inorder[i], i);
        return helper(preorder, 0, preorder.length - 1);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] pre = new int[n];
            for (int i = 0; i < n; i++) pre[i] = sc.nextInt();
            int m = sc.nextInt();
            int[] ino = new int[m];
            for (int i = 0; i < m; i++) ino[i] = sc.nextInt();
            TreeNode root = buildTree(pre, ino);
            List<String> res = new ArrayList<>();
            Queue<TreeNode> q = new LinkedList<>();
            q.add(root);
            while (!q.isEmpty()) {
                TreeNode curr = q.poll();
                if (curr != null) {
                    res.add(String.valueOf(curr.val));
                    q.add(curr.left);
                    q.add(curr.right);
                } else {
                    res.add("null");
                }
            }
            while (res.size() > 0 && res.get(res.size() - 1).equals("null")) res.remove(res.size() - 1);
            for (int i = 0; i < res.size(); i++) {
                System.out.print(res.get(i) + (i == res.size() - 1 ? "" : " "));
            }
            System.out.println();
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
struct TreeNode { int val; struct TreeNode *left, *right; };
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = NULL; return n;
}
int search(int* arr, int str, int end, int val) {
    for (int i = str; i <= end; i++) {
        if (arr[i] == val) return i;
    }
    return -1;
}
struct TreeNode* buildHelper(int* preorder, int* inorder, int inStart, int inEnd, int* preIdx) {
    if (inStart > inEnd) return NULL;
    struct TreeNode* tNode = newNode(preorder[(*preIdx)++]);
    if (inStart == inEnd) return tNode;
    int inIdx = search(inorder, inStart, inEnd, tNode->val);
    tNode->left = buildHelper(preorder, inorder, inStart, inIdx - 1, preIdx);
    tNode->right = buildHelper(preorder, inorder, inIdx + 1, inEnd, preIdx);
    return tNode;
}
struct TreeNode* buildTree(int* preorder, int preorderSize, int* inorder, int inorderSize) {
    int preIdx = 0;
    return buildHelper(preorder, inorder, 0, inorderSize - 1, &preIdx);
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* pre = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &pre[i]);
    int m; if (scanf("%d", &m) != 1) return 0;
    int* ino = (int*)malloc(m * sizeof(int));
    for (int i = 0; i < m; i++) scanf("%d", &ino[i]);
    struct TreeNode* root = buildTree(pre, n, ino, m);
    struct TreeNode** q = (struct TreeNode**)malloc(1000 * sizeof(struct TreeNode*));
    char** res = (char**)malloc(1000 * sizeof(char*));
    int head = 0, tail = 0, resIdx = 0;
    q[tail++] = root;
    while (head < tail) {
        struct TreeNode* curr = q[head++];
        if (curr) {
            res[resIdx] = (char*)malloc(15);
            sprintf(res[resIdx++], "%d", curr->val);
            q[tail++] = curr->left;
            q[tail++] = curr->right;
        } else {
            res[resIdx] = (char*)malloc(15);
            strcpy(res[resIdx++], "null");
        }
    }
    while (resIdx > 0 && strcmp(res[resIdx - 1], "null") == 0) resIdx--;
    for (int i = 0; i < resIdx; i++) {
        printf("%s%c", res[i], i == resIdx - 1 ? '\\n' : ' ');
        free(res[i]);
    }
    free(res); free(q); free(pre); free(ino); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x) : val(x), left(NULL), right(NULL) {} };
unordered_map<int, int> inMap;
int preIdx = 0;
TreeNode* helper(const vector<int>& preorder, int left, int right) {
    if (left > right) return NULL;
    int rootVal = preorder[preIdx++];
    TreeNode* root = new TreeNode(rootVal);
    int idx = inMap[rootVal];
    root->left = helper(preorder, left, idx - 1);
    root->right = helper(preorder, idx + 1, right);
    return root;
}
TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
    preIdx = 0;
    inMap.clear();
    for (size_t i = 0; i < inorder.size(); i++) inMap[inorder[i]] = i;
    return helper(preorder, 0, preorder.size() - 1);
}
int main() {
    int n; if (cin >> n) {
        vector<int> pre(n); for (int i = 0; i < n; i++) cin >> pre[i];
        int m; cin >> m;
        vector<int> ino(m); for (int i = 0; i < m; i++) cin >> ino[i];
        TreeNode* root = buildTree(pre, ino);
        vector<string> res;
        queue<TreeNode*> q;
        q.push(root);
        while (!q.empty()) {
            TreeNode* curr = q.front(); q.pop();
            if (curr) {
                res.push_back(to_string(curr->val));
                q.push(curr->left);
                q.push(curr->right);
            } else {
                res.push_back("null");
            }
        }
        while (!res.empty() && res.back() == "null") res.pop_back();
        for (size_t i = 0; i < res.size(); i++) cout << res[i] << (i == res.size() - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`,
  },
  'fbt-h5': {
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
def build_tree(arr):
    if not arr or arr[0] == -1: return None
    root = TreeNode(arr[0])
    q = [root]
    i = 1
    while q and i < len(arr):
        curr = q.pop(0)
        if arr[i] != -1:
            curr.left = TreeNode(arr[i])
            q.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] != -1:
            curr.right = TreeNode(arr[i])
            q.append(curr.right)
        i += 1
    return root
class BSTIterator:
    def __init__(self, root):
        self.stack = []
        self._push_left(root)
    def _push_left(self, node):
        while node:
            self.stack.append(node)
            node = node.left
    def next(self):
        node = self.stack.pop()
        self._push_left(node.right)
        return node.val
    def hasNext(self):
        return len(self.stack) > 0

n = int(input())
arr = list(map(int, input().split()))
root = build_tree(arr)
it = BSTIterator(root)
ops = input().split()
res = []
for op in ops:
    if op == 'next': res.append(str(it.next()))
    elif op == 'hasNext': res.append(str(it.hasNext()).lower())
print(*(res))`,
    java: `import java.util.*;
class TreeNode { int val; TreeNode left, right; TreeNode(int x){val=x;} }
class BSTIterator {
    private Stack<TreeNode> stack = new Stack<>();
    public BSTIterator(TreeNode root) { pushLeft(root); }
    private void pushLeft(TreeNode node) {
        while (node != null) { stack.push(node); node = node.left; }
    }
    public int next() {
        TreeNode node = stack.pop();
        pushLeft(node.right);
        return node.val;
    }
    public boolean hasNext() { return !stack.isEmpty(); }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            TreeNode root = buildTree(arr);
            BSTIterator it = new BSTIterator(root);
            int numOps = sc.nextInt();
            List<String> res = new ArrayList<>();
            for (int i = 0; i < numOps; i++) {
                String op = sc.next();
                if (op.equals("next")) res.add(String.valueOf(it.next()));
                else if (op.equals("hasNext")) res.add(String.valueOf(it.hasNext()));
            }
            for (int i = 0; i < res.size(); i++) System.out.print(res.get(i) + (i == res.size() - 1 ? "" : " "));
            System.out.println();
        }
    }
    private static TreeNode buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode curr = q.poll();
            if (arr[i] != -1) { curr.left = new TreeNode(arr[i]); q.add(curr.left); }
            i++;
            if (i < arr.length && arr[i] != -1) { curr.right = new TreeNode(arr[i]); q.add(curr.right); }
            i++;
        }
        return root;
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
struct TreeNode { int val; struct TreeNode *left, *right; };
struct TreeNode* newNode(int val) {
    struct TreeNode* n = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    n->val = val; n->left = n->right = NULL; return n;
}
struct TreeNode* buildTree(int* arr, int n) {
    if (n == 0 || arr[0] == -1) return NULL;
    struct TreeNode* root = newNode(arr[0]);
    struct TreeNode** q = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    int head = 0, tail = 0; q[tail++] = root; int i = 1;
    while (head < tail && i < n) {
        struct TreeNode* curr = q[head++];
        if (arr[i] != -1) { curr->left = newNode(arr[i]); q[tail++] = curr->left; }
        i++;
        if (i < n && arr[i] != -1) { curr->right = newNode(arr[i]); q[tail++] = curr->right; }
        i++;
    }
    free(q); return root;
}
typedef struct {
    struct TreeNode** stack;
    int top;
} BSTIterator;
BSTIterator* bstIteratorCreate(struct TreeNode* root, int n) {
    BSTIterator* obj = (BSTIterator*)malloc(sizeof(BSTIterator));
    obj->stack = (struct TreeNode**)malloc(n * sizeof(struct TreeNode*));
    obj->top = -1;
    struct TreeNode* curr = root;
    while (curr) {
        obj->stack[++(obj->top)] = curr;
        curr = curr->left;
    }
    return obj;
}
int bstIteratorNext(BSTIterator* obj) {
    struct TreeNode* node = obj->stack[(obj->top)--];
    struct TreeNode* curr = node->right;
    while (curr) {
        obj->stack[++(obj->top)] = curr;
        curr = curr->left;
    }
    return node->val;
}
bool bstIteratorHasNext(BSTIterator* obj) {
    return obj->top >= 0;
}
void bstIteratorFree(BSTIterator* obj) {
    free(obj->stack);
    free(obj);
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    struct TreeNode* root = buildTree(arr, n);
    int numOps; if (scanf("%d", &numOps) != 1) return 0;
    BSTIterator* it = bstIteratorCreate(root, n);
    for (int i = 0; i < numOps; i++) {
        char op[15]; scanf("%s", op);
        if (strcmp(op, "next") == 0) {
            printf("%d%c", bstIteratorNext(it), i == numOps - 1 ? '\\n' : ' ');
        } else if (strcmp(op, "hasNext") == 0) {
            printf("%s%c", bstIteratorHasNext(it) ? "true" : "false", i == numOps - 1 ? '\\n' : ' ');
        }
    }
    bstIteratorFree(it);
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <stack>
#include <string>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x) : val(x), left(NULL), right(NULL) {} };
TreeNode* buildTree(const vector<int>& arr) {
    if (arr.empty() || arr[0] == -1) return NULL;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q; q.push(root); size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (arr[i] != -1) { curr->left = new TreeNode(arr[i]); q.push(curr->left); }
        i++;
        if (i < arr.size() && arr[i] != -1) { curr->right = new TreeNode(arr[i]); q.push(curr->right); }
        i++;
    }
    return root;
}
class BSTIterator {
    stack<TreeNode*> st;
    void pushLeft(TreeNode* node) {
        while (node) { st.push(node); node = node->left; }
    }
public:
    BSTIterator(TreeNode* root) { pushLeft(root); }
    int next() {
        TreeNode* node = st.top(); st.pop();
        pushLeft(node->right);
        return node->val;
    }
    bool hasNext() { return !st.empty(); }
};
int main() {
    int n; if (cin >> n) {
        vector<int> arr(n); for (int i = 0; i < n; i++) cin >> arr[i];
        TreeNode* root = buildTree(arr);
        BSTIterator it(root);
        int numOps;
        cin >> numOps;
        for (int i = 0; i < numOps; i++) {
            string op; cin >> op;
            if (op == "next") {
                cout << it.next() << (i == numOps - 1 ? "" : " ");
            } else if (op == "hasNext") {
                cout << (it.hasNext() ? "true" : "false") << (i == numOps - 1 ? "" : " ");
            }
        }
        cout << "\\n";
    }
    return 0;
}`,
  },
};
