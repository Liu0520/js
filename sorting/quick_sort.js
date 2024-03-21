/**
 * 快速排序
 */

const {  swap } = require("./random_arr")

const arr = [5,1,1,2,0,0]
console.log("排序前", arr)

function quickSort(arr) {

  partition(0, arr.length - 1)

  function partition(left, right) {
    if(left >= right) return
    const pivot = arr[right]

    let i = left;
    let j = right - 1;
    while(i <= j) {
      while(arr[i] < pivot) {
        i++
      }

      while(arr[j] > pivot) {
        j--
      }

      if(i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
      console.log('每一次', arr)
    }
    swap(arr, i, right)
    // console.log(left, j)
    partition(left, j)
    partition(i + 1, right)

  }
  return arr
}

console.log(quickSort(arr))
