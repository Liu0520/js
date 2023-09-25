const obj = {
  name: 'lydia',
  like: ['game', 'book', 'foods'],
  friend: {
    name: 'kobe'
  }
}

function isObject(obj) {
  return (typeof obj === 'object') && (obj !== null)
}

let val 
function observer(obj) {
  const objProxy = new Proxy(obj, {
    set(target, key, newVal, receiver) {
      console.log('监听：设置新值', newVal)
      // target[key] = newVal
      // 1.好处一: 代理对象的目的: 不再直接操作原对象
      // 2.好处二: Reflect.set方法有返回Boolean值, 可以判断本次操作是否成功
      /*
          3.好处三:
            > receiver就是外层Proxy对象
            > Reflect.set/get最后一个参数, 可以决定对象访问器setter/getter的this指向
      */
      Reflect.set(target, key, newVal, receiver)
    },
    get(target, key, receiver) {
      val = Reflect.get(target, key, receiver)
      console.log('监听：获取值', val)
      return isObject(val) ? observer(val) : val
    }
  })

  return objProxy
}

const objProxy = observer(obj)
// objProxy.name = 'gd'
// console.log(objProxy.name)
// console.log(objProxy.like[0])
objProxy.like[0] = 'hhh'
