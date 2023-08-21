// https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false;
    }
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
