/**
 *  归并排序：  稳定
 */

// const { arr } = require('./random_arr')
const arr = [27,3,25,25,24,18,11,25,15,5]
console.log(arr)

function mergeSort(arr) {
  if(arr.length > 1) {
    const { length } = arr
    const mid = Math.floor(length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid, length))
    arr = merge(left, right)
  }
  return arr
}

function merge(left, right) {
  let i = 0, j = 0;
  const result = []
  while(i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++])
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}


console.log(mergeSort(arr))
