// https://leetcode.com/problems/intersection-of-two-linked-lists/

// solution 1:
var getIntersectionNode = function (headA, headB) {
    // find length of both LL
    let list1Len = 0;
    let list2Len = 0;

    // assign tmp pointers to both head
    let l1_tmp = headA;
    let l2_tmp = headB;

    // calc length of LL-1
    while (l1_tmp) {
        list1Len++;
        l1_tmp = l1_tmp.next;
    }
    // calc length of LL-2
    while (l2_tmp) {
        list2Len++;
        l2_tmp = l2_tmp.next;
    }

    // find diff. b/w Length
    let diff = Math.abs(list1Len - list2Len);

    // if LL-1 length is greater thn LL-2's length thn >> longerLLHead: LL-1 & tmp2: LL-2
    let longerLLHead; // head of LL who's length is greater
    let tmp2; // remaining LL will be tmp2
    let longerLen;

    // if LL-1 length is greater thn
    if (list1Len > list2Len) {
        longerLLHead = headA; // longerHead => headA
        tmp2 = headB; // tmp2 (remain) => headB
        longerLen = list1Len; // longerLen => LL-1's length
    } else {
        // else
        longerLLHead = headB; // longerHead => headB
        tmp2 = headA; // tmp2 (remain) => headB
        longerLen = list2Len; // longerLen => LL-1's length
    }

    // set counter to (LongerLen - Diff) which is length of remaining linked list
    let counter = longerLen - diff;
    // skipping extra node from longer LL
    while (diff) {
        longerLLHead = longerLLHead.next;
        diff--;
    }

    // run a loop while we have a length (both LL's length will be same bcoz we already skipped extra nodes from longer Linked List)
    while (counter) {
        // if we find Same node thn break
        if (longerLLHead == tmp2) {
            break;
        }
        // else: go forward
        longerLLHead = longerLLHead.next;
        tmp2 = tmp2.next;
        counter--;
    }

    // return node from where node are equal (insertion point)
    return longerLLHead; // return tmp2 (both will be same)
};

// solution 2:
var getIntersectionNode = function (headA, headB) {
    if (headA == null || headB == null) {
        return null;
    }

    let tmp1 = headA;
    let tmp2 = headB;

    while (tmp1 != tmp2) {
        if (tmp1 != null) {
            tmp1 = tmp1.next;
        } else {
            tmp1 = headB;
        }
        if (tmp2 != null) {
            tmp2 = tmp2.next;
        } else {
            tmp2 = headA;
        }
    }
    return tmp1;
};
