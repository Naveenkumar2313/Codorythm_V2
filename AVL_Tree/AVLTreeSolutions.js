export const avlTreeSolutions = {
'avl-e1': {
  python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

def avl_height(root):
    return root.height - 1 if root else -1

n = int(input())
keys = list(map(int, input().split()))

root = None
for k in keys:
    root = insert(root, k)

print(avl_height(root))`,

  java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int key) {
            this.key = key;
            this.height = 1;
        }
    }

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key)
            return rightRotate(root);

        if (balance < -1 && key > root.right.key)
            return leftRotate(root);

        if (balance > 1 && key > root.left.key) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    static int avlHeight(Node root) {
        return root == null ? -1 : root.height - 1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        for (int i = 0; i < n; i++) {
            root = insert(root, sc.nextInt());
        }

        System.out.println(avlHeight(root));
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key;
    int height;
    struct Node *left;
    struct Node *right;
} Node;

int max(int a, int b) {
    return (a > b) ? a : b;
}

int height(Node* node) {
    return node ? node->height : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (root == NULL)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int avlHeight(Node* root) {
    return root ? root->height - 1 : -1;
}

int main() {
    int n;
    scanf("%d", &n);

    Node* root = NULL;

    for (int i = 0; i < n; i++) {
        int k;
        scanf("%d", &k);
        root = insert(root, k);
    }

    printf("%d\n", avlHeight(root));
    return 0;
}`,

  cpp: `#include <iostream>
using namespace std;

struct Node {
    int key;
    int height;
    Node *left, *right;

    Node(int k) {
        key = k;
        height = 1;
        left = right = nullptr;
    }
};

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int avlHeight(Node* root) {
    return root ? root->height - 1 : -1;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    Node* root = nullptr;

    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;
        root = insert(root, k);
    }

    cout << avlHeight(root) << "\n";
    return 0;
}`
},

  'avl-e2': {
    python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

def balance_factor(root):
    return get_balance(root)

n = int(input())
keys = list(map(int, input().split()))

root = None
for k in keys:
    root = insert(root, k)

print(balance_factor(root))`,

    java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int k) {
            key = k;
            height = 1;
        }
    }

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key)
            return rightRotate(root);

        if (balance < -1 && key > root.right.key)
            return leftRotate(root);

        if (balance > 1 && key > root.left.key) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    static int balanceFactor(Node root) {
        return getBalance(root);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        for (int i = 0; i < n; i++) {
            root = insert(root, sc.nextInt());
        }

        System.out.println(balanceFactor(root));
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key;
    int height;
    struct Node *left, *right;
} Node;

int max(int a, int b) {
    return (a > b) ? a : b;
}

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (root == NULL)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int balanceFactor(Node* root) {
    return getBalance(root);
}

int main() {
    int n;
    scanf("%d", &n);

    Node* root = NULL;

    for (int i = 0; i < n; i++) {
        int k;
        scanf("%d", &k);
        root = insert(root, k);
    }

    printf("%d\n", balanceFactor(root));
    return 0;
}`,

    cpp: `#include <iostream>
using namespace std;

struct Node {
    int key;
    int height;
    Node *left, *right;

    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int balanceFactor(Node* root) {
    return getBalance(root);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    Node* root = nullptr;

    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;
        root = insert(root, k);
    }

    cout << balanceFactor(root) << "\n";
    return 0;
}`
  },

  'avl-e3': {
    python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

def inorder(root, result):
    if root:
        inorder(root.left, result)
        result.append(root.key)
        inorder(root.right, result)

n = int(input())
keys = list(map(int, input().split()))

root = None
for k in keys:
    root = insert(root, k)

result = []
inorder(root, result)

print(" ".join(map(str, result)))`,

    java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int k) {
            key = k;
            height = 1;
        }
    }

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key)
            return rightRotate(root);

        if (balance < -1 && key > root.right.key)
            return leftRotate(root);

        if (balance > 1 && key > root.left.key) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    static void inorder(Node root, List<Integer> result) {
        if (root == null) return;

        inorder(root.left, result);
        result.add(root.key);
        inorder(root.right, result);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        for (int i = 0; i < n; i++) {
            root = insert(root, sc.nextInt());
        }

        List<Integer> result = new ArrayList<>();
        inorder(root, result);

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < result.size(); i++) {
            if (i > 0) sb.append(" ");
            sb.append(result.get(i));
        }

        System.out.println(sb);
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key;
    int height;
    struct Node *left, *right;
} Node;

int first = 1;

int max(int a, int b) {
    return (a > b) ? a : b;
}

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (root == NULL)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

void inorder(Node* root) {
    if (root == NULL) return;

    inorder(root->left);

    if (!first) printf(" ");
    printf("%d", root->key);
    first = 0;

    inorder(root->right);
}

int main() {
    int n;
    scanf("%d", &n);

    Node* root = NULL;

    for (int i = 0; i < n; i++) {
        int k;
        scanf("%d", &k);
        root = insert(root, k);
    }

    inorder(root);
    printf("\n");

    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Node {
    int key, height;
    Node *left, *right;

    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

void inorder(Node* root, vector<int>& result) {
    if (!root) return;

    inorder(root->left, result);
    result.push_back(root->key);
    inorder(root->right, result);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    Node* root = nullptr;

    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;
        root = insert(root, k);
    }

    vector<int> result;
    inorder(root, result);

    for (int i = 0; i < (int)result.size(); i++) {
        if (i > 0) cout << " ";
        cout << result[i];
    }

    cout << "\n";
    return 0;
}`
  },

  'avl-e4': {
    python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

def search(root, target):
    while root:
        if root.key == target:
            return True
        elif target < root.key:
            root = root.left
        else:
            root = root.right
    return False

n = int(input())
keys = list(map(int, input().split()))
target = int(input())

root = None
for k in keys:
    root = insert(root, k)

print(str(search(root, target)).lower())`,

    java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int k) {
            key = k;
            height = 1;
        }
    }

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key)
            return rightRotate(root);

        if (balance < -1 && key > root.right.key)
            return leftRotate(root);

        if (balance > 1 && key > root.left.key) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    static boolean search(Node root, int target) {
        while (root != null) {
            if (root.key == target)
                return true;
            else if (target < root.key)
                root = root.left;
            else
                root = root.right;
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        for (int i = 0; i < n; i++) {
            root = insert(root, sc.nextInt());
        }

        int target = sc.nextInt();
        System.out.println(search(root, target));
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int key;
    int height;
    struct Node *left, *right;
} Node;

int max(int a, int b) {
    return (a > b) ? a : b;
}

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (root == NULL)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

bool search(Node* root, int target) {
    while (root != NULL) {
        if (root->key == target)
            return true;
        else if (target < root->key)
            root = root->left;
        else
            root = root->right;
    }
    return false;
}

int main() {
    int n;
    scanf("%d", &n);

    Node* root = NULL;

    for (int i = 0; i < n; i++) {
        int k;
        scanf("%d", &k);
        root = insert(root, k);
    }

    int target;
    scanf("%d", &target);

    printf("%s\n", search(root, target) ? "true" : "false");
    return 0;
}`,

    cpp: `#include <iostream>
using namespace std;

struct Node {
    int key;
    int height;
    Node *left, *right;

    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

bool search(Node* root, int target) {
    while (root) {
        if (root->key == target)
            return true;
        else if (target < root->key)
            root = root->left;
        else
            root = root->right;
    }
    return false;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    Node* root = nullptr;

    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;
        root = insert(root, k);
    }

    int target;
    cin >> target;

    cout << (search(root, target) ? "true" : "false") << "\n";
    return 0;
}`
  },

  'avl-e5': {
    python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

def count_nodes(root):
    if not root:
        return 0
    return 1 + count_nodes(root.left) + count_nodes(root.right)

n = int(input())
keys = list(map(int, input().split()))

root = None
for k in keys:
    root = insert(root, k)

print(count_nodes(root))`,

    java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int k) {
            key = k;
            height = 1;
        }
    }

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key)
            return rightRotate(root);

        if (balance < -1 && key > root.right.key)
            return leftRotate(root);

        if (balance > 1 && key > root.left.key) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    static int countNodes(Node root) {
        if (root == null)
            return 0;
        return 1 + countNodes(root.left) + countNodes(root.right);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        for (int i = 0; i < n; i++) {
            root = insert(root, sc.nextInt());
        }

        System.out.println(countNodes(root));
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key;
    int height;
    struct Node *left, *right;
} Node;

int max(int a, int b) {
    return (a > b) ? a : b;
}

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (root == NULL)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int countNodes(Node* root) {
    if (root == NULL)
        return 0;
    return 1 + countNodes(root->left) + countNodes(root->right);
}

int main() {
    int n;
    scanf("%d", &n);

    Node* root = NULL;

    for (int i = 0; i < n; i++) {
        int k;
        scanf("%d", &k);
        root = insert(root, k);
    }

    printf("%d\n", countNodes(root));
    return 0;
}`,

    cpp: `#include <iostream>
using namespace std;

struct Node {
    int key;
    int height;
    Node *left, *right;

    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int countNodes(Node* root) {
    if (!root)
        return 0;
    return 1 + countNodes(root->left) + countNodes(root->right);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    Node* root = nullptr;

    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;
        root = insert(root, k);
    }

    cout << countNodes(root) << "\n";
    return 0;
}`
  },

  'avl-m1': {
  python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

n = int(input())
keys = list(map(int, input().split()))

root = None
for k in keys:
    root = insert(root, k)

print(root.key)`,

  java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int k) {
            key = k;
            height = 1;
        }
    }

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key)
            return rightRotate(root);

        if (balance < -1 && key > root.right.key)
            return leftRotate(root);

        if (balance > 1 && key > root.left.key) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        for (int i = 0; i < n; i++) {
            root = insert(root, sc.nextInt());
        }

        System.out.println(root.key);
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key;
    int height;
    struct Node *left, *right;
} Node;

int max(int a, int b) {
    return (a > b) ? a : b;
}

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (root == NULL)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int main() {
    int n;
    scanf("%d", &n);

    Node* root = NULL;

    for (int i = 0; i < n; i++) {
        int k;
        scanf("%d", &k);
        root = insert(root, k);
    }

    printf("%d\n", root->key);
    return 0;
}`,

  cpp: `#include <iostream>
using namespace std;

struct Node {
    int key;
    int height;
    Node *left, *right;

    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    Node* root = nullptr;

    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;
        root = insert(root, k);
    }

    cout << root->key << "\n";
    return 0;
}`
  },

  'avl-m2': {
  python: `from collections import deque

class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

def level_order(root):
    if not root:
        return

    q = deque([root])

    while q:
        size = len(q)
        level = []

        for _ in range(size):
            node = q.popleft()
            level.append(str(node.key))

            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)

        print(" ".join(level))

n = int(input())
keys = list(map(int, input().split()))

root = None
for k in keys:
    root = insert(root, k)

level_order(root)`,

  java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int k) {
            key = k;
            height = 1;
        }
    }

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    public static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key)
            return rightRotate(root);

        if (balance < -1 && key > root.right.key)
            return leftRotate(root);

        if (balance > 1 && key > root.left.key) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    public static void levelOrder(Node root) {
        if (root == null) return;

        Queue<Node> q = new LinkedList<>();
        q.offer(root);

        while (!q.isEmpty()) {
            int size = q.size();
            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < size; i++) {
                Node node = q.poll();

                if (i > 0) sb.append(" ");
                sb.append(node.key);

                if (node.left != null) q.offer(node.left);
                if (node.right != null) q.offer(node.right);
            }

            System.out.println(sb);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        for (int i = 0; i < n; i++)
            root = insert(root, sc.nextInt());

        levelOrder(root);
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key, height;
    struct Node *left, *right;
} Node;

