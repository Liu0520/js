

function requestData(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(url)
    }, 2000);
  })
}

// requestData('http://lydia').then(res => {
//   console.log("res", res)
// })

/*
  要求：
    1.等待第一个网络请求发送后得到数据，再发送第二次网络请求
    2.等待第二次网络请求的结果后，在发送第三次网络请求，以此类推
*/

// 回调地狱
// function getData() {
//   requestData('why').then(res1 => {
//     console.log('res1',res1)
//     requestData(res1 + ' kobe').then(res2 => {
//       console.log('res2', res2)
//       requestData(res2 + ' james').then(res3 => {
//         console.log('res3', res3)
//       }) 
//     })
//   })
// }


// 链式调用
// function getData() {
//   requestData('why').then(res1 => {
//     console.log('res1', res1)
//     return requestData(res1 + ' kobe')
//   }).then(res2 => {
//     console.log('res2', res2)
//     return requestData(res2 + ' james')
//   }).then(res3 => {
//     console.log('res3', res3)
//   })
// }


function* generator() {
  const res1 = yield requestData('why')
  console.log('res1', res1)
  const res2 = yield requestData(res1 + ' kobe')
  console.log('res2', res2)
  const res3 = yield requestData(res2 + ' james')
  console.log('res3', res3)
}

const iterator = generator()
// iterator.next().value.then(res1 => {
//   iterator.next(res1).value.then(res2 => {
//     iterator.next(res2).value.then(res3 => {
//       iterator.next(res3)
//     })
//   })
// })

// 自动执行生成器函数
// function exceGen(fn) {
//   const iterator = fn()
//   function exce(res) {
//     const result = iterator.next(res)
//     if(result.done) return
//     result.value.then(res => {
//       exce(res)
//     })
//   }
//   exce()
// }

// exceGen(generator)

// 最终实现
async function getData() {
  const res1 = await requestData('why')
  console.log('res1', res1)
  const res2 = await requestData(res1 + ' kobe')
  console.log('res2', res2)
  const res3 = await requestData(res2 + ' james')
  console.log('res3', res3)
}
getData()