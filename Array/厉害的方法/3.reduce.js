/**
 * reduce 不改变原数组，
 * 用来将一个数组归纳成一个单独的值
 */

const arr = [1, 3, 2, 4, 5, 6]

console.log(arr.reduce((prev, curr) => prev += curr, 0))