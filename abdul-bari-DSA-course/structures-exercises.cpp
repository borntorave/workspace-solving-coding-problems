#include <iostream>
using namespace std;


struct Rectangle {
  int length;
  int width;
  int len;
};

int main() {
  
  struct Rectangle r = {2, 3};
  cout << r.length << " " << r.width << endl;
  cout << r.len << endl;
  
}