int max(int a, int b) {
    return a > b ? a : b;
}

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

void levelOrder(Node* root) {
    if (!root) return;

    Node* queue[2000];
    int front = 0, rear = 0;

    queue[rear++] = root;

    while (front < rear) {
        int size = rear - front;

        for (int i = 0; i < size; i++) {
            Node* node = queue[front++];

            printf("%d", node->key);
            if (i < size - 1) printf(" ");

            if (node->left)
                queue[rear++] = node->left;
            if (node->right)
                queue[rear++] = node->right;
        }

        printf("\n");
    }
}

int main() {
    int n;
    scanf("%d", &n);

    Node* root = NULL;

    for (int i = 0; i < n; i++) {
        int k;
        scanf("%d", &k);
        root = insert(root, k);
    }

    levelOrder(root);
    return 0;
}`,

  cpp: `#include <iostream>
#include <queue>
using namespace std;

struct Node {
    int key, height;
    Node *left, *right;

    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

void levelOrder(Node* root) {
    if (!root) return;

    queue<Node*> q;
    q.push(root);

    while (!q.empty()) {
        int size = q.size();

        for (int i = 0; i < size; i++) {
            Node* node = q.front();
            q.pop();

            cout << node->key;
            if (i < size - 1) cout << " ";

            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }

        cout << "\n";
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    Node* root = nullptr;

    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;
        root = insert(root, k);
    }

    levelOrder(root);
    return 0;
}`  
},

'avl-m3': {
  python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

def min_value_node(node):
    current = node
    while current.left:
        current = current.left
    return current

def delete(root, key):
    if not root:
        return root

    if key < root.key:
        root.left = delete(root.left, key)
    elif key > root.key:
        root.right = delete(root.right, key)
    else:
        if not root.left:
            return root.right
        elif not root.right:
            return root.left

        temp = min_value_node(root.right)
        root.key = temp.key
        root.right = delete(root.right, temp.key)

    if not root:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and get_balance(root.left) >= 0:
        return right_rotate(root)

    if balance > 1 and get_balance(root.left) < 0:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and get_balance(root.right) <= 0:
        return left_rotate(root)

    if balance < -1 and get_balance(root.right) > 0:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

def inorder(root, result):
    if root:
        inorder(root.left, result)
        result.append(root.key)
        inorder(root.right, result)

n = int(input())
keys = list(map(int, input().split()))
delete_key = int(input())

root = None
for k in keys:
    root = insert(root, k)

root = delete(root, delete_key)

result = []
inorder(root, result)

print(" ".join(map(str, result)))`,

