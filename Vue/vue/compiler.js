/**
 * 模板解析器
 */
import Watcher from './watcher.js';

export default class Compiler {
  constructor(vm) {
    this.el = vm.$el;
    this.vm = vm;
    this.methods = vm.$methods;
    this.compile(vm.$el);
  }

  // 编译模板
  compile(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach(node => {
      // 文本节点
      if (this.isTextNode(node)) {
        this.compileText(node);
      }
      // 元素节点
      else if (this.isElementNode(node)) {
        this.compileElement(node);
      }
      // 有子节点，递归调用
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node);
      }
    })
  }

  compileText(node) {
    // {{ msg }} 
    const reg = /\{\{(.+?)\}\}/;
    const value = node.textContent; // Hello World

    if (reg.test(value)) {
      const key = RegExp.$1.trim(); // msg
      node.textContent = value.replace(reg, this.vm[key]);

      new Watcher(this.vm, key, newVlaue => {
        node.textContent = newVlaue;
      })
    }
  }

  compileElement(node) {
    if (node.attributes.length) {
      Array.from(node.attributes).forEach(attr => {
        // 遍历元素节点的所有属性
        const attrName = attr.name; // v-model v-html v-on:click
        if (this.isDirective(attrName)) {
          let directiveName = attrName.indexOf(':') > -1 ? attrName.substr(5) : attrName.substr(2);
          let key = attr.value; // msg
          // 更新元素节点
          this.update(node, key, directiveName);
        }
      })
    }
  }

  update(node, key, directiveName) {
    // v-model v-text v-html v-on:click
    const updateFn = this[directiveName + 'Updater'];
    updateFn && updateFn.call(this, node, this.vm[key], key, directiveName);
  }

  // 解析v-text
  textUpdater(node, value, key) {
    node.textContent = value;
    new Watcher(this.vm, key, newVlaue => {
      node.textContent = newVlaue;
    })
  }

  // 解析v-model 双向绑定
  modelUpdater(node, value, key) {
    node.value = value;
    new Watcher(this.vm, key, newVlaue => {
      node.value = newVlaue;
    });

    node.addEventListener('input', () => {
      this.vm[key] = node.value;
    });
  }

  // 解析v-html
  htmlUpdater(node, value, key) {
    node.innerHTML = value;
    new Watcher(this.vm, key, newVlaue => {
      node.innerHTML = newVlaue;
    })
  }

  // 解析v-on:click
  clickUpdater(node, value, key, directiveName) {
    node.addEventListener(directiveName, this.methods[key]);
  }

  // 判断是否为文本节点
  isTextNode(node) {
    return node.nodeType === 3;
  }

  // 判断是否为元素节点
  isElementNode(node) {
    return node.nodeType === 1;
  }

  // 判断元素属性是否为指令
  isDirective(attrName) {
    // vue中 v-开头的都是指令
    return attrName.startsWith('v-');
  }
}