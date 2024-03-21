/**
 * 冒泡排序   n²
 *  稳定，即排序前等大小的数字的相对顺序保持不变
 */

const { arr, swap } = require("./random_arr")

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //稍微改进   j < arr.length - i - 1
      //因为每次循环时，最后的数字已经确保不会发生变化了
      if (arr[i] > arr[j]) {
        swap(arr, i, j)
      }
    }
  }
  return arr
}

console.log(arr)
console.log(bubbleSort(arr))
