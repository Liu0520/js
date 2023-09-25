const nums = [2, 7, 11, 15]
const target = 9

// twoSum(nums, target) = [0, 1]
function twoSum(nums, target) {
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const temp = target -num
    if(temp in obj) {
      return[obj[temp], i]
    }
    obj[num] = i
  }
  // const arr = []
  // for(const item of Object.keys(obj)) {
  //   const num = target - item
  //   if(num in obj) {
  //     arr.push(obj[num])
  //   }
  // }
  return arr
}

const arr = twoSum(nums, target)
console.log(arr)
