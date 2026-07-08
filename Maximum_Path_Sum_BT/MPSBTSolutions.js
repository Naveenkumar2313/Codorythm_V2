export const maximumPathSumSolutions = {
  'mpsbt-e1': {
    python: `from collections import deque

class TreeNode:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None

def buildTree(values):
    if not values or values[0]=="null":
        return None
    root=TreeNode(int(values[0]))
    q=deque([root])
    i=1
    while q and i<len(values):
        node=q.popleft()
        if i<len(values) and values[i]!="null":
            node.left=TreeNode(int(values[i]))
            q.append(node.left)
        i+=1
        if i<len(values) and values[i]!="null":
            node.right=TreeNode(int(values[i]))
            q.append(node.right)
        i+=1
    return root

def hasPathSum(root,targetSum):
    if root is None:
        return False
    if root.left is None and root.right is None:
        return root.val==targetSum
    return hasPathSum(root.left,targetSum-root.val) or hasPathSum(root.right,targetSum-root.val)

tree=input().split()
targetSum=int(input())
root=buildTree(tree)
print(str(hasPathSum(root,targetSum)).lower())`,

    java: `import java.util.*;

class TreeNode{
    int val;
    TreeNode left,right;
    TreeNode(int val){
        this.val=val;
    }
}

public class Main{

    static TreeNode buildTree(String[] arr){
        if(arr.length==0||arr[0].equals("null"))
            return null;

        TreeNode root=new TreeNode(Integer.parseInt(arr[0]));
        Queue<TreeNode> q=new LinkedList<>();
        q.offer(root);

        int i=1;

        while(!q.isEmpty()&&i<arr.length){
            TreeNode cur=q.poll();

            if(i<arr.length&&!arr[i].equals("null")){
                cur.left=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.left);
            }
            i++;

            if(i<arr.length&&!arr[i].equals("null")){
                cur.right=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.right);
            }
            i++;
        }

        return root;
    }

    static boolean hasPathSum(TreeNode root,int targetSum){
        if(root==null)
            return false;

        if(root.left==null&&root.right==null)
            return root.val==targetSum;

        return hasPathSum(root.left,targetSum-root.val)||hasPathSum(root.right,targetSum-root.val);
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);

        String[] tree=sc.nextLine().trim().split("\\s+");
        int targetSum=Integer.parseInt(sc.nextLine().trim());

        TreeNode root=buildTree(tree);

        System.out.println(hasPathSum(root,targetSum));

        sc.close();
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

struct TreeNode{
    int val;
    struct TreeNode *left,*right;
};

struct TreeNode* newNode(int val){
    struct TreeNode* node=(struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val=val;
    node->left=node->right=NULL;
    return node;
}

struct TreeNode* buildTree(char *line){
    char *tokens[5000];
    int n=0;
    char *token=strtok(line," \n");
    while(token){
        tokens[n++]=token;
        token=strtok(NULL," \n");
    }

    if(n==0||strcmp(tokens[0],"null")==0)
        return NULL;

    struct TreeNode* queue[5000];
    int front=0,rear=0;

    struct TreeNode* root=newNode(atoi(tokens[0]));
    queue[rear++]=root;

    int i=1;

    while(front<rear&&i<n){
        struct TreeNode* cur=queue[front++];

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->left=newNode(atoi(tokens[i]));
            queue[rear++]=cur->left;
        }
        i++;

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->right=newNode(atoi(tokens[i]));
            queue[rear++]=cur->right;
        }
        i++;
    }

    return root;
}

bool hasPathSum(struct TreeNode* root,int targetSum){
    if(root==NULL)
        return false;

    if(root->left==NULL&&root->right==NULL)
        return root->val==targetSum;

    return hasPathSum(root->left,targetSum-root->val)||hasPathSum(root->right,targetSum-root->val);
}

int main(){
    char line[10000];

    if(!fgets(line,sizeof(line),stdin))
        return 0;

    int targetSum;

    if(scanf("%d",&targetSum)!=1)
        return 0;

    struct TreeNode* root=buildTree(line);

    printf("%s\n",hasPathSum(root,targetSum)?"true":"false");

    return 0;
}`,

cpp: `#include <iostream>
#include <sstream>
#include <vector>
#include <queue>

using namespace std;

struct TreeNode{
    int val;
    TreeNode *left,*right;

    TreeNode(int x){
        val=x;
        left=right=nullptr;
    }
};

TreeNode* buildTree(vector<string>& arr){
    if(arr.empty()||arr[0]=="null")
        return nullptr;

    TreeNode* root=new TreeNode(stoi(arr[0]));
    queue<TreeNode*> q;
    q.push(root);

    int i=1;

    while(!q.empty()&&i<arr.size()){
        TreeNode* cur=q.front();
        q.pop();

        if(i<arr.size()&&arr[i]!="null"){
            cur->left=new TreeNode(stoi(arr[i]));
            q.push(cur->left);
        }
        i++;

        if(i<arr.size()&&arr[i]!="null"){
            cur->right=new TreeNode(stoi(arr[i]));
            q.push(cur->right);
        }
        i++;
    }

    return root;
}

bool hasPathSum(TreeNode* root,int targetSum){
    if(root==nullptr)
        return false;

    if(root->left==nullptr&&root->right==nullptr)
        return root->val==targetSum;

    return hasPathSum(root->left,targetSum-root->val)||hasPathSum(root->right,targetSum-root->val);
}

int main(){
    string line;

    getline(cin,line);

    stringstream ss(line);
    vector<string> tree;
    string s;

    while(ss>>s)
        tree.push_back(s);

    int targetSum;
    cin>>targetSum;

    TreeNode* root=buildTree(tree);

    cout<<(hasPathSum(root,targetSum)?"true":"false")<<"\\n";

    return 0;
}`
  },'mpsbt-e2':{
python:`from collections import deque

class TreeNode:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None

def buildTree(values):
    if not values or values[0]=="null":
        return None
    root=TreeNode(int(values[0]))
    q=deque([root])
    i=1
    while q and i<len(values):
        node=q.popleft()
        if i<len(values) and values[i]!="null":
            node.left=TreeNode(int(values[i]))
            q.append(node.left)
        i+=1
        if i<len(values) and values[i]!="null":
            node.right=TreeNode(int(values[i]))
            q.append(node.right)
        i+=1
    return root

def maxDepth(root):
    if root is None:
        return 0
    return 1+max(maxDepth(root.left),maxDepth(root.right))

tree=input().split()
root=buildTree(tree)
print(maxDepth(root))`,

java:`import java.util.*;

class TreeNode{
    int val;
    TreeNode left,right;
    TreeNode(int val){
        this.val=val;
    }
}

public class Main{

    static TreeNode buildTree(String[] arr){
        if(arr.length==0||arr[0].equals("null"))
            return null;

        TreeNode root=new TreeNode(Integer.parseInt(arr[0]));
        Queue<TreeNode> q=new LinkedList<>();
        q.offer(root);

        int i=1;

        while(!q.isEmpty()&&i<arr.length){
            TreeNode cur=q.poll();

            if(i<arr.length&&!arr[i].equals("null")){
                cur.left=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.left);
            }
            i++;

            if(i<arr.length&&!arr[i].equals("null")){
                cur.right=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.right);
            }
            i++;
        }

        return root;
    }

    static int maxDepth(TreeNode root){
        if(root==null)
            return 0;
        return 1+Math.max(maxDepth(root.left),maxDepth(root.right));
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);

        String[] tree=sc.nextLine().trim().split("\\s+");

        TreeNode root=buildTree(tree);

        System.out.println(maxDepth(root));

        sc.close();
    }
}`,c:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct TreeNode{
    int val;
    struct TreeNode *left,*right;
};

struct TreeNode* newNode(int val){
    struct TreeNode* node=(struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val=val;
    node->left=node->right=NULL;
    return node;
}

struct TreeNode* buildTree(char *line){
    char *tokens[5000];
    int n=0;
    char *token=strtok(line," \n");
    while(token){
        tokens[n++]=token;
        token=strtok(NULL," \n");
    }

    if(n==0||strcmp(tokens[0],"null")==0)
        return NULL;

    struct TreeNode* queue[5000];
    int front=0,rear=0;

    struct TreeNode* root=newNode(atoi(tokens[0]));
    queue[rear++]=root;

    int i=1;

    while(front<rear&&i<n){
        struct TreeNode* cur=queue[front++];

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->left=newNode(atoi(tokens[i]));
            queue[rear++]=cur->left;
        }
        i++;

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->right=newNode(atoi(tokens[i]));
            queue[rear++]=cur->right;
        }
        i++;
    }

    return root;
}

int maxDepth(struct TreeNode* root){
    if(root==NULL)
        return 0;

    int left=maxDepth(root->left);
    int right=maxDepth(root->right);

    return (left>right?left:right)+1;
}

int main(){
    char line[10000];

    if(!fgets(line,sizeof(line),stdin))
        return 0;

    struct TreeNode* root=buildTree(line);

    printf("%d\n",maxDepth(root));

    return 0;
}`,

cpp:`#include <iostream>
#include <sstream>
#include <vector>
#include <queue>

using namespace std;

struct TreeNode{
    int val;
    TreeNode *left,*right;

    TreeNode(int x){
        val=x;
        left=right=nullptr;
    }
};

TreeNode* buildTree(vector<string>& arr){
    if(arr.empty()||arr[0]=="null")
        return nullptr;

    TreeNode* root=new TreeNode(stoi(arr[0]));
    queue<TreeNode*> q;
    q.push(root);

    int i=1;

    while(!q.empty()&&i<arr.size()){
        TreeNode* cur=q.front();
        q.pop();

        if(i<arr.size()&&arr[i]!="null"){
            cur->left=new TreeNode(stoi(arr[i]));
            q.push(cur->left);
        }
        i++;

        if(i<arr.size()&&arr[i]!="null"){
            cur->right=new TreeNode(stoi(arr[i]));
            q.push(cur->right);
        }
        i++;
    }

    return root;
}

int maxDepth(TreeNode* root){
    if(root==nullptr)
        return 0;

    return 1+max(maxDepth(root->left),maxDepth(root->right));
}

int main(){
    string line;
    getline(cin,line);

    stringstream ss(line);
    vector<string> tree;
    string s;

    while(ss>>s)
        tree.push_back(s);

    TreeNode* root=buildTree(tree);

    cout<<maxDepth(root)<<"\n";

    return 0;
}`
  },'mpsbt-e3':{
python:`from collections import deque
class TreeNode:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None
def buildTree(values):
    if not values or values[0]=="null":
        return None
    root=TreeNode(int(values[0]))
    q=deque([root])
    i=1
    while q and i<len(values):
        node=q.popleft()
        if i<len(values) and values[i]!="null":
            node.left=TreeNode(int(values[i]))
            q.append(node.left)
        i+=1
        if i<len(values) and values[i]!="null":
            node.right=TreeNode(int(values[i]))
            q.append(node.right)
        i+=1
    return root
def maxRootToLeafSum(root):
    if root.left is None and root.right is None:
        return root.val
    if root.left is None:
        return root.val+maxRootToLeafSum(root.right)
    if root.right is None:
        return root.val+maxRootToLeafSum(root.left)
    return root.val+max(maxRootToLeafSum(root.left),maxRootToLeafSum(root.right))
tree=input().split()
root=buildTree(tree)
print(maxRootToLeafSum(root))`,

java:`import java.util.*;
class TreeNode{
    int val;
    TreeNode left,right;
    TreeNode(int val){
        this.val=val;
    }
}
public class Main{
    static TreeNode buildTree(String[] arr){
        if(arr.length==0||arr[0].equals("null"))
            return null;
        TreeNode root=new TreeNode(Integer.parseInt(arr[0]));
        Queue<TreeNode> q=new LinkedList<>();
        q.offer(root);

        int i=1;

        while(!q.isEmpty()&&i<arr.length){
            TreeNode cur=q.poll();

            if(i<arr.length&&!arr[i].equals("null")){
                cur.left=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.left);
            }
            i++;

            if(i<arr.length&&!arr[i].equals("null")){
                cur.right=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.right);
            }
            i++;
        }

        return root;
    }

    static int maxRootToLeafSum(TreeNode root){
        if(root.left==null&&root.right==null)
            return root.val;

        if(root.left==null)
            return root.val+maxRootToLeafSum(root.right);

        if(root.right==null)
            return root.val+maxRootToLeafSum(root.left);

        return root.val+Math.max(maxRootToLeafSum(root.left),maxRootToLeafSum(root.right));
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);

        String[] tree=sc.nextLine().trim().split("\\s+");

        TreeNode root=buildTree(tree);

        System.out.println(maxRootToLeafSum(root));

        sc.close();
    }
}`,c:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct TreeNode{
    int val;
    struct TreeNode *left,*right;
};

struct TreeNode* newNode(int val){
    struct TreeNode* node=(struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val=val;
    node->left=node->right=NULL;
    return node;
}

struct TreeNode* buildTree(char *line){
    char *tokens[5000];
    int n=0;
    char *token=strtok(line," \n");
    while(token){
        tokens[n++]=token;
        token=strtok(NULL," \n");
    }

    if(n==0||strcmp(tokens[0],"null")==0)
        return NULL;

    struct TreeNode* queue[5000];
    int front=0,rear=0;

    struct TreeNode* root=newNode(atoi(tokens[0]));
    queue[rear++]=root;

    int i=1;

    while(front<rear&&i<n){
        struct TreeNode* cur=queue[front++];

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->left=newNode(atoi(tokens[i]));
            queue[rear++]=cur->left;
        }
        i++;

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->right=newNode(atoi(tokens[i]));
            queue[rear++]=cur->right;
        }
        i++;
    }

    return root;
}

int maxRootToLeafSum(struct TreeNode* root){
    if(root->left==NULL&&root->right==NULL)
        return root->val;

    if(root->left==NULL)
        return root->val+maxRootToLeafSum(root->right);

    if(root->right==NULL)
        return root->val+maxRootToLeafSum(root->left);

    int left=maxRootToLeafSum(root->left);
    int right=maxRootToLeafSum(root->right);

    return root->val+(left>right?left:right);
}

int main(){
    char line[10000];

    if(!fgets(line,sizeof(line),stdin))
        return 0;

    struct TreeNode* root=buildTree(line);

    printf("%d\n",maxRootToLeafSum(root));

    return 0;
}`,

