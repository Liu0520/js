console.log("script start");

setTimeout(function() {
  console.log('setTimeout1')

  new Promise(function (resolve) {
    resolve()
  }).then(function () {
    new Promise(function (resolve) {
      resolve()
    }).then(function () {
      console.log('then4')
    })
    console.log("then2")
  })
})

new Promise(function (resolve) {
  console.log('promise1');
  resolve()
}).then(function () {
  console.log('then1')
})

setTimeout(function () {
  console.log("setTimeout2");
})

console.log('2');

queueMicrotask(() => {
  console.log('queueMicroTask1');
})

new Promise(function (resolve) {
  resolve()
}).then(function () {
  console.log('then3')
})

console.log("script end");