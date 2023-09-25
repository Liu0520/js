function Person(brain) {
  this.brain = brain;

  this.others = {
      other1: 1,
      other2: 2
  };
  this.setBrain = function () {
      console.log("set brain");
  }
}

Person.prototype.getBrain = function () {
  console.log(this.brain)
}

Person.prototype.age = 100;
Person.prototype.like = {
  color: 'red',
}

function JoestarFamily(name) {
  this.name = name
  this.sayName = function() {
      console.log(this.name)
  }
}

JoestarFamily.prototype = Object.create(Person.prototype); // 重新赋值原型，原先 JoestarFamily.prototype 上的 constructor 被抹除

JoestarFamily.prototype.constructor = JoestarFamily // 指回构造函数

var johnny = new JoestarFamily('johnny')
var elaine = new JoestarFamily('elaine')
console.log(johnny, elaine)

function object(o) { 
  function F() {} 
  F.prototype = o; 
  return new F(); 
 } 