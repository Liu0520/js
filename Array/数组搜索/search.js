/**
 * indexOf  返回与查找内容完全相同的第一个元素的索引，没找到则返回-1
 * indexof(查找元素，起始位置可选)
 */

const arr = [3, 8, "dh", "你好", { name: "bob" }]
console.log(arr.indexOf("dh"))
console.log(arr.indexOf("dh", 3))

/**
 * findIndex 也是返回索引，没找到则返回-1
 * 但它可以传入一个函数进行匹配，更为灵活
 */
console.log(arr.findIndex((item) => item.name === "bob"))

/**
 * find 返回元素本身，没找到返回undefined
 * 接收函数作为参数
 */

console.log(arr.find((item) => item.name === "ob"))

/**
 * every 每一个元素都符合条件，返回true,否则为false
 * some 只要有一个元素符合条件，就返回true，否则返回为false
 */

const arr1 = [2, 4, 6, 8, 10]
console.log(arr1.every((item) => item % 2 === 0))
const arr2 = [2, 4, 6, 9, 10]
console.log(arr1.some((item) => item % 2 === 0))
