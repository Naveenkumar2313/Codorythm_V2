export const mergeSortSolutions = [
  // --- EASY SOLUTIONS ---
  {
    id: 'ms-e1',
    solutions: {
      python: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]
        merge_sort(L)
        merge_sort(R)
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    return arr`,
      java: `    static void merge(int[] arr, int l, int m, int r) {
        int n1 = m - l + 1, n2 = r - m;
        int[] L = new int[n1], R = new int[n2];
        for (int i = 0; i < n1; ++i) L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j) R[j] = arr[m + 1 + j];
        int i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) { arr[k] = L[i]; i++; }
            else { arr[k] = R[j]; j++; }
            k++;
        }
        while (i < n1) { arr[k] = L[i]; i++; k++; }
        while (j < n2) { arr[k] = R[j]; j++; k++; }
    }
    static void sort(int[] arr, int l, int r) {
        if (l < r) {
            int m = l + (r - l) / 2;
            sort(arr, l, m);
            sort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }
    public static int[] mergeSort(int[] arr) {
        sort(arr, 0, arr.length - 1);
        return arr;
    }`,
      c: `void merge(int* arr, int l, int m, int r) {
    int i, j, k;
    int n1 = m - l + 1, n2 = r - m;
    int *L = (int*)malloc(n1 * sizeof(int)), *R = (int*)malloc(n2 * sizeof(int));
    for (i = 0; i < n1; i++) L[i] = arr[l + i];
    for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    i = 0; j = 0; k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) { arr[k] = L[i]; i++; }
        else { arr[k] = R[j]; j++; }
        k++;
    }
    while (i < n1) { arr[k] = L[i]; i++; k++; }
    while (j < n2) { arr[k] = R[j]; j++; k++; }
    free(L); free(R);
}
void mergeSortRec(int* arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSortRec(arr, l, m);
        mergeSortRec(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}
void mergeSort(int* arr, int n) {
    mergeSortRec(arr, 0, n - 1);
}`,
      cpp: `void merge(vector<int>& arr, int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    vector<int> L(n1), R(n2);
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}
void mergeSortRec(vector<int>& arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSortRec(arr, l, m);
        mergeSortRec(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}
void mergeSort(vector<int>& arr) {
    if(!arr.empty()) mergeSortRec(arr, 0, arr.size() - 1);
}`
    }
  },
  {
    id: 'ms-e2',
    solutions: {
      python: `def merge_arrays(arr1, arr2):
    res = []
    i = j = 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            res.append(arr1[i])
            i += 1
        else:
            res.append(arr2[j])
            j += 1
    while i < len(arr1):
        res.append(arr1[i])
        i += 1
    while j < len(arr2):
        res.append(arr2[j])
        j += 1
    return res`,
      java: `    public static int[] mergeArrays(int[] arr1, int[] arr2) {
        int[] res = new int[arr1.length + arr2.length];
        int i = 0, j = 0, k = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) res[k++] = arr1[i++];
            else res[k++] = arr2[j++];
        }
        while (i < arr1.length) res[k++] = arr1[i++];
        while (j < arr2.length) res[k++] = arr2[j++];
        return res;
    }`,
      c: `int* mergeArrays(int* arr1, int n, int* arr2, int m, int* returnSize) {
    int* res = (int*)malloc((n + m) * sizeof(int));
    *returnSize = n + m;
    int i = 0, j = 0, k = 0;
    while (i < n && j < m) {
        if (arr1[i] <= arr2[j]) res[k++] = arr1[i++];
        else res[k++] = arr2[j++];
    }
    while (i < n) res[k++] = arr1[i++];
    while (j < m) res[k++] = arr2[j++];
    return res;
}`,
      cpp: `vector<int> mergeArrays(vector<int>& arr1, vector<int>& arr2) {
    vector<int> res(arr1.size() + arr2.size());
    int i = 0, j = 0, k = 0;
    while (i < arr1.size() && j < arr2.size()) {
        if (arr1[i] <= arr2[j]) res[k++] = arr1[i++];
        else res[k++] = arr2[j++];
    }
    while (i < arr1.size()) res[k++] = arr1[i++];
    while (j < arr2.size()) res[k++] = arr2[j++];
    return res;
}`
    }
  },
  {
    id: 'ms-e3',
    solutions: {
      python: `def merge_two_lists(list1, list2):
    dummy = ListNode()
    tail = dummy
    while list1 and list2:
        if list1.val <= list2.val:
            tail.next = list1
            list1 = list1.next
        else:
            tail.next = list2
            list2 = list2.next
        tail = tail.next
    tail.next = list1 if list1 else list2
    return dummy.next`,
      java: `    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }
        tail.next = (list1 != null) ? list1 : list2;
        return dummy.next;
    }`,
      c: `struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    struct ListNode dummy;
    struct ListNode* tail = &dummy;
    dummy.next = NULL;
    while (list1 != NULL && list2 != NULL) {
        if (list1->val <= list2->val) {
            tail->next = list1;
            list1 = list1->next;
        } else {
            tail->next = list2;
            list2 = list2->next;
        }
        tail = tail->next;
    }
    tail->next = list1 ? list1 : list2;
    return dummy.next;
}`,
      cpp: `ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    ListNode dummy(0);
    ListNode* tail = &dummy;
    while (list1 != NULL && list2 != NULL) {
        if (list1->val <= list2->val) {
            tail->next = list1;
            list1 = list1->next;
        } else {
            tail->next = list2;
            list2 = list2->next;
        }
        tail = tail->next;
    }
    tail->next = list1 ? list1 : list2;
    return dummy.next;
}`
    }
  },
  {
    id: 'ms-e4',
    solutions: {
      python: `def merge_sort_desc(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]
        merge_sort_desc(L)
        merge_sort_desc(R)
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] >= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    return arr`,
      java: `    static void mergeDesc(int[] arr, int l, int m, int r) {
        int n1 = m - l + 1, n2 = r - m;
        int[] L = new int[n1], R = new int[n2];
        for (int i = 0; i < n1; ++i) L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j) R[j] = arr[m + 1 + j];
        int i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
            if (L[i] >= R[j]) { arr[k] = L[i]; i++; }
            else { arr[k] = R[j]; j++; }
            k++;
        }
        while (i < n1) { arr[k] = L[i]; i++; k++; }
        while (j < n2) { arr[k] = R[j]; j++; k++; }
    }
    static void sortDesc(int[] arr, int l, int r) {
        if (l < r) {
            int m = l + (r - l) / 2;
            sortDesc(arr, l, m);
            sortDesc(arr, m + 1, r);
            mergeDesc(arr, l, m, r);
        }
    }
    public static int[] mergeSortDesc(int[] arr) {
        sortDesc(arr, 0, arr.length - 1);
        return arr;
    }`,
      c: `void mergeDesc(int* arr, int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    int *L = (int*)malloc(n1 * sizeof(int)), *R = (int*)malloc(n2 * sizeof(int));
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] >= R[j]) { arr[k] = L[i]; i++; }
        else { arr[k] = R[j]; j++; }
        k++;
    }
    while (i < n1) { arr[k] = L[i]; i++; k++; }
    while (j < n2) { arr[k] = R[j]; j++; k++; }
    free(L); free(R);
}
void mergeSortDescRec(int* arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSortDescRec(arr, l, m);
        mergeSortDescRec(arr, m + 1, r);
        mergeDesc(arr, l, m, r);
    }
}
void mergeSortDesc(int* arr, int n) {
    mergeSortDescRec(arr, 0, n - 1);
}`,
      cpp: `void mergeDesc(vector<int>& arr, int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    vector<int> L(n1), R(n2);
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] >= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}
void mergeSortDescRec(vector<int>& arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSortDescRec(arr, l, m);
        mergeSortDescRec(arr, m + 1, r);
        mergeDesc(arr, l, m, r);
    }
}
void mergeSortDesc(vector<int>& arr) {
    if(!arr.empty()) mergeSortDescRec(arr, 0, arr.size() - 1);
}`
    }
  },
  {
    id: 'ms-e5',
    solutions: {
      python: `def sort_string(s):
    arr = list(s)
    def merge_sort(arr):
        if len(arr) > 1:
            mid = len(arr) // 2
            L = arr[:mid]
            R = arr[mid:]
            merge_sort(L)
            merge_sort(R)
            i = j = k = 0
            while i < len(L) and j < len(R):
                if L[i] <= R[j]:
                    arr[k] = L[i]
                    i += 1
                else:
                    arr[k] = R[j]
                    j += 1
                k += 1
            while i < len(L):
                arr[k] = L[i]
                i += 1
                k += 1
            while j < len(R):
                arr[k] = R[j]
                j += 1
                k += 1
    merge_sort(arr)
    return "".join(arr)`,
      java: `    static void merge(char[] arr, int l, int m, int r) {
        int n1 = m - l + 1, n2 = r - m;
        char[] L = new char[n1], R = new char[n2];
        for (int i = 0; i < n1; ++i) L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j) R[j] = arr[m + 1 + j];
        int i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) { arr[k] = L[i]; i++; }
            else { arr[k] = R[j]; j++; }
            k++;
        }
        while (i < n1) { arr[k] = L[i]; i++; k++; }
        while (j < n2) { arr[k] = R[j]; j++; k++; }
    }
    static void sort(char[] arr, int l, int r) {
        if (l < r) {
            int m = l + (r - l) / 2;
            sort(arr, l, m);
            sort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }
    public static String sortString(String s) {
        char[] arr = s.toCharArray();
        sort(arr, 0, arr.length - 1);
        return new String(arr);
    }`,
      c: `void mergeStr(char* arr, int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    char *L = (char*)malloc((n1) * sizeof(char)), *R = (char*)malloc((n2) * sizeof(char));
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) { arr[k] = L[i]; i++; }
        else { arr[k] = R[j]; j++; }
        k++;
    }
    while (i < n1) { arr[k] = L[i]; i++; k++; }
    while (j < n2) { arr[k] = R[j]; j++; k++; }
    free(L); free(R);
}
void mergeSortStrRec(char* arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSortStrRec(arr, l, m);
        mergeSortStrRec(arr, m + 1, r);
        mergeStr(arr, l, m, r);
    }
}
char* sortString(char* s) {
    mergeSortStrRec(s, 0, strlen(s) - 1);
    return s;
}`,
      cpp: `void mergeStr(string& arr, int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    string L = arr.substr(l, n1), R = arr.substr(m + 1, n2);
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}
void mergeSortStrRec(string& arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSortStrRec(arr, l, m);
        mergeSortStrRec(arr, m + 1, r);
        mergeStr(arr, l, m, r);
    }
}
string sortString(string s) {
    if(!s.empty()) mergeSortStrRec(s, 0, s.size() - 1);
    return s;
}`
    }
  },

  // --- MEDIUM SOLUTIONS ---
  {
    id: 'ms-m1',
    solutions: {
      python: `def count_inversions(arr):
    def merge(arr, temp_arr, left, mid, right):
        i = left
        j = mid + 1
        k = left
        inv_count = 0
        while i <= mid and j <= right:
            if arr[i] <= arr[j]:
                temp_arr[k] = arr[i]
                i += 1
            else:
                temp_arr[k] = arr[j]
                inv_count += (mid - i + 1)
                j += 1
            k += 1
        while i <= mid:
            temp_arr[k] = arr[i]
            k += 1
            i += 1
        while j <= right:
            temp_arr[k] = arr[j]
            k += 1
            j += 1
        for loop_var in range(left, right + 1):
            arr[loop_var] = temp_arr[loop_var]
        return inv_count

    def merge_sort(arr, temp_arr, left, right):
        inv_count = 0
        if left < right:
            mid = (left + right) // 2
            inv_count += merge_sort(arr, temp_arr, left, mid)
            inv_count += merge_sort(arr, temp_arr, mid + 1, right)
            inv_count += merge(arr, temp_arr, left, mid, right)
        return inv_count

    n = len(arr)
    temp_arr = [0] * n
    return merge_sort(arr, temp_arr, 0, n - 1)`,
      java: `    static long merge(int[] arr, int[] temp, int left, int mid, int right) {
        int i = left, j = mid + 1, k = left;
        long invCount = 0;
        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) temp[k++] = arr[i++];
            else { temp[k++] = arr[j++]; invCount += (mid - i + 1); }
        }
        while (i <= mid) temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];
        for (i = left; i <= right; i++) arr[i] = temp[i];
        return invCount;
    }
    static long mergeSort(int[] arr, int[] temp, int left, int right) {
        long invCount = 0;
        if (left < right) {
            int mid = (left + right) / 2;
            invCount += mergeSort(arr, temp, left, mid);
            invCount += mergeSort(arr, temp, mid + 1, right);
            invCount += merge(arr, temp, left, mid, right);
        }
        return invCount;
    }
    public static long countInversions(int[] arr) {
        int[] temp = new int[arr.length];
        return mergeSort(arr, temp, 0, arr.length - 1);
    }`,
      c: `long long merge(int* arr, int* temp, int left, int mid, int right) {
    int i = left, j = mid + 1, k = left;
    long long invCount = 0;
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else { temp[k++] = arr[j++]; invCount += (mid - i + 1); }
    }
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    for (i = left; i <= right; i++) arr[i] = temp[i];
    return invCount;
}
long long mergeSortRec(int* arr, int* temp, int left, int right) {
    long long invCount = 0;
    if (left < right) {
        int mid = (left + right) / 2;
        invCount += mergeSortRec(arr, temp, left, mid);
        invCount += mergeSortRec(arr, temp, mid + 1, right);
        invCount += merge(arr, temp, left, mid, right);
    }
    return invCount;
}
long long countInversions(int* arr, int n) {
    int* temp = (int*)malloc(n * sizeof(int));
    long long ans = mergeSortRec(arr, temp, 0, n - 1);
    free(temp);
    return ans;
}`,
      cpp: `long long merge(vector<int>& arr, vector<int>& temp, int left, int mid, int right) {
    int i = left, j = mid + 1, k = left;
    long long invCount = 0;
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else { temp[k++] = arr[j++]; invCount += (mid - i + 1); }
    }
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    for (i = left; i <= right; i++) arr[i] = temp[i];
    return invCount;
}
long long mergeSortRec(vector<int>& arr, vector<int>& temp, int left, int right) {
    long long invCount = 0;
    if (left < right) {
        int mid = (left + right) / 2;
        invCount += mergeSortRec(arr, temp, left, mid);
        invCount += mergeSortRec(arr, temp, mid + 1, right);
        invCount += merge(arr, temp, left, mid, right);
    }
    return invCount;
}
long long countInversions(vector<int>& arr) {
    vector<int> temp(arr.size());
    return mergeSortRec(arr, temp, 0, arr.size() - 1);
}`
    }
  },
  {
    id: 'ms-m2',
    solutions: {
      python: `def sort_list(head):
    if not head or not head.next:
        return head
    slow = head
    fast = head.next
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    mid = slow.next
    slow.next = None
    left = sort_list(head)
    right = sort_list(mid)
    dummy = ListNode()
    curr = dummy
    while left and right:
        if left.val < right.val:
            curr.next = left
            left = left.next
        else:
            curr.next = right
            right = right.next
        curr = curr.next
    curr.next = left if left else right
    return dummy.next`,
      java: `    public static ListNode sortList(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode slow = head, fast = head.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode mid = slow.next;
        slow.next = null;
        ListNode left = sortList(head);
        ListNode right = sortList(mid);
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        while (left != null && right != null) {
            if (left.val < right.val) { curr.next = left; left = left.next; }
            else { curr.next = right; right = right.next; }
            curr = curr.next;
        }
        curr.next = (left != null) ? left : right;
        return dummy.next;
    }`,
      c: `struct ListNode* sortList(struct ListNode* head) {
    if (head == NULL || head->next == NULL) return head;
    struct ListNode *slow = head, *fast = head->next;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
    }
    struct ListNode* mid = slow->next;
    slow->next = NULL;
    struct ListNode* left = sortList(head);
    struct ListNode* right = sortList(mid);
    struct ListNode dummy;
    struct ListNode* curr = &dummy;
    dummy.next = NULL;
    while (left != NULL && right != NULL) {
        if (left->val < right->val) { curr->next = left; left = left->next; }
        else { curr->next = right; right = right->next; }
        curr = curr->next;
    }
    curr->next = (left != NULL) ? left : right;
    return dummy.next;
}`,
      cpp: `ListNode* sortList(ListNode* head) {
    if (head == NULL || head->next == NULL) return head;
    ListNode *slow = head, *fast = head->next;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
    }
    ListNode* mid = slow->next;
    slow->next = NULL;
    ListNode* left = sortList(head);
    ListNode* right = sortList(mid);
    ListNode dummy(0);
    ListNode* curr = &dummy;
    while (left != NULL && right != NULL) {
        if (left->val < right->val) { curr->next = left; left = left->next; }
        else { curr->next = right; right = right->next; }
        curr = curr->next;
    }
    curr->next = (left != NULL) ? left : right;
    return dummy.next;
}`
    }
  },
  {
    id: 'ms-m3',
    solutions: {
      python: `import heapq