cpp:`#include <iostream>
#include <sstream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

struct TreeNode{
    int val;
    TreeNode *left,*right;

    TreeNode(int x){
        val=x;
        left=right=nullptr;
    }
};

TreeNode* buildTree(vector<string>& arr){
    if(arr.empty()||arr[0]=="null")
        return nullptr;

    TreeNode* root=new TreeNode(stoi(arr[0]));
    queue<TreeNode*> q;
    q.push(root);

    int i=1;

    while(!q.empty()&&i<arr.size()){
        TreeNode* cur=q.front();
        q.pop();

        if(i<arr.size()&&arr[i]!="null"){
            cur->left=new TreeNode(stoi(arr[i]));
            q.push(cur->left);
        }
        i++;

        if(i<arr.size()&&arr[i]!="null"){
            cur->right=new TreeNode(stoi(arr[i]));
            q.push(cur->right);
        }
        i++;
    }

    return root;
}

int maxRootToLeafSum(TreeNode* root){
    if(root->left==nullptr&&root->right==nullptr)
        return root->val;

    if(root->left==nullptr)
        return root->val+maxRootToLeafSum(root->right);

    if(root->right==nullptr)
        return root->val+maxRootToLeafSum(root->left);

    return root->val+max(maxRootToLeafSum(root->left),maxRootToLeafSum(root->right));
}

int main(){
    string line;
    getline(cin,line);

    stringstream ss(line);
    vector<string> tree;
    string s;

    while(ss>>s)
        tree.push_back(s);

    TreeNode* root=buildTree(tree);

    cout<<maxRootToLeafSum(root)<<"\n";

    return 0;
}`
  },'mpsbt-m1':{
python:`from collections import deque

class TreeNode:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None

def buildTree(values):
    if not values or values[0]=="null":
        return None
    root=TreeNode(int(values[0]))
    q=deque([root])
    i=1
    while q and i<len(values):
        node=q.popleft()
        if i<len(values) and values[i]!="null":
            node.left=TreeNode(int(values[i]))
            q.append(node.left)
        i+=1
        if i<len(values) and values[i]!="null":
            node.right=TreeNode(int(values[i]))
            q.append(node.right)
        i+=1
    return root

def pathSum(root,target):
    ans=[]

    def dfs(node,path,total):
        if node is None:
            return

        path.append(node.val)
        total+=node.val

        if node.left is None and node.right is None:
            if total==target:
                ans.append(path[:])
        else:
            dfs(node.left,path,total)
            dfs(node.right,path,total)

        path.pop()

    dfs(root,[],0)
    return ans

tree=input().split()
target=int(input())

root=buildTree(tree)

print(pathSum(root,target))`,

java:`import java.util.*;
class TreeNode{
    int val;
    TreeNode left,right;
    TreeNode(int val){
        this.val=val;
    }
}
public class Main{

    static TreeNode buildTree(String[] arr){
        if(arr.length==0||arr[0].equals("null"))
            return null;

        TreeNode root=new TreeNode(Integer.parseInt(arr[0]));
        Queue<TreeNode> q=new LinkedList<>();
        q.offer(root);

        int i=1;

        while(!q.isEmpty()&&i<arr.length){
            TreeNode cur=q.poll();

            if(i<arr.length&&!arr[i].equals("null")){
                cur.left=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.left);
            }
            i++;

            if(i<arr.length&&!arr[i].equals("null")){
                cur.right=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.right);
            }
            i++;
        }

        return root;
    }

    static void dfs(TreeNode root,int target,int sum,List<Integer> path,List<List<Integer>> ans){
        if(root==null)
            return;

        path.add(root.val);
        sum+=root.val;

        if(root.left==null&&root.right==null){
            if(sum==target)
                ans.add(new ArrayList<>(path));
        }else{
            dfs(root.left,target,sum,path,ans);
            dfs(root.right,target,sum,path,ans);
        }

        path.remove(path.size()-1);
    }

    static List<List<Integer>> pathSum(TreeNode root,int target){
        List<List<Integer>> ans=new ArrayList<>();
        dfs(root,target,0,new ArrayList<>(),ans);
        return ans;
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);

        String[] tree=sc.nextLine().trim().split("\\s+");
        int target=Integer.parseInt(sc.nextLine());

        TreeNode root=buildTree(tree);

        System.out.println(pathSum(root,target));

        sc.close();
    }
}`,c:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct TreeNode{
    int val;
    struct TreeNode *left,*right;
};

struct TreeNode* newNode(int val){
    struct TreeNode* node=(struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val=val;
    node->left=node->right=NULL;
    return node;
}

struct TreeNode* buildTree(char *line){
    char *tokens[5000];
    int n=0;
    char *token=strtok(line," \n");
    while(token){
        tokens[n++]=token;
        token=strtok(NULL," \n");
    }

    if(n==0||strcmp(tokens[0],"null")==0)
        return NULL;

    struct TreeNode* queue[5000];
    int front=0,rear=0;

    struct TreeNode* root=newNode(atoi(tokens[0]));
    queue[rear++]=root;

    int i=1;

    while(front<rear&&i<n){
        struct TreeNode* cur=queue[front++];

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->left=newNode(atoi(tokens[i]));
            queue[rear++]=cur->left;
        }
        i++;

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->right=newNode(atoi(tokens[i]));
            queue[rear++]=cur->right;
        }
        i++;
    }

    return root;
}

