const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]
const productsCost = products.map(product => product.price)
const StudentScore = [4, 5, 3, 5, 2, 4, 5, 3]
const Fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"]

const FruitsSorted = Fruits.sort()
const Numbers = [12, 45, 7, 33, 18]

console.log('Средний балл --',(StudentScore.reduce((acc, n) => acc + n, 0)/StudentScore.length).toFixed(2))
console.log(' ')

console.log((StudentScore.filter(n => n>3)).map(n => `Оценка ${n}`))
console.log(' ')


console.log(FruitsSorted.join(', ',5))
console.log(' ')

console.log(products.filter(product => product.price < 10000))
console.log(products.map(product => product.name))
console.log(productsCost.reduce((acc, n) => acc + n, 0))
console.log(' ')

console.log(`Есть ли число больше 40? ${Numbers.some(n => n>40)} Все ли числа больше 40? ${Numbers.every(n => n>40)}`)