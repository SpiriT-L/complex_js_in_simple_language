// const person = {
//   name: 'Leonid',
//   age: 41,
//   greet: function () {
//     console.log('Greet!')
//   },
// }

const person = new Object({
  name: 'Leonid',
  age: 41,
  greet: function () {
    console.log('Greet!')
  },
})
Object.prototype.sayHello = function () {
  console.log('Hellow!')
}

const lena = Object.create(person)
lena.name = 'Elena'

const str = new String('I am string')