void dfs(struct TreeNode* root,int target,int sum,int path[],int len){
    if(root==NULL)
        return;

    path[len]=root->val;
    len++;
    sum+=root->val;

    if(root->left==NULL&&root->right==NULL){
        if(sum==target){
            printf("[");
            for(int i=0;i<len;i++){
                printf("%d",path[i]);
                if(i!=len-1)
                    printf(", ");
            }
            printf("]\n");
        }
        return;
    }

    dfs(root->left,target,sum,path,len);
    dfs(root->right,target,sum,path,len);
}

int main(){
    char line[10000];

    if(!fgets(line,sizeof(line),stdin))
        return 0;

    int target;
    scanf("%d",&target);

    struct TreeNode* root=buildTree(line);

    int path[5000];
    dfs(root,target,0,path,0);

    return 0;
}`,

cpp:`#include <iostream>
#include <sstream>
#include <vector>
#include <queue>

using namespace std;

struct TreeNode{
    int val;
    TreeNode *left,*right;

    TreeNode(int x){
        val=x;
        left=right=nullptr;
    }
};

TreeNode* buildTree(vector<string>& arr){
    if(arr.empty()||arr[0]=="null")
        return nullptr;

    TreeNode* root=new TreeNode(stoi(arr[0]));
    queue<TreeNode*> q;
    q.push(root);

    int i=1;

    while(!q.empty()&&i<arr.size()){
        TreeNode* cur=q.front();
        q.pop();

        if(i<arr.size()&&arr[i]!="null"){
            cur->left=new TreeNode(stoi(arr[i]));
            q.push(cur->left);
        }
        i++;

        if(i<arr.size()&&arr[i]!="null"){
            cur->right=new TreeNode(stoi(arr[i]));
            q.push(cur->right);
        }
        i++;
    }

    return root;
}