  java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int k) {
            key = k;
            height = 1;
        }
    }

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key)
            return rightRotate(root);

        if (balance < -1 && key > root.right.key)
            return leftRotate(root);

        if (balance > 1 && key > root.left.key) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    static Node minValueNode(Node node) {
        Node current = node;
        while (current.left != null)
            current = current.left;
        return current;
    }

    static Node delete(Node root, int key) {
        if (root == null)
            return root;

        if (key < root.key)
            root.left = delete(root.left, key);
        else if (key > root.key)
            root.right = delete(root.right, key);
        else {
            if (root.left == null)
                return root.right;
            else if (root.right == null)
                return root.left;

            Node temp = minValueNode(root.right);
            root.key = temp.key;
            root.right = delete(root.right, temp.key);
        }

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && getBalance(root.left) >= 0)
            return rightRotate(root);

        if (balance > 1 && getBalance(root.left) < 0) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && getBalance(root.right) <= 0)
            return leftRotate(root);

        if (balance < -1 && getBalance(root.right) > 0) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    static void inorder(Node root, List<Integer> result) {
        if (root != null) {
            inorder(root.left, result);
            result.add(root.key);
            inorder(root.right, result);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        for (int i = 0; i < n; i++)
            root = insert(root, sc.nextInt());

        int deleteKey = sc.nextInt();
        root = delete(root, deleteKey);

        List<Integer> result = new ArrayList<>();
        inorder(root, result);

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < result.size(); i++) {
            if (i > 0) sb.append(" ");
            sb.append(result.get(i));
        }

        System.out.println(sb);
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key, height;
    struct Node *left, *right;
} Node;

