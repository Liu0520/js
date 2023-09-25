const f = (function () {
  let count = 0
  // console.log('执行')
  return function() {
    console.log(++count)
  }
  
})()

// f()
// f()

const sym = Symbol('key')
const obj = {
  a: 1,
  [sym]: 2
}

// Object.defineProperty(obj, 'a', {
//   enumerable: false
// })
for(const key in obj) {
  console.log('hahaha',key)
}
console.log(sym in obj)
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyDescriptor(obj, sym))