void dfs(TreeNode* root,int target,int sum,vector<int>& path,vector<vector<int>>& ans){
    if(root==nullptr)
        return;

    path.push_back(root->val);
    sum+=root->val;

    if(root->left==nullptr&&root->right==nullptr){
        if(sum==target)
            ans.push_back(path);
    }else{
        dfs(root->left,target,sum,path,ans);
        dfs(root->right,target,sum,path,ans);
    }

    path.pop_back();
}

vector<vector<int>> pathSum(TreeNode* root,int target){
    vector<vector<int>> ans;
    vector<int> path;
    dfs(root,target,0,path,ans);
    return ans;
}

int main(){
    string line;
    getline(cin,line);

    stringstream ss(line);
    vector<string> tree;
    string s;

    while(ss>>s)
        tree.push_back(s);

    int target;
    cin>>target;

    TreeNode* root=buildTree(tree);

    vector<vector<int>> ans=pathSum(root,target);

    for(auto &v:ans){
        cout<<"[";
        for(int i=0;i<v.size();i++){
            cout<<v[i];
            if(i!=v.size()-1)
                cout<<", ";
        }
        cout<<"]"<<endl;
    }

    return 0;
}`
  },'mpsbt-m2':{
python:`from collections import deque

class TreeNode:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None

def buildTree(values):
    if not values or values[0]=="null":
        return None
    root=TreeNode(int(values[0]))
    q=deque([root])
    i=1
    while q and i<len(values):
        node=q.popleft()
        if i<len(values) and values[i]!="null":
            node.left=TreeNode(int(values[i]))
            q.append(node.left)
        i+=1
        if i<len(values) and values[i]!="null":
            node.right=TreeNode(int(values[i]))
            q.append(node.right)
        i+=1
    return root

def pathSum(root,target):
    prefix={0:1}

    def dfs(node,cur):
        if node is None:
            return 0

        cur+=node.val
        ans=prefix.get(cur-target,0)

        prefix[cur]=prefix.get(cur,0)+1

        ans+=dfs(node.left,cur)
        ans+=dfs(node.right,cur)

        prefix[cur]-=1

        return ans

    return dfs(root,0)

tree=input().split()
target=int(input())

root=buildTree(tree)

print(pathSum(root,target))`,

java:`import java.util.*;

class TreeNode{
    int val;
    TreeNode left,right;
    TreeNode(int val){
        this.val=val;
    }
}

public class Main{

