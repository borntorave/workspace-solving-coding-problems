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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        
        ListNode *sum;
        sum->val = 0;
        sum->next = nullptr;
        int inc = 0;

        while (l1 && l2) {
            if(sum->val > 9) {
                sum->val = 0;
                inc = 1;
            } else {
                inc = 0;
            }
            sum->val += inc;
            sum->val += l1->val;
            sum->val += l2->val;
            l1->next;
            l2->next;
            sum->next;
        }

        return sum;
    }
};