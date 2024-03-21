/**
 * 随机生成一个数组，并且数组里的数字是无序的
 */

const arr = []
for (let i = 0; i < 10; i++) {
  const num = Math.floor(Math.random() * 30)
  arr.push(num)
}

function swap(arr, i, j) {
  // const temp = arr[j]
  // arr[j] = arr[i]
  // arr[i] = temp
  [arr[j], arr[i]] = [arr[i], arr[j]] //数组解构
}

module.exports = {
  swap,
  arr
}
// console.log(module.exports === exports)