    static TreeNode buildTree(String[] arr){
        if(arr.length==0||arr[0].equals("null"))
            return null;

        TreeNode root=new TreeNode(Integer.parseInt(arr[0]));
        Queue<TreeNode> q=new LinkedList<>();
        q.offer(root);

        int i=1;

        while(!q.isEmpty()&&i<arr.length){
            TreeNode cur=q.poll();

            if(i<arr.length&&!arr[i].equals("null")){
                cur.left=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.left);
            }
            i++;

            if(i<arr.length&&!arr[i].equals("null")){
                cur.right=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.right);
            }
            i++;
        }

        return root;
    }

    static int dfs(TreeNode root,long sum,int target,HashMap<Long,Integer> map){
        if(root==null)
            return 0;

        sum+=root.val;

        int ans=map.getOrDefault(sum-target,0);

        map.put(sum,map.getOrDefault(sum,0)+1);

        ans+=dfs(root.left,sum,target,map);
        ans+=dfs(root.right,sum,target,map);

        map.put(sum,map.get(sum)-1);

        return ans;
    }

    static int pathSum(TreeNode root,int target){
        HashMap<Long,Integer> map=new HashMap<>();
        map.put(0L,1);
        return dfs(root,0,target,map);
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);

        String[] tree=sc.nextLine().trim().split("\\s+");
        int target=Integer.parseInt(sc.nextLine());

        TreeNode root=buildTree(tree);

        System.out.println(pathSum(root,target));

        sc.close();
    }
}`,c:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct TreeNode{
    int val;
    struct TreeNode *left,*right;
};

struct TreeNode* newNode(int val){
    struct TreeNode* node=(struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val=val;
    node->left=node->right=NULL;
    return node;
}

struct TreeNode* buildTree(char *line){
    char *tokens[5000];
    int n=0;
    char *token=strtok(line," \n");

    while(token){
        tokens[n++]=token;
        token=strtok(NULL," \n");
    }

    if(n==0||strcmp(tokens[0],"null")==0)
        return NULL;

    struct TreeNode* queue[5000];
    int front=0,rear=0;

    struct TreeNode* root=newNode(atoi(tokens[0]));
    queue[rear++]=root;

    int i=1;

    while(front<rear&&i<n){
        struct TreeNode* cur=queue[front++];

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->left=newNode(atoi(tokens[i]));
            queue[rear++]=cur->left;
        }
        i++;

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->right=newNode(atoi(tokens[i]));
            queue[rear++]=cur->right;
        }
        i++;
    }

    return root;
}

int dfs(struct TreeNode* root,long long sum,int target,long long path[],int size){
    if(root==NULL)
        return 0;

    sum+=root->val;
    path[size++]=sum;

    int ans=0;

    if(sum==target)
        ans++;

    for(int i=0;i<size-1;i++){
        if(sum-path[i]==target)
            ans++;
    }

    ans+=dfs(root->left,sum,target,path,size);
    ans+=dfs(root->right,sum,target,path,size);

    return ans;
}

int pathSum(struct TreeNode* root,int target){
    long long path[5000];
    return dfs(root,0,target,path,0);
}

int main(){
    char line[10000];

    if(!fgets(line,sizeof(line),stdin))
        return 0;

    int target;
    scanf("%d",&target);

    struct TreeNode* root=buildTree(line);

    printf("%d\n",pathSum(root,target));

    return 0;
}`,

cpp:`#include <iostream>
#include <sstream>
#include <vector>
#include <queue>
#include <unordered_map>

using namespace std;

struct TreeNode{
    int val;
    TreeNode *left,*right;

    TreeNode(int x){
        val=x;
        left=right=nullptr;
    }
};

TreeNode* buildTree(vector<string>& arr){
    if(arr.empty()||arr[0]=="null")
        return nullptr;

    TreeNode* root=new TreeNode(stoi(arr[0]));
    queue<TreeNode*> q;
    q.push(root);

    int i=1;

    while(!q.empty()&&i<arr.size()){
        TreeNode* cur=q.front();
        q.pop();

        if(i<arr.size()&&arr[i]!="null"){
            cur->left=new TreeNode(stoi(arr[i]));
            q.push(cur->left);
        }
        i++;

        if(i<arr.size()&&arr[i]!="null"){
            cur->right=new TreeNode(stoi(arr[i]));
            q.push(cur->right);
        }
        i++;
    }

    return root;
}

int dfs(TreeNode* root,long long sum,int target,unordered_map<long long,int>& mp){
    if(root==nullptr)
        return 0;

    sum+=root->val;

    int ans=0;

    if(mp.count(sum-target))
        ans+=mp[sum-target];

    mp[sum]++;

    ans+=dfs(root->left,sum,target,mp);
    ans+=dfs(root->right,sum,target,mp);

    mp[sum]--;

    return ans;
}

int pathSum(TreeNode* root,int target){
    unordered_map<long long,int> mp;
    mp[0]=1;
    return dfs(root,0,target,mp);
}

int main(){
    string line;
    getline(cin,line);

    stringstream ss(line);
    vector<string> tree;
    string s;

    while(ss>>s)
        tree.push_back(s);

    int target;
    cin>>target;

    TreeNode* root=buildTree(tree);

    cout<<pathSum(root,target)<<endl;

    return 0;
}`
  },'mpsbt-m3':{
python:`from collections import deque
class TreeNode:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None
def buildTree(values):
    if not values or values[0]=="null":
        return None
    root=TreeNode(int(values[0]))
    q=deque([root])
    i=1
    while q and i<len(values):
        node=q.popleft()
        if i<len(values) and values[i]!="null":
            node.left=TreeNode(int(values[i]))
            q.append(node.left)
        i+=1
        if i<len(values) and values[i]!="null":
            node.right=TreeNode(int(values[i]))
            q.append(node.right)
        i+=1
    return root
diameter=0
def height(root):
    global diameter
    if root is None:
        return 0
    left=height(root.left)
    right=height(root.right)
    diameter=max(diameter,left+right)
    return 1+max(left,right)
tree=input().split()
root=buildTree(tree)
height(root)
print(diameter)`,

java:`import java.util.*;
class TreeNode{
    int val;
    TreeNode left,right;
    TreeNode(int val){
        this.val=val;
    }
}
public class Main{

    static int diameter=0;

    static TreeNode buildTree(String[] arr){
        if(arr.length==0||arr[0].equals("null"))
            return null;

        TreeNode root=new TreeNode(Integer.parseInt(arr[0]));
        Queue<TreeNode> q=new LinkedList<>();
        q.offer(root);

        int i=1;

        while(!q.isEmpty()&&i<arr.length){
            TreeNode cur=q.poll();

            if(i<arr.length&&!arr[i].equals("null")){
                cur.left=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.left);
            }
            i++;

            if(i<arr.length&&!arr[i].equals("null")){
                cur.right=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.right);
            }
            i++;
        }

        return root;
    }

    static int height(TreeNode root){
        if(root==null)
            return 0;

        int left=height(root.left);
        int right=height(root.right);

        diameter=Math.max(diameter,left+right);

        return 1+Math.max(left,right);
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);

        String[] tree=sc.nextLine().trim().split("\\s+");

        TreeNode root=buildTree(tree);

        height(root);

        System.out.println(diameter);

        sc.close();
    }
}`,c:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>
struct TreeNode{
    int val;
    struct TreeNode *left,*right;
};
struct TreeNode* newNode(int val){
    struct TreeNode* node=(struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val=val;
    node->left=node->right=NULL;
    return node;
}
struct TreeNode* buildTree(char *line){
    char *tokens[5000];
    int n=0;
    char *token=strtok(line," \n");
    while(token){
        tokens[n++]=token;
        token=strtok(NULL," \n");
    }
    if(n==0||strcmp(tokens[0],"null")==0)
        return NULL;
    struct TreeNode* queue[5000];
    int front=0,rear=0;
    struct TreeNode* root=newNode(atoi(tokens[0]));
    queue[rear++]=root;
    int i=1;
    while(front<rear&&i<n){
        struct TreeNode* cur=queue[front++];
        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->left=newNode(atoi(tokens[i]));
            queue[rear++]=cur->left;
        }
        i++;
        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->right=newNode(atoi(tokens[i]));
            queue[rear++]=cur->right;
        }
        i++;
    }
    return root;
}
int diameter=0;
int height(struct TreeNode* root){
    if(root==NULL)
        return 0;
    int left=height(root->left);
    int right=height(root->right);
    if(left+right>diameter)
        diameter=left+right;
    return (left>right?left:right)+1;
}
int main(){
    char line[10000];
    if(!fgets(line,sizeof(line),stdin))
        return 0;
    struct TreeNode* root=buildTree(line);
    height(root);
    printf("%d\n",diameter);
    return 0;
}`,

cpp:`#include <iostream>
#include <sstream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