int max(int a, int b) {
    return a > b ? a : b;
}

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

Node* minValueNode(Node* node) {
    Node* current = node;
    while (current->left)
        current = current->left;
    return current;
}

Node* delete(Node* root, int key) {
    if (!root)
        return root;

    if (key < root->key)
        root->left = delete(root->left, key);
    else if (key > root->key)
        root->right = delete(root->right, key);
    else {
        if (!root->left) {
            Node* temp = root->right;
            free(root);
            return temp;
        }
        else if (!root->right) {
            Node* temp = root->left;
            free(root);
            return temp;
        }

        Node* temp = minValueNode(root->right);
        root->key = temp->key;
        root->right = delete(root->right, temp->key);
    }

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && getBalance(root->left) >= 0)
        return rightRotate(root);

    if (balance > 1 && getBalance(root->left) < 0) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && getBalance(root->right) <= 0)
        return leftRotate(root);

    if (balance < -1 && getBalance(root->right) > 0) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

void inorder(Node* root, int* first) {
    if (root) {
        inorder(root->left, first);

        if (!(*first))
            printf(" ");
        printf("%d", root->key);
        *first = 0;

        inorder(root->right, first);
    }
}

int main() {
    int n;
    scanf("%d", &n);

    Node* root = NULL;

    for (int i = 0; i < n; i++) {
        int k;
        scanf("%d", &k);
        root = insert(root, k);
    }

    int deleteKey;
    scanf("%d", &deleteKey);

    root = delete(root, deleteKey);

    int first = 1;
    inorder(root, &first);
    printf("\n");

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Node {
    int key, height;
    Node *left, *right;

    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

Node* minValueNode(Node* node) {
    Node* current = node;
    while (current->left)
        current = current->left;
    return current;
}

Node* deleteNode(Node* root, int key) {
    if (!root)
        return root;

    if (key < root->key)
        root->left = deleteNode(root->left, key);
    else if (key > root->key)
        root->right = deleteNode(root->right, key);
    else {
        if (!root->left) {
            Node* temp = root->right;
            delete root;
            return temp;
        }
        else if (!root->right) {
            Node* temp = root->left;
            delete root;
            return temp;
        }

        Node* temp = minValueNode(root->right);
        root->key = temp->key;
        root->right = deleteNode(root->right, temp->key);
    }

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && getBalance(root->left) >= 0)
        return rightRotate(root);

    if (balance > 1 && getBalance(root->left) < 0) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && getBalance(root->right) <= 0)
        return leftRotate(root);

    if (balance < -1 && getBalance(root->right) > 0) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

void inorder(Node* root, vector<int>& result) {
    if (root) {
        inorder(root->left, result);
        result.push_back(root->key);
        inorder(root->right, result);
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    Node* root = nullptr;

    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;
        root = insert(root, k);
    }

    int deleteKey;
    cin >> deleteKey;

    root = deleteNode(root, deleteKey);

    vector<int> result;
    inorder(root, result);

    for (int i = 0; i < (int)result.size(); i++) {
        if (i > 0) cout << " ";
        cout << result[i];
    }

    cout << "\n";
    return 0;
}`
    },
    'avl-m4': {
  python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

def kth_smallest(root, k):
    stack = []
    curr = root
    count = 0

    while stack or curr:
        while curr:
            stack.append(curr)
            curr = curr.left

        curr = stack.pop()
        count += 1

        if count == k:
            return curr.key

        curr = curr.right

    return -1

n = int(input())
keys = list(map(int, input().split()))
k = int(input())

root = None
for key in keys:
    root = insert(root, key)

print(kth_smallest(root, k))`,

  java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int k) {
            key = k;
            height = 1;
        }
    }

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    public static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key)
            return rightRotate(root);

        if (balance < -1 && key > root.right.key)
            return leftRotate(root);

        if (balance > 1 && key > root.left.key) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    public static int kthSmallest(Node root, int k) {
        Stack<Node> stack = new Stack<>();
        Node curr = root;
        int count = 0;

        while (!stack.isEmpty() || curr != null) {
            while (curr != null) {
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop();
            count++;

            if (count == k)
                return curr.key;

            curr = curr.right;
        }

        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        for (int i = 0; i < n; i++)
            root = insert(root, sc.nextInt());

        int k = sc.nextInt();

        System.out.println(kthSmallest(root, k));
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key, height;
    struct Node *left, *right;
} Node;

int max(int a, int b) {
    return (a > b) ? a : b;
}

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int kthSmallest(Node* root, int k, int* count) {
    if (!root)
        return -1;

    int left = kthSmallest(root->left, k, count);
    if (*count >= k)
        return left;

    (*count)++;
    if (*count == k)
        return root->key;

    return kthSmallest(root->right, k, count);
}

int main() {
    int n;
    scanf("%d", &n);

    Node* root = NULL;

    for (int i = 0; i < n; i++) {
        int x;
        scanf("%d", &x);
        root = insert(root, x);
    }

    int k;
    scanf("%d", &k);

    int count = 0;
    printf("%d\n", kthSmallest(root, k, &count));

    return 0;
}`,

  cpp: `#include <iostream>
using namespace std;

struct Node {
    int key, height;
    Node *left, *right;

    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int kthSmallest(Node* root, int k, int& count) {
    if (!root)
        return -1;

    int left = kthSmallest(root->left, k, count);
    if (count >= k)
        return left;

    count++;
    if (count == k)
        return root->key;

    return kthSmallest(root->right, k, count);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    Node* root = nullptr;

    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        root = insert(root, x);
    }

    int k;
    cin >> k;

    int count = 0;
    cout << kthSmallest(root, k, count) << "\n";

    return 0;
}`
},
'avl-m5': {
  python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

def count_in_range(root, lo, hi):
    if not root:
        return 0

    if root.key < lo:
        return count_in_range(root.right, lo, hi)

    if root.key > hi:
        return count_in_range(root.left, lo, hi)

    return (1 +
            count_in_range(root.left, lo, hi) +
            count_in_range(root.right, lo, hi))

n = int(input())
keys = list(map(int, input().split()))
lo = int(input())
hi = int(input())

root = None
for k in keys:
    root = insert(root, k)

print(count_in_range(root, lo, hi))`,

  java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int k) {
            key = k;
            height = 1;
        }
    }

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    public static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key)
            return rightRotate(root);

        if (balance < -1 && key > root.right.key)
            return leftRotate(root);

        if (balance > 1 && key > root.left.key) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    public static int countInRange(Node root, int lo, int hi) {
        if (root == null)
            return 0;

        if (root.key < lo)
            return countInRange(root.right, lo, hi);

        if (root.key > hi)
            return countInRange(root.left, lo, hi);

        return 1 +
               countInRange(root.left, lo, hi) +
               countInRange(root.right, lo, hi);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        for (int i = 0; i < n; i++)
            root = insert(root, sc.nextInt());

        int lo = sc.nextInt();
        int hi = sc.nextInt();

        System.out.println(countInRange(root, lo, hi));
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key, height;
    struct Node *left, *right;
} Node;

