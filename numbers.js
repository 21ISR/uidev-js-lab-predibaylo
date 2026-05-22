const temperature = 36.6789
const a = 17
const b = 5
const RandomNumber = Math.random()*10
const NumberList = [14, -3, 77, 0, -100, 42]
const Number100 = "100"
const Number5 = 5
const NumberSto = "сто"


console.log(temperature.toFixed(1))
console.log('')

console.log(Math.floor(a/b))
console.log('')

console.log(RandomNumber.toFixed(1))
console.log('')

console.log('Проверка isNan()')
console.log(isNaN(Number100/Number5))
console.log(isNaN(NumberSto/Number5))
console.log('')

console.log('Из списка --', NumberList)
console.log('Max - ', Math.max(14, -3, 77, 0, -100, 42))
console.log('Min - ', Math.min(14, -3, 77, 0, -100, 42))
console.log('')
