// 将list转换为tree
function array2tree(data) {
  // 删除所有 children,以防止多次调用
  data.forEach(function(item) {
    delete item.children;
  });
  // 将数据存储为 以 id 为 KEY 的 map 索引数据列
  const map = {};
  data.forEach(function(item) {
    map[item.id] = item;
  });
  const val = [];
  data.forEach(function(item) {
    // 以当前遍历项的pid,去map对象中找到索引的id
    const parent = map[item.pid];
    // 如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      // 如果没有在map中找到对应的索引ID,那么直接把当前的item添加到val结果集中，作为顶级
      val.push(item);
    }
  });
  return val;
}

const data = [
  { id: 1, name: 'boss', pid: 0 },
  { id: 2, name: 'lily', pid: 1 },
  { id: 3, name: 'jack', pid: 1 },
  { id: 4, name: 'john', pid: 2 },
  { id: 5, name: 'boss2', pid: 3 }
];

const temp = array2tree(data);

console.log(temp);