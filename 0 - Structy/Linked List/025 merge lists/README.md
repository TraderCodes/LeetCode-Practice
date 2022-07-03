merge lists
Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty and contain increasing sorted numbers.

n = length of list 1
m = length of list 2
Time: O(min(n, m))
Space: O(1)


recursive
n = length of list 1
m = length of list 2
Time: O(min(n, m))
Space: O(min(n, m))