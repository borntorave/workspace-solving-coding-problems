#include <bits/stdc++.h>
using namespace std;

class Node
{
public:
  int data;
  Node *next;
};

void displayLL(Node *p)
{
  if (p != nullptr)
    {
    cout << p->data << " ";
    displayLL(p->next);
  }
}

void insert_element(Node *p, int elem, int pos) {
  Node *q = new Node();
  q->data = elem;
  p = first;
}

int main()
{
  int A[] = {3, 5, 7, 10, 15};

  Node *head = new Node;

  Node *temp;
  Node *last;

  head->data = A[0];
  head->next = nullptr;
  last = head;

  // Create a Linked List
  for (int i = 1; i < sizeof(A) / sizeof(A[0]); i++)
    {

    // Create a temporary Node
    temp = new Node;

    // Populate temporary Node
    temp->data = A[i];
    temp->next = nullptr;

    // last's next is pointing to temp
    last->next = temp;
    last = temp;
  }

  Node *p = head;
  // displayLL(head);

  return 0;
}