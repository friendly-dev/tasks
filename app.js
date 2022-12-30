// В  программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. На основе массива values сформируйте новый массив result, который является фрагментом values. Новый массив должен начинаться с первого вхождения булевого значения и заканчиваться последним вхождением булевого значения в массив values. Выведите получившийся массив в консоль..


values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"]

let result = []
let index1 = values.indexOf(true)
let index2 = values.lastIndexOf(false)
console.log(index1)
console.log(index2)
result = values.slice(index1, index2 + 1)

console.log(result)

