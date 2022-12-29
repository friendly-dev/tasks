partNumbers = ["ER1234COM", "FIV987451RU","GE123JO","P4321NO"]
let regexp= /\d\d\D\D$/;


let articules = partNumbers.filter (e => e.search(regexp) != -1)
console.log(articules)

// В программе задана переменная layout, которая хранит в себе строковое значение. Данная строка содержит в себе часть HTML-верстки с числами. На основе значения layout сформируйте массив из чисел, которые встречаются в верстке. Если число четное, возведите его в квадрат, в ином случае оставьте без изменений. Полученный массив выведите в консоль. Если строка layout не содержит чисел, выведите пустой массив.
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

