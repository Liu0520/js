/**
 * sort 改变原数组并返回 默认按照UTF-16 码元值升序排序
 * 参数可以为一个排序函数
 */

const arr = [4, 5, 2, 8, 3, 10]

// console.log(arr.sort()) [ 10, 2, 3, 4, 5, 8 ]

console.log(arr.sort((a, b) => a - b)) //升序
console.log(arr.sort((a, b) => b - a)) //降序
console.log(arr.sort(() => Math.random() - 0.5))

function randomSort(arr) {
  /**
   * 随机数组
   * 逻辑：取牌算法
   * 每次随机取一张牌，放到一边，依次直至最后一张
   */
  let temp = []
  for (let i = arr.length; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * i)
    temp.push(arr[randomIndex])
    arr.splice(randomIndex, 1)
  }
  return temp
}

console.log(randomSort(arr))
