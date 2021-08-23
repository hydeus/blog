/**
 * 栈
 * 先进后出
 */

class Stack {
  constructor() {
    this.items = [];
  }

  // 进栈
  push(item) {
    this.items.push(item)
  }

  // 出栈
  pop() {
    return this.items.pop()
  }

  // 末位
  get peek() {
    return this.items[this.items.length - 1]
  }

  // 是否为空栈
  get isEmpty() {
    return !this.items.length
  }

  // 长度
  get size() {
    return this.items.length
  }

  // 清空栈
  clear() {
    this.items = []
  }
}

// 实例化一个栈
const stack = new Stack()
console.log(stack.isEmpty) // true


// 添加元素
stack.push(5)
stack.push(8)

// 读取属性再添加
console.log(stack.peek) // 8
stack.push(11)

console.log(stack.size) // 3
console.log(stack.isEmpty) // false

stack.pop()

console.log(stack.size) // 2



