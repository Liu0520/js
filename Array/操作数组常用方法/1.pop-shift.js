// 1.在起始和末尾添加或删除元素 push/pop  unshift/shift

const arr = [1, 2, 3]
/**
 * push和unshift会返回添加了新元素的数组长度，
 * pop 和 shift 返回删除的元素
 */
arr.push("f") //在数组最后添加f
arr.pop() //删除 g

arr.unshift("v") //在数组起始位添加 v
arr.shift() //删除 b

console.log(arr.push('h')) //4