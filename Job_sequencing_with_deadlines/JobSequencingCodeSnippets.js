export const JScodeSnippets = {
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
    char id;
    int deadline;
    int profit;
} Job;
int compare(const void *a, const void *b) {
    return ((Job *)b)->profit - ((Job *)a)->profit;
}
void jobSequencing(Job jobs[], int n) {
    qsort(jobs, n, sizeof(Job), compare);
    int maxDeadline = 0;
    for (int i = 0; i < n; i++)
        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    int slot[maxDeadline + 1];
    for (int i = 0; i <= maxDeadline; i++)
        slot[i] = 0;
    int totalProfit = 0;
    printf("Scheduled Jobs: ");
    for (int i = 0; i < n; i++) {
        for (int j = jobs[i].deadline; j > 0; j--) {
            if (!slot[j]) {
                slot[j] = 1;
                printf("%c ", jobs[i].id);
                totalProfit += jobs[i].profit;
                break;
            }
        }
    }
    printf("\\nMaximum Profit: %d\\n", totalProfit);
}
int main() {
    Job jobs[] = {
        {'A', 2, 100},
        {'B', 1, 19},
        {'C', 2, 27},
        {'D', 1, 25},
        {'E', 3, 15}
    };
    int n = sizeof(jobs) / sizeof(jobs[0]);
    jobSequencing(jobs, n);
    return 0;
}
`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
struct Job {
    char id;
    int deadline;
    int profit;
};
bool compare(Job a, Job b) {
    return a.profit > b.profit;
}
void jobSequencing(vector<Job>& jobs) {
    sort(jobs.begin(), jobs.end(), compare);
    int maxDeadline = 0;
    for (auto &job : jobs)
        maxDeadline = max(maxDeadline, job.deadline);

    vector<int> slot(maxDeadline + 1, 0);

    int totalProfit = 0;

    cout << "Scheduled Jobs: ";

    for (auto &job : jobs) {
        for (int j = job.deadline; j > 0; j--) {
            if (!slot[j]) {
                slot[j] = 1;
                cout << job.id << " ";
                totalProfit += job.profit;
                break;
            }
        }
    }

    cout << "\\nMaximum Profit: " << totalProfit << endl;
}

int main() {
    vector<Job> jobs = {
        {'A',2,100},
        {'B',1,19},
        {'C',2,27},
        {'D',1,25},
        {'E',3,15}
    };

    jobSequencing(jobs);

    return 0;
}
`,
    python: `def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_deadline = max(job[1] for job in jobs)
    slots = [False] * (max_deadline + 1)
    total_profit = 0
    scheduled_jobs = []
    for job_id, deadline, profit in jobs:
        for slot in range(deadline, 0, -1):
            if not slots[slot]:
                slots[slot] = True
                scheduled_jobs.append(job_id)
                total_profit += profit
                break
    print("Scheduled Jobs:", *scheduled_jobs)
    print("Maximum Profit:", total_profit)
jobs = [
    ('A',2,100),
    ('B',1,19),
    ('C',2,27),
    ('D',1,25),
    ('E',3,15)
]
job_sequencing(jobs)
`,
    java: `import java.util.*;
class Job {
    char id;
    int deadline;
    int profit;
    Job(char id, int deadline, int profit) {
        this.id = id;
        this.deadline = deadline;
        this.profit = profit;
    }
}
public class Main {
    public static void jobSequencing(Job[] jobs) {
        Arrays.sort(jobs, (a, b) -> b.profit - a.profit);
        int maxDeadline = 0;
        for (Job job : jobs)
            maxDeadline = Math.max(maxDeadline, job.deadline);
        boolean[] slot = new boolean[maxDeadline + 1];
        int totalProfit = 0;
        System.out.print("Scheduled Jobs: ");
        for (Job job : jobs) {
            for (int j = job.deadline; j > 0; j--) {
                if (!slot[j]) {
                    slot[j] = true;
                    System.out.print(job.id + " ");
                    totalProfit += job.profit;
                    break;
                }
            }
        }
        System.out.println();
        System.out.println("Maximum Profit: " + totalProfit);
    }

    public static void main(String[] args) {
        Job[] jobs = {
            new Job('A',2,100),
            new Job('B',1,19),
            new Job('C',2,27),
            new Job('D',1,25),
            new Job('E',3,15)
        };
        jobSequencing(jobs);
    }
}
`
};