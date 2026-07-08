// src/data/codeSnippets.js

export const FFcodeSnippets = {
    c: `#include <stdio.h>
void dfs(int image[][3], int sr, int sc, int original, int color) {
    if (sr < 0 || sr >= 3 || sc < 0 || sc >= 3)
        return;
    if (image[sr][sc] != original)
        return;
    image[sr][sc] = color;
    dfs(image, sr + 1, sc, original, color);
    dfs(image, sr - 1, sc, original, color);
    dfs(image, sr, sc + 1, original, color);
    dfs(image, sr, sc - 1, original, color);
}
void floodFill(int image[][3], int sr, int sc, int color) {
    int original = image[sr][sc];
    if (original == color)
        return;
    dfs(image, sr, sc, original, color);
}
int main() {
    int image[3][3] = {
        {1,1,1},
        {1,1,0},
        {1,0,1}
    };
    floodFill(image,1,1,2);
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++)
            printf("%d ",image[i][j]);
        printf("\\n");
    }
    return 0;
}
`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
void dfs(vector<vector<int>>& image,int r,int c,int original,int color){
    if(r<0 || r>=image.size() || c<0 || c>=image[0].size())
        return;
    if(image[r][c]!=original)
        return;
    image[r][c]=color;
    dfs(image,r+1,c,original,color);
    dfs(image,r-1,c,original,color);
    dfs(image,r,c+1,original,color);
    dfs(image,r,c-1,original,color);
}
vector<vector<int>> floodFill(vector<vector<int>>& image,int sr,int sc,int color){
    int original=image[sr][sc];
    if(original!=color)
        dfs(image,sr,sc,original,color);
    return image;
}
int main(){
    vector<vector<int>> image={
        {1,1,1},
        {1,1,0},
        {1,0,1}
    };
    image=floodFill(image,1,1,2);
    for(auto &row:image){
        for(int cell:row)
            cout<<cell<<" ";
        cout<<endl;
    }
    return 0;
}
`,
    python: `def dfs(image,r,c,original,color):
    rows=len(image)
    cols=len(image[0])
    if r<0 or r>=rows or c<0 or c>=cols:
        return
    if image[r][c]!=original:
        return
    image[r][c]=color
    dfs(image,r+1,c,original,color)
    dfs(image,r-1,c,original,color)
    dfs(image,r,c+1,original,color)
    dfs(image,r,c-1,original,color)
def flood_fill(image,sr,sc,color):
    original=image[sr][sc]
    if original!=color:
        dfs(image,sr,sc,original,color)
    return image
image=[
    [1,1,1],
    [1,1,0],
    [1,0,1]
]
result=flood_fill(image,1,1,2)
for row in result:
    print(*row)
`,
    java: `import java.util.*;
public class Main {
    static void dfs(int[][] image,int r,int c,int original,int color){
        if(r<0 || r>=image.length || c<0 || c>=image[0].length)
            return;
        if(image[r][c]!=original)
            return;
        image[r][c]=color;
        dfs(image,r+1,c,original,color);
        dfs(image,r-1,c,original,color);
        dfs(image,r,c+1,original,color);
        dfs(image,r,c-1,original,color);
    }
    public static int[][] floodFill(int[][] image,int sr,int sc,int color){
        int original=image[sr][sc];
        if(original!=color)
            dfs(image,sr,sc,original,color);
        return image;
    }
    public static void main(String[] args){
        int[][] image={
            {1,1,1},
            {1,1,0},
            {1,0,1}
        };
        image=floodFill(image,1,1,2);
        for(int[] row:image){
            for(int cell:row)
                System.out.print(cell+" ");
            System.out.println();
        }
    }
}
`
};