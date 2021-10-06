/**
 * 牛客网地址：https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca?tpId=13&tqId=23286&ru=/ta/sql-quick-study&qru=/ta/sql-quick-study/question-ranking
 * JZ15 反转链表
 */

 /*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    if(pHead === null)
        return null;
    let pre = null;
    let cur = pHead;
    let next;

    while(cur !== null) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    
    return pre;
}
module.exports = {
    ReverseList : ReverseList
};