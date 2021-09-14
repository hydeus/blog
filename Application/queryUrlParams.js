/**
 * 获取url中的参数
 */

 function queryParams(name) {
  const temp = location.search.split('?')[1].split('&');
  const temp1 = temp.filter(item => item.includes(name));
  const [temp2, ...rest] = temp1;
  return temp2.split('=')[1];
}
