#include <iostream>
using namespace std;

struct Stack
{
  int size;
  int top;
  int *arr;
};

  void init_stack(struct Stack *st)
  {
    cout << "enter size of stack: ";
    cin >> st->size;
    st->top = -1;
    st->arr = new int[st->size];
    for (int i = 0; i < st->size; i++)
    {
      cin >> st->arr[i];
      st->top++;
    }
  }
  // check later the logic for push;
  // it can reach the end of space due to allocated memory block;
  // can lead to seg fault, or data corruption.
  void push(struct Stack *st)
  {
    cout << endl
         << "Value of the pushed element" << endl;
    int val = 0;
    cin >> val;

    st->arr[st->size++] = val;
    st->top++;
  }

  void pop(struct Stack *st)
  {

    cout << endl
         << "How much pop's you want?" << endl;
    int pp = 0;
    cin >> pp;

    for (int i = 0; i < pp; i++)
    {
      if (st->top <= -1)
      {
        cout << "stack underflow" << endl;
        break;
      }
      else
      {
        st->top--;
      }
    }
  };

  void display(struct Stack *st)
  {
    for (int i = 0; i <= st->top; i++)
    {
      cout << st->arr[i] << " ";
    }
  }

  int main()
  {

    struct Stack *st = new Stack;
    init_stack(st);
    display(st);
    push(st);
    display(st);
    pop(st);
    display(st);

    return 0;
}