const promise = new Promise((resolve, reject) => {
  resolve('aaa')
})

promise.then((res) => {
  console.log('第一个then方法', res)
  return 'bbb'
}).then((res) => {
  console.log('第二个then方法', res)
  return 'ccc'
}).then((res) => {
  console.log('第三个then方法', res)
})

promise.then((res) => {
  console.log("添加第二个then方法", res)
})