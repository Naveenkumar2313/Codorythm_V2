const codeSnippets = {
    python: `def generate_power_set(elements):
    total_subsets = 1 << len(elements)
    power_set = []

    for mask in range(total_subsets):
        subset = []

        for index in range(len(elements)):
            if mask & (1 << index):
                subset.append(elements[index])

        power_set.append(subset)

    return power_set


def print_power_set(power_set):
    for subset in power_set:
        print(subset)


elements = [1, 2, 3]
result = generate_power_set(elements)

print("Power Set:")
print_power_set(result)
`,

    java: `import java.util.ArrayList;
import java.util.List;

public class PowerSetBitmaskExample {

    public static List<List<Integer>> generatePowerSet(int[] elements) {
        int totalSubsets = 1 << elements.length;
        List<List<Integer>> powerSet = new ArrayList<>();

        for (int mask = 0; mask < totalSubsets; mask++) {
            List<Integer> subset = new ArrayList<>();

            for (int index = 0; index < elements.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    subset.add(elements[index]);
                }
            }

            powerSet.add(subset);
        }

        return powerSet;
    }

    public static void main(String[] args) {
        int[] elements = {1, 2, 3};
        List<List<Integer>> result = generatePowerSet(elements);

        System.out.println("Power Set:");
        for (List<Integer> subset : result) {
            System.out.println(subset);
        }
    }
}
`,

    c: `#include <stdio.h>

void printPowerSet(int elements[], int size) {
    int totalSubsets = 1 << size;

    for (int mask = 0; mask < totalSubsets; mask++) {
        printf("[");

        int isFirst = 1;

        for (int index = 0; index < size; index++) {
            if ((mask & (1 << index)) != 0) {
                if (!isFirst) {
                    printf(", ");
                }

                printf("%d", elements[index]);
                isFirst = 0;
            }
        }

        printf("]\\n");
    }
}

int main() {
    int elements[] = {1, 2, 3};
    int size = sizeof(elements) / sizeof(elements[0]);

    printf("Power Set:\\n");
    printPowerSet(elements, size);

    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> generatePowerSet(const vector<int>& elements) {
    int totalSubsets = 1 << elements.size();
    vector<vector<int>> powerSet;

    for (int mask = 0; mask < totalSubsets; mask++) {
        vector<int> subset;

        for (int index = 0; index < elements.size(); index++) {
            if ((mask & (1 << index)) != 0) {
                subset.push_back(elements[index]);
            }
        }

        powerSet.push_back(subset);
    }

    return powerSet;
}

int main() {
    vector<int> elements = {1, 2, 3};
    vector<vector<int>> result = generatePowerSet(elements);

    cout << "Power Set:" << endl;

    for (const vector<int>& subset : result) {
        cout << "[";

        for (size_t index = 0; index < subset.size(); index++) {
            cout << subset[index];

            if (index + 1 < subset.size()) {
                cout << ", ";
            }
        }

        cout << "]" << endl;
    }

    return 0;
}
`
};

export default codeSnippets;
