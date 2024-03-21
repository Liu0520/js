/**
 *  插入排序：扑克牌保持手中的扑克按照顺序
 *  稳定
 */

const { arr } = require("./random_arr")
console.log(arr)
function insertionSort(arr) {
  let temp
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i]
    let j = i
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}

console.log(insertionSort(arr))
    