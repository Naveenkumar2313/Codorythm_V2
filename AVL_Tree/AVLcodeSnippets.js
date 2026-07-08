// src/data/codeSnippets.js
export const AVLcodeSnippets = {
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key, height;
    struct Node *left, *right;
} Node;

int height(Node* n) { return n ? n->height : 0; }
int max(int a, int b) { return a > b ? a : b; }

Node* newNode(int key) {
    Node* n = (Node*)malloc(sizeof(Node));
    n->key = key; n->height = 1;
    n->left = n->right = NULL;
    return n;
}

void updateHeight(Node* n) {
    n->height = 1 + max(height(n->left), height(n->right));
}

int getBalance(Node* n) {
    return n ? height(n->left) - height(n->right) : 0;
}

Node* rotateRight(Node* y) {
    Node* x = y->left;
    Node* T2 = x->right;
    x->right = y; y->left = T2;
    updateHeight(y); updateHeight(x);
    return x;
}

Node* rotateLeft(Node* x) {
    Node* y = x->right;
    Node* T2 = y->left;
    y->left = x; x->right = T2;
    updateHeight(x); updateHeight(y);
    return y;
}

Node* insert(Node* node, int key) {
    if (!node) return newNode(key);
    if (key < node->key) node->left = insert(node->left, key);
    else if (key > node->key) node->right = insert(node->right, key);
    else return node;

    updateHeight(node);
    int balance = getBalance(node);

    if (balance > 1 && key < node->left->key) return rotateRight(node);
    if (balance < -1 && key > node->right->key) return rotateLeft(node);
    if (balance > 1 && key > node->left->key) {
        node->left = rotateLeft(node->left);
        return rotateRight(node);
    }
    if (balance < -1 && key < node->right->key) {
        node->right = rotateRight(node->right);
        return rotateLeft(node);
    }
    return node;
}

void inorder(Node* root) {
    if (root) {
        inorder(root->left);
        printf("%d ", root->key);
        inorder(root->right);
    }
}

int main() {
    Node* root = NULL;
    int keys[] = {10, 20, 30, 40, 50, 25};
    int n = sizeof(keys) / sizeof(keys[0]);
    for (int i = 0; i < n; i++)
        root = insert(root, keys[i]);

    printf("Inorder traversal: ");
    inorder(root);
    printf("\\n");
    return 0;
}
`,

    cpp: `#include <iostream>
using namespace std;

struct Node {
    int key, height;
    Node *left, *right;
    Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

int height(Node* n) { return n ? n->height : 0; }

void updateHeight(Node* n) {
    n->height = 1 + max(height(n->left), height(n->right));
}

int getBalance(Node* n) {
    return n ? height(n->left) - height(n->right) : 0;
}

Node* rotateRight(Node* y) {
    Node* x = y->left;
    Node* T2 = x->right;
    x->right = y; y->left = T2;
    updateHeight(y); updateHeight(x);
    return x;
}

Node* rotateLeft(Node* x) {
    Node* y = x->right;
    Node* T2 = y->left;
    y->left = x; x->right = T2;
    updateHeight(x); updateHeight(y);
    return y;
}

Node* insert(Node* node, int key) {
    if (!node) return new Node(key);
    if (key < node->key) node->left = insert(node->left, key);
    else if (key > node->key) node->right = insert(node->right, key);
    else return node;

    updateHeight(node);
    int balance = getBalance(node);

    if (balance > 1 && key < node->left->key) return rotateRight(node);
    if (balance < -1 && key > node->right->key) return rotateLeft(node);
    if (balance > 1 && key > node->left->key) {
        node->left = rotateLeft(node->left);
        return rotateRight(node);
    }
    if (balance < -1 && key < node->right->key) {
        node->right = rotateRight(node->right);
        return rotateLeft(node);
    }
    return node;
}

void inorder(Node* root) {
    if (root) {
        inorder(root->left);
        cout << root->key << " ";
        inorder(root->right);
    }
}

int main() {
    Node* root = nullptr;
    int keys[] = {10, 20, 30, 40, 50, 25};
    for (int k : keys) root = insert(root, k);

    cout << "Inorder traversal: ";
    inorder(root);
    cout << endl;
    return 0;
}
`,

    python: `class Node:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left = None
        self.right = None

def height(n):
    return n.height if n else 0

def update_height(n):
    n.height = 1 + max(height(n.left), height(n.right))

def get_balance(n):
    return height(n.left) - height(n.right) if n else 0

def rotate_right(y):
    x = y.left
    T2 = x.right
    x.right = y
    y.left = T2
    update_height(y)
    update_height(x)
    return x

def rotate_left(x):
    y = x.right
    T2 = y.left
    y.left = x
    x.right = T2
    update_height(x)
    update_height(y)
    return y

def insert(node, key):
    if not node:
        return Node(key)
    if key < node.key:
        node.left = insert(node.left, key)
    elif key > node.key:
        node.right = insert(node.right, key)
    else:
        return node