struct TreeNode{
    int val;
    TreeNode *left,*right;

    TreeNode(int x){
        val=x;
        left=right=nullptr;
    }
};

TreeNode* buildTree(vector<string>& arr){
    if(arr.empty()||arr[0]=="null")
        return nullptr;

    TreeNode* root=new TreeNode(stoi(arr[0]));
    queue<TreeNode*> q;
    q.push(root);

    int i=1;

    while(!q.empty()&&i<arr.size()){
        TreeNode* cur=q.front();
        q.pop();

        if(i<arr.size()&&arr[i]!="null"){
            cur->left=new TreeNode(stoi(arr[i]));
            q.push(cur->left);
        }
        i++;

        if(i<arr.size()&&arr[i]!="null"){
            cur->right=new TreeNode(stoi(arr[i]));
            q.push(cur->right);
        }
        i++;
    }

    return root;
}

int diameter=0;

int height(TreeNode* root){
    if(root==nullptr)
        return 0;

    int left=height(root->left);
    int right=height(root->right);

    diameter=max(diameter,left+right);

    return 1+max(left,right);
}

int main(){
    string line;
    getline(cin,line);

    stringstream ss(line);
    vector<string> tree;
    string s;

    while(ss>>s)
        tree.push_back(s);

    TreeNode* root=buildTree(tree);

    height(root);

    cout<<diameter<<endl;

    return 0;
}`
  },'mpsbt-h1':{
python:`from collections import deque
class TreeNode:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None
def buildTree(values):
    if not values or values[0]=="null":
        return None
    root=TreeNode(int(values[0]))
    q=deque([root])
    i=1
    while q and i<len(values):
        node=q.popleft()
        if i<len(values) and values[i]!="null":
            node.left=TreeNode(int(values[i]))
            q.append(node.left)
        i+=1
        if i<len(values) and values[i]!="null":
            node.right=TreeNode(int(values[i]))
            q.append(node.right)
        i+=1
    return root
ans=-10**18
def dfs(root):
    global ans
    if root is None:
        return 0
    left=max(0,dfs(root.left))
    right=max(0,dfs(root.right))
    ans=max(ans,root.val+left+right)
    return root.val+max(left,right)
tree=input().split()
root=buildTree(tree)
dfs(root)
print(ans)`,

java:`import java.util.*;
class TreeNode{
    int val;
    TreeNode left,right;
    TreeNode(int val){
        this.val=val;
    }
}
public class Main{
    static int ans=Integer.MIN_VALUE;
    static TreeNode buildTree(String[] arr){
        if(arr.length==0||arr[0].equals("null"))
            return null;
        TreeNode root=new TreeNode(Integer.parseInt(arr[0]));
        Queue<TreeNode> q=new LinkedList<>();
        q.offer(root);
        int i=1;
        while(!q.isEmpty()&&i<arr.length){
            TreeNode cur=q.poll();
            if(i<arr.length&&!arr[i].equals("null")){
                cur.left=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.left);
            }
            i++;
            if(i<arr.length&&!arr[i].equals("null")){
                cur.right=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.right);
            }
            i++;
        }
        return root;
    }
    static int dfs(TreeNode root){
        if(root==null)
            return 0;
        int left=Math.max(0,dfs(root.left));
        int right=Math.max(0,dfs(root.right));
        ans=Math.max(ans,root.val+left+right);
        return root.val+Math.max(left,right);
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        String[] tree=sc.nextLine().trim().split("\\s+");
        TreeNode root=buildTree(tree);
        dfs(root);
        System.out.println(ans);
        sc.close();
    }
}`,c:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>
struct TreeNode{
    int val;
    struct TreeNode *left,*right;
};
struct TreeNode* newNode(int val){
    struct TreeNode* node=(struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val=val;
    node->left=node->right=NULL;
    return node;
}
struct TreeNode* buildTree(char *line){
    char *tokens[5000];
    int n=0;
    char *token=strtok(line," \n");

    while(token){
        tokens[n++]=token;
        token=strtok(NULL," \n");
    }

    if(n==0||strcmp(tokens[0],"null")==0)
        return NULL;

    struct TreeNode* queue[5000];
    int front=0,rear=0;

    struct TreeNode* root=newNode(atoi(tokens[0]));
    queue[rear++]=root;

    int i=1;

    while(front<rear&&i<n){
        struct TreeNode* cur=queue[front++];

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->left=newNode(atoi(tokens[i]));
            queue[rear++]=cur->left;
        }
        i++;

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->right=newNode(atoi(tokens[i]));
            queue[rear++]=cur->right;
        }
        i++;
    }

    return root;
}

int ans=INT_MIN;

int dfs(struct TreeNode* root){
    if(root==NULL)
        return 0;

    int left=dfs(root->left);
    int right=dfs(root->right);

    if(left<0)
        left=0;
    if(right<0)
        right=0;

    if(root->val+left+right>ans)
        ans=root->val+left+right;

    return root->val+(left>right?left:right);
}

int main(){
    char line[10000];

    if(!fgets(line,sizeof(line),stdin))
        return 0;

    struct TreeNode* root=buildTree(line);

    dfs(root);

    printf("%d\n",ans);

    return 0;
}`,

