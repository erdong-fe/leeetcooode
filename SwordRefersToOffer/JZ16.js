/**
 * JZ16 合并两个排序的链表
 * 牛客网地址：https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337?tpId=13&tqId=23267&ru=/ta/sql-quick-study&qru=/ta/sql-quick-study/question-ranking
 */

 /*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    if(pHead1 === null) {
        return pHead2;
    }
    if(pHead2 === null) {
        return pHead1;
    }
    
    let newHead = null;
    let tail = null;
    let cur1 = null;
    let cur2 = null;
    
    if(pHead1.val < pHead2.val) {
        newHead = pHead1;
        cur1 = newHead.next;
        cur2 = pHead2;
    } else {
        newHead = pHead2;
        cur1 = newHead.next;
        cur2 = pHead1;
    }
    tail = newHead;
    
    while(cur1 !== null && cur2 !== null) {
        if(cur1.val < cur2.val) {
            tail.next = cur1;
            cur1 = cur1.next
        } else {
            tail.next = cur2;
            cur2 = cur2.next;
        }
        tail = tail.next;
    }
    
    if(cur1 !== null) {
        tail.next = cur1;
    } else {
        tail.next = cur2;
    }
    
    return newHead;
}
module.exports = {
    Merge : Merge
};