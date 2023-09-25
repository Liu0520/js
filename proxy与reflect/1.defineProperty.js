const obj = {
  name: 'lydia',
  
}

let _name = obj.name
Object.defineProperty(obj, 'name', {
  set: function(newVal) {
    console.log('监听： 设置新值', newVal)
    _name = newVal
  },
  get: function() {
    console.log('监听： 获取值', _name)
    return _name
  }
})

console.log(obj.name)
obj.name = 'kobe'