cpp:`#include <iostream>
#include <sstream>
#include <vector>
#include <queue>
#include <climits>
#include <algorithm>
using namespace std;
struct TreeNode{
    int val;
    TreeNode *left,*right;
    TreeNode(int x){
        val=x;
        left=right=nullptr;
    }
};
TreeNode* buildTree(vector<string>& arr){
    if(arr.empty()||arr[0]=="null")
        return nullptr;
    TreeNode* root=new TreeNode(stoi(arr[0]));
    queue<TreeNode*> q;
    q.push(root);
    int i=1;
    while(!q.empty()&&i<arr.size()){
        TreeNode* cur=q.front();
        q.pop();
        if(i<arr.size()&&arr[i]!="null"){
            cur->left=new TreeNode(stoi(arr[i]));
            q.push(cur->left);
        }
        i++;
        if(i<arr.size()&&arr[i]!="null"){
            cur->right=new TreeNode(stoi(arr[i]));
            q.push(cur->right);
        }
        i++;
    }
    return root;
}
int ans=INT_MIN;
int dfs(TreeNode* root){
    if(root==nullptr)
        return 0;
    int left=max(0,dfs(root->left));
    int right=max(0,dfs(root->right));
    ans=max(ans,root->val+left+right);
    return root->val+max(left,right);
}
int main(){
    string line;
    getline(cin,line);
    stringstream ss(line);
    vector<string> tree;
    string s;
    while(ss>>s)
        tree.push_back(s);
    TreeNode* root=buildTree(tree);
    dfs(root);
    cout<<ans<<endl;
    return 0;
}`
  },'mpsbt-h2':{
python:`from collections import deque
class TreeNode:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None
def buildTree(values):
    if not values or values[0]=="null":
        return None
    root=TreeNode(int(values[0]))
    q=deque([root])
    i=1
    while q and i<len(values):
        node=q.popleft()
        if i<len(values) and values[i]!="null":
            node.left=TreeNode(int(values[i]))
            q.append(node.left)
        i+=1
        if i<len(values) and values[i]!="null":
            node.right=TreeNode(int(values[i]))
            q.append(node.right)
        i+=1
    return root
def dfs(root):
    if root is None:
        return (0,0)
    left=dfs(root.left)
    right=dfs(root.right)
    rob=root.val+left[1]+right[1]
    notRob=max(left)+max(right)
    return (rob,notRob)
tree=input().split()
root=buildTree(tree)

print(max(dfs(root)))`,

java:`import java.util.*;
class TreeNode{
    int val;
    TreeNode left,right;
    TreeNode(int val){
        this.val=val;
    }
}
public class Main{

    static TreeNode buildTree(String[] arr){
        if(arr.length==0||arr[0].equals("null"))
            return null;

        TreeNode root=new TreeNode(Integer.parseInt(arr[0]));
        Queue<TreeNode> q=new LinkedList<>();
        q.offer(root);

        int i=1;

        while(!q.isEmpty()&&i<arr.length){
            TreeNode cur=q.poll();

            if(i<arr.length&&!arr[i].equals("null")){
                cur.left=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.left);
            }
            i++;

            if(i<arr.length&&!arr[i].equals("null")){
                cur.right=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.right);
            }
            i++;
        }

        return root;
    }

    static int[] dfs(TreeNode root){
        if(root==null)
            return new int[]{0,0};

        int[] left=dfs(root.left);
        int[] right=dfs(root.right);

        int rob=root.val+left[1]+right[1];
        int notRob=Math.max(left[0],left[1])+Math.max(right[0],right[1]);

        return new int[]{rob,notRob};
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);

        String[] tree=sc.nextLine().trim().split("\\s+");

        TreeNode root=buildTree(tree);

        int[] ans=dfs(root);

        System.out.println(Math.max(ans[0],ans[1]));

        sc.close();
    }
}`,c:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct TreeNode{
    int val;
    struct TreeNode *left,*right;
};

struct TreeNode* newNode(int val){
    struct TreeNode* node=(struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val=val;
    node->left=node->right=NULL;
    return node;
}

struct TreeNode* buildTree(char *line){
    char *tokens[5000];
    int n=0;
    char *token=strtok(line," \n");

    while(token){
        tokens[n++]=token;
        token=strtok(NULL," \n");
    }

    if(n==0||strcmp(tokens[0],"null")==0)
        return NULL;

    struct TreeNode* queue[5000];
    int front=0,rear=0;

    struct TreeNode* root=newNode(atoi(tokens[0]));
    queue[rear++]=root;

    int i=1;

    while(front<rear&&i<n){
        struct TreeNode* cur=queue[front++];

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->left=newNode(atoi(tokens[i]));
            queue[rear++]=cur->left;
        }
        i++;

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->right=newNode(atoi(tokens[i]));
            queue[rear++]=cur->right;
        }
        i++;
    }

    return root;
}

struct Pair{
    int rob;
    int notRob;
};

struct Pair dfs(struct TreeNode* root){
    struct Pair ans;

    if(root==NULL){
        ans.rob=0;
        ans.notRob=0;
        return ans;
    }

    struct Pair left=dfs(root->left);
    struct Pair right=dfs(root->right);

    ans.rob=root->val+left.notRob+right.notRob;

    int leftBest=left.rob>left.notRob?left.rob:left.notRob;
    int rightBest=right.rob>right.notRob?right.rob:right.notRob;

    ans.notRob=leftBest+rightBest;

    return ans;
}

int main(){
    char line[10000];

    if(!fgets(line,sizeof(line),stdin))
        return 0;

    struct TreeNode* root=buildTree(line);

    struct Pair ans=dfs(root);

    printf("%d\n",ans.rob>ans.notRob?ans.rob:ans.notRob);

    return 0;
}`,

cpp:`#include <iostream>
#include <sstream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

struct TreeNode{
    int val;
    TreeNode *left,*right;

    TreeNode(int x){
        val=x;
        left=right=nullptr;
    }
};

