/**
 * 牛客网地址：https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&tqId=23278&ru=/ta/sql-quick-study&qru=/ta/sql-quick-study/question-ranking
 * JZ3 从尾到头打印链表
 */


 /*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    let vals = [];
    if(head === null)
        return vals;
    let cur = head;
    while(cur !== null) {
        vals.unshift(cur.val);
        cur = cur.next;
    }
    return vals;
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};