console.time("法1")
const arr1 = []
for (let i = 0; i < 10000000; i++) {
  arr1[i] = 1
}
console.timeEnd("法1")

console.time("法2")
const arr2 = []
arr2[10000000 - 1] = 1
for (let i = 0; i < 10000000; i++) {
  arr2[i] = 1
}
console.timeEnd("法2")

/**
 * 法1: 178.224ms
 * 法2: 1.408s
 *
 * 法1为数组的快速模式
 * 法2为数组的字典模式
 */