int max(int a, int b) {
    return (a > b) ? a : b;
}

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int countInRange(Node* root, int lo, int hi) {
    if (!root)
        return 0;

    if (root->key < lo)
        return countInRange(root->right, lo, hi);

    if (root->key > hi)
        return countInRange(root->left, lo, hi);

    return 1 +
           countInRange(root->left, lo, hi) +
           countInRange(root->right, lo, hi);
}

int main() {
    int n;
    scanf("%d", &n);

    Node* root = NULL;

    for (int i = 0; i < n; i++) {
        int k;
        scanf("%d", &k);
        root = insert(root, k);
    }

    int lo, hi;
    scanf("%d", &lo);
    scanf("%d", &hi);

    printf("%d\n", countInRange(root, lo, hi));

    return 0;
}`,

  cpp: `#include <iostream>
using namespace std;

struct Node {
    int key, height;
    Node *left, *right;

    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int countInRange(Node* root, int lo, int hi) {
    if (!root)
        return 0;

    if (root->key < lo)
        return countInRange(root->right, lo, hi);

    if (root->key > hi)
        return countInRange(root->left, lo, hi);

    return 1 +
           countInRange(root->left, lo, hi) +
           countInRange(root->right, lo, hi);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    Node* root = nullptr;

    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;
        root = insert(root, k);
    }

    int lo, hi;
    cin >> lo >> hi;

    cout << countInRange(root, lo, hi) << "\n";

