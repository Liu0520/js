const obj = {
  name: "why",
  age: 18
}

let val
const objProxy = new Proxy(obj, {
  set: function(target, key, newVal, receiver) {
    // target[key] = newValue
    // 1.好处一: 代理对象的目的: 不再直接操作原对象
    // 2.好处二: Reflect.set方法有返回Boolean值, 可以判断本次操作是否成功
    console.log('监听：设置新值', newVal)
    const isSuccess = Reflect.set(target, key, newVal)

    // if (!isSuccess) {
    //   throw new Error(`set ${key} failure`)
    // }
  },
  get: function(target, key, receiver) {
    val = Reflect.get(target, key, receiver)
    console.log('监听：获取值', val)
    return val
  }
})

// 操作代理对象
objProxy.name = "kobe"
console.log(objProxy.name)