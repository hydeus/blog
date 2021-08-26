/*
 * @Author: wuhai@richinfo.cn 
 * @Date: 2021-08-24 10:00:28 
 * @Description: 链表:存贮有序元素的集合, 但是不同于数组, 每个元素是一个存贮元素本身的节点和指向下一个元素引用组成要想访问链表中间的元素,需要从起点开始遍历找到所需元素
 */

class Node {
  constructor(element = null) {
    this.element = element // 当前节点
    this.next = null // 下一个节点
    this.prev = null // 上一个节点
  }
}


class LinkedList {
  constructor() {
    this.head = new Node('head')
  }

  // 查找某一节点
  find(item) {
    let current = this.head

    while(current.element !== item) {
      current = current.next
    }

    return current
  }

  /**
   * 向某一元素后面添加新节点
   * @param {*} target 目标元素
   * @param {*} item  新元素
   */
  append(target, item) {
    let node = new Node(item)
    let current = this.find(target)

    current.next = node
  }

  /**
   * 查找某一节点的上一节点
   * @param {*} item 
   * @returns 
   */
  findPrev(item) {
    let current = this.head
    while(current.next && current.next.element !== item) {
      current = current.next
    }

    return current
  }

  /**
   * 删除节点
   * @param {*} item 
   */
  remove(item) {
    let prevNode = this.findPrev(item)
    if (prevNode.next !== null) prevNode.next = prevNode.next.next
  }

  /**
   * 编辑某个节点
   * @param {*} target 
   * @param {*} item 
   */
  edit(target, item) {
    let current = this.find(target)
    current.element = item
  }
}

const linkedList = new LinkedList()
console.log(linkedList)

linkedList.append('head', 2)
linkedList.append(2, 3)
linkedList.append(3, 4)
linkedList.append(4, 5)
console.log(JSON.stringify(linkedList))


console.log(linkedList.find(3))
console.log(linkedList.findPrev(3))

linkedList.remove(3)
console.log(JSON.stringify(linkedList))










