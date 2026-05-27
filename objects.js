const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
]
const studentsGrade = students.map(student => student.grade)

const sampleBook = {
  title: '«»',
  author: '',
  year: '',
  pages: '',
  available: true,
  rating:0,
}

// okak

const book = {
  ...sampleBook,
  title: '«Мастер и Маргарита»',
  author: 'Булгаков М.А.',
  year: '1967 г.',
  pages: '480 стр.',
  available: true,

  info() {
    return `${this.title}, ${this.author}, ${this.year}, ${this.pages}`
  }
}
const u1 = { name: "Иван", age: 20, city: "Казань" }
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" }

function mergeUsers(user1, user2) {
  if (user2.age !== undefined) {
    user1.age = user2.age
  }
  if (user2.name !== undefined) {
    user1.name = user2.name
  }
  if (user2.city !== undefined) {
    user1.city = user2.city
  }
  if (user2.email !== undefined) {
    user1.email = user2.email
  }
}

function countByField(arr, field) {
  const array = arr.map(arr => arr[field])
  const arraycount = array.length 
  let trueCounter = 0
  let falseCounter = 0

  // console.log(arraycount) это был технический прикол :)

  if (arraycount !== 0) {
    for (const item of arr) {
      if (item[field]) {
        trueCounter++;
      } 
      else {
        falseCounter++;
      }
      
    }
  }console.log(`true: ${trueCounter}, false:${falseCounter}`)
}
console.log(book.info())
console.log('')

console.log(`title = ${book.title} author = ${book.author}, rating ${book.rating}`)
console.log('')

console.log(students.filter(students => students.passed == true))
console.log(students.find(students => students.grade > 4.5))
console.log(studentsGrade.reduce(
  (counter, adder) => counter + adder,0,
))
console.log("");


mergeUsers(u1, u2)
console.log(u1)
console.log('')

countByField(students, "passed")
