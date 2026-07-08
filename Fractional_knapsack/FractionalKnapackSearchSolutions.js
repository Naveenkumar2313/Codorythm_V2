export const FractionalKnapackSearchSolutions = {
'fk-e1': {
  python: `def fractional_knapsack(values, weights, capacity):
    items = []
    for i in range(len(values)):
        items.append((values[i] / weights[i], values[i], weights[i]))
    items.sort(reverse=True)
    total_value = 0.0
    for ratio, value, weight in items:
        if capacity >= weight:
            total_value += value
            capacity -= weight
        else:
            total_value += ratio * capacity
            break
    return round(total_value, 2)

n = int(input())
values = list(map(int, input().split()))
weights = list(map(int, input().split()))
capacity = int(input())
print(fractional_knapsack(values, weights, capacity))`,
  java: `import java.util.*;

public class Solution {
    static class Item {
        int value, weight;
        double ratio;

        Item(int value, int weight) {
            this.value = value;
            this.weight = weight;
            this.ratio = (double) value / weight;
        }
    }

    public static double fractionalKnapsack(int[] values, int[] weights, int capacity) {
        int n = values.length;
        Item[] items = new Item[n];

        for (int i = 0; i < n; i++) {
            items[i] = new Item(values[i], weights[i]);
        }

        Arrays.sort(items, (a, b) -> Double.compare(b.ratio, a.ratio));

        double totalValue = 0.0;

        for (Item item : items) {
            if (capacity >= item.weight) {
                totalValue += item.value;
                capacity -= item.weight;
            } else {
                totalValue += item.ratio * capacity;
                break;
            }
        }

        return totalValue;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] values = new int[n];
        int[] weights = new int[n];

        for (int i = 0; i < n; i++) values[i] = sc.nextInt();
        for (int i = 0; i < n; i++) weights[i] = sc.nextInt();

        int capacity = sc.nextInt();

        System.out.printf("%.2f%n", fractionalKnapsack(values, weights, capacity));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int value;
    int weight;
    double ratio;
} Item;

int compare(const void* a, const void* b) {
    Item* x = (Item*)a;
    Item* y = (Item*)b;
    if (y->ratio > x->ratio) return 1;
    if (y->ratio < x->ratio) return -1;
    return 0;
}

double fractionalKnapsack(int values[], int weights[], int n, int capacity) {
    Item items[n];

    for (int i = 0; i < n; i++) {
        items[i].value = values[i];
        items[i].weight = weights[i];
        items[i].ratio = (double)values[i] / weights[i];
    }

    qsort(items, n, sizeof(Item), compare);

    double total = 0.0;

    for (int i = 0; i < n; i++) {
        if (capacity >= items[i].weight) {
            total += items[i].value;
            capacity -= items[i].weight;
        } else {
            total += items[i].ratio * capacity;
            break;
        }
    }

    return total;
}

int main() {
    int n;
    scanf("%d", &n);

    int values[n], weights[n];

    for (int i = 0; i < n; i++) scanf("%d", &values[i]);
    for (int i = 0; i < n; i++) scanf("%d", &weights[i]);

    int capacity;
    scanf("%d", &capacity);

    printf("%.2f\n", fractionalKnapsack(values, weights, n, capacity));

    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>

using namespace std;

struct Item {
    int value;
    int weight;
    double ratio;
};

bool compare(Item a, Item b) {
    return a.ratio > b.ratio;
}

double fractionalKnapsack(vector<int>& values, vector<int>& weights, int capacity) {
    vector<Item> items;

    for (int i = 0; i < values.size(); i++) {
        items.push_back({values[i], weights[i], (double)values[i] / weights[i]});
    }

    sort(items.begin(), items.end(), compare);

    double total = 0.0;

    for (auto& item : items) {
        if (capacity >= item.weight) {
            total += item.value;
            capacity -= item.weight;
        } else {
            total += item.ratio * capacity;
            break;
        }
    }

    return total;
}

int main() {
    int n;
    cin >> n;

    vector<int> values(n), weights(n);

    for (int i = 0; i < n; i++) cin >> values[i];
    for (int i = 0; i < n; i++) cin >> weights[i];

    int capacity;
    cin >> capacity;

    cout << fixed << setprecision(2)
         << fractionalKnapsack(values, weights, capacity) << "\n";

    return 0;
}`
},

'fk-e2': {
  python: `def find_content_children(greed, cookies):
    greed.sort()
    cookies.sort()

    i = j = 0

    while i < len(greed) and j < len(cookies):
        if cookies[j] >= greed[i]:
            i += 1
        j += 1

    return i

n = int(input())
greed = list(map(int, input().split()))

m = int(input())
cookies = list(map(int, input().split()))

print(find_content_children(greed, cookies))`,
  java: `import java.util.*;

public class Solution {
    public static int findContentChildren(int[] greed, int[] cookies) {
        Arrays.sort(greed);
        Arrays.sort(cookies);

        int i = 0, j = 0;

        while (i < greed.length && j < cookies.length) {
            if (cookies[j] >= greed[i]) {
                i++;
            }
            j++;
        }

        return i;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] greed = new int[n];

        for (int i = 0; i < n; i++) {
            greed[i] = sc.nextInt();
        }

        int m = sc.nextInt();
        int[] cookies = new int[m];

        for (int i = 0; i < m; i++) {
            cookies[i] = sc.nextInt();
        }

        System.out.println(findContentChildren(greed, cookies));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int findContentChildren(int greed[], int n, int cookies[], int m) {
    qsort(greed, n, sizeof(int), compare);
    qsort(cookies, m, sizeof(int), compare);

    int i = 0, j = 0;

    while (i < n && j < m) {
        if (cookies[j] >= greed[i]) i++;
        j++;
    }

    return i;
}

int main() {
    int n;
    scanf("%d", &n);

    int greed[n];
    for (int i = 0; i < n; i++) scanf("%d", &greed[i]);

    int m;
    scanf("%d", &m);

    int cookies[m];
    for (int i = 0; i < m; i++) scanf("%d", &cookies[i]);

    printf("%d\n", findContentChildren(greed, n, cookies, m));

    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int findContentChildren(vector<int>& greed, vector<int>& cookies) {
    sort(greed.begin(), greed.end());
    sort(cookies.begin(), cookies.end());

    int i = 0, j = 0;

    while (i < greed.size() && j < cookies.size()) {
        if (cookies[j] >= greed[i]) i++;
        j++;
    }

    return i;
}

int main() {
    int n;
    cin >> n;

    vector<int> greed(n);
    for (int i = 0; i < n; i++) cin >> greed[i];

    int m;
    cin >> m;

    vector<int> cookies(m);
    for (int i = 0; i < m; i++) cin >> cookies[i];

    cout << findContentChildren(greed, cookies) << "\n";

    return 0;
}`
},
'fk-e3': {
  python: `def maximum_units(boxes, truck_size):
    boxes.sort(key=lambda x: x[1], reverse=True)

    total_units = 0

    for count, units in boxes:
        take = min(count, truck_size)
        total_units += take * units
        truck_size -= take

        if truck_size == 0:
            break

    return total_units

n = int(input())
boxes = []

for _ in range(n):
    count, units = map(int, input().split())
    boxes.append([count, units])

truck_size = int(input())

print(maximum_units(boxes, truck_size))`,
  java: `import java.util.*;

public class Solution {
    public static int maximumUnits(int[][] boxes, int truckSize) {
        Arrays.sort(boxes, (a, b) -> b[1] - a[1]);

        int totalUnits = 0;

        for (int[] box : boxes) {
            int take = Math.min(box[0], truckSize);

            totalUnits += take * box[1];
            truckSize -= take;

            if (truckSize == 0) break;
        }

        return totalUnits;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[][] boxes = new int[n][2];

        for (int i = 0; i < n; i++) {
            boxes[i][0] = sc.nextInt();
            boxes[i][1] = sc.nextInt();
        }

        int truckSize = sc.nextInt();

        System.out.println(maximumUnits(boxes, truckSize));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int count;
    int units;
} Box;

int compare(const void *a, const void *b) {
    return ((Box*)b)->units - ((Box*)a)->units;
}

int maximumUnits(Box boxes[], int n, int truckSize) {
    qsort(boxes, n, sizeof(Box), compare);

    int totalUnits = 0;

    for (int i = 0; i < n; i++) {
        int take = boxes[i].count < truckSize ? boxes[i].count : truckSize;

        totalUnits += take * boxes[i].units;
        truckSize -= take;

        if (truckSize == 0) break;
    }

    return totalUnits;
}

int main() {
    int n;
    scanf("%d", &n);

    Box boxes[n];

    for (int i = 0; i < n; i++) {
        scanf("%d %d", &boxes[i].count, &boxes[i].units);
    }

    int truckSize;
    scanf("%d", &truckSize);

    printf("%d\n", maximumUnits(boxes, n, truckSize));

    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int maximumUnits(vector<vector<int>>& boxes, int truckSize) {
    sort(boxes.begin(), boxes.end(),
         [](vector<int>& a, vector<int>& b) {
             return a[1] > b[1];
         });

    int totalUnits = 0;

    for (auto& box : boxes) {
        int take = min(box[0], truckSize);

        totalUnits += take * box[1];
        truckSize -= take;

        if (truckSize == 0) break;
    }

    return totalUnits;
}

int main() {
    int n;
    cin >> n;

    vector<vector<int>> boxes(n, vector<int>(2));

    for (int i = 0; i < n; i++) {
        cin >> boxes[i][0] >> boxes[i][1];
    }

    int truckSize;
    cin >> truckSize;

    cout << maximumUnits(boxes, truckSize) << "\n";

    return 0;
}`
},

'fk-e4': {
  python: `def minimum_coins(coins, amount):
    coins.sort(reverse=True)

    count = 0

    for coin in coins:
        while amount >= coin:
            amount -= coin
            count += 1

    return count if amount == 0 else -1

n = int(input())
coins = list(map(int, input().split()))
amount = int(input())

print(minimum_coins(coins, amount))`,
  java: `import java.util.*;

public class Solution {
    public static int minimumCoins(int[] coins, int amount) {
        Arrays.sort(coins);

        int count = 0;

        for (int i = coins.length - 1; i >= 0; i--) {
            while (amount >= coins[i]) {
                amount -= coins[i];
                count++;
            }
        }

        return amount == 0 ? count : -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] coins = new int[n];

        for (int i = 0; i < n; i++) {
            coins[i] = sc.nextInt();
        }

        int amount = sc.nextInt();

        System.out.println(minimumCoins(coins, amount));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int minimumCoins(int coins[], int n, int amount) {
    qsort(coins, n, sizeof(int), compare);

    int count = 0;

    for (int i = n - 1; i >= 0; i--) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            count++;
        }
    }

    return amount == 0 ? count : -1;
}

int main() {
    int n;
    scanf("%d", &n);

    int coins[n];

    for (int i = 0; i < n; i++) {
        scanf("%d", &coins[i]);
    }

    int amount;
    scanf("%d", &amount);

    printf("%d\n", minimumCoins(coins, n, amount));

    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int minimumCoins(vector<int>& coins, int amount) {
    sort(coins.rbegin(), coins.rend());

    int count = 0;

    for (int coin : coins) {
        while (amount >= coin) {
            amount -= coin;
            count++;
        }
    }

    return amount == 0 ? count : -1;
}

int main() {
    int n;
    cin >> n;

    vector<int> coins(n);

    for (int i = 0; i < n; i++) {
        cin >> coins[i];
    }

    int amount;
    cin >> amount;

    cout << minimumCoins(coins, amount) << "\n";

    return 0;
}`
},

'fk-e5': {
  python: `def lemonade_change(bills):
    five = 0
    ten = 0

    for bill in bills:
        if bill == 5:
            five += 1

        elif bill == 10:
            if five == 0:
                return False

            five -= 1
            ten += 1

        else:
            if ten > 0 and five > 0:
                ten -= 1
                five -= 1
            elif five >= 3:
                five -= 3
            else:
                return False

    return True

n = int(input())
bills = list(map(int, input().split()))

print(str(lemonade_change(bills)).lower())`,
  java: `import java.util.*;

public class Solution {
    public static boolean lemonadeChange(int[] bills) {
        int five = 0, ten = 0;

        for (int bill : bills) {
            if (bill == 5) {
                five++;
            } else if (bill == 10) {
                if (five == 0) return false;

                five--;
                ten++;
            } else {
                if (ten > 0 && five > 0) {
                    ten--;
                    five--;
                } else if (five >= 3) {
                    five -= 3;
                } else {
                    return false;
                }
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] bills = new int[n];

        for (int i = 0; i < n; i++) {
            bills[i] = sc.nextInt();
        }

        System.out.println(lemonadeChange(bills));
    }
}`,
  c: `#include <stdio.h>
#include <stdbool.h>

bool lemonadeChange(int bills[], int n) {
    int five = 0, ten = 0;

    for (int i = 0; i < n; i++) {
        if (bills[i] == 5) {
            five++;
        } else if (bills[i] == 10) {
            if (five == 0) return false;

            five--;
            ten++;
        } else {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
}

int main() {
    int n;
    scanf("%d", &n);

    int bills[n];

    for (int i = 0; i < n; i++) {
        scanf("%d", &bills[i]);
    }

    printf("%s\n", lemonadeChange(bills, n) ? "true" : "false");

    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>

using namespace std;

bool lemonadeChange(vector<int>& bills) {
    int five = 0, ten = 0;

    for (int bill : bills) {
        if (bill == 5) {
            five++;
        } else if (bill == 10) {
            if (five == 0) return false;

            five--;
            ten++;
        } else {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
}

int main() {
    int n;
    cin >> n;

    vector<int> bills(n);

    for (int i = 0; i < n; i++) {
        cin >> bills[i];
    }

    cout << (lemonadeChange(bills) ? "true" : "false") << "\n";

    return 0;
}`
},
'fk-m1': {
  python: `def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)

    max_deadline = max(job[1] for job in jobs)
    slots = [-1] * (max_deadline + 1)

    count = 0
    profit = 0

    for job_id, deadline, gain in jobs:
        for j in range(deadline, 0, -1):
            if slots[j] == -1:
                slots[j] = job_id
                count += 1
                profit += gain
                break

    print(count, profit)

n = int(input())
jobs = []

for _ in range(n):
    job_id, deadline, profit = map(int, input().split())
    jobs.append([job_id, deadline, profit])

job_sequencing(jobs)`,
  java: `import java.util.*;

public class Solution {
    public static void jobSequencing(int[][] jobs) {
        Arrays.sort(jobs, (a, b) -> b[2] - a[2]);

        int maxDeadline = 0;
        for (int[] job : jobs) {
            maxDeadline = Math.max(maxDeadline, job[1]);
        }

        int[] slots = new int[maxDeadline + 1];
        Arrays.fill(slots, -1);

        int count = 0;
        int profit = 0;

        for (int[] job : jobs) {
            for (int j = job[1]; j > 0; j--) {
                if (slots[j] == -1) {
                    slots[j] = job[0];
                    count++;
                    profit += job[2];
                    break;
                }
            }
        }

        System.out.println(count + " " + profit);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[][] jobs = new int[n][3];

        for (int i = 0; i < n; i++) {
            jobs[i][0] = sc.nextInt();
            jobs[i][1] = sc.nextInt();
            jobs[i][2] = sc.nextInt();
        }

        jobSequencing(jobs);
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id, deadline, profit;
} Job;

int compare(const void *a, const void *b) {
    return ((Job*)b)->profit - ((Job*)a)->profit;
}

int main() {
    int n;
    scanf("%d", &n);

    Job jobs[n];
    int maxDeadline = 0;

    for(int i=0;i<n;i++) {
        scanf("%d %d %d",&jobs[i].id,&jobs[i].deadline,&jobs[i].profit);
        if(jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    }

    qsort(jobs,n,sizeof(Job),compare);

    int slots[maxDeadline+1];
    for(int i=0;i<=maxDeadline;i++) slots[i] = -1;

    int count=0, profit=0;

    for(int i=0;i<n;i++) {
        for(int j=jobs[i].deadline;j>0;j--) {
            if(slots[j]==-1) {
                slots[j]=jobs[i].id;
                count++;
                profit+=jobs[i].profit;
                break;
            }
        }
    }

    printf("%d %d\n",count,profit);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Job {
    int id, deadline, profit;
};

bool compare(Job a, Job b) {
    return a.profit > b.profit;
}

int main() {
    int n;
    cin >> n;

    vector<Job> jobs(n);
    int maxDeadline = 0;

    for(int i=0;i<n;i++) {
        cin >> jobs[i].id >> jobs[i].deadline >> jobs[i].profit;
        maxDeadline = max(maxDeadline, jobs[i].deadline);
    }

    sort(jobs.begin(), jobs.end(), compare);

    vector<int> slots(maxDeadline + 1, -1);

    int count = 0;
    int profit = 0;

    for(auto &job : jobs) {
        for(int j = job.deadline; j > 0; j--) {
            if(slots[j] == -1) {
                slots[j] = job.id;
                count++;
                profit += job.profit;
                break;
            }
        }
    }

    cout << count << " " << profit << "\n";
    return 0;
}`
},

'fk-m2': {
  python: `def activity_selection(start, end):
    activities = sorted(zip(start, end), key=lambda x: x[1])

    count = 1
    last_end = activities[0][1]

    for i in range(1, len(activities)):
        if activities[i][0] >= last_end:
            count += 1
            last_end = activities[i][1]

    return count

n = int(input())
start = list(map(int, input().split()))
end = list(map(int, input().split()))

print(activity_selection(start, end))`,
  java: `import java.util.*;

public class Solution {
    public static int activitySelection(int[] start, int[] end) {
        int n = start.length;

        int[][] activities = new int[n][2];

        for(int i=0;i<n;i++) {
            activities[i][0] = start[i];
            activities[i][1] = end[i];
        }

        Arrays.sort(activities, (a,b) -> a[1] - b[1]);

        int count = 1;
        int lastEnd = activities[0][1];

        for(int i=1;i<n;i++) {
            if(activities[i][0] >= lastEnd) {
                count++;
                lastEnd = activities[i][1];
            }
        }

        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] start = new int[n];
        int[] end = new int[n];

        for(int i=0;i<n;i++) start[i] = sc.nextInt();
        for(int i=0;i<n;i++) end[i] = sc.nextInt();

        System.out.println(activitySelection(start,end));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int start,end;
} Activity;

int compare(const void *a,const void *b){
    return ((Activity*)a)->end - ((Activity*)b)->end;
}

int main(){
    int n;
    scanf("%d",&n);

    Activity arr[n];

    for(int i=0;i<n;i++) scanf("%d",&arr[i].start);
    for(int i=0;i<n;i++) scanf("%d",&arr[i].end);

    qsort(arr,n,sizeof(Activity),compare);

    int count=1;
    int lastEnd=arr[0].end;

    for(int i=1;i<n;i++){
        if(arr[i].start>=lastEnd){
            count++;
            lastEnd=arr[i].end;
        }
    }

    printf("%d\n",count);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<pair<int,int>> activities(n);

    for(int i=0;i<n;i++) cin >> activities[i].first;
    for(int i=0;i<n;i++) cin >> activities[i].second;

    sort(activities.begin(),activities.end(),
         [](auto &a,auto &b){
             return a.second < b.second;
         });

    int count=1;
    int lastEnd=activities[0].second;

    for(int i=1;i<n;i++){
        if(activities[i].first>=lastEnd){
            count++;
            lastEnd=activities[i].second;
        }
    }

    cout<<count<<"\n";
    return 0;
}`
},
'fk-m3': {
  python: `def minimum_platforms(arrival, departure):
    arrival.sort()
    departure.sort()

    platforms = 1
    result = 1

    i = 1
    j = 0

    while i < len(arrival) and j < len(departure):
        if arrival[i] <= departure[j]:
            platforms += 1
            result = max(result, platforms)
            i += 1
        else:
            platforms -= 1
            j += 1

    return result

n = int(input())
arrival = list(map(int, input().split()))
departure = list(map(int, input().split()))

print(minimum_platforms(arrival, departure))`,
  java: `import java.util.*;

public class Solution {
    public static int minimumPlatforms(int[] arrival, int[] departure) {
        Arrays.sort(arrival);
        Arrays.sort(departure);

        int platforms = 1;
        int result = 1;

        int i = 1, j = 0;

        while (i < arrival.length && j < departure.length) {
            if (arrival[i] <= departure[j]) {
                platforms++;
                result = Math.max(result, platforms);
                i++;
            } else {
                platforms--;
                j++;
            }
        }

        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] arrival = new int[n];
        int[] departure = new int[n];

        for (int i = 0; i < n; i++) arrival[i] = sc.nextInt();
        for (int i = 0; i < n; i++) departure[i] = sc.nextInt();

        System.out.println(minimumPlatforms(arrival, departure));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

int compare(const void *a,const void *b){
    return (*(int*)a - *(int*)b);
}

int minimumPlatforms(int arrival[], int departure[], int n){
    qsort(arrival,n,sizeof(int),compare);
    qsort(departure,n,sizeof(int),compare);

    int platforms=1;
    int result=1;

    int i=1,j=0;

    while(i<n && j<n){
        if(arrival[i] <= departure[j]){
            platforms++;
            if(platforms > result) result=platforms;
            i++;
        }else{
            platforms--;
            j++;
        }
    }

    return result;
}

int main(){
    int n;
    scanf("%d",&n);

    int arrival[n], departure[n];

    for(int i=0;i<n;i++) scanf("%d",&arrival[i]);
    for(int i=0;i<n;i++) scanf("%d",&departure[i]);

    printf("%d\n",minimumPlatforms(arrival,departure,n));

    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int minimumPlatforms(vector<int>& arrival, vector<int>& departure){
    sort(arrival.begin(), arrival.end());
    sort(departure.begin(), departure.end());

    int platforms=1;
    int result=1;

    int i=1,j=0;

    while(i<arrival.size() && j<departure.size()){
        if(arrival[i] <= departure[j]){
            platforms++;
            result=max(result,platforms);
            i++;
        }else{
            platforms--;
            j++;
        }
    }

    return result;
}

int main(){
    int n;
    cin>>n;

    vector<int> arrival(n), departure(n);

    for(int i=0;i<n;i++) cin>>arrival[i];
    for(int i=0;i<n;i++) cin>>departure[i];

    cout<<minimumPlatforms(arrival,departure)<<"\n";

    return 0;
}`
},

'fk-m4': {
  python: `def can_complete_circuit(gas, cost):
    total = 0
    tank = 0
    start = 0

    for i in range(len(gas)):
        total += gas[i] - cost[i]
        tank += gas[i] - cost[i]

        if tank < 0:
            start = i + 1
            tank = 0

    return start if total >= 0 else -1

n = int(input())
gas = list(map(int, input().split()))
cost = list(map(int, input().split()))

print(can_complete_circuit(gas, cost))`,
  java: `import java.util.*;

public class Solution {
    public static int canCompleteCircuit(int[] gas, int[] cost) {
        int total = 0;
        int tank = 0;
        int start = 0;

        for(int i=0;i<gas.length;i++) {
            total += gas[i] - cost[i];
            tank += gas[i] - cost[i];

            if(tank < 0){
                start = i + 1;
                tank = 0;
            }
        }

        return total >= 0 ? start : -1;
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] gas = new int[n];
        int[] cost = new int[n];

        for(int i=0;i<n;i++) gas[i] = sc.nextInt();
        for(int i=0;i<n;i++) cost[i] = sc.nextInt();

        System.out.println(canCompleteCircuit(gas,cost));
    }
}`,
  c: `#include <stdio.h>

int canCompleteCircuit(int gas[], int cost[], int n){
    int total=0;
    int tank=0;
    int start=0;

    for(int i=0;i<n;i++){
        total += gas[i]-cost[i];
        tank += gas[i]-cost[i];

        if(tank < 0){
            start=i+1;
            tank=0;
        }
    }

    return total>=0 ? start : -1;
}

int main(){
    int n;
    scanf("%d",&n);

    int gas[n], cost[n];

    for(int i=0;i<n;i++) scanf("%d",&gas[i]);
    for(int i=0;i<n;i++) scanf("%d",&cost[i]);

    printf("%d\n",canCompleteCircuit(gas,cost,n));

    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>

using namespace std;

int canCompleteCircuit(vector<int>& gas, vector<int>& cost){
    int total=0;
    int tank=0;
    int start=0;

    for(int i=0;i<gas.size();i++){
        total += gas[i]-cost[i];
        tank += gas[i]-cost[i];

        if(tank < 0){
            start=i+1;
            tank=0;
        }
    }

    return total>=0 ? start : -1;
}

int main(){
    int n;
    cin>>n;

    vector<int> gas(n), cost(n);

    for(int i=0;i<n;i++) cin>>gas[i];
    for(int i=0;i<n;i++) cin>>cost[i];

    cout<<canCompleteCircuit(gas,cost)<<"\n";

    return 0;
}`
},

'fk-m5': {
  python: `def partition_labels(s):
    last = {}

    for i, ch in enumerate(s):
        last[ch] = i

    result = []

    start = end = 0

    for i, ch in enumerate(s):
        end = max(end, last[ch])

        if i == end:
            result.append(end - start + 1)
            start = i + 1

    print(*result)

s = input().strip()

partition_labels(s)`,
  java: `import java.util.*;

public class Solution {
    public static List<Integer> partitionLabels(String s) {
        int[] last = new int[26];

        for(int i=0;i<s.length();i++){
            last[s.charAt(i)-'a'] = i;
        }

        List<Integer> result = new ArrayList<>();

        int start=0,end=0;

        for(int i=0;i<s.length();i++){
            end = Math.max(end,last[s.charAt(i)-'a']);

            if(i==end){
                result.add(end-start+1);
                start=i+1;
            }
        }

        return result;
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        String s = sc.next();

        List<Integer> result = partitionLabels(s);

        for(int x : result){
            System.out.print(x + " ");
        }
    }
}`,
  c: `#include <stdio.h>
#include <string.h>

int main(){
    char s[1001];
    scanf("%s",s);

    int last[26];

    for(int i=0;i<26;i++) last[i]=-1;

    int n=strlen(s);

    for(int i=0;i<n;i++){
        last[s[i]-'a']=i;
    }

    int start=0,end=0;

    for(int i=0;i<n;i++){
        if(last[s[i]-'a']>end)
            end=last[s[i]-'a'];

        if(i==end){
            printf("%d ",end-start+1);
            start=i+1;
        }
    }

    printf("\n");
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>

using namespace std;

int main(){
    string s;
    cin >> s;

    vector<int> last(26);

    for(int i=0;i<s.size();i++){
        last[s[i]-'a']=i;
    }

    vector<int> result;

    int start=0,end=0;

    for(int i=0;i<s.size();i++){
        end=max(end,last[s[i]-'a']);

        if(i==end){
            result.push_back(end-start+1);
            start=i+1;
        }
    }

    for(int x:result){
        cout<<x<<" ";
    }

    cout<<"\n";
    return 0;
}`
},
'fk-h1': {
  python: `import heapq

def huffman_cost(freq):
    heapq.heapify(freq)

    cost = 0

    while len(freq) > 1:
        first = heapq.heappop(freq)
        second = heapq.heappop(freq)

        merged = first + second
        cost += merged

        heapq.heappush(freq, merged)

    return cost

n = int(input())
freq = list(map(int, input().split()))

print(huffman_cost(freq))`,
  java: `import java.util.*;

public class Solution {
    public static int huffmanCost(int[] freq) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for (int f : freq) {
            pq.offer(f);
        }

        int cost = 0;

        while (pq.size() > 1) {
            int first = pq.poll();
            int second = pq.poll();

            int merged = first + second;
            cost += merged;

            pq.offer(merged);
        }

        return cost;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] freq = new int[n];

        for (int i = 0; i < n; i++) {
            freq[i] = sc.nextInt();
        }

        System.out.println(huffmanCost(freq));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int huffmanCost(int freq[], int n) {
    int cost = 0;

    while (n > 1) {
        qsort(freq, n, sizeof(int), compare);

        int merged = freq[0] + freq[1];
        cost += merged;

        freq[1] = merged;

        for (int i = 0; i < n - 1; i++) {
            freq[i] = freq[i + 1];
        }

        n--;
    }

    return cost;
}

int main() {
    int n;
    scanf("%d", &n);

    int freq[1000];

    for (int i = 0; i < n; i++) {
        scanf("%d", &freq[i]);
    }

    printf("%d\n", huffmanCost(freq, n));

    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int huffmanCost(vector<int>& freq) {
    priority_queue<int, vector<int>, greater<int>> pq;

    for (int x : freq) {
        pq.push(x);
    }

    int cost = 0;

    while (pq.size() > 1) {
        int first = pq.top(); pq.pop();
        int second = pq.top(); pq.pop();

        int merged = first + second;
        cost += merged;

        pq.push(merged);
    }

    return cost;
}

int main() {
    int n;
    cin >> n;

    vector<int> freq(n);

    for (int i = 0; i < n; i++) {
        cin >> freq[i];
    }

    cout << huffmanCost(freq) << "\n";

    return 0;
}`
},

'fk-h2': {
  python: `import heapq

def connect_ropes(ropes):
    heapq.heapify(ropes)

    cost = 0

    while len(ropes) > 1:
        first = heapq.heappop(ropes)
        second = heapq.heappop(ropes)

        merged = first + second
        cost += merged

        heapq.heappush(ropes, merged)

    return cost

n = int(input())
ropes = list(map(int, input().split()))

print(connect_ropes(ropes))`,
  java: `import java.util.*;

public class Solution {
    public static int connectRopes(int[] ropes) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for (int rope : ropes) {
            pq.offer(rope);
        }

        int cost = 0;

        while (pq.size() > 1) {
            int first = pq.poll();
            int second = pq.poll();

            int merged = first + second;
            cost += merged;

            pq.offer(merged);
        }

        return cost;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] ropes = new int[n];

        for (int i = 0; i < n; i++) {
            ropes[i] = sc.nextInt();
        }

        System.out.println(connectRopes(ropes));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int connectRopes(int ropes[], int n) {
    int cost = 0;

    while (n > 1) {
        qsort(ropes, n, sizeof(int), compare);

        int merged = ropes[0] + ropes[1];
        cost += merged;

        ropes[1] = merged;

        for (int i = 0; i < n - 1; i++) {
            ropes[i] = ropes[i + 1];
        }

        n--;
    }

    return cost;
}

int main() {
    int n;
    scanf("%d", &n);

    int ropes[1000];

    for (int i = 0; i < n; i++) {
        scanf("%d", &ropes[i]);
    }

    printf("%d\n", connectRopes(ropes, n));

    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int connectRopes(vector<int>& ropes) {
    priority_queue<int, vector<int>, greater<int>> pq;

    for (int rope : ropes) {
        pq.push(rope);
    }

    int cost = 0;

    while (pq.size() > 1) {
        int first = pq.top(); pq.pop();
        int second = pq.top(); pq.pop();

        int merged = first + second;
        cost += merged;

        pq.push(merged);
    }

    return cost;
}

int main() {
    int n;
    cin >> n;

    vector<int> ropes(n);

    for (int i = 0; i < n; i++) {
        cin >> ropes[i];
    }

    cout << connectRopes(ropes) << "\n";

    return 0;
}`
},

'fk-h3': {
  python: `def candy(ratings):
    n = len(ratings)

    candies = [1] * n

    for i in range(1, n):
        if ratings[i] > ratings[i - 1]:
            candies[i] = candies[i - 1] + 1

    for i in range(n - 2, -1, -1):
        if ratings[i] > ratings[i + 1]:
            candies[i] = max(candies[i], candies[i + 1] + 1)

    return sum(candies)

n = int(input())
ratings = list(map(int, input().split()))

print(candy(ratings))`,
  java: `import java.util.*;

public class Solution {
    public static int candy(int[] ratings) {
        int n = ratings.length;

        int[] candies = new int[n];
        Arrays.fill(candies, 1);

        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }

        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                candies[i] = Math.max(candies[i], candies[i + 1] + 1);
            }
        }

        int total = 0;
        for (int x : candies) total += x;

        return total;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] ratings = new int[n];

        for (int i = 0; i < n; i++) {
            ratings[i] = sc.nextInt();
        }

        System.out.println(candy(ratings));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

int max(int a, int b) {
    return a > b ? a : b;
}

int candy(int ratings[], int n) {
    int candies[n];

    for(int i = 0; i < n; i++)
        candies[i] = 1;

    for(int i = 1; i < n; i++) {
        if(ratings[i] > ratings[i - 1])
            candies[i] = candies[i - 1] + 1;
    }

    for(int i = n - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1])
            candies[i] = max(candies[i], candies[i + 1] + 1);
    }

    int total = 0;

    for(int i = 0; i < n; i++)
        total += candies[i];

    return total;
}

int main() {
    int n;
    scanf("%d", &n);

    int ratings[n];

    for(int i = 0; i < n; i++)
        scanf("%d", &ratings[i]);

    printf("%d\n", candy(ratings, n));

    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int candy(vector<int>& ratings) {
    int n = ratings.size();

    vector<int> candies(n, 1);

    for(int i = 1; i < n; i++) {
        if(ratings[i] > ratings[i - 1])
            candies[i] = candies[i - 1] + 1;
    }

    for(int i = n - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1])
            candies[i] = max(candies[i], candies[i + 1] + 1);
    }

    int total = 0;

    for(int x : candies)
        total += x;

    return total;
}

int main() {
    int n;
    cin >> n;

    vector<int> ratings(n);

    for(int i = 0; i < n; i++)
        cin >> ratings[i];

    cout << candy(ratings) << "\n";

    return 0;
}`
},

'fk-h4': {
  python: `import heapq

def min_refuel_stops(target, start_fuel, stations):
    max_heap = []
    fuel = start_fuel
    stops = 0
    i = 0

    while fuel < target:
        while i < len(stations) and stations[i][0] <= fuel:
            heapq.heappush(max_heap, -stations[i][1])
            i += 1

        if not max_heap:
            return -1

        fuel += -heapq.heappop(max_heap)
        stops += 1

    return stops

target = int(input())
start_fuel = int(input())
n = int(input())

stations = []
for _ in range(n):
    position, fuel = map(int, input().split())
    stations.append([position, fuel])

print(min_refuel_stops(target, start_fuel, stations))`,
  java: `import java.util.*;

public class Solution {
    public static int minRefuelStops(int target, int startFuel, int[][] stations) {
        PriorityQueue<Integer> pq =
                new PriorityQueue<>(Collections.reverseOrder());

        int fuel = startFuel;
        int stops = 0;
        int i = 0;

        while (fuel < target) {
            while (i < stations.length && stations[i][0] <= fuel) {
                pq.offer(stations[i][1]);
                i++;
            }

            if (pq.isEmpty()) return -1;

            fuel += pq.poll();
            stops++;
        }

        return stops;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int target = sc.nextInt();
        int startFuel = sc.nextInt();
        int n = sc.nextInt();

        int[][] stations = new int[n][2];

        for(int i=0;i<n;i++){
            stations[i][0] = sc.nextInt();
            stations[i][1] = sc.nextInt();
        }

        System.out.println(
            minRefuelStops(target, startFuel, stations)
        );
    }
}`,
  c: `#include <stdio.h>

int main() {
    int target, startFuel, n;

    scanf("%d", &target);
    scanf("%d", &startFuel);
    scanf("%d", &n);

    int pos[500], fuelAt[500];

    for(int i = 0; i < n; i++) {
        scanf("%d %d", &pos[i], &fuelAt[i]);
    }

    int fuel = startFuel;
    int stops = 0;
    int used[500] = {0};

    while(fuel < target) {
        int bestFuel = -1;
        int idx = -1;

        for(int i = 0; i < n; i++) {
            if(!used[i] && pos[i] <= fuel && fuelAt[i] > bestFuel) {
                bestFuel = fuelAt[i];
                idx = i;
            }
        }

        if(idx == -1) {
            printf("-1\n");
            return 0;
        }

        fuel += fuelAt[idx];
        used[idx] = 1;
        stops++;
    }

    printf("%d\n", stops);

    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int minRefuelStops(int target,
                   int startFuel,
                   vector<vector<int>>& stations) {

    priority_queue<int> pq;

    int fuel = startFuel;
    int stops = 0;
    int i = 0;

    while(fuel < target) {

        while(i < stations.size() &&
              stations[i][0] <= fuel) {
            pq.push(stations[i][1]);
            i++;
        }

        if(pq.empty())
            return -1;

        fuel += pq.top();
        pq.pop();
        stops++;
    }

    return stops;
}

int main() {
    int target, startFuel, n;

    cin >> target;
    cin >> startFuel;
    cin >> n;

    vector<vector<int>> stations(n, vector<int>(2));

    for(int i = 0; i < n; i++) {
        cin >> stations[i][0]
            >> stations[i][1];
    }

    cout << minRefuelStops(
                target,
                startFuel,
                stations
            ) << "\n";

    return 0;
}`
},

'fk-h5': {
  python: `import heapq

def schedule_course(courses):
    courses.sort(key=lambda x: x[1])

    total_time = 0
    max_heap = []

    for duration, deadline in courses:
        total_time += duration
        heapq.heappush(max_heap, -duration)

        if total_time > deadline:
            total_time += heapq.heappop(max_heap)

    return len(max_heap)

n = int(input())

courses = []
for _ in range(n):
    duration, deadline = map(int, input().split())
    courses.append([duration, deadline])

print(schedule_course(courses))`,
  java: `import java.util.*;

public class Solution {
    public static int scheduleCourse(int[][] courses) {

        Arrays.sort(courses,
                (a, b) -> a[1] - b[1]);

        PriorityQueue<Integer> pq =
                new PriorityQueue<>(
                        Collections.reverseOrder());

        int totalTime = 0;

        for(int[] course : courses) {

            totalTime += course[0];
            pq.offer(course[0]);

            if(totalTime > course[1]) {
                totalTime -= pq.poll();
            }
        }

        return pq.size();
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[][] courses = new int[n][2];

        for(int i = 0; i < n; i++) {
            courses[i][0] = sc.nextInt();
            courses[i][1] = sc.nextInt();
        }

        System.out.println(
                scheduleCourse(courses));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int duration;
    int deadline;
} Course;

int compare(const void *a, const void *b) {
    return ((Course*)a)->deadline -
           ((Course*)b)->deadline;
}

int main() {
    int n;
    scanf("%d", &n);

    Course courses[n];

    for(int i = 0; i < n; i++) {
        scanf("%d %d",
              &courses[i].duration,
              &courses[i].deadline);
    }

    qsort(courses,
          n,
          sizeof(Course),
          compare);

    int selected[1000];
    int count = 0;
    int totalTime = 0;

    for(int i = 0; i < n; i++) {

        selected[count++] =
                courses[i].duration;

        totalTime +=
                courses[i].duration;

        int maxIdx = 0;

        for(int j = 1; j < count; j++) {
            if(selected[j] >
               selected[maxIdx])
                maxIdx = j;
        }

        if(totalTime >
           courses[i].deadline) {

            totalTime -=
                selected[maxIdx];

            selected[maxIdx] =
                selected[count - 1];

            count--;
        }
    }

    printf("%d\n", count);

    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

int scheduleCourse(
        vector<vector<int>>& courses) {

    sort(courses.begin(),
         courses.end(),
         [](auto &a, auto &b) {
            return a[1] < b[1];
         });

    priority_queue<int> pq;

    int totalTime = 0;

    for(auto &course : courses) {

        totalTime += course[0];
        pq.push(course[0]);

        if(totalTime > course[1]) {
            totalTime -= pq.top();
            pq.pop();
        }
    }

    return pq.size();
}

int main() {

    int n;
    cin >> n;

    vector<vector<int>>
        courses(n, vector<int>(2));

    for(int i = 0; i < n; i++) {
        cin >> courses[i][0]
            >> courses[i][1];
    }

    cout << scheduleCourse(courses)
         << "\n";

    return 0;
}`
    },
};