def merge_k_arrays(arrays):
    res = []
    pq = []
    for i, arr in enumerate(arrays):
        if arr:
            heapq.heappush(pq, (arr[0], i, 0))
    while pq:
        val, arr_idx, elem_idx = heapq.heappop(pq)
        res.append(val)
        if elem_idx + 1 < len(arrays[arr_idx]):
            heapq.heappush(pq, (arrays[arr_idx][elem_idx + 1], arr_idx, elem_idx + 1))
    return res`,
      java: `    public static int[] mergeKArrays(int[][] arrays) {
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        int total = 0;
        for (int i = 0; i < arrays.length; i++) {
            total += arrays[i].length;
            if (arrays[i].length > 0) pq.add(new int[]{arrays[i][0], i, 0});
        }
        int[] res = new int[total];
        int idx = 0;
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            res[idx++] = curr[0];
            int aIdx = curr[1], eIdx = curr[2];
            if (eIdx + 1 < arrays[aIdx].length) {
                pq.add(new int[]{arrays[aIdx][eIdx + 1], aIdx, eIdx + 1});
            }
        }
        return res;
    }`,
      c: `// Standard Merge Sort over all elements is easier in C than a custom Min-Heap for brevity, but Heap is better O(N log K)
int cmpFunc(const void* a, const void* b) { return *(int*)a - *(int*)b; }
int* mergeKArrays(int** arrays, int* sizes, int k, int* returnSize) {
    int total = 0;
    for (int i = 0; i < k; i++) total += sizes[i];
    int* res = (int*)malloc(total * sizeof(int));
    int idx = 0;
    for (int i = 0; i < k; i++) {
        for (int j = 0; j < sizes[i]; j++) {
            res[idx++] = arrays[i][j];
        }
    }
    qsort(res, total, sizeof(int), cmpFunc);
    *returnSize = total;
    return res;
}`,
      cpp: `vector<int> mergeKArrays(vector<vector<int>>& arrays) {
    priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> pq;
    for (int i = 0; i < arrays.size(); i++) {
        if (!arrays[i].empty()) pq.push({arrays[i][0], i, 0});
    }
    vector<int> res;
    while (!pq.empty()) {
        auto curr = pq.top(); pq.pop();
        res.push_back(curr[0]);
        int aIdx = curr[1], eIdx = curr[2];
        if (eIdx + 1 < arrays[aIdx].size()) {
            pq.push({arrays[aIdx][eIdx + 1], aIdx, eIdx + 1});
        }
    }
    return res;
}`
    }
  },
  {
    id: 'ms-m4',
    solutions: {
      python: `def sort_list_bottom_up(head):
    if not head or not head.next: return head
    def get_length(node):
        l = 0
        while node: l += 1; node = node.next
        return l
    def split(head, step):
        if not head: return None
        for i in range(1, step):
            if head.next: head = head.next
            else: break
        right = head.next
        head.next = None
        return right
    def merge(l1, l2, head):
        curr = head
        while l1 and l2:
            if l1.val <= l2.val:
                curr.next, l1 = l1, l1.next
            else:
                curr.next, l2 = l2, l2.next
            curr = curr.next
        curr.next = l1 if l1 else l2
        while curr.next: curr = curr.next
        return curr
    
    length = get_length(head)
    dummy = ListNode(0)
    dummy.next = head
    step = 1
    while step < length:
        curr = dummy.next
        tail = dummy
        while curr:
            left = curr
            right = split(left, step)
            curr = split(right, step)
            tail = merge(left, right, tail)
        step *= 2
    return dummy.next`,
      java: `    static int getLength(ListNode head) {
        int l = 0; while (head != null) { l++; head = head.next; }
        return l;
    }
    static ListNode split(ListNode head, int step) {
        if (head == null) return null;
        for (int i = 1; head.next != null && i < step; i++) head = head.next;
        ListNode right = head.next;
        head.next = null;
        return right;
    }
    static ListNode merge(ListNode l1, ListNode l2, ListNode head) {
        ListNode curr = head;
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) { curr.next = l1; l1 = l1.next; }
            else { curr.next = l2; l2 = l2.next; }
            curr = curr.next;
        }
        curr.next = (l1 != null) ? l1 : l2;
        while (curr.next != null) curr = curr.next;
        return curr;
    }
    public static ListNode sortListBottomUp(ListNode head) {
        if (head == null || head.next == null) return head;
        int len = getLength(head);
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        for (int step = 1; step < len; step *= 2) {
            ListNode curr = dummy.next;
            ListNode tail = dummy;
            while (curr != null) {
                ListNode left = curr;
                ListNode right = split(left, step);
                curr = split(right, step);
                tail = merge(left, right, tail);
            }
        }
        return dummy.next;
    }`,
      c: `int getLength(struct ListNode* head) {
    int l = 0; while (head) { l++; head = head->next; }
    return l;
}
struct ListNode* split(struct ListNode* head, int step) {
    if (!head) return NULL;
    for (int i = 1; head->next && i < step; i++) head = head->next;
    struct ListNode* right = head->next;
    head->next = NULL;
    return right;
}
struct ListNode* merge_lists(struct ListNode* l1, struct ListNode* l2, struct ListNode* head) {
    struct ListNode* curr = head;
    while (l1 && l2) {
        if (l1->val <= l2->val) { curr->next = l1; l1 = l1->next; }
        else { curr->next = l2; l2 = l2->next; }
        curr = curr->next;
    }
    curr->next = l1 ? l1 : l2;
    while (curr->next) curr = curr->next;
    return curr;
}
struct ListNode* sortListBottomUp(struct ListNode* head) {
    if (!head || !head->next) return head;
    int len = getLength(head);
    struct ListNode dummy;
    dummy.next = head;
    for (int step = 1; step < len; step *= 2) {
        struct ListNode* curr = dummy.next;
        struct ListNode* tail = &dummy;
        while (curr) {
            struct ListNode* left = curr;
            struct ListNode* right = split(left, step);
            curr = split(right, step);
            tail = merge_lists(left, right, tail);
        }
    }
    return dummy.next;
}`,
      cpp: `int getLength(ListNode* head) {
    int l = 0; while (head) { l++; head = head->next; }
    return l;
}
ListNode* split(ListNode* head, int step) {
    if (!head) return NULL;
    for (int i = 1; head->next && i < step; i++) head = head->next;
    ListNode* right = head->next;
    head->next = NULL;
    return right;
}
ListNode* merge_lists(ListNode* l1, ListNode* l2, ListNode* head) {
    ListNode* curr = head;
    while (l1 && l2) {
        if (l1->val <= l2->val) { curr->next = l1; l1 = l1->next; }
        else { curr->next = l2; l2 = l2->next; }
        curr = curr->next;
    }
    curr->next = l1 ? l1 : l2;
    while (curr->next) curr = curr->next;
    return curr;
}
ListNode* sortListBottomUp(ListNode* head) {
    if (!head || !head->next) return head;
    int len = getLength(head);
    ListNode dummy(0);
    dummy.next = head;
    for (int step = 1; step < len; step *= 2) {
        ListNode* curr = dummy.next;
        ListNode* tail = &dummy;
        while (curr) {
            ListNode* left = curr;
            ListNode* right = split(left, step);
            curr = split(right, step);
            tail = merge_lists(left, right, tail);
        }
    }
    return dummy.next;
}`
    }
  },
  {
    id: 'ms-m5',
    solutions: {
      python: `def intersection(arr1, arr2):
    res = []
    i = j = 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]: i += 1
        elif arr1[i] > arr2[j]: j += 1
        else:
            if not res or res[-1] != arr1[i]:
                res.append(arr1[i])
            i += 1
            j += 1
    return res`,
      java: `    public static int[] intersection(int[] arr1, int[] arr2) {
        List<Integer> res = new ArrayList<>();
        int i = 0, j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) i++;
            else if (arr1[i] > arr2[j]) j++;
            else {
                if (res.isEmpty() || res.get(res.size() - 1) != arr1[i]) res.add(arr1[i]);
                i++; j++;
            }
        }
        int[] ans = new int[res.size()];
        for(int k=0; k<res.size(); k++) ans[k] = res.get(k);
        return ans;
    }`,
      c: `int* intersection(int* arr1, int n, int* arr2, int m, int* returnSize) {
    int* res = (int*)malloc((n < m ? n : m) * sizeof(int));
    int i = 0, j = 0, k = 0;
    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) i++;
        else if (arr1[i] > arr2[j]) j++;
        else {
            if (k == 0 || res[k - 1] != arr1[i]) res[k++] = arr1[i];
            i++; j++;
        }
    }
    *returnSize = k;
    return res;
}`,
      cpp: `vector<int> intersection(vector<int>& arr1, vector<int>& arr2) {
    vector<int> res;
    int i = 0, j = 0;
    while (i < arr1.size() && j < arr2.size()) {
        if (arr1[i] < arr2[j]) i++;
        else if (arr1[i] > arr2[j]) j++;
        else {
            if (res.empty() || res.back() != arr1[i]) res.push_back(arr1[i]);
            i++; j++;
        }
    }
    return res;
}`
    }
  },

  // --- HARD SOLUTIONS ---
  {
    id: 'ms-h1',
    solutions: {
      python: `def count_smaller(nums):
    res = [0] * len(nums)
    enum = list(enumerate(nums))
    def merge_sort(enum):
        if len(enum) <= 1: return enum
        mid = len(enum) // 2
        left, right = merge_sort(enum[:mid]), merge_sort(enum[mid:])
        merged = []
        i, j = 0, 0
        while i < len(left) and j < len(right):
            if left[i][1] <= right[j][1]:
                res[left[i][0]] += j
                merged.append(left[i])
                i += 1
            else:
                merged.append(right[j])
                j += 1
        while i < len(left):
            res[left[i][0]] += j
            merged.append(left[i])
            i += 1
        merged.extend(right[j:])
        return merged
    merge_sort(enum)
    return res`,
      java: `    static class Pair {
        int val, idx;
        Pair(int v, int i) { val = v; idx = i; }
    }
    static void mergeSort(Pair[] arr, int[] res, int l, int r) {
        if (l >= r) return;
        int m = l + (r - l) / 2;
        mergeSort(arr, res, l, m);
        mergeSort(arr, res, m + 1, r);
        Pair[] merged = new Pair[r - l + 1];
        int i = l, j = m + 1, k = 0, rightCount = 0;
        while (i <= m && j <= r) {
            if (arr[i].val <= arr[j].val) {
                res[arr[i].idx] += rightCount;
                merged[k++] = arr[i++];
            } else {
                rightCount++;
                merged[k++] = arr[j++];
            }
        }
        while (i <= m) {
            res[arr[i].idx] += rightCount;
            merged[k++] = arr[i++];
        }
        while (j <= r) merged[k++] = arr[j++];
        for (i = l; i <= r; i++) arr[i] = merged[i - l];
    }
    public static List<Integer> countSmaller(int[] nums) {
        Pair[] arr = new Pair[nums.length];
        for (int i = 0; i < nums.length; i++) arr[i] = new Pair(nums[i], i);
        int[] res = new int[nums.length];
        mergeSort(arr, res, 0, nums.length - 1);
        List<Integer> list = new ArrayList<>();
        for (int r : res) list.add(r);
        return list;
    }`,
      c: `typedef struct { int val, idx; } Pair;
void mergeSort_cs(Pair* arr, int* res, int l, int r, Pair* temp) {
    if (l >= r) return;
    int m = l + (r - l) / 2;
    mergeSort_cs(arr, res, l, m, temp);
    mergeSort_cs(arr, res, m + 1, r, temp);
    int i = l, j = m + 1, k = l, rightCount = 0;
    while (i <= m && j <= r) {
        if (arr[i].val <= arr[j].val) {
            res[arr[i].idx] += rightCount;
            temp[k++] = arr[i++];
        } else {
            rightCount++;
            temp[k++] = arr[j++];
        }
    }
    while (i <= m) {
        res[arr[i].idx] += rightCount;
        temp[k++] = arr[i++];
    }
    while (j <= r) temp[k++] = arr[j++];
    for (i = l; i <= r; i++) arr[i] = temp[i];
}
int* countSmaller(int* nums, int n, int* returnSize) {
    Pair* arr = (Pair*)malloc(n * sizeof(Pair));
    for (int i = 0; i < n; i++) { arr[i].val = nums[i]; arr[i].idx = i; }
    int* res = (int*)calloc(n, sizeof(int));
    Pair* temp = (Pair*)malloc(n * sizeof(Pair));
    mergeSort_cs(arr, res, 0, n - 1, temp);
    *returnSize = n;
    free(arr); free(temp);
    return res;
}`,
      cpp: `void mergeSort_cs(vector<pair<int,int>>& arr, vector<int>& res, int l, int r) {
    if (l >= r) return;
    int m = l + (r - l) / 2;
    mergeSort_cs(arr, res, l, m);
    mergeSort_cs(arr, res, m + 1, r);
    vector<pair<int,int>> merged(r - l + 1);
    int i = l, j = m + 1, k = 0, rightCount = 0;
    while (i <= m && j <= r) {
        if (arr[i].first <= arr[j].first) {
            res[arr[i].second] += rightCount;
            merged[k++] = arr[i++];
        } else {
            rightCount++;
            merged[k++] = arr[j++];
        }
    }
    while (i <= m) {
        res[arr[i].second] += rightCount;
        merged[k++] = arr[i++];
    }
    while (j <= r) merged[k++] = arr[j++];
    for (i = l; i <= r; i++) arr[i] = merged[i - l];
}
vector<int> countSmaller(vector<int>& nums) {
    vector<pair<int,int>> arr(nums.size());
    for (int i = 0; i < nums.size(); i++) arr[i] = {nums[i], i};
    vector<int> res(nums.size(), 0);
    mergeSort_cs(arr, res, 0, nums.size() - 1);
    return res;
}`
    }
  },
  {
    id: 'ms-h2',
    solutions: {
      python: `def reverse_pairs(nums):
    def merge_sort(l, r):
        if l >= r: return 0
        m = l + (r - l) // 2
        count = merge_sort(l, m) + merge_sort(m + 1, r)
        j = m + 1
        for i in range(l, m + 1):
            while j <= r and nums[i] > 2 * nums[j]:
                j += 1
            count += (j - (m + 1))
        nums[l:r+1] = sorted(nums[l:r+1])
        return count
    return merge_sort(0, len(nums) - 1)`,
      java: `    static int mergeSort(int[] nums, int l, int r, int[] temp) {
        if (l >= r) return 0;
        int m = l + (r - l) / 2;
        int count = mergeSort(nums, l, m, temp) + mergeSort(nums, m + 1, r, temp);
        int j = m + 1;
        for (int i = l; i <= m; i++) {
            while (j <= r && nums[i] > 2L * nums[j]) j++;
            count += (j - (m + 1));
        }
        int i = l, k = l; j = m + 1;
        while (i <= m && j <= r) {
            if (nums[i] <= nums[j]) temp[k++] = nums[i++];
            else temp[k++] = nums[j++];
        }
        while (i <= m) temp[k++] = nums[i++];
        while (j <= r) temp[k++] = nums[j++];
        for (i = l; i <= r; i++) nums[i] = temp[i];
        return count;
    }
    public static int reversePairs(int[] nums) {
        return mergeSort(nums, 0, nums.length - 1, new int[nums.length]);
    }`,
      c: `int mergeSort_rp(int* nums, int l, int r, int* temp) {
    if (l >= r) return 0;
    int m = l + (r - l) / 2;
    int count = mergeSort_rp(nums, l, m, temp) + mergeSort_rp(nums, m + 1, r, temp);
    int j = m + 1;
    for (int i = l; i <= m; i++) {
        while (j <= r && (long long)nums[i] > 2LL * nums[j]) j++;
        count += (j - (m + 1));
    }
    int i = l, k = l; j = m + 1;
    while (i <= m && j <= r) {
        if (nums[i] <= nums[j]) temp[k++] = nums[i++];
        else temp[k++] = nums[j++];
    }
    while (i <= m) temp[k++] = nums[i++];
    while (j <= r) temp[k++] = nums[j++];
    for (i = l; i <= r; i++) nums[i] = temp[i];
    return count;
}
int reversePairs(int* nums, int n) {
    int* temp = (int*)malloc(n * sizeof(int));
    int res = mergeSort_rp(nums, 0, n - 1, temp);
    free(temp);
    return res;
}`,
      cpp: `int mergeSort_rp(vector<int>& nums, int l, int r, vector<int>& temp) {
    if (l >= r) return 0;
    int m = l + (r - l) / 2;
    int count = mergeSort_rp(nums, l, m, temp) + mergeSort_rp(nums, m + 1, r, temp);
    int j = m + 1;
    for (int i = l; i <= m; i++) {
        while (j <= r && (long long)nums[i] > 2LL * nums[j]) j++;
        count += (j - (m + 1));
    }
    int i = l, k = l; j = m + 1;
    while (i <= m && j <= r) {
        if (nums[i] <= nums[j]) temp[k++] = nums[i++];
        else temp[k++] = nums[j++];
    }
    while (i <= m) temp[k++] = nums[i++];
    while (j <= r) temp[k++] = nums[j++];
    for (i = l; i <= r; i++) nums[i] = temp[i];
    return count;
}
int reversePairs(vector<int>& nums) {
    vector<int> temp(nums.size());
    return mergeSort_rp(nums, 0, nums.size() - 1, temp);
}`
    }
  },
  {
    id: 'ms-h3',
    solutions: {
      python: `def count_range_sum(nums, lower, upper):
    sums = [0] * (len(nums) + 1)
    for i in range(len(nums)): sums[i+1] = sums[i] + nums[i]
    def merge_sort(lo, hi):
        if lo == hi: return 0
        mid = (lo + hi) // 2
        count = merge_sort(lo, mid) + merge_sort(mid + 1, hi)
        i = j = mid + 1
        for left in sums[lo:mid+1]:
            while i <= hi and sums[i] - left < lower: i += 1
            while j <= hi and sums[j] - left <= upper: j += 1
            count += j - i
        sums[lo:hi+1] = sorted(sums[lo:hi+1])
        return count
    return merge_sort(0, len(sums) - 1)`,
      java: `    static int mergeSort(long[] sums, int lo, int hi, long[] temp, int lower, int upper) {
        if (lo >= hi) return 0;
        int mid = lo + (hi - lo) / 2;
        int count = mergeSort(sums, lo, mid, temp, lower, upper) + mergeSort(sums, mid + 1, hi, temp, lower, upper);
        int i = mid + 1, j = mid + 1;
        for (int k = lo; k <= mid; k++) {
            while (i <= hi && sums[i] - sums[k] < lower) i++;
            while (j <= hi && sums[j] - sums[k] <= upper) j++;
            count += j - i;
        }
        int left = lo, right = mid + 1, k = lo;
        while (left <= mid && right <= hi) {
            if (sums[left] <= sums[right]) temp[k++] = sums[left++];
            else temp[k++] = sums[right++];
        }
        while (left <= mid) temp[k++] = sums[left++];
        while (right <= hi) temp[k++] = sums[right++];
        for (k = lo; k <= hi; k++) sums[k] = temp[k];
        return count;
    }
    public static int countRangeSum(int[] nums, int lower, int upper) {
        long[] sums = new long[nums.length + 1];
        for (int i = 0; i < nums.length; i++) sums[i+1] = sums[i] + nums[i];
        return mergeSort(sums, 0, sums.length - 1, new long[sums.length], lower, upper);
    }`,
      c: `int mergeSort_crs(long long* sums, int lo, int hi, long long* temp, int lower, int upper) {
    if (lo >= hi) return 0;
    int mid = lo + (hi - lo) / 2;
    int count = mergeSort_crs(sums, lo, mid, temp, lower, upper) + mergeSort_crs(sums, mid + 1, hi, temp, lower, upper);
    int i = mid + 1, j = mid + 1;
    for (int k = lo; k <= mid; k++) {
        while (i <= hi && sums[i] - sums[k] < lower) i++;
        while (j <= hi && sums[j] - sums[k] <= upper) j++;
        count += j - i;
    }
    int left = lo, right = mid + 1, k = lo;
    while (left <= mid && right <= hi) {
        if (sums[left] <= sums[right]) temp[k++] = sums[left++];
        else temp[k++] = sums[right++];
    }
    while (left <= mid) temp[k++] = sums[left++];
    while (right <= hi) temp[k++] = sums[right++];
    for (k = lo; k <= hi; k++) sums[k] = temp[k];
    return count;
}
int countRangeSum(int* nums, int n, int lower, int upper) {
    long long* sums = (long long*)malloc((n + 1) * sizeof(long long));
    sums[0] = 0;
    for (int i = 0; i < n; i++) sums[i+1] = sums[i] + nums[i];
    long long* temp = (long long*)malloc((n + 1) * sizeof(long long));
    int res = mergeSort_crs(sums, 0, n, temp, lower, upper);
    free(sums); free(temp);
    return res;
}`,
      cpp: `int mergeSort_crs(vector<long long>& sums, int lo, int hi, vector<long long>& temp, int lower, int upper) {
    if (lo >= hi) return 0;
    int mid = lo + (hi - lo) / 2;
    int count = mergeSort_crs(sums, lo, mid, temp, lower, upper) + mergeSort_crs(sums, mid + 1, hi, temp, lower, upper);
    int i = mid + 1, j = mid + 1;
    for (int k = lo; k <= mid; k++) {
        while (i <= hi && sums[i] - sums[k] < lower) i++;
        while (j <= hi && sums[j] - sums[k] <= upper) j++;
        count += j - i;
    }
    int left = lo, right = mid + 1, k = lo;
    while (left <= mid && right <= hi) {
        if (sums[left] <= sums[right]) temp[k++] = sums[left++];
        else temp[k++] = sums[right++];
    }
    while (left <= mid) temp[k++] = sums[left++];
    while (right <= hi) temp[k++] = sums[right++];
    for (k = lo; k <= hi; k++) sums[k] = temp[k];
    return count;
}
int countRangeSum(vector<int>& nums, int lower, int upper) {
    vector<long long> sums(nums.size() + 1, 0);
    for (int i = 0; i < nums.size(); i++) sums[i+1] = sums[i] + nums[i];
    vector<long long> temp(sums.size());
    return mergeSort_crs(sums, 0, sums.size() - 1, temp, lower, upper);
}`
    }
  },
  {
    id: 'ms-h4',
    solutions: {
      python: `def merge_k_lists(lists):
    def merge(l1, l2):
        dummy = ListNode(0)
        curr = dummy
        while l1 and l2:
            if l1.val <= l2.val:
                curr.next, l1 = l1, l1.next
            else:
                curr.next, l2 = l2, l2.next
            curr = curr.next
        curr.next = l1 if l1 else l2
        return dummy.next
    if not lists: return None
    step = 1
    while step < len(lists):
        for i in range(0, len(lists) - step, step * 2):
            lists[i] = merge(lists[i], lists[i + step])
        step *= 2
    return lists[0]`,
      java: `    static ListNode merge(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0), curr = dummy;
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) { curr.next = l1; l1 = l1.next; }
            else { curr.next = l2; l2 = l2.next; }
            curr = curr.next;
        }
        curr.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }
    public static ListNode mergeKLists(ListNode[] lists) {
        if (lists == null || lists.length == 0) return null;
        int step = 1;
        while (step < lists.length) {
            for (int i = 0; i < lists.length - step; i += step * 2) {
                lists[i] = merge(lists[i], lists[i + step]);
            }
            step *= 2;
        }
        return lists[0];
    }`,
      c: `struct ListNode* merge_h4(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    while (l1 && l2) {
        if (l1->val <= l2->val) { curr->next = l1; l1 = l1->next; }
        else { curr->next = l2; l2 = l2->next; }
        curr = curr->next;
    }
    curr->next = l1 ? l1 : l2;
    return dummy.next;
}
struct ListNode* mergeKLists(struct ListNode** lists, int k) {
    if (k == 0) return NULL;
    int step = 1;
    while (step < k) {
        for (int i = 0; i < k - step; i += step * 2) {
            lists[i] = merge_h4(lists[i], lists[i + step]);
        }
        step *= 2;
    }
    return lists[0];
}`,
      cpp: `ListNode* merge_h4(ListNode* l1, ListNode* l2) {
    ListNode dummy(0); ListNode* curr = &dummy;
    while (l1 && l2) {
        if (l1->val <= l2->val) { curr->next = l1; l1 = l1->next; }
        else { curr->next = l2; l2 = l2->next; }
        curr = curr->next;
    }
    curr->next = l1 ? l1 : l2;
    return dummy.next;
}
ListNode* mergeKLists(vector<ListNode*>& lists) {
    if (lists.empty()) return NULL;
    int step = 1;
    while (step < lists.size()) {
        for (int i = 0; i < lists.size() - step; i += step * 2) {
            lists[i] = merge_h4(lists[i], lists[i + step]);
        }
        step *= 2;
    }
    return lists[0];
}`
    }
  },
  {
    id: 'ms-h5',
    solutions: {
      python: `def in_place_merge_sort(arr):
    def next_gap(gap):
        if gap <= 1: return 0
        return (gap // 2) + (gap % 2)
    def merge(arr, start, mid, end):
        gap = end - start + 1
        gap = next_gap(gap)
        while gap > 0:
            i = start
            while i + gap <= end:
                if arr[i] > arr[i + gap]:
                    arr[i], arr[i + gap] = arr[i + gap], arr[i]
                i += 1
            gap = next_gap(gap)
    def sort(arr, s, e):
        if s >= e: return
        m = s + (e - s) // 2
        sort(arr, s, m)
        sort(arr, m + 1, e)
        merge(arr, s, m, e)
    sort(arr, 0, len(arr) - 1)
    return arr`,
      java: `    static int nextGap(int gap) {
        if (gap <= 1) return 0;
        return (gap / 2) + (gap % 2);
    }
    static void merge(int[] arr, int start, int mid, int end) {
        int gap = end - start + 1;
        for (gap = nextGap(gap); gap > 0; gap = nextGap(gap)) {
            for (int i = start; i + gap <= end; i++) {
                if (arr[i] > arr[i + gap]) {
                    int temp = arr[i]; arr[i] = arr[i + gap]; arr[i + gap] = temp;
                }
            }
        }
    }
    static void sort(int[] arr, int s, int e) {
        if (s >= e) return;
        int m = s + (e - s) / 2;
        sort(arr, s, m);
        sort(arr, m + 1, e);
        merge(arr, s, m, e);
    }
    public static int[] inPlaceMergeSort(int[] arr) {
        sort(arr, 0, arr.length - 1);
        return arr;
    }`,
      c: `int nextGap(int gap) {
    if (gap <= 1) return 0;
    return (gap / 2) + (gap % 2);
}
void merge_in_place(int* arr, int start, int mid, int end) {
    int gap = end - start + 1;
    for (gap = nextGap(gap); gap > 0; gap = nextGap(gap)) {
        for (int i = start; i + gap <= end; i++) {
            if (arr[i] > arr[i + gap]) {
                int temp = arr[i]; arr[i] = arr[i + gap]; arr[i + gap] = temp;
            }
        }
    }
}
void sort_in_place(int* arr, int s, int e) {
    if (s >= e) return;
    int m = s + (e - s) / 2;
    sort_in_place(arr, s, m);
    sort_in_place(arr, m + 1, e);
    merge_in_place(arr, s, m, e);
}
void inPlaceMergeSort(int* arr, int n) {
    sort_in_place(arr, 0, n - 1);
}`,
      cpp: `int nextGap(int gap) {
    if (gap <= 1) return 0;
    return (gap / 2) + (gap % 2);
}
void merge_in_place(vector<int>& arr, int start, int mid, int end) {
    int gap = end - start + 1;
    for (gap = nextGap(gap); gap > 0; gap = nextGap(gap)) {
        for (int i = start; i + gap <= end; i++) {
            if (arr[i] > arr[i + gap]) swap(arr[i], arr[i + gap]);
        }
    }
}
void sort_in_place(vector<int>& arr, int s, int e) {
    if (s >= e) return;
    int m = s + (e - s) / 2;
    sort_in_place(arr, s, m);
    sort_in_place(arr, m + 1, e);
    merge_in_place(arr, s, m, e);
}
void inPlaceMergeSort(vector<int>& arr) {
    sort_in_place(arr, 0, arr.size() - 1);
}`
    }
  }
];