export const WordSearchGridProblems = [
  // --- EASY ---
  {
    id: 'wsg-e1', title: 'Search Word in Grid', difficulty: 'Easy',
    description: 'Given a 2D character grid and a word, determine whether the word exists in the grid. The word can be formed by sequentially adjacent cells (up, down, left, right) and a cell cannot be reused.',
    constraints: ['1 <= rows, cols <= 6', '1 <= word.length <= 15'],
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: 'true', explanation: 'The word can be formed using adjacent cells.' },
      { input: 'board = [["A","B"],["C","D"]], word = "ABCD"', output: 'false', explanation: 'The word cannot be formed without reusing a cell.' }
    ],
    testCases: [
      { input: '3 4\nA B C E\nS F C S\nA D E E\nABCCED', expectedOutput: 'true', hidden: false },
      { input: '2 2\nA B\nC D\nABCD', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def word_search(board, word):\n    pass',
      java: 'public static boolean wordSearch(char[][] board, String word) {\n    return false;\n}',
      c: 'int wordSearch(char board[][10], int rows, int cols, char word[]) {\n    return 0;\n}',
      cpp: 'bool wordSearch(vector<vector<char>>& board, string word) {\n    return false;\n}'
    }
  },

  {
    id: 'wsg-e2', title: 'Count Word Occurrences', difficulty: 'Easy',
    description: 'Count the number of times a word appears in a character grid horizontally and vertically.',
    constraints: ['1 <= rows, cols <= 20', '1 <= word.length <= 10'],
    examples: [
      { input: 'grid = [["C","A","T"],["A","T","A"],["T","A","C"]], word = "CAT"', output: '2', explanation: 'CAT appears twice in the grid.' },
      { input: 'grid = [["A","A"],["A","A"]], word = "AA"', output: '4', explanation: 'AA appears four times.' }
    ],
    testCases: [
      { input: '3 3\nC A T\nA T A\nT A C\nCAT', expectedOutput: '2', hidden: false },
      { input: '2 2\nA A\nA A\nAA', expectedOutput: '4', hidden: false }
    ],
    starterCode: {
      python: 'def count_occurrences(grid, word):\n    pass',
      java: 'public static int countOccurrences(char[][] grid, String word) {\n    return 0;\n}',
      c: 'int countOccurrences(char grid[][20], int rows, int cols, char word[]) {\n    return 0;\n}',
      cpp: 'int countOccurrences(vector<vector<char>>& grid, string word) {\n    return 0;\n}'
    }
  },

  {
    id: 'wsg-e3', title: 'Find Starting Position', difficulty: 'Easy',
    description: 'Find the starting position of a given word in a grid. Return row and column indices.',
    constraints: ['1 <= rows, cols <= 20', '1 <= word.length <= 15'],
    examples: [
      { input: 'grid = [["H","E","L","L","O"]], word = "HELLO"', output: '[0,0]', explanation: 'The word starts at row 0 column 0.' },
      { input: 'grid = [["A","B"],["C","D"]], word = "CD"', output: '[1,0]', explanation: 'CD starts at row 1 column 0.' }
    ],
    testCases: [
      { input: '1 5\nH E L L O\nHELLO', expectedOutput: '[0,0]', hidden: false },
      { input: '2 2\nA B\nC D\nCD', expectedOutput: '[1,0]', hidden: false }
    ],
    starterCode: {
      python: 'def find_start_position(grid, word):\n    pass',
      java: 'public static int[] findStartPosition(char[][] grid, String word) {\n    return new int[]{-1,-1};\n}',
      c: 'void findStartPosition(char grid[][20], int rows, int cols, char word[]) {\n}',
      cpp: 'vector<int> findStartPosition(vector<vector<char>>& grid, string word) {\n    return {-1,-1};\n}'
    }
  },

  {
    id: 'wsg-e4', title: 'Search Horizontal Word', difficulty: 'Easy',
    description: 'Determine whether a given word exists horizontally in a character grid.',
    constraints: ['1 <= rows, cols <= 30', '1 <= word.length <= 20'],
    examples: [
      { input: 'grid = [["C","O","D","E"]], word = "CODE"', output: 'true', explanation: 'CODE appears horizontally.' },
      { input: 'grid = [["C","O","D","E"]], word = "JAVA"', output: 'false', explanation: 'JAVA is not present.' }
    ],
    testCases: [
      { input: '1 4\nC O D E\nCODE', expectedOutput: 'true', hidden: false },
      { input: '1 4\nC O D E\nJAVA', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def horizontal_search(grid, word):\n    pass',
      java: 'public static boolean horizontalSearch(char[][] grid, String word) {\n    return false;\n}',
      c: 'int horizontalSearch(char grid[][30], int rows, int cols, char word[]) {\n    return 0;\n}',
      cpp: 'bool horizontalSearch(vector<vector<char>>& grid, string word) {\n    return false;\n}'
    }
  },

  {
    id: 'wsg-e5', title: 'Search Vertical Word', difficulty: 'Easy',
    description: 'Determine whether a given word exists vertically in a character grid.',
    constraints: ['1 <= rows, cols <= 30', '1 <= word.length <= 20'],
    examples: [
      { input: 'grid = [["C"],["O"],["D"],["E"]], word = "CODE"', output: 'true', explanation: 'CODE appears vertically.' },
      { input: 'grid = [["C"],["O"],["D"],["E"]], word = "JAVA"', output: 'false', explanation: 'JAVA is not present.' }
    ],
    testCases: [
      { input: '4 1\nC\nO\nD\nE\nCODE', expectedOutput: 'true', hidden: false },
      { input: '4 1\nC\nO\nD\nE\nJAVA', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def vertical_search(grid, word):\n    pass',
      java: 'public static boolean verticalSearch(char[][] grid, String word) {\n    return false;\n}',
      c: 'int verticalSearch(char grid[][30], int rows, int cols, char word[]) {\n    return 0;\n}',
      cpp: 'bool verticalSearch(vector<vector<char>>& grid, string word) {\n    return false;\n}'
    }
  },
  // --- MEDIUM ---
  {
    id: 'wsg-m1', title: 'Search Word in All 8 Directions', difficulty: 'Medium',
    description: 'Given a grid and a word, determine whether the word exists in any of the 8 possible directions starting from any cell.',
    constraints: ['1 <= rows, cols <= 30', '1 <= word.length <= 20'],
    examples: [
      { input: 'grid = [["G","E","E","K","S"],["F","O","R","G","E"],["E","K","S","Q","U"]], word = "GEEKS"', output: 'true', explanation: 'The word exists horizontally in the grid.' },
      { input: 'grid = [["A","B"],["C","D"]], word = "BAD"', output: 'false', explanation: 'The word cannot be formed in any direction.' }
    ],
    testCases: [
      { input: '3 5\nG E E K S\nF O R G E\nE K S Q U\nGEEKS', expectedOutput: 'true', hidden: false },
      { input: '2 2\nA B\nC D\nBAD', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def search_all_directions(grid, word):\n    pass',
      java: 'public static boolean searchAllDirections(char[][] grid, String word) {\n    return false;\n}',
      c: 'int searchAllDirections(char grid[][30], int rows, int cols, char word[]) {\n    return 0;\n}',
      cpp: 'bool searchAllDirections(vector<vector<char>>& grid, string word) {\n    return false;\n}'
    }
  },

  {
    id: 'wsg-m2', title: 'Find All Occurrences of Word', difficulty: 'Medium',
    description: 'Find all starting positions where a given word occurs in the grid in any of the 8 directions.',
    constraints: ['1 <= rows, cols <= 30', '1 <= word.length <= 20'],
    examples: [
      { input: 'grid = [["G","E","E","K","S"],["G","E","E","K","S"]], word = "GEEKS"', output: '[[0,0],[1,0]]', explanation: 'The word starts at two positions.' },
      { input: 'grid = [["A","B"],["C","D"]], word = "ABCD"', output: '[]', explanation: 'No occurrence exists.' }
    ],
    testCases: [
      { input: '2 5\nG E E K S\nG E E K S\nGEEKS', expectedOutput: '[[0,0],[1,0]]', hidden: false },
      { input: '2 2\nA B\nC D\nABCD', expectedOutput: '[]', hidden: false }
    ],
    starterCode: {
      python: 'def find_all_occurrences(grid, word):\n    pass',
      java: 'public static List<int[]> findAllOccurrences(char[][] grid, String word) {\n    return new ArrayList<>();\n}',
      c: 'void findAllOccurrences(char grid[][30], int rows, int cols, char word[]) {\n}',
      cpp: 'vector<vector<int>> findAllOccurrences(vector<vector<char>>& grid, string word) {\n    return {};\n}'
    }
  },

  {
    id: 'wsg-m3', title: 'Word Search with Backtracking', difficulty: 'Medium',
    description: 'Determine whether a word exists in the grid using DFS and backtracking. A cell cannot be reused while forming a word.',
    constraints: ['1 <= rows, cols <= 10', '1 <= word.length <= 15'],
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', output: 'true', explanation: 'The word exists in the board.' },
      { input: 'board = [["A","B"],["C","D"]], word = "ABCB"', output: 'false', explanation: 'A cell cannot be reused.' }
    ],
    testCases: [
      { input: '3 4\nA B C E\nS F C S\nA D E E\nSEE', expectedOutput: 'true', hidden: false },
      { input: '2 2\nA B\nC D\nABCB', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def word_search_backtracking(board, word):\n    pass',
      java: 'public static boolean wordSearchBacktracking(char[][] board, String word) {\n    return false;\n}',
      c: 'int wordSearchBacktracking(char board[][10], int rows, int cols, char word[]) {\n    return 0;\n}',
      cpp: 'bool wordSearchBacktracking(vector<vector<char>>& board, string word) {\n    return false;\n}'
    }
  },

  {
    id: 'wsg-m4', title: 'Multiple Word Search', difficulty: 'Medium',
    description: 'Given a grid and a list of words, return all words that can be found in the grid.',
    constraints: ['1 <= rows, cols <= 12', '1 <= words.length <= 50'],
    examples: [
      { input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]', output: '["oath","eat"]', explanation: 'Only oath and eat can be formed.' },
      { input: 'board = [["a"]], words = ["a","b"]', output: '["a"]', explanation: 'Only a exists.' }
    ],
    testCases: [
      { input: '4 4\no a a n\ne t a e\ni h k r\ni f l v\n4\noath pea eat rain', expectedOutput: '["oath","eat"]', hidden: false },
      { input: '1 1\na\n2\na b', expectedOutput: '["a"]', hidden: false }
    ],
    starterCode: {
      python: 'def multiple_word_search(board, words):\n    pass',
      java: 'public static List<String> multipleWordSearch(char[][] board, String[] words) {\n    return new ArrayList<>();\n}',
      c: 'void multipleWordSearch(char board[][20], int rows, int cols, char words[][20], int n) {\n}',
      cpp: 'vector<string> multipleWordSearch(vector<vector<char>>& board, vector<string>& words) {\n    return {};\n}'
    }
  },

  {
    id: 'wsg-m5', title: 'Longest Word in Grid', difficulty: 'Medium',
    description: 'Given a grid and a dictionary of valid words, find the longest word that can be formed in the grid.',
    constraints: ['1 <= rows, cols <= 15', '1 <= dictionary.length <= 100'],
    examples: [
      { input: 'grid = [["C","O","D","E"],["R","I","T","H"]], dictionary = ["CODE","CODER","RITHM"]', output: '"CODER"', explanation: 'CODER is the longest valid word.' },
      { input: 'grid = [["A","B"],["C","D"]], dictionary = ["AB","ABC"]', output: '"AB"', explanation: 'AB is the longest valid word found.' }
    ],
    testCases: [
      { input: '2 4\nC O D E\nR I T H\n3\nCODE CODER RITHM', expectedOutput: 'CODER', hidden: false },
      { input: '2 2\nA B\nC D\n2\nAB ABC', expectedOutput: 'AB', hidden: false }
    ],
    starterCode: {
      python: 'def longest_word_in_grid(grid, dictionary):\n    pass',
      java: 'public static String longestWordInGrid(char[][] grid, String[] dictionary) {\n    return "";\n}',
      c: 'char* longestWordInGrid(char grid[][20], int rows, int cols, char dictionary[][20], int n) {\n    return "";\n}',
      cpp: 'string longestWordInGrid(vector<vector<char>>& grid, vector<string>& dictionary) {\n    return "";\n}'
    }
  },
    // --- HARD ---
  {
    id: 'wsg-h1', title: 'Word Search II', difficulty: 'Hard',
    description: 'Given a character board and a list of words, return all words present in the board. Each word must be formed using adjacent cells without reusing a cell.',
    constraints: ['1 <= rows, cols <= 12', '1 <= words.length <= 3000'],
    examples: [
      { input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]', output: '["oath","eat"]', explanation: 'Only oath and eat can be formed from the board.' },
      { input: 'board = [["a","b"],["c","d"]], words = ["abcb"]', output: '[]', explanation: 'No valid word can be formed.' }
    ],
    testCases: [
      { input: '4 4\no a a n\ne t a e\ni h k r\ni f l v\n4\noath pea eat rain', expectedOutput: '["oath","eat"]', hidden: false },
      { input: '2 2\na b\nc d\n1\nabcb', expectedOutput: '[]', hidden: false }
    ],
    starterCode: {
      python: 'def word_search_ii(board, words):\n    pass',
      java: 'public static List<String> wordSearchII(char[][] board, String[] words) {\n    return new ArrayList<>();\n}',
      c: 'void wordSearchII(char board[][20], int rows, int cols, char words[][20], int n) {\n}',
      cpp: 'vector<string> wordSearchII(vector<vector<char>>& board, vector<string>& words) {\n    return {};\n}'
    }
  },

  {
    id: 'wsg-h2', title: 'Boggle Solver', difficulty: 'Hard',
    description: 'Given a Boggle board and a dictionary, find all valid dictionary words that can be formed by traversing adjacent cells in all 8 directions.',
    constraints: ['1 <= rows, cols <= 10', '1 <= dictionary.length <= 5000'],
    examples: [
      { input: 'board = [["G","I","Z"],["U","E","K"],["Q","S","E"]], dictionary = ["GEEKS","QUIZ","GO"]', output: '["GEEKS","QUIZ"]', explanation: 'GEEKS and QUIZ can be formed on the board.' },
      { input: 'board = [["A","B"],["C","D"]], dictionary = ["XYZ"]', output: '[]', explanation: 'No dictionary word exists in the board.' }
    ],
    testCases: [
      { input: '3 3\nG I Z\nU E K\nQ S E\n3\nGEEKS QUIZ GO', expectedOutput: '["GEEKS","QUIZ"]', hidden: false },
      { input: '2 2\nA B\nC D\n1\nXYZ', expectedOutput: '[]', hidden: false }
    ],
    starterCode: {
      python: 'def boggle_solver(board, dictionary):\n    pass',
      java: 'public static List<String> boggleSolver(char[][] board, String[] dictionary) {\n    return new ArrayList<>();\n}',
      c: 'void boggleSolver(char board[][20], int rows, int cols, char dictionary[][20], int n) {\n}',
      cpp: 'vector<string> boggleSolver(vector<vector<char>>& board, vector<string>& dictionary) {\n    return {};\n}'
    }
  },

  {
    id: 'wsg-h3', title: 'Find All Dictionary Words', difficulty: 'Hard',
    description: 'Given a character grid and a dictionary, find all dictionary words present in the grid using DFS and backtracking.',
    constraints: ['1 <= rows, cols <= 15', '1 <= dictionary.length <= 1000'],
    examples: [
      { input: 'grid = [["C","A","T"],["R","R","E"],["T","O","N"]], dictionary = ["CAT","CAR","TOE"]', output: '["CAT","TOE"]', explanation: 'CAT and TOE are present in the grid.' },
      { input: 'grid = [["A","B"],["C","D"]], dictionary = ["XYZ"]', output: '[]', explanation: 'No dictionary words are found.' }
    ],
    testCases: [
      { input: '3 3\nC A T\nR R E\nT O N\n3\nCAT CAR TOE', expectedOutput: '["CAT","TOE"]', hidden: false },
      { input: '2 2\nA B\nC D\n1\nXYZ', expectedOutput: '[]', hidden: false }
    ],
    starterCode: {
      python: 'def find_dictionary_words(grid, dictionary):\n    pass',
      java: 'public static List<String> findDictionaryWords(char[][] grid, String[] dictionary) {\n    return new ArrayList<>();\n}',
      c: 'void findDictionaryWords(char grid[][20], int rows, int cols, char dictionary[][20], int n) {\n}',
      cpp: 'vector<string> findDictionaryWords(vector<vector<char>>& grid, vector<string>& dictionary) {\n    return {};\n}'
    }
  },

  {
    id: 'wsg-h4', title: 'Trie Based Grid Search', difficulty: 'Hard',
    description: 'Given a grid and a large dictionary, use a Trie data structure to efficiently find all valid words present in the grid.',
    constraints: ['1 <= rows, cols <= 20', '1 <= dictionary.length <= 10000'],
    examples: [
      { input: 'grid = [["a","b"],["c","d"]], dictionary = ["ab","abc","abcd"]', output: '["ab"]', explanation: 'Only ab can be formed from the grid.' },
      { input: 'grid = [["x","y"],["z","w"]], dictionary = ["xy","zw"]', output: '["xy","zw"]', explanation: 'Both words exist in the grid.' }
    ],
    testCases: [
      { input: '2 2\na b\nc d\n3\nab abc abcd', expectedOutput: '["ab"]', hidden: false },
      { input: '2 2\nx y\nz w\n2\nxy zw', expectedOutput: '["xy","zw"]', hidden: false }
    ],
    starterCode: {
      python: 'def trie_grid_search(grid, dictionary):\n    pass',
      java: 'public static List<String> trieGridSearch(char[][] grid, String[] dictionary) {\n    return new ArrayList<>();\n}',
      c: 'void trieGridSearch(char grid[][20], int rows, int cols, char dictionary[][20], int n) {\n}',
      cpp: 'vector<string> trieGridSearch(vector<vector<char>>& grid, vector<string>& dictionary) {\n    return {};\n}'
    }
  },

  {
    id: 'wsg-h5', title: 'Maximum Words Formed from Grid', difficulty: 'Hard',
    description: 'Given a grid and a dictionary, determine the maximum number of distinct words that can be formed from the grid.',
    constraints: ['1 <= rows, cols <= 15', '1 <= dictionary.length <= 5000'],
    examples: [
      { input: 'grid = [["C","A","T"],["D","O","G"],["R","A","T"]], dictionary = ["CAT","DOG","RAT","CAR"]', output: '3', explanation: 'CAT, DOG and RAT can be formed.' },
      { input: 'grid = [["A","B"],["C","D"]], dictionary = ["XYZ"]', output: '0', explanation: 'No valid words can be formed.' }
    ],
    testCases: [
      { input: '3 3\nC A T\nD O G\nR A T\n4\nCAT DOG RAT CAR', expectedOutput: '3', hidden: false },
      { input: '2 2\nA B\nC D\n1\nXYZ', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: 'def maximum_words(grid, dictionary):\n    pass',
      java: 'public static int maximumWords(char[][] grid, String[] dictionary) {\n    return 0;\n}',
      c: 'int maximumWords(char grid[][20], int rows, int cols, char dictionary[][20], int n) {\n    return 0;\n}',
      cpp: 'int maximumWords(vector<vector<char>>& grid, vector<string>& dictionary) {\n    return 0;\n}'
    }
  }

];