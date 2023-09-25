function Person() {
  
}

let friend = new Person()

function hasPrototypeProperty(object, name){ 
  console.log(name, name in object)
  console.log(!object.hasOwnProperty(name))
  return !object.hasOwnProperty(name) && (name in object); 
 } 

// console.log(friend === friend)
// console.log(friend.__proto__ === Person.prototype)

// console.log(friend.constructor === Person.prototype.constructor)

console.log('constructor' in friend)
console.log(friend.hasOwnProperty('constructor')) //false

console.log(hasPrototypeProperty(friend, 'constructor'))
console.log(friend)
console.log(Person.prototype)