/**
 * JZ36 两个链表的第一个公共结点
 * https://www.nowcoder.com/practice/6ab1d9a29e88450685099d45c9e31e46?tpId=13&tqId=23257&ru=/ta/sql-quick-study&qru=/ta/sql-quick-study/question-ranking
 */

 /*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    if(pHead1 === null || pHead2 === null) {
        return null;
    }
    
    let len1 = 0, len2 = 0;
    let cur1 = pHead1, cur2 = pHead2;

    while(cur1 !== null) {
        len1++;
        cur1 = cur1.next;
    }
    while(cur2 !== null) {
        len2++;
        cur2 = cur2.next;
    }
    cur1 = pHead1;
    cur2 = pHead2;
    
    let distance = len1 > len2 ? len1-len2 : len2-len1;
    while(len1 > len2 && distance > 0) {
        cur1 = cur1.next;
        distance--;
    }
    while(len2 > len1 && distance > 0) {
        cur2 = cur2.next;
        distance--;
    }
    
    while(cur1 !== null && cur2 !== null) {
        if(cur1 === cur2) {
            return cur1;
        }
        cur1 = cur1.next;
        cur2 = cur2.next;
    }
    
    return null;
}
module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
};