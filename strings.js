const sentence = "  javascript — это просто!  "
const Date = "2025-03-15"
const DateSplit = Date.split('-')
const StudentFirstName = 'Иван'
const StudentSecondName = 'Иванов'
const StudentGroup = 'ИСР-21'
const StudentAvgScore = 4.75
const NodeJsDev = "Node.js разработчик"
const NodeJsDevPointSplit = NodeJsDev.split(".")
const NodeJsDevSpaceSplit = NodeJsDev.split(" ")


const okak = "42"
const okakLenght = okak.length



.slice()

console.log((`${(sentence.trim()).slice(0,1).toUpperCase()}${(sentence.trim()).slice(1)}`))

console.log(" ")

console.log(`Студент ${StudentFirstName} ${StudentSecondName}, группа ${StudentGroup}, средний балл: ${StudentAvgScore}`) // дебил дебилыч
console.log(" ")

console.log(`Строка начинается на Node? ${NodeJsDevPointSplit[0] == "Node" ? "Да" : "Нет"}, строка заканчивается на разработчик? ${NodeJsDevSpaceSplit[1] == "разработчик" ? "Да" : "Нет"}`)

console.log(`${DateSplit[0]}.${DateSplit[1]}.${DateSplit[2]}`)
console.log(" ")

console.log(`Длинна строки ${okak} = ${okakLenght}`)
console.log(`${"0".repeat(8 - okakLenght)}${okak}`)