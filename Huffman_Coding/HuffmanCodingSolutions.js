export const HuffmanCodingSolutions = {
  'hc-e1': {
    python: `def char_frequency(s):
    freq = {}
    for c in s:
        freq[c] = freq.get(c, 0) + 1
    return sorted(freq.items())

s = input()
result = char_frequency(s)
for ch, freq in result:
    print(ch, freq)`,
    java: `import java.util.*;

public class Solution {
    public static Map<Character, Integer> charFrequency(String s) {
        Map<Character, Integer> freq = new TreeMap<>();
        for (char c : s.toCharArray())
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        return freq;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        Map<Character, Integer> result = charFrequency(s);
        for (Map.Entry<Character, Integer> e : result.entrySet())
            System.out.println(e.getKey() + " " + e.getValue());
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

void charFrequency(char* s) {
    int freq[26] = {0};
    for (int i = 0; s[i]; i++) freq[s[i] - 'a']++;
    for (int i = 0; i < 26; i++)
        if (freq[i] > 0)
            printf("%c %d\n", 'a' + i, freq[i]);
}

int main() {
    char s[100001];
    scanf("%s", s);
    charFrequency(s);
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <map>
using namespace std;

void charFrequency(string s) {
    map<char, int> freq;
    for (char c : s) freq[c]++;
    for (auto& [ch, f] : freq)
        cout << ch << " " << f << "\n";
}

int main() {
    string s;
    cin >> s;
    charFrequency(s);
    return 0;
}`
  },
  'hc-e2': {
    python: `def most_frequent_char(s):
    freq = {}
    for c in s:
        freq[c] = freq.get(c, 0) + 1
    max_freq = max(freq.values())
    return min(c for c, f in freq.items() if f == max_freq)

s = input()
print(most_frequent_char(s))`,
    java: `import java.util.*;

public class Solution {
    public static char mostFrequentChar(String s) {
        int[] freq = new int[26];
        for (char c : s.toCharArray()) freq[c - 'a']++;
        int maxFreq = 0;
        for (int f : freq) maxFreq = Math.max(maxFreq, f);
        for (int i = 0; i < 26; i++)
            if (freq[i] == maxFreq) return (char)('a' + i);
        return ' ';
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(mostFrequentChar(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

char mostFrequentChar(char* s) {
    int freq[26] = {0};
    for (int i = 0; s[i]; i++) freq[s[i] - 'a']++;
    int maxFreq = 0;
    for (int i = 0; i < 26; i++) if (freq[i] > maxFreq) maxFreq = freq[i];
    for (int i = 0; i < 26; i++) if (freq[i] == maxFreq) return 'a' + i;
    return ' ';
}

int main() {
    char s[100001];
    scanf("%s", s);
    printf("%c\n", mostFrequentChar(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

char mostFrequentChar(string s) {
    int freq[26] = {0};
    for (char c : s) freq[c - 'a']++;
    int maxFreq = *max_element(freq, freq + 26);
    for (int i = 0; i < 26; i++)
        if (freq[i] == maxFreq) return 'a' + i;
    return ' ';
}

int main() {
    string s;
    cin >> s;
    cout << mostFrequentChar(s) << "\n";
    return 0;
}`
  },
  'hc-e3': {
    python: `class Node:
    def __init__(self, freq, left=None, right=None):
        self.freq = freq
        self.left = left
        self.right = right


def min_max_code_length(freqs):
    if len(freqs) == 1:
        return [1, 1]

    nodes = [Node(f) for f in freqs]
    while len(nodes) > 1:
        nodes.sort(key=lambda x: x.freq)
        left = nodes.pop(0)
        right = nodes.pop(0)
        nodes.append(Node(left.freq + right.freq, left, right))

    def get_leaf_depths(node, depth):
        if node.left is None and node.right is None:
            return [depth]
        return get_leaf_depths(node.left, depth + 1) + get_leaf_depths(node.right, depth + 1)

    depths = get_leaf_depths(nodes[0], 0)
    return [min(depths), max(depths)]

n = int(input())
freqs = list(map(int, input().split()))
result = min_max_code_length(freqs)
print(result[0], result[1])`,
    java: `import java.util.*;

public class Solution {
    static int minLen, maxLen;

    static void dfs(PriorityQueue<int[]> pq) {
        // Build tree tracking depths
    }

    public static int[] minMaxCodeLength(int[] freqs) {
        PriorityQueue<long[]> pq = new PriorityQueue<>((a, b) -> Long.compare(a[0], b[0]));
        for (int f : freqs) pq.offer(new long[]{f, 0, 0});
        while (pq.size() > 1) {
            long[] a = pq.poll();
            long[] b = pq.poll();
            if (pq.isEmpty()) {
                return new int[]{(int)Math.min(a[1]+1, b[1]+1), (int)Math.max(a[2]+1, b[2]+1)};
            }
            pq.offer(new long[]{a[0]+b[0], Math.min(a[1],b[1])+1, Math.max(a[2],b[2])+1});
        }
        return new int[]{1, 1};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] freqs = new int[n];
        for (int i = 0; i < n; i++) freqs[i] = sc.nextInt();
        int[] result = minMaxCodeLength(freqs);
        System.out.println(result[0] + " " + result[1]);
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

typedef struct { long long freq; int minD, maxD; } Node;

int cmp(const void* a, const void* b) {
    Node* x = (Node*)a; Node* y = (Node*)b;
    return (x->freq > y->freq) - (x->freq < y->freq);
}

void minMaxCodeLength(int* freqs, int n, int* minLen, int* maxLen) {
    Node* heap = (Node*)malloc(n * sizeof(Node));
    for (int i = 0; i < n; i++) heap[i] = (Node){freqs[i], 0, 0};
    int size = n;
    while (size > 1) {
        qsort(heap, size, sizeof(Node), cmp);
        Node a = heap[0], b = heap[1];
        if (size == 2) { *minLen = (a.minD < b.minD ? a.minD : b.minD) + 1;
                         *maxLen = (a.maxD > b.maxD ? a.maxD : b.maxD) + 1;
                         free(heap); return; }
        heap[0] = (Node){a.freq+b.freq, (a.minD<b.minD?a.minD:b.minD)+1, (a.maxD>b.maxD?a.maxD:b.maxD)+1};
        for (int i = 1; i < size-1; i++) heap[i] = heap[i+1];
        size--;
    }
    *minLen = *maxLen = 1;
    free(heap);
}

int main() {
    int n; scanf("%d", &n);
    int freqs[n];
    for (int i = 0; i < n; i++) scanf("%d", &freqs[i]);
    int minLen, maxLen;
    minMaxCodeLength(freqs, n, &minLen, &maxLen);
    printf("%d %d\n", minLen, maxLen);
    return 0;
}`,
    cpp: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

pair<int,int> minMaxCodeLength(vector<int>& freqs) {
    using T = tuple<long long, int, int>;
    priority_queue<T, vector<T>, greater<T>> pq;
    for (int f : freqs) pq.push({f, 0, 0});
    while (pq.size() > 1) {
        auto [f1, mn1, mx1] = pq.top(); pq.pop();
        auto [f2, mn2, mx2] = pq.top(); pq.pop();
        if (pq.empty())
            return {min(mn1, mn2) + 1, max(mx1, mx2) + 1};
        pq.push({f1 + f2, min(mn1, mn2) + 1, max(mx1, mx2) + 1});
    }
    return {1, 1};
}

int main() {
    int n; cin >> n;
    vector<int> freqs(n);
    for (int i = 0; i < n; i++) cin >> freqs[i];
    auto [minLen, maxLen] = minMaxCodeLength(freqs);
    cout << minLen << " " << maxLen << "\n";
    return 0;
}`
  },
  'hc-e4': {
    python: `def total_encoded_length(freqs, code_lens):
    return sum(f * l for f, l in zip(freqs, code_lens))

n = int(input())
freqs = list(map(int, input().split()))
code_lens = list(map(int, input().split()))
print(total_encoded_length(freqs, code_lens))`,
    java: `import java.util.*;

public class Solution {
    public static int totalEncodedLength(int[] freqs, int[] codeLens) {
        int total = 0;
        for (int i = 0; i < freqs.length; i++)
            total += freqs[i] * codeLens[i];
        return total;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] freqs = new int[n], codeLens = new int[n];
        for (int i = 0; i < n; i++) freqs[i] = sc.nextInt();
        for (int i = 0; i < n; i++) codeLens[i] = sc.nextInt();
        System.out.println(totalEncodedLength(freqs, codeLens));
    }
}`,
    c: `#include <stdio.h>

int totalEncodedLength(int* freqs, int* codeLens, int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += freqs[i] * codeLens[i];
    return total;
}

int main() {
    int n; scanf("%d", &n);
    int freqs[n], codeLens[n];
    for (int i = 0; i < n; i++) scanf("%d", &freqs[i]);
    for (int i = 0; i < n; i++) scanf("%d", &codeLens[i]);
    printf("%d\n", totalEncodedLength(freqs, codeLens, n));
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

int totalEncodedLength(vector<int>& freqs, vector<int>& codeLens) {
    int total = 0;
    for (int i = 0; i < (int)freqs.size(); i++)
        total += freqs[i] * codeLens[i];
    return total;
}

int main() {
    int n; cin >> n;
    vector<int> freqs(n), codeLens(n);
    for (int i = 0; i < n; i++) cin >> freqs[i];
    for (int i = 0; i < n; i++) cin >> codeLens[i];
    cout << totalEncodedLength(freqs, codeLens) << "\n";
    return 0;
}`
  },
  'hc-e5': {
    python: `def count_huffman_nodes(n):
    return 2 * n - 1

n = int(input())
print(count_huffman_nodes(n))`,
    java: `import java.util.*;

public class Solution {
    public static int countHuffmanNodes(int n) {
        return 2 * n - 1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(countHuffmanNodes(n));
    }
}`,
    c: `#include <stdio.h>

int countHuffmanNodes(int n) {
    return 2 * n - 1;
}

int main() {
    int n; scanf("%d", &n);
    printf("%d\n", countHuffmanNodes(n));
    return 0;
}`,
    cpp: `#include <iostream>
using namespace std;

int countHuffmanNodes(int n) {
    return 2 * n - 1;
}

int main() {
    int n; cin >> n;
    cout << countHuffmanNodes(n) << "\n";
    return 0;
}`
  },
  'hc-m1': {
    python: `class Node:
    def __init__(self, freq=0, ch=None, left=None, right=None):
        self.freq = freq
        self.ch = ch
        self.left = left
        self.right = right


def build_huffman_codes(chars, freqs):
    nodes = []
    for ch, freq in zip(chars, freqs):
        nodes.append(Node(freq=freq, ch=ch))

    while len(nodes) > 1:
        nodes.sort(key=lambda x: x.freq)
        left = nodes.pop(0)
        right = nodes.pop(0)
        parent = Node(freq=left.freq + right.freq, left=left, right=right)
        nodes.append(parent)

    codes = {}

    def traverse(node, path):
        if node.ch is not None:
            codes[node.ch] = path
            return
        traverse(node.left, path + '0')
        traverse(node.right, path + '1')

    traverse(nodes[0], '')
    return codes

n = int(input())
chars = list(input().strip())
freqs = list(map(int, input().split()))
result = build_huffman_codes(chars, freqs)
for ch in sorted(result):
    print(ch, result[ch])`,
    java: `import java.util.*;

public class Solution {
    static class Node {
        int freq;
        Character ch;
        Node left, right;

        Node(int freq, Character ch) {
            this.freq = freq;
            this.ch = ch;
        }

        Node(Node left, Node right, int freq) {
            this.left = left;
            this.right = right;
            this.freq = freq;
        }
    }

    static void dfs(Node node, String path, Map<Character, String> result) {
        if (node.ch != null) {
            result.put(node.ch, path);
            return;
        }
        dfs(node.left, path + "0", result);
        dfs(node.right, path + "1", result);
    }

    public static Map<Character, String> buildHuffmanCodes(char[] chars, int[] freqs) {
        PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> a.freq - b.freq);
        for (int i = 0; i < chars.length; i++) {
            pq.offer(new Node(freqs[i], chars[i]));
        }

        while (pq.size() > 1) {
            Node a = pq.poll();
            Node b = pq.poll();
            pq.offer(new Node(a, b, a.freq + b.freq));
        }

        Map<Character, String> result = new TreeMap<>();
        dfs(pq.peek(), "", result);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        char[] chars = sc.next().toCharArray();
        int[] freqs = new int[n];
        for (int i = 0; i < n; i++) freqs[i] = sc.nextInt();
        Map<Character, String> result = buildHuffmanCodes(chars, freqs);
        for (Map.Entry<Character, String> e : result.entrySet()) {
            System.out.println(e.getKey() + " " + e.getValue());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node {
    char ch;
    int freq;
    struct Node *left, *right;
} Node;

Node* createLeaf(char ch, int freq) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->ch = ch;
    node->freq = freq;
    node->left = node->right = NULL;
    return node;
}

Node* createInternal(Node* left, Node* right, int freq) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->ch = '\0';
    node->freq = freq;
    node->left = left;
    node->right = right;
    return node;
}

void dfs(Node* node, char* path, int depth, char codes[][27]) {
    if (node->left == NULL && node->right == NULL) {
        path[depth] = '\0';
        codes[node->ch - 'a'][0] = '\0';
        strcpy(codes[node->ch - 'a'], path);
        return;
    }
    path[depth] = '0';
    dfs(node->left, path, depth + 1, codes);
    path[depth] = '1';
    dfs(node->right, path, depth + 1, codes);
}

void buildHuffmanCodes(char* chars, int* freqs, int n) {
    Node* nodes[26];
    int size = 0;
    for (int i = 0; i < n; i++) nodes[size++] = createLeaf(chars[i], freqs[i]);

    while (size > 1) {
        int min1 = 0, min2 = 1;
        if (nodes[min1]->freq > nodes[min2]->freq) {
            int t = min1; min1 = min2; min2 = t;
        }
        for (int i = 2; i < size; i++) {
            if (nodes[i]->freq < nodes[min1]->freq) {
                min2 = min1; min1 = i;
            } else if (nodes[i]->freq < nodes[min2]->freq) {
                min2 = i;
            }
        }
        Node* a = nodes[min1];
        Node* b = nodes[min2];
        Node* parent = createInternal(a, b, a->freq + b->freq);
        nodes[min1] = parent;
        nodes[min2] = nodes[size - 1];
        size--;
    }

    char codes[26][27];
    char path[27];
    dfs(nodes[0], path, 0, codes);
    for (int i = 0; i < n; i++) printf("%c %s\n", chars[i], codes[chars[i] - 'a']);
}

int main() {
    int n;
    scanf("%d", &n);
    char chars[27];
    scanf("%s", chars);
    int freqs[26];
    for (int i = 0; i < n; i++) scanf("%d", &freqs[i]);
    buildHuffmanCodes(chars, freqs, n);
    return 0;
}`,
    cpp: `#include <iostream>
#include <queue>
#include <map>
#include <string>
#include <vector>
using namespace std;

struct Node {
    int freq;
    char ch;
    Node *left, *right;
    Node(int f, char c = '\0', Node* l = nullptr, Node* r = nullptr) : freq(f), ch(c), left(l), right(r) {}
};

void dfs(Node* node, string path, map<char, string>& result) {
    if (node->ch != '\0') {
        result[node->ch] = path;
        return;
    }
    dfs(node->left, path + "0", result);
    dfs(node->right, path + "1", result);
}

map<char, string> buildHuffmanCodes(string chars, vector<int>& freqs) {
    priority_queue<pair<int, Node*>, vector<pair<int, Node*>>, greater<pair<int, Node*>>> pq;
    for (int i = 0; i < (int)chars.size(); i++) {
        pq.push({freqs[i], new Node(freqs[i], chars[i])});
    }

    while (pq.size() > 1) {
        auto a = pq.top(); pq.pop();
        auto b = pq.top(); pq.pop();
        pq.push({a.first + b.first, new Node(a.first + b.first, '\0', a.second, b.second)});
    }

    map<char, string> result;
    dfs(pq.top().second, "", result);
    return result;
}

int main() {
    int n;
    cin >> n;
    string chars;
    cin >> chars;
    vector<int> freqs(n);
    for (int i = 0; i < n; i++) cin >> freqs[i];
    map<char, string> result = buildHuffmanCodes(chars, freqs);
    for (auto& [ch, code] : result)
        cout << ch << " " << code << "\n";
    return 0;
}`
  },
  'hc-m2': {
    python: `class Node:
    def __init__(self, freq=0, ch=None, left=None, right=None):
        self.freq = freq
        self.ch = ch
        self.left = left
        self.right = right


def huffman_encode(s):
    freq = {}
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1

    nodes = [Node(freq=f, ch=ch) for ch, f in freq.items()]
    while len(nodes) > 1:
        nodes.sort(key=lambda x: x.freq)
        left = nodes.pop(0)
        right = nodes.pop(0)
        nodes.append(Node(freq=left.freq + right.freq, left=left, right=right))

    codes = {}

    def traverse(node, path):
        if node.ch is not None:
            codes[node.ch] = path
            return
        traverse(node.left, path + '0')
        traverse(node.right, path + '1')

    traverse(nodes[0], '')
    return ''.join(codes[ch] for ch in s)

s = input().strip()
print(huffman_encode(s))`,
    java: `import java.util.*;

public class Solution {
    static class Node {
        int freq;
        Character ch;
        Node left, right;

        Node(int freq, Character ch) {
            this.freq = freq;
            this.ch = ch;
        }

        Node(Node left, Node right, int freq) {
            this.left = left;
            this.right = right;
            this.freq = freq;
        }
    }

    static void dfs(Node node, String path, Map<Character, String> result) {
        if (node.ch != null) {
            result.put(node.ch, path);
            return;
        }
        dfs(node.left, path + "0", result);
        dfs(node.right, path + "1", result);
    }

    public static String huffmanEncode(String s) {
        Map<Character, Integer> freq = new HashMap<>();
        for (char ch : s.toCharArray()) freq.put(ch, freq.getOrDefault(ch, 0) + 1);

        PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> a.freq - b.freq);
        for (Map.Entry<Character, Integer> e : freq.entrySet()) {
            pq.offer(new Node(e.getValue(), e.getKey()));
        }

        while (pq.size() > 1) {
            Node a = pq.poll();
            Node b = pq.poll();
            pq.offer(new Node(a, b, a.freq + b.freq));
        }

        Map<Character, String> codes = new TreeMap<>();
        dfs(pq.peek(), "", codes);
        StringBuilder sb = new StringBuilder();
        for (char ch : s.toCharArray()) sb.append(codes.get(ch));
        return sb.toString();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(huffmanEncode(s));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node {
    int freq;
    char ch;
    struct Node *left, *right;
} Node;

Node* createLeaf(char ch, int freq) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->freq = freq;
    node->ch = ch;
    node->left = node->right = NULL;
    return node;
}

Node* createInternal(Node* left, Node* right, int freq) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->freq = freq;
    node->ch = '\0';
    node->left = left;
    node->right = right;
    return node;
}

void buildCodes(Node* node, char* path, int depth, char codes[][27]) {
    if (node->left == NULL && node->right == NULL) {
        path[depth] = '\0';
        codes[node->ch - 'a'][0] = '\0';
        strcpy(codes[node->ch - 'a'], path);
        return;
    }
    path[depth] = '0';
    buildCodes(node->left, path, depth + 1, codes);
    path[depth] = '1';
    buildCodes(node->right, path, depth + 1, codes);
}

void huffmanEncode(char* s, char* result) {
    int freq[26] = {0};
    for (int i = 0; s[i]; i++) freq[s[i] - 'a']++;

    Node* nodes[26];
    int size = 0;
    for (int i = 0; i < 26; i++) if (freq[i] > 0) nodes[size++] = createLeaf('a' + i, freq[i]);

    while (size > 1) {
        int min1 = 0, min2 = 1;
        if (nodes[min1]->freq > nodes[min2]->freq) {
            int t = min1; min1 = min2; min2 = t;
        }
        for (int i = 2; i < size; i++) {
            if (nodes[i]->freq < nodes[min1]->freq) {
                min2 = min1; min1 = i;
            } else if (nodes[i]->freq < nodes[min2]->freq) {
                min2 = i;
            }
        }
        Node* a = nodes[min1];
        Node* b = nodes[min2];
        nodes[min1] = createInternal(a, b, a->freq + b->freq);
        nodes[min2] = nodes[size - 1];
        size--;
    }

    char codes[26][27];
    char path[10001];
    buildCodes(nodes[0], path, 0, codes);

    int idx = 0;
    for (int i = 0; s[i]; i++) {
        char* code = codes[s[i] - 'a'];
        for (int j = 0; code[j]; j++) result[idx++] = code[j];
    }
    result[idx] = '\0';
}

int main() {
    char s[10001], result[100001];
    scanf("%s", s);
    huffmanEncode(s, result);
    printf("%s\n", result);
    return 0;
}`,
    cpp: `#include <iostream>
#include <queue>
#include <map>
#include <string>
#include <vector>
using namespace std;

struct Node {
    int freq;
    char ch;
    Node *left, *right;
    Node(int f, char c = '\0', Node* l = nullptr, Node* r = nullptr) : freq(f), ch(c), left(l), right(r) {}
};

void dfs(Node* node, string path, map<char, string>& result) {
    if (node->ch != '\0') {
        result[node->ch] = path;
        return;
    }
    dfs(node->left, path + "0", result);
    dfs(node->right, path + "1", result);
}

string huffmanEncode(string s) {
    map<char, int> freq;
    for (char ch : s) freq[ch]++;

    priority_queue<pair<int, Node*>, vector<pair<int, Node*>>, greater<pair<int, Node*>>> pq;
    for (auto& [ch, f] : freq) pq.push({f, new Node(f, ch)});

    while (pq.size() > 1) {
        auto a = pq.top(); pq.pop();
        auto b = pq.top(); pq.pop();
        pq.push({a.first + b.first, new Node(a.first + b.first, '\0', a.second, b.second)});
    }

    map<char, string> codes;
    dfs(pq.top().second, "", codes);

    string out;
    for (char ch : s) out += codes[ch];
    return out;
}

int main() {
    string s;
    cin >> s;
    cout << huffmanEncode(s) << "\n";
    return 0;
}`
  },
  'hc-m3': {
    python: `def huffman_decode(codes, encoded):
    result = []
    current = ''
    for bit in encoded:
        current += bit
        if current in codes:
            result.append(codes[current])
            current = ''
    return ''.join(result)

n = int(input())
codes = {}
for _ in range(n):
    parts = input().split()
    codes[parts[1]] = parts[0]
encoded = input().strip()
print(huffman_decode(codes, encoded))`,
    java: `import java.util.*;

public class Solution {
    public static String huffmanDecode(Map<String, Character> codes, String encoded) {
        StringBuilder result = new StringBuilder();
        StringBuilder current = new StringBuilder();
        for (char bit : encoded.toCharArray()) {
            current.append(bit);
            if (codes.containsKey(current.toString())) {
                result.append(codes.get(current.toString()));
                current.setLength(0);
            }
        }
        return result.toString();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Map<String, Character> codes = new HashMap<>();
        for (int i = 0; i < n; i++) {
            char ch = sc.next().charAt(0);
            String code = sc.next();
            codes.put(code, ch);
        }
        String encoded = sc.next();
        System.out.println(huffmanDecode(codes, encoded));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

void huffmanDecode(char codes[][27], char chars[], int n, char* encoded, char* result) {
    int idx = 0;
    char current[27] = "";
    for (int i = 0; encoded[i]; i++) {
        strncat(current, &encoded[i], 1);
        for (int j = 0; j < n; j++) {
            if (strcmp(current, codes[j]) == 0) {
                result[idx++] = chars[j];
                current[0] = '\0';
                break;
            }
        }
    }
    result[idx] = '\0';
}

int main() {
    int n;
    scanf("%d", &n);
    char codes[26][27], chars[26];
    for (int i = 0; i < n; i++) {
        char ch[2];
        scanf("%s %s", ch, codes[i]);
        chars[i] = ch[0];
    }
    char encoded[100001], result[100001];
    scanf("%s", encoded);
    huffmanDecode(codes, chars, n, encoded, result);
    printf("%s\n", result);
    return 0;
}`,
    cpp: `#include <iostream>
#include <map>
#include <string>
using namespace std;

string huffmanDecode(map<string, char>& codes, string encoded) {
    string result, cur;
    for (char bit : encoded) {
        cur += bit;
        if (codes.count(cur)) {
            result += codes[cur];
            cur.clear();
        }
    }
    return result;
}

int main() {
    int n;
    cin >> n;
    map<string, char> codes;
    for (int i = 0; i < n; i++) {
        char ch; string code;
        cin >> ch >> code;
        codes[code] = ch;
    }
    string encoded;
    cin >> encoded;
    cout << huffmanDecode(codes, encoded) << "\n";
    return 0;
}`
  },
  'hc-m4': {
    python: `class Node:
    def __init__(self, freq=0, ch=None, left=None, right=None):
        self.freq = freq
        self.ch = ch
        self.left = left
        self.right = right


def compression_ratio(s):
    freq = {}
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1

    nodes = [Node(freq=f, ch=ch) for ch, f in freq.items()]
    while len(nodes) > 1:
        nodes.sort(key=lambda x: x.freq)
        left = nodes.pop(0)
        right = nodes.pop(0)
        nodes.append(Node(freq=left.freq + right.freq, left=left, right=right))

    codes = {}

    def traverse(node, path):
        if node.ch is not None:
            codes[node.ch] = path
            return
        traverse(node.left, path + '0')
        traverse(node.right, path + '1')

    traverse(nodes[0], '')
    encoded_bits = ''.join(codes[ch] for ch in s)
    original_bits = 8 * len(s)
    return (original_bits - len(encoded_bits)) * 100 // original_bits

s = input().strip()
print(compression_ratio(s))`,
    java: `import java.util.*;

public class Solution {
    static class Node {
        int freq;
        Character ch;
        Node left, right;

        Node(int freq, Character ch) {
            this.freq = freq;
            this.ch = ch;
        }

        Node(Node left, Node right, int freq) {
            this.left = left;
            this.right = right;
            this.freq = freq;
        }
    }

    static void dfs(Node node, String path, Map<Character, String> result) {
        if (node.ch != null) {
            result.put(node.ch, path);
            return;
        }
        dfs(node.left, path + "0", result);
        dfs(node.right, path + "1", result);
    }

    public static int compressionRatio(String s) {
        Map<Character, Integer> freq = new HashMap<>();
        for (char ch : s.toCharArray()) freq.put(ch, freq.getOrDefault(ch, 0) + 1);

        PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> a.freq - b.freq);
        for (Map.Entry<Character, Integer> e : freq.entrySet()) {
            pq.offer(new Node(e.getValue(), e.getKey()));
        }

        while (pq.size() > 1) {
            Node a = pq.poll();
            Node b = pq.poll();
            pq.offer(new Node(a, b, a.freq + b.freq));
        }

        Map<Character, String> codes = new TreeMap<>();
        dfs(pq.peek(), "", codes);
        int encodedBits = 0;
        for (char ch : s.toCharArray()) encodedBits += codes.get(ch).length();
        int originalBits = 8 * s.length();
        return (originalBits - encodedBits) * 100 / originalBits;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(compressionRatio(s));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node {
    int freq;
    char ch;
    struct Node *left, *right;
} Node;

Node* createLeaf(char ch, int freq) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->freq = freq;
    node->ch = ch;
    node->left = node->right = NULL;
    return node;
}

Node* createInternal(Node* left, Node* right, int freq) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->freq = freq;
    node->ch = '\0';
    node->left = left;
    node->right = right;
    return node;
}

void buildCodes(Node* node, char* path, int depth, char codes[][27]) {
    if (node->left == NULL && node->right == NULL) {
        path[depth] = '\0';
        codes[node->ch - 'a'][0] = '\0';
        strcpy(codes[node->ch - 'a'], path);
        return;
    }
    path[depth] = '0';
    buildCodes(node->left, path, depth + 1, codes);
    path[depth] = '1';
    buildCodes(node->right, path, depth + 1, codes);
}

int compressionRatio(char* s) {
    int freq[26] = {0};
    for (int i = 0; s[i]; i++) freq[s[i] - 'a']++;

    Node* nodes[26];
    int size = 0;
    for (int i = 0; i < 26; i++) if (freq[i] > 0) nodes[size++] = createLeaf('a' + i, freq[i]);

    while (size > 1) {
        int min1 = 0, min2 = 1;
        if (nodes[min1]->freq > nodes[min2]->freq) {
            int t = min1; min1 = min2; min2 = t;
        }
        for (int i = 2; i < size; i++) {
            if (nodes[i]->freq < nodes[min1]->freq) {
                min2 = min1; min1 = i;
            } else if (nodes[i]->freq < nodes[min2]->freq) {
                min2 = i;
            }
        }
        Node* a = nodes[min1];
        Node* b = nodes[min2];
        nodes[min1] = createInternal(a, b, a->freq + b->freq);
        nodes[min2] = nodes[size - 1];
        size--;
    }

    char codes[26][27];
    char path[10001];
    buildCodes(nodes[0], path, 0, codes);

    int encodedBits = 0;
    for (int i = 0; s[i]; i++) encodedBits += strlen(codes[s[i] - 'a']);
    int originalBits = 8 * strlen(s);
    return (originalBits - encodedBits) * 100 / originalBits;
}

int main() {
    char s[10001];
    scanf("%s", s);
    printf("%d\n", compressionRatio(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <queue>
#include <map>
#include <string>
#include <vector>
using namespace std;

struct Node {
    int freq;
    char ch;
    Node *left, *right;
    Node(int f, char c = '\0', Node* l = nullptr, Node* r = nullptr) : freq(f), ch(c), left(l), right(r) {}
};

void dfs(Node* node, string path, map<char, string>& result) {
    if (node->ch != '\0') {
        result[node->ch] = path;
        return;
    }
    dfs(node->left, path + "0", result);
    dfs(node->right, path + "1", result);
}

int compressionRatio(string s) {
    map<char, int> freq;
    for (char ch : s) freq[ch]++;

    priority_queue<pair<int, Node*>, vector<pair<int, Node*>>, greater<pair<int, Node*>>> pq;
    for (auto& [ch, f] : freq) pq.push({f, new Node(f, ch)});

    while (pq.size() > 1) {
        auto a = pq.top(); pq.pop();
        auto b = pq.top(); pq.pop();
        pq.push({a.first + b.first, new Node(a.first + b.first, '\0', a.second, b.second)});
    }

    map<char, string> codes;
    dfs(pq.top().second, "", codes);

    int encodedBits = 0;
    for (char ch : s) encodedBits += codes[ch].size();
    int originalBits = 8 * (int)s.size();
    return (originalBits - encodedBits) * 100 / originalBits;
}

int main() {
    string s;
    cin >> s;
    cout << compressionRatio(s) << "\n";
    return 0;
}`
  },
  'hc-m5': {
    python: `class Node:
    def __init__(self, freq=0, ch=None, left=None, right=None):
        self.freq = freq
        self.ch = ch
        self.left = left
        self.right = right


def huffman_tree_height(freqs):
    nodes = [Node(freq=f) for f in freqs]
    while len(nodes) > 1:
        nodes.sort(key=lambda x: x.freq)
        left = nodes.pop(0)
        right = nodes.pop(0)
        nodes.append(Node(freq=left.freq + right.freq, left=left, right=right))

    def height(node):
        if node.left is None and node.right is None:
            return 0
        return 1 + max(height(node.left), height(node.right))

    return height(nodes[0])

n = int(input())
freqs = list(map(int, input().split()))
print(huffman_tree_height(freqs))`,
    java: `import java.util.*;

public class Solution {
    static class Node {
        int freq;
        Character ch;
        Node left, right;

        Node(int freq, Character ch) {
            this.freq = freq;
            this.ch = ch;
        }

        Node(Node left, Node right, int freq) {
            this.left = left;
            this.right = right;
            this.freq = freq;
        }
    }

    static int height(Node node) {
        if (node.left == null && node.right == null) return 0;
        return 1 + Math.max(height(node.left), height(node.right));
    }

    public static int huffmanTreeHeight(int[] freqs) {
        PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> a.freq - b.freq);
        for (int f : freqs) pq.offer(new Node(f, null));

        while (pq.size() > 1) {
            Node a = pq.poll();
            Node b = pq.poll();
            pq.offer(new Node(a, b, a.freq + b.freq));
        }
        return height(pq.peek());
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] freqs = new int[n];
        for (int i = 0; i < n; i++) freqs[i] = sc.nextInt();
        System.out.println(huffmanTreeHeight(freqs));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int freq;
    struct Node *left, *right;
} Node;

int height(Node* node) {
    if (node->left == NULL && node->right == NULL) return 0;
    int leftH = height(node->left);
    int rightH = height(node->right);
    return 1 + (leftH > rightH ? leftH : rightH);
}

int huffmanTreeHeight(int* freqs, int n) {
    Node* nodes[26];
    int size = 0;
    for (int i = 0; i < n; i++) {
        Node* node = (Node*)malloc(sizeof(Node));
        node->freq = freqs[i];
        node->left = node->right = NULL;
        nodes[size++] = node;
    }

    while (size > 1) {
        int min1 = 0, min2 = 1;
        if (nodes[min1]->freq > nodes[min2]->freq) {
            int t = min1; min1 = min2; min2 = t;
        }
        for (int i = 2; i < size; i++) {
            if (nodes[i]->freq < nodes[min1]->freq) {
                min2 = min1; min1 = i;
            } else if (nodes[i]->freq < nodes[min2]->freq) {
                min2 = i;
            }
        }
        Node* a = nodes[min1];
        Node* b = nodes[min2];
        Node* parent = (Node*)malloc(sizeof(Node));
        parent->freq = a->freq + b->freq;
        parent->left = a;
        parent->right = b;
        nodes[min1] = parent;
        nodes[min2] = nodes[size - 1];
        size--;
    }

    return height(nodes[0]);
}

int main() {
    int n;
    scanf("%d", &n);
    int freqs[26];
    for (int i = 0; i < n; i++) scanf("%d", &freqs[i]);
    printf("%d\n", huffmanTreeHeight(freqs, n));
    return 0;
}`,
    cpp: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

struct Node {
    int freq;
    Node* left;
    Node* right;
    Node(int f, Node* l = nullptr, Node* r = nullptr) : freq(f), left(l), right(r) {}
};

int height(Node* node) {
    if (!node || (!node->left && !node->right)) return 0;
    return 1 + max(height(node->left), height(node->right));
}

int huffmanTreeHeight(vector<int>& freqs) {
    priority_queue<pair<int, Node*>, vector<pair<int, Node*>>, greater<pair<int, Node*>>> pq;
    for (int f : freqs) pq.push({f, new Node(f)});

    while (pq.size() > 1) {
        auto a = pq.top(); pq.pop();
        auto b = pq.top(); pq.pop();
        pq.push({a.first + b.first, new Node(a.first + b.first, a.second, b.second)});
    }

    return height(pq.top().second);
}

int main() {
    int n;
    cin >> n;
    vector<int> freqs(n);
    for (int i = 0; i < n; i++) cin >> freqs[i];
    cout << huffmanTreeHeight(freqs) << "\n";
    return 0;
}`
  },
  'hc-h1': {
    python: `def huffman_encoding_cost(freqs):
    values = freqs[:]
    cost = 0
    while len(values) > 1:
        values.sort()
        a = values.pop(0)
        b = values.pop(0)
        s = a + b
        cost += s
        values.append(s)
    return cost

n = int(input())
freqs = list(map(int, input().split()))
print(huffman_encoding_cost(freqs))`,
    java: `import java.util.*;

public class Solution {
    public static long huffmanEncodingCost(int[] freqs) {
        PriorityQueue<Long> pq = new PriorityQueue<>();
        for (int f : freqs) pq.offer((long) f);
        long cost = 0;
        while (pq.size() > 1) {
            long a = pq.poll();
            long b = pq.poll();
            long s = a + b;
            cost += s;
            pq.offer(s);
        }
        return cost;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] freqs = new int[n];
        for (int i = 0; i < n; i++) freqs[i] = sc.nextInt();
        System.out.println(huffmanEncodingCost(freqs));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) {
    return (*(int*)a > *(int*)b) - (*(int*)a < *(int*)b);
}

long long huffmanEncodingCost(int* freqs, int n) {
    qsort(freqs, n, sizeof(int), cmp);
    long long cost = 0;
    while (n > 1) {
        int a = freqs[0], b = freqs[1];
        cost += a + b;
        freqs[0] = a + b;
        for (int i = 1; i < n - 1; i++) freqs[i] = freqs[i + 1];
        n--;
        qsort(freqs, n, sizeof(int), cmp);
    }
    return cost;
}

int main() {
    int n; scanf("%d", &n);
    int freqs[100000];
    for (int i = 0; i < n; i++) scanf("%d", &freqs[i]);
    printf("%lld\n", huffmanEncodingCost(freqs, n));
    return 0;
}`,
    cpp: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

long long huffmanEncodingCost(vector<int>& freqs) {
    priority_queue<int, vector<int>, greater<int>> pq;
    for (int f : freqs) pq.push(f);
    long long cost = 0;
    while (pq.size() > 1) {
        int a = pq.top(); pq.pop();
        int b = pq.top(); pq.pop();
        int s = a + b;
        cost += s;
        pq.push(s);
    }
    return cost;
}

int main() {
    int n; cin >> n;
    vector<int> freqs(n);
    for (int i = 0; i < n; i++) cin >> freqs[i];
    cout << huffmanEncodingCost(freqs) << "\n";
    return 0;
}`
  },
  'hc-h2': {
    python: `from collections import Counter

def huffman_cost(freqs):
    values = freqs[:]
    cost = 0
    while len(values) > 1:
        values.sort()
        a = values.pop(0)
        b = values.pop(0)
        cost += a + b
        values.append(a + b)
    return cost

def solve(s, queries):
    freq = Counter(s)
    values = list(freq.values())
    for q in queries:
        if q[0] == 'U':
            freq[q[1]] += 1
            values = list(freq.values())
        else:
            print(huffman_cost(values))

s = input().strip()
q = int(input())
queries = []
for _ in range(q):
    parts = input().split()
    if parts[0] == 'U':
        queries.append(('U', parts[1]))
    else:
        queries.append(('Q',))
solve(s, queries)`,
    java: `import java.util.*;

public class Solution {
    public static long huffmanCost(Map<Character, Integer> freqMap) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int f : freqMap.values()) pq.offer(f);
        long cost = 0;
        while (pq.size() > 1) {
            int a = pq.poll();
            int b = pq.poll();
            int s = a + b;
            cost += s;
            pq.offer(s);
        }
        return cost;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int q = sc.nextInt();
        Map<Character, Integer> freqMap = new HashMap<>();
        for (char c : s.toCharArray()) freqMap.put(c, freqMap.getOrDefault(c, 0) + 1);
        for (int i = 0; i < q; i++) {
            String type = sc.next();
            if (type.equals("U")) {
                char c = sc.next().charAt(0);
                freqMap.put(c, freqMap.getOrDefault(c, 0) + 1);
            } else {
                System.out.println(huffmanCost(freqMap));
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) {
    return (*(int*)a > *(int*)b) - (*(int*)a < *(int*)b);
}

long long huffmanCost(int* freqs, int n) {
    qsort(freqs, n, sizeof(int), cmp);
    long long cost = 0;
    while (n > 1) {
        int a = freqs[0], b = freqs[1];
        cost += a + b;
        freqs[0] = a + b;
        for (int i = 1; i < n - 1; i++) freqs[i] = freqs[i + 1];
        n--;
        qsort(freqs, n, sizeof(int), cmp);
    }
    return cost;
}

int main() {
    char s[10001];
    scanf("%s", s);
    int freq[26] = {0};
    for (int i = 0; s[i]; i++) freq[s[i]-'a']++;
    int q; scanf("%d", &q);
    while (q--) {
        char type[3]; scanf("%s", type);
        if (type[0] == 'U') {
            char ch[2]; scanf("%s", ch);
            freq[ch[0]-'a']++;
        } else {
            int arr[26], n = 0;
            for (int i = 0; i < 26; i++) if (freq[i] > 0) arr[n++] = freq[i];
            printf("%lld\n", huffmanCost(arr, n));
        }
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <queue>
#include <map>
#include <string>
using namespace std;

long long huffmanCost(map<char,int>& freqMap) {
    priority_queue<int, vector<int>, greater<int>> pq;
    for (auto& [_, f] : freqMap) pq.push(f);
    long long cost = 0;
    while (pq.size() > 1) {
        int a = pq.top(); pq.pop();
        int b = pq.top(); pq.pop();
        int s = a + b;
        cost += s;
        pq.push(s);
    }
    return cost;
}

int main() {
    string s;
    cin >> s;
    map<char,int> freqMap;
    for (char c : s) freqMap[c]++;
    int q; cin >> q;
    while (q--) {
        string type; cin >> type;
        if (type == "U") {
            char c; cin >> c;
            freqMap[c]++;
        } else {
            cout << huffmanCost(freqMap) << "\n";
        }
    }
    return 0;
}`
  },
  'hc-h3': {
    python: `def verify_huffman(chars, freqs, codes):
    for code in codes:
        if not code:
            return 'NO'
    for i, a in enumerate(codes):
        for j in range(i + 1, len(codes)):
            if a == codes[j] or a.startswith(codes[j]) or codes[j].startswith(a):
                return 'NO'
    return 'YES'

n = int(input())
chars, freqs, codes = [], [], []
for _ in range(n):
    parts = input().split()
    chars.append(parts[0])
    freqs.append(int(parts[1]))
    codes.append(parts[2])
print(verify_huffman(chars, freqs, codes))`,
    java: `import java.util.*;

public class Solution {
    public static String verifyHuffman(char[] chars, int[] freqs, String[] codes) {
        for (String code : codes) {
            if (code == null || code.isEmpty()) return "NO";
        }
        for (int i = 0; i < codes.length; i++) {
            for (int j = i + 1; j < codes.length; j++) {
                if (codes[i].equals(codes[j]) || codes[i].startsWith(codes[j]) || codes[j].startsWith(codes[i])) {
                    return "NO";
                }
            }
        }
        return "YES";
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        char[] chars = new char[n];
        int[] freqs = new int[n];
        String[] codes = new String[n];
        for (int i = 0; i < n; i++) {
            chars[i] = sc.next().charAt(0);
            freqs[i] = sc.nextInt();
            codes[i] = sc.next();
        }
        System.out.println(verifyHuffman(chars, freqs, codes));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

void verifyHuffman(char* chars, int* freqs, char codes[][27], int n, char* result) {
    strcpy(result, "YES");
    for (int i = 0; i < n; i++) {
        if (codes[i][0] == '\0') { strcpy(result, "NO"); return; }
        for (int j = i + 1; j < n; j++) {
            if (strcmp(codes[i], codes[j]) == 0 || strncmp(codes[i], codes[j], strlen(codes[i])) == 0 || strncmp(codes[j], codes[i], strlen(codes[j])) == 0) {
                strcpy(result, "NO"); return;
            }
        }
    }
}

int main() {
    int n; scanf("%d", &n);
    char chars[26], codes[26][27];
    int freqs[26];
    for (int i = 0; i < n; i++) {
        char ch[2]; scanf("%s %d %s", ch, &freqs[i], codes[i]);
        chars[i] = ch[0];
    }
    char result[4];
    verifyHuffman(chars, freqs, codes, n, result);
    printf("%s\n", result);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

string verifyHuffman(vector<char>& chars, vector<int>& freqs, vector<string>& codes) {
    for (const string& code : codes) {
        if (code.empty()) return "NO";
    }
    for (int i = 0; i < (int)codes.size(); i++) {
        for (int j = i + 1; j < (int)codes.size(); j++) {
            if (codes[i] == codes[j] || codes[i].rfind(codes[j], 0) == 0 || codes[j].rfind(codes[i], 0) == 0) {
                return "NO";
            }
        }
    }
    return "YES";
}

int main() {
    int n; cin >> n;
    vector<char> chars(n);
    vector<int> freqs(n);
    vector<string> codes(n);
    for (int i = 0; i < n; i++) {
        char ch; cin >> ch >> freqs[i] >> codes[i];
        chars[i] = ch;
    }
    cout << verifyHuffman(chars, freqs, codes) << "\n";
    return 0;
}`
  },
  'hc-h4': {
    python: `def k_ary_huffman_cost(freqs, k):
    values = freqs[:]
    cost = 0
    while len(values) > 1:
        values.sort()
        total = 0
        take = min(k, len(values))
        for _ in range(take):
            total += values.pop(0)
        cost += total
        values.append(total)
    return cost

n = int(input())
k = int(input())
freqs = list(map(int, input().split()))
print(k_ary_huffman_cost(freqs, k))`,
    java: `import java.util.*;

public class Solution {
    public static long kAryHuffmanCost(int[] freqs, int k) {
        PriorityQueue<Long> pq = new PriorityQueue<>();
        for (int f : freqs) pq.offer((long) f);
        long cost = 0;
        while (pq.size() > 1) {
            long sum = 0;
            int take = Math.min(k, pq.size());
            for (int i = 0; i < take; i++) {
                sum += pq.poll();
            }
            cost += sum;
            pq.offer(sum);
        }
        return cost;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] freqs = new int[n];
        for (int i = 0; i < n; i++) freqs[i] = sc.nextInt();
        System.out.println(kAryHuffmanCost(freqs, k));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) {
    return (*(int*)a > *(int*)b) - (*(int*)a < *(int*)b);
}

long long kAryHuffmanCost(int* freqs, int n, int k) {
    qsort(freqs, n, sizeof(int), cmp);
    long long cost = 0;
    while (n > 1) {
        int sum = 0;
        int take = n < k ? n : k;
        for (int i = 0; i < take; i++) {
            sum += freqs[0];
            for (int j = 0; j < n - 1; j++) freqs[j] = freqs[j + 1];
            n--;
        }
        cost += sum;
        int newFreqs[100000];
        for (int i = 0; i < n; i++) newFreqs[i] = freqs[i];
        newFreqs[n++] = sum;
        for (int i = 0; i < n; i++) freqs[i] = newFreqs[i];
        qsort(freqs, n, sizeof(int), cmp);
    }
    return cost;
}

int main() {
    int n, k; scanf("%d %d", &n, &k);
    int freqs[100000];
    for (int i = 0; i < n; i++) scanf("%d", &freqs[i]);
    printf("%lld\n", kAryHuffmanCost(freqs, n, k));
    return 0;
}`,
    cpp: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

long long kAryHuffmanCost(vector<int>& freqs, int k) {
    priority_queue<int, vector<int>, greater<int>> pq;
    for (int f : freqs) pq.push(f);
    long long cost = 0;
    while (pq.size() > 1) {
        int sum = 0;
        int take = min(k, (int)pq.size());
        for (int i = 0; i < take; i++) {
            sum += pq.top(); pq.pop();
        }
        cost += sum;
        pq.push(sum);
    }
    return cost;
}

int main() {
    int n, k; cin >> n >> k;
    vector<int> freqs(n);
    for (int i = 0; i < n; i++) cin >> freqs[i];
    cout << kAryHuffmanCost(freqs, k) << "\n";
    return 0;
}`
  },
  'hc-h5': {
    python: `def canonical_huffman(chars, code_lens):
    pairs = sorted(zip(code_lens, chars))
    code = 0
    result = []
    prev_len = 0
    for length, ch in pairs:
        code <<= (length - prev_len)
        result.append((ch, format(code, f'0{length}b')))
        code += 1
        prev_len = length
    return result

n = int(input())
chars, code_lens = [], []
for _ in range(n):
    parts = input().split()
    chars.append(parts[0])
    code_lens.append(int(parts[1]))
result = canonical_huffman(chars, code_lens)
for ch, code in result:
    print(ch, code)`,
    java: `import java.util.*;

public class Solution {
    public static List<String[]> canonicalHuffman(char[] chars, int[] codeLens) {
        List<int[]> pairs = new ArrayList<>();
        for (int i = 0; i < chars.length; i++) pairs.add(new int[]{codeLens[i], chars[i]});
        pairs.sort(Comparator.comparingInt(a -> a[0]));

        List<String[]> result = new ArrayList<>();
        long code = 0;
        int prevLen = 0;
        for (int[] p : pairs) {
            int length = p[0];
            code <<= (length - prevLen);
            result.add(new String[]{String.valueOf((char) p[1]), Long.toBinaryString(code).substring(1)});
            code++;
            prevLen = length;
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        char[] chars = new char[n];
        int[] codeLens = new int[n];
        for (int i = 0; i < n; i++) {
            chars[i] = sc.next().charAt(0);
            codeLens[i] = sc.nextInt();
        }
        List<String[]> result = canonicalHuffman(chars, codeLens);
        for (String[] pair : result) System.out.println(pair[0] + " " + pair[1]);
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void canonicalHuffman(char* chars, int* codeLens, int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (codeLens[i] > codeLens[j]) {
                int t = codeLens[i]; codeLens[i] = codeLens[j]; codeLens[j] = t;
                char c = chars[i]; chars[i] = chars[j]; chars[j] = c;
            }
        }
    }
    unsigned long long code = 0;
    int prevLen = 0;
    for (int i = 0; i < n; i++) {
        int length = codeLens[i];
        code <<= (length - prevLen);
        printf("%c ", chars[i]);
        for (int j = 0; j < length; j++) {
            int bit = (code >> (length - 1 - j)) & 1;
            printf("%d", bit);
        }
        printf("\n");
        code++;
        prevLen = length;
    }
}

int main() {
    int n; scanf("%d", &n);
    char chars[26];
    int codeLens[26];
    for (int i = 0; i < n; i++) {
        char ch[2]; scanf("%s %d", ch, &codeLens[i]);
        chars[i] = ch[0];
    }
    canonicalHuffman(chars, codeLens, n);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

vector<pair<char,string>> canonicalHuffman(vector<char>& chars, vector<int>& codeLens) {
    vector<pair<int,char>> pairs;
    for (int i = 0; i < (int)chars.size(); i++) pairs.push_back({codeLens[i], chars[i]});
    sort(pairs.begin(), pairs.end());

    vector<pair<char,string>> result;
    unsigned long long code = 0;
    int prevLen = 0;
    for (auto [len, ch] : pairs) {
        code <<= (len - prevLen);
        string s = bitset<32>(code).to_string().substr(32 - len);
        result.push_back({ch, s});
        code++;
        prevLen = len;
    }
    return result;
}

int main() {
    int n; cin >> n;
    vector<char> chars(n);
    vector<int> codeLens(n);
    for (int i = 0; i < n; i++) {
        char ch; cin >> ch >> codeLens[i];
        chars[i] = ch;
    }
    auto result = canonicalHuffman(chars, codeLens);
    for (auto& [ch, code] : result)
        cout << ch << " " << code << "\n";
    return 0;
}`
  },
};
