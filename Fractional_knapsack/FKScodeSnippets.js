// src/data/codeSnippets.js
export const FKcodeSnippets = {
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int value;
    int weight;
    double ratio;
} Item;

int compare(const void *a, const void *b) {
    Item *x = (Item *)a;
    Item *y = (Item *)b;

    if (y->ratio > x->ratio) return 1;
    if (y->ratio < x->ratio) return -1;
    return 0;
}

double fractionalKnapsack(Item items[], int n, int capacity) {
    qsort(items, n, sizeof(Item), compare);

    double totalValue = 0.0;

    for (int i = 0; i < n; i++) {
        if (capacity >= items[i].weight) {
            totalValue += items[i].value;
            capacity -= items[i].weight;
        } else {
            totalValue += items[i].ratio * capacity;
            break;
        }
    }

    return totalValue;
}

int main() {
    Item items[] = {
        {60, 10, 6.0},
        {100, 20, 5.0},
        {120, 30, 4.0}
    };

    int n = sizeof(items) / sizeof(items[0]);
    int capacity = 50;

    printf("Maximum value: %.2f\\n",
           fractionalKnapsack(items, n, capacity));

    return 0;
}
`,

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

double fractionalKnapsack(vector<Item>& items, int capacity) {
    sort(items.begin(), items.end(), compare);

    double totalValue = 0.0;

    for (auto &item : items) {
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

int main() {
    vector<Item> items = {
        {60, 10, 6.0},
        {100, 20, 5.0},
        {120, 30, 4.0}
    };

    int capacity = 50;

    cout << fixed << setprecision(2);
    cout << "Maximum value: "
         << fractionalKnapsack(items, capacity)
         << endl;

    return 0;
}
`,

    python: `def fractional_knapsack(items, capacity):
    items.sort(key=lambda x: x[2], reverse=True)

    total_value = 0.0

    for value, weight, ratio in items:
        if capacity >= weight:
            total_value += value
            capacity -= weight
        else:
            total_value += ratio * capacity
            break

    return total_value

items = [
    [60, 10, 6.0],
    [100, 20, 5.0],
    [120, 30, 4.0]
]

capacity = 50

result = fractional_knapsack(items, capacity)

print(f"Maximum value: {result:.2f}")
`,

    java: `import java.util.*;

public class FractionalKnapsackExample {

    static class Item {
        int value;
        int weight;
        double ratio;

        Item(int value, int weight) {
            this.value = value;
            this.weight = weight;
            this.ratio = (double)value / weight;
        }
    }

    public static double fractionalKnapsack(
            List<Item> items,
            int capacity) {

        items.sort((a, b) ->
                Double.compare(b.ratio, a.ratio));

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

        List<Item> items = new ArrayList<>();

        items.add(new Item(60, 10));
        items.add(new Item(100, 20));
        items.add(new Item(120, 30));

        int capacity = 50;

        System.out.printf(
            "Maximum value: %.2f%n",
            fractionalKnapsack(items, capacity)
        );
    }
}
`
};