    return 0;
}`
},
'avl-h1': {
  python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

def inorder(root, result):
    if root:
        inorder(root.left, result)
        result.append(root.key)
        inorder(root.right, result)

def preorder(root, result):
    if root:
        result.append(root.key)
        preorder(root.left, result)
        preorder(root.right, result)

n = int(input())
arr = list(map(int, input().split()))

root = None
for k in arr:
    root = insert(root, k)

io_res, pre_res = [], []

inorder(root, io_res)
preorder(root, pre_res)

print(" ".join(map(str, io_res)))
print(" ".join(map(str, pre_res)))`,

  java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int k) {
            key = k;
            height = 1;
        }
    }

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    public static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key)
            return rightRotate(root);

        if (balance < -1 && key > root.right.key)
            return leftRotate(root);

        if (balance > 1 && key > root.left.key) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    public static void inorder(Node root, List<Integer> result) {
        if (root != null) {
            inorder(root.left, result);
            result.add(root.key);
            inorder(root.right, result);
        }
    }

    public static void preorder(Node root, List<Integer> result) {
        if (root != null) {
            result.add(root.key);
            preorder(root.left, result);
            preorder(root.right, result);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        for (int i = 0; i < n; i++)
            root = insert(root, sc.nextInt());

        List<Integer> io = new ArrayList<>();
        List<Integer> pre = new ArrayList<>();

        inorder(root, io);
        preorder(root, pre);

        StringBuilder sb1 = new StringBuilder();
        StringBuilder sb2 = new StringBuilder();

        for (int i = 0; i < io.size(); i++) {
            if (i > 0) sb1.append(" ");
            sb1.append(io.get(i));
        }

        for (int i = 0; i < pre.size(); i++) {
            if (i > 0) sb2.append(" ");
            sb2.append(pre.get(i));
        }

        System.out.println(sb1);
        System.out.println(sb2);
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key, height;
    struct Node *left, *right;
} Node;

int max(int a, int b) {
    return a > b ? a : b;
}

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

void inorder(Node* root, int* first) {
    if (root) {
        inorder(root->left, first);

        if (!(*first))
            printf(" ");
        printf("%d", root->key);
        *first = 0;

        inorder(root->right, first);
    }
}

void preorder(Node* root, int* first) {
    if (root) {
        if (!(*first))
            printf(" ");
        printf("%d", root->key);
        *first = 0;

        preorder(root->left, first);
        preorder(root->right, first);
    }
}

int main() {
    int n;
    scanf("%d", &n);

    Node* root = NULL;

    for (int i = 0; i < n; i++) {
        int k;
        scanf("%d", &k);
        root = insert(root, k);
    }

    int first = 1;
    inorder(root, &first);
    printf("\n");

    first = 1;
    preorder(root, &first);
    printf("\n");

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Node {
    int key, height;
    Node *left, *right;

    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

void inorder(Node* root, vector<int>& result) {
    if (root) {
        inorder(root->left, result);
        result.push_back(root->key);
        inorder(root->right, result);
    }
}

void preorder(Node* root, vector<int>& result) {
    if (root) {
        result.push_back(root->key);
        preorder(root->left, result);
        preorder(root->right, result);
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    Node* root = nullptr;

    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;
        root = insert(root, k);
    }

    vector<int> io, pre;

    inorder(root, io);
    preorder(root, pre);

    for (int i = 0; i < (int)io.size(); i++) {
        if (i > 0) cout << " ";
        cout << io[i];
    }
    cout << "\n";

    for (int i = 0; i < (int)pre.size(); i++) {
        if (i > 0) cout << " ";
        cout << pre[i];
    }
    cout << "\n";

    return 0;
}`
},
'avl-h2': {
  python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

def inorder(root, result):
    if root:
        inorder(root.left, result)
        result.append(root.key)
        inorder(root.right, result)

def merge_avl(root1, root2):
    arr1, arr2 = [], []

    inorder(root1, arr1)
    inorder(root2, arr2)

    merged_keys = arr1 + arr2

    root = None
    for key in merged_keys:
        root = insert(root, key)

    return root

n1 = int(input())
keys1 = list(map(int, input().split()))

n2 = int(input())
keys2 = list(map(int, input().split()))

root1 = None
for k in keys1:
    root1 = insert(root1, k)

root2 = None
for k in keys2:
    root2 = insert(root2, k)

merged = merge_avl(root1, root2)

result = []
inorder(merged, result)

print(" ".join(map(str, result)))`,

  java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int k) {
            key = k;
            height = 1;
        }
    }

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    public static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key)
            return rightRotate(root);

        if (balance < -1 && key > root.right.key)
            return leftRotate(root);

        if (balance > 1 && key > root.left.key) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    public static void inorder(Node root, List<Integer> result) {
        if (root != null) {
            inorder(root.left, result);
            result.add(root.key);
            inorder(root.right, result);
        }
    }

    public static Node mergeAVL(Node root1, Node root2) {
        List<Integer> arr1 = new ArrayList<>();
        List<Integer> arr2 = new ArrayList<>();

        inorder(root1, arr1);
        inorder(root2, arr2);

        Node merged = null;

        for (int x : arr1)
            merged = insert(merged, x);

        for (int x : arr2)
            merged = insert(merged, x);

        return merged;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n1 = sc.nextInt();
        Node root1 = null;
        for (int i = 0; i < n1; i++)
            root1 = insert(root1, sc.nextInt());

        int n2 = sc.nextInt();
        Node root2 = null;
        for (int i = 0; i < n2; i++)
            root2 = insert(root2, sc.nextInt());

        Node merged = mergeAVL(root1, root2);

        List<Integer> result = new ArrayList<>();
        inorder(merged, result);

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < result.size(); i++) {
            if (i > 0) sb.append(" ");
            sb.append(result.get(i));
        }

        System.out.println(sb);
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key, height;
    struct Node *left, *right;
} Node;

int max(int a, int b) {
    return a > b ? a : b;
}

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

void inorder(Node* root, int* arr, int* idx) {
    if (root) {
        inorder(root->left, arr, idx);
        arr[(*idx)++] = root->key;
        inorder(root->right, arr, idx);
    }
}

Node* mergeAVL(Node* root1, Node* root2) {
    int arr1[1001], arr2[1001];
    int n1 = 0, n2 = 0;

    inorder(root1, arr1, &n1);
    inorder(root2, arr2, &n2);

    Node* merged = NULL;

    for (int i = 0; i < n1; i++)
        merged = insert(merged, arr1[i]);

    for (int i = 0; i < n2; i++)
        merged = insert(merged, arr2[i]);

    return merged;
}

