const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5, 6, "a", "a", "b", true, true, false]

function delSame1(arr)  {
  return [...new Set(arr)]
}

function delSame2(arr) {
  const temp = []
  arr.forEach(item => {
    !temp.includes(item) && temp.push(item)
  })
  return temp
}

function delSame3(arr) {
  const obj = {}
  arr.forEach(item => {
    obj[item] = item
  })
  return Object.keys(obj)
}

console.log(delSame1(arr))
console.log(delSame2(arr))
console.log(delSame3(arr))