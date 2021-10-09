function randomsort(a, b) {
  return Math.random() > .5 ? -1 : 1; //通过随机产生0到1的数，然后判断是否大于0.5从而影响排序，产生随机性的效果。
}
var arr = [1, 2, 3, 4, 5];
console.log(arr.sort(randomsort));


var arr1 = [1, 2, 3, 4, 5];

var temp = arr1.sort(() => Math.random() - 0.5);
console.log(temp);




function Foo() {
  Foo.a = function() {
    console.log(1)
  }
  this.a = function() {
    console.log(2)
  }
}
Foo.prototype.a = function() {
  console.log(3)
}
Foo.a = function() {
  console.log(4)
}
Foo.a(); // 4 全局
let obj = new Foo();
obj.a(); // 2 
Foo.a(); // 1 实例化过后把上面的覆盖了