int main() {
    int n1;
    scanf("%d", &n1);

    Node* root1 = NULL;
    for (int i = 0; i < n1; i++) {
        int k;
        scanf("%d", &k);
        root1 = insert(root1, k);
    }

    int n2;
    scanf("%d", &n2);

    Node* root2 = NULL;
    for (int i = 0; i < n2; i++) {
        int k;
        scanf("%d", &k);
        root2 = insert(root2, k);
    }

    Node* merged = mergeAVL(root1, root2);

    int arr[1001];
    int idx = 0;

    inorder(merged, arr, &idx);

    for (int i = 0; i < idx; i++) {
        if (i > 0) printf(" ");
        printf("%d", arr[i]);
    }

    printf("\n");
    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Node {
    int key, height;
    Node *left, *right;

    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

void inorder(Node* root, vector<int>& result) {
    if (root) {
        inorder(root->left, result);
        result.push_back(root->key);
        inorder(root->right, result);
    }
}

Node* mergeAVL(Node* root1, Node* root2) {
    vector<int> arr1, arr2;

    inorder(root1, arr1);
    inorder(root2, arr2);

    Node* merged = nullptr;

    for (int x : arr1)
        merged = insert(merged, x);

    for (int x : arr2)
        merged = insert(merged, x);

    return merged;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n1;
    cin >> n1;

    Node* root1 = nullptr;
    for (int i = 0; i < n1; i++) {
        int k;
        cin >> k;
        root1 = insert(root1, k);
    }

    int n2;
    cin >> n2;

    Node* root2 = nullptr;
    for (int i = 0; i < n2; i++) {
        int k;
        cin >> k;
        root2 = insert(root2, k);
    }

    Node* merged = mergeAVL(root1, root2);

    vector<int> result;
    inorder(merged, result);

    for (int i = 0; i < (int)result.size(); i++) {
        if (i > 0) cout << " ";
        cout << result[i];
    }

    cout << "\n";
    return 0;
}`
},
'avl-h3': {
  python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

def lca(root, p, q):
    while root:
        if p < root.key and q < root.key:
            root = root.left
        elif p > root.key and q > root.key:
            root = root.right
        else:
            return root.key
    return -1

n = int(input())
keys = list(map(int, input().split()))
p = int(input())
q = int(input())

root = None
for k in keys:
    root = insert(root, k)

print(lca(root, p, q))`,

  java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int k) {
            key = k;
            height = 1;
        }
    }

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    public static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key)
            return rightRotate(root);

        if (balance < -1 && key > root.right.key)
            return leftRotate(root);

        if (balance > 1 && key > root.left.key) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    public static int lca(Node root, int p, int q) {
        while (root != null) {
            if (p < root.key && q < root.key)
                root = root.left;
            else if (p > root.key && q > root.key)
                root = root.right;
            else
                return root.key;
        }
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        for (int i = 0; i < n; i++)
            root = insert(root, sc.nextInt());

        int p = sc.nextInt();
        int q = sc.nextInt();

        System.out.println(lca(root, p, q));
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key, height;
    struct Node *left, *right;
} Node;

int max(int a, int b) {
    return a > b ? a : b;
}

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int lca(Node* root, int p, int q) {
    while (root) {
        if (p < root->key && q < root->key)
            root = root->left;
        else if (p > root->key && q > root->key)
            root = root->right;
        else
            return root->key;
    }
    return -1;
}

int main() {
    int n;
    scanf("%d", &n);

    Node* root = NULL;

    for (int i = 0; i < n; i++) {
        int k;
        scanf("%d", &k);
        root = insert(root, k);
    }

    int p, q;
    scanf("%d %d", &p, &q);

    printf("%d\n", lca(root, p, q));

    return 0;
}`,

  cpp: `#include <iostream>
using namespace std;

struct Node {
    int key, height;
    Node *left, *right;

    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int lca(Node* root, int p, int q) {
    while (root) {
        if (p < root->key && q < root->key)
            root = root->left;
        else if (p > root->key && q > root->key)
            root = root->right;
        else
            return root->key;
    }
    return -1;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    Node* root = nullptr;

    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;
        root = insert(root, k);
    }

    int p, q;
    cin >> p >> q;

    cout << lca(root, p, q) << "\n";

    return 0;
}`
},
'avl-h4': {
  python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

rotation_count = 0

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    global rotation_count

    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        rotation_count += 1
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        rotation_count += 1
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        rotation_count += 2
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        rotation_count += 2
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

n = int(input())
keys = list(map(int, input().split()))

root = None
for k in keys:
    root = insert(root, k)

print(rotation_count)`,

  java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int k) {
            key = k;
            height = 1;
        }
    }

    static int rotationCount = 0;

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    public static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key) {
            rotationCount++;
            return rightRotate(root);
        }

        if (balance < -1 && key > root.right.key) {
            rotationCount++;
            return leftRotate(root);
        }

        if (balance > 1 && key > root.left.key) {
            rotationCount += 2;
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            rotationCount += 2;
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        for (int i = 0; i < n; i++)
            root = insert(root, sc.nextInt());

        System.out.println(rotationCount);
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key, height;
    struct Node *left, *right;
} Node;

int rotationCount = 0;

