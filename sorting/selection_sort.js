/**
 *  选择排序   n²
 *  记录每次最小或最大值的索引，循环结束后交换
 */

const { arr, swap } = require("./random_arr")
console.log(arr)

function selectionSort() {
  let indexOfMin = 0
  for (let i = 0; i < arr.length; i++) {
    indexOfMin = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexOfMin] > arr[j]) indexOfMin = j
    }
    swap(arr, i, indexOfMin)
  }
  return arr
}

console.log(selectionSort(arr))
