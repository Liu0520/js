function inheritPrototype(subType, superType) {
  let prototype = Object.create(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}

function SuperType(name) { 
  this.name = name; 
  this.colors = ["red", "blue", "green"]; 
 } 

 SuperType.prototype.sayName = function() { 
  console.log(this.name); 
 }; 

 function SubType(name, age) { 
  SuperType.call(this, name);
  this.age = age; 
} 

inheritPrototype(SubType, SuperType); 
SubType.prototype.sayAge = function() { 
 console.log(this.age); 
}; 
