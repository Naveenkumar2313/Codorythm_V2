// src/data/codeSnippets.js
export const HCcodeSnippets = {
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node {
    char ch;
    int freq;
    struct Node *left, *right;
} Node;

typedef struct {
    Node** arr;
    int size;
} MinHeap;

Node* newNode(char ch, int freq) {
    Node* n = (Node*)malloc(sizeof(Node));
    n->ch = ch; n->freq = freq;
    n->left = n->right = NULL;
    return n;
}

void swap(Node** a, Node** b) { Node* t = *a; *a = *b; *b = t; }

void heapify(MinHeap* h, int i) {
    int smallest = i, l = 2*i+1, r = 2*i+2;
    if (l < h->size && h->arr[l]->freq < h->arr[smallest]->freq) smallest = l;
    if (r < h->size && h->arr[r]->freq < h->arr[smallest]->freq) smallest = r;
    if (smallest != i) { swap(&h->arr[i], &h->arr[smallest]); heapify(h, smallest); }
}

Node* extractMin(MinHeap* h) {
    Node* t = h->arr[0];
    h->arr[0] = h->arr[--h->size];
    heapify(h, 0);
    return t;
}

void insert(MinHeap* h, Node* n) {
    int i = h->size++;
    h->arr[i] = n;
    while (i && h->arr[i]->freq < h->arr[(i-1)/2]->freq) {
        swap(&h->arr[i], &h->arr[(i-1)/2]);
        i = (i-1)/2;
    }
}

void printCodes(Node* root, char* code, int top) {
    if (root->left) { code[top] = '0'; printCodes(root->left, code, top+1); }
    if (root->right) { code[top] = '1'; printCodes(root->right, code, top+1); }
    if (!root->left && !root->right) {
        code[top] = '\\0';
        printf("%c: %s\\n", root->ch, code);
    }
}

int main() {
    char chars[] = {'a', 'b', 'c', 'd', 'e', 'f'};
    int freqs[] = {5, 9, 12, 13, 16, 45};
    int n = 6;
    MinHeap h; h.size = 0;
    h.arr = (Node**)malloc(2 * n * sizeof(Node*));
    for (int i = 0; i < n; i++) insert(&h, newNode(chars[i], freqs[i]));
    while (h.size > 1) {
        Node* l = extractMin(&h);
        Node* r = extractMin(&h);
        Node* top = newNode('$', l->freq + r->freq);
        top->left = l; top->right = r;
        insert(&h, top);
    }
    char code[100];
    printCodes(h.arr[0], code, 0);
    return 0;
}
`,

    cpp: `#include <iostream>
#include <queue>
#include <string>
using namespace std;

struct Node {
    char ch;
    int freq;
    Node *left, *right;
    Node(char c, int f) : ch(c), freq(f), left(nullptr), right(nullptr) {}
};

struct Compare {
    bool operator()(Node* a, Node* b) { return a->freq > b->freq; }
};

void printCodes(Node* root, string code) {
    if (!root) return;
    if (!root->left && !root->right)
        cout << root->ch << ": " << code << "\\n";
    printCodes(root->left, code + "0");
    printCodes(root->right, code + "1");
}

int main() {
    string chars = "abcdef";
    int freqs[] = {5, 9, 12, 13, 16, 45};
    priority_queue<Node*, vector<Node*>, Compare> pq;
    for (int i = 0; i < 6; i++) pq.push(new Node(chars[i], freqs[i]));
    while (pq.size() > 1) {
        Node* l = pq.top(); pq.pop();
        Node* r = pq.top(); pq.pop();
        Node* top = new Node('$', l->freq + r->freq);
        top->left = l; top->right = r;
        pq.push(top);
    }
    printCodes(pq.top(), "");
    return 0;
}
`,

    python: `import heapq

class Node:
    def __init__(self, ch, freq):
        self.ch = ch
        self.freq = freq
        self.left = self.right = None
    def __lt__(self, other):
        return self.freq < other.freq

def build_huffman(chars, freqs):
    heap = [Node(c, f) for c, f in zip(chars, freqs)]
    heapq.heapify(heap)
    while len(heap) > 1:
        l = heapq.heappop(heap)
        r = heapq.heappop(heap)
        top = Node('$', l.freq + r.freq)
        top.left, top.right = l, r
        heapq.heappush(heap, top)
    return heap[0]

def print_codes(root, code=""):
    if root is None:
        return
    if root.left is None and root.right is None:
        print(f"{root.ch}: {code}")
    print_codes(root.left, code + "0")
    print_codes(root.right, code + "1")

chars = ['a', 'b', 'c', 'd', 'e', 'f']
freqs = [5, 9, 12, 13, 16, 45]
root = build_huffman(chars, freqs)
print_codes(root)
`,

    java: `import java.util.*;

public class HuffmanCoding {
    static class Node {
        char ch; int freq;
        Node left, right;
        Node(char c, int f) { ch = c; freq = f; }
    }

    static void printCodes(Node root, String code) {
        if (root == null) return;
        if (root.left == null && root.right == null)
            System.out.println(root.ch + ": " + code);
        printCodes(root.left, code + "0");
        printCodes(root.right, code + "1");
    }

    public static void main(String[] args) {
        char[] chars = {'a', 'b', 'c', 'd', 'e', 'f'};
        int[] freqs = {5, 9, 12, 13, 16, 45};
        PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> a.freq - b.freq);
        for (int i = 0; i < chars.length; i++) pq.add(new Node(chars[i], freqs[i]));
        while (pq.size() > 1) {
            Node l = pq.poll(), r = pq.poll();
            Node top = new Node('$', l.freq + r.freq);
            top.left = l; top.right = r;
            pq.add(top);
        }
        printCodes(pq.peek(), "");
    }
}
`
};
