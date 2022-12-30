partNumbers = ["ER1234COM", "FIV987451RU","GE123JO","P4321NO"]
let regexp= /\d\d\D\D$/;


let articules = partNumbers.filter (e => e.search(regexp) != -1)
console.log(articules)

// В программе задана переменная layout, которая хранит в себе строковое значение. Данная строка содержит в себе часть HTML-верстки с числами. На основе значения layout сформируйте массив из чисел, которые встречаются в верстке. Если число четное, возведите его в квадрат, в ином случае оставьте без изменений. Полученный массив выведите в консоль. Если строка layout не содержит чисел, выведите пустой массив..
let a = layout.match(/\d+/g)
a = a ? a.map(v => v % 2 ? +v : v * v) : []
console.log(a)


// В программе задана переменная tasks, которая содержит массив. Элементы данного массива являются объектами с ключами title и completed. Сформируйте новый массив titles, который в качестве значений может хранить свойства title из всех значений массива tasks. Результат выведите в консоль.

tasks = [
    {title: "Умыться" , completed: true},
    {title: "Сделать зарядку" , completed: true},
    {title: "Приготовить завтрак" , completed: false}
]


const titles = []
tasks.map(e => titles.push(e.title))

console.log(titles)


// В  программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. На основе массива values сформируйте новый массив result, который является фрагментом values. Новый массив должен начинаться с первого вхождения булевого значения и заканчиваться последним вхождением булевого значения в массив values. Выведите получившийся массив в консоль.


values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"]

let result = []
let index1 = values.indexOf(true)
let index2 = values.lastIndexOf(false)
console.log(index1)
console.log(index2)
result = values.slice(index1, index2 + 1)

console.log(result)