    update_height(node)
    balance = get_balance(node)

    if balance > 1 and key < node.left.key:
        return rotate_right(node)
    if balance < -1 and key > node.right.key:
        return rotate_left(node)
    if balance > 1 and key > node.left.key:
        node.left = rotate_left(node.left)
        return rotate_right(node)
    if balance < -1 and key < node.right.key:
        node.right = rotate_right(node.right)
        return rotate_left(node)
    return node

def inorder(root):
    if root:
        inorder(root.left)
        print(root.key, end=" ")
        inorder(root.right)

root = None
keys = [10, 20, 30, 40, 50, 25]
for k in keys:
    root = insert(root, k)

print("Inorder traversal:", end=" ")
inorder(root)
print()
`,

    java: `import java.util.*;

public class AVLTreeExample {
    static int height(int[] h, int n) { return n == -1 ? 0 : h[n]; }

    static class Node {
        int key, height;
        Node left, right;
        Node(int k) { key = k; height = 1; }
    }

    static int height(Node n) { return n == null ? 0 : n.height; }

    static void updateHeight(Node n) {
        n.height = 1 + Math.max(height(n.left), height(n.right));
    }

    static int getBalance(Node n) {
        return n == null ? 0 : height(n.left) - height(n.right);
    }

    static Node rotateRight(Node y) {
        Node x = y.left, T2 = x.right;
        x.right = y; y.left = T2;
        updateHeight(y); updateHeight(x);
        return x;
    }

    static Node rotateLeft(Node x) {
        Node y = x.right, T2 = y.left;
        y.left = x; x.right = T2;
        updateHeight(x); updateHeight(y);
        return y;
    }

    static Node insert(Node node, int key) {
        if (node == null) return new Node(key);
        if (key < node.key) node.left = insert(node.left, key);
        else if (key > node.key) node.right = insert(node.right, key);
        else return node;

        updateHeight(node);
        int balance = getBalance(node);

        if (balance > 1 && key < node.left.key) return rotateRight(node);
        if (balance < -1 && key > node.right.key) return rotateLeft(node);
        if (balance > 1 && key > node.left.key) {
            node.left = rotateLeft(node.left);
            return rotateRight(node);
        }
        if (balance < -1 && key < node.right.key) {
            node.right = rotateRight(node.right);
            return rotateLeft(node);
        }
        return node;
    }

    static void inorder(Node root) {
        if (root != null) {
            inorder(root.left);
            System.out.print(root.key + " ");
            inorder(root.right);
        }
    }

    public static void main(String[] args) {
        Node root = null;
        int[] keys = {10, 20, 30, 40, 50, 25};
        for (int k : keys) root = insert(root, k);

        System.out.print("Inorder traversal: ");
        inorder(root);
        System.out.println();
    }
}
`
};
