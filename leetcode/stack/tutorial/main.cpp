#include <bits/stdc++.h>
using namespace std;

struct Stack {
    int size;
    int top;
    int *arr;
};

int main() {
    struct Stack *s;
    s->size = 10;
    s->top = -1;
    s->arr = new int[s->size];
    s->arr[0] = 1;
    s->top++;
    cout << s->arr[0] << endl;

    return 0;
}