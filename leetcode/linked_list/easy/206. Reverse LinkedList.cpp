// https://leetcode.com/problems/reverse-linked-list/description/

#include <bits/stdc++.h>
using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
  ListNode* reverseList(ListNode* head) {
    ListNode* prev = NULL;
    ListNode* curr = NULL;
    ListNode* forw = NULL;
    forw = head;

    while(forw) {
      prev = curr;
      curr = forw;
      forw = forw->next;
      curr->next = prev;
    }
    head = curr;
    return curr;
  }
};

int main() {
  
  return 0;
}

