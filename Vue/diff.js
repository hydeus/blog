/**
 * vue对比vdom不同采用<<递归>>
 *  
 * vue diff
 * 比较两个数组的不同，并返回新数组，新数组包含两个数组的内容，并不重复
 * diff算法的核心是采用双指针来完成的，即快慢指针、对撞指针、碰撞指针
 * 
 * 1. 前前，后后，前后，后前（第一个都是旧节点）
 * 2. 遍历旧节点拿到key，再判断key是否存在，存在只是更新，
 *        不存在 ===》 创建元素
 *        存在
 *            是否同一元素
 *                是 ===》更新属性
 *                否 ===》创建元素
 * 3. 最后跳出while循环，再判断
 *        oldStartIdx > oldEndIdx 说明新节点的内容大于旧节点，就新增
 *        newStartIdx > newEndIdx 说明新节点内容小于旧节点，就删除旧节点
 */

function vueDiff(oldCh, newCl) {
  // 旧节点
  var oldStartIdx = 0
  var oldStartNode = oldCh[0]
  var oldEndIdx = oldCh.length - 1
  var oldEndNode = oldCh[oldCh.length - 1]

  // 新节点
  var newStartIdx = 0
  var newEndIdx = newCl.length - 1
  var newStartNode = newCl[0]
  var newEndNode = newCl[newCl.length - 1]

  var oldKeyToIdx, idxInOld, vnodeToMove, refElm

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    // 旧数组开始节点不存在
    if (!oldStartNode) {
      oldStartNode = oldCh[++oldStartIdx]
    }
    // 旧数组结束节点不存在
    else if (!oldEndNode) {
      oldStartNode = oldCh[++oldStartIdx]
    }
    // 判断旧的开始节点与新的开始节点是否为同一元素
    else if (oldStartNode === newStartNode) {
      oldStartNode = oldCh[++oldStartIdx]
      newStartNode = newCl[++newStartIdx]
    }
    // 判断旧的结束节点与新的结束节点是否为同一元素
    else if (oldEndNode === newEndNode) {
      oldEndNode = oldCh[--oldEndIdx]
      newEndNode = newCl[--newEndIdx]
    }
    // 判断旧的开始节点与新的结束节点是否为同一元素
    else if (oldStartNode === newEndNode) {
      oldStartNode = oldCh[++oldStartIdx]
      newEndNode = newCl[--newEndIdx]
    }
    // 判断旧的结束节点与新的开始节点是否为同一元素
    else if (oldEndNode === newStartNode) {
      oldEndNode = oldCh[--oldEndIdx]
      newStartNode = newCl[++newStartIdx]
    }
    // 都不是 
    else {
      if (!oldKeyToIdx) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
      idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)

      if (!idxInOld) {
        // create
      } else {
        vnodeToMove = oldCh[idxInOld]
        if (sameVnode(vnodeToMove, newStartVnode)) {
          // update
        } else {
          // create
        }
      }
      newStartNode = newCl[++newStartIdx]
    }
  }

  if (oldStartIdx > oldEndIdx) {
    // addNodes
  } else if (newStartIdx > newEndIdx) {
    // remove oldCh
  }
}


var oldCh = [1, 3, 5, 7, 9, 6, 9, 2, 4];
var newCl = [1, 3, 4, 5, 6, 7, 8, 9, 10];

function diff(oldCh, newCl) {
  
}


