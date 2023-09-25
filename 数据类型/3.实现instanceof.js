function myInstanceof(instance, conFn) {
  let instancePro = instance.__proto__
  let conFnPrototype = conFn.prototype
  console.log(instancePro,conFnPrototype)
  while(true) {
    if(instancePro === null) return false
    if(instancePro === conFnPrototype) return true
    instancePro = instancePro.__proto__

  }
}

function Dog() {}

const dog = new Dog()
console.log(dog instanceof Dog)
console.log(myInstanceof(dog, Dog))