function SuperType(name) {
  this.name = name
  this.colors = ['black', 'green', 'yellow']
}

SuperType.prototype.sayName = function() {
  console.log(this.name)
}

function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name)
  this.age = age
}

// 继承方法
SubType.prototype = new SuperType()
// 更改constructor指向
SubType.prototype.constructor = SubType

SubType.prototype.sayAge = function() {
  console.log(this.age)
}

let instance1 = new SubType("Nicholas", 29); 
instance1.colors.push("black"); 
console.log(instance1.colors); // "red,blue,green,black" 
instance1.sayName(); // "Nicholas"; 
instance1.sayAge(); // 29 
let instance2 = new SubType("Greg", 27); 
console.log(instance2.colors); // "red,blue,green" 
instance2.sayName(); // "Greg"; 
instance2.sayAge(); // 27 

/*
  唯一缺点：调用了两次构造函数，生成了两份实例（造成不必要地内存开销）
  一次是在子类构造函数里
  一次是在设置原型上

*/