export const ASPcodeSnippets = {
    c: `#include <stdio.h>
#include <stdlib.h>

struct Activity {
    int start, finish;
};

int compare(const void *a, const void *b) {
    struct Activity *x = (struct Activity *)a;
    struct Activity *y = (struct Activity *)b;
    return (x->finish - y->finish);
}

int main() {
    struct Activity activities[] = {{1, 2}, {3, 4}, {0, 6}, {5, 7}, {8, 9}, {5, 9}};
    int n = sizeof(activities) / sizeof(activities[0]);

    qsort(activities, n, sizeof(activities[0]), compare);

    int count = 0;
    int lastFinish = -1;

    for (int i = 0; i < n; i++) {
        if (activities[i].start >= lastFinish) {
            count++;
            lastFinish = activities[i].finish;
        }
    }

    printf("%d", count);
    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Activity {
    int start, finish;
};

int main() {
    vector<Activity> activities = {{1, 2}, {3, 4}, {0, 6}, {5, 7}, {8, 9}, {5, 9}};
    sort(activities.begin(), activities.end(), [](const Activity &a, const Activity &b) {
        return a.finish < b.finish;
    });

    int count = 0;
    int lastFinish = -1;

    for (auto &a : activities) {
        if (a.start >= lastFinish) {
            count++;
            lastFinish = a.finish;
        }
    }

    cout << count;
    return 0;
}
`,

    python: `activities = [(1, 2), (3, 4), (0, 6), (5, 7), (8, 9), (5, 9)]
activities.sort(key=lambda x: x[1])

count = 0
last_finish = -1

for start, finish in activities:
    if start >= last_finish:
        count += 1
        last_finish = finish

print(count)
`,

    java: `import java.util.*;

class Activity {
    int start, finish;
    Activity(int start, int finish) {
        this.start = start;
        this.finish = finish;
    }
}

public class ActivitySelection {
    public static void main(String[] args) {
        ArrayList<Activity> activities = new ArrayList<>();
        activities.add(new Activity(1, 2));
        activities.add(new Activity(3, 4));
        activities.add(new Activity(0, 6));
        activities.add(new Activity(5, 7));
        activities.add(new Activity(8, 9));
        activities.add(new Activity(5, 9));

        activities.sort(Comparator.comparingInt(a -> a.finish));

        int count = 0;
        int lastFinish = -1;

        for (Activity a : activities) {
            if (a.start >= lastFinish) {
                count++;
                lastFinish = a.finish;
            }
        }

        System.out.println(count);
    }
}
`
};
