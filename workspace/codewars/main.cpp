#include <bits/stdc++.h>
#include <vector>
using namespace std;

int min(vector<int> list){
    for(int i = 0; i < list.size(); i++) {
        if(list[0] > list[i]) {
            list[0] = list[i];
        }
    }
    return list[0];
}

int max(vector<int> list){
    for(int i = 0; i < list.size(); i++) {
        if(list[0] < list[i]) {
            list[0] = list[i];
        }
    }
    return list[0];
}

int main(void) {
    // create me stdin for test cases functions min and max

    vector<int> list = {1, 2, 3, 4, 5};
    cout << min(list) << endl;
    cout << max(list) << endl;

    return 0;
}