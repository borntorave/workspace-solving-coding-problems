#include <iostream>
#include <string>
using namespace std;
// task: reverse a string pointer using recursion 

string reverse(string *ps, int size) {
    string *bf = ps;
    if(size < 0 ) {
        cout << *bf << endl;
        return;
    } else {
        *bf + size = *ps + size;
        reverse(*ps, size);
    }

}

int main(void) {

    string s = "viorel";

    string *ps = s;

    reverse(*ps, s.length());

    return 0;
}