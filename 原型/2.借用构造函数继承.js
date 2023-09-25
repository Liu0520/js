function SuperType() {
  this.colors = ['green', 'blue', 'yellow']
}

function SubType() {
  SuperType.call(this)
}

let instance1 = new SubType()
instance1.colors.push('black')
console.log(instance1)

let instance2 = new SubType()
instance2.colors.push('pink')
console.log(instance2.colors)

/*
  优点：
    1.可以实现多继承
    2.解决了原型链中子类共享引用类型问题（原型继承的缺点）
    3.可以向父类构造函数传参（原型继承的缺点）

  缺点：
    1.只能继承父类的属性和方法，不能继承父类原型属性和方法
    2.实例并不是父类的实例，只是子类的实例(instance1 instance SuperType 为 false)
*/