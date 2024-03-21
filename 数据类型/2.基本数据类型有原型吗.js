const num1 = 3
// 实际上
/*
  const num3 = new Number(3)
  num1 = num3.__proto__
  num3 = null
*/

const num2 = new Number(5)

console.log(num1.__proto__)
console.log(num2.__proto__)
console.log(num1.__proto__ === num2.__proto__)

console.log(num1 instanceof Number)
console.log(num2 instanceof Number)
/*
  为什么基本数据类型会有实例呢？

  为了便于操作基本类型值，ECMAScript 还提供了 3 个特殊的引用类型：Boolean、Number 和 String。这些类型与本章介绍的其他引用类型相似，但同时也具有与各自的基本类型相应的特殊行为。实际上，每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而让我们 能够调用一些方法来操作这些数据。


  所以
*/                                                                                                                                            


