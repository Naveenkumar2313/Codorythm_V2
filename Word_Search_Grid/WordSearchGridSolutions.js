export const WordSearchGridSolutions = {
  'wsg-e1': {
    python: `def dfs(board, word, row, col, index):
    if index == len(word):
        return True

    if (row < 0 or row >= len(board) or
        col < 0 or col >= len(board[0]) or
        board[row][col] != word[index]):
        return False

    temp = board[row][col]
    board[row][col] = '#'

    found = (
        dfs(board, word, row + 1, col, index + 1) or
        dfs(board, word, row - 1, col, index + 1) or
        dfs(board, word, row, col + 1, index + 1) or
        dfs(board, word, row, col - 1, index + 1)
    )

    board[row][col] = temp
    return found

def word_search(board, word):
    rows = len(board)
    cols = len(board[0])

    for i in range(rows):
        for j in range(cols):
            if dfs(board, word, i, j, 0):
                return True

    return False

rows, cols = map(int, input().split())

board = []
for _ in range(rows):
    board.append(input().split())

word = input().strip()

print(str(word_search(board, word)).lower())`,

    java: `import java.util.*;

public class Solution {

    static boolean dfs(char[][] board, String word,
                       int row, int col, int index) {

        if(index == word.length())
            return true;

        if(row < 0 || row >= board.length ||
           col < 0 || col >= board[0].length ||
           board[row][col] != word.charAt(index))
            return false;

        char temp = board[row][col];
        board[row][col] = '#';

        boolean found =
            dfs(board, word, row + 1, col, index + 1) ||
            dfs(board, word, row - 1, col, index + 1) ||
            dfs(board, word, row, col + 1, index + 1) ||
            dfs(board, word, row, col - 1, index + 1);

        board[row][col] = temp;

        return found;
    }

    public static boolean wordSearch(char[][] board,
                                     String word) {

        for(int i=0;i<board.length;i++){
            for(int j=0;j<board[0].length;j++){
                if(dfs(board, word, i, j, 0))
                    return true;
            }
        }

        return false;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int rows = sc.nextInt();
        int cols = sc.nextInt();

        char[][] board = new char[rows][cols];

        for(int i=0;i<rows;i++){
            for(int j=0;j<cols;j++){
                board[i][j] =
                    sc.next().charAt(0);
            }
        }

        String word = sc.next();

        System.out.println(
            wordSearch(board, word)
        );
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int dfs(char board[20][20],
        int rows,
        int cols,
        char word[],
        int row,
        int col,
        int index){

    if(index == strlen(word))
        return 1;

    if(row < 0 || row >= rows ||
       col < 0 || col >= cols ||
       board[row][col] != word[index])
        return 0;

    char temp = board[row][col];
    board[row][col] = '#';

    int found =
        dfs(board, rows, cols, word,
            row+1,col,index+1) ||
        dfs(board, rows, cols, word,
            row-1,col,index+1) ||
        dfs(board, rows, cols, word,
            row,col+1,index+1) ||
        dfs(board, rows, cols, word,
            row,col-1,index+1);

    board[row][col] = temp;

    return found;
}

int wordSearch(char board[20][20],
               int rows,
               int cols,
               char word[]){

    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            if(dfs(board, rows, cols,
                   word, i, j, 0))
                return 1;
        }
    }

    return 0;
}

int main(){

    int rows, cols;
    scanf("%d %d",&rows,&cols);

    char board[20][20];

    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            scanf(" %c",&board[i][j]);
        }
    }

    char word[100];
    scanf("%s",word);

    printf("%s\n",
           wordSearch(board,rows,cols,word)
           ? "true" : "false");

    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

bool dfs(vector<vector<char>>& board,
         string& word,
         int row,
         int col,
         int index){

    if(index == word.size())
        return true;

    if(row < 0 || row >= board.size() ||
       col < 0 || col >= board[0].size() ||
       board[row][col] != word[index])
        return false;

    char temp = board[row][col];
    board[row][col] = '#';

    bool found =
        dfs(board,word,row+1,col,index+1) ||
        dfs(board,word,row-1,col,index+1) ||
        dfs(board,word,row,col+1,index+1) ||
        dfs(board,word,row,col-1,index+1);

    board[row][col] = temp;

    return found;
}

bool wordSearch(vector<vector<char>>& board,
                string word){

    for(int i=0;i<board.size();i++){
        for(int j=0;j<board[0].size();j++){
            if(dfs(board,word,i,j,0))
                return true;
        }
    }

    return false;
}

int main(){

    int rows, cols;
    cin >> rows >> cols;

    vector<vector<char>> board(
        rows,
        vector<char>(cols)
    );

    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            cin >> board[i][j];
        }
    }

    string word;
    cin >> word;

    cout << (wordSearch(board,word)
            ? "true" : "false")
         << "\n";

    return 0;
}`
  },
  'wsg-e2': {
    python: `def count_occurrences(grid, word):
    rows = len(grid)
    cols = len(grid[0])
    count = 0

    for i in range(rows):
        row_str = "".join(grid[i])
        count += row_str.count(word)

    for j in range(cols):
        col_str = ""
        for i in range(rows):
            col_str += grid[i][j]
        count += col_str.count(word)

    return count

rows, cols = map(int, input().split())

grid = []
for _ in range(rows):
    grid.append(input().split())

word = input().strip()

print(count_occurrences(grid, word))`,

    java: `import java.util.*;

public class Solution {

    public static int countOccurrences(
            char[][] grid,
            String word) {

        int rows = grid.length;
        int cols = grid[0].length;
        int count = 0;

        for(int i=0;i<rows;i++){
            StringBuilder row =
                    new StringBuilder();

            for(int j=0;j<cols;j++)
                row.append(grid[i][j]);

            String s = row.toString();

            int idx = s.indexOf(word);
            while(idx != -1){
                count++;
                idx = s.indexOf(word, idx+1);
            }
        }

        for(int j=0;j<cols;j++){
            StringBuilder col =
                    new StringBuilder();

            for(int i=0;i<rows;i++)
                col.append(grid[i][j]);

            String s = col.toString();

            int idx = s.indexOf(word);
            while(idx != -1){
                count++;
                idx = s.indexOf(word, idx+1);
            }
        }

        return count;
    }

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);

        int rows = sc.nextInt();
        int cols = sc.nextInt();

        char[][] grid =
                new char[rows][cols];

        for(int i=0;i<rows;i++){
            for(int j=0;j<cols;j++){
                grid[i][j] =
                    sc.next().charAt(0);
            }
        }

        String word = sc.next();

        System.out.println(
            countOccurrences(grid, word)
        );
    }
}`,
    c: `/* Count Occurrences in Grid */`,
    cpp: `/* Count Occurrences in Grid */`
  },

'wsg-m1': {
  python: `def searchWord(grid, word):
    n = len(grid)
    m = len(grid[0])

    directions = [
        (-1, -1), (-1, 0), (-1, 1),
        (0, -1),           (0, 1),
        (1, -1),  (1, 0),  (1, 1)
    ]

    result = []

    for i in range(n):
        for j in range(m):
            if grid[i][j] != word[0]:
                continue

            for dx, dy in directions:
                x, y = i, j
                k = 0

                while k < len(word):
                    if x < 0 or y < 0 or x >= n or y >= m:
                        break
                    if grid[x][y] != word[k]:
                        break

                    x += dx
                    y += dy
                    k += 1

                if k == len(word):
                    result.append((i, j))
                    break

    return result`,
  java: `import java.util.*;

public class Solution {
    static int[] dx = {-1,-1,-1,0,0,1,1,1};
    static int[] dy = {-1,0,1,-1,1,-1,0,1};

    public static List<String> searchWord(char[][] grid, String word) {
        int n = grid.length;
        int m = grid[0].length;

        List<String> result = new ArrayList<>();

        for(int i=0;i<n;i++) {
            for(int j=0;j<m;j++) {

                if(grid[i][j] != word.charAt(0))
                    continue;

                for(int d=0; d<8; d++) {

                    int x=i,y=j,k;

                    for(k=0;k<word.length();k++) {

                        if(x<0 || y<0 || x>=n || y>=m)
                            break;

                        if(grid[x][y] != word.charAt(k))
                            break;

                        x += dx[d];
                        y += dy[d];
                    }

                    if(k==word.length()) {
                        result.add(i + " " + j);
                        break;
                    }
                }
            }
        }

        return result;
    }
}
}`,
  c: `#include <stdio.h>
#include <string.h>

int dx[8]={-1,-1,-1,0,0,1,1,1};
int dy[8]={-1,0,1,-1,1,-1,0,1};

void searchWord(char grid[][100], int n, int m, char word[]) {

    for(int i=0;i<n;i++) {
        for(int j=0;j<m;j++) {

            if(grid[i][j]!=word[0]) continue;

            for(int d=0;d<8;d++) {

                int x=i,y=j,k;

                for(k=0;k<strlen(word);k++) {

                    if(x<0||y<0||x>=n||y>=m) break;

                    if(grid[x][y]!=word[k]) break;

                    x+=dx[d];
                    y+=dy[d];
                }

                if(k==strlen(word)) {
                    printf("(%d,%d)\n",i,j);
                    break;
                }
            }
        }
    }
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

vector<pair<int,int>> searchWord(vector<vector<char>>& grid, string word) {

    int n=grid.size();
    int m=grid[0].size();

    int dx[8]={-1,-1,-1,0,0,1,1,1};
    int dy[8]={-1,0,1,-1,1,-1,0,1};

    vector<pair<int,int>> result;

    for(int i=0;i<n;i++) {
        for(int j=0;j<m;j++) {

            if(grid[i][j]!=word[0]) continue;

            for(int d=0;d<8;d++) {

                int x=i,y=j,k;

                for(k=0;k<word.size();k++) {

                    if(x<0||y<0||x>=n||y>=m) break;

                    if(grid[x][y]!=word[k]) break;

                    x+=dx[d];
                    y+=dy[d];
                }

                if(k==word.size()) {
                    result.push_back({i,j});
                    break;
                }
            }
        }
    }

    return result;
}`
},

'wsg-m2': {
  python: `def findOccurrences(grid, word):
    n = len(grid)
    m = len(grid[0])

    directions = [
        (-1,-1),(-1,0),(-1,1),
        (0,-1),(0,1),
        (1,-1),(1,0),(1,1)
    ]

    occurrences = []

    for i in range(n):
        for j in range(m):
            for dx, dy in directions:

                x, y = i, j
                k = 0

                while k < len(word):
                    if x < 0 or y < 0 or x >= n or y >= m:
                        break

                    if grid[x][y] != word[k]:
                        break

                    x += dx
                    y += dy
                    k += 1

                if k == len(word):
                    occurrences.append((i, j))

    return occurrences`,
  java: `import java.util.*;

public class Solution {

    static int[] dx={-1,-1,-1,0,0,1,1,1};
    static int[] dy={-1,0,1,-1,1,-1,0,1};

    public static List<String> findOccurrences(char[][] grid,String word){

        int n=grid.length;
        int m=grid[0].length;

        List<String> result=new ArrayList<>();

        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){

                for(int d=0;d<8;d++){

                    int x=i,y=j,k;

                    for(k=0;k<word.length();k++){

                        if(x<0||y<0||x>=n||y>=m)
                            break;

                        if(grid[x][y]!=word.charAt(k))
                            break;

                        x+=dx[d];
                        y+=dy[d];
                    }

                    if(k==word.length())
                        result.add(i+" "+j);
                }
            }
        }

        return result;
    }
}`,
  c: `#include <stdio.h>
#include <string.h>

int dx[8]={-1,-1,-1,0,0,1,1,1};
int dy[8]={-1,0,1,-1,1,-1,0,1};

void findOccurrences(char grid[][100],int n,int m,char word[]){

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){

            for(int d=0;d<8;d++){

                int x=i,y=j,k;

                for(k=0;k<strlen(word);k++){

                    if(x<0||y<0||x>=n||y>=m)
                        break;

                    if(grid[x][y]!=word[k])
                        break;

                    x+=dx[d];
                    y+=dy[d];
                }

                if(k==strlen(word))
                    printf("(%d,%d)\n",i,j);
            }
        }
    }
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

vector<pair<int,int>> findOccurrences(
vector<vector<char>>& grid,
string word){

    int n=grid.size();
    int m=grid[0].size();

    int dx[8]={-1,-1,-1,0,0,1,1,1};
    int dy[8]={-1,0,1,-1,1,-1,0,1};

    vector<pair<int,int>> result;

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){

            for(int d=0;d<8;d++){

                int x=i,y=j,k;

                for(k=0;k<word.size();k++){

                    if(x<0||y<0||x>=n||y>=m)
                        break;

                    if(grid[x][y]!=word[k])
                        break;

                    x+=dx[d];
                    y+=dy[d];
                }

                if(k==word.size())
                    result.push_back({i,j});
            }
        }
    }

    return result;
}`
},
'wsg-m3': {
  python: `def exist(board, word):
    rows = len(board)
    cols = len(board[0])

    def dfs(r, c, idx):
        if idx == len(word):
            return True

        if r < 0 or c < 0 or r >= rows or c >= cols:
            return False

        if board[r][c] != word[idx]:
            return False

        temp = board[r][c]
        board[r][c] = '#'

        found = (
            dfs(r + 1, c, idx + 1) or
            dfs(r - 1, c, idx + 1) or
            dfs(r, c + 1, idx + 1) or
            dfs(r, c - 1, idx + 1)
        )

        board[r][c] = temp
        return found

    for i in range(rows):
        for j in range(cols):
            if dfs(i, j, 0):
                return True

    return False`,
  java: `public class Solution {

    static boolean dfs(char[][] board,
                       String word,
                       int r,
                       int c,
                       int idx) {

        if(idx == word.length())
            return true;

        if(r < 0 || c < 0 ||
           r >= board.length ||
           c >= board[0].length)
            return false;

        if(board[r][c] != word.charAt(idx))
            return false;

        char temp = board[r][c];
        board[r][c] = '#';

        boolean found =
            dfs(board, word, r+1, c, idx+1) ||
            dfs(board, word, r-1, c, idx+1) ||
            dfs(board, word, r, c+1, idx+1) ||
            dfs(board, word, r, c-1, idx+1);

        board[r][c] = temp;

        return found;
    }

    public static boolean exist(char[][] board,
                                String word) {

        for(int i=0;i<board.length;i++) {
            for(int j=0;j<board[0].length;j++) {

                if(dfs(board, word, i, j, 0))
                    return true;
            }
        }

        return false;
    }
}`,
  c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool dfs(char board[][100], int rows, int cols,
         char word[], int r, int c, int idx){

    if(idx == strlen(word))
        return true;

    if(r<0 || c<0 || r>=rows || c>=cols)
        return false;

    if(board[r][c] != word[idx])
        return false;

    char temp = board[r][c];
    board[r][c] = '#';

    bool found =
        dfs(board,rows,cols,word,r+1,c,idx+1) ||
        dfs(board,rows,cols,word,r-1,c,idx+1) ||
        dfs(board,rows,cols,word,r,c+1,idx+1) ||
        dfs(board,rows,cols,word,r,c-1,idx+1);

    board[r][c] = temp;

    return found;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:

    bool dfs(vector<vector<char>>& board,
             string& word,
             int r,
             int c,
             int idx){

        if(idx == word.size())
            return true;

        if(r<0 || c<0 ||
           r>=board.size() ||
           c>=board[0].size())
            return false;

        if(board[r][c] != word[idx])
            return false;

        char temp = board[r][c];
        board[r][c] = '#';

        bool found =
            dfs(board,word,r+1,c,idx+1) ||
            dfs(board,word,r-1,c,idx+1) ||
            dfs(board,word,r,c+1,idx+1) ||
            dfs(board,word,r,c-1,idx+1);

        board[r][c] = temp;

        return found;
    }

    bool exist(vector<vector<char>>& board,
               string word) {

        for(int i=0;i<board.size();i++){
            for(int j=0;j<board[0].size();j++){

                if(dfs(board,word,i,j,0))
                    return true;
            }
        }

        return false;
    }
};`
},

'wsg-m4': {
  python: `def searchWords(board, words):
    rows = len(board)
    cols = len(board[0])

    def dfs(r, c, word, idx):
        if idx == len(word):
            return True

        if r < 0 or c < 0 or r >= rows or c >= cols:
            return False

        if board[r][c] != word[idx]:
            return False

        temp = board[r][c]
        board[r][c] = '#'

        found = (
            dfs(r+1,c,word,idx+1) or
            dfs(r-1,c,word,idx+1) or
            dfs(r,c+1,word,idx+1) or
            dfs(r,c-1,word,idx+1)
        )

        board[r][c] = temp
        return found

    result = []

    for word in words:
        found = False

        for i in range(rows):
            for j in range(cols):
                if dfs(i,j,word,0):
                    result.append(word)
                    found = True
                    break
            if found:
                break

    return result`,
  java: `import java.util.*;

public class Solution {

    static boolean dfs(char[][] board,
                       String word,
                       int r,
                       int c,
                       int idx){

        if(idx == word.length())
            return true;

        if(r<0 || c<0 ||
           r>=board.length ||
           c>=board[0].length)
            return false;

        if(board[r][c] != word.charAt(idx))
            return false;

        char temp = board[r][c];
        board[r][c] = '#';

        boolean found =
            dfs(board,word,r+1,c,idx+1) ||
            dfs(board,word,r-1,c,idx+1) ||
            dfs(board,word,r,c+1,idx+1) ||
            dfs(board,word,r,c-1,idx+1);

        board[r][c] = temp;

        return found;
    }

    public static List<String> searchWords(
        char[][] board,
        String[] words){

        List<String> result = new ArrayList<>();

        for(String word : words){

            boolean found = false;

            for(int i=0;i<board.length;i++){
                for(int j=0;j<board[0].length;j++){

                    if(dfs(board,word,i,j,0)){
                        result.add(word);
                        found = true;
                        break;
                    }
                }

                if(found) break;
            }
        }

        return result;
    }
}`,
  c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool dfs(char board[][100],int rows,int cols,
         char word[],int r,int c,int idx){

    if(idx==strlen(word))
        return true;

    if(r<0||c<0||r>=rows||c>=cols)
        return false;

    if(board[r][c]!=word[idx])
        return false;

    char temp=board[r][c];
    board[r][c]='#';

    bool found=
        dfs(board,rows,cols,word,r+1,c,idx+1)||
        dfs(board,rows,cols,word,r-1,c,idx+1)||
        dfs(board,rows,cols,word,r,c+1,idx+1)||
        dfs(board,rows,cols,word,r,c-1,idx+1);

    board[r][c]=temp;

    return found;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:

    bool dfs(vector<vector<char>>& board,
             string& word,
             int r,
             int c,
             int idx){

        if(idx==word.size())
            return true;

        if(r<0||c<0||
           r>=board.size()||
           c>=board[0].size())
            return false;

        if(board[r][c]!=word[idx])
            return false;

        char temp=board[r][c];
        board[r][c]='#';

        bool found=
            dfs(board,word,r+1,c,idx+1)||
            dfs(board,word,r-1,c,idx+1)||
            dfs(board,word,r,c+1,idx+1)||
            dfs(board,word,r,c-1,idx+1);

        board[r][c]=temp;

        return found;
    }

    vector<string> searchWords(
        vector<vector<char>>& board,
        vector<string>& words){

        vector<string> result;

        for(string word : words){

            bool found=false;

            for(int i=0;i<board.size();i++){
                for(int j=0;j<board[0].size();j++){

                    if(dfs(board,word,i,j,0)){
                        result.push_back(word);
                        found=true;
                        break;
                    }
                }

                if(found) break;
            }
        }

        return result;
    }
};`
},
'wsg-h1': {
  python: `class Solution:
    def findWords(self, board, words):
        rows = len(board)
        cols = len(board[0])
        result = set()

        class TrieNode:
            def __init__(self):
                self.children = {}
                self.word = None

        root = TrieNode()

        for word in words:
            node = root
            for ch in word:
                if ch not in node.children:
                    node.children[ch] = TrieNode()
                node = node.children[ch]
            node.word = word

        def dfs(r, c, node):
            if r < 0 or c < 0 or r >= rows or c >= cols:
                return

            ch = board[r][c]

            if ch == '#' or ch not in node.children:
                return

            nxt = node.children[ch]

            if nxt.word:
                result.add(nxt.word)

            board[r][c] = '#'

            dfs(r+1, c, nxt)
            dfs(r-1, c, nxt)
            dfs(r, c+1, nxt)
            dfs(r, c-1, nxt)

            board[r][c] = ch

        for i in range(rows):
            for j in range(cols):
                dfs(i, j, root)

        return list(result)`,
  java: `import java.util.*;

class Solution {

    class TrieNode {
        Map<Character, TrieNode> children = new HashMap<>();
        String word = null;
    }

    public List<String> findWords(char[][] board, String[] words) {

        TrieNode root = new TrieNode();

        for(String word : words){
            TrieNode node = root;

            for(char ch : word.toCharArray()){
                node.children.putIfAbsent(ch,new TrieNode());
                node = node.children.get(ch);
            }

            node.word = word;
        }

        Set<String> result = new HashSet<>();

        for(int i=0;i<board.length;i++){
            for(int j=0;j<board[0].length;j++){
                dfs(board,i,j,root,result);
            }
        }

        return new ArrayList<>(result);
    }

    private void dfs(char[][] board,int r,int c,
                     TrieNode node,Set<String> result){

        if(r<0||c<0||r>=board.length||c>=board[0].length)
            return;

        char ch = board[r][c];

        if(ch=='#' || !node.children.containsKey(ch))
            return;

        TrieNode next = node.children.get(ch);

        if(next.word!=null)
            result.add(next.word);

        board[r][c]='#';

        dfs(board,r+1,c,next,result);
        dfs(board,r-1,c,next,result);
        dfs(board,r,c+1,next,result);
        dfs(board,r,c-1,next,result);

        board[r][c]=ch;
    }
}`,
  c: `/* Word Search II using Trie + DFS */`,
  cpp: `class TrieNode{
public:
    unordered_map<char,TrieNode*> child;
    string word="";
};

class Solution {
public:

    vector<string> findWords(
        vector<vector<char>>& board,
        vector<string>& words) {

        TrieNode* root=new TrieNode();

        for(string word:words){
            TrieNode* node=root;

            for(char ch:word){
                if(!node->child.count(ch))
                    node->child[ch]=new TrieNode();

                node=node->child[ch];
            }

            node->word=word;
        }

        unordered_set<string> result;

        int rows=board.size();
        int cols=board[0].size();

        function<void(int,int,TrieNode*)> dfs=
        [&](int r,int c,TrieNode* node){

            if(r<0||c<0||r>=rows||c>=cols)
                return;

            char ch=board[r][c];

            if(ch=='#'||!node->child.count(ch))
                return;

            TrieNode* nxt=node->child[ch];

            if(!nxt->word.empty())
                result.insert(nxt->word);

            board[r][c]='#';

            dfs(r+1,c,nxt);
            dfs(r-1,c,nxt);
            dfs(r,c+1,nxt);
            dfs(r,c-1,nxt);

            board[r][c]=ch;
        };

        for(int i=0;i<rows;i++)
            for(int j=0;j<cols;j++)
                dfs(i,j,root);

        return vector<string>(
            result.begin(),
            result.end()
        );
    }
};`
},

'wsg-h2': {
  python: `def boggleSolver(board, dictionary):
    rows = len(board)
    cols = len(board[0])

    found = set()

    directions = [
        (-1,-1),(-1,0),(-1,1),
        (0,-1),(0,1),
        (1,-1),(1,0),(1,1)
    ]

    def dfs(r, c, word, visited):

        if word in dictionary:
            found.add(word)

        visited.add((r,c))

        for dx, dy in directions:
            nr = r + dx
            nc = c + dy

            if (0 <= nr < rows and
                0 <= nc < cols and
                (nr,nc) not in visited):

                dfs(
                    nr,
                    nc,
                    word + board[nr][nc],
                    visited
                )

        visited.remove((r,c))

    for i in range(rows):
        for j in range(cols):
            dfs(i,j,board[i][j],set())

    return list(found)`,
  java: `/* Boggle Solver using DFS and Backtracking */`,
  c: `/* Boggle Solver using DFS and Backtracking */`,
  cpp: `/* Boggle Solver using DFS and Backtracking */`
},
'wsg-h3': {
  python: `def findDictionaryWords(board, dictionary):
    rows = len(board)
    cols = len(board[0])

    found = set()

    directions = [
        (-1,-1),(-1,0),(-1,1),
        (0,-1),(0,1),
        (1,-1),(1,0),(1,1)
    ]

    def dfs(r, c, word, visited):

        if word in dictionary:
            found.add(word)

        visited.add((r, c))

        for dx, dy in directions:
            nr = r + dx
            nc = c + dy

            if (0 <= nr < rows and
                0 <= nc < cols and
                (nr, nc) not in visited):

                dfs(
                    nr,
                    nc,
                    word + board[nr][nc],
                    visited
                )

        visited.remove((r, c))

    for i in range(rows):
        for j in range(cols):
            dfs(i, j, board[i][j], set())

    return list(found)`,
  java: `import java.util.*;

public class Solution {

    static Set<String> result = new HashSet<>();

    static int[] dx = {-1,-1,-1,0,0,1,1,1};
    static int[] dy = {-1,0,1,-1,1,-1,0,1};

    static void dfs(char[][] board,
                    int r,
                    int c,
                    String word,
                    Set<String> dict,
                    boolean[][] visited){

        if(dict.contains(word))
            result.add(word);

        visited[r][c] = true;

        for(int k=0;k<8;k++){

            int nr = r + dx[k];
            int nc = c + dy[k];

            if(nr>=0 && nc>=0 &&
               nr<board.length &&
               nc<board[0].length &&
               !visited[nr][nc]){

                dfs(board,nr,nc,
                    word + board[nr][nc],
                    dict,visited);
            }
        }

        visited[r][c] = false;
    }
}`,
  c: `/* Find All Dictionary Words using DFS */`,
  cpp: `/* Find All Dictionary Words using DFS */`
},

'wsg-h4': {
  python: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = None

def trieGridSearch(board, words):

    root = TrieNode()

    for word in words:
        node = root

        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()

            node = node.children[ch]

        node.word = word

    rows = len(board)
    cols = len(board[0])

    result = set()

    def dfs(r, c, node):

        if r < 0 or c < 0 or r >= rows or c >= cols:
            return

        ch = board[r][c]

        if ch == '#' or ch not in node.children:
            return

        nxt = node.children[ch]

        if nxt.word:
            result.add(nxt.word)

        board[r][c] = '#'

        dfs(r+1,c,nxt)
        dfs(r-1,c,nxt)
        dfs(r,c+1,nxt)
        dfs(r,c-1,nxt)

        board[r][c] = ch

    for i in range(rows):
        for j in range(cols):
            dfs(i,j,root)

    return list(result)`,
  java: `import java.util.*;

public class Solution {

    class TrieNode{
        HashMap<Character,TrieNode> children =
            new HashMap<>();

        String word;
    }

    Set<String> result = new HashSet<>();

    public List<String> trieGridSearch(
        char[][] board,
        String[] words){

        TrieNode root = new TrieNode();

        for(String word : words){

            TrieNode node = root;

            for(char ch : word.toCharArray()){

                node.children.putIfAbsent(
                    ch,new TrieNode()
                );

                node = node.children.get(ch);
            }

            node.word = word;
        }

        for(int i=0;i<board.length;i++){
            for(int j=0;j<board[0].length;j++){
                dfs(board,i,j,root);
            }
        }

        return new ArrayList<>(result);
    }

    private void dfs(char[][] board,
                     int r,
                     int c,
                     TrieNode node){

        if(r<0||c<0||
           r>=board.length||
           c>=board[0].length)
            return;

        char ch = board[r][c];

        if(ch=='#' ||
           !node.children.containsKey(ch))
            return;

        TrieNode next =
            node.children.get(ch);

        if(next.word!=null)
            result.add(next.word);

        board[r][c]='#';

        dfs(board,r+1,c,next);
        dfs(board,r-1,c,next);
        dfs(board,r,c+1,next);
        dfs(board,r,c-1,next);

        board[r][c]=ch;
    }
}`,
  c: `/* Trie Based Grid Search */`,
  cpp: `/* Trie Based Grid Search */`
},

'wsg-h5': {
  python: `def maximumWords(board, words):

    rows = len(board)
    cols = len(board[0])

    def search(word):

        def dfs(r,c,index,visited):

            if index == len(word):
                return True

            if (r < 0 or c < 0 or
                r >= rows or c >= cols):
                return False

            if (r,c) in visited:
                return False

            if board[r][c] != word[index]:
                return False

            visited.add((r,c))

            found = (
                dfs(r+1,c,index+1,visited) or
                dfs(r-1,c,index+1,visited) or
                dfs(r,c+1,index+1,visited) or
                dfs(r,c-1,index+1,visited)
            )

            visited.remove((r,c))

            return found

        for i in range(rows):
            for j in range(cols):
                if dfs(i,j,0,set()):
                    return True

        return False

    count = 0

    for word in words:
        if search(word):
            count += 1

    return count`,
  java: `import java.util.*;

public class Solution {

    public int maximumWords(
        char[][] board,
        String[] words){

        int count = 0;

        for(String word : words){

            if(exists(board,word))
                count++;
        }

        return count;
    }

    private boolean exists(
        char[][] board,
        String word){

        int rows = board.length;
        int cols = board[0].length;

        for(int i=0;i<rows;i++){
            for(int j=0;j<cols;j++){

                boolean[][] visited =
                    new boolean[rows][cols];

                if(dfs(board,word,i,j,0,visited))
                    return true;
            }
        }

        return false;
    }

    private boolean dfs(
        char[][] board,
        String word,
        int r,
        int c,
        int idx,
        boolean[][] visited){

        if(idx==word.length())
            return true;

        if(r<0||c<0||
           r>=board.length||
           c>=board[0].length)
            return false;

        if(visited[r][c])
            return false;

        if(board[r][c]!=word.charAt(idx))
            return false;

        visited[r][c]=true;

        boolean found =
            dfs(board,word,r+1,c,idx+1,visited) ||
            dfs(board,word,r-1,c,idx+1,visited) ||
            dfs(board,word,r,c+1,idx+1,visited) ||
            dfs(board,word,r,c-1,idx+1,visited);

        visited[r][c]=false;

        return found;
    }
}`,
  c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool dfs(char board[][100],
         int rows,
         int cols,
         char word[],
         int r,
         int c,
         int idx,
         bool visited[][100]) {

    if(idx == strlen(word))
        return true;

    if(r < 0 || c < 0 ||
       r >= rows || c >= cols)
        return false;

    if(visited[r][c])
        return false;

    if(board[r][c] != word[idx])
        return false;

    visited[r][c] = true;

    bool found =
        dfs(board,rows,cols,word,r+1,c,idx+1,visited) ||
        dfs(board,rows,cols,word,r-1,c,idx+1,visited) ||
        dfs(board,rows,cols,word,r,c+1,idx+1,visited) ||
        dfs(board,rows,cols,word,r,c-1,idx+1,visited);

    visited[r][c] = false;

    return found;
}

bool exists(char board[][100],
            int rows,
            int cols,
            char word[]) {

    bool visited[100][100];

    for(int i=0;i<rows;i++) {
        for(int j=0;j<cols;j++) {

            memset(visited,false,sizeof(visited));

            if(dfs(board,rows,cols,
                   word,i,j,0,visited))
                return true;
        }
    }

    return false;
}

int maximumWords(char board[][100],
                 int rows,
                 int cols,
                 char words[][100],
                 int n) {

    int count = 0;

    for(int i=0;i<n;i++) {
        if(exists(board,rows,cols,words[i]))
            count++;
    }

    return count;
}`,
cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:

    bool dfs(vector<vector<char>>& board,
             string& word,
             int r,
             int c,
             int idx,
             vector<vector<bool>>& visited){

        if(idx == word.size())
            return true;

        if(r < 0 || c < 0 ||
           r >= board.size() ||
           c >= board[0].size())
            return false;

        if(visited[r][c])
            return false;

        if(board[r][c] != word[idx])
            return false;

        visited[r][c] = true;

        bool found =
            dfs(board,word,r+1,c,idx+1,visited) ||
            dfs(board,word,r-1,c,idx+1,visited) ||
            dfs(board,word,r,c+1,idx+1,visited) ||
            dfs(board,word,r,c-1,idx+1,visited);

        visited[r][c] = false;

        return found;
    }

    bool exists(vector<vector<char>>& board,
                string word){

        int rows = board.size();
        int cols = board[0].size();

        for(int i=0;i<rows;i++){
            for(int j=0;j<cols;j++){

                vector<vector<bool>> visited(
                    rows,
                    vector<bool>(cols,false)
                );

                if(dfs(board,word,i,j,0,visited))
                    return true;
            }
        }

        return false;
    }

    int maximumWords(
        vector<vector<char>>& board,
        vector<string>& words){

        int count = 0;

        for(string word : words){
            if(exists(board,word))
                count++;
        }

        return count;
    }
};`
    },
  };