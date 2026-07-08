export const editDistanceProblems = [
  // ========================= EASY =========================
  {
    id: 'ed-e1',
    title: 'Minimum Edit Distance',
    difficulty: 'Easy',
    description: 'Given two strings `word1` and `word2`, return the minimum number of operations (insert, delete, replace) required to convert `word1` into `word2`.',
    constraints: [
      '0 <= word1.length, word2.length <= 100',
      'Strings consist of lowercase English letters.'
    ],
    examples: [
      {
        input: 'word1 = "horse", word2 = "ros"',
        output: '3',
        explanation: 'horse → rorse → rose → ros'
      },
      {
        input: 'word1 = "intention", word2 = "execution"',
        output: '5',
        explanation: 'Minimum operations required are 5.'
      }
    ],
    testCases: [
      {
        input: 'horse\nros',
        expectedOutput: '3',
        hidden: false
      },
      {
        input: 'intention\nexecution',
        expectedOutput: '5',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def min_edit_distance(word1, word2):\n    pass\n\nword1=input().strip()\nword2=input().strip()\nprint(min_edit_distance(word1,word2))',
      java: 'import java.util.*;\npublic class Main {\n    public static int minEditDistance(String word1,String word2){\n        return 0;\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        String word1=sc.nextLine();\n        String word2=sc.nextLine();\n        System.out.println(minEditDistance(word1,word2));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\nint minEditDistance(char word1[],char word2[]){\n    return 0;\n}\nint main(){\n    char word1[105],word2[105];\n    scanf("%s",word1);\n    scanf("%s",word2);\n    printf("%d\\n",minEditDistance(word1,word2));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint minEditDistance(string word1,string word2){\n    return 0;\n}\nint main(){\n    string word1,word2;\n    cin>>word1>>word2;\n    cout<<minEditDistance(word1,word2)<<"\\n";\n    return 0;\n}'
    }
  },

  {
    id: 'ed-e2',
    title: 'One Character Difference',
    difficulty: 'Easy',
    description: 'Given two strings, determine whether their edit distance is exactly 1.',
    constraints: [
      '0 <= length of both strings <= 100'
    ],
    examples: [
      {
        input: 'word1 = "cat", word2 = "cut"',
        output: 'true',
        explanation: 'Replace a with u.'
      },
      {
        input: 'word1 = "cat", word2 = "cat"',
        output: 'false',
        explanation: 'Edit distance is 0.'
      }
    ],
    testCases: [
      {
        input: 'cat\ncut',
        expectedOutput: 'true',
        hidden: false
      },
      {
        input: 'cat\ncat',
        expectedOutput: 'false',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def one_edit_apart(word1, word2):\n    pass\n\nword1=input().strip()\nword2=input().strip()\nprint(str(one_edit_apart(word1,word2)).lower())',
      java: 'import java.util.*;\npublic class Main {\n    public static boolean oneEditApart(String word1,String word2){\n        return false;\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        String word1=sc.nextLine();\n        String word2=sc.nextLine();\n        System.out.println(oneEditApart(word1,word2));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdbool.h>\n#include <string.h>\nbool oneEditApart(char word1[],char word2[]){\n    return false;\n}\nint main(){\n    char word1[105],word2[105];\n    scanf("%s",word1);\n    scanf("%s",word2);\n    printf("%s\\n",oneEditApart(word1,word2)?\"true\":\"false\");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nbool oneEditApart(string word1,string word2){\n    return false;\n}\nint main(){\n    string word1,word2;\n    cin>>word1>>word2;\n    cout<<(oneEditApart(word1,word2)?\"true\":\"false\")<<"\\n";\n    return 0;\n}'
    }
  },

  {
    id: 'ed-e3',
    title: 'Equal Strings Check',
    difficulty: 'Easy',
    description: 'Return the edit distance between two identical strings. If both strings are the same, the answer is 0.',
    constraints: [
      '0 <= string length <= 100'
    ],
    examples: [
      {
        input: 'word1 = "apple", word2 = "apple"',
        output: '0',
        explanation: 'No operations are required.'
      },
      {
        input: 'word1 = "abc", word2 = "abd"',
        output: '1',
        explanation: 'Replace c with d.'
      }
    ],
    testCases: [
      {
        input: 'apple\napple',
        expectedOutput: '0',
        hidden: false
      },
      {
        input: 'abc\nabd',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def edit_distance(word1, word2):\n    pass\n\nword1=input().strip()\nword2=input().strip()\nprint(edit_distance(word1,word2))',
      java: 'import java.util.*;\npublic class Main {\n    public static int editDistance(String word1,String word2){\n        return 0;\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        String word1=sc.nextLine();\n        String word2=sc.nextLine();\n        System.out.println(editDistance(word1,word2));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\nint editDistance(char word1[],char word2[]){\n    return 0;\n}\nint main(){\n    char word1[105],word2[105];\n    scanf("%s",word1);\n    scanf("%s",word2);\n    printf("%d\\n",editDistance(word1,word2));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint editDistance(string word1,string word2){\n    return 0;\n}\nint main(){\n    string word1,word2;\n    cin>>word1>>word2;\n    cout<<editDistance(word1,word2)<<"\\n";\n    return 0;\n}'
    }
  },

  {
    id: 'ed-e4',
    title: 'Convert Empty String',
    difficulty: 'Easy',
    description: 'Given an empty string and another string, return the minimum number of insertions needed to form the second string.',
    constraints: [
      '0 <= string length <= 100'
    ],
    examples: [
      {
        input: 'word1 = "", word2 = "hello"',
        output: '5',
        explanation: 'Insert all five characters.'
      },
      {
        input: 'word1 = "", word2 = "abc"',
        output: '3',
        explanation: 'Insert a, b and c.'
      }
    ],
    testCases: [
      {
        input: '\nhello',
        expectedOutput: '5',
        hidden: false
      },
      {
        input: '\nabc',
        expectedOutput: '3',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def convert_empty(word1, word2):\n    pass\n\nword1=input()\nword2=input()\nprint(convert_empty(word1,word2))',
      java: 'import java.util.*;\npublic class Main {\n    public static int convertEmpty(String word1,String word2){\n        return 0;\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        String word1=sc.nextLine();\n        String word2=sc.nextLine();\n        System.out.println(convertEmpty(word1,word2));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\nint convertEmpty(char word1[],char word2[]){\n    return 0;\n}\nint main(){\n    char word1[105],word2[105];\n    fgets(word1,105,stdin);\n    fgets(word2,105,stdin);\n    word1[strcspn(word1,\"\\n\")]=0;\n    word2[strcspn(word2,\"\\n\")]=0;\n    printf("%d\\n",convertEmpty(word1,word2));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint convertEmpty(string word1,string word2){\n    return 0;\n}\nint main(){\n    string word1,word2;\n    getline(cin,word1);\n    getline(cin,word2);\n    cout<<convertEmpty(word1,word2)<<"\\n";\n    return 0;\n}'
    }
  },

  {
    id: 'ed-e5',
    title: 'Minimum Insert Delete Operations',
    difficulty: 'Easy',
    description: 'Given two strings, find the minimum edit distance using insertion and deletion operations only.',
    constraints: [
      '0 <= string length <= 100'
    ],
    examples: [
      {
        input: 'word1 = "heap", word2 = "pea"',
        output: '3',
        explanation: 'Delete h, delete p, insert p.'
      },
      {
        input: 'word1 = "abc", word2 = "abc"',
        output: '0',
        explanation: 'Strings are already equal.'
      }
    ],
    testCases: [
      {
        input: 'heap\npea',
        expectedOutput: '3',
        hidden: false
      },
      {
        input: 'abc\nabc',
        expectedOutput: '0',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def insert_delete_distance(word1, word2):\n    pass\n\nword1=input().strip()\nword2=input().strip()\nprint(insert_delete_distance(word1,word2))',
      java: 'import java.util.*;\npublic class Main {\n    public static int insertDeleteDistance(String word1,String word2){\n        return 0;\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        String word1=sc.nextLine();\n        String word2=sc.nextLine();\n        System.out.println(insertDeleteDistance(word1,word2));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\nint insertDeleteDistance(char word1[],char word2[]){\n    return 0;\n}\nint main(){\n    char word1[105],word2[105];\n    scanf("%s",word1);\n    scanf("%s",word2);\n    printf("%d\\n",insertDeleteDistance(word1,word2));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint insertDeleteDistance(string word1,string word2){\n    return 0;\n}\nint main(){\n    string word1,word2;\n    cin>>word1>>word2;\n    cout<<insertDeleteDistance(word1,word2)<<"\\n";\n    return 0;\n}'
    }
  },
    // ========================= MEDIUM =========================

  {
    id: 'ed-m1',
    title: 'Classic Edit Distance',
    difficulty: 'Medium',
    description: 'Given two strings `word1` and `word2`, compute the minimum edit distance using insertion, deletion, and replacement operations.',
    constraints: [
      '0 <= word1.length, word2.length <= 500',
      'Strings contain lowercase English letters.'
    ],
    examples: [
      {
        input: 'word1 = "kitten", word2 = "sitting"',
        output: '3',
        explanation: 'Replace k→s, replace e→i, insert g.'
      },
      {
        input: 'word1 = "flaw", word2 = "lawn"',
        output: '2',
        explanation: 'Delete f and insert n.'
      }
    ],
    testCases: [
      {
        input: 'kitten\nsitting',
        expectedOutput: '3',
        hidden: false
      },
      {
        input: 'flaw\nlawn',
        expectedOutput: '2',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def edit_distance(word1, word2):\n    pass\n\nword1=input().strip()\nword2=input().strip()\nprint(edit_distance(word1,word2))',
      java: 'import java.util.*;\npublic class Main{\npublic static int editDistance(String word1,String word2){return 0;}\npublic static void main(String[] args){Scanner sc=new Scanner(System.in);String word1=sc.nextLine();String word2=sc.nextLine();System.out.println(editDistance(word1,word2));}}',
      c: '#include <stdio.h>\n#include <string.h>\nint editDistance(char word1[],char word2[]){return 0;}\nint main(){char word1[505],word2[505];scanf("%s",word1);scanf("%s",word2);printf("%d\\n",editDistance(word1,word2));return 0;}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint editDistance(string word1,string word2){return 0;}\nint main(){string word1,word2;cin>>word1>>word2;cout<<editDistance(word1,word2)<<"\\n";return 0;}'
    }
  },

  {
    id: 'ed-m2',
    title: 'Delete Operation for Two Strings',
    difficulty: 'Medium',
    description: 'Given two strings, return the minimum number of deletions required to make both strings equal.',
    constraints: [
      '1 <= word1.length, word2.length <= 500'
    ],
    examples: [
      {
        input: 'word1 = "sea", word2 = "eat"',
        output: '2',
        explanation: 'Delete s and t.'
      },
      {
        input: 'word1 = "leetcode", word2 = "etco"',
        output: '4',
        explanation: 'Minimum deletions required are 4.'
      }
    ],
    testCases: [
      {
        input: 'sea\neat',
        expectedOutput: '2',
        hidden: false
      },
      {
        input: 'leetcode\netco',
        expectedOutput: '4',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def min_deletions(word1, word2):\n    pass\n\nword1=input().strip()\nword2=input().strip()\nprint(min_deletions(word1,word2))',
      java: 'import java.util.*;\npublic class Main{\npublic static int minDeletions(String word1,String word2){return 0;}\npublic static void main(String[] args){Scanner sc=new Scanner(System.in);String word1=sc.nextLine();String word2=sc.nextLine();System.out.println(minDeletions(word1,word2));}}',
      c: '#include <stdio.h>\n#include <string.h>\nint minDeletions(char word1[],char word2[]){return 0;}\nint main(){char word1[505],word2[505];scanf("%s",word1);scanf("%s",word2);printf("%d\\n",minDeletions(word1,word2));return 0;}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint minDeletions(string word1,string word2){return 0;}\nint main(){string word1,word2;cin>>word1>>word2;cout<<minDeletions(word1,word2)<<"\\n";return 0;}'
    }
  },

  {
    id: 'ed-m3',
    title: 'One Edit Away',
    difficulty: 'Medium',
    description: 'Determine whether two strings are at most one edit away from each other.',
    constraints: [
      '0 <= string length <= 500'
    ],
    examples: [
      {
        input: 'word1 = "pale", word2 = "ple"',
        output: 'true',
        explanation: 'One deletion.'
      },
      {
        input: 'word1 = "pale", word2 = "bake"',
        output: 'false',
        explanation: 'Requires more than one edit.'
      }
    ],
    testCases: [
      {
        input: 'pale\nple',
        expectedOutput: 'true',
        hidden: false
      },
      {
        input: 'pale\nbake',
        expectedOutput: 'false',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def one_edit_away(word1, word2):\n    pass\n\nword1=input().strip()\nword2=input().strip()\nprint(str(one_edit_away(word1,word2)).lower())',
      java: 'import java.util.*;\npublic class Main{\npublic static boolean oneEditAway(String word1,String word2){return false;}\npublic static void main(String[] args){Scanner sc=new Scanner(System.in);String word1=sc.nextLine();String word2=sc.nextLine();System.out.println(oneEditAway(word1,word2));}}',
      c: '#include <stdio.h>\n#include <stdbool.h>\n#include <string.h>\nbool oneEditAway(char word1[],char word2[]){return false;}\nint main(){char word1[505],word2[505];scanf("%s",word1);scanf("%s",word2);printf("%s\\n",oneEditAway(word1,word2)?\"true\":\"false\");return 0;}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nbool oneEditAway(string word1,string word2){return false;}\nint main(){string word1,word2;cin>>word1>>word2;cout<<(oneEditAway(word1,word2)?\"true\":\"false\")<<"\\n";return 0;}'
    }
  },

  {
    id: 'ed-m4',
    title: 'Weighted Edit Distance',
    difficulty: 'Medium',
    description: 'Given insertion cost, deletion cost and replacement cost, compute the minimum cost required to convert one string into another.',
    constraints: [
      '1 <= string length <= 300',
      '1 <= operation costs <= 100'
    ],
    examples: [
      {
        input: 'word1="abc", word2="adc", ins=1 del=1 rep=2',
        output: '2',
        explanation: 'Replace b with d.'
      },
      {
        input: 'word1="abc", word2="abcd", ins=3 del=1 rep=2',
        output: '3',
        explanation: 'Insert d.'
      }
    ],
    testCases: [
      {
        input: 'abc\nadc\n1 1 2',
        expectedOutput: '2',
        hidden: false
      },
      {
        input: 'abc\nabcd\n3 1 2',
        expectedOutput: '3',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def weighted_edit_distance(word1, word2, ins, dele, rep):\n    pass\n\nword1=input().strip()\nword2=input().strip()\nins,dele,rep=map(int,input().split())\nprint(weighted_edit_distance(word1,word2,ins,dele,rep))',
      java: 'import java.util.*;\npublic class Main{\npublic static int weightedEditDistance(String word1,String word2,int ins,int del,int rep){return 0;}\npublic static void main(String[] args){Scanner sc=new Scanner(System.in);String word1=sc.nextLine();String word2=sc.nextLine();int ins=sc.nextInt(),del=sc.nextInt(),rep=sc.nextInt();System.out.println(weightedEditDistance(word1,word2,ins,del,rep));}}',
      c: '#include <stdio.h>\n#include <string.h>\nint weightedEditDistance(char word1[],char word2[],int ins,int del,int rep){return 0;}\nint main(){char word1[305],word2[305];int ins,del,rep;scanf("%s",word1);scanf("%s",word2);scanf("%d%d%d",&ins,&del,&rep);printf("%d\\n",weightedEditDistance(word1,word2,ins,del,rep));return 0;}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint weightedEditDistance(string word1,string word2,int ins,int del,int rep){return 0;}\nint main(){string word1,word2;int ins,del,rep;cin>>word1>>word2>>ins>>del>>rep;cout<<weightedEditDistance(word1,word2,ins,del,rep)<<"\\n";return 0;}'
    }
  },

  {
    id: 'ed-m5',
    title: 'Minimum Operations to Convert',
    difficulty: 'Medium',
    description: 'Find the minimum number of insertions, deletions and replacements required to convert the first string into the second.',
    constraints: [
      '1 <= word1.length, word2.length <= 500'
    ],
    examples: [
      {
        input: 'word1 = "abcdef", word2 = "azced"',
        output: '3',
        explanation: 'Minimum operations required are 3.'
      },
      {
        input: 'word1 = "algorithm", word2 = "altruistic"',
        output: '6',
        explanation: 'Minimum edit distance is 6.'
      }
    ],
    testCases: [
      {
        input: 'abcdef\nazced',
        expectedOutput: '3',
        hidden: false
      },
      {
        input: 'algorithm\naltruistic',
        expectedOutput: '6',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def minimum_operations(word1, word2):\n    pass\n\nword1=input().strip()\nword2=input().strip()\nprint(minimum_operations(word1,word2))',
      java: 'import java.util.*;\npublic class Main{\npublic static int minimumOperations(String word1,String word2){return 0;}\npublic static void main(String[] args){Scanner sc=new Scanner(System.in);String word1=sc.nextLine();String word2=sc.nextLine();System.out.println(minimumOperations(word1,word2));}}',
      c: '#include <stdio.h>\n#include <string.h>\nint minimumOperations(char word1[],char word2[]){return 0;}\nint main(){char word1[505],word2[505];scanf("%s",word1);scanf("%s",word2);printf("%d\\n",minimumOperations(word1,word2));return 0;}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint minimumOperations(string word1,string word2){return 0;}\nint main(){string word1,word2;cin>>word1>>word2;cout<<minimumOperations(word1,word2)<<"\\n";return 0;}'
    }
  },  // ========================= HARD =========================

  {
    id: 'ed-h1',
    title: 'Weighted Edit Distance with Variable Costs',
    difficulty: 'Hard',
    description: 'Given two strings and different costs for insertion, deletion, and replacement, return the minimum cost required to convert the first string into the second.',
    constraints: [
      '1 <= word1.length, word2.length <= 1000',
      '1 <= insertion, deletion, replacement cost <= 100'
    ],
    examples: [
      {
        input: 'word1 = "abc", word2 = "yabd", ins = 1, del = 1, rep = 2',
        output: '3',
        explanation: 'Insert y and replace c with d.'
      },
      {
        input: 'word1 = "cat", word2 = "cut", ins = 2, del = 2, rep = 1',
        output: '1',
        explanation: 'Replace a with u.'
      }
    ],
    testCases: [
      {
        input: 'abc\nyabd\n1 1 2',
        expectedOutput: '3',
        hidden: false
      },
      {
        input: 'cat\ncut\n2 2 1',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def weighted_edit_distance(word1, word2, ins, dele, rep):\n    pass\n\nword1=input().strip()\nword2=input().strip()\nins,dele,rep=map(int,input().split())\nprint(weighted_edit_distance(word1,word2,ins,dele,rep))',
      java: 'import java.util.*;\npublic class Main{\npublic static int weightedEditDistance(String word1,String word2,int ins,int del,int rep){return 0;}\npublic static void main(String[] args){Scanner sc=new Scanner(System.in);String word1=sc.nextLine();String word2=sc.nextLine();int ins=sc.nextInt(),del=sc.nextInt(),rep=sc.nextInt();System.out.println(weightedEditDistance(word1,word2,ins,del,rep));}}',
      c: '#include <stdio.h>\n#include <string.h>\nint weightedEditDistance(char word1[],char word2[],int ins,int del,int rep){return 0;}\nint main(){char word1[1005],word2[1005];int ins,del,rep;scanf("%s",word1);scanf("%s",word2);scanf("%d%d%d",&ins,&del,&rep);printf("%d\\n",weightedEditDistance(word1,word2,ins,del,rep));return 0;}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint weightedEditDistance(string word1,string word2,int ins,int del,int rep){return 0;}\nint main(){string word1,word2;int ins,del,rep;cin>>word1>>word2>>ins>>del>>rep;cout<<weightedEditDistance(word1,word2,ins,del,rep)<<"\\n";return 0;}'
    }
  },

  {
    id: 'ed-h2',
    title: 'Edit Distance with Transposition',
    difficulty: 'Hard',
    description: 'Given two strings, compute the minimum edit distance where insertion, deletion, replacement, and adjacent character transposition are allowed.',
    constraints: [
      '1 <= word1.length, word2.length <= 1000'
    ],
    examples: [
      {
        input: 'word1 = "abcd", word2 = "abdc"',
        output: '1',
        explanation: 'Swap c and d.'
      },
      {
        input: 'word1 = "ca", word2 = "ac"',
        output: '1',
        explanation: 'One transposition.'
      }
    ],
    testCases: [
      {
        input: 'abcd\nabdc',
        expectedOutput: '1',
        hidden: false
      },
      {
        input: 'ca\nac',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def transposition_distance(word1, word2):\n    pass\n\nword1=input().strip()\nword2=input().strip()\nprint(transposition_distance(word1,word2))',
      java: 'import java.util.*;\npublic class Solution{\npublic static int transpositionDistance(String word1,String word2){return 0;}\npublic static void main(String[] args){Scanner sc=new Scanner(System.in);String word1=sc.nextLine();String word2=sc.nextLine();System.out.println(transpositionDistance(word1,word2));}}',
      c: '#include <stdio.h>\n#include <string.h>\nint transpositionDistance(char word1[],char word2[]){return 0;}\nint main(){char word1[1005],word2[1005];scanf("%s",word1);scanf("%s",word2);printf("%d\\n",transpositionDistance(word1,word2));return 0;}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint transpositionDistance(string word1,string word2){return 0;}\nint main(){string word1,word2;cin>>word1>>word2;cout<<transpositionDistance(word1,word2)<<"\\n";return 0;}'
    }
  },

  {
    id: 'ed-h3',
    title: 'Minimum ASCII Delete Sum',
    difficulty: 'Hard',
    description: 'Return the minimum sum of ASCII values of deleted characters required to make two strings equal.',
    constraints: [
      '1 <= word1.length, word2.length <= 1000'
    ],
    examples: [
      {
        input: 'word1 = "sea", word2 = "eat"',
        output: '231',
        explanation: 'Delete s (115) and t (116).'
      },
      {
        input: 'word1 = "delete", word2 = "leet"',
        output: '403',
        explanation: 'Minimum ASCII delete sum is 403.'
      }
    ],
    testCases: [
      {
        input: 'sea\neat',
        expectedOutput: '231',
        hidden: false
      },
      {
        input: 'delete\nleet',
        expectedOutput: '403',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def minimum_ascii_delete_sum(word1, word2):\n    pass\n\nword1=input().strip()\nword2=input().strip()\nprint(minimum_ascii_delete_sum(word1,word2))',
      java: 'import java.util.*;\npublic class Main{\npublic static int minimumASCIIDeleteSum(String word1,String word2){return 0;}\npublic static void main(String[] args){Scanner sc=new Scanner(System.in);String word1=sc.nextLine();String word2=sc.nextLine();System.out.println(minimumASCIIDeleteSum(word1,word2));}}',
      c: '#include <stdio.h>\n#include <string.h>\nint minimumASCIIDeleteSum(char word1[],char word2[]){return 0;}\nint main(){char word1[1005],word2[1005];scanf("%s",word1);scanf("%s",word2);printf("%d\\n",minimumASCIIDeleteSum(word1,word2));return 0;}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint minimumASCIIDeleteSum(string word1,string word2){return 0;}\nint main(){string word1,word2;cin>>word1>>word2;cout<<minimumASCIIDeleteSum(word1,word2)<<"\\n";return 0;}'
    }
  },

  {
    id: 'ed-h4',
    title: 'Longest Common Subsequence via Edit Distance',
    difficulty: 'Hard',
    description: 'Given two strings, compute the length of their longest common subsequence using the relationship between edit distance and dynamic programming.',
    constraints: [
      '1 <= word1.length, word2.length <= 1000'
    ],
    examples: [
      {
        input: 'word1 = "abcde", word2 = "ace"',
        output: '3',
        explanation: 'LCS is ace.'
      },
      {
        input: 'word1 = "abc", word2 = "abc"',
        output: '3',
        explanation: 'Entire string is common.'
      }
    ],
    testCases: [
      {
        input: 'abcde\nace',
        expectedOutput: '3',
        hidden: false
      },
      {
        input: 'abc\nabc',
        expectedOutput: '3',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def lcs_length(word1, word2):\n    pass\n\nword1=input().strip()\nword2=input().strip()\nprint(lcs_length(word1,word2))',
      java: 'import java.util.*;\npublic class Main{\npublic static int lcsLength(String word1,String word2){return 0;}\npublic static void main(String[] args){Scanner sc=new Scanner(System.in);String word1=sc.nextLine();String word2=sc.nextLine();System.out.println(lcsLength(word1,word2));}}',
      c: '#include <stdio.h>\n#include <string.h>\nint lcsLength(char word1[],char word2[]){return 0;}\nint main(){char word1[1005],word2[1005];scanf("%s",word1);scanf("%s",word2);printf("%d\\n",lcsLength(word1,word2));return 0;}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint lcsLength(string word1,string word2){return 0;}\nint main(){string word1,word2;cin>>word1>>word2;cout<<lcsLength(word1,word2)<<"\\n";return 0;}'
    }
  },

  {
    id: 'ed-h5',
    title: 'Shortest Common Supersequence Length',
    difficulty: 'Hard',
    description: 'Given two strings, return the length of their shortest common supersequence.',
    constraints: [
      '1 <= word1.length, word2.length <= 1000'
    ],
    examples: [
      {
        input: 'word1 = "abac", word2 = "cab"',
        output: '5',
        explanation: 'One shortest common supersequence is cabac.'
      },
      {
        input: 'word1 = "geek", word2 = "eke"',
        output: '5',
        explanation: 'Minimum possible length is 5.'
      }
    ],
    testCases: [
      {
        input: 'abac\ncab',
        expectedOutput: '5',
        hidden: false
      },
      {
        input: 'geek\neke',
        expectedOutput: '5',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def shortest_common_supersequence_length(word1, word2):\n    pass\n\nword1=input().strip()\nword2=input().strip()\nprint(shortest_common_supersequence_length(word1,word2))',
      java: 'import java.util.*;\npublic class Main{\npublic static int shortestCommonSupersequenceLength(String word1,String word2){return 0;}\npublic static void main(String[] args){Scanner sc=new Scanner(System.in);String word1=sc.nextLine();String word2=sc.nextLine();System.out.println(shortestCommonSupersequenceLength(word1,word2));}}',
      c: '#include <stdio.h>\n#include <string.h>\nint shortestCommonSupersequenceLength(char word1[],char word2[]){return 0;}\nint main(){char word1[1005],word2[1005];scanf("%s",word1);scanf("%s",word2);printf("%d\\n",shortestCommonSupersequenceLength(word1,word2));return 0;}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint shortestCommonSupersequenceLength(string word1,string word2){return 0;}\nint main(){string word1,word2;cin>>word1>>word2;cout<<shortestCommonSupersequenceLength(word1,word2)<<"\\n";return 0;}'
    }
  }

];