TreeNode* buildTree(vector<string>& arr){
    if(arr.empty()||arr[0]=="null")
        return nullptr;

    TreeNode* root=new TreeNode(stoi(arr[0]));
    queue<TreeNode*> q;
    q.push(root);

    int i=1;

    while(!q.empty()&&i<arr.size()){
        TreeNode* cur=q.front();
        q.pop();

        if(i<arr.size()&&arr[i]!="null"){
            cur->left=new TreeNode(stoi(arr[i]));
            q.push(cur->left);
        }
        i++;

        if(i<arr.size()&&arr[i]!="null"){
            cur->right=new TreeNode(stoi(arr[i]));
            q.push(cur->right);
        }
        i++;
    }

    return root;
}

pair<int,int> dfs(TreeNode* root){
    if(root==nullptr)
        return {0,0};

    auto left=dfs(root->left);
    auto right=dfs(root->right);

    int rob=root->val+left.second+right.second;
    int notRob=max(left.first,left.second)+max(right.first,right.second);

    return {rob,notRob};
}

int main(){
    string line;
    getline(cin,line);

    stringstream ss(line);
    vector<string> tree;
    string s;

    while(ss>>s)
        tree.push_back(s);

    TreeNode* root=buildTree(tree);

    auto ans=dfs(root);

    cout<<max(ans.first,ans.second)<<endl;

    return 0;
}`
  },'mpsbt-h3':{
python:`from collections import deque
class TreeNode:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None
def buildTree(values):
    if not values or values[0]=="null":
        return None
    root=TreeNode(int(values[0]))
    q=deque([root])
    i=1
    while q and i<len(values):
        node=q.popleft()
        if i<len(values) and values[i]!="null":
            node.left=TreeNode(int(values[i]))
            q.append(node.left)
        i+=1
        if i<len(values) and values[i]!="null":
            node.right=TreeNode(int(values[i]))
            q.append(node.right)
        i+=1
    return root
moves=0
def dfs(root):
    global moves
    if root is None:
        return 0
    left=dfs(root.left)
    right=dfs(root.right)
    moves+=abs(left)+abs(right)
    return root.val+left+right-1
tree=input().split()
root=buildTree(tree)
dfs(root)
print(moves)`,

java:`import java.util.*;
class TreeNode{
    int val;
    TreeNode left,right;
    TreeNode(int val){
        this.val=val;
    }
}
public class Main{
    static int moves=0;
    static TreeNode buildTree(String[] arr){
        if(arr.length==0||arr[0].equals("null"))
            return null;
        TreeNode root=new TreeNode(Integer.parseInt(arr[0]));
        Queue<TreeNode> q=new LinkedList<>();
        q.offer(root);
        int i=1;
        while(!q.isEmpty()&&i<arr.length){
            TreeNode cur=q.poll();
            if(i<arr.length&&!arr[i].equals("null")){
                cur.left=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.left);
            }
            i++;

            if(i<arr.length&&!arr[i].equals("null")){
                cur.right=new TreeNode(Integer.parseInt(arr[i]));
                q.offer(cur.right);
            }
            i++;
        }

        return root;
    }

    static int dfs(TreeNode root){
        if(root==null)
            return 0;

        int left=dfs(root.left);
        int right=dfs(root.right);

        moves+=Math.abs(left)+Math.abs(right);

        return root.val+left+right-1;
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);

        String[] tree=sc.nextLine().trim().split("\\s+");

        TreeNode root=buildTree(tree);

        dfs(root);

        System.out.println(moves);

        sc.close();
    }
}`,c:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>
struct TreeNode{
    int val;
    struct TreeNode *left,*right;
};
struct TreeNode* newNode(int val){
    struct TreeNode* node=(struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val=val;
    node->left=node->right=NULL;
    return node;
}
struct TreeNode* buildTree(char *line){
    char *tokens[5000];
    int n=0;
    char *token=strtok(line," \n");
    while(token){
        tokens[n++]=token;
        token=strtok(NULL," \n");
    }
    if(n==0||strcmp(tokens[0],"null")==0)
        return NULL;
    struct TreeNode* queue[5000];
    int front=0,rear=0;
    struct TreeNode* root=newNode(atoi(tokens[0]));
    queue[rear++]=root;
    int i=1;
    while(front<rear&&i<n){
        struct TreeNode* cur=queue[front++];

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->left=newNode(atoi(tokens[i]));
            queue[rear++]=cur->left;
        }
        i++;

        if(i<n&&strcmp(tokens[i],"null")!=0){
            cur->right=newNode(atoi(tokens[i]));
            queue[rear++]=cur->right;
        }
        i++;
    }

    return root;
}

int moves=0;

int absVal(int x){
    return x<0?-x:x;
}

int dfs(struct TreeNode* root){
    if(root==NULL)
        return 0;

    int left=dfs(root->left);
    int right=dfs(root->right);

    moves+=absVal(left)+absVal(right);

    return root->val+left+right-1;
}

int main(){
    char line[10000];

    if(!fgets(line,sizeof(line),stdin))
        return 0;

    struct TreeNode* root=buildTree(line);

    dfs(root);

    printf("%d\n",moves);

    return 0;
}`,

cpp:`#include <iostream>
#include <sstream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;
struct TreeNode{
    int val;
    TreeNode *left,*right;

    TreeNode(int x){
        val=x;
        left=right=nullptr;
    }
};
TreeNode* buildTree(vector<string>& arr){
    if(arr.empty()||arr[0]=="null")
        return nullptr;
    TreeNode* root=new TreeNode(stoi(arr[0]));
    queue<TreeNode*> q;
    q.push(root);
    int i=1;
    while(!q.empty()&&i<arr.size()){
        TreeNode* cur=q.front();
        q.pop();
        if(i<arr.size()&&arr[i]!="null"){
            cur->left=new TreeNode(stoi(arr[i]));
            q.push(cur->left);
        }
        i++;
        if(i<arr.size()&&arr[i]!="null"){
            cur->right=new TreeNode(stoi(arr[i]));
            q.push(cur->right);
        }
        i++;
    }
    return root;
}
int moves=0;
int dfs(TreeNode* root){
    if(root==nullptr)
        return 0;
    int left=dfs(root->left);
    int right=dfs(root->right);
    moves+=abs(left)+abs(right);
    return root->val+left+right-1;
}
int main(){
    string line;
    getline(cin,line);
    stringstream ss(line);
    vector<string> tree;
    string s;
    while(ss>>s)
        tree.push_back(s);
    TreeNode* root=buildTree(tree);
    dfs(root);
    cout<<moves<<endl;
    return 0;
}`
}
};