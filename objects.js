const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
]
const studentsGrade = students.map(student => student.grade)

const book = {
    title: '«Мастер и Маргарита»',
    author: 'Булгаков М.А.',
    year: '1967 г.',
    pages: '480 стр.',
    available: true,  
    
  info(){
    return `${this.title}, ${this.author}, ${this.year}, ${this.pages}`
  }
}
const u1 = { name: "Иван", age: 20, city: "Казань" }
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" }

mergeUsers(user1, user2) {
  
}

countByField(arr, field) {

}

console.log(book.info())
console.log('')

console.log(`title = ${book.title} author = ${book.author}`)
console.log('')

console.log(students.filter(students => students.passed == true))
console.log(students.find(students => students.grade > 4.5))
console.log(studentsGrade.reduce(
  (counter, adder) => counter + adder,
  0,
))