int max(int a, int b) {
    return a > b ? a : b;
}

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key) {
        rotationCount++;
        return rightRotate(root);
    }

    if (balance < -1 && key > root->right->key) {
        rotationCount++;
        return leftRotate(root);
    }

    if (balance > 1 && key > root->left->key) {
        rotationCount += 2;
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        rotationCount += 2;
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int main() {
    int n;
    scanf("%d", &n);

    Node* root = NULL;

    for (int i = 0; i < n; i++) {
        int k;
        scanf("%d", &k);
        root = insert(root, k);
    }

    printf("%d\n", rotationCount);

    return 0;
}`,

  cpp: `#include <iostream>
using namespace std;

struct Node {
    int key, height;
    Node *left, *right;

    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int rotationCount = 0;

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key) {
        rotationCount++;
        return rightRotate(root);
    }

    if (balance < -1 && key > root->right->key) {
        rotationCount++;
        return leftRotate(root);
    }

    if (balance > 1 && key > root->left->key) {
        rotationCount += 2;
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        rotationCount += 2;
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    Node* root = nullptr;

    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;
        root = insert(root, k);
    }

    cout << rotationCount << "\n";

    return 0;
}`
},
'avl-h5': {
  python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(node):
    return node.height if node else 0

def get_balance(node):
    return height(node.left) - height(node.right) if node else 0

def right_rotate(y):
    x = y.left
    t2 = x.right

    x.right = y
    y.left = t2

    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))

    return x

def left_rotate(x):
    y = x.right
    t2 = y.left

    y.left = x
    x.right = t2

    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))

    return y

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    else:
        return root

    root.height = 1 + max(height(root.left), height(root.right))

    balance = get_balance(root)

    if balance > 1 and key < root.left.key:
        return right_rotate(root)

    if balance < -1 and key > root.right.key:
        return left_rotate(root)

    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)

    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)

    return root

def closest_value(root, target):
    closest = root.key

    while root:
        curr_diff = abs(root.key - target)
        best_diff = abs(closest - target)

        if curr_diff < best_diff or (curr_diff == best_diff and root.key < closest):
            closest = root.key

        if target < root.key:
            root = root.left
        elif target > root.key:
            root = root.right
        else:
            return root.key

    return closest

n = int(input())
keys = list(map(int, input().split()))
target = int(input())

root = None
for k in keys:
    root = insert(root, k)

print(closest_value(root, target))`,

  java: `import java.util.*;

public class Solution {

    static class Node {
        int key, height;
        Node left, right;

        Node(int k) {
            key = k;
            height = 1;
        }
    }

    static int height(Node node) {
        return node == null ? 0 : node.height;
    }

    static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    static Node rightRotate(Node y) {
        Node x = y.left;
        Node t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));

        return x;
    }

    static Node leftRotate(Node x) {
        Node y = x.right;
        Node t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));

        return y;
    }

    public static Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.key)
            root.left = insert(root.left, key);
        else if (key > root.key)
            root.right = insert(root.right, key);
        else
            return root;

        root.height = 1 + Math.max(height(root.left), height(root.right));

        int balance = getBalance(root);

        if (balance > 1 && key < root.left.key)
            return rightRotate(root);

        if (balance < -1 && key > root.right.key)
            return leftRotate(root);

        if (balance > 1 && key > root.left.key) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    public static int closestValue(Node root, int target) {
        int closest = root.key;

        while (root != null) {
            int currDiff = Math.abs(root.key - target);
            int bestDiff = Math.abs(closest - target);

            if (currDiff < bestDiff ||
                (currDiff == bestDiff && root.key < closest)) {
                closest = root.key;
            }

            if (target < root.key)
                root = root.left;
            else if (target > root.key)
                root = root.right;
            else
                return root.key;
        }

        return closest;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        for (int i = 0; i < n; i++)
            root = insert(root, sc.nextInt());

        int target = sc.nextInt();

        System.out.println(closestValue(root, target));
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key, height;
    struct Node *left, *right;
} Node;

int max(int a, int b) {
    return a > b ? a : b;
}

int absVal(int x) {
    return x < 0 ? -x : x;
}

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->height = 1;
    node->left = node->right = NULL;
    return node;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return createNode(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int closestValue(Node* root, int target) {
    int closest = root->key;

    while (root) {
        int currDiff = absVal(root->key - target);
        int bestDiff = absVal(closest - target);

        if (currDiff < bestDiff ||
            (currDiff == bestDiff && root->key < closest))
            closest = root->key;

        if (target < root->key)
            root = root->left;
        else if (target > root->key)
            root = root->right;
        else
            return root->key;
    }

    return closest;
}

int main() {
    int n;
    scanf("%d", &n);

    Node* root = NULL;

    for (int i = 0; i < n; i++) {
        int k;
        scanf("%d", &k);
        root = insert(root, k);
    }

    int target;
    scanf("%d", &target);

    printf("%d\n", closestValue(root, target));

    return 0;
}`,

  cpp: `#include <iostream>
using namespace std;

struct Node {
    int key, height;
    Node *left, *right;

    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int height(Node* node) {
    return node ? node->height : 0;
}

int getBalance(Node* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));

    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));

    return y;
}

Node* insert(Node* root, int key) {
    if (!root)
        return new Node(key);

    if (key < root->key)
        root->left = insert(root->left, key);
    else if (key > root->key)
        root->right = insert(root->right, key);
    else
        return root;

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getBalance(root);

    if (balance > 1 && key < root->left->key)
        return rightRotate(root);

    if (balance < -1 && key > root->right->key)
        return leftRotate(root);

    if (balance > 1 && key > root->left->key) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    if (balance < -1 && key < root->right->key) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}

int closestValue(Node* root, int target) {
    int closest = root->key;

    while (root) {
        int currDiff = abs(root->key - target);
        int bestDiff = abs(closest - target);

        if (currDiff < bestDiff ||
            (currDiff == bestDiff && root->key < closest))
            closest = root->key;

        if (target < root->key)
            root = root->left;
        else if (target > root->key)
            root = root->right;
        else
            return root->key;
    }

    return closest;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    Node* root = nullptr;

    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;
        root = insert(root, k);
    }

    int target;
    cin >> target;

    cout << closestValue(root, target) << "\n";

    return 0;
}`
  },
};