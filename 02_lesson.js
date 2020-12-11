function hello() {
  console.log('Hello', this)
}

const person = {
  name: 'Leonid',
  age: 41,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.groupEnd()
  },
}
person.logInfo.bind(person)()
const lena = {
  name: 'Elena',
  age: 21,
}

// const fnenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23')()
// person.logInfo.call(lena, 'frontend', '8-999-123-12-123')
person.logInfo.apply(lena, ['frontend', '8-999-123-12-123'])

// =====================

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n
//   })
// }
// console.log(multBy(array, 5))

Array.prototype.multBy = function (n) {
  // console.log('multBy', this)
  return this.map(function (i) {
    return i * n
  })
}

console.log(array.multBy(20))
