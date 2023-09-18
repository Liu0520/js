/**
 * map 不改变原数组，返回数组的拷贝map后的
 * 如果数组格式与所需要的格式不一样，就用map
 */

const cart = [
  { name: "bob", price: 6.77 },
  { name: "jack", price: 8.56 },
]


// 得到name
console.log(cart.map(item => item.name)) //['bob', 'jack']

