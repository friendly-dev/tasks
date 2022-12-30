// В программе задана переменная values, которая хранит в себе массив. Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. Результат выведите в консоль в виде булевого значения (true, если содержит, и false, если нет).



const values = [1, 185, 1111, 980]


let findSmt
newArr = []
values.forEach(element => {
    newArr.push(String(element))
});

findSmt = newArr.findIndex(el => el.length == 4)

if (findSmt != -1) {
    console.log(findSmt)
} else {
    console.log('Искомый элемент не был найден')
}
