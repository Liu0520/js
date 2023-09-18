const arrayLike = {
  0: 3,
  1: 4,
  2: 5,
  length: 3
}

console.log(Array.from(arrayLike))
console.log(Array.prototype.slice.call(arrayLike))
console.log(Array.prototype.concat.apply([], arrayLike))
console.log(Array.apply(null, arrayLike))