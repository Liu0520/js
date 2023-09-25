// symbol
const sym1 = Symbol()
const sym2 = Symbol('foo')
const sym3 = Symbol('foo')

console.log(sym2 === sym3) //false
console.log(typeof sym1) //symbol

// bigint
const big1 = 62478387564738n
const big2 = BigInt(62478387564738)

console.log(big1 === big2) //true
console.log(typeof big1) //bigint

// 1.使用 typeof 判断,其中null object array 都会被认为是 object
//所有使用 new 调用的构造函数都将返回非基本类型（"object" 或 "function"）。大多数返回对象，但值得注意的例外是 Function，它返回一个函数
console.log('使用typeof判断')
console.log(typeof 2) //number
console.log(typeof true) //boolean
console.log(typeof 'str') //string
console.log(typeof undefined) //undefined
console.log(typeof null) //object
console.log(typeof function () {}) //function
console.log(typeof {}) //object
console.log(typeof []) //object

// 2.使用instanceof 判断引用类型，检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
console.log('instanceof 判断')
console.log(2 instanceof Number) // false
console.log(true instanceof Boolean) // false
console.log('str' instanceof String) // false

console.log([] instanceof Array) // true
console.log(function () {} instanceof Function) // true
console.log({} instanceof Object) // true

// 3.使用constructor属性，更改原型后无法使用contructor来判断

console.log('contructor         判断')
console.log(2 instanceof Number) // false
console.log(true instanceof Boolean) // false
console.log('str' instanceof String) // false

console.log([] instanceof Array) // true
console.log(function () {} instanceof Function) // true
console.log({} instanceof Object) // true

// 4.同样是检测对象obj调用toString方法，obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样，这是为什么？
// 这是因为toString是Object的原型方法，而Array、function等类型作为Object的实例，都重写了toString方法。不同的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写之后的toString方法（function类型返回内容为函数体的字符串，Array类型返回元素组成的字符串…），而不会去调用Object上原型toString方法（返回对象的具体类型），所以采用obj.toString()不能得到其对象类型，只能将obj转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用Object原型上的toString方法。

const a = Object.prototype.toString
console.log('Object.prototype.toString 判断')
console.log(a.apply(2))
console.log(a.call(true))
console.log(a.call('str'))
console.log(a.call([]))
console.log(a.call(function () {}))
console.log(a.call({}))
console.log(a.call(undefined))
console.log(a.call(null))
