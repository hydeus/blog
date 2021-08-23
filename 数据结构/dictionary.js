/**
 * 字典
 * 类似对象，以key/value存储值
 */

class Dictionary {
  constructor() {
    this.item = {}
  }

  // 新增属性
  set(key, value) {
    this.item[key] = value
  }

  // 获取属性
  get(key) {
    return this.item[key]
  }

  // 删除属性
  remove(key) {
    delete this.item[key]
  }

  get keys() {
    return Object.keys(this.item)
  }

  get values() {
    return Object.values(this.item)
  }
}






const dictionary = new Dictionary();
dictionary.set("Gandalf", "gandalf@email.com");
dictionary.set("John", "johnsnow@email.com");
dictionary.set("Tyrion", "tyrion@email.com");

// console.log(dictionary);
console.log(dictionary.keys);
console.log(dictionary.values);
console.log(dictionary.item);