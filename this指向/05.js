// setTimeout(() => {
//   console.log(this) // window
// }, 1000)

const obj = {
  // see() {
  //   console.log('哈哈哈')
  // }
  see: function() {
    console.log('哈哈哈哈')
  }
}

console.log(Reflect.ownKeys(obj))