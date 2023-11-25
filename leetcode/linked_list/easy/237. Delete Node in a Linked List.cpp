// https://leetcode.com/problems/delete-node-in-a-linked-list/description/
#include <bits/stdc++.h>
using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */

struct ListNode {
    int val;
    ListNode *next;
};

class Solution {
public:
    void deleteNode(ListNode* node, int pos) {
        ListNode *q = node;

        for(int i=0;i<pos-1;i++) {
            node = node->next;
            q->next = node;
        }
        node->next = node->next->next;
        delete node->next;
    }
};

int main() {
    // create a test case for deleteNode function
    ListNode *head = new ListNode;

    head->val = 1;
    head->next = new ListNode;
    head->next->val = 2;
    head->next->next = new ListNode;
    head->next->next->val = 3;
    head->next->next->next = new ListNode;
    head->next->next->next->val = 4;
    head->next->next->next->next = new ListNode;

    Solution s;
    s.deleteNode(head, 2);

    // print the linked list
    while(head != NULL) {
        cout << head->val << " ";
        head = head->next;
    }


    return 0;
}