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
    // while(p != nullptr) {
    //     cout << p->data << " ";
    //     p = p->next;
    // }
    // use recusvie method
    if (p != nullptr)
    {
        cout << p->data << " ";
        displayLL(p->next);
    }
}

int search_element(Node* p, int target) {
    int count = 0;
    while(p) {
        if(p->data == target) {
            cout << "found at index: "<< count << endl;
            return p->data;
        } else {
            count++;
            p=p->next;
        }
    }
    
    // optimize search_element (move to front method)
//    Node *q = nullptr;
//    while(p!=nullptr){
//      if(p->data == target) {
//        q->next = p->next;
    //    p->next[0] = first // first address of the 1st element LL.
//        p->next = first;
    //    first takes the current value of p, before swap.
//        first = p;
//        return p;
//      }
//      q = p;
//      p=p->next;
//    }

    return 0;
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
    cout << search_element(head, 10);
    // displayLL(head);

    return 0;
}