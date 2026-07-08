export const binaryTreeRightSideViewSolutions = {
  'rsv-e1': {
    python: `from collections import deque

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def build_tree(values):
    if not values or values[0] == -1:
        return None
    root = TreeNode(values[0])
    queue = deque([root])
    i = 1
    while queue and i < len(values):
        node = queue.popleft()
        if i < len(values) and values[i] != -1:
            node.left = TreeNode(values[i])
            queue.append(node.left)
        i += 1
        if i < len(values) and values[i] != -1:
            node.right = TreeNode(values[i])
            queue.append(node.right)
        i += 1
    return root

def right_side_view(values):
    root = build_tree(values)
    if not root:
        return []
    ans = []
    queue = deque([root])
    while queue:
        size = len(queue)
        for i in range(size):
            node = queue.popleft()
            if i == size - 1:
                ans.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    return ans

n = int(input())
values = list(map(int, input().split()))
result = right_side_view(values)
print(*result)`,
    java: `import java.util.*;

public class Main {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) {
            this.val = val;
        }
    }

    public static TreeNode buildTree(int[] values) {
        if (values.length == 0 || values[0] == -1)
            return null;
        TreeNode root = new TreeNode(values[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int i = 1;
        while (!queue.isEmpty() && i < values.length) {
            TreeNode node = queue.poll();
            if (i < values.length && values[i] != -1) {
                node.left = new TreeNode(values[i]);
                queue.offer(node.left);
            }
            i++;
            if (i < values.length && values[i] != -1) {
                node.right = new TreeNode(values[i]);
                queue.offer(node.right);
            }
            i++;
        }
        return root;
    }

    public static List<Integer> rightSideView(int[] values) {
        TreeNode root = buildTree(values);
        List<Integer> ans = new ArrayList<>();
        if (root == null)
            return ans;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                if (i == size - 1)
                    ans.add(node.val);
                if (node.left != null)
                    queue.offer(node.left);
                if (node.right != null)
                    queue.offer(node.right);
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] values = new int[n];
        for (int i = 0; i < n; i++)
            values[i] = sc.nextInt();
        List<Integer> ans = rightSideView(values);
        for (int i = 0; i < ans.size(); i++) {
            if (i > 0)
                System.out.print(" ");
            System.out.print(ans.get(i));
        }
        sc.close();
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
} TreeNode;

typedef struct QueueNode {
    TreeNode *data;
    struct QueueNode *next;
} QueueNode;

typedef struct {
    QueueNode *front;
    QueueNode *rear;
} Queue;

TreeNode* createNode(int val) {
    TreeNode *node = (TreeNode*)malloc(sizeof(TreeNode));
    node->val = val;
    node->left = NULL;
    node->right = NULL;
    return node;
}

void initQueue(Queue *q) {
    q->front = NULL;
    q->rear = NULL;
}

int isEmpty(Queue *q) {
    return q->front == NULL;
}

void enqueue(Queue *q, TreeNode *node) {
    QueueNode *temp = (QueueNode*)malloc(sizeof(QueueNode));
    temp->data = node;
    temp->next = NULL;
    if (q->rear == NULL) {
        q->front = temp;
        q->rear = temp;
    } else {
        q->rear->next = temp;
        q->rear = temp;
    }
}

TreeNode* dequeue(Queue *q) {
    if (isEmpty(q))
        return NULL;
    QueueNode *temp = q->front;
    TreeNode *node = temp->data;
    q->front = q->front->next;
    if (q->front == NULL)
        q->rear = NULL;
    free(temp);
    return node;
}

int queueSize(Queue *q) {
    int count = 0;
    QueueNode *temp = q->front;
    while (temp != NULL) {
        count++;
        temp = temp->next;
    }
    return count;
}

TreeNode* buildTree(int values[], int n) {
    if (n == 0 || values[0] == -1)
        return NULL;
    TreeNode *root = createNode(values[0]);
    Queue q;
    initQueue(&q);
    enqueue(&q, root);
    int i = 1;
    while (!isEmpty(&q) && i < n) {
        TreeNode *curr = dequeue(&q);
        if (i < n && values[i] != -1) {
            curr->left = createNode(values[i]);
            enqueue(&q, curr->left);
        }
        i++;
        if (i < n && values[i] != -1) {
            curr->right = createNode(values[i]);
            enqueue(&q, curr->right);
        }
        i++;
    }
    return root;
}

void rightSideView(int values[], int n) {
    TreeNode *root = buildTree(values, n);
    if (root == NULL)
        return;
    Queue q;
    initQueue(&q);
    enqueue(&q, root);
    int first = 1;
    while (!isEmpty(&q)) {
        int size = queueSize(&q);
        for (int i = 0; i < size; i++) {
            TreeNode *curr = dequeue(&q);
            if (i == size - 1) {
                if (!first)
                    printf(" ");
                printf("%d", curr->val);
                first = 0;
            }
            if (curr->left)
                enqueue(&q, curr->left);
            if (curr->right)
                enqueue(&q, curr->right);
        }
    }
    printf("\n");
}

int main() {
    int n;
    scanf("%d", &n);
    int values[n];
    for (int i = 0; i < n; i++)
        scanf("%d", &values[i]);
    rightSideView(values, n);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) {
        val = x;
        left = NULL;
        right = NULL;
    }
};

TreeNode* buildTree(vector<int>& values) {
    if (values.empty() || values[0] == -1)
        return NULL;
    TreeNode* root = new TreeNode(values[0]);
    queue<TreeNode*> q;
    q.push(root);
    int i = 1;
    while (!q.empty() && i < values.size()) {
        TreeNode* curr = q.front();
        q.pop();
        if (i < values.size() && values[i] != -1) {
            curr->left = new TreeNode(values[i]);
            q.push(curr->left);
        }
        i++;
        if (i < values.size() && values[i] != -1) {
            curr->right = new TreeNode(values[i]);
            q.push(curr->right);
        }
        i++;
    }
    return root;
}

vector<int> rightSideView(vector<int>& values) {
    TreeNode* root = buildTree(values);
    vector<int> ans;
    if (root == NULL)
        return ans;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        int size = q.size();
        for (int i = 0; i < size; i++) {
            TreeNode* curr = q.front();
            q.pop();
            if (i == size - 1)
                ans.push_back(curr->val);
            if (curr->left)
                q.push(curr->left);
            if (curr->right)
                q.push(curr->right);
        }
    }
    return ans;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<int> values(n);
    for (int i = 0; i < n; i++)
        cin >> values[i];
    vector<int> ans = rightSideView(values);
    for (int i = 0; i < ans.size(); i++) {
        if (i)
            cout << " ";
        cout << ans[i];
    }
    cout << "\n";
    return 0;
}`
  },'rsv-m1': {
python:`from collections import deque

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def buildTree(values):
    if not values or values[0] == -1:
        return None
    root = TreeNode(values[0])
    queue = deque([root])
    i = 1
    while queue and i < len(values):
        node = queue.popleft()
        if i < len(values) and values[i] != -1:
            node.left = TreeNode(values[i])
            queue.append(node.left)
        i += 1
        if i < len(values) and values[i] != -1:
            node.right = TreeNode(values[i])
            queue.append(node.right)
        i += 1
    return root

def left_side_view(values):
    root = buildTree(values)
    if root is None:
        return []
    ans = []
    queue = deque([root])
    while queue:
        size = len(queue)
        for i in range(size):
            node = queue.popleft()
            if i == 0:
                ans.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    return ans

n = int(input())
values = list(map(int, input().split()))
print(*left_side_view(values))`,

java:`import java.util.*;

public class Main {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) {
            this.val = val;
        }
    }

    public static TreeNode buildTree(int[] values) {
        if (values.length == 0 || values[0] == -1)
            return null;
        TreeNode root = new TreeNode(values[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int i = 1;
        while (!queue.isEmpty() && i < values.length) {
            TreeNode node = queue.poll();
            if (i < values.length && values[i] != -1) {
                node.left = new TreeNode(values[i]);
                queue.offer(node.left);
            }
            i++;
            if (i < values.length && values[i] != -1) {
                node.right = new TreeNode(values[i]);
                queue.offer(node.right);
            }
            i++;
        }
        return root;
    }

    public static List<Integer> leftSideView(int[] values) {
        TreeNode root = buildTree(values);
        List<Integer> ans = new ArrayList<>();
        if (root == null)
            return ans;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                if (i == 0)
                    ans.add(node.val);
                if (node.left != null)
                    queue.offer(node.left);
                if (node.right != null)
                    queue.offer(node.right);
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] values = new int[n];
        for (int i = 0; i < n; i++)
            values[i] = sc.nextInt();
        List<Integer> ans = leftSideView(values);
        for (int i = 0; i < ans.size(); i++) {
            if (i > 0)
                System.out.print(" ");
            System.out.print(ans.get(i));
        }
        System.out.println();
        sc.close();
    }
}`,c:`#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
} TreeNode;

typedef struct QueueNode {
    TreeNode *data;
    struct QueueNode *next;
} QueueNode;

typedef struct {
    QueueNode *front;
    QueueNode *rear;
} Queue;

TreeNode* createNode(int val) {
    TreeNode *node = (TreeNode*)malloc(sizeof(TreeNode));
    node->val = val;
    node->left = NULL;
    node->right = NULL;
    return node;
}

void initQueue(Queue *q) {
    q->front = NULL;
    q->rear = NULL;
}

int isEmpty(Queue *q) {
    return q->front == NULL;
}

void enqueue(Queue *q, TreeNode *node) {
    QueueNode *temp = (QueueNode*)malloc(sizeof(QueueNode));
    temp->data = node;
    temp->next = NULL;
    if (q->rear == NULL) {
        q->front = temp;
        q->rear = temp;
    } else {
        q->rear->next = temp;
        q->rear = temp;
    }
}

TreeNode* dequeue(Queue *q) {
    if (isEmpty(q))
        return NULL;
    QueueNode *temp = q->front;
    TreeNode *node = temp->data;
    q->front = q->front->next;
    if (q->front == NULL)
        q->rear = NULL;
    free(temp);
    return node;
}

int queueSize(Queue *q) {
    int count = 0;
    QueueNode *temp = q->front;
    while (temp != NULL) {
        count++;
        temp = temp->next;
    }
    return count;
}

TreeNode* buildTree(int values[], int n) {
    if (n == 0 || values[0] == -1)
        return NULL;
    TreeNode *root = createNode(values[0]);
    Queue q;
    initQueue(&q);
    enqueue(&q, root);
    int i = 1;
    while (!isEmpty(&q) && i < n) {
        TreeNode *curr = dequeue(&q);
        if (i < n && values[i] != -1) {
            curr->left = createNode(values[i]);
            enqueue(&q, curr->left);
        }
        i++;
        if (i < n && values[i] != -1) {
            curr->right = createNode(values[i]);
            enqueue(&q, curr->right);
        }
        i++;
    }
    return root;
}

void leftSideView(int values[], int n) {
    TreeNode *root = buildTree(values, n);
    if (root == NULL)
        return;
    Queue q;
    initQueue(&q);
    enqueue(&q, root);
    int first = 1;
    while (!isEmpty(&q)) {
        int size = queueSize(&q);
        for (int i = 0; i < size; i++) {
            TreeNode *curr = dequeue(&q);
            if (i == 0) {
                if (!first)
                    printf(" ");
                printf("%d", curr->val);
                first = 0;
            }
            if (curr->left)
                enqueue(&q, curr->left);
            if (curr->right)
                enqueue(&q, curr->right);
        }
    }
    printf("\\n");
}

int main() {
    int n;
    scanf("%d", &n);
    int values[n];
    for (int i = 0; i < n; i++)
        scanf("%d", &values[i]);
    leftSideView(values, n);
    return 0;
}`,cpp:`#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) {
        val = x;
        left = NULL;
        right = NULL;
    }
};

TreeNode* buildTree(vector<int>& values) {
    if (values.empty() || values[0] == -1)
        return NULL;
    TreeNode* root = new TreeNode(values[0]);
    queue<TreeNode*> q;
    q.push(root);
    int i = 1;
    while (!q.empty() && i < values.size()) {
        TreeNode* curr = q.front();
        q.pop();
        if (i < values.size() && values[i] != -1) {
            curr->left = new TreeNode(values[i]);
            q.push(curr->left);
        }
        i++;
        if (i < values.size() && values[i] != -1) {
            curr->right = new TreeNode(values[i]);
            q.push(curr->right);
        }
        i++;
    }
    return root;
}

vector<int> leftSideView(vector<int>& values) {
    TreeNode* root = buildTree(values);
    vector<int> ans;
    if (root == NULL)
        return ans;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        int size = q.size();
        for (int i = 0; i < size; i++) {
            TreeNode* curr = q.front();
            q.pop();
            if (i == 0)
                ans.push_back(curr->val);
            if (curr->left)
                q.push(curr->left);
            if (curr->right)
                q.push(curr->right);
        }
    }
    return ans;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> values(n);
    for (int i = 0; i < n; i++)
        cin >> values[i];

    vector<int> ans = leftSideView(values);

    for (int i = 0; i < ans.size(); i++) {
        if (i)
            cout << " ";
        cout << ans[i];
    }

    cout << "\\n";
    return 0;
}`
  },'rsv-h1': {
python:`from collections import deque

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def buildTree(values):
    if not values or values[0] == -1:
        return None
    root = TreeNode(values[0])
    queue = deque([root])
    i = 1
    while queue and i < len(values):
        node = queue.popleft()
        if i < len(values) and values[i] != -1:
            node.left = TreeNode(values[i])
            queue.append(node.left)
        i += 1
        if i < len(values) and values[i] != -1:
            node.right = TreeNode(values[i])
            queue.append(node.right)
        i += 1
    return root

def top_view(values):
    root = buildTree(values)
    if root is None:
        return []
    view = {}
    queue = deque([(root, 0)])
    while queue:
        node, hd = queue.popleft()
        if hd not in view:
            view[hd] = node.val
        if node.left:
            queue.append((node.left, hd - 1))
        if node.right:
            queue.append((node.right, hd + 1))
    return [view[x] for x in sorted(view)]

n = int(input())
values = list(map(int, input().split()))
print(*top_view(values))`,java:`import java.util.*;

public class Main {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) {
            this.val = val;
        }
    }

    static class Pair {
        TreeNode node;
        int hd;
        Pair(TreeNode node, int hd) {
            this.node = node;
            this.hd = hd;
        }
    }

    public static TreeNode buildTree(int[] values) {
        if (values.length == 0 || values[0] == -1)
            return null;
        TreeNode root = new TreeNode(values[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int i = 1;
        while (!queue.isEmpty() && i < values.length) {
            TreeNode node = queue.poll();
            if (i < values.length && values[i] != -1) {
                node.left = new TreeNode(values[i]);
                queue.offer(node.left);
            }
            i++;
            if (i < values.length && values[i] != -1) {
                node.right = new TreeNode(values[i]);
                queue.offer(node.right);
            }
            i++;
        }
        return root;
    }

    public static List<Integer> topView(int[] values) {
        TreeNode root = buildTree(values);
        List<Integer> ans = new ArrayList<>();
        if (root == null)
            return ans;
        TreeMap<Integer, Integer> map = new TreeMap<>();
        Queue<Pair> queue = new LinkedList<>();
        queue.offer(new Pair(root, 0));
        while (!queue.isEmpty()) {
            Pair curr = queue.poll();
            if (!map.containsKey(curr.hd))
                map.put(curr.hd, curr.node.val);
            if (curr.node.left != null)
                queue.offer(new Pair(curr.node.left, curr.hd - 1));
            if (curr.node.right != null)
                queue.offer(new Pair(curr.node.right, curr.hd + 1));
        }
        ans.addAll(map.values());
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] values = new int[n];
        for (int i = 0; i < n; i++)
            values[i] = sc.nextInt();
        List<Integer> ans = topView(values);
        for (int i = 0; i < ans.size(); i++) {
            if (i > 0)
                System.out.print(" ");
            System.out.print(ans.get(i));
        }
        System.out.println();
        sc.close();
    }
}`,c:`#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
} TreeNode;

typedef struct QueueNode {
    TreeNode *node;
    int hd;
    struct QueueNode *next;
} QueueNode;

typedef struct {
    QueueNode *front;
    QueueNode *rear;
} Queue;

typedef struct {
    int hd;
    int val;
} View;

TreeNode* createNode(int val) {
    TreeNode *node = (TreeNode*)malloc(sizeof(TreeNode));
    node->val = val;
    node->left = NULL;
    node->right = NULL;
    return node;
}

void initQueue(Queue *q) {
    q->front = NULL;
    q->rear = NULL;
}

int isEmpty(Queue *q) {
    return q->front == NULL;
}

void enqueue(Queue *q, TreeNode *node, int hd) {
    QueueNode *temp = (QueueNode*)malloc(sizeof(QueueNode));
    temp->node = node;
    temp->hd = hd;
    temp->next = NULL;
    if (q->rear == NULL) {
        q->front = temp;
        q->rear = temp;
    } else {
        q->rear->next = temp;
        q->rear = temp;
    }
}

QueueNode* dequeue(Queue *q) {
    if (isEmpty(q))
        return NULL;
    QueueNode *temp = q->front;
    q->front = q->front->next;
    if (q->front == NULL)
        q->rear = NULL;
    return temp;
}

TreeNode* buildTree(int values[], int n) {
    if (n == 0 || values[0] == -1)
        return NULL;
    TreeNode *root = createNode(values[0]);
    Queue q;
    initQueue(&q);
    enqueue(&q, root, 0);
    int i = 1;
    while (!isEmpty(&q) && i < n) {
        QueueNode *curr = dequeue(&q);
        TreeNode *node = curr->node;
        free(curr);
        if (i < n && values[i] != -1) {
            node->left = createNode(values[i]);
            enqueue(&q, node->left, 0);
        }
        i++;
        if (i < n && values[i] != -1) {
            node->right = createNode(values[i]);
            enqueue(&q, node->right, 0);
        }
        i++;
    }
    return root;
}

void topView(int values[], int n) {
    TreeNode *root = buildTree(values, n);
    if (root == NULL)
        return;

    Queue q;
    initQueue(&q);
    enqueue(&q, root, 0);

    View view[205];
    int count = 0;

    while (!isEmpty(&q)) {
        QueueNode *curr = dequeue(&q);
        TreeNode *node = curr->node;
        int hd = curr->hd;

        int exists = 0;
        for (int i = 0; i < count; i++) {
            if (view[i].hd == hd) {
                exists = 1;
                break;
            }
        }

        if (!exists) {
            view[count].hd = hd;
            view[count].val = node->val;
            count++;
        }

        if (node->left)
            enqueue(&q, node->left, hd - 1);

        if (node->right)
            enqueue(&q, node->right, hd + 1);

        free(curr);
    }

    for (int i = 0; i < count - 1; i++) {
        for (int j = i + 1; j < count; j++) {
            if (view[i].hd > view[j].hd) {
                View temp = view[i];
                view[i] = view[j];
                view[j] = temp;
            }
        }
    }

    for (int i = 0; i < count; i++) {
        if (i)
            printf(" ");
        printf("%d", view[i].val);
    }
    printf("\\n");
}

int main() {
    int n;
    scanf("%d", &n);

    int values[n];
    for (int i = 0; i < n; i++)
        scanf("%d", &values[i]);

    topView(values, n);

    return 0;
}`,cpp:`#include <iostream>
#include <vector>
#include <queue>
#include <map>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) {
        val = x;
        left = NULL;
        right = NULL;
    }
};

TreeNode* buildTree(vector<int>& values) {
    if (values.empty() || values[0] == -1)
        return NULL;

    TreeNode* root = new TreeNode(values[0]);
    queue<TreeNode*> q;
    q.push(root);

    int i = 1;

    while (!q.empty() && i < values.size()) {
        TreeNode* curr = q.front();
        q.pop();

        if (i < values.size() && values[i] != -1) {
            curr->left = new TreeNode(values[i]);
            q.push(curr->left);
        }
        i++;

        if (i < values.size() && values[i] != -1) {
            curr->right = new TreeNode(values[i]);
            q.push(curr->right);
        }
        i++;
    }

    return root;
}

vector<int> topView(vector<int>& values) {
    TreeNode* root = buildTree(values);
    vector<int> ans;

    if (root == NULL)
        return ans;

    map<int, int> view;
    queue<pair<TreeNode*, int>> q;
    q.push({root, 0});

    while (!q.empty()) {
        pair<TreeNode*, int> curr = q.front();
        q.pop();

        TreeNode* node = curr.first;
        int hd = curr.second;

        if (view.find(hd) == view.end())
            view[hd] = node->val;

        if (node->left)
            q.push({node->left, hd - 1});

        if (node->right)
            q.push({node->right, hd + 1});
    }

    for (auto it = view.begin(); it != view.end(); it++)
        ans.push_back(it->second);

    return ans;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> values(n);

    for (int i = 0; i < n; i++)
        cin >> values[i];

    vector<int> ans = topView(values);

    for (int i = 0; i < ans.size(); i++) {
        if (i)
            cout << " ";
        cout << ans[i];
    }

    cout << "\\n";

    return 0;
}`
  }
};