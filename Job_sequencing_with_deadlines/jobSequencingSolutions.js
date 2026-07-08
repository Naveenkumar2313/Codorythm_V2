export const jobSequencingSolutions = {
  'js-e1': {
    python: `def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_deadline = max(job[1] for job in jobs)
    slots = [False] * (max_deadline + 1)
    total_profit = 0
    for job in jobs:
        job_id, deadline, profit = job
        for i in range(min(deadline, max_deadline), 0, -1):
            if not slots[i]:
                slots[i] = True
                total_profit += profit
                break
    return total_profit
n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))
print(job_sequencing(jobs))`,
    java: `import java.util.*;
public class Main {
    public static int jobSequencing(String[][] jobs) {
        Arrays.sort(jobs, (a, b) ->
            Integer.parseInt(b[2]) - Integer.parseInt(a[2]));
        int maxDeadline = 0;
        for (String[] job : jobs) {
            maxDeadline = Math.max(maxDeadline, Integer.parseInt(job[1]));
        }
        boolean[] slots = new boolean[maxDeadline + 1];
        int totalProfit = 0;
        for (String[] job : jobs) {
            int deadline = Integer.parseInt(job[1]);
            int profit = Integer.parseInt(job[2]);
            for (int j = Math.min(deadline, maxDeadline); j >= 1; j--) {
                if (!slots[j]) {
                    slots[j] = true;
                    totalProfit += profit;
                    break;
                }
            }
        }
        return totalProfit;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] jobs = new String[n][3];
            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }
            System.out.println(jobSequencing(jobs));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;
int compare(const void *a, const void *b) {
    return ((Job *)b)->profit - ((Job *)a)->profit;
}
int jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {
    Job jobs[n];
    for (int i = 0; i < n; i++) {
        strcpy(jobs[i].id, jobId[i]);
        jobs[i].deadline = deadline[i];
        jobs[i].profit = profit[i];
    }
    qsort(jobs, n, sizeof(Job), compare);
    int maxDeadline = 0;
    for (int i = 0; i < n; i++)
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    int slots[maxDeadline + 1];
    for (int i = 0; i <= maxDeadline; i++)
        slots[i] = 0;
    int totalProfit = 0;
    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline; j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = 1;
                totalProfit += jobs[i].profit;
                break;
            }
        }
    }
    return totalProfit;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    char jobId[n][20];
    int deadline[n], profit[n];
    for (int i = 0; i < n; i++) {
        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);
    }
    printf("%d\\n", jobSequencing(jobId, deadline, profit, n));
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;
int jobSequencing(vector<vector<string>>& jobs) {
    sort(jobs.begin(), jobs.end(),
         [](const vector<string>& a, const vector<string>& b) {
             return stoi(a[2]) > stoi(b[2]);
         });
    int maxDeadline = 0;
    for (const auto& job : jobs)
        maxDeadline = max(maxDeadline, stoi(job[1]));
    vector<bool> slots(maxDeadline + 1, false);
    int totalProfit = 0;
    for (const auto& job : jobs) {
        int deadline = stoi(job[1]);
        int profit = stoi(job[2]);
        for (int j = min(deadline, maxDeadline); j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = true;
                totalProfit += profit;
                break;
            }
        }
    }
    return totalProfit;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<vector<string>> jobs(n, vector<string>(3));

        for (int i = 0; i < n; i++)
            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];

        cout << jobSequencing(jobs) << "\n";
    }

    return 0;
}`
  },  'js-e2': {
    python: `def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_deadline = max(job[1] for job in jobs)
    slots = [False] * (max_deadline + 1)
    count = 0

    for job in jobs:
        _, deadline, _ = job
        for i in range(min(deadline, max_deadline), 0, -1):
            if not slots[i]:
                slots[i] = True
                count += 1
                break

    return count

n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))

print(job_sequencing(jobs))`,

    java: `import java.util.*;
public class Main {
    public static int jobSequencing(String[][] jobs) {
        Arrays.sort(jobs, (a, b) -> Integer.parseInt(b[2]) - Integer.parseInt(a[2]));
        int maxDeadline = 0;
        for (String[] job : jobs)
            maxDeadline = Math.max(maxDeadline, Integer.parseInt(job[1]));
        boolean[] slots = new boolean[maxDeadline + 1];
        int count = 0;
        for (String[] job : jobs) {
            int deadline = Integer.parseInt(job[1]);
            for (int j = Math.min(deadline, maxDeadline); j >= 1; j--) {
                if (!slots[j]) {
                    slots[j] = true;
                    count++;
                    break;
                }
            }
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] jobs = new String[n][3];
            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }
            System.out.println(jobSequencing(jobs));
        }
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;

int compare(const void *a, const void *b) {
    return ((Job *)b)->profit - ((Job *)a)->profit;
}

int jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {
    Job jobs[n];
    for (int i = 0; i < n; i++) {
        strcpy(jobs[i].id, jobId[i]);
        jobs[i].deadline = deadline[i];
        jobs[i].profit = profit[i];
    }
    qsort(jobs, n, sizeof(Job), compare);
    int maxDeadline = 0;
    for (int i = 0; i < n; i++)
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    int slots[maxDeadline + 1];
    for (int i = 0; i <= maxDeadline; i++)
        slots[i] = 0;
    int count = 0;
    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline; j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = 1;
                count++;
                break;
            }
        }
    }
    return count;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    char jobId[n][20];
    int deadline[n], profit[n];
    for (int i = 0; i < n; i++)
        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);
    printf("%d\\n", jobSequencing(jobId, deadline, profit, n));
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

int jobSequencing(vector<vector<string>>& jobs) {
    sort(jobs.begin(), jobs.end(), [](auto &a, auto &b) {
        return stoi(a[2]) > stoi(b[2]);
    });
    int maxDeadline = 0;
    for (auto &job : jobs)
        maxDeadline = max(maxDeadline, stoi(job[1]));
    vector<bool> slots(maxDeadline + 1, false);
    int count = 0;
    for (auto &job : jobs) {
        int deadline = stoi(job[1]);
        for (int j = min(deadline, maxDeadline); j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = true;
                count++;
                break;
            }
        }
    }
    return count;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> jobs(n, vector<string>(3));
        for (int i = 0; i < n; i++)
            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];
        cout << jobSequencing(jobs) << "\\n";
    }
    return 0;
}`
  },  'js-e3': {
    python: `def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_deadline = max(job[1] for job in jobs)
    slots = [False] * (max_deadline + 1)
    total_profit = 0

    for job in jobs:
        _, deadline, profit = job
        for i in range(min(deadline, max_deadline), 0, -1):
            if not slots[i]:
                slots[i] = True
                total_profit += profit
                break

    return total_profit

n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))

print(job_sequencing(jobs))`,

    java: `import java.util.*;
public class Main {
    public static int jobSequencing(String[][] jobs) {
        Arrays.sort(jobs, (a, b) -> Integer.parseInt(b[2]) - Integer.parseInt(a[2]));
        int maxDeadline = 0;
        for (String[] job : jobs)
            maxDeadline = Math.max(maxDeadline, Integer.parseInt(job[1]));
        boolean[] slots = new boolean[maxDeadline + 1];
        int totalProfit = 0;
        for (String[] job : jobs) {
            int deadline = Integer.parseInt(job[1]);
            int profit = Integer.parseInt(job[2]);
            for (int j = Math.min(deadline, maxDeadline); j >= 1; j--) {
                if (!slots[j]) {
                    slots[j] = true;
                    totalProfit += profit;
                    break;
                }
            }
        }
        return totalProfit;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] jobs = new String[n][3];
            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }
            System.out.println(jobSequencing(jobs));
        }
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;

int compare(const void *a, const void *b) {
    return ((Job *)b)->profit - ((Job *)a)->profit;
}

int jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {
    Job jobs[n];
    for (int i = 0; i < n; i++) {
        strcpy(jobs[i].id, jobId[i]);
        jobs[i].deadline = deadline[i];
        jobs[i].profit = profit[i];
    }
    qsort(jobs, n, sizeof(Job), compare);
    int maxDeadline = 0;
    for (int i = 0; i < n; i++)
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    int slots[maxDeadline + 1];
    for (int i = 0; i <= maxDeadline; i++)
        slots[i] = 0;
    int totalProfit = 0;
    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline; j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = 1;
                totalProfit += jobs[i].profit;
                break;
            }
        }
    }
    return totalProfit;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    char jobId[n][20];
    int deadline[n], profit[n];
    for (int i = 0; i < n; i++)
        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);
    printf("%d\\n", jobSequencing(jobId, deadline, profit, n));
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

int jobSequencing(vector<vector<string>>& jobs) {
    sort(jobs.begin(), jobs.end(), [](auto &a, auto &b) {
        return stoi(a[2]) > stoi(b[2]);
    });
    int maxDeadline = 0;
    for (auto &job : jobs)
        maxDeadline = max(maxDeadline, stoi(job[1]));
    vector<bool> slots(maxDeadline + 1, false);
    int totalProfit = 0;
    for (auto &job : jobs) {
        int deadline = stoi(job[1]);
        int profit = stoi(job[2]);
        for (int j = min(deadline, maxDeadline); j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = true;
                totalProfit += profit;
                break;
            }
        }
    }
    return totalProfit;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> jobs(n, vector<string>(3));
        for (int i = 0; i < n; i++)
            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];
        cout << jobSequencing(jobs) << "\\n";
    }
    return 0;
}`
  },  'js-e4': {
    python: `def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_deadline = max(job[1] for job in jobs)
    slots = [False] * (max_deadline + 1)
    scheduled = 0

    for job in jobs:
        _, deadline, _ = job
        for i in range(min(deadline, max_deadline), 0, -1):
            if not slots[i]:
                slots[i] = True
                scheduled += 1
                break

    return len(jobs) - scheduled

n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))

print(job_sequencing(jobs))`,

    java: `import java.util.*;

public class Main {
    public static int jobSequencing(String[][] jobs) {
        Arrays.sort(jobs, (a, b) -> Integer.parseInt(b[2]) - Integer.parseInt(a[2]));
        int maxDeadline = 0;
        for (String[] job : jobs)
            maxDeadline = Math.max(maxDeadline, Integer.parseInt(job[1]));
        boolean[] slots = new boolean[maxDeadline + 1];
        int scheduled = 0;
        for (String[] job : jobs) {
            int deadline = Integer.parseInt(job[1]);
            for (int j = Math.min(deadline, maxDeadline); j >= 1; j--) {
                if (!slots[j]) {
                    slots[j] = true;
                    scheduled++;
                    break;
                }
            }
        }
        return jobs.length - scheduled;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] jobs = new String[n][3];
            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }
            System.out.println(jobSequencing(jobs));
        }
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;

int compare(const void *a, const void *b) {
    return ((Job *)b)->profit - ((Job *)a)->profit;
}

int jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {
    Job jobs[n];
    for (int i = 0; i < n; i++) {
        strcpy(jobs[i].id, jobId[i]);
        jobs[i].deadline = deadline[i];
        jobs[i].profit = profit[i];
    }
    qsort(jobs, n, sizeof(Job), compare);
    int maxDeadline = 0;
    for (int i = 0; i < n; i++)
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    int slots[maxDeadline + 1];
    for (int i = 0; i <= maxDeadline; i++)
        slots[i] = 0;
    int scheduled = 0;
    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline; j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = 1;
                scheduled++;
                break;
            }
        }
    }
    return n - scheduled;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    char jobId[n][20];
    int deadline[n], profit[n];
    for (int i = 0; i < n; i++)
        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);
    printf("%d\\n", jobSequencing(jobId, deadline, profit, n));
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

int jobSequencing(vector<vector<string>>& jobs) {
    sort(jobs.begin(), jobs.end(), [](auto &a, auto &b) {
        return stoi(a[2]) > stoi(b[2]);
    });
    int maxDeadline = 0;
    for (auto &job : jobs)
        maxDeadline = max(maxDeadline, stoi(job[1]));
    vector<bool> slots(maxDeadline + 1, false);
    int scheduled = 0;
    for (auto &job : jobs) {
        int deadline = stoi(job[1]);
        for (int j = min(deadline, maxDeadline); j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = true;
                scheduled++;
                break;
            }
        }
    }
    return jobs.size() - scheduled;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> jobs(n, vector<string>(3));
        for (int i = 0; i < n; i++)
            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];
        cout << jobSequencing(jobs) << "\\n";
    }
    return 0;
}`
  },  'js-e5': {
    python: `def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_deadline = max(job[1] for job in jobs)
    slots = [False] * (max_deadline + 1)
    scheduled = 0
    for job in jobs:
        _, deadline, _ = job
        for i in range(min(deadline, max_deadline), 0, -1):
            if not slots[i]:
                slots[i] = True
                scheduled += 1
                break
    return scheduled == len(jobs)
n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))
print(str(job_sequencing(jobs)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean jobSequencing(String[][] jobs) {
        Arrays.sort(jobs, (a, b) -> Integer.parseInt(b[2]) - Integer.parseInt(a[2]));
        int maxDeadline = 0;
        for (String[] job : jobs)
            maxDeadline = Math.max(maxDeadline, Integer.parseInt(job[1]));
        boolean[] slots = new boolean[maxDeadline + 1];
        int scheduled = 0;
        for (String[] job : jobs) {
            int deadline = Integer.parseInt(job[1]);
            for (int j = Math.min(deadline, maxDeadline); j >= 1; j--) {
                if (!slots[j]) {
                    slots[j] = true;
                    scheduled++;
                    break;
                }
            }
        }
        return scheduled == jobs.length;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] jobs = new String[n][3];
            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }
            System.out.println(jobSequencing(jobs));
        }
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;
int compare(const void *a, const void *b) {
    return ((Job *)b)->profit - ((Job *)a)->profit;
}
bool jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {
    Job jobs[n];
    for (int i = 0; i < n; i++) {
        strcpy(jobs[i].id, jobId[i]);
        jobs[i].deadline = deadline[i];
        jobs[i].profit = profit[i];
    }
    qsort(jobs, n, sizeof(Job), compare);
    int maxDeadline = 0;
    for (int i = 0; i < n; i++)
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    int slots[maxDeadline + 1];
    for (int i = 0; i <= maxDeadline; i++)
        slots[i] = 0;
    int scheduled = 0;
    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline; j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = 1;
                scheduled++;
                break;
            }
        }
    }
    return scheduled == n;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    char jobId[n][20];
    int deadline[n], profit[n];
    for (int i = 0; i < n; i++)
        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);
    printf("%s\\n", jobSequencing(jobId, deadline, profit, n) ? "true" : "false");
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

bool jobSequencing(vector<vector<string>>& jobs) {
    sort(jobs.begin(), jobs.end(), [](auto &a, auto &b) {
        return stoi(a[2]) > stoi(b[2]);
    });
    int maxDeadline = 0;
    for (auto &job : jobs)
        maxDeadline = max(maxDeadline, stoi(job[1]));
    vector<bool> slots(maxDeadline + 1, false);
    int scheduled = 0;
    for (auto &job : jobs) {
        int deadline = stoi(job[1]);
        for (int j = min(deadline, maxDeadline); j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = true;
                scheduled++;
                break;
            }
        }
    }
    return scheduled == jobs.size();
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> jobs(n, vector<string>(3));
        for (int i = 0; i < n; i++)
            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];
        cout << (jobSequencing(jobs) ? "true" : "false") << "\\n";
    }
    return 0;
}`
  },  'js-m1': {
    python: `def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_deadline = max(job[1] for job in jobs)
    slots = [None] * (max_deadline + 1)

    for job in jobs:
        job_id, deadline, _ = job
        for i in range(min(deadline, max_deadline), 0, -1):
            if slots[i] is None:
                slots[i] = job_id
                break

    return [job for job in slots[1:] if job is not None]

n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))

print(*job_sequencing(jobs))`,

    java: `import java.util.*;
public class Main {
    public static List<String> jobSequencing(String[][] jobs) {
        Arrays.sort(jobs, (a, b) -> Integer.parseInt(b[2]) - Integer.parseInt(a[2]));
        int maxDeadline = 0;
        for (String[] job : jobs)
            maxDeadline = Math.max(maxDeadline, Integer.parseInt(job[1]));
        String[] slots = new String[maxDeadline + 1];
        for (String[] job : jobs) {
            String jobId = job[0];
            int deadline = Integer.parseInt(job[1]);
            for (int j = Math.min(deadline, maxDeadline); j >= 1; j--) {
                if (slots[j] == null) {
                    slots[j] = jobId;
                    break;
                }
            }
        }
        List<String> result = new ArrayList<>();
        for (int i = 1; i <= maxDeadline; i++)
            if (slots[i] != null)
                result.add(slots[i]);
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] jobs = new String[n][3];
            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }
            List<String> ans = jobSequencing(jobs);
            for (String job : ans)
                System.out.print(job + " ");
        }
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;

int compare(const void *a, const void *b) {
    return ((Job *)b)->profit - ((Job *)a)->profit;
}

void jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {
    Job jobs[n];
    for (int i = 0; i < n; i++) {
        strcpy(jobs[i].id, jobId[i]);
        jobs[i].deadline = deadline[i];
        jobs[i].profit = profit[i];
    }
    qsort(jobs, n, sizeof(Job), compare);
    int maxDeadline = 0;
    for (int i = 0; i < n; i++)
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    char slots[maxDeadline + 1][20];
    int filled[maxDeadline + 1];
    for (int i = 0; i <= maxDeadline; i++)
        filled[i] = 0;
    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline; j >= 1; j--) {
            if (!filled[j]) {
                filled[j] = 1;
                strcpy(slots[j], jobs[i].id);
                break;
            }
        }
    }
    for (int i = 1; i <= maxDeadline; i++)
        if (filled[i])
            printf("%s ", slots[i]);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    char jobId[n][20];
    int deadline[n], profit[n];
    for (int i = 0; i < n; i++)
        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);
    jobSequencing(jobId, deadline, profit, n);
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

vector<string> jobSequencing(vector<vector<string>>& jobs) {
    sort(jobs.begin(), jobs.end(), [](auto &a, auto &b) {
        return stoi(a[2]) > stoi(b[2]);
    });
    int maxDeadline = 0;
    for (auto &job : jobs)
        maxDeadline = max(maxDeadline, stoi(job[1]));
    vector<string> slots(maxDeadline + 1, "");
    for (auto &job : jobs) {
        string jobId = job[0];
        int deadline = stoi(job[1]);
        for (int j = min(deadline, maxDeadline); j >= 1; j--) {
            if (slots[j].empty()) {
                slots[j] = jobId;
                break;
            }
        }
    }
    vector<string> result;
    for (int i = 1; i <= maxDeadline; i++)
        if (!slots[i].empty())
            result.push_back(slots[i]);
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> jobs(n, vector<string>(3));
        for (int i = 0; i < n; i++)
            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];
        vector<string> ans = jobSequencing(jobs);
        for (string job : ans)
            cout << job << " ";
    }
    return 0;
}`
  },  'js-m2': {
    python: `def job_sequencing(jobs, k):
    jobs.sort(key=lambda x: x[2], reverse=True)
    slots = [False] * (k + 1)
    total_profit = 0

    for job in jobs:
        _, deadline, profit = job
        for i in range(min(deadline, k), 0, -1):
            if not slots[i]:
                slots[i] = True
                total_profit += profit
                break

    return total_profit

n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))
k = int(input())

print(job_sequencing(jobs, k))`,

    java: `import java.util.*;
public class Main {
    public static int jobSequencing(String[][] jobs, int k) {
        Arrays.sort(jobs, (a, b) -> Integer.parseInt(b[2]) - Integer.parseInt(a[2]));
        boolean[] slots = new boolean[k + 1];
        int totalProfit = 0;
        for (String[] job : jobs) {
            int deadline = Integer.parseInt(job[1]);
            int profit = Integer.parseInt(job[2]);
            for (int j = Math.min(deadline, k); j >= 1; j--) {
                if (!slots[j]) {
                    slots[j] = true;
                    totalProfit += profit;
                    break;
                }
            }
        }
        return totalProfit;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] jobs = new String[n][3];
            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }
            int k = sc.nextInt();
            System.out.println(jobSequencing(jobs, k));
        }
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;

int compare(const void *a, const void *b) {
    return ((Job *)b)->profit - ((Job *)a)->profit;
}

int jobSequencing(char jobId[][20], int deadline[], int profit[], int n, int k) {
    Job jobs[n];
    for (int i = 0; i < n; i++) {
        strcpy(jobs[i].id, jobId[i]);
        jobs[i].deadline = deadline[i];
        jobs[i].profit = profit[i];
    }
    qsort(jobs, n, sizeof(Job), compare);
    int slots[k + 1];
    for (int i = 0; i <= k; i++)
        slots[i] = 0;
    int totalProfit = 0;
    for (int i = 0; i < n; i++) {
        for (int j = (jobs[i].deadline < k ? jobs[i].deadline : k); j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = 1;
                totalProfit += jobs[i].profit;
                break;
            }
        }
    }
    return totalProfit;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    char jobId[n][20];
    int deadline[n], profit[n];
    for (int i = 0; i < n; i++)
        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);
    int k;
    scanf("%d", &k);
    printf("%d\\n", jobSequencing(jobId, deadline, profit, n, k));
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

int jobSequencing(vector<vector<string>>& jobs, int k) {
    sort(jobs.begin(), jobs.end(), [](auto &a, auto &b) {
        return stoi(a[2]) > stoi(b[2]);
    });
    vector<bool> slots(k + 1, false);
    int totalProfit = 0;
    for (auto &job : jobs) {
        int deadline = stoi(job[1]);
        int profit = stoi(job[2]);
        for (int j = min(deadline, k); j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = true;
                totalProfit += profit;
                break;
            }
        }
    }
    return totalProfit;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> jobs(n, vector<string>(3));
        for (int i = 0; i < n; i++)
            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];
        int k;
        cin >> k;
        cout << jobSequencing(jobs, k) << "\\n";
    }
    return 0;
}`
  },  'js-m3': {
    python: `def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_deadline = max(job[1] for job in jobs)
    slots = [False] * (max_deadline + 1)
    total_profit = 0
    for job in jobs:
        _, deadline, profit = job
        for i in range(min(deadline, max_deadline), 0, -1):
            if not slots[i]:
                slots[i] = True
                total_profit += profit
                break
    return total_profit
n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))
print(job_sequencing(jobs))`,

    java: `import java.util.*;
public class Main {
    public static int jobSequencing(String[][] jobs) {
        Arrays.sort(jobs, (a, b) -> Integer.parseInt(b[2]) - Integer.parseInt(a[2]));
        int maxDeadline = 0;
        for (String[] job : jobs)
            maxDeadline = Math.max(maxDeadline, Integer.parseInt(job[1]));
        boolean[] slots = new boolean[maxDeadline + 1];
        int totalProfit = 0;
        for (String[] job : jobs) {
            int deadline = Integer.parseInt(job[1]);
            int profit = Integer.parseInt(job[2]);
            for (int j = Math.min(deadline, maxDeadline); j >= 1; j--) {
                if (!slots[j]) {
                    slots[j] = true;
                    totalProfit += profit;
                    break;
                }
            }
        }
        return totalProfit;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] jobs = new String[n][3];
            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }
            System.out.println(jobSequencing(jobs));
        }
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;

int compare(const void *a, const void *b) {
    return ((Job *)b)->profit - ((Job *)a)->profit;
}

void jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {
    Job jobs[n];
    for (int i = 0; i < n; i++) {
        strcpy(jobs[i].id, jobId[i]);
        jobs[i].deadline = deadline[i];
        jobs[i].profit = profit[i];
    }
    qsort(jobs, n, sizeof(Job), compare);
    int maxDeadline = 0;
    for (int i = 0; i < n; i++)
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    char slots[maxDeadline + 1][20];
    int filled[maxDeadline + 1];
    for (int i = 0; i <= maxDeadline; i++)
        filled[i] = 0;
    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline; j >= 1; j--) {
            if (!filled[j]) {
                filled[j] = 1;
                strcpy(slots[j], jobs[i].id);
                break;
            }
        }
    }
    for (int i = 1; i <= maxDeadline; i++) {
        if (filled[i])
            printf("%s ", slots[i]);
        else
            printf("- ");
    }
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    char jobId[n][20];
    int deadline[n], profit[n];
    for (int i = 0; i < n; i++)
        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);
    jobSequencing(jobId, deadline, profit, n);
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;
int jobSequencing(vector<vector<string>>& jobs) {
    sort(jobs.begin(), jobs.end(), [](const vector<string>& a, const vector<string>& b) {
        return stoi(a[2]) > stoi(b[2]);
    });
    int maxDeadline = 0;
    for (const auto& job : jobs)
        maxDeadline = max(maxDeadline, stoi(job[1]));
    vector<bool> slots(maxDeadline + 1, false);
    int totalProfit = 0;
    for (const auto& job : jobs) {
        int deadline = stoi(job[1]);
        int profit = stoi(job[2]);
        for (int j = min(deadline, maxDeadline); j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = true;
                totalProfit += profit;
                break;
            }
        }
    }
    return totalProfit;
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> jobs(n, vector<string>(3));
        for (int i = 0; i < n; i++)
            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];
        cout << jobSequencing(jobs) << "\n";
    }
    return 0;
}`,
 'js-m4': {
    python: `def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_deadline = max(job[1] for job in jobs)
    slots = [False] * (max_deadline + 1)
    scheduled = 0

    for job in jobs:
        _, deadline, _ = job
        for i in range(min(deadline, max_deadline), 0, -1):
            if not slots[i]:
                slots[i] = True
                scheduled += 1
                break

    return max_deadline - scheduled

n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))

print(job_sequencing(jobs))`,

    java: `import java.util.*;
public class Main {
    public static int jobSequencing(String[][] jobs) {
        Arrays.sort(jobs, (a, b) -> Integer.parseInt(b[2]) - Integer.parseInt(a[2]));
        int maxDeadline = 0;
        for (String[] job : jobs)
            maxDeadline = Math.max(maxDeadline, Integer.parseInt(job[1]));
        boolean[] slots = new boolean[maxDeadline + 1];
        int scheduled = 0;
        for (String[] job : jobs) {
            int deadline = Integer.parseInt(job[1]);
            for (int j = Math.min(deadline, maxDeadline); j >= 1; j--) {
                if (!slots[j]) {
                    slots[j] = true;
                    scheduled++;
                    break;
                }
            }
        }
        return maxDeadline - scheduled;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] jobs = new String[n][3];
            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }
            System.out.println(jobSequencing(jobs));
        }
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;

int compare(const void *a, const void *b) {
    return ((Job *)b)->profit - ((Job *)a)->profit;
}

int jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {
    Job jobs[n];
    for (int i = 0; i < n; i++) {
        strcpy(jobs[i].id, jobId[i]);
        jobs[i].deadline = deadline[i];
        jobs[i].profit = profit[i];
    }
    qsort(jobs, n, sizeof(Job), compare);
    int maxDeadline = 0;
    for (int i = 0; i < n; i++)
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    int slots[maxDeadline + 1];
    for (int i = 0; i <= maxDeadline; i++)
        slots[i] = 0;
    int scheduled = 0;
    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline; j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = 1;
                scheduled++;
                break;
            }
        }
    }
    return maxDeadline - scheduled;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    char jobId[n][20];
    int deadline[n], profit[n];
    for (int i = 0; i < n; i++)
        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);
    printf("%d\\n", jobSequencing(jobId, deadline, profit, n));
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

int jobSequencing(vector<vector<string>>& jobs) {
    sort(jobs.begin(), jobs.end(), [](auto &a, auto &b) {
        return stoi(a[2]) > stoi(b[2]);
    });
    int maxDeadline = 0;
    for (auto &job : jobs)
        maxDeadline = max(maxDeadline, stoi(job[1]));
    vector<bool> slots(maxDeadline + 1, false);
    int scheduled = 0;
    for (auto &job : jobs) {
        int deadline = stoi(job[1]);
        for (int j = min(deadline, maxDeadline); j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = true;
                scheduled++;
                break;
            }
        }
    }
    return maxDeadline - scheduled;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> jobs(n, vector<string>(3));
        for (int i = 0; i < n; i++)
            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];
        cout << jobSequencing(jobs) << "\\n";
    }
    return 0;
}`
  },
  },  'js-m5': {
    python: `def job_sequencing(jobs, p):
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_deadline = max(job[1] for job in jobs)
    slots = [False] * (max_deadline + 1)
    total_profit = 0

    for job in jobs:
        _, deadline, profit = job
        for i in range(min(deadline, max_deadline), 0, -1):
            if not slots[i]:
                slots[i] = True
                total_profit += profit
                break

    return total_profit >= p

n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))
p = int(input())

print(str(job_sequencing(jobs, p)).lower())`,

    java: `import java.util.*;

public class Main {
    public static boolean jobSequencing(String[][] jobs, int p) {
        Arrays.sort(jobs, (a, b) -> Integer.parseInt(b[2]) - Integer.parseInt(a[2]));
        int maxDeadline = 0;
        for (String[] job : jobs)
            maxDeadline = Math.max(maxDeadline, Integer.parseInt(job[1]));
        boolean[] slots = new boolean[maxDeadline + 1];
        int totalProfit = 0;
        for (String[] job : jobs) {
            int deadline = Integer.parseInt(job[1]);
            int profit = Integer.parseInt(job[2]);
            for (int j = Math.min(deadline, maxDeadline); j >= 1; j--) {
                if (!slots[j]) {
                    slots[j] = true;
                    totalProfit += profit;
                    break;
                }
            }
        }
        return totalProfit >= p;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] jobs = new String[n][3];
            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }
            int p = sc.nextInt();
            System.out.println(jobSequencing(jobs, p));
        }
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;

int compare(const void *a, const void *b) {
    return ((Job *)b)->profit - ((Job *)a)->profit;
}

bool jobSequencing(char jobId[][20], int deadline[], int profit[], int n, int p) {
    Job jobs[n];
    for (int i = 0; i < n; i++) {
        strcpy(jobs[i].id, jobId[i]);
        jobs[i].deadline = deadline[i];
        jobs[i].profit = profit[i];
    }
    qsort(jobs, n, sizeof(Job), compare);
    int maxDeadline = 0;
    for (int i = 0; i < n; i++)
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    int slots[maxDeadline + 1];
    for (int i = 0; i <= maxDeadline; i++)
        slots[i] = 0;
    int totalProfit = 0;
    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline; j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = 1;
                totalProfit += jobs[i].profit;
                break;
            }
        }
    }
    return totalProfit >= p;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    char jobId[n][20];
    int deadline[n], profit[n];
    for (int i = 0; i < n; i++)
        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);
    int p;
    scanf("%d", &p);
    printf("%s\\n", jobSequencing(jobId, deadline, profit, n, p) ? "true" : "false");
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

bool jobSequencing(vector<vector<string>>& jobs, int p) {
    sort(jobs.begin(), jobs.end(), [](auto &a, auto &b) {
        return stoi(a[2]) > stoi(b[2]);
    });
    int maxDeadline = 0;
    for (auto &job : jobs)
        maxDeadline = max(maxDeadline, stoi(job[1]));
    vector<bool> slots(maxDeadline + 1, false);
    int totalProfit = 0;
    for (auto &job : jobs) {
        int deadline = stoi(job[1]);
        int profit = stoi(job[2]);
        for (int j = min(deadline, maxDeadline); j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = true;
                totalProfit += profit;
                break;
            }
        }
    }
    return totalProfit >= p;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> jobs(n, vector<string>(3));
        for (int i = 0; i < n; i++)
            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];
        int p;
        cin >> p;
        cout << (jobSequencing(jobs, p) ? "true" : "false") << "\\n";
    }
    return 0;
}`
  },'js-h1': {
  python: `def find(parent, x):
    if parent[x] != x:
        parent[x] = find(parent, parent[x])
    return parent[x]

def union(parent, u, v):
    parent[find(parent, u)] = find(parent, v)

def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_deadline = max(job[1] for job in jobs)
    parent = list(range(max_deadline + 1))
    total_profit = 0

    for _, deadline, profit in jobs:
        slot = find(parent, min(deadline, max_deadline))
        if slot > 0:
            total_profit += profit
            union(parent, slot, slot - 1)

    return total_profit

n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))

print(job_sequencing(jobs))`,

  java: `import java.util.*;
public class Main {

    static int[] parent;

    static int find(int x) {
        if (parent[x] != x)
            parent[x] = find(parent[x]);
        return parent[x];
    }

    static void union(int u, int v) {
        parent[find(u)] = find(v);
    }

    public static int jobSequencing(String[][] jobs) {
        Arrays.sort(jobs, (a, b) -> Integer.parseInt(b[2]) - Integer.parseInt(a[2]));

        int maxDeadline = 0;
        for (String[] job : jobs)
            maxDeadline = Math.max(maxDeadline, Integer.parseInt(job[1]));

        parent = new int[maxDeadline + 1];
        for (int i = 0; i <= maxDeadline; i++)
            parent[i] = i;

        int totalProfit = 0;

        for (String[] job : jobs) {
            int deadline = Integer.parseInt(job[1]);
            int profit = Integer.parseInt(job[2]);

            int slot = find(Math.min(deadline, maxDeadline));

            if (slot > 0) {
                totalProfit += profit;
                union(slot, slot - 1);
            }
        }

        return totalProfit;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();

            String[][] jobs = new String[n][3];

            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }

            System.out.println(jobSequencing(jobs));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;

int compare(const void *a,const void *b){
    return ((Job*)b)->profit-((Job*)a)->profit;
}

int find(int parent[],int x){
    if(parent[x]!=x)
        parent[x]=find(parent,parent[x]);
    return parent[x];
}

void unite(int parent[],int u,int v){
    parent[find(parent,u)]=find(parent,v);
}

int jobSequencing(char jobId[][20],int deadline[],int profit[],int n){
    Job jobs[n];

    for(int i=0;i<n;i++){
        strcpy(jobs[i].id,jobId[i]);
        jobs[i].deadline=deadline[i];
        jobs[i].profit=profit[i];
    }

    qsort(jobs,n,sizeof(Job),compare);

    int maxDeadline=0;

    for(int i=0;i<n;i++)
        if(jobs[i].deadline>maxDeadline)
            maxDeadline=jobs[i].deadline;

    int parent[maxDeadline+1];

    for(int i=0;i<=maxDeadline;i++)
        parent[i]=i;

    int totalProfit=0;

    for(int i=0;i<n;i++){
        int slot=find(parent,jobs[i].deadline<maxDeadline?jobs[i].deadline:maxDeadline);

        if(slot>0){
            totalProfit+=jobs[i].profit;
            unite(parent,slot,slot-1);
        }
    }

    return totalProfit;
}

int main(){
    int n;

    if(scanf("%d",&n)!=1)
        return 0;

    char jobId[n][20];
    int deadline[n],profit[n];

    for(int i=0;i<n;i++)
        scanf("%s %d %d",jobId[i],&deadline[i],&profit[i]);

    printf("%d\\n",jobSequencing(jobId,deadline,profit,n));

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

vector<int> parent;

int find(int x){
    if(parent[x]!=x)
        parent[x]=find(parent[x]);
    return parent[x];
}

void unite(int u,int v){
    parent[find(u)]=find(v);
}

int jobSequencing(vector<vector<string>>& jobs){
    sort(jobs.begin(),jobs.end(),[](auto &a,auto &b){
        return stoi(a[2])>stoi(b[2]);
    });

    int maxDeadline=0;

    for(auto &job:jobs)
        maxDeadline=max(maxDeadline,stoi(job[1]));

    parent.resize(maxDeadline+1);

    for(int i=0;i<=maxDeadline;i++)
        parent[i]=i;

    int totalProfit=0;

    for(auto &job:jobs){
        int deadline=stoi(job[1]);
        int profit=stoi(job[2]);

        int slot=find(min(deadline,maxDeadline));

        if(slot>0){
            totalProfit+=profit;
            unite(slot,slot-1);
        }
    }

    return totalProfit;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if(cin>>n){
        vector<vector<string>> jobs(n,vector<string>(3));

        for(int i=0;i<n;i++)
            cin>>jobs[i][0]>>jobs[i][1]>>jobs[i][2];

        cout<<jobSequencing(jobs)<<"\\n";
    }

    return 0;
}`
},'js-h2': {
    python: `def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_deadline = max(job[1] for job in jobs)
    slots = [None] * (max_deadline + 1)

    for job in jobs:
        job_id, deadline, _ = job
        for i in range(min(deadline, max_deadline), 0, -1):
            if slots[i] is None:
                slots[i] = job_id
                break

    return [job if job is not None else "-" for job in slots[1:]]

n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))

print(*job_sequencing(jobs))`,

    java: `import java.util.*;

public class Main {
    public static List<String> jobSequencing(String[][] jobs) {
        Arrays.sort(jobs, (a, b) -> Integer.parseInt(b[2]) - Integer.parseInt(a[2]));
        int maxDeadline = 0;
        for (String[] job : jobs)
            maxDeadline = Math.max(maxDeadline, Integer.parseInt(job[1]));
        String[] slots = new String[maxDeadline + 1];
        for (String[] job : jobs) {
            String jobId = job[0];
            int deadline = Integer.parseInt(job[1]);
            for (int j = Math.min(deadline, maxDeadline); j >= 1; j--) {
                if (slots[j] == null) {
                    slots[j] = jobId;
                    break;
                }
            }
        }
        List<String> result = new ArrayList<>();
        for (int i = 1; i <= maxDeadline; i++)
            result.add(slots[i] == null ? "-" : slots[i]);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] jobs = new String[n][3];
            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }
            List<String> ans = jobSequencing(jobs);
            for (String job : ans)
                System.out.print(job + " ");
        }
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;

int compare(const void *a, const void *b) {
    return ((Job *)b)->profit - ((Job *)a)->profit;
}

void jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {
    Job jobs[n];
    for (int i = 0; i < n; i++) {
        strcpy(jobs[i].id, jobId[i]);
        jobs[i].deadline = deadline[i];
        jobs[i].profit = profit[i];
    }
    qsort(jobs, n, sizeof(Job), compare);
    int maxDeadline = 0;
    for (int i = 0; i < n; i++)
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    char slots[maxDeadline + 1][20];
    int filled[maxDeadline + 1];
    for (int i = 0; i <= maxDeadline; i++)
        filled[i] = 0;
    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline; j >= 1; j--) {
            if (!filled[j]) {
                filled[j] = 1;
                strcpy(slots[j], jobs[i].id);
                break;
            }
        }
    }
    for (int i = 1; i <= maxDeadline; i++) {
        if (filled[i])
            printf("%s ", slots[i]);
        else
            printf("- ");
    }
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    char jobId[n][20];
    int deadline[n], profit[n];
    for (int i = 0; i < n; i++)
        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);
    jobSequencing(jobId, deadline, profit, n);
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

vector<string> jobSequencing(vector<vector<string>>& jobs) {
    sort(jobs.begin(), jobs.end(), [](auto &a, auto &b) {
        return stoi(a[2]) > stoi(b[2]);
    });
    int maxDeadline = 0;
    for (auto &job : jobs)
        maxDeadline = max(maxDeadline, stoi(job[1]));
    vector<string> slots(maxDeadline + 1, "");
    for (auto &job : jobs) {
        string jobId = job[0];
        int deadline = stoi(job[1]);
        for (int j = min(deadline, maxDeadline); j >= 1; j--) {
            if (slots[j].empty()) {
                slots[j] = jobId;
                break;
            }
        }
    }
    vector<string> result;
    for (int i = 1; i <= maxDeadline; i++)
        result.push_back(slots[i].empty() ? "-" : slots[i]);
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> jobs(n, vector<string>(3));
        for (int i = 0; i < n; i++)
            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];
        vector<string> ans = jobSequencing(jobs);
        for (string job : ans)
            cout << job << " ";
    }
    return 0;
}`
  },   'js-h3': {
    python: `def job_sequencing(jobs):
    jobs.sort(key=lambda x: (-x[2], x[0]))
    max_deadline = max(job[1] for job in jobs)
    slots = [None] * (max_deadline + 1)

    for job in jobs:
        job_id, deadline, _ = job
        for i in range(min(deadline, max_deadline), 0, -1):
            if slots[i] is None:
                slots[i] = job_id
                break

    return [job for job in slots[1:] if job is not None]

n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))

print(*job_sequencing(jobs))`,

    java: `import java.util.*;
public class Main {
    public static List<String> jobSequencing(String[][] jobs) {
        Arrays.sort(jobs, (a, b) -> {
            int p = Integer.parseInt(b[2]) - Integer.parseInt(a[2]);
            if (p != 0)
                return p;
            return a[0].compareTo(b[0]);
        });
        int maxDeadline = 0;
        for (String[] job : jobs)
            maxDeadline = Math.max(maxDeadline, Integer.parseInt(job[1]));
        String[] slots = new String[maxDeadline + 1];
        for (String[] job : jobs) {
            String jobId = job[0];
            int deadline = Integer.parseInt(job[1]);
            for (int j = Math.min(deadline, maxDeadline); j >= 1; j--) {
                if (slots[j] == null) {
                    slots[j] = jobId;
                    break;
                }
            }
        }
        List<String> result = new ArrayList<>();
        for (int i = 1; i <= maxDeadline; i++)
            if (slots[i] != null)
                result.add(slots[i]);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] jobs = new String[n][3];
            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }
            List<String> ans = jobSequencing(jobs);
            for (String job : ans)
                System.out.print(job + " ");
        }
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;

int compare(const void *a, const void *b) {
    Job *x = (Job *)a;
    Job *y = (Job *)b;
    if (y->profit != x->profit)
        return y->profit - x->profit;
    return strcmp(x->id, y->id);
}

void jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {
    Job jobs[n];
    for (int i = 0; i < n; i++) {
        strcpy(jobs[i].id, jobId[i]);
        jobs[i].deadline = deadline[i];
        jobs[i].profit = profit[i];
    }
    qsort(jobs, n, sizeof(Job), compare);
    int maxDeadline = 0;
    for (int i = 0; i < n; i++)
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    char slots[maxDeadline + 1][20];
    int filled[maxDeadline + 1];
    for (int i = 0; i <= maxDeadline; i++)
        filled[i] = 0;
    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline; j >= 1; j--) {
            if (!filled[j]) {
                filled[j] = 1;
                strcpy(slots[j], jobs[i].id);
                break;
            }
        }
    }
    for (int i = 1; i <= maxDeadline; i++)
        if (filled[i])
            printf("%s ", slots[i]);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    char jobId[n][20];
    int deadline[n], profit[n];
    for (int i = 0; i < n; i++)
        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);
    jobSequencing(jobId, deadline, profit, n);
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

vector<string> jobSequencing(vector<vector<string>>& jobs) {
    sort(jobs.begin(), jobs.end(), [](auto &a, auto &b) {
        if (stoi(a[2]) != stoi(b[2]))
            return stoi(a[2]) > stoi(b[2]);
        return a[0] < b[0];
    });
    int maxDeadline = 0;
    for (auto &job : jobs)
        maxDeadline = max(maxDeadline, stoi(job[1]));
    vector<string> slots(maxDeadline + 1, "");
    for (auto &job : jobs) {
        string jobId = job[0];
        int deadline = stoi(job[1]);
        for (int j = min(deadline, maxDeadline); j >= 1; j--) {
            if (slots[j].empty()) {
                slots[j] = jobId;
                break;
            }
        }
    }
    vector<string> result;
    for (int i = 1; i <= maxDeadline; i++)
        if (!slots[i].empty())
            result.push_back(slots[i]);
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> jobs(n, vector<string>(3));
        for (int i = 0; i < n; i++)
            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];
        vector<string> ans = jobSequencing(jobs);
        for (string job : ans)
            cout << job << " ";
    }
    return 0;
}`
  },   'js-h4': {
    python: `def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_deadline = max(job[1] for job in jobs)
    slots = [False] * (max_deadline + 1)
    scheduled = 0
    total_profit = 0

    for job in jobs:
        _, deadline, profit = job
        for i in range(min(deadline, max_deadline), 0, -1):
            if not slots[i]:
                slots[i] = True
                scheduled += 1
                total_profit += profit
                break

    return scheduled, total_profit

n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))

scheduled, total_profit = job_sequencing(jobs)
print(scheduled, total_profit)`,

    java: `import java.util.*;
public class Main {
    public static int[] jobSequencing(String[][] jobs) {
        Arrays.sort(jobs, (a, b) -> Integer.parseInt(b[2]) - Integer.parseInt(a[2]));
        int maxDeadline = 0;
        for (String[] job : jobs)
            maxDeadline = Math.max(maxDeadline, Integer.parseInt(job[1]));
        boolean[] slots = new boolean[maxDeadline + 1];
        int scheduled = 0;
        int totalProfit = 0;
        for (String[] job : jobs) {
            int deadline = Integer.parseInt(job[1]);
            int profit = Integer.parseInt(job[2]);
            for (int j = Math.min(deadline, maxDeadline); j >= 1; j--) {
                if (!slots[j]) {
                    slots[j] = true;
                    scheduled++;
                    totalProfit += profit;
                    break;
                }
            }
        }
        return new int[]{scheduled, totalProfit};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] jobs = new String[n][3];
            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }
            int[] ans = jobSequencing(jobs);
            System.out.println(ans[0] + " " + ans[1]);
        }
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;

int compare(const void *a, const void *b) {
    return ((Job *)b)->profit - ((Job *)a)->profit;
}

void jobSequencing(char jobId[][20], int deadline[], int profit[], int n, int result[]) {
    Job jobs[n];
    for (int i = 0; i < n; i++) {
        strcpy(jobs[i].id, jobId[i]);
        jobs[i].deadline = deadline[i];
        jobs[i].profit = profit[i];
    }
    qsort(jobs, n, sizeof(Job), compare);
    int maxDeadline = 0;
    for (int i = 0; i < n; i++)
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    int slots[maxDeadline + 1];
    for (int i = 0; i <= maxDeadline; i++)
        slots[i] = 0;
    int scheduled = 0;
    int totalProfit = 0;
    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline; j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = 1;
                scheduled++;
                totalProfit += jobs[i].profit;
                break;
            }
        }
    }
    result[0] = scheduled;
    result[1] = totalProfit;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    char jobId[n][20];
    int deadline[n], profit[n];
    for (int i = 0; i < n; i++)
        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);
    int result[2];
    jobSequencing(jobId, deadline, profit, n, result);
    printf("%d %d\\n", result[0], result[1]);
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

pair<int, int> jobSequencing(vector<vector<string>>& jobs) {
    sort(jobs.begin(), jobs.end(), [](auto &a, auto &b) {
        return stoi(a[2]) > stoi(b[2]);
    });
    int maxDeadline = 0;
    for (auto &job : jobs)
        maxDeadline = max(maxDeadline, stoi(job[1]));
    vector<bool> slots(maxDeadline + 1, false);
    int scheduled = 0;
    int totalProfit = 0;
    for (auto &job : jobs) {
        int deadline = stoi(job[1]);
        int profit = stoi(job[2]);
        for (int j = min(deadline, maxDeadline); j >= 1; j--) {
            if (!slots[j]) {
                slots[j] = true;
                scheduled++;
                totalProfit += profit;
                break;
            }
        }
    }
    return {scheduled, totalProfit};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> jobs(n, vector<string>(3));
        for (int i = 0; i < n; i++)
            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];
        pair<int, int> ans = jobSequencing(jobs);
        cout << ans.first << " " << ans.second << "\\n";
    }
    return 0;
}`
  },  'js-h5': {
    python: `def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_deadline = max(job[1] for job in jobs)
    slots = [None] * (max_deadline + 1)
    total_profit = 0

    for job in jobs:
        job_id, deadline, profit = job
        for i in range(min(deadline, max_deadline), 0, -1):
            if slots[i] is None:
                slots[i] = job_id
                total_profit += profit
                break

    schedule = [job for job in slots[1:] if job is not None]
    return schedule, total_profit

n = int(input())
jobs = []
for _ in range(n):
    job_id, deadline, profit = input().split()
    jobs.append((job_id, int(deadline), int(profit)))

schedule, total_profit = job_sequencing(jobs)
print(*schedule)
print(total_profit)`,

    java: `import java.util.*;
public class Main {
    public static Object[] jobSequencing(String[][] jobs) {
        Arrays.sort(jobs, (a, b) -> Integer.parseInt(b[2]) - Integer.parseInt(a[2]));
        int maxDeadline = 0;
        for (String[] job : jobs)
            maxDeadline = Math.max(maxDeadline, Integer.parseInt(job[1]));
        String[] slots = new String[maxDeadline + 1];
        int totalProfit = 0;
        for (String[] job : jobs) {
            String jobId = job[0];
            int deadline = Integer.parseInt(job[1]);
            int profit = Integer.parseInt(job[2]);
            for (int j = Math.min(deadline, maxDeadline); j >= 1; j--) {
                if (slots[j] == null) {
                    slots[j] = jobId;
                    totalProfit += profit;
                    break;
                }
            }
        }
        List<String> schedule = new ArrayList<>();
        for (int i = 1; i <= maxDeadline; i++)
            if (slots[i] != null)
                schedule.add(slots[i]);
        return new Object[]{schedule, totalProfit};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] jobs = new String[n][3];
            for (int i = 0; i < n; i++) {
                jobs[i][0] = sc.next();
                jobs[i][1] = sc.next();
                jobs[i][2] = sc.next();
            }
            Object[] ans = jobSequencing(jobs);
            @SuppressWarnings("unchecked")
            List<String> schedule = (List<String>) ans[0];
            for (String job : schedule)
                System.out.print(job + " ");
            System.out.println();
            System.out.println(ans[1]);
        }
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char id[20];
    int deadline;
    int profit;
} Job;

int compare(const void *a, const void *b) {
    return ((Job *)b)->profit - ((Job *)a)->profit;
}

void jobSequencing(char jobId[][20], int deadline[], int profit[], int n) {
    Job jobs[n];
    for (int i = 0; i < n; i++) {
        strcpy(jobs[i].id, jobId[i]);
        jobs[i].deadline = deadline[i];
        jobs[i].profit = profit[i];
    }
    qsort(jobs, n, sizeof(Job), compare);
    int maxDeadline = 0;
    for (int i = 0; i < n; i++)
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    char slots[maxDeadline + 1][20];
    int filled[maxDeadline + 1];
    for (int i = 0; i <= maxDeadline; i++)
        filled[i] = 0;
    int totalProfit = 0;
    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline; j >= 1; j--) {
            if (!filled[j]) {
                filled[j] = 1;
                strcpy(slots[j], jobs[i].id);
                totalProfit += jobs[i].profit;
                break;
            }
        }
    }
    for (int i = 1; i <= maxDeadline; i++)
        if (filled[i])
            printf("%s ", slots[i]);
    printf("\\n%d\\n", totalProfit);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    char jobId[n][20];
    int deadline[n], profit[n];
    for (int i = 0; i < n; i++)
        scanf("%s %d %d", jobId[i], &deadline[i], &profit[i]);
    jobSequencing(jobId, deadline, profit, n);
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

pair<vector<string>, int> jobSequencing(vector<vector<string>>& jobs) {
    sort(jobs.begin(), jobs.end(), [](auto &a, auto &b) {
        return stoi(a[2]) > stoi(b[2]);
    });
    int maxDeadline = 0;
    for (auto &job : jobs)
        maxDeadline = max(maxDeadline, stoi(job[1]));
    vector<string> slots(maxDeadline + 1, "");
    int totalProfit = 0;
    for (auto &job : jobs) {
        string jobId = job[0];
        int deadline = stoi(job[1]);
        int profit = stoi(job[2]);
        for (int j = min(deadline, maxDeadline); j >= 1; j--) {
            if (slots[j].empty()) {
                slots[j] = jobId;
                totalProfit += profit;
                break;
            }
        }
    }
    vector<string> schedule;
    for (int i = 1; i <= maxDeadline; i++)
        if (!slots[i].empty())
            schedule.push_back(slots[i]);
    return {schedule, totalProfit};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> jobs(n, vector<string>(3));
        for (int i = 0; i < n; i++)
            cin >> jobs[i][0] >> jobs[i][1] >> jobs[i][2];
        auto ans = jobSequencing(jobs);
        for (string job : ans.first)
            cout << job << " ";
        cout << "\\n" << ans.second << "\\n";
    }
    return 0;
}`
  }
};