/**
 * 队列
 * 先进先出
 */

class Queue {
  constructor(items = []) {
    this.items = items
  }

  // 进队列
  enqueue(item) {
    this.items.push(item)
  }

  // 出队列
  dequeue() {
    return this.items.shift()
  }

  // 队列头部
  front() {
    return this.items[0]
  }

  // 清空队列
  clear() {
    this.items = []
  }

  // 队列长度
  get size() {
    return this.items.length
  }

  /**
   * 队列是否为空
   * returns boolean
   * 为空：true 不为空：false
   */
  get isEmpty() {
    return !this.items.length
  }

  print() {
    console.log(this.items.toString())
  }
}


const queue = new Queue()
console.log(queue.isEmpty) // true

queue.enqueue("John")
queue.enqueue("Jack")
queue.enqueue("Camila")
console.log(queue.size) // 3
console.log(queue.isEmpty) // false
queue.dequeue()
queue.dequeue()
console.log(queue.size) // 1