let num = 1
const a = {
  x: 1,
  valueOf: function() {
    return num++
  }
}
/*
  默认valueOf是返回这个对象，如果涉及数字运算，则会调用对象这个方法
  字符串的话会调用toString
*/
// console.log(typeof a.x)
// console.log(a * 1)
// console.log(a * 1)
// console.log(a * 1)
// console.log(a * 1)
if(a == 1) {
  console.log('hh')
}
if(a === 1 && a === 2 && a === 3) {
  console.log('hello')
}
const b = {
  x: 1
}
console.log(b * 1) //NaN