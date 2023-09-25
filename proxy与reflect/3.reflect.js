// 可以利用Reflect.construct实现类似继承中借用构造函数的功能

function Person(name, age) {
  this.name = name
  this.age = age
}

function Stu() {
  // 方式一：借用构造函数
  // Person.call(this, name, age)
}

// const stu = new Stu('lilei', 20)
// console.log(sut)

const stu = Reflect.construct(Person, ['lilei', 20], Stu)
console.log(stu)