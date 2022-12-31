// В программе задана переменная randValues, которая хранит в себе массив. Его элементы могут являться как строковыми, так и числовыми значениями. Отсортируйте массив следующим образом:
// В начале массива должны быть все числовые значения по возрастанию
// В конце все строковые, упорядоченные по алфавиту
// Результат выведите в консоль.


randValues = ["Банан", 3, "Апельсин", 2, "Вишня"]
let arrNum = [];
let arrStr = [];
let result = []
randValues.forEach(element => {
    if (typeof element == 'string') {
        arrStr.push(element)
    } else if (typeof element == 'number') {
        arrNum.push(element)
    }
});


arrNum.sort((a,b) => a - b)
arrStr.sort()
for (key of arrNum) {
    result.push(key)
}
for (key of arrStr) {
    result.push(key)
}
console.log(result)
