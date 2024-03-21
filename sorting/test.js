// const obj = {
//   [Symbol.iterator](){
//       return {
//         next: function() {
//           return {
//             done: false,
//             value: 3
//           }
//         }
//       }
//   }
// }
// for(const key of obj) 
//   console.log(key)

function* foo(x) {
  var y = x * (yield)
  return y
}

var it = foo(6)
it.next()
console.log(it.next().value)

var res = it.next(7)
console.log(res.value)