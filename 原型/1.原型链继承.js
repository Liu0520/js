function SuperType() {
  this.property = true
}

SuperType.prototype.getSuperValue = function () {
  return this.property
}

function SubType() {
  this.property = false
  this.hh = "kjkj"
}

// 让
SubType.prototype = new SuperType()

SubType.prototype.constructor = SubType
SubType.prototype.say = "j"
let instance = new SubType()
console.log("say" in new SubType())
console.log(instance)
