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

// В программе задана переменная values, которая хранит в себе массив. Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. Результат выведите в консоль в виде булевого значения (true, если содержит, и false, если нет).



const values = [1, 185, 11111, 980]


let findSmt
newArr = []
values.forEach(element => {
    newArr.push(String(element))
});

findSmt = newArr.find(el => el.length == 4)

if (findSmt) {
    console.log(true)
} else {
    console.log(false)
}

// В программе задана переменная users, которая хранит в себе массив. Элементы данного массива являются объектами. Определите индекс элемента, значение свойства role которого содержит больше одного слова. Результат выведите в консоль разработчика.

users = [
    {login: "user1", role: "Admin"},
    {login: "user2", role: "State user"},
    {login: "user3", role: "Moderator"}
]

users.forEach(element => {
    for (let i = 0; i < element.role.length; i++) {
        if (element.role[i] == ' ') {
            console.log(users.indexOf(element))
        }
    }
});


// В программе задана переменная array, которая хранит в себе двумерный массив. Его элементы — массивы, состоящие из чисел. Отсортируйте массив по количеству элементов вложенного массива по возрастанию. Результат выведите в консоль.


array = [[1,2,3],[1,2],[1,2,3,4]]

array.sort((a,b) => a.length - b.length)

console.log(array)



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


// В программе задана переменная words, которая хранит в себе массив строковых значений. Напишите скрипт, который считает количество палиндромов и непалиндромов в массиве words. Результат должен представлять собой массив из двух элементов, где первое значение — количество палиндромов, а второе — непалиндромов.


words = ["Казак","Комок","шалаш"]
countPolindroms = 0
countNoPolindroms = 0
result = []

words.forEach(element => {
    if (element.toLowerCase() == element.toLowerCase().split("").reverse().join("")) {
        countPolindroms++
    } else {
        countNoPolindroms++
    }
});

result.push(countPolindroms)
result.push(countNoPolindroms)

console.log(result)


// В программе задана переменная dates, которая хранит в себе строковое значение. В данной строке хранятся значения дат в формате ДД:ММ:ГГГГ, которые разделены пробелами. На основе значения переменной dates сформируйте новый массив, каждый элемент которого содержит одну дату переменной dates, преобразованную в формат ДД/ММ/ГГГГ. Выведите содержимое сформированного массива в консоль.

dates = "23.04.1996 07.10.2002 15.08.1945"


let newStr = dates.replaceAll('.', '/')



let newArr = newStr.split(" ")

console.log(newArr)


// В программе задана переменная numbers, которая хранит массив из чисел. Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, чтобы их итоговая сумма не превышала 50. Результат выведите в консоль.


numbers = [23,4,2,4,3,11,3,12,3,23]

// c  помощью цилка for:
let point = 0;
for (let i = 0; i < numbers.length; i++) {
    point += numbers[i]
    if (point > 50) {
        console.log(i)
        break
    } else if (i == numbers.length - 1) {
        console.log(i+1)
    }
}


//В программе объявлена переменная goods, которая хранит объект со свойствами, описывающими товар. Сформируйте массив, который содержит в начале все названия свойств объекта, а потом все их значения. Результат выведите в консоль.

goods = {
    title: "Самокат", 
    price: 6000,
    good_id: 1
}

let keys = Object.keys(goods)
let values = Object.values(goods)
let fullArr = [...keys, ...values]
console.log(fullArr)

//В программе заданы две переменные article и author, которые содержат объекты. Объект article содержит информацию о статье, а author — об авторе. Сформируйте новый объект, который содержит свойства объектов article и author. Результат выведите в консоль.


article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
}
author = {
    name: "Ричард М.В.",
    age: 43
}

const newArr = Object.assign(article, author)
console.log(newArr)

//В программе задан двумерный массив employee. Удалите у данного массива значение, у которого первый элемент hireDate, и добавьте новое значение ["jobName", "IT PROG"] в конец массива. Результат выведите в консоль.


employee  = [
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["hireDate", "21.10.2015"]
]

let upd = employee.filter(el => el[0] !=="hireDate");

upd.push(["jobName", "IT PROG"]);
console.log(upd)

//В программе задан двумерный массив array. Создайте и вызовите функцию countString(), которая считает количество значений массива array, у которых второй элемент является строкой. Функция countString() должна выводить в консоль сообщение, как в примере.


array = [
    [ "boolean", true ], 
    [ "number", 4 ],
    [ "string", "word" ],
    [ "string", "word" ],
    [ "object", {}]
]

function countString(array) {

let upd = array.filter(el => typeof el[1] == 'string')
let count = upd.length
console.log(`Количество строковых элементов в именованном массиве: ${count}`)
}

countString(array)


// В программе объявлены объекты pet_1 и pet_2. Напишите функцию getName() и присвойте ее объектам pet_1 и pet_2 в качестве метода. При вызове метода getName() он должен вернуть имя и возраст питомца через пробел. Решить задачу необходимо с использованием this.


pet_1 = { 
    name: "Шарик", 
    age: 10 
  };
  
  pet_2 = { 
    name: "Жучка", 
    age: 5
  };
  
  function getName() {
    return [this.name, this.age].join(' ')
  }
  pet_1.getName = getName
  pet_2.getName = getName
  
  
  console.log(pet_1.getName(), pet_2.getName())


  // В программе объявлен объект input и функция sayHi(), которая выводит в консоль сообщение из примера. Используя метод присвоения контекста, свяжите контекст объекта input с функцией sayHi() и вызовите функцию sayHi().


input = {
    id: 1,
    value: "Добрый вечер",
    firstName: "Григорий",
    lastName: "Стрельников" 
}

function sayHi() {
    console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
}

const bindmethod = sayHi.bind(input)

bindmethod()
