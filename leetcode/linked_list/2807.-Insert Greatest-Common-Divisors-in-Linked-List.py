# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def gcd(a, b):
          while b:
            a, b = b, a % b
          return a
        
        # if not head or not head.next:
        #   return head
        
        # current = head
        # while current and current.next:
        #   gcd_val = gcd(current.val, current.next.val)
        #   new_node = ListNode(gcd_val)
        #   new_node.next = current.next
        #   current.next = new_node
        #   # move the current to the next node
        #   current = new_node.next

        # return head

        # check condition
        if (head.val and head.next) == NULL:
          return head

        c = head

        while c.val and c.next != NULL:
          gcd_val = gcd(c.val, c.next.val)
          new_node = gcd_val
          new_node.next = c.next
          c.next = new_node
          c = c.next.next
      return head

