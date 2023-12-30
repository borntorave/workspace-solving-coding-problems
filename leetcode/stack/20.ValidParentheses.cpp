#include <iostream>
#include <string>
using namespace std;

struct Stack {
  int size;
  int top;
  char *arr;
};

bool isValid(string s) {
  struct Stack *stack = new Stack;
  stack->top = -1;
  stack->size = s.size();
  // alocate memory arr;
  stack->arr = new char[stack->size];

  for(int i=0; i<stack->size; i++) {
    stack->arr[i] = s[i];
  }
  int j = stack->size-1;
  while(j != -1) {
    if(stack->arr[j] == '}' && stack->arr[j-1] == '{') {
      // do something
      j = j - 2;
    } else if(stack->arr[j] == ']' && stack->arr[j-1] == '[') {
      j = j - 2;
    } else if(stack->arr[j] == ')' && stack->arr[j-1] == '(') {
      j = j - 2;
    } else {
      delete[] stack->arr;
      delete stack;
      return 0;
    }
  }
  delete[] stack->arr;
  delete stack;
  return 1;
}

int main() {
  
  string s = "([]{}";
  if( isValid(s) ) {
    cout << "true";
  } else {
    cout << "false";
  }
  

  
  